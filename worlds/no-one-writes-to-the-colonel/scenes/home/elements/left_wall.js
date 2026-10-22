// The left wall, from its foot (facing the room: x runs away from the viewer, distance 1.84 at x −1.88, 5.6 at 1.88):
// limewash over adobe, the open doorway onto the yard (x −0.4…0.6, 2.1 high), its planked blue door swung back
// against the wall on this side of it.
g.save();
g.beginPath();
g.rect(-1.88, -2.92, 3.76, 2.94);
g.rect(-0.4, -2.1, 1.0, 2.14);
g.clip('evenodd');
e.lib.limewash(g, e, -1.88, 1.88, 2.9);
g.restore();
// the door leaf against the wall: faded blue planks, the paint worn to grey wood at the edges, a wooden latch
g.fillStyle = '#5f7f93';
g.fillRect(-1.38, -2.06, 0.9, 2.04);
const planks = ['#6a8a9c', '#5a7a8d', '#6e8d9a', '#577689'];
for (let i = 0; i < 6; i++) {
  g.fillStyle = planks[i % 4];
  g.fillRect(-1.37 + i * 0.148, -2.05, 0.14, 2.02);
}
g.fillStyle = 'rgba(150,140,120,0.45)';
for (let i = 0; i < 18; i++) g.fillRect(-1.37 + e.rnd() * 0.85, -2.0 + e.rnd() * 1.9, 0.03 + e.rnd() * 0.1, 0.01 + e.rnd() * 0.02);
g.fillStyle = '#4a6170';
g.fillRect(-1.38, -1.75, 0.9, 0.08);
g.fillRect(-1.38, -0.45, 0.9, 0.08);
g.fillStyle = '#3a2e24';
g.fillRect(-1.36, -1.08, 0.12, 0.04);
