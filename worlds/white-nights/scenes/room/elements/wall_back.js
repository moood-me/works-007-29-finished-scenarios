// The back wall (x = across, −1.6 at the left wall … 1.9 at the right), its foot on the floor: the old green walls; the
// door to the stair at x −1.45…−0.7, standing ajar (its opening cut here, its leaf and the stairwell beyond are elements
// of their own) in a worn grey frame; a little shelf of books; over the table a cheap print of Venice pinned up
// a little askew — the one he never saw
const INK = e.lib.INK;
e.lib.greenWall(g, -1.6, 1.9, 2.45, 1);
e.lib.cut(g, -1.45, -1.95, 0.75, 1.95);
// (the door's frame)
g.fillStyle = '#b5ab96';
g.beginPath();
g.rect(-1.54, -2.04, 0.93, 2.04);
g.rect(-1.45, -1.95, 0.75, 1.95);
g.fill('evenodd');
g.strokeStyle = INK;
g.lineWidth = 0.01;
g.stroke();
// (the shelf: a plank on two brackets, the books standing on it, one leaning)
e.lib.box(g, -0.48, -1.56, 0.7, 0.03, '#7a634c', 0.008);
for (const x of [-0.4, 0.12]) {
  g.fillStyle = '#6a5442';
  g.beginPath();
  g.moveTo(x, -1.53);
  g.lineTo(x + 0.03, -1.53);
  g.lineTo(x + 0.03, -1.4);
  g.closePath();
  g.fill();
  g.strokeStyle = INK;
  g.lineWidth = 0.006;
  g.stroke();
}
const spines = ['#7d3b33', '#4f5a3e', '#8a6a3c', '#3f4658', '#6e4a3a', '#9a8460', '#55433a'];
let x = -0.44;
for (let i = 0; i < spines.length; i++) {
  const w = 0.035 + 0.025 * e.anim.hash(i, 21), h = 0.17 + 0.07 * e.anim.hash(i, 22);
  e.lib.box(g, x, -1.56 - h, w, h, spines[i], 0.006);
  g.fillStyle = 'rgba(214,190,120,0.7)';
  g.fillRect(x + 0.006, -1.56 - h + 0.03, w - 0.012, 0.012);
  x += w + 0.004;
}
g.save();
g.translate(x + 0.01, -1.56);
g.rotate(0.38);
e.lib.box(g, 0, -0.2, 0.045, 0.2, '#6b5a7a', 0.006);
g.restore();
// (the print of Venice: a sheet of old paper pinned at its top, a little askew; drawn in sepia — the lagoon, a dome, a
// bell tower, a gondola)
g.save();
g.translate(0.8, -1.88);
g.rotate(-0.035);
g.fillStyle = '#ece2c8';
g.fillRect(-0.3, 0, 0.6, 0.42);
g.strokeStyle = INK;
g.lineWidth = 0.006;
g.strokeRect(-0.3, 0, 0.6, 0.42);
g.strokeRect(-0.27, 0.03, 0.54, 0.34);
g.fillStyle = 'rgba(138,104,72,0.55)';
g.beginPath();
g.moveTo(-0.27, 0.25);
g.lineTo(-0.2, 0.25);
g.lineTo(-0.2, 0.2);
g.quadraticCurveTo(-0.15, 0.13, -0.1, 0.2);
g.lineTo(-0.1, 0.25);
g.lineTo(0.02, 0.25);
g.lineTo(0.02, 0.1);
g.lineTo(0.035, 0.07);
g.lineTo(0.05, 0.1);
g.lineTo(0.05, 0.25);
g.lineTo(0.27, 0.25);
g.lineTo(0.27, 0.26);
g.lineTo(-0.27, 0.26);
g.closePath();
g.fill();
g.stroke();
g.beginPath();
for (let k = 0; k < 6; k++) {
  const y = 0.28 + k * 0.015;
  g.moveTo(-0.25 + 0.02 * (k % 2), y);
  g.lineTo(0.25 - 0.03 * (k % 3), y);
}
g.moveTo(0.06, 0.32);
g.quadraticCurveTo(0.12, 0.335, 0.2, 0.31);
g.moveTo(0.14, 0.33);
g.lineTo(0.17, 0.27);
g.strokeStyle = 'rgba(74,63,58,0.7)';
g.lineWidth = 0.004;
g.stroke();
g.fillStyle = '#3a3330';
g.beginPath();
g.arc(0, 0.012, 0.007, 0, Math.PI * 2);
g.fill();
g.restore();
