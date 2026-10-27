// The back wall, from its foot (metres across from the room's middle): the blue wash with the street door cut through
// it (x −2.6…−1.3, 2.6 high), the door's two leaves folded back flat against the wall either side; over the machines
// the board that says no politics are talked here; patterns of brown paper on nails, a rail of finished jackets in the
// far corner.
g.save();
g.beginPath();
g.rect(-3.4, -3.32, 6.8, 3.34);
g.rect(-2.6, -2.6, 1.3, 2.62);
g.clip('evenodd');
e.lib.wash(g, e, -3.4, 3.4, 3.3);
// the opening's plaster reveal
g.fillStyle = '#9fb0b2';
g.fillRect(-2.66, -2.66, 1.42, 0.06);
g.restore();
// the door's leaves folded back: tall planked panels in a dark green gone grey, two panels each, an iron bolt
for (const [x0, x1] of [[-3.3, -2.68], [-1.22, -0.6]]) {
  const w = x1 - x0;
  g.fillStyle = '#4c6858';
  g.fillRect(x0, -2.58, w, 2.56);
  g.fillStyle = '#5a7766';
  g.fillRect(x0 + 0.07, -2.48, w - 0.14, 1.05);
  g.fillRect(x0 + 0.07, -1.3, w - 0.14, 1.1);
  g.strokeStyle = '#3d5446';
  g.lineWidth = 0.02;
  g.strokeRect(x0 + 0.07, -2.48, w - 0.14, 1.05);
  g.strokeRect(x0 + 0.07, -1.3, w - 0.14, 1.1);
  g.fillStyle = 'rgba(170,160,138,0.5)';
  for (let i = 0; i < 14; i++) g.fillRect(x0 + e.rnd() * (w - 0.05), -2.5 + e.rnd() * 2.4, 0.02 + e.rnd() * 0.07, 0.01 + e.rnd() * 0.03);
  g.fillStyle = '#2c2a28';
  g.fillRect(x0 + w * 0.5 - 0.015, -1.4, 0.03, 0.14);
}
// the board over the machines: cream paint on planks, the words in black, a red rule under them
g.fillStyle = '#5a4634';
g.fillRect(0.12, -2.86, 2.36, 0.5);
g.fillStyle = '#e2d8bf';
g.fillRect(0.16, -2.82, 2.28, 0.42);
g.fillStyle = 'rgba(160,140,110,0.25)';
g.fillRect(0.16, -2.62, 2.28, 0.012);
g.fillStyle = '#9a3a2c';
g.fillRect(0.3, -2.47, 2.0, 0.02);
g.fillStyle = '#1e1a18';
g.font = 'bold 0.15px serif';
g.textAlign = 'center';
g.textBaseline = 'middle';
g.fillText(tr('No talk of politics here'), 1.3, -2.6, 2.1);
g.fillStyle = '#3a3230';
for (const x of [0.2, 2.4]) {
  g.beginPath();
  g.arc(x, -2.83, 0.015, 0, Math.PI * 2);
  g.fill();
}
e.at(1.3, -2.6, 'sign');
// patterns of brown paper hanging on nails: a back, a front, a sleeve
const paper = ['#b89a6c', '#a88a5c', '#c2a676'];
const pieces = [
  [[-0.35, -2.2], [0.05, -2.2], [0.1, -1.55], [-0.4, -1.55]],
  [[0.05, -2.15], [0.42, -2.15], [0.38, -1.6], [0.12, -1.48], [0.02, -1.6]],
  [[-0.55, -2.05], [-0.38, -2.15], [-0.25, -1.4], [-0.5, -1.4]],
];
pieces.forEach((pts, i) => {
  g.fillStyle = paper[i];
  g.beginPath();
  g.moveTo(pts[0][0], pts[0][1]);
  for (const [x, y] of pts.slice(1)) g.lineTo(x, y);
  g.closePath();
  g.fill();
  g.strokeStyle = 'rgba(90,70,50,0.5)';
  g.lineWidth = 0.008;
  g.stroke();
  g.fillStyle = '#2a2624';
  g.beginPath();
  g.arc(pts[0][0] + 0.08, pts[0][1] + 0.03, 0.012, 0, Math.PI * 2);
  g.fill();
});
// the rail in the far corner and the finished jackets on it, waiting to be fetched
g.fillStyle = '#3a3330';
g.fillRect(2.5, -2.25, 0.85, 0.025);
const coats = ['#3c3a40', '#d8d2c2', '#5a5248', '#2e2c30'];
coats.forEach((c, i) => {
  const x = 2.6 + i * 0.2;
  g.strokeStyle = '#3a3330';
  g.lineWidth = 0.01;
  g.beginPath();
  g.moveTo(x, -2.25);
  g.lineTo(x, -2.18);
  g.stroke();
  g.fillStyle = c;
  g.beginPath();
  g.moveTo(x - 0.17, -2.12);
  g.quadraticCurveTo(x, -2.2, x + 0.17, -2.12);
  g.lineTo(x + 0.2, -1.35);
  g.lineTo(x - 0.2, -1.35);
  g.closePath();
  g.fill();
  g.fillStyle = 'rgba(0,0,0,0.18)';
  g.fillRect(x - 0.005, -2.12, 0.01, 0.77);
});
// a seed-shop calendar by the door
g.fillStyle = '#d8ccb0';
g.fillRect(-0.95, -1.95, 0.28, 0.4);
g.fillStyle = '#4a6a8a';
g.fillRect(-0.95, -1.95, 0.28, 0.15);
g.fillStyle = 'rgba(70,60,50,0.55)';
for (let r = 0; r < 4; r++) {
  for (let c = 0; c < 7; c++) g.fillRect(-0.93 + c * 0.034, -1.77 + r * 0.045, 0.022, 0.02);
}
