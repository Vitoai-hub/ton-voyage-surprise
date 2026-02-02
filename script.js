function playConfetti(durationMs = 1200) {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) {
    console.warn("confettiCanvas introuvable");
    return;
  }

  const ctx = canvas.getContext("2d");
  const dpr = Math.max(1, window.devicePixelRatio || 1);

  function resize() {
    // taille CSS (viewport)
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";

    // taille réelle (pixels)
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);

    // dessiner en "pixels CSS"
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();

  const W = () => window.innerWidth;
  const H = () => window.innerHeight;

  const pieces = [];
  const count = 160;

  for (let i = 0; i < count; i++) {
    pieces.push({
      x: Math.random() * W(),
      y: -Math.random() * H() * 0.3,
      r: 3 + Math.random() * 6,
      vx: -2 + Math.random() * 4,
      vy: 3 + Math.random() * 6,
      rot: Math.random() * Math.PI,
      vrot: -0.2 + Math.random() * 0.4,
      shape: Math.random() < 0.5 ? "rect" : "circle",
      hue: Math.floor(Math.random() * 360),
      alpha: 0.9
    });
  }

  const start = performance.now();

  function frame(t) {
    const elapsed = t - start;
    ctx.clearRect(0, 0, W(), H());

    for (const p of pieces) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05;
      p.rot += p.vrot;

      if (p.x < -20) p.x = W() + 20;
      if (p.x > W() + 20) p.x = -20;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = p.alpha;

      ctx.fillStyle = `hsla(${p.hue}, 90%, 60%, ${p.alpha})`;
      if (p.shape === "rect") {
        ctx.fillRect(-p.r, -p.r * 0.6, p.r * 2, p.r * 1.2);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.r * 0.7, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    if (elapsed < durationMs) requestAnimationFrame(frame);
    else ctx.clearRect(0, 0, W(), H());
  }

  requestAnimationFrame(frame);
  window.addEventListener("resize", resize, { once: true });
}
