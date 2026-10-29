// A paper crane on the sill, folded from a white page of the hospital's menu, still: its body a diamond, the neck and
// the tail sharp points up, the head bent down, the wings two flat triangles; the printed lines of the menu show
// faintly across its folds. There while `crane` ('Menagerie' 2).
if (!e.state.crane) return;
const W = '#f6f4ec',
  S = '#e4e1d4',
  D = '#d2cebe';
const tri = (pts, c) => {
  g.fillStyle = c;
  g.beginPath();
  g.moveTo(pts[0][0], pts[0][1]);
  for (const p of pts.slice(1)) g.lineTo(p[0], p[1]);
  g.closePath();
  g.fill();
};
tri([[-0.03, -0.035], [0.03, -0.035], [0.0, 0.0]], D);
tri([[-0.03, -0.035], [-0.1, -0.11], [-0.012, -0.03]], S);
tri([[-0.1, -0.11], [-0.115, -0.1], [-0.1, -0.09]], S);
tri([[0.03, -0.035], [0.1, -0.1], [0.012, -0.03]], S);
tri([[-0.03, -0.035], [0.0, -0.075], [0.03, -0.035], [0.0, -0.02]], W);
tri([[0.0, -0.075], [0.03, -0.035], [0.06, -0.05]], S);
g.strokeStyle = 'rgba(90,90,100,0.35)';
g.lineWidth = 0.0015;
for (let y = -0.06; y < -0.03; y += 0.008) {
  g.beginPath();
  g.moveTo(-0.02, y);
  g.lineTo(0.02, y);
  g.stroke();
}
