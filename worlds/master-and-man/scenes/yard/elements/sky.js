// A low winter sky before a snowfall: grey-blue overhead, paler and warmer toward the land, one soft band of light
// low on the left where the sun is behind the clouds. Over it a layer of soft snow clouds drifting slowly left with
// the wind (its ends meet: it wraps round its box).
const A = e.aspect;
const X0 = -0.3;
const X1 = A + 0.3;
const HZ = 0.46;

const sky = g.createLinearGradient(0, -0.35, 0, HZ);
sky.addColorStop(0, "#8c9db5");
sky.addColorStop(0.45, "#aab8ca");
sky.addColorStop(0.85, "#d3dbe4");
sky.addColorStop(1, "#e2e6ea");
g.fillStyle = sky;
g.fillRect(X0, -0.35, X1 - X0, HZ + 0.35);
g.fillStyle = "#e2e6ea";
g.fillRect(X0, HZ, X1 - X0, 1.25 - HZ);

// the pale band low on the left: the sun behind the clouds
const band = g.createRadialGradient(0.15, HZ - 0.05, 0.01, 0.15, HZ - 0.05, 0.75);
band.addColorStop(0, "rgba(246,236,222,0.75)");
band.addColorStop(0.5, "rgba(236,230,224,0.3)");
band.addColorStop(1, "rgba(236,230,224,0)");
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
