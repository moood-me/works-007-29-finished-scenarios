// A wedding lantern floating on the lake (copies all round the pier): a small raft of dark wood and on it a little
// lantern of warm paper, a little narrower at its top, ribbed, a candle burning inside — its light lights the water
// round it, the reeds, the people's faces from below; the lake mirrors it.
g.fillStyle = '#3a2f27';
g.fillRect(-0.16, -0.035, 0.32, 0.05);
const paper = g.createLinearGradient(0, -0.24, 0, -0.04);
paper.addColorStop(0, '#f0c98c');
paper.addColorStop(1, '#ffdca0');
g.fillStyle = paper;
g.beginPath();
g.moveTo(-0.075, -0.045);
g.lineTo(-0.062, -0.235);
g.lineTo(0.062, -0.235);
g.lineTo(0.075, -0.045);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(150,96,48,0.45)';
g.lineWidth = 0.006;
for (const y of [-0.17, -0.11]) {
  g.beginPath();
  g.moveTo(-0.072, y);
  g.lineTo(0.072, y);
  g.stroke();
}
g.fillStyle = '#4a3b2f';
g.fillRect(-0.07, -0.25, 0.14, 0.02);
g.fillRect(-0.08, -0.05, 0.16, 0.014);
e.light(0, -0.13, 0.6, '#ffb868', 1.1, 'flame');
