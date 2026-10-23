// The pool, seen from above: deep green water, lighter over the shallows at both banks; a few sycamore leaves afloat.
// Its mirror (reflect) lays the sky, the far bank and the tree on it.
const A = e.anim;
g.fillStyle = '#3c5545';
g.fillRect(-150, -9.35, 300, 18.7);
g.fillStyle = '#56704f';
g.fillRect(-150, 6.6, 300, 2.75);
g.fillRect(-150, -9.35, 300, 2.2);
for (let i = 0; i < 40; i++) {
  const x = -12 + A.hash(i, 1) * 24, y = -7 + A.hash(i, 2) * 14;
  g.fillStyle = A.hash(i, 3) < 0.5 ? '#9a7a45' : '#b08c50';
  g.beginPath();
  g.ellipse(x, y, 0.1, 0.07, A.hash(i, 4) * 3, 0, Math.PI * 2);
  g.fill();
}
