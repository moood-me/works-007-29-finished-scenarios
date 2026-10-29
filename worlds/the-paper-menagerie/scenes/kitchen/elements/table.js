// The table top from above (metres, its middle at across −0.25, distance 2.8; y toward the viewer): a pale yellow
// oilcloth with a small cherry pattern, and on it the evening's work — torn wrapping paper, red with gold stars, and
// green with white dots; a stack of yellow squares; the roll of tape; Mom's teacup; the scissors.
g.fillStyle = '#f1e6bf';
g.fillRect(-0.68, -0.43, 1.36, 0.86);
for (let y = -0.38; y < 0.4; y += 0.09) {
  for (let x = -0.62 + (Math.round(y / 0.09) % 2) * 0.045; x < 0.65; x += 0.09) {
    g.fillStyle = '#c95b4e';
    g.beginPath();
    g.arc(x, y, 0.011, 0, Math.PI * 2);
    g.arc(x + 0.016, y + 0.006, 0.011, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#7d9a5a';
    g.fillRect(x + 0.004, y - 0.022, 0.012, 0.006);
  }
}
// the roll of tape, always
const tape = () => {
  g.fillStyle = '#d8d2bc';
  g.beginPath();
  g.arc(0.5, -0.22, 0.045, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#f1e6bf';
  g.beginPath();
  g.arc(0.5, -0.22, 0.025, 0, Math.PI * 2);
  g.fill();
};
// (packed, `packed`: the oilcloth bare but for the tape — the box on it is `table_box`)
if (e.state.packed) {
  tape();
  return;
}
// the torn wrapping paper: red with gold stars, crumpled scraps
const star = (x, y, r) => {
  g.beginPath();
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / 5,
      rr = i % 2 ? r * 0.45 : r;
    g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
  }
  g.closePath();
  g.fill();
};
const scrap = (cx, cy, s, rot, base, mark) => {
  g.save();
  g.translate(cx, cy);
  g.rotate(rot);
  g.fillStyle = base;
  g.beginPath();
  g.moveTo(-s, -s * 0.7);
  g.lineTo(s * 0.8, -s);
  g.lineTo(s, s * 0.5);
  g.lineTo(s * 0.2, s * 0.8);
  g.lineTo(-s * 0.9, s * 0.6);
  g.closePath();
  g.fill();
  g.fillStyle = 'rgba(0,0,0,0.08)';
  g.beginPath();
  g.moveTo(-s, -s * 0.7);
  g.lineTo(s * 0.8, -s);
  g.lineTo(0, 0);
  g.closePath();
  g.fill();
  g.fillStyle = mark;
  for (let i = 0; i < 5; i++) star(-s * 0.6 + e.rnd() * s * 1.2, -s * 0.5 + e.rnd() * s, s * 0.12);
  g.restore();
};
scrap(0.3, -0.05, 0.13, 0.4, '#c23b32', '#e8c45a');
scrap(0.48, 0.18, 0.08, -0.7, '#c23b32', '#e8c45a');
scrap(-0.05, 0.22, 0.07, 1.2, '#c23b32', '#e8c45a');
scrap(0.12, -0.28, 0.09, 2.1, '#8fbb8c', '#f4f2e8');
// the stack of yellow squares for the ingots, by Mom's side
g.fillStyle = '#e2b93f';
g.fillRect(0.05, -0.36, 0.15, 0.15);
g.fillStyle = '#eccb5c';
g.fillRect(0.065, -0.375, 0.15, 0.15);
tape();
// the scissors
g.strokeStyle = '#8a8d90';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(-0.18, 0.05);
g.lineTo(-0.02, 0.12);
g.moveTo(-0.18, 0.1);
g.lineTo(-0.02, 0.07);
g.stroke();
g.strokeStyle = '#2f4f7d';
g.lineWidth = 0.01;
g.beginPath();
g.arc(-0.2, 0.04, 0.018, 0, Math.PI * 2);
g.arc(-0.2, 0.11, 0.018, 0, Math.PI * 2);
g.stroke();
// Mom's teacup and its saucer
g.fillStyle = '#f6f3ec';
g.beginPath();
g.arc(0.55, 0.0, 0.06, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#5b7ea8';
g.beginPath();
g.arc(0.55, 0.0, 0.038, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#b48a4a';
g.beginPath();
g.arc(0.55, 0.0, 0.03, 0, Math.PI * 2);
g.fill();
