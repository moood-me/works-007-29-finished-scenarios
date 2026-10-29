// The armchair's arms and the front of its seat, from before (its back and wings are armchair): two rolled arms of
// green velvet either side of whoever sits, the seat's front rail, short legs. Only when `armchair` is true.
if (e.state.armchair) {
  g.fillStyle = '#3a5a46';
  for (const s of [-1, 1]) {
    g.fillRect(s * 0.4 - 0.08, -0.62, 0.16, 0.34);
    g.beginPath();
    g.ellipse(s * 0.4, -0.62, 0.09, 0.04, 0, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = '#26382d';
  g.fillRect(-0.48, -0.32, 0.96, 0.16);
  g.fillStyle = '#a08040';
  for (let x = -0.44; x <= 0.45; x += 0.06) {
    g.beginPath();
    g.arc(x, -0.3, 0.008, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = '#2a170e';
  for (const x of [-0.42, 0.42]) g.fillRect(x - 0.03, -0.16, 0.06, 0.16);
}
