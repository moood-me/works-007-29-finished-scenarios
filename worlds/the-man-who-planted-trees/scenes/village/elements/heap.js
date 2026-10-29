// A charcoal burner's heap on the open ground toward the plateau's edge, by `time`: in the prologue a smouldering
// kiln — a dome of earth and turf over the stacked wood, its vent at the top (`vent`, where the particles `coal_a`,
// `coal_b` smoke as much as `coal`), poles leaning on it, sacks of charcoal by it; in the second chapter cold and
// fallen in, black, charred poles sticking out; in the third a low black ring grown over with grass; gone in the
// epilogue
const t = e.lib.T(e);
if (t === 0) {
  g.fillStyle = "#5b5149";
  g.beginPath();
  g.moveTo(-3.2, 0.05);
  g.bezierCurveTo(-2.9, -1.7, -1.2, -2.25, 0, -2.25);
  g.bezierCurveTo(1.2, -2.25, 2.9, -1.7, 3.2, 0.05);
  g.closePath();
  g.fill();
  // patches of turf and earth on it, the dark vents round its shoulder
  for (let i = 0; i < 26; i++) {
    const a = Math.PI * (0.1 + e.rnd() * 0.8), x = -Math.cos(a) * 2.7 * e.rnd(), y = -Math.sin(a) * 1.9 * (0.3 + e.rnd() * 0.65);
    g.fillStyle = ["#6e6252", "#4a423b", "#7a6d58", "#66694a"][i % 4];
    g.beginPath();
    g.ellipse(x, y, 0.35 + e.rnd() * 0.35, 0.16 + e.rnd() * 0.12, 0, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = "#231e1b";
  for (const [x, y] of [[-1.6, -1.2], [1.1, -1.5], [2.1, -0.8], [-0.3, -2.1]]) {
    g.beginPath();
    g.ellipse(x, y, 0.1, 0.06, 0, 0, Math.PI * 2);
    g.fill();
  }
  // poles leaning on it, a ladder-pole on its flank
  g.strokeStyle = "#6a5642";
  g.lineCap = "round";
  g.lineWidth = 0.08;
  g.beginPath();
  g.moveTo(-3.6, 0.05);
  g.lineTo(-1.6, -1.9);
  g.moveTo(3.4, 0.05);
  g.lineTo(2.2, -1.75);
  g.stroke();
  // sacks of charcoal by its foot
  for (const [x, w] of [[2.9, 0.55], [3.45, 0.5], [3.2, 0.5]]) {
    g.fillStyle = "#4d463f";
    g.beginPath();
    g.ellipse(x, -0.3 - (w === 0.5 && x === 3.2 ? 0.45 : 0), w / 2, 0.3, 0, 0, Math.PI * 2);
    g.fill();
  }
  e.at(-0.3, -2.25, "vent");
} else if (t === 1) {
  g.fillStyle = "#3a3430";
  g.beginPath();
  g.moveTo(-3.0, 0.05);
  g.bezierCurveTo(-2.4, -0.7, -0.8, -1.0, 0.2, -0.85);
  g.bezierCurveTo(1.4, -0.7, 2.6, -0.6, 3.1, 0.05);
  g.closePath();
  g.fill();
  g.fillStyle = "#6b655c";
  for (let i = 0; i < 18; i++) {
    g.beginPath();
    g.ellipse(-2.6 + e.rnd() * 5.2, -0.1 - e.rnd() * 0.55, 0.12, 0.05, 0, 0, Math.PI * 2);
    g.fill();
  }
  g.strokeStyle = "#2a2522";
  g.lineCap = "round";
  g.lineWidth = 0.08;
  g.beginPath();
  g.moveTo(-1.2, -0.6);
  g.lineTo(-1.6, -1.5);
  g.moveTo(0.9, -0.6);
  g.lineTo(1.3, -1.3);
  g.stroke();
  e.at(0, -0.6, "vent");
} else if (t === 2) {
  g.fillStyle = "#4e5240";
  g.beginPath();
  g.moveTo(-3.0, 0.05);
  g.quadraticCurveTo(0, -0.55, 3.0, 0.05);
  g.closePath();
  g.fill();
  g.strokeStyle = "#7f8f50";
  g.lineWidth = 0.03;
  for (let i = 0; i < 40; i++) {
    const x = -2.8 + e.rnd() * 5.6;
    g.beginPath();
    g.moveTo(x, 0.02);
    g.lineTo(x + (e.rnd() - 0.5) * 0.1, -0.2 - e.rnd() * 0.25);
    g.stroke();
  }
  e.at(0, -0.3, "vent");
}
