// A low winter sky in a snowfall, the wind getting up: a cold grey-blue overhead, paler toward the land, one soft brighter band low on the
// right over the fields. Over it a layer of soft snow clouds drifting slowly left with
// the wind (its ends meet: it wraps round its box).
const A = e.aspect;
const X0 = -0.3;
const X1 = A + 0.3;
const HZ = 0.46;

const sky = g.createLinearGradient(0, -0.35, 0, HZ);
sky.addColorStop(0, "#66798f");
sky.addColorStop(0.45, "#8a9cb3");
sky.addColorStop(0.85, "#b9c6d8");
sky.addColorStop(1, "#dbe3ed");
g.fillStyle = sky;
g.fillRect(X0, -0.35, X1 - X0, HZ + 0.35);
g.fillStyle = "#d0d9e5";
g.fillRect(X0, HZ, X1 - X0, 1.25 - HZ);

// the pale band low on the right, over the fields
const band = g.createRadialGradient(1.45, HZ - 0.04, 0.01, 1.45, HZ - 0.04, 0.7);
band.addColorStop(0, "rgba(226,232,240,0.35)");
band.addColorStop(0.5, "rgba(220,228,238,0.14)");
band.addColorStop(1, "rgba(226,232,240,0)");
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
      blob.addColorStop(0, dark ? "rgba(120,136,160,0.42)" : "rgba(214,222,232,0.5)");
      blob.addColorStop(0.6, dark ? "rgba(128,144,166,0.2)" : "rgba(214,222,232,0.22)");
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
