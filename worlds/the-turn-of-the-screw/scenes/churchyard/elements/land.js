// The land, seen from above (metres: x across, y toward the viewer; the plane's middle is 150 m ahead, so a point `d`
// metres ahead is at y = 150 − d): the churchyard's grass, damp and green still, the graves' long mounds, the lime's
// fallen leaves; the gravel path from the viewer up to the porch and its branch to the gate in the wall; beyond the
// wall the meadow going down to the autumn fields.
const Y = d => 150 - d;
g.fillStyle = '#7e8350';
g.fillRect(-300, -170, 600, 340);
// the far country: fields in a patchwork — stubble, plough, grass — hedgerows between them
const fields = ['#a08f5e', '#86704f', '#7b8550', '#ad9a68', '#8f865a', '#73684b'];
for (let fx = -300; fx < 300; fx += 30 + e.rnd() * 30) {
  let fy = -170;
  while (fy < Y(80)) {
    const h = 20 + e.rnd() * 30;
    g.fillStyle = fields[Math.floor(e.rnd() * fields.length)];
    g.fillRect(fx, fy, 62, h);
    fy += h;
  }
}
g.strokeStyle = '#5a5634';
g.lineWidth = 1.4;
for (let i = 0; i < 26; i++) {
  const x = -300 + e.rnd() * 600;
  const y = -170 + e.rnd() * (Y(85) + 170);
  g.beginPath();
  g.moveTo(x - 40 - e.rnd() * 40, y + (e.rnd() - 0.5) * 8);
  g.lineTo(x + 40 + e.rnd() * 40, y + (e.rnd() - 0.5) * 8);
  g.stroke();
}
// the meadow beyond the wall: soft broad patches of another tone
g.fillStyle = '#7f8a4c';
g.fillRect(-300, Y(80), 600, 47);
for (let i = 0; i < 40; i++) {
  const x = -150 + e.rnd() * 300;
  const y = Y(78) + e.rnd() * 44;
  const r = 4 + e.rnd() * 10;
  const grd = g.createRadialGradient(x, y, 0, x, y, r);
  const c = e.rnd() < 0.5 ? '104,116,62' : '150,146,86';
  grd.addColorStop(0, `rgba(${c},0.4)`);
  grd.addColorStop(1, `rgba(${c},0)`);
  g.fillStyle = grd;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
// the churchyard's grass, inside the wall
g.fillStyle = '#6b7a44';
g.fillRect(-300, Y(33), 600, 45);
for (let i = 0; i < 160; i++) {
  const x = -40 + e.rnd() * 80;
  const y = Y(33) + e.rnd() * 44;
  const r = 0.6 + e.rnd() * 2.4;
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(92,108,58,0.5)' : 'rgba(128,136,76,0.45)';
  g.beginPath();
  g.ellipse(x, y, r * 1.5, r, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// the graves' long mounds, each before its stone (a stone at [across, distance]: its grave lies behind it)
for (const [x, d] of [[-4.6, 8.2], [-7.6, 11.2], [4.4, 9.5], [6.8, 14.5], [-3.6, 17.5], [-9.5, 18], [9.2, 11.5], [-2.8, 7], [3.2, 12.8], [-8.6, 9.6], [5.6, 18], [-5.5, 20.5], [3.6, 7.2], [-6.2, 13.6], [7.8, 9], [-11, 13]]) {
  g.fillStyle = 'rgba(86,100,52,0.55)';
  g.beginPath();
  g.ellipse(x, Y(d + 1.0), 0.45, 0.95, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = 'rgba(132,140,80,0.35)';
  g.beginPath();
  g.ellipse(x - 0.1, Y(d + 1.1), 0.25, 0.7, 0, 0, Math.PI * 2);
  g.fill();
}
// the gravel path: from where the viewer stands up to the porch, and its branch away to the gate in the wall
function way(points, w) {
  g.lineCap = 'round';
  g.lineJoin = 'round';
  for (const [color, k] of [['#9d927a', 1.12], ['#b9ae95', 1]]) {
    g.strokeStyle = color;
    g.lineWidth = w * k;
    g.beginPath();
    g.moveTo(points[0][0], Y(points[0][1]));
    for (let i = 1; i < points.length; i++) g.lineTo(points[i][0], Y(points[i][1]));
    g.stroke();
  }
}
way([[0, -10], [0.05, 6], [0.3, 12], [0.6, 19.4]], 1.4);
way([[0.3, 12], [-3, 14.2], [-8, 17.4], [-14, 22], [-14, 33.5]], 1.1);
g.fillStyle = '#b9ae95';
g.beginPath();
g.ellipse(0.7, Y(19.6), 1.8, 1.0, 0, 0, Math.PI * 2);
g.fill();
// the gravel's grain
for (let i = 0; i < 900; i++) {
  const d = -6 + e.rnd() * 25.5;
  const x = 0.05 + (d > 6 ? (d - 6) * 0.04 : 0) + (e.rnd() - 0.5) * 1.3;
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(128,118,98,0.6)' : 'rgba(210,202,184,0.6)';
  g.fillRect(x, Y(d), 0.03 + e.rnd() * 0.04, 0.03 + e.rnd() * 0.04);
}
// fallen leaves: thick under the lime near on the right, thinning across the grass; a few blown onto the path
const leaf = ['#c9a640', '#b58b34', '#d8bb58', '#9c7a33', '#a8933e'];
for (let i = 0; i < 2600; i++) {
  const r = Math.pow(e.rnd(), 0.7) * 9;
  const a = e.rnd() * Math.PI * 2;
  const x = 10 + Math.cos(a) * r * 1.2;
  const d = 14 + Math.sin(a) * r;
  g.fillStyle = leaf[Math.floor(e.rnd() * leaf.length)];
  g.beginPath();
  g.ellipse(x, Y(d), 0.04 + e.rnd() * 0.04, 0.025 + e.rnd() * 0.025, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
for (let i = 0; i < 900; i++) {
  const x = -12 + e.rnd() * 24;
  const d = -2 + e.rnd() * 22;
  g.fillStyle = leaf[Math.floor(e.rnd() * leaf.length)];
  g.beginPath();
  g.ellipse(x, Y(d), 0.04 + e.rnd() * 0.04, 0.025 + e.rnd() * 0.025, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
