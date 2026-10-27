// The long table from above under its white damask cloth: a place laid for each of the five — a soup plate on a
// flat plate, silver either side, a glass, a folded napkin — and down the middle a runner, the bread on its board, a
// salt cellar; at the near side, at the prosecutor's place, his little notebook open and a pencil on it.
const W = 2.2;
const D = 0.575;
g.fillStyle = '#f2ece0';
g.fillRect(-W, -D, W * 2, D * 2);
g.strokeStyle = '#e2d9c6';
g.lineWidth = 0.012;
for (let x = -W + 0.2; x < W; x += 0.4) {
  g.beginPath();
  g.moveTo(x, -D);
  g.lineTo(x, D);
  g.stroke();
}
g.fillStyle = '#e6dcc8';
g.fillRect(-W + 0.3, -0.12, W * 2 - 0.6, 0.24);
// a place: plates, the silver, a napkin; soup in the plate if it is served
const place = (x, y, turn, soup) => {
  g.save();
  g.translate(x, y);
  g.rotate(turn);
  g.fillStyle = '#e9e3d6';
  g.beginPath();
  g.arc(0, 0, 0.14, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = '#c9a050';
  g.lineWidth = 0.006;
  g.beginPath();
  g.arc(0, 0, 0.125, 0, Math.PI * 2);
  g.stroke();
  g.fillStyle = '#fbf8f2';
  g.beginPath();
  g.arc(0, 0, 0.1, 0, Math.PI * 2);
  g.fill();
  if (soup) {
    g.fillStyle = '#d8a35a';
    g.beginPath();
    g.arc(0, 0, 0.075, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = '#a7a9ab';
  g.fillRect(-0.2, -0.1, 0.018, 0.2);
  g.fillRect(0.18, -0.1, 0.018, 0.2);
  g.fillRect(0.215, -0.1, 0.018, 0.2);
  g.fillStyle = '#f7f3ea';
  g.fillRect(-0.3, -0.06, 0.08, 0.12);
  g.restore();
};
// the far side: Pile, Kummer's place pushed aside, Traps; the judge's at the right end; the near side's three
place(-1.35, -0.3, 0, true);
place(-0.3, -0.32, 0.2, false);
place(0.55, -0.3, 0, true);
place(1.95, 0.0, -Math.PI / 2, true);
place(-1.3, 0.32, Math.PI, false);
place(0.55, 0.32, Math.PI, true);
place(1.4, 0.32, Math.PI, false);
// the bread on its board and the salt
g.fillStyle = '#8d6a45';
g.fillRect(-0.95, -0.09, 0.32, 0.18);
g.fillStyle = '#c99a5a';
g.beginPath();
g.ellipse(-0.79, 0, 0.12, 0.07, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#dcdad4';
g.beginPath();
g.arc(0.95, 0.02, 0.035, 0, Math.PI * 2);
g.fill();
// the notebook open at Zorn's place and his pencil across it
g.fillStyle = '#fbf6e6';
g.fillRect(0.12, 0.2, 0.2, 0.14);
g.strokeStyle = '#a99c84';
g.lineWidth = 0.004;
g.beginPath();
g.moveTo(0.22, 0.2);
g.lineTo(0.22, 0.34);
for (let y = 0.23; y < 0.33; y += 0.02) {
  g.moveTo(0.135, y);
  g.lineTo(0.21, y);
  g.moveTo(0.23, y);
  g.lineTo(0.3, y);
}
g.stroke();
g.strokeStyle = '#3c3a35';
g.lineWidth = 0.003;
g.beginPath();
g.moveTo(0.14, 0.235);
g.lineTo(0.19, 0.235);
g.moveTo(0.14, 0.255);
g.lineTo(0.205, 0.255);
g.moveTo(0.14, 0.275);
g.lineTo(0.17, 0.275);
g.stroke();
g.save();
g.translate(0.25, 0.27);
g.rotate(-0.5);
g.fillStyle = '#c99a2e';
g.fillRect(-0.09, -0.005, 0.17, 0.01);
g.fillStyle = '#2b2622';
g.fillRect(0.08, -0.004, 0.015, 0.008);
g.restore();
