// The bench under the window along the back wall: a thick plank's front edge 0.46 m up on two slab legs cut with a
// notch; a folded homespun blanket at its left end (the Mistress has slept by this window thirty years).
g.fillStyle = '#9a6c40';
g.fillRect(-1.05, -0.46, 2.1, 0.07);
g.fillStyle = '#7a5232';
g.fillRect(-1.05, -0.39, 2.1, 0.02);
for (const x of [-0.85, 0.85]) {
  g.fillStyle = '#8a5f38';
  g.fillRect(x - 0.06, -0.39, 0.12, 0.39);
}
// the folded blanket: stripes of red and cream
const BX = -0.95, BW = 0.55, BH = 0.2;
['#a8382c', '#efe5cf', '#3f5f9c', '#efe5cf', '#a8382c'].forEach((c, i) => {
  g.fillStyle = c;
  g.fillRect(BX, -0.46 - BH + i * (BH / 5), BW, BH / 5);
});
