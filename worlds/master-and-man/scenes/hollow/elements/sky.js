// The night sky over the hollow in the storm: no moon, no star — the low murk of the blizzard, lit from within by the
// snow itself: a deep slate-blue overhead, paler and greyer toward the crest of the bank, where the driven snow glows.
// Over it torn snow-cloud running left, fast, and veils of snow streaming off the crest (each layer wraps round its
// box: its ends meet).
const A = e.aspect;
const X0 = -0.3;
const X1 = A + 0.3;
const W = X1 - X0;
const HZ = 0.42;

const sky = g.createLinearGradient(0, -0.35, 0, HZ);
sky.addColorStop(0, "#1f2a40");
sky.addColorStop(0.45, "#33435f");
sky.addColorStop(0.8, "#5a6c8a");
sky.addColorStop(1, "#8697b2");
g.fillStyle = sky;
g.fillRect(X0, -0.35, W, HZ + 0.35);
g.fillStyle = "#8697b2";
g.fillRect(X0, HZ, W, 1.25 - HZ);

// a paler place in the murk, high on the right, where a moon is somewhere behind the snow
const glow = g.createRadialGradient(1.35, 0.02, 0.01, 1.35, 0.02, 0.6);
glow.addColorStop(0, "rgba(170,186,214,0.42)");
glow.addColorStop(0.5, "rgba(140,158,190,0.16)");
glow.addColorStop(1, "rgba(140,158,190,0)");
g.fillStyle = glow;
g.fillRect(X0, -0.35, W, HZ + 0.35);

// soft lumps of cloud in rows, darker and lighter, a wrapping layer
function lumps(c, n, y0, y1, r0, r1, flat, dark, light, seedShift) {
  for (let i = 0; i < n; i++) {
    const x = X0 + e.rnd() * W;
    const y = y0 + e.rnd() * (y1 - y0);
    const rx = r0 + e.rnd() * (r1 - r0);
    const ry = rx * flat * (0.7 + e.rnd() * 0.6);
    const col = e.rnd() < 0.5 ? dark : light;
    for (const dx of [-W, 0, W]) {
      if (x + dx + rx < X0 || x + dx - rx > X1) continue;
      const blob = c.createRadialGradient(x + dx, y, 0, x + dx, y, rx);
      blob.addColorStop(0, `rgba(${col},0.42)`);
      blob.addColorStop(0.6, `rgba(${col},0.18)`);
      blob.addColorStop(1, `rgba(${col},0)`);
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
}
e.layer("clouds", { drift: [-0.008, 0], box: [X0, -0.35, X1, HZ] }, c => {
  lumps(c, 22, -0.3, HZ - 0.12, 0.2, 0.5, 0.22, "24,32,50", "120,136,166");
});
e.layer("scud", { drift: [-0.025, 0], box: [X0, 0.0, X1, HZ] }, c => {
  lumps(c, 16, 0.08, HZ - 0.06, 0.18, 0.4, 0.1, "40,52,74", "150,166,192");
});
// snow streaming along low over the crest: pale, quick
e.layer("veil", { drift: [-0.06, 0], box: [X0, HZ - 0.2, X1, HZ + 0.04] }, c => {
  lumps(c, 22, HZ - 0.14, HZ, 0.15, 0.4, 0.09, "200,212,232", "220,230,244");
});
