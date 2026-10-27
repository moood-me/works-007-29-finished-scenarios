// What the dining room's paintings share: a crown of chestnut leaves for the garden beyond the window (as the
// garden's own lib paints its chestnuts) and a candle's flame — a layer of its own about its wick, so the animate of
// each holder can make it tremble.
function crown(g, rnd, o) {
  if (o.mass) {
    g.fillStyle = o.mass;
    g.beginPath();
    for (let i = 0; i < 18; i++) {
      const t = rnd() * Math.PI * 2;
      const r = Math.sqrt(rnd()) * 0.62;
      const x = o.cx + Math.cos(t) * r * o.rx;
      const y = o.cy + Math.sin(t) * r * o.ry;
      const w = o.rx * (0.28 + rnd() * 0.18);
      g.moveTo(x + w, y);
      g.ellipse(x, y, w, w * 0.7, 0, 0, Math.PI * 2);
    }
    g.fill();
  }
  const paths = o.colors.map(() => new Path2D());
  for (let i = 0; i < o.n; i++) {
    const t = rnd() * Math.PI * 2;
    const r = Math.sqrt(rnd());
    const x = o.cx + Math.cos(t) * r * o.rx;
    const y = o.cy + Math.sin(t) * r * o.ry;
    const up = anim.clamp((o.cy - y) / o.ry * 0.5 + 0.5 + (rnd() - 0.5) * 0.5, 0, 0.999);
    const p = paths[Math.floor(up * o.colors.length)];
    const k = 5 + Math.floor(rnd() * 3);
    const dir = Math.PI * 0.5 + (rnd() - 0.5) * 2.2;
    const s = o.leaf * (0.75 + rnd() * 0.5);
    for (let j = 0; j < k; j++) {
      const u = j / (k - 1) - 0.5;
      const a = dir + u * 3.4;
      const len = s * (1 - 0.45 * Math.abs(u) * 2);
      const cx = x + Math.cos(a) * len * 0.55;
      const cy = y + Math.sin(a) * len * 0.55;
      p.moveTo(cx + Math.cos(a) * len * 0.5, cy + Math.sin(a) * len * 0.5);
      p.ellipse(cx, cy, len * 0.5, len * 0.16, a, 0, Math.PI * 2);
    }
  }
  o.colors.forEach((c, i) => {
    g.fillStyle = c;
    g.fill(paths[i]);
  });
}
// a candle standing at (x, y) — its foot — `h` tall, its flame a layer `f<k>` about the wick with a glow of the same
// name (the scene's lights take some of them over)
function candle(g, e, k, x, y, h, glow) {
  g.fillStyle = '#f3ecdc';
  g.fillRect(x - 0.012, y - h, 0.024, h);
  g.fillStyle = '#e2d6bd';
  g.fillRect(x - 0.012, y - h, 0.006, h);
  g.strokeStyle = '#2b2420';
  g.lineWidth = 0.003;
  g.beginPath();
  g.moveTo(x, y - h);
  g.lineTo(x, y - h - 0.012);
  g.stroke();
  const wick = y - h - 0.008;
  e.layer(`f${k}`, { pivot: [x, wick], blend: 'add', box: [x - 0.03, wick - 0.08, x + 0.03, wick + 0.01] }, c => {
    c.fillStyle = '#ffb347';
    c.beginPath();
    c.moveTo(x, wick - 0.055);
    c.quadraticCurveTo(x + 0.016, wick - 0.016, x, wick);
    c.quadraticCurveTo(x - 0.016, wick - 0.016, x, wick - 0.055);
    c.fill();
    c.fillStyle = '#fff1c9';
    c.beginPath();
    c.ellipse(x, wick - 0.016, 0.006, 0.013, 0, 0, Math.PI * 2);
    c.fill();
    e.light(x, wick - 0.022, glow, '#ffc477', 0.8, `f${k}`);
  });
}
// a silver three-branched candelabrum standing on the table at its anchor, its three candles f0…f2
function candelabrum(g, e) {
  g.fillStyle = '#c8c6c0';
  g.beginPath();
  g.ellipse(0, -0.01, 0.075, 0.016, 0, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.moveTo(-0.05, -0.01);
  g.quadraticCurveTo(-0.012, -0.04, -0.012, -0.1);
  g.lineTo(-0.012, -0.24);
  g.lineTo(0.012, -0.24);
  g.lineTo(0.012, -0.1);
  g.quadraticCurveTo(0.012, -0.04, 0.05, -0.01);
  g.closePath();
  g.fill();
  g.fillStyle = '#e2e0da';
  g.beginPath();
  g.ellipse(0, -0.16, 0.022, 0.03, 0, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = '#c8c6c0';
  g.lineWidth = 0.016;
  g.beginPath();
  for (const s of [-1, 1]) {
    g.moveTo(0, -0.24);
    g.bezierCurveTo(s * 0.03, -0.2, s * 0.13, -0.19, s * 0.14, -0.29);
  }
  g.stroke();
  [-0.14, 0, 0.14].forEach((x, k) => {
    const foot = x === 0 ? -0.31 : -0.29;
    g.fillStyle = '#dcdad4';
    g.fillRect(x - 0.022, foot - 0.02, 0.044, 0.025);
    candle(g, e, k, x, foot - 0.02, 0.16, 0.08);
  });
}
// how a holder's flames tremble: each its own slow stretch and lean, never in step
function flicker(e, n, seed) {
  for (let k = 0; k < n; k++) {
    const f = e.layer(`f${k}`);
    const s = seed * 7.3 + k * 3.1;
    f.scaleY = 1 + 0.12 * anim.noise(e.t * 2.3, s);
    f.scaleX = 1 - 0.05 * anim.noise(e.t * 2.1, s + 1.7);
    f.rotate = 0.08 * anim.noise(e.t * 1.4, s + 4.2);
  }
}
return { crown, candle, candelabrum, flicker };
