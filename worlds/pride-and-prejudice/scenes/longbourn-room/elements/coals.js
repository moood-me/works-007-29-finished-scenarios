// The grate in the firebox (x along the left wall away from the viewer, from the chimneypiece's middle; y up
// negative): a heap of coals glowing red-gold — unlit by the room, the light of the scene's `hearth` — behind black
// iron bars (the fire's tongues over it are particles)
const coals = new Path2D();
for (let i = 0; i < 9; i++) {
  const x = -0.3 + i * 0.075, y = -0.2 - 0.03 * Math.sin(i * 1.7);
  coals.moveTo(x + 0.05, y);
  coals.ellipse(x, y, 0.05, 0.04, 0, 0, Math.PI * 2);
}
const heap = new Path2D();
heap.moveTo(-0.34, -0.12);
heap.quadraticCurveTo(0, -0.3, 0.34, -0.12);
heap.closePath();
const glow = g.createLinearGradient(0, -0.28, 0, -0.12);
glow.addColorStop(0, '#ffc066');
glow.addColorStop(1, '#c0502c');
g.fillStyle = glow;
g.fill(heap);
g.fill(coals);
e.light(0, -0.24, 0.16, '#ff9a4a', 0.8, 'glow');
// the bars before them
const grate = new Path2D();
for (let i = 0; i < 6; i++) {
  grate.moveTo(-0.3 + i * 0.12, -0.42);
  grate.lineTo(-0.3 + i * 0.12, -0.12);
}
grate.moveTo(-0.34, -0.42);
grate.lineTo(0.34, -0.42);
grate.moveTo(-0.34, -0.12);
grate.lineTo(0.34, -0.12);
grate.moveTo(-0.3, -0.12);
grate.lineTo(-0.32, 0);
grate.moveTo(0.3, -0.12);
grate.lineTo(0.32, 0);
g.strokeStyle = '#1e1a18';
g.lineCap = 'round';
g.lineWidth = 0.022;
g.stroke(grate);
