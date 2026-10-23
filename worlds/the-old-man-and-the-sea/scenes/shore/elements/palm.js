// A coconut palm (copies: the palms of the village's slope): a slender ringed trunk leaning and curving up, its crown
// of long drooping fronds a layer the wind sways about the trunk's top, a dead frond or two hanging brown under it.
// Metres, the foot at the anchor; 10 m tall.
const LEAN = 1.6;
const TOP = -10;
const pt = u => [LEAN * u * u, TOP * u];
g.fillStyle = '#8e8170';
g.beginPath();
for (let i = 0; i <= 16; i++) {
  const [x, y] = pt(i / 16);
  g.lineTo(x - 0.17 + 0.06 * (i / 16), y);
}
for (let i = 16; i >= 0; i--) {
  const [x, y] = pt(i / 16);
  g.lineTo(x + 0.17 - 0.06 * (i / 16), y);
}
g.closePath();
g.fill();
// the rings, and the shaded side
g.strokeStyle = 'rgba(70,60,50,0.45)';
g.lineWidth = 0.035;
for (let i = 1; i < 40; i++) {
  const [x, y] = pt(i / 40);
  g.beginPath();
  g.moveTo(x - 0.15, y + 0.02);
  g.lineTo(x + 0.15, y - 0.02);
  g.stroke();
}
g.fillStyle = 'rgba(60,50,45,0.25)';
g.beginPath();
for (let i = 0; i <= 16; i++) {
  const [x, y] = pt(i / 16);
  g.lineTo(x - 0.17 + 0.06 * (i / 16), y);
}
for (let i = 16; i >= 0; i--) {
  const [x, y] = pt(i / 16);
  g.lineTo(x - 0.05, y);
}
g.closePath();
g.fill();
// the crown
const [cx, cy] = pt(1);
e.layer('crown', { pivot: [cx, cy], wind: { strength: 0.35, gust: 0.5, scale: 1 }, box: [cx - 4.6, cy - 2.2, cx + 4.6, cy + 3.6] }, g => {
  const frond = (ang, len, droop, color, width) => {
    const ex = cx + Math.cos(ang) * len;
    const ey = cy - Math.sin(ang) * len * 0.6 + droop;
    const mx = cx + Math.cos(ang) * len * 0.5;
    const my = cy - Math.sin(ang) * len * 0.6 - 0.6;
    g.strokeStyle = color;
    g.lineWidth = 0.05;
    g.beginPath();
    g.moveTo(cx, cy);
    g.quadraticCurveTo(mx, my, ex, ey);
    g.stroke();
    // its leaflets, hanging from the rib
    g.lineWidth = width;
    for (let k = 1; k <= 14; k++) {
      const u = k / 15;
      const x = (1 - u) * (1 - u) * cx + 2 * u * (1 - u) * mx + u * u * ex;
      const y = (1 - u) * (1 - u) * cy + 2 * u * (1 - u) * my + u * u * ey;
      const l = 0.75 * Math.sin(Math.PI * Math.min(1, u * 1.2)) + 0.12;
      g.beginPath();
      g.moveTo(x, y);
      g.lineTo(x + Math.cos(ang) * 0.12 - 0.12, y + l);
      g.moveTo(x, y);
      g.lineTo(x + Math.cos(ang) * 0.12 + 0.12, y + l * 0.9);
      g.stroke();
    }
  };
  frond(-1.35, 2.2, 2.8, '#7a6a48', 0.05);
  frond(-1.9, 2.0, 2.9, '#857350', 0.05);
  const angles = [0.15, 0.55, 0.95, 1.35, 1.75, 2.2, 2.6, 3.0, -0.2, 3.35];
  angles.forEach((a, i) => frond(a, 3.4 + 0.8 * e.rnd(), 1.4 + 1.2 * Math.abs(Math.cos(a)), i % 3 === 0 ? '#5d7840' : i % 3 === 1 ? '#4b6838' : '#6e8a48', 0.07));
  // the nuts, under the crown
  g.fillStyle = '#6b5a33';
  for (const [dx, dy] of [[-0.15, 0.25], [0.12, 0.28], [0, 0.4]]) {
    g.beginPath();
    g.arc(cx + dx, cy + dy, 0.13, 0, Math.PI * 2);
    g.fill();
  }
});
