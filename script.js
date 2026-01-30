function playConfetti(durationMs = 1200) {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) {
    console.warn("confettiCanvas introuvable");
    return;

  const ctx = canvas.getContext("2d");
  const dpr = Math.max(1, window.devicePixelRatio || 1);

  function resize() {
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
  }
  resize();

  const W = () => canvas.width;
  const H = () => canvas.height;

  const pieces = [];
  const count = 160; // quantité confetti

  for (let i = 0; i < count; i++) {
    pieces.push({
      x: Math.random() * W(),
      y: -Math.random() * H() * 0.3,
      r: (3 + Math.random() * 6) * dpr,
      vx: (-2 + Math.random() * 4) * dpr,
      vy: (3 + Math.random() * 6) * dpr,
      rot: Math.random() * Math.PI,
      vrot: (-0.2 + Math.random() * 0.4),
      shape: Math.random() < 0.5 ? "rect" : "circle",
      // couleurs "auto" (sans palette fixe), mais harmonieuses
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
      p.vy += 0.05 * dpr;      // gravité
      p.rot += p.vrot;

      // wrap horizontal
      if (p.x < -20 * dpr) p.x = W() + 20 * dpr;
      if (p.x > W() + 20 * dpr) p.x = -20 * dpr;

      // draw
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

    if (elapsed < durationMs) {
      requestAnimationFrame(frame);
    } else {
      ctx.clearRect(0, 0, W(), H());
    }
  }

  requestAnimationFrame(frame);

  // sécurité resize
  const onResize = () => resize();
  window.addEventListener("resize", onResize, { once: true });
}

function fabrication() {
  // Récupération valeurs (IDs CORRIGÉS)
  const controle = document.getElementById("controle").value;   // 1..5 ou A..E selon ton choix
  const duree = document.getElementById("duree").value;
  const intensity = document.getElementById("intensity").value; // 1..4
  const comfort = document.getElementById("comfort").value;     // 1..3

  if (!controle || !duree || !intensity || !comfort) {
    alert("Choisis une option dans chacun des quatre blocs ✨");
    return;
  }

  // Si ton select "controle" renvoie 1..5, on convertit en A..E
  const mapControle = { "1": "A", "2": "B", "3": "C", "4": "D", "5": "E" };
  const controleLetter = mapControle[controle] || controle;

  // Stockage propre pour resultat.html
  localStorage.setItem("controle", controleLetter);
  localStorage.setItem("duree", String(duree));
  localStorage.setItem("intensity", String(intensity));
  localStorage.setItem("comfort", String(comfort));

  // Effet waouh UNIQUEMENT en mode A (Surprise)
  if (controleLetter === "A") {
    playConfetti(1300);
    // mini délai pour que l’effet soit visible avant la redirection
    setTimeout(() => {
      window.location.href = "resultat.html";
    }, 650);
  } else {
    window.location.href = "resultat.html";
  }
}
