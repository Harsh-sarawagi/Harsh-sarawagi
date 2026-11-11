import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import assert from "node:assert/strict";
await mkdir("qa-output", { recursive: true });
const browser = await chromium.launch({
  headless: true,
  args: [
    "--enable-webgl",
    "--use-angle=swiftshader",
    "--enable-unsafe-swiftshader",
  ],
});
try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
  });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("http://127.0.0.1:4173", { waitUntil: "load" });
  await page.addStyleTag({ content: 'html { scroll-behavior: auto !important; }' });
  await page.locator("#scene.scene-loaded canvas").waitFor();
  assert.equal(await page.locator(".project").count(), 5);
  assert.ok(
    await page
      .locator("#experience")
      .evaluate((el) =>
        Boolean(
          el.compareDocumentPosition(document.querySelector("#work")) &
          Node.DOCUMENT_POSITION_FOLLOWING,
        ),
      ),
    "Experience must precede projects",
  );
  assert.match(
    await page.locator(".achievement-grid").innerText(),
    /Top 0\.02/,
  );
  assert.equal(
    await page.locator(".project > .project-body").count(),
    5,
    "Each image and description must share one project card",
  );
  assert.match(await page.locator(".internship-learning").innerText(), /SDLC/);
  assert.equal(
    await page
      .locator("body")
      .innerText()
      .then((t) => t.includes("FINN")),
    false,
  );
  await page.getByRole("button", { name: "AI & ML" }).click();
  assert.equal(await page.locator(".project:visible").count(), 4);
  await page.getByRole("button", { name: "Web development" }).click();
  assert.equal(await page.locator(".project:visible").count(), 2);
  await page.getByRole("button", { name: "All work" }).click();
  for (const id of ["cp", "rl", "stunt", "rag", "social"]) {
    await page.locator(`.project-visual[data-project="${id}"]`).click();
    await page.locator("dialog[open]").waitFor();
    assert.match(
      await page.locator("#dialog-github").getAttribute("href"),
      /^https:\/\/github.com\/Harsh-sarawagi\//,
    );
    await page.keyboard.press("Escape");
    assert.equal(await page.locator("dialog[open]").count(), 0);
  }
  await page.locator("#motion-toggle").click();
  assert.equal(
    await page.locator("#motion-toggle").getAttribute("aria-pressed"),
    "true",
  );
  const resume = await page.request.get(
    "http://127.0.0.1:4173/documents/Harsh-Sarawagi-Resume.pdf",
  );
  assert.equal(resume.status(), 200);
  assert.equal((await resume.body()).subarray(0, 4).toString(), "%PDF");
  const image = await page.request.get(
    "http://127.0.0.1:4173/images/iit-kanpur.jpg",
  );
  assert.equal(image.status(), 200);
  // Trigger scroll reveals before taking a complete layout capture.
  for (
    let y = 0;
    y < (await page.evaluate(() => document.body.scrollHeight));
    y += 700
  ) {
    await page.evaluate((y) => scrollTo(0, y), y);
    await page.waitForTimeout(90);
  }
  await page.waitForTimeout(800);
  await page.evaluate(() => scrollTo(0, 0));
  await page.screenshot({ path: "qa-output/desktop.png", fullPage: true });
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.waitForTimeout(150);
    const bounds = await page.evaluate(() => ({
      scroll: document.documentElement.scrollWidth,
      width: innerWidth,
    }));
    assert.ok(
      bounds.scroll <= bounds.width,
      `Overflow at ${width}: ${JSON.stringify(bounds)}`,
    );
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => scrollTo(0, 0));
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "About", exact: true })
    .click();
  assert.equal(
    await page.locator(".menu-toggle").getAttribute("aria-expanded"),
    "false",
  );
  await page.evaluate(() => scrollTo(0, 0));
  await page.screenshot({ path: "qa-output/mobile.png" });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload({ waitUntil: "load" });
  assert.equal(
    await page.locator("#motion-toggle").getAttribute("aria-pressed"),
    "true",
  );
  assert.deepEqual(errors, []);
  console.log(
    "PASS: 3D canvas, 5 projects, filters, 5 dialogs, Escape/focus, motion control, resume, image, mobile menu, reduced motion, and no overflow at 320/390/768/1024/1440px. No uncaught browser errors.",
  );
} finally {
  await browser.close();
}
