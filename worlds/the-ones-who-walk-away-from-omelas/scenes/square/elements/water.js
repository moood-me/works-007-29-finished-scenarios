// The water in the basin, seen from above: a disc 1.45 m round, green-blue over the pale stone of its floor; light
// streaks on it wavering where the fountain's water falls (layer `glints`)
const A = e.anim;
const g2 = g.createRadialGradient(0, 0, 0.2, 0, 0, 1.45);
g2.addColorStop(0, '#87b3b6');
g2.addColorStop(1, '#6f9ea6');
g.fillStyle = g2;
g.beginPath();
g.arc(0, 0, 1.45, 0, Math.PI * 2);
g.fill();
e.layer('glints', { shimmer: 0.6 }, g => {
  g.fillStyle = '#d8eef0';
  for (let i = 0; i < 40; i++) {
    const a = A.hash(i, 1) * Math.PI * 2, r = 0.3 + 1.05 * Math.sqrt(A.hash(i, 2));
    g.beginPath();
    g.ellipse(Math.cos(a) * r, Math.sin(a) * r, 0.07 + 0.06 * A.hash(i, 3), 0.015, a + Math.PI / 2, 0, Math.PI * 2);
    g.fill();
  }
});
