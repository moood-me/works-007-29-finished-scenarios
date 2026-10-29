// The shoebox on the top step (3.4–3.6): the animals Jack gathered that day — by `shoebox`: 1, the ones from the
// attic, dusty — two goats, the deer, the buffalo — looking over its rim; 2, so many the lid will not go on — cranes,
// frogs, a shark's fin, the goats among them —, the lid leaning against it. `menu_house`: the paper house from the
// hospital's menu on top, its windows drawn row over row, asleep. 0 — not there. Its point: `box`.
const n = e.state.shoebox ?? 0;
if (!n) return;
const poly = (pts, c) => {
  g.fillStyle = c;
  g.beginPath();
  g.moveTo(pts[0][0], pts[0][1]);
  for (const p of pts.slice(1)) g.lineTo(p[0], p[1]);
  g.closePath();
  g.fill();
};
// the animals over the rim, behind its front
const goat = (x, c, d) => {
  poly([[x - 0.035, -0.13], [x + 0.03, -0.135], [x + 0.034, -0.11], [x - 0.032, -0.108]], c);
  poly([[x + 0.02, -0.135], [x + 0.04, -0.17], [x + 0.05, -0.16], [x + 0.034, -0.13]], d);
  poly([[x + 0.04, -0.17], [x + 0.032, -0.19], [x + 0.046, -0.172]], d);
};
const dust = n === 1 ? 0.25 : 0;
goat(-0.1, '#9cc49a', '#7aa679');
goat(0.07, '#f2efe6', '#d9d6ce');
// the deer: a slim neck, the antlers
poly([[-0.02, -0.12], [0.0, -0.2], [0.02, -0.2], [0.01, -0.12]], '#d6a874');
g.strokeStyle = '#b98a58';
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(0.005, -0.2);
g.lineTo(-0.02, -0.235);
g.moveTo(0.012, -0.2);
g.lineTo(0.035, -0.235);
g.stroke();
// the buffalo's broad back and its horns
poly([[0.1, -0.11], [0.17, -0.12], [0.18, -0.105]], '#a87a52');
if (n >= 2) {
  // cranes and frogs crowding up, the shark's fin among them; the lid leaning against the box
  for (const [x, c] of [[-0.15, '#f6f4ec'], [0.12, '#f2d6cf'], [-0.04, '#e9e4d6']]) {
    poly([[x - 0.04, -0.14], [x, -0.16], [x + 0.045, -0.15], [x, -0.13]], c);
    poly([[x + 0.03, -0.148], [x + 0.06, -0.2], [x + 0.045, -0.145]], c);
  }
  for (const x of [-0.07, 0.15]) {
    g.fillStyle = '#7bb26a';
    g.beginPath();
    g.ellipse(x, -0.125, 0.03, 0.018, 0, 0, Math.PI * 2);
    g.fill();
  }
  poly([[0.03, -0.12], [0.06, -0.17], [0.075, -0.12]], '#8fa3b8');
  poly([[0.19, 0], [0.22, -0.2], [0.25, -0.19], [0.22, 0]], '#c9b9a0');
}
if (e.state.menu_house) {
  // the paper house from the menu: a tall white block, its windows ruled in pen
  poly([[-0.06, -0.15], [0.03, -0.15], [0.03, -0.32], [-0.06, -0.32]], '#f6f4ec');
  poly([[0.03, -0.15], [0.05, -0.16], [0.05, -0.33], [0.03, -0.32]], '#dcd8cc');
  g.fillStyle = 'rgba(60,70,110,0.6)';
  for (let r = 0; r < 8; r++) for (let c = 0; c < 3; c++) g.fillRect(-0.05 + c * 0.028, -0.31 + r * 0.02, 0.014, 0.008);
}
// the box: brown card, its front and a darker rim
poly([[-0.2, 0], [0.18, 0], [0.18, -0.11], [-0.2, -0.11]], '#b48a5e');
poly([[-0.2, -0.11], [0.18, -0.11], [0.18, -0.12], [-0.2, -0.12]], '#8e6a46');
g.fillStyle = 'rgba(255,255,255,0.4)';
g.fillRect(-0.12, -0.075, 0.14, 0.03);
if (dust) {
  g.fillStyle = `rgba(200,190,170,${dust})`;
  g.fillRect(-0.2, -0.12, 0.38, 0.12);
}
e.at(0, -0.14, 'box');
