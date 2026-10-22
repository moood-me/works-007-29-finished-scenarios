// The table's near side: the oilcloth hanging a hand's width over the edge (its cherry pattern), the apron under it,
// the legs, the far legs seen between; painted from its foot at the middle of the near edge.
g.fillStyle = '#7a5a40';
for (const x of [-0.6, 0.56]) g.fillRect(x, -0.7, 0.05, 0.7);
g.fillStyle = '#5e4532';
for (const x of [-0.52, 0.48]) g.fillRect(x, -0.66, 0.035, 0.6);
g.fillStyle = '#f1e6bf';
g.beginPath();
g.moveTo(-0.68, -0.79);
g.lineTo(0.68, -0.79);
g.lineTo(0.68, -0.66);
for (let x = 0.68; x > -0.68; x -= 0.17) g.quadraticCurveTo(x - 0.085, -0.645, x - 0.17, -0.665);
g.closePath();
g.fill();
for (let x = -0.62; x < 0.65; x += 0.09) {
  g.fillStyle = '#c95b4e';
  g.beginPath();
  g.arc(x, -0.72, 0.011, 0, Math.PI * 2);
  g.arc(x + 0.016, -0.714, 0.011, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = 'rgba(120,90,60,0.15)';
for (let x = -0.6; x < 0.65; x += 0.17) g.fillRect(x, -0.78, 0.01, 0.12);
