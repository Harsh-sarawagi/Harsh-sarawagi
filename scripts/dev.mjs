import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import { watch } from "node:fs";
import { resolve, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const sourceRoots = ["src", "public"].map((name) => resolve(root, name));
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".pdf": "application/pdf",
  ".woff2": "font/woff2",
  ".svg": "image/svg+xml",
  ".txt": "text/plain",
};
const clients = new Set();
let refresh;
for (const folder of sourceRoots) {
  watch(folder, { recursive: true }, () => {
    clearTimeout(refresh);
    refresh = setTimeout(
      () => clients.forEach((client) => client.write("data: reload\n\n")),
      150,
    );
  });
}
const reloadScript = `<script>new EventSource('/__dev/events').onmessage=()=>location.reload();</script>`;
const server = http.createServer(async (req, res) => {
  if (req.url === "/__dev/events") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });
    res.write(": connected\n\n");
    clients.add(res);
    req.on("close", () => clients.delete(res));
    return;
  }
  try {
    const pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    for (const sourceRoot of sourceRoots) {
      const path = resolve(
        sourceRoot,
        "." + (pathname === "/" ? "/index.html" : pathname),
      );
      if (!path.startsWith(sourceRoot + sep)) continue;
      if (!(await stat(path).catch(() => null))?.isFile()) continue;
      let body = await readFile(path);
      if (extname(path) === ".html")
        body = body.toString().replace("</body>", reloadScript + "</body>");
      res.writeHead(200, {
        "Content-Type": types[extname(path)] || "application/octet-stream",
        "Cache-Control": "no-store",
      });
      res.end(body);
      return;
    }
    res.writeHead(404).end("Not found");
  } catch {
    res.writeHead(400).end("Invalid request");
  }
});
server.on("error", (error) => {
  console.error(error.message);
  process.exit(1);
});
server.listen(4173, "127.0.0.1", () =>
  console.log("Local portfolio: http://localhost:4173 (live reload enabled)"),
);
