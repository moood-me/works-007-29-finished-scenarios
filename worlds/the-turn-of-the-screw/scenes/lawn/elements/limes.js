// A lime of the avenue: a straight grey trunk, the crown a tall oval of leaf in clumps of a few greens (metres: x
// across from the trunk, y up from the ground); the crown stirs in the evening air.
g.fillStyle = '#625749';
g.beginPath();
g.moveTo(-0.32, 0);
g.lineTo(-0.2, -7);
g.lineTo(0.2, -7);
g.lineTo(0.34, 0);
g.closePath();
g.fill();
g.strokeStyle = '#625749';
g.lineCap = 'round';
for (const [x2, y2] of [[-1.6, -9.5], [1.4, -10], [-0.6, -12], [0.8, -12.5]]) {
  g.lineWidth = 0.14;
  g.beginPath();
  g.moveTo(0, -6.5);
  g.lineTo(x2, y2);
  g.stroke();
}
e.layer('crown', { pivot: [0, -6.5], wind: { strength: 0.18, gust: 0.5 }, box: [-5, -18, 5, -4.5] }, c => {
  for (let i = 0; i < 150; i++) {
    const a = e.rnd() * Math.PI * 2;
    const r = Math.sqrt(e.rnd());
    const x = Math.cos(a) * r * 3.7;
    const y = -11.6 + Math.sin(a) * r * 5.6;
    c.fillStyle = ['#4a6731', '#577739', '#3d5729', '#62823f', '#44602e'][Math.floor(e.rnd() * 5)];
    c.beginPath();
    c.arc(x, y, 0.55 + e.rnd() * 0.75, 0, Math.PI * 2);
    c.fill();
  }
});
