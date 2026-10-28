// The far bank across the river, 220 m off (metres from the water's edge, up negative): the low wall of the forest —
// ceibas and palms over a tangle of green —, a cleared patch with two huts on stilts and a canoe drawn up, the mud
// bank pale at the water. The rain's haze greys it.
const W = 280;
g.fillStyle = '#9a8c70';
g.fillRect(-W, -0.6, 2 * W, 1.1);
// the forest's mass: a ragged top of rounded crowns
g.fillStyle = '#4b5a3e';
g.beginPath();
g.moveTo(-W, -0.5);
let x = -W;
while (x < W) {
  const r = 2 + e.rnd() * 5;
  const top = -5 - e.rnd() * 5;
  g.lineTo(x, top + r * 0.5);
  g.quadraticCurveTo(x + r, top - r * 0.6, x + 2 * r, top + r * 0.4);
  x += 2 * r;
}
g.lineTo(W, -0.5);
g.closePath();
g.fill();
// darker undergrowth and the lit tops of the crowns
for (let i = 0; i < 160; i++) {
  const cx = -W + e.rnd() * 2 * W;
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(52,66,44,0.6)' : 'rgba(104,120,84,0.45)';
  g.beginPath();
  g.ellipse(cx, -1.5 - e.rnd() * 5, 1.5 + e.rnd() * 4, 1 + e.rnd() * 2, 0, 0, Math.PI * 2);
  g.fill();
}
// tall trees standing over it: a ceiba's flat crown, palms
for (let i = 0; i < 14; i++) {
  const cx = -W + e.rnd() * 2 * W;
  const h = 10 + e.rnd() * 4;
  g.strokeStyle = '#4a4a3c';
  g.lineWidth = 0.5;
  g.beginPath();
  g.moveTo(cx, -5);
  g.lineTo(cx + 0.4, -h);
  g.stroke();
  g.fillStyle = '#56664a';
  if (e.rnd() < 0.5) {
    g.beginPath();
    g.ellipse(cx + 0.4, -h, 5 + e.rnd() * 3, 1.6, 0, 0, Math.PI * 2);
    g.fill();
  } else {
    g.strokeStyle = '#4f5f42';
    g.lineWidth = 0.6;
    for (let k = 0; k < 7; k++) {
      const a = -Math.PI * 0.95 + k * 0.3;
      g.beginPath();
      g.moveTo(cx + 0.4, -h);
      g.quadraticCurveTo(cx + 0.4 + Math.cos(a) * 2, -h - 1.2, cx + 0.4 + Math.cos(a) * 3.2, -h + 1.0 + Math.abs(Math.sin(a)));
      g.stroke();
    }
  }
}
// the clearing with its two huts on stilts and a canoe at the water
g.fillStyle = '#8a7d62';
g.fillRect(28, -2.2, 26, 1.8);
for (const hx of [33, 44]) {
  g.fillStyle = '#5a4a3a';
  g.fillRect(hx - 2.2, -2.2, 0.2, 1.8);
  g.fillRect(hx + 2.0, -2.2, 0.2, 1.8);
  g.fillStyle = '#b4a888';
  g.fillRect(hx - 2.4, -4.4, 4.8, 2.2);
  g.fillStyle = '#6e5c40';
  g.beginPath();
  g.moveTo(hx - 3.0, -4.3);
  g.lineTo(hx, -6.4);
  g.lineTo(hx + 3.0, -4.3);
  g.closePath();
  g.fill();
  g.fillStyle = '#4a3c30';
  g.fillRect(hx - 0.5, -3.8, 1.0, 1.6);
}
g.fillStyle = '#3c3228';
g.beginPath();
g.moveTo(36, -0.35);
g.quadraticCurveTo(40, 0.05, 44, -0.35);
g.lineTo(43.6, -0.15);
g.lineTo(36.4, -0.15);
g.closePath();
g.fill();
// the mud bank's pale edge at the water
g.fillStyle = 'rgba(196,182,150,0.6)';
g.fillRect(-W, -0.12, 2 * W, 0.18);
