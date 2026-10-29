// The coffin on its trestles by the grave (side on, 2 m long), there while `funeral` is: two plain wooden trestles,
// the coffin on them under a heavy purple pall to the ground's half, gold fringe at its edge and the Canterville arms
// worked in gold on its side; a tall tuft of black ostrich plumes at each end, nodding in the wind; and, if `cross`,
// the cross of white and pink almond blossom laid along its top. Its point `coffin#lid` is on the top.
if (!e.state.funeral) return;
const WOOD = '#6a5038';
const PALL = '#4a2450';
const PALL_DARK = '#381a3e';
const GOLD = '#c8a040';
// the trestles: an A of legs at each end, a bar across
g.fillStyle = WOOD;
for (const x of [-0.7, 0.7]) {
  for (const s of [-1, 1]) {
    g.save();
    g.translate(x, -0.6);
    g.rotate(s * 0.22);
    g.fillRect(-0.03, 0, 0.06, 0.64);
    g.restore();
  }
  g.fillRect(x - 0.22, -0.62, 0.44, 0.06);
}
// the coffin's foot board showing under the pall
g.fillStyle = '#3a2a20';
g.fillRect(-1.0, -0.66, 2.0, 0.06);
// the pall: over the top and down the side, its hem in shallow folds, a gold fringe
g.fillStyle = PALL;
g.beginPath();
g.moveTo(-1.08, -1.06);
g.lineTo(1.08, -1.06);
g.lineTo(1.1, -0.46);
for (let x = 1.1; x > -1.1; x -= 0.2) g.quadraticCurveTo(x - 0.1, -0.42, x - 0.2, -0.46);
g.closePath();
g.fill();
g.fillStyle = PALL_DARK;
for (let x = -0.9; x < 1.0; x += 0.4) g.fillRect(x, -1.0, 0.05, 0.52);
g.fillStyle = GOLD;
g.fillRect(-1.1, -0.5, 2.2, 0.035);
for (let x = -1.08; x < 1.1; x += 0.05) g.fillRect(x, -0.47, 0.015, 0.06);
g.fillRect(-1.08, -1.08, 2.16, 0.03);
// the arms: a shield in gold on the side
g.beginPath();
g.moveTo(-0.16, -0.94);
g.lineTo(0.16, -0.94);
g.lineTo(0.16, -0.76);
g.quadraticCurveTo(0.16, -0.6, 0, -0.56);
g.quadraticCurveTo(-0.16, -0.6, -0.16, -0.76);
g.closePath();
g.fill();
g.fillStyle = PALL;
g.fillRect(-0.12, -0.84, 0.24, 0.04);
g.beginPath();
g.arc(0, -0.72, 0.04, 0, Math.PI * 2);
g.fill();
// the plumes: tall black ostrich feathers bunched at each end, curling over at their tops, nodding
for (const x of [-1.0, 1.0]) {
  e.layer(x < 0 ? 'plume_l' : 'plume_r', { pivot: [x, -1.08], wind: { strength: 0.35, gust: 0.5 } }, c => {
    c.fillStyle = '#141216';
    c.fillRect(x - 0.02, -1.4, 0.04, 0.34);
    for (let i = 0; i < 7; i++) {
      const dx = (i - 3) * 0.05;
      const lean = (i - 3) * 0.06;
      c.fillStyle = i % 2 ? '#1c1a20' : '#26232a';
      c.beginPath();
      c.moveTo(x + dx * 0.4, -1.3);
      c.quadraticCurveTo(x + dx + lean * 0.5, -1.65, x + dx + lean, -1.72);
      c.quadraticCurveTo(x + dx + lean * 1.6, -1.6, x + dx + lean * 1.2, -1.45);
      c.quadraticCurveTo(x + dx * 0.8, -1.4, x + dx * 0.4 + 0.03, -1.3);
      c.closePath();
      c.fill();
    }
  });
}
// the cross of almond blossom laid along the top: a ridge of white and pink flowers, its arms seen end on in the
// middle as a taller knot
if (e.state.cross) {
  for (let x = -0.62; x <= 0.5; x += 0.045) {
    const knot = Math.abs(x + 0.18) < 0.1;
    g.fillStyle = e.rnd() < 0.3 ? '#f2ccd4' : '#faf6f0';
    g.beginPath();
    g.arc(x, -1.1 - (knot ? 0.05 : 0) - e.rnd() * 0.03, 0.04, 0, Math.PI * 2);
    g.fill();
  }
}
e.at(0, -1.1, 'lid');
e.at(0, -0.8);
