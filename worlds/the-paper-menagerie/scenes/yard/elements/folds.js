// What the sheet in Jack's hands does (the cast's part `letter` at `jack#letter`; this element is drawn over it, its
// layers carried to that point by the animate): `tremble` — the creases of the tiger's folds shivering along the sheet
// (it remembers them); `fold` 0…1 — the sheet folding back into the tiger, flap after flap coming over it (four, a
// snap each), the last one a red tiger's shape of folded paper. Nothing while both are 0.
const R = 0.15;
e.layer('creases', { pivot: [0, 0] }, l => {
  l.strokeStyle = 'rgba(110,30,20,0.55)';
  l.lineWidth = 0.004;
  l.beginPath();
  for (const k of [-0.5, 0, 0.5]) {
    l.moveTo(k * R, -R);
    l.lineTo(k * R, R);
    l.moveTo(-R, k * R);
    l.lineTo(R, k * R);
  }
  l.moveTo(-R, -R);
  l.lineTo(R, R);
  l.moveTo(R, -R);
  l.lineTo(-R, R);
  l.stroke();
});
const P = e.kit.paper;
const FLAPS = [
  [[-R, -R], [R, -R], [0, 0]],
  [[-R, R], [R, R], [0, 0]],
  [[-R, -R], [-R, R], [0, 0]],
  [[R, -R], [R, R], [0, 0]],
];
const SHADE = ['#d23a2e', '#b02a20', '#e8503f', '#c23a2e'];
FLAPS.forEach((pts, i) => {
  e.layer(['flap1', 'flap2', 'flap3', 'flap4'][i], { pivot: [0, 0] }, l => {
    P.poly(l, pts, SHADE[i]);
    P.crease(l, [pts[0], pts[1]], 0.003);
    P.star(l, (pts[0][0] + pts[1][0] + pts[2][0]) / 3, (pts[0][1] + pts[1][1] + pts[2][1]) / 3, 0.012);
  });
});
