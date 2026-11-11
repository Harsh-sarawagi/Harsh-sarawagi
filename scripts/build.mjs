import { cp, mkdir, rm, lstat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve, join } from "node:path";

export const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const output = resolve(projectRoot, "dist");

// Only the generated dist folder in this project may be replaced.
if (output !== join(projectRoot, "dist"))
  throw new Error("Invalid build destination");
const existing = await lstat(output).catch(() => null);
if (existing?.isSymbolicLink())
  throw new Error("Build destination must not be a symbolic link");
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(join(projectRoot, "src"), output, { recursive: true });
await cp(join(projectRoot, "public"), output, { recursive: true });
console.log("Static build ready in dist/");
