// The houses across the street, from their feet (metres; x across, y up negative): two clapboard houses with porches,
// a picket fence along their lawns, a maple between them (its crown the layer `crown`, swaying a little). The low sun
// is behind them: their fronts are in their own shade.
const clap = (x0, y0, x1, y1, color, line) => {
  g.fillStyle = color;
  g.fillRect(x0, y0, x1 - x0, y1 - y0);
  g.strokeStyle = line;
  g.lineWidth = 0.025;
  for (let y = y1 - 0.2; y > y0; y -= 0.2) {
    g.beginPath();
    g.moveTo(x0, y);
    g.lineTo(x1, y);
    g.stroke();
  }
};
const windowAt = (x, y, w, h) => {
  g.fillStyle = '#f4f1ea';
  g.fillRect(x - 0.08, y - 0.08, w + 0.16, h + 0.16);
  g.fillStyle = '#5d6a74';
  g.fillRect(x, y, w, h);
  g.fillStyle = 'rgba(220,226,232,0.35)';
  g.fillRect(x, y, w, h * 0.35);
  g.fillStyle = '#f4f1ea';
  g.fillRect(x + w / 2 - 0.03, y, 0.06, h);
  g.fillRect(x, y + h / 2 - 0.03, w, 0.06);
};
const house = (x0, x1, color, line, roof) => {
  const mid = (x0 + x1) / 2;
  g.fillStyle = roof;
  g.beginPath();
  g.moveTo(x0 - 0.5, -5.6);
  g.lineTo(mid, -8.6);
  g.lineTo(x1 + 0.5, -5.6);
  g.closePath();
  g.fill();
  clap(x0, -5.7, x1, -0.3, color, line);
  g.fillStyle = '#9a958a';
  g.fillRect(x0 - 0.1, -0.35, x1 - x0 + 0.2, 0.35);
  // the porch: its roof, posts and steps
  g.fillStyle = roof;
  g.fillRect(x0 + 0.6, -2.95, (x1 - x0) * 0.6, 0.22);
  g.fillStyle = '#f2efe8';
  for (const t of [0, 0.5, 1]) g.fillRect(x0 + 0.65 + t * ((x1 - x0) * 0.6 - 0.15), -2.75, 0.1, 2.5);
  g.fillRect(x0 + 0.6, -1.05, (x1 - x0) * 0.6, 0.06);
  g.fillStyle = '#6f5948';
  g.fillRect(x0 + 1.4, -2.35, 0.95, 2.05);
  windowAt(x0 + 2.9, -2.2, 1.1, 1.3);
  windowAt(x0 + 1.0, -4.9, 1.0, 1.25);
  windowAt(x1 - 2.0, -4.9, 1.0, 1.25);
  windowAt(x1 - 1.8, -2.2, 1.0, 1.3);
};
house(-9.5, -1.2, '#e6e2d8', 'rgba(150,146,136,0.45)', '#6f6c68');
house(4.2, 12.5, '#e3d4a6', 'rgba(156,138,92,0.45)', '#7a5f50');
// the lawn's edge and a low picket fence
g.fillStyle = '#8fa266';
g.fillRect(-16, -0.25, 32, 0.35);
g.fillStyle = '#efece4';
for (let x = -15.8; x < 16; x += 0.22) g.fillRect(x, -0.95, 0.08, 0.95);
g.fillRect(-16, -0.75, 32, 0.07);
g.fillRect(-16, -0.3, 32, 0.07);
// the maple between the houses
g.fillStyle = '#5a4a3c';
g.beginPath();
g.moveTo(1.15, 0);
g.lineTo(1.35, -3.8);
g.lineTo(1.75, -3.8);
g.lineTo(1.95, 0);
g.closePath();
g.fill();
e.layer('crown', { pivot: [1.55, -3.6], wind: { strength: 0.12, gust: 0.4 }, box: [-1.6, -9.0, 4.8, -2.6] }, c => {
  for (let i = 0; i < 46; i++) {
    const a = e.rnd() * Math.PI * 2, r = Math.sqrt(e.rnd()) * 2.3;
    c.fillStyle = e.rnd() < 0.5 ? '#6f8a4e' : '#88a05c';
    c.beginPath();
    c.ellipse(1.55 + Math.cos(a) * r * 1.15, -5.8 + Math.sin(a) * r * 1.0, 0.6 + e.rnd() * 0.5, 0.5 + e.rnd() * 0.4, e.rnd() * 3, 0, Math.PI * 2);
    c.fill();
  }
});
