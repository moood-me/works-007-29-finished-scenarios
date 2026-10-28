// The two yards from above (its middle 9 m ahead; y toward us: a point `d` metres ahead is at y = 9 − d). Niggle's,
// this side of the fence (d < 9.2): rank autumn grass, the bare earth of the old potato bed round the shed, a trodden
// path from the shed's door to the gate and on toward us, puddles from the night's storm in it. Parish's, beyond:
// neat dug beds, a swept patch of earth before his door.
const Y = d => 9 - d;
g.fillStyle = '#7f8a50';
g.fillRect(-20, -11, 40, 22);
for (let i = 0; i < 350; i++) {
  const x = -20 + e.rnd() * 40;
  const d = -2 + e.rnd() * 11.2;
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(106,118,64,0.25)' : 'rgba(170,160,96,0.22)';
  g.beginPath();
  g.ellipse(x, Y(d), 0.1 + e.rnd() * 0.35, 0.06 + e.rnd() * 0.15, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// fine strokes of grass lying over
g.lineWidth = 0.012;
for (const tone of ['rgba(92,104,56,0.5)', 'rgba(184,170,104,0.45)']) {
  g.strokeStyle = tone;
  g.beginPath();
  for (let i = 0; i < 600; i++) {
    const x = -14 + e.rnd() * 28;
    const d = -2 + e.rnd() * 11.2;
    const a = e.rnd() * 3;
    g.moveTo(x, Y(d));
    g.lineTo(x + Math.cos(a) * 0.14, Y(d) + Math.sin(a) * 0.14);
  }
  g.stroke();
}
// the old potato bed by the shed: bare earth gone to weeds, the old ridges still there
g.fillStyle = 'rgba(111,94,70,0.8)';
for (let k = 0; k < 5; k++) {
  g.beginPath();
  g.ellipse(-5.6 + k * 0.05, Y(5.0 - k * 0.7), 1.6 - k * 0.1, 0.22, 0.32, 0, Math.PI * 2);
  g.fill();
}
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
// the puddles: dark wet earth in blots along the path (the clear water before the shed is the plane `puddle`)
for (const [x, d, rx, ry] of [[-1.0, 4.1, 0.7, 0.34], [0.55, 8.0, 0.4, 0.2], [0.5, 0.9, 0.5, 0.22]]) {
  for (let k = 0; k < 6; k++) {
    g.fillStyle = 'rgba(92,76,56,0.4)';
    g.beginPath();
    const cx = x + (e.rnd() - 0.5) * rx;
    const cy = Y(d) + (e.rnd() - 0.5) * ry;
    g.ellipse(cx, cy, rx * (0.5 + e.rnd() * 0.4), ry * (0.5 + e.rnd() * 0.4), 0.5, 0, Math.PI * 2);
    g.fill();
  }
}
