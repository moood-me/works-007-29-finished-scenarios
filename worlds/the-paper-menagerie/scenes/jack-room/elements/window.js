// The window onto the street (its face is the opening x −0.55…0.55, from its foot at 0.85 m up 1.15 m): a white-painted
// frame, two sashes, the glass clear (the front yard, the street and Mark's house beyond), the sill. While the room is
// lived in, pale blue curtains drawn to the sides (as the yard sees them) and a paper crane hanging on a thread in the
// window — unless the animals are packed away (shelf `empty` or `bare`); `zoo`: paper cranes perched all over the
// curtains as if they had flown up there. Emptied (`packed`): the curtains gone, the rod bare.
const st = e.state;
g.fillStyle = '#f3f0e8';
g.fillRect(-0.6, -1.18, 1.2, 0.07);
g.fillRect(-0.6, -0.07, 1.2, 0.07);
g.fillRect(-0.6, -1.18, 0.07, 1.18);
g.fillRect(0.53, -1.18, 0.07, 1.18);
g.fillRect(-0.55, -0.62, 1.1, 0.05);
g.fillStyle = '#e7e2d6';
for (const cx of [-0.27, 0.27]) {
  g.fillRect(cx - 0.012, -1.12, 0.024, 0.5);
  g.fillRect(cx - 0.012, -0.57, 0.024, 0.5);
}
g.fillStyle = '#c9c2b2';
g.fillRect(-0.04, -0.66, 0.08, 0.02);
// the sill, proud of the wall
g.fillStyle = '#f6f3ec';
g.fillRect(-0.66, -0.02, 1.32, 0.06);
// the curtain rod
g.fillStyle = '#9a7f62';
g.fillRect(-0.72, -1.22, 1.44, 0.02);
if (!st.packed) {
  for (const sgn of [-1, 1]) {
    g.save();
    g.scale(sgn, 1);
    g.fillStyle = 'rgba(207,219,230,0.95)';
    g.beginPath();
    g.moveTo(-0.72, -1.2);
    g.lineTo(-0.46, -1.2);
    g.bezierCurveTo(-0.42, -0.85, -0.5, -0.4, -0.46, -0.04);
    g.lineTo(-0.72, -0.04);
    g.closePath();
    g.fill();
    g.fillStyle = 'rgba(150,170,190,0.35)';
    for (let x = -0.7; x < -0.48; x += 0.045) g.fillRect(x, -1.18, 0.006, 1.12);
    g.restore();
  }
  if (st.zoo) {
    // cranes perched on the curtains: white, yellow and newsprint
    const spots = [[-0.62, -0.95], [-0.55, -0.6], [-0.64, -0.3], [0.6, -1.0], [0.56, -0.7], [0.63, -0.42], [0.55, -0.18]];
    spots.forEach(([x, y], i) => e.lib.crane(g, x, y, ['#f4f1e8', '#efd77a', '#ddd8cc'][i % 3], i % 3 === 1 ? '#d8bd5a' : '#cfc9bc'));
    e.at(0.58, -0.7, 'cranes');
  }
  if (st.shelf !== 'empty' && st.shelf !== 'bare') {
    g.strokeStyle = 'rgba(240,240,236,0.85)';
    g.lineWidth = 0.004;
    g.beginPath();
    g.moveTo(0.12, -1.16);
    g.lineTo(0.12, -0.86);
    g.stroke();
    e.lib.crane(g, 0.12, -0.85, '#f4f1e8', '#d6d0c2');
    e.at(0.12, -0.86, 'crane');
  }
}
e.at(-0.15, -0.8, 'pane');
