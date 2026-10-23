// The fire on the sand between them: a ring of stones, a few willow sticks crossed, the ash; three cans of beans
// warming at its edge. Its flame is particles (fire_flame, fire_embers, fire_smoke); its light the scene's
// fire_light, from the glow marked here, as much as `fire` says.
const A = e.anim;
g.fillStyle = '#8f8a80';
for (let i = 0; i < 9; i++) {
  const x = -0.36 + i * 0.09;
  g.fillStyle = i % 2 ? '#8f8a80' : '#7d786f';
  g.beginPath();
  g.ellipse(x, -0.04, 0.06 + 0.02 * A.hash(i, 1), 0.05, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#6f675e';
g.beginPath();
g.ellipse(0, -0.02, 0.3, 0.035, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#4a3f35';
g.lineWidth = 0.035;
g.lineCap = 'round';
g.beginPath();
for (const [x0, y0, x1, y1] of [[-0.26, -0.04, 0.16, -0.2], [0.24, -0.03, -0.14, -0.21], [-0.05, -0.02, 0.06, -0.24]]) {
  g.moveTo(x0, y0);
  g.lineTo(x1, y1);
}
g.stroke();
// the cans: tin, a paper label, the lids bent up
for (const [x, k] of [[0.4, 0], [0.5, 1], [0.6, 2]]) {
  g.fillStyle = '#9fa3a3';
  g.fillRect(x - 0.04, -0.11, 0.08, 0.11);
  g.fillStyle = k === 1 ? '#a9483a' : '#b85a40';
  g.fillRect(x - 0.04, -0.085, 0.08, 0.055);
  g.fillStyle = '#c4c8c8';
  g.fillRect(x - 0.04, -0.125, 0.06, 0.015);
}
e.light(0, -0.15, 0.32, '#ffa450', 1.2, 'flame');
e.at(0, -0.1, 'flame');
e.at(0.5, -0.06, 'cans');
