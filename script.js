function playConfetti(durationMs = 1400) {
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
function fabrication() { 
  const controle = document.getElementById("controle")?.value;
  const duree = document.getElementById("duree")?.value;
  const intensity = document.getElementById("intensity")?.value;
  const comfort = document.getElementById("comfort")?.value;

  if (!controle || !duree || !intensity || !comfort) {
    alert("Choisis une option dans chacun des quatre blocs ✨");
    return;
  }

  const mapControle = { "1": "A", "2": "B", "3": "C", "4": "D", "5": "E" };
  const controleLetter = mapControle[controle] || controle;

  localStorage.setItem("controle", controleLetter);
  localStorage.setItem("duree", String(duree));
  localStorage.setItem("intensity", String(intensity));
  localStorage.setItem("comfort", String(comfort));

  // Confettis plus longs en mode A (tu peux monter à 2200-2600 si tu veux)
  if (controleLetter === "A") {
    playConfetti(2200);             // <- durée confettis
    setTimeout(() => {
      window.location.href = "resultat.html";
    }, 900);                         // <- délai avant redirection (laisser le temps de voir)
  } else {
    window.location.href = "resultat.html";
  }
}

// IMPORTANT : rend la fonction visible pour onclick=""
window.fabrication = fabrication;
