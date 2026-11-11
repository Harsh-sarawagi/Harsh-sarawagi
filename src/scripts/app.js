import { projects } from "../data/projects.js";
const $ = (s) => document.querySelector(s);
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
if (!reduceMotion.matches) {
  document.body.classList.add("js-motion");
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      }),
    { threshold: 0.08 },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}
$(".menu-toggle").addEventListener("click", () => {
  const open = $("nav").classList.toggle("open");
  $(".menu-toggle").setAttribute("aria-expanded", String(open));
  $(".menu-toggle").setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
});
document.querySelectorAll("nav a").forEach((a) =>
  a.addEventListener("click", () => {
    $("nav").classList.remove("open");
    $(".menu-toggle").setAttribute("aria-expanded", "false");
    $(".menu-toggle").setAttribute("aria-label", "Open navigation");
  }),
);
document.querySelectorAll("[data-filter]").forEach((button) =>
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((b) => {
      b.classList.toggle("active", b === button);
      b.setAttribute("aria-pressed", String(b === button));
    });
    document.querySelectorAll(".project").forEach((card) => {
      card.hidden =
        button.dataset.filter !== "all" &&
        !card.dataset.category.split(" ").includes(button.dataset.filter);
      if (!card.hidden) card.classList.add("visible");
    });
  }),
);

const dialog = $("#project-dialog");
let lastTrigger;
document.querySelectorAll("[data-project]").forEach((button) =>
  button.addEventListener("click", () => {
    lastTrigger = button;
    const p = projects[button.dataset.project];
    $("#dialog-title").textContent = p.title;
    $("#dialog-category").textContent = p.category;
    $("#dialog-summary").textContent = p.summary;
    $("#dialog-points").replaceChildren(
      ...p.points.map((t) => {
        const li = document.createElement("li");
        li.textContent = t;
        return li;
      }),
    );
    $("#dialog-tags").replaceChildren(
      ...p.tags.map((t) => {
        const span = document.createElement("span");
        span.textContent = t;
        return span;
      }),
    );
    $("#dialog-github").href = "https://github.com/Harsh-sarawagi/" + p.repo;
    $("#dialog-note").textContent = p.note || "";
    dialog.showModal();
    document.body.style.overflow = "hidden";
  }),
);
$("#close-dialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      dialog.close();
  }
});
dialog.addEventListener("close", () => {
  document.body.style.overflow = "";
  lastTrigger?.focus();
});
$("#copy-email").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("harshsara23@iitk.ac.in");
    $("#copy-status").textContent = "Email copied.";
  } catch {
    $("#copy-status").textContent = "harshsara23@iitk.ac.in — select to copy.";
  }
  setTimeout(() => ($("#copy-status").textContent = ""), 4000);
});
$("#year").textContent = new Date().getFullYear();
for (let i = 0; i < 85; i++) {
  const dot = document.createElement("i");
  const cluster = i % 3;
  const t = i * 2.39996;
  const radius = Math.sqrt(i / 3) * 6;
  dot.style.left = 20 + cluster * 24 + Math.cos(t) * radius + "%";
  dot.style.top = 22 + cluster * 16 + Math.sin(t) * radius * 1.5 + "%";
  dot.style.background = ["#4c385f", "#d8efab", "#eee4f5"][cluster];
  dot.style.width = dot.style.height = 5 + (i % 4) * 2 + "px";
  $(".data-cloud").append(dot);
}
let paused = reduceMotion.matches;
const motionButton = $("#motion-toggle");
function updateMotion() {
  document.body.classList.toggle("motion-paused", paused);
  motionButton.setAttribute("aria-pressed", String(paused));
  motionButton.setAttribute(
    "aria-label",
    paused ? "Play 3D animation" : "Pause 3D animation",
  );
  motionButton.innerHTML = paused
    ? "▶ <span>PLAY MOTION</span>"
    : "Ⅱ <span>PAUSE MOTION</span>";
  window.dispatchEvent(
    new CustomEvent("portfolio-motion", { detail: { paused } }),
  );
}
motionButton.addEventListener("click", () => {
  paused = !paused;
  updateMotion();
});
reduceMotion.addEventListener("change", (e) => {
  paused = e.matches;
  updateMotion();
});
updateMotion();
import("./scene.js")
  .then((m) => m.initScene($("#scene"), paused))
  .catch(() => {
    motionButton.hidden = true;
    $(".scene-bottom>span").textContent = "IDEAS IN ORBIT";
  });
