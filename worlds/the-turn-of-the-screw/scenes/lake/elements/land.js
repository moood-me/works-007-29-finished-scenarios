// The land, seen from above (metres: x across, y toward the viewer; the plane's middle is 140 m ahead, so a point `d`
// metres ahead is at y = 140 − d): this bank near, rough grass gone tawny, bracken russet among it, fallen leaves and
// the mud at the water's edge; the lake's bed under the water; the near shore across it — its mud, its grass, the
// path along the water to the bench, leaves under the trees; beyond, the park's meadow and the autumn fields.
const Y = d => 140 - d;
g.fillStyle = '#8b8a52';
g.fillRect(-300, -160, 600, 320);
// the far country: fields in a patchwork — stubble, plough, grass — hedgerows between them
const fields = ['#a28f5c', '#8a6f4f', '#7f8650', '#b19a65', '#93875a', '#76694a'];
for (let fx = -300; fx < 300; fx += 30 + e.rnd() * 30) {
  let fy = -160;
  while (fy < Y(110)) {
    const h = 20 + e.rnd() * 30;
    g.fillStyle = fields[Math.floor(e.rnd() * fields.length)];
    g.fillRect(fx, fy, 62, h);
    fy += h;
  }
}
g.strokeStyle = '#5c5634';
g.lineWidth = 1.6;
for (let i = 0; i < 26; i++) {
  const x = -300 + e.rnd() * 600;
  const y = -160 + e.rnd() * (Y(115) + 160);
  g.beginPath();
  g.moveTo(x - 40 - e.rnd() * 40, y + (e.rnd() - 0.5) * 8);
  g.lineTo(x + 40 + e.rnd() * 40, y + (e.rnd() - 0.5) * 8);
  g.stroke();
}
// the park's meadow round the lake: grass of a tired green, soft broad patches of another tone over it
g.fillStyle = '#86884e';
g.fillRect(-300, Y(110), 600, 80);
for (let i = 0; i < 50; i++) {
  const x = -120 + e.rnd() * 240;
  const y = Y(100) + e.rnd() * 70;
  const r = 5 + e.rnd() * 14;
  const grd = g.createRadialGradient(x, y, 0, x, y, r);
  const c = e.rnd() < 0.5 ? '112,118,66' : '156,146,88';
  grd.addColorStop(0, `rgba(${c},0.4)`);
  grd.addColorStop(1, `rgba(${c},0)`);
  g.fillStyle = grd;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
// the near shore: its grass, the path along the water, leaves fallen under the trees
g.fillStyle = '#8e9052';
g.fillRect(-300, Y(42), 600, 18);
g.strokeStyle = '#c3b48c';
g.lineCap = 'round';
g.lineWidth = 1.3;
g.beginPath();
g.moveTo(-80, Y(28.5));
g.bezierCurveTo(-30, Y(27.2), 0, Y(27.4), 30, Y(28.2));
g.bezierCurveTo(50, Y(29), 70, Y(33), 90, Y(40));
g.stroke();
for (let i = 0; i < 900; i++) {
  const x = -60 + e.rnd() * 110;
  const y = Y(25) - e.rnd() * 18;
  g.fillStyle = ['#c08a3c', '#a8662e', '#d2aa48', '#8e5a2c'][Math.floor(e.rnd() * 4)];
  g.beginPath();
  g.ellipse(x, y, 0.12 + e.rnd() * 0.12, 0.08 + e.rnd() * 0.06, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// the lake's bed and the mud at either edge of the water
g.fillStyle = '#4a4434';
g.fillRect(-300, Y(25.2), 600, 19.6);
g.fillStyle = '#6a5a40';
g.fillRect(-300, Y(25.2), 600, 1.2);
g.fillRect(-300, Y(6.8), 600, 1.1);
// this bank: rough tawny grass, the bracken in russet drifts, fallen leaves thick under foot
g.fillStyle = '#8a8247';
g.fillRect(-300, Y(5.7), 600, 30);
for (let i = 0; i < 70; i++) {
  const x = -40 + e.rnd() * 80;
  const y = Y(5.5) + e.rnd() * 20;
  const r = 0.6 + e.rnd() * 1.6;
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(160,98,48,0.7)' : 'rgba(118,112,60,0.6)';
  g.beginPath();
  g.ellipse(x, y, r * 1.4, r, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
for (let i = 0; i < 1600; i++) {
  const x = -14 + e.rnd() * 28;
  const y = Y(6) + Math.pow(e.rnd(), 0.8) * 9;
  g.fillStyle = ['#c08a3c', '#a8662e', '#d6b052', '#8e5a2c', '#b9a15a'][Math.floor(e.rnd() * 5)];
  g.beginPath();
  g.ellipse(x, y, 0.05 + e.rnd() * 0.05, 0.03 + e.rnd() * 0.03, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
