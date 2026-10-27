// The kitchen as the window shows it from the yard, its far wall from the floor (metres; the floor at the deck's
// height): cream paint, the sage cupboards, the spice shelf, and in the corner the stepladder, folded, leaning on
// the wall — the same kitchen, the same stepladder, all twenty-five years.
g.fillStyle = '#e9dfcb';
g.fillRect(-2.2, -2.62, 4.4, 2.64);
g.fillStyle = 'rgba(80,70,50,0.18)';
g.fillRect(-2.2, -1.62, 2.6, 0.06);
for (let i = 0; i < 2; i++) {
  const x = -2.2 + i * 1.3;
  g.fillStyle = '#8fa18b';
  g.fillRect(x + 0.02, -2.45, 1.26, 0.85);
  g.strokeStyle = 'rgba(70,86,68,0.6)';
  g.lineWidth = 0.012;
  g.strokeRect(x + 0.1, -2.37, 1.1, 0.69);
}
g.fillStyle = '#b48f66';
g.fillRect(0.6, -1.55, 0.8, 0.03);
for (let k = 0; k < 6; k++) {
  g.fillStyle = ['#a8632e', '#b58a3a', '#6e7a3c', '#8a3a2e', '#c2b28a', '#7a5a3a'][k];
  g.fillRect(0.64 + k * 0.12, -1.67, 0.07, 0.12);
}
// the stepladder, folded flat against the wall in the corner: its two stiles, the treads seen edge on
const SX = 1.55;
g.save();
g.translate(SX, 0);
g.rotate(0.07);
g.fillStyle = '#c4c2bc';
g.fillRect(-0.24, -1.62, 0.05, 1.62);
g.fillRect(0.19, -1.62, 0.05, 1.62);
for (let y = -0.35; y > -1.6; y -= 0.3) g.fillRect(-0.22, y, 0.44, 0.04);
g.fillStyle = '#d8d6d0';
g.fillRect(-0.25, -1.66, 0.5, 0.06);
g.restore();
