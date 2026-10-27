// The field beyond the two last houses, from above (its middle 160 m ahead; y toward us: a point `d` metres ahead is
// at y = 160 − d): autumn stubble, pale gold in strips, a wet dark furrow here and there, a cart track along it.
const Y = d => 160 - d;
g.fillStyle = '#b6a674';
g.fillRect(-300, -140, 600, 280);
for (let i = 0; i < 40; i++) {
  const x0 = -300 + e.rnd() * 600;
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(160,146,100,0.5)' : 'rgba(196,182,128,0.45)';
  g.fillRect(x0, -140, 4 + e.rnd() * 14, 280);
}
for (let i = 0; i < 18; i++) {
  g.fillStyle = 'rgba(112,96,70,0.45)';
  g.fillRect(-300 + e.rnd() * 600, -140, 0.8, 280);
}
const far = g.createLinearGradient(0, Y(300), 0, Y(40));
far.addColorStop(0, 'rgba(150,156,146,0.8)');
far.addColorStop(1, 'rgba(150,156,146,0)');
g.fillStyle = far;
g.fillRect(-300, -140, 600, Y(40) + 140);
// the track, two ruts with grass between, running away to the left
g.strokeStyle = 'rgba(120,104,78,0.7)';
g.lineWidth = 0.5;
for (const o of [-0.7, 0.7]) {
  g.beginPath();
  g.moveTo(12 + o, Y(22));
  g.quadraticCurveTo(-10 + o, Y(70), -60 + o, Y(280));
  g.stroke();
}
