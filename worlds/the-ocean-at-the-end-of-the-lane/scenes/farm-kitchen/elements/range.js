// The black kitchen range, its front (x toward the viewer, 1.56 m wide, 0.9 m high): an oven door either side, the
// firebox between them behind a grate — its coals a layer of added light, trembling; the fire's light is the point
// "range#fire" — a brass rail along the top, a plinth.
const iron = '#2b2a2c', edge = '#3b3a3d', brass = '#c39a4a';
g.fillStyle = iron;
g.fillRect(-0.78, -0.9, 1.56, 0.9);
g.fillStyle = '#1f1e20';
g.fillRect(-0.8, -0.1, 1.6, 0.1);
// the oven doors, with steel hinges and handles
for (const [a, b] of [[-0.72, -0.26], [0.26, 0.72]]) {
  g.fillStyle = edge;
  g.fillRect(a, -0.78, b - a, 0.6);
  g.strokeStyle = '#555356';
  g.lineWidth = 0.012;
  g.strokeRect(a + 0.04, -0.74, b - a - 0.08, 0.52);
  g.fillStyle = '#9b9a98';
  g.fillRect(a + 0.05, -0.5, b - a - 0.1, 0.025);
}
// the firebox: a dark mouth, the coals, the grate's bars over them
g.fillStyle = '#141313';
g.fillRect(-0.2, -0.62, 0.4, 0.36);
e.layer('coals', { flicker: 0.45, blend: 'add', box: [-0.2, -0.62, 0.2, -0.26] }, g => {
  const glow = g.createRadialGradient(0, -0.36, 0.02, 0, -0.4, 0.26);
  glow.addColorStop(0, 'rgba(255, 170, 70, 1)');
  glow.addColorStop(0.5, 'rgba(230, 90, 30, 0.8)');
  glow.addColorStop(1, 'rgba(120, 30, 10, 0)');
  g.fillStyle = glow;
  g.fillRect(-0.2, -0.62, 0.4, 0.36);
  for (let k = 0; k < 12; k++) {
    g.fillStyle = k % 2 ? 'rgba(255, 210, 120, 0.9)' : 'rgba(255, 120, 40, 0.9)';
    g.beginPath();
    g.ellipse(-0.15 + 0.3 * e.rnd(), -0.3 - 0.08 * e.rnd(), 0.03, 0.018, 0, 0, Math.PI * 2);
    g.fill();
  }
});
e.light(0, -0.42, 0.22, '#ff9a4c', 0.9, 'fire');
g.fillStyle = '#242325';
for (let x = -0.18; x <= 0.18; x += 0.06) g.fillRect(x - 0.008, -0.62, 0.016, 0.36);
g.fillRect(-0.22, -0.64, 0.44, 0.03);
// the brass rail along the top, on two brackets
g.fillStyle = brass;
g.fillRect(-0.74, -0.86, 1.48, 0.025);
g.fillRect(-0.72, -0.9, 0.02, 0.06);
g.fillRect(0.7, -0.9, 0.02, 0.06);
// a tea towel over the rail
g.fillStyle = '#e8e2d2';
g.fillRect(0.34, -0.86, 0.2, 0.26);
g.fillStyle = '#b84a3c';
g.fillRect(0.34, -0.8, 0.2, 0.025);
g.fillRect(0.34, -0.66, 0.2, 0.025);
