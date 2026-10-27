// The high sky over the Gulf at midday, the sun high behind the viewer's left shoulder (the light `sun`): deep blue
// overhead, paling to a white haze over the sea; the small trade-wind clouds heaped along the horizon and a few
// fair-weather puffs higher up, drifting; a man-of-war bird circling. And the night (`night`, cross-faded in the
// animate): deep blue, many stars, and low on the horizon to the right the glow of Havana.
// Screen heights; the horizon at 0.55.
const A = e.aspect;
const H = 0.55;
const X0 = -0.3;
const W = A + 0.6;
const Y0 = -0.35;
const { glow } = e.lib;
e.layer('day', {}, g => {
  const sky = g.createLinearGradient(0, Y0, 0, H);
  sky.addColorStop(0, '#2f539c');
  sky.addColorStop(0.35, '#4f78bb');
  sky.addColorStop(0.7, '#8eaed6');
  sky.addColorStop(0.9, '#c6d5e6');
  sky.addColorStop(1, '#e2e7ec');
  g.fillStyle = sky;
  g.fillRect(X0, Y0, W, H - Y0);
  g.fillStyle = '#d6dde6';
  g.fillRect(X0, H, W, 1.25 - H);
});
e.layer('night', {}, g => {
  const sky = g.createLinearGradient(0, Y0, 0, H);
  sky.addColorStop(0, '#0a1130');
  sky.addColorStop(0.5, '#152054');
  sky.addColorStop(0.88, '#263670');
  sky.addColorStop(1, '#34457c');
  g.fillStyle = sky;
  g.fillRect(X0, Y0, W, H - Y0);
  g.fillStyle = '#2a3866';
  g.fillRect(X0, H, W, 1.25 - H);
  // the stars, more and brighter high up, few in the haze over the sea
  for (let i = 0; i < 420; i++) {
    const y = Y0 + Math.pow(e.rnd(), 1.3) * (H - 0.03 - Y0);
    const big = e.rnd() < 0.08;
    g.globalAlpha = (0.35 + 0.65 * e.rnd()) * Math.min(1, (H - y) / 0.2);
    g.fillStyle = e.rnd() < 0.2 ? '#fff2dc' : '#eef1ff';
    g.beginPath();
    g.arc(X0 + e.rnd() * W, y, big ? 0.0022 : 0.001 + 0.0012 * e.rnd(), 0, Math.PI * 2);
    g.fill();
  }
  g.globalAlpha = 1;
  // the glow of Havana under the horizon far off to the right, warm in the haze
  glow(g, A * 0.86, H, 0.42, 0.07, '232,170,120', 0.55);
  glow(g, A * 0.86, H, 0.16, 0.03, '255,206,150', 0.6);
});
e.layer('clouds', { drift: [0.0012, 0], box: [X0, Y0, A + 0.3, H + 0.01] }, g => {
  // a small cumulus: heaped of soft puffs, its base flat, its foot shaded blue-grey, its top and left lit white (the
  // sun is behind the viewer's left); drawn again one width over, so the layer's two ends meet as it drifts
  const heap = (x, base, h, w) => {
    const puffs = [];
    for (let i = 0; i < 22; i++) {
      const u = Math.pow(e.rnd(), 0.8);
      const r = w * (0.14 + 0.2 * (1 - u)) * (0.75 + 0.5 * e.rnd());
      puffs.push([x + (e.rnd() - 0.5) * w * (2 - 1.2 * u), base - r * 0.3 - u * h, r]);
    }
    const draw = (k, dx, dy, s, top) => {
      g.beginPath();
      for (const [cx, cy, r] of puffs) {
        if (cy > top) continue;
        g.moveTo(cx + k + r * dx + r * s, cy + r * dy);
        g.arc(cx + k + r * dx, cy + r * dy, r * s, 0, Math.PI * 2);
      }
    };
    g.save();
    g.beginPath();
    g.rect(X0, Y0, W, base - Y0);
    g.clip();
    for (const k of [-W, 0, W]) {
      draw(k, 0, 0.1, 1, base);
      g.fillStyle = '#b9c4d8';
      g.fill();
      draw(k, -0.08, -0.08, 0.88, base - h * 0.25);
      g.fillStyle = '#e6ecf3';
      g.fill();
      draw(k, -0.15, -0.15, 0.72, base - h * 0.35);
      g.fillStyle = '#fbfcfd';
      g.fill();
    }
    g.restore();
  };
  // along the horizon, small with the distance
  for (const [x, h, w] of [[0.05, 0.035, 0.05], [0.33, 0.05, 0.07], [0.62, 0.03, 0.045], [1.05, 0.055, 0.08], [1.38, 0.035, 0.05], [1.72, 0.045, 0.06], [1.98, 0.03, 0.04]]) heap(x, H - 0.006, h, w);
  // higher up, nearer: fair-weather puffs
  for (const [x, y, h, w] of [[0.25, 0.3, 0.05, 0.07], [0.95, 0.2, 0.07, 0.1], [1.6, 0.27, 0.05, 0.08]]) heap(x, y, h, w);
  // the white haze along the water
  for (const k of [-W, 0, W]) glow(g, A / 2 + k, H, W * 0.6, 0.03, '236,240,244', 0.7);
});
// the bird: long bent wings and a forked tail, painted at the edge of the circle it flies, turned round its centre
const BX = A * 0.7;
const BY = 0.16;
const R = 0.05;
e.layer('bird', { pivot: [BX, BY], box: [BX - R - 0.03, BY - R - 0.03, BX + R + 0.03, BY + R + 0.03] }, g => {
  g.save();
  g.translate(BX + R, BY);
  g.rotate(Math.PI / 2);
  g.fillStyle = '#26262f';
  g.beginPath();
  g.moveTo(-0.016, 0.002);
  g.quadraticCurveTo(-0.009, -0.004, -0.004, 0.001);
  g.lineTo(0, -0.001);
  g.lineTo(0.004, 0.001);
  g.quadraticCurveTo(0.009, -0.004, 0.016, 0.002);
  g.quadraticCurveTo(0.009, -0.002, 0.003, 0.0025);
  g.lineTo(0.0015, 0.007);
  g.lineTo(0, 0.0045);
  g.lineTo(-0.0015, 0.007);
  g.lineTo(-0.003, 0.0025);
  g.quadraticCurveTo(-0.009, -0.002, -0.016, 0.002);
  g.closePath();
  g.fill();
  g.restore();
});
