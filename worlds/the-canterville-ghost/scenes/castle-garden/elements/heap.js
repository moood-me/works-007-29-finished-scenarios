// The earth at the grave's far side, seen side on, as `grave` says: open — the spoil heap dug out of it, half a metre
// high, a spade stuck in it; mound — the low back of the filled grave, the cross of almond blossom on it if `cross`;
// none — nothing.
const grave = e.state.grave ?? 'none';
const clods = (x0, x1, top) => {
  for (let i = 0; i < 70; i++) {
    const x = x0 + e.rnd() * (x1 - x0);
    const u = (x - x0) / (x1 - x0);
    g.fillStyle = ['#7a5a42', '#4a3628', '#5e4432'][Math.floor(e.rnd() * 3)];
    g.beginPath();
    g.arc(x, -top * Math.sin(u * Math.PI) * e.rnd(), 0.03 + e.rnd() * 0.05, 0, Math.PI * 2);
    g.fill();
  }
};
const hump = (x0, x1, top, color) => {
  g.fillStyle = color;
  g.beginPath();
  g.moveTo(x0, 0.05);
  for (let u = 0; u <= 1.0001; u += 0.05) g.lineTo(x0 + (x1 - x0) * u, -top * Math.sin(u * Math.PI) ** 0.7);
  g.lineTo(x1, 0.05);
  g.closePath();
  g.fill();
};
if (grave === 'open') {
  hump(-1.3, 1.3, 0.6, '#5a4232');
  clods(-1.3, 1.3, 0.6);
  // the spade, stuck in the heap, leaning
  g.strokeStyle = '#4a3a2a';
  g.lineWidth = 0.035;
  g.beginPath();
  g.moveTo(0.7, -0.35);
  g.lineTo(0.92, -1.25);
  g.stroke();
  g.fillRect(0.82, -1.3, 0.2, 0.04);
  g.fillStyle = '#6a6a6e';
  g.beginPath();
  g.moveTo(0.6, -0.2);
  g.lineTo(0.78, -0.22);
  g.lineTo(0.72, -0.45);
  g.lineTo(0.6, -0.42);
  g.closePath();
  g.fill();
} else if (grave === 'mound') {
  hump(-1.1, 1.1, 0.32, '#62483a');
  clods(-1.1, 1.1, 0.32);
  if (e.state.cross) {
    for (let x = -0.6; x <= 0.45; x += 0.06) {
      g.fillStyle = e.rnd() < 0.3 ? '#f2ccd4' : '#f8f4ee';
      g.beginPath();
      g.arc(x, -0.34 - (Math.abs(x + 0.25) < 0.1 ? 0.06 : 0) - e.rnd() * 0.03, 0.045, 0, Math.PI * 2);
      g.fill();
    }
  }
}
