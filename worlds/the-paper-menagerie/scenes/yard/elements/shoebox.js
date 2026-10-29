// The shoebox on the top step (3.4–3.6): the animals Jack gathered that day — by `shoebox`: 1, the ones from the
// attic, dusty — two goats, the deer, the buffalo — looking over its rim; 2, so many the lid will not go on — cranes,
// frogs, a shark's fin, the goats among them —, the lid leaning against it. `menu_house`: the paper house from the
// hospital's menu on top, its windows drawn row over row, asleep. 0 — not there. Its point: `box`.
// Each animal is a layer of its own (pivoting at the rim), the box's front the last layer over them: as the sun goes
// (`menagerie_sleep` 0…1) they lie down one by one into the box — the animate tips them over, a snap each, and they are
// paper.
const n = e.state.shoebox ?? 0;
if (!n) return;
const poly = (l, pts, c) => {
  l.fillStyle = c;
  l.beginPath();
  l.moveTo(pts[0][0], pts[0][1]);
  for (const p of pts.slice(1)) l.lineTo(p[0], p[1]);
  l.closePath();
  l.fill();
};
const goat = (l, x, c, d) => {
  poly(l, [[x - 0.035, -0.13], [x + 0.03, -0.135], [x + 0.034, -0.11], [x - 0.032, -0.108]], c);
  poly(l, [[x + 0.02, -0.135], [x + 0.04, -0.17], [x + 0.05, -0.16], [x + 0.034, -0.13]], d);
  poly(l, [[x + 0.04, -0.17], [x + 0.032, -0.19], [x + 0.046, -0.172]], d);
};
e.layer('goat1', { pivot: [-0.1, -0.11] }, l => goat(l, -0.1, '#9cc49a', '#7aa679'));
e.layer('deer', { pivot: [0.0, -0.11] }, l => {
  poly(l, [[-0.02, -0.12], [0.0, -0.2], [0.02, -0.2], [0.01, -0.12]], '#d6a874');
  l.strokeStyle = '#b98a58';
  l.lineWidth = 0.006;
  l.beginPath();
  l.moveTo(0.005, -0.2);
  l.lineTo(-0.02, -0.235);
  l.moveTo(0.012, -0.2);
  l.lineTo(0.035, -0.235);
  l.stroke();
});
e.layer('goat2', { pivot: [0.07, -0.11] }, l => goat(l, 0.07, '#f2efe6', '#d9d6ce'));
e.layer('buffalo', { pivot: [0.14, -0.11] }, l => poly(l, [[0.1, -0.11], [0.17, -0.12], [0.18, -0.105]], '#a87a52'));
e.layer('crowd', { pivot: [0, -0.11] }, l => {
  if (n < 2) return;
  // cranes and frogs crowding up, the shark's fin among them
  for (const [x, c] of [[-0.15, '#f6f4ec'], [0.12, '#f2d6cf'], [-0.04, '#e9e4d6']]) {
    poly(l, [[x - 0.04, -0.14], [x, -0.16], [x + 0.045, -0.15], [x, -0.13]], c);
    poly(l, [[x + 0.03, -0.148], [x + 0.06, -0.2], [x + 0.045, -0.145]], c);
  }
  for (const x of [-0.07, 0.15]) {
    l.fillStyle = '#7bb26a';
    l.beginPath();
    l.ellipse(x, -0.125, 0.03, 0.018, 0, 0, Math.PI * 2);
    l.fill();
  }
  poly(l, [[0.03, -0.12], [0.06, -0.17], [0.075, -0.12]], '#8fa3b8');
});
e.layer('front', { pivot: [0, 0] }, l => {
  if (n >= 2) poly(l, [[0.19, 0], [0.22, -0.2], [0.25, -0.19], [0.22, 0]], '#c9b9a0');
  if (e.state.menu_house) {
    // the paper house from the menu: a tall white block, its windows ruled in pen
    poly(l, [[-0.06, -0.15], [0.03, -0.15], [0.03, -0.32], [-0.06, -0.32]], '#f6f4ec');
    poly(l, [[0.03, -0.15], [0.05, -0.16], [0.05, -0.33], [0.03, -0.32]], '#dcd8cc');
    l.fillStyle = 'rgba(60,70,110,0.6)';
    for (let r = 0; r < 8; r++) for (let c = 0; c < 3; c++) l.fillRect(-0.05 + c * 0.028, -0.31 + r * 0.02, 0.014, 0.008);
  }
  // the box: brown card, its front and a darker rim
  poly(l, [[-0.2, 0], [0.18, 0], [0.18, -0.11], [-0.2, -0.11]], '#b48a5e');
  poly(l, [[-0.2, -0.11], [0.18, -0.11], [0.18, -0.12], [-0.2, -0.12]], '#8e6a46');
  l.fillStyle = 'rgba(255,255,255,0.4)';
  l.fillRect(-0.12, -0.075, 0.14, 0.03);
  if (n === 1) {
    l.fillStyle = 'rgba(200,190,170,0.25)';
    l.fillRect(-0.2, -0.12, 0.38, 0.12);
  }
});
e.at(0, -0.14, 'box');
