// A low winter sky with a storm coming: a heavy slate-blue overhead, a cold pale glare low over the fields where the
// light still comes through (ice-white, not warm), and under it the whitened air of the snow being blown off the
// plain. Over it two layers of torn snow clouds driven left by the wind — the high slow, the low ragged and faster —
// and a veil of blown snow along the horizon (each layer's ends meet: it wraps round its box).
const A = e.aspect;
const X0 = -0.3;
const X1 = A + 0.3;
const HZ = 0.5;

const sky = g.createLinearGradient(0, -0.35, 0, HZ);
sky.addColorStop(0, "#4f6079");
sky.addColorStop(0.4, "#71849e");
sky.addColorStop(0.8, "#aebdd2");
sky.addColorStop(1, "#dfe7f1");
g.fillStyle = sky;
g.fillRect(X0, -0.35, X1 - X0, HZ + 0.35);
g.fillStyle = "#d0d9e5";
g.fillRect(X0, HZ, X1 - X0, 1.25 - HZ);

// the pale band low on the right, over the fields
const band = g.createRadialGradient(1.3, HZ - 0.03, 0.01, 1.3, HZ - 0.03, 0.55);
band.addColorStop(0, "rgba(236,243,252,0.6)");
band.addColorStop(0.45, "rgba(214,226,242,0.24)");
band.addColorStop(1, "rgba(214,226,242,0)");
g.fillStyle = band;
g.fillRect(X0, -0.35, X1 - X0, HZ + 0.35);

// the clouds: soft heavy lumps, darker below, in long rows; painted twice where they cross the box's ends so it wraps
const W = X1 - X0;
e.layer("clouds", { drift: [-0.004, 0], box: [X0, -0.35, X1, HZ] }, c => {
  for (let i = 0; i < 26; i++) {
    const x = X0 + e.rnd() * W;
    const y = -0.3 + Math.pow(e.rnd(), 0.8) * (HZ - 0.12);
    const rx = 0.18 + e.rnd() * 0.35;
    const ry = rx * (0.18 + e.rnd() * 0.12);
    const dark = e.rnd() < 0.5;
    for (const dx of [-W, 0, W]) {
      if (x + dx + rx < X0 || x + dx - rx > X1) continue;
      const blob = c.createRadialGradient(x + dx, y, 0, x + dx, y, rx);
      blob.addColorStop(0, dark ? "rgba(84,98,122,0.5)" : "rgba(190,202,218,0.45)");
      blob.addColorStop(0.6, dark ? "rgba(92,106,130,0.24)" : "rgba(190,202,218,0.2)");
      blob.addColorStop(1, "rgba(150,164,184,0)");
      c.fillStyle = blob;
      c.save();
      c.translate(x + dx, y);
      c.scale(1, ry / rx);
      c.translate(-(x + dx), -y);
      c.beginPath();
      c.arc(x + dx, y, rx, 0, Math.PI * 2);
      c.fill();
      c.restore();
    }
  }
});

// the low clouds: torn grey scud, flatter, driven faster before the storm
e.layer("scud", { drift: [-0.012, 0], box: [X0, 0.05, X1, HZ] }, c => {
  for (let i = 0; i < 16; i++) {
    const x = X0 + e.rnd() * W;
    const y = 0.12 + e.rnd() * (HZ - 0.2);
    const rx = 0.2 + e.rnd() * 0.3;
    const ry = rx * (0.08 + e.rnd() * 0.06);
    for (const dx of [-W, 0, W]) {
      if (x + dx + rx < X0 || x + dx - rx > X1) continue;
      const blob = c.createRadialGradient(x + dx, y, 0, x + dx, y, rx);
      blob.addColorStop(0, "rgba(98,112,136,0.42)");
      blob.addColorStop(0.7, "rgba(110,124,146,0.16)");
      blob.addColorStop(1, "rgba(120,134,156,0)");
      c.fillStyle = blob;
      c.save();
      c.translate(x + dx, y);
      c.scale(1, ry / rx);
      c.translate(-(x + dx), -y);
      c.beginPath();
      c.arc(x + dx, y, rx, 0, Math.PI * 2);
      c.fill();
      c.restore();
    }
  }
});

// the snow blown off the plain: a pale veil along the horizon, thicker in streaks, running left
e.layer("blown", { drift: [-0.03, 0], box: [X0, HZ - 0.12, X1, HZ + 0.02] }, c => {
  for (let i = 0; i < 18; i++) {
    const x = X0 + e.rnd() * W;
    const y = HZ - 0.01 - e.rnd() * 0.07;
    const rx = 0.15 + e.rnd() * 0.35;
    const ry = 0.012 + e.rnd() * 0.025;
    for (const dx of [-W, 0, W]) {
      if (x + dx + rx < X0 || x + dx - rx > X1) continue;
      const blob = c.createRadialGradient(x + dx, y, 0, x + dx, y, rx);
      blob.addColorStop(0, "rgba(238,243,250,0.55)");
      blob.addColorStop(1, "rgba(238,243,250,0)");
      c.fillStyle = blob;
      c.save();
      c.translate(x + dx, y);
      c.scale(1, ry / rx);
      c.translate(-(x + dx), -y);
      c.beginPath();
      c.arc(x + dx, y, rx, 0, Math.PI * 2);
      c.fill();
      c.restore();
    }
  }
});
