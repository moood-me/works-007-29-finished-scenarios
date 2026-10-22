// The clipped hedge along the garden's left side, the gap for the gate in it; over it the valley.
const gap = [4.9, 6.1];
const part = (x0, x1) => {
  g.fillStyle = '#3e5a32';
  g.beginPath();
  g.moveTo(x0, 0);
  for (let x = x0; x <= x1 + 0.001; x += 0.25) g.lineTo(x, -1.75 - Math.sin(x * 2.3) * 0.04 - e.rnd() * 0.05);
  g.lineTo(x1, 0);
  g.closePath();
  g.fill();
  for (let i = 0; i < (x1 - x0) * 40; i++) {
    const x = x0 + e.rnd() * (x1 - x0);
    const y = -0.1 - e.rnd() * 1.6;
    g.fillStyle = e.rnd() < 0.5 ? '#4a6a3a' : '#34502b';
    g.beginPath();
    g.arc(x, y, 0.04 + e.rnd() * 0.05, 0, Math.PI * 2);
    g.fill();
  }
};
part(-10, gap[0]);
part(gap[1], 10);
