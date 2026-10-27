// The field beyond the two last houses, from above (its middle 560 m ahead; y toward us: a point `d` metres ahead is
// at y = 560 − d): autumn stubble, pale gold in strips, a wet dark furrow here and there, a cart track along it; far
// off, under the hills, greyer.
const Y = d => 560 - d;
g.fillStyle = '#b6a674';
g.fillRect(-1200, -540, 2400, 1080);
for (let i = 0; i < 60; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(160,146,100,0.5)' : 'rgba(196,182,128,0.45)';
  g.fillRect(-300 + e.rnd() * 600, Y(400), 4 + e.rnd() * 14, 380);
}
for (let i = 0; i < 18; i++) {
  g.fillStyle = 'rgba(112,96,70,0.45)';
  g.fillRect(-300 + e.rnd() * 600, Y(400), 0.8, 380);
}
const far = g.createLinearGradient(0, Y(700), 0, Y(60));
far.addColorStop(0, 'rgba(146,152,140,1)');
far.addColorStop(1, 'rgba(146,152,140,0)');
g.fillStyle = far;
g.fillRect(-1200, -540, 2400, Y(60) + 540);
// the track, two ruts with grass between, running away to the left
g.strokeStyle = 'rgba(120,104,78,0.7)';
g.lineWidth = 0.5;
for (const o of [-0.7, 0.7]) {
  g.beginPath();
  g.moveTo(12 + o, Y(20));
  g.quadraticCurveTo(-10 + o, Y(70), -60 + o, Y(280));
  g.stroke();
}
