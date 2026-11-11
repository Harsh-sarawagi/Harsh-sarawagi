import * as THREE from "../vendor/three.module.min.js";
export function initScene(container, paused = false) {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "low-power",
  });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.7));
  renderer.setClearColor(0, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.append(renderer.domElement);
  container.classList.add("scene-loaded");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 0, 9.2);
  scene.add(new THREE.AmbientLight(0xe0efcc, 1.6));
  const key = new THREE.DirectionalLight(0xe8f7d6, 4);
  key.position.set(-3, 4, 5);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x9cb66e, 2.4);
  rim.position.set(4, -2, 1);
  scene.add(rim);
  const back = new THREE.DirectionalLight(0xf8e6bd, 3);
  back.position.set(1, 3, -4);
  scene.add(back);
  const group = new THREE.Group();
  scene.add(group);
  const mat = new THREE.MeshStandardMaterial({
    color: 0xb6c88d,
    metalness: 0.62,
    roughness: 0.29,
  });
  const knot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(1.12, 0.37, 200, 28, 2, 3),
    mat,
  );
  knot.rotation.set(0.25, 0.1, -0.45);
  group.add(knot);
  const satellite = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.31, 0),
    new THREE.MeshStandardMaterial({
      color: 0xd9d7c7,
      metalness: 0.55,
      roughness: 0.25,
      flatShading: true,
    }),
  );
  satellite.position.set(1.7, 1.25, 0.2);
  group.add(satellite);
  const orb = new THREE.Mesh(
    new THREE.SphereGeometry(0.17, 24, 16),
    new THREE.MeshStandardMaterial({
      color: 0x8e9f75,
      metalness: 0.7,
      roughness: 0.2,
    }),
  );
  orb.position.set(-1.8, -0.9, 0.4);
  group.add(orb);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.95, 0.007, 6, 160),
    new THREE.MeshBasicMaterial({
      color: 0x5b684c,
      transparent: true,
      opacity: 0.5,
    }),
  );
  ring.rotation.set(1.05, 0.3, -0.3);
  group.add(ring);
  const stars = new THREE.BufferGeometry();
  const positions = [];
  for (let i = 0; i < 50; i++) {
    const a = i * 2.39996;
    const r = 1.8 + (i % 13) * 0.09;
    positions.push(Math.cos(a) * r, Math.sin(a) * r, Math.sin(i) * 1.2);
  }
  stars.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  scene.add(
    new THREE.Points(
      stars,
      new THREE.PointsMaterial({
        color: 0xc2d697,
        size: 0.018,
        transparent: true,
        opacity: 0.55,
      }),
    ),
  );
  function resize() {
    const { width, height } = container.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    render();
  }
  function render() {
    renderer.render(scene, camera);
  }
  let targetX = 0,
    targetY = 0;
  let drag = false;
  let prevX = 0;
  let dragRotation = 0;
  container.addEventListener("pointermove", (e) => {
    const r = container.getBoundingClientRect();
    targetX = ((e.clientX - r.left) / r.width - 0.5) * 0.35;
    targetY = ((e.clientY - r.top) / r.height - 0.5) * 0.2;
    if (drag) {
      dragRotation += (e.clientX - prevX) * 0.009;
      prevX = e.clientX;
    }
    if (paused) {
      group.rotation.y = dragRotation + targetX;
      group.rotation.x = targetY;
      render();
    }
  });
  container.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "touch") return;
    drag = true;
    prevX = e.clientX;
    container.setPointerCapture(e.pointerId);
  });
  container.addEventListener("pointerup", () => (drag = false));
  container.addEventListener("pointercancel", () => (drag = false));
  container.addEventListener("pointerleave", () => {
    targetX = 0;
    targetY = 0;
  });
  let visible = true;
  new IntersectionObserver((e) => (visible = e[0].isIntersecting)).observe(
    container,
  );
  window.addEventListener("portfolio-motion", (e) => {
    paused = e.detail.paused;
    render();
  });
  new ResizeObserver(resize).observe(container);
  let last = 0,
    elapsed = 0;
  function tick(time) {
    requestAnimationFrame(tick);
    const dt = Math.min((time - last) / 1000, 0.05);
    last = time;
    if (paused || !visible || document.hidden) return;
    elapsed += dt;
    group.rotation.y +=
      (dragRotation + targetX + elapsed * 0.12 - group.rotation.y) * 0.035;
    group.rotation.x += (targetY - group.rotation.x) * 0.035;
    group.position.y = Math.sin(elapsed * 0.7) * 0.07;
    satellite.rotation.y = elapsed * 0.3;
    orb.position.y = -0.9 + Math.sin(elapsed) * 0.1;
    render();
  }
  resize();
  requestAnimationFrame(tick);
}
