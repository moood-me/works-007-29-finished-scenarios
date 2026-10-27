// The two yards from above (its middle 9 m ahead; y toward us: a point `d` metres ahead is at y = 9 − d). Niggle's,
// this side of the fence (d < 9.2): rank autumn grass, the bare earth of the old potato bed round the shed, a trodden
// path from the shed's door to the gate and on toward us, puddles from the night's storm in it. Parish's, beyond:
// neat dug beds, a swept patch of earth before his door.
const Y = d => 9 - d;
g.fillStyle = '#7f8a50';
g.fillRect(-20, -11, 40, 22);
for (let i = 0; i < 420; i++) {
  const x = -20 + e.rnd() * 40;
  const d = e.rnd() * 9.2;
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(106,118,64,0.45)' : 'rgba(176,164,96,0.38)';
  g.beginPath();
  g.ellipse(x, Y(d), 0.2 + e.rnd() * 0.8, 0.12 + e.rnd() * 0.35, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// the old potato bed round the shed's foot
g.fillStyle = '#6f5e46';
g.beginPath();
g.ellipse(-3.2, Y(6.6), 3.4, 1.5, 0.3, 0, Math.PI * 2);
g.fill();
// Parish's side: earth, its beds in rows along the fence
g.fillStyle = '#6b5a44';
g.fillRect(-20, -11, 40, Y(9.25) + 11);
g.fillStyle = 'rgba(88,72,54,0.8)';
for (let d = 9.6; d < 13; d += 0.55) g.fillRect(-3, Y(d) - 0.12, 13, 0.24);
g.fillStyle = '#8a8458';
g.fillRect(-20, -11, 40, Y(14.5) + 11);
g.fillStyle = '#7a6a52';
g.beginPath();
g.ellipse(6.6, Y(12.6), 1.6, 0.9, -0.3, 0, Math.PI * 2);
g.fill();
// the path: from the shed's door (−2.4, 6.2) to the gate (1.4, 9.2), and from the door toward us and away right
const path = (pts, w) => {
  g.lineCap = 'round';
  g.lineJoin = 'round';
  g.strokeStyle = '#a2906c';
  g.lineWidth = w;
  g.beginPath();
  pts.forEach(([x, d], i) => (i ? g.lineTo(x, Y(d)) : g.moveTo(x, Y(d))));
  g.stroke();
};
path([[-2.3, 6.0], [-1.2, 6.6], [0.4, 8.2], [1.4, 9.3]], 0.75);
path([[-2.3, 6.0], [-1.4, 4.4], [0.2, 1.4], [1.0, -2]], 0.85);
// the puddles: dark wet earth round them (the clear water is the plane `puddle`)
g.fillStyle = 'rgba(86,72,54,0.75)';
for (const [x, d, rx, ry] of [[-0.95, 4.1, 0.75, 0.42], [0.55, 8.0, 0.4, 0.22], [0.5, 0.9, 0.5, 0.25]]) {
  g.beginPath();
  g.ellipse(x, Y(d), rx, ry, 0.4, 0, Math.PI * 2);
  g.fill();
}
