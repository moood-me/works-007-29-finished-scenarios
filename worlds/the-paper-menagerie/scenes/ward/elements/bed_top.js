// The bed from above (metres, its middle at across 0.78, distance 3.9; x from the head, left, to the foot, y toward the
// viewer): the white sheet, a little blue in its creases, pressed down where she sits near the head; the drawsheet
// across its middle. Its point `lie`: where her hips lie when she is in bed (mom_on: "bed_top#lie", the motion lie_bed).
g.fillStyle = '#eef0ec';
g.fillRect(-1.08, -0.45, 2.16, 0.9);
g.fillStyle = 'rgba(176,190,204,0.35)';
for (const [x, y, a, l] of [
  [-0.2, 0.15, 0.4, 0.5],
  [0.2, -0.1, -0.3, 0.6],
  [-0.5, 0.25, 0.9, 0.3],
  [0.1, 0.32, 0.1, 0.4],
]) {
  g.save();
  g.translate(x, y);
  g.rotate(a);
  g.fillRect(-l / 2, -0.004, l, 0.008);
  g.restore();
}
g.fillStyle = 'rgba(200,210,220,0.35)';
g.fillRect(-0.3, -0.45, 0.7, 0.9);
g.fillStyle = 'rgba(150,160,170,0.18)';
g.beginPath();
g.ellipse(-0.4, 0.27, 0.28, 0.14, 0, 0, Math.PI * 2);
g.fill();
e.at(-0.06, 0.05, 'lie');
