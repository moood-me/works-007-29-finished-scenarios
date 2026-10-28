// The summer night over the Rhine: a deep clear blue, lighter and greener toward the far hills, a pale glow round the
// moon low on the right (its disc a layer: the point `disc`, where the moonlight comes from and its path on the water
// begins); stars, fewer near the moon, trembling a little; thin silver streaks of cloud drifting. Toward the frame's
// sides the sky goes over to the paper — blue-grey at night — and graphite hatching.
const L = e.lib;
const A = e.aspect;
const H = 0.4;
const MX = A / 2 + 0.49;
const MY = 0.15;
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
sky.addColorStop(0, "#141d38");
sky.addColorStop(0.16, "#1c2a4e");
sky.addColorStop(0.3, "#2c3f68");
sky.addColorStop(0.37, "#40567f");
sky.addColorStop(0.4, "#566c8c");
sky.addColorStop(0.45, "#3e4e70");
sky.addColorStop(1, "#2c3858");
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
// the glow round the moon
const glow = g.createRadialGradient(MX, MY, 0.01, MX, MY, 0.5);
glow.addColorStop(0, "rgba(200, 212, 236, 0.55)");
glow.addColorStop(0.2, "rgba(150, 170, 210, 0.22)");
glow.addColorStop(1, "rgba(120, 140, 190, 0)");
g.fillStyle = glow;
g.fillRect(MX - 0.5, MY - 0.5, 1, 1);

// the stars: small, sparse near the moon and toward the hills, trembling
e.layer("stars", { flicker: 0.35 }, (c) => {
  for (let i = 0; i < 260; i++) {
    const x = -0.3 + (A + 0.6) * L.rnd(i, 11);
    const y = -0.35 + 0.72 * L.rnd(i, 13) ** 1.3;
    const near = Math.hypot(x - MX, y - MY);
    if (near < 0.16 + 0.12 * L.rnd(i, 15)) continue;
    const r = 0.0009 + 0.0016 * L.rnd(i, 17) ** 3;
    const a = (0.45 + 0.55 * L.rnd(i, 19)) * L.smooth(H - 0.01, H - 0.12, y);
    c.fillStyle = `rgba(236, 240, 255, ${a})`;
    c.beginPath();
    c.arc(x, y, r, 0, Math.PI * 2);
    c.fill();
  }
});

// thin streaks of cloud, silver where they pass near the moon, drifting slowly to the right
e.layer("clouds", { drift: [0.0012, 0], box: [-0.3, 0.04, A + 0.3, 0.36] }, (c) => {
  c.filter = "blur(0.006px)";
  for (let i = 0; i < 9; i++) {
    const x = -0.2 + ((A + 0.4) * i) / 9 + 0.12 * L.rnd(i, 21);
    const y = 0.1 + 0.22 * L.rnd(i, 23);
    const w = 0.12 + 0.16 * L.rnd(i, 25);
    const lit = L.smooth(0.7, 0.1, Math.hypot(x - MX, y - MY));
    c.fillStyle = `rgba(${Math.round(70 + 120 * lit)}, ${Math.round(84 + 120 * lit)}, ${Math.round(120 + 110 * lit)}, ${0.35 + 0.3 * lit})`;
    c.beginPath();
    c.ellipse(x, y, w, 0.006 + 0.006 * L.rnd(i, 27), -0.015, 0, Math.PI * 2);
    c.fill();
  }
});

// the moon, nearly full: a pale disc with its soft grey seas, a little light round it
e.layer("moon", {}, (c) => {
  c.fillStyle = "#f6f2df";
  c.beginPath();
  c.arc(MX, MY, 0.024, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = "rgba(170, 172, 168, 0.35)";
  for (const [dx, dy, r] of [[-0.007, -0.006, 0.007], [0.006, -0.002, 0.005], [-0.002, 0.008, 0.006], [0.009, 0.009, 0.003]]) {
    c.beginPath();
    c.arc(MX + dx, MY + dy, r, 0, Math.PI * 2);
    c.fill();
  }
  e.light(MX, MY, 0.03, "#e4ebff", 0.9, "disc");
  e.at(MX, MY, "disc");
});

// the paper at the sides: the sky goes over to the night's paper toward the frame's edges, graphite hatching on it
e.layer("paper", {}, (p) => {
  const mid = A / 2;
  for (const side of [-1, 1]) {
    const x0 = mid + side * 0.5;
    const x1 = mid + side * (A / 2 + 0.3);
    const grd = p.createLinearGradient(x0, 0, x1, 0);
    for (let i = 0; i <= 12; i++) {
      const x = x0 + ((x1 - x0) * i) / 12;
      grd.addColorStop(i / 12, L.nightPaper(L.edge(x - mid)));
    }
    p.fillStyle = grd;
    p.fillRect(Math.min(x0, x1), -0.35, Math.abs(x1 - x0), 1.6);
  }
  L.hatch(p, [-0.3, -0.35, A + 0.3, 0.6], -A / 2, 1);
  // the far hills' pencilled line carried on over the paper
  p.strokeStyle = L.graphite(0.55);
  p.lineWidth = 0.0012;
  for (const side of [-1, 1]) {
    p.beginPath();
    for (let i = 0; i <= 30; i++) {
      const sx = side * (0.6 + (0.9 * i) / 30);
      const y = H - 0.06 + 0.02 * e.anim.noise(sx * 6, 4);
      if (i === 0) p.moveTo(A / 2 + sx, y);
      else p.lineTo(A / 2 + sx, y);
    }
    p.stroke();
  }
});
