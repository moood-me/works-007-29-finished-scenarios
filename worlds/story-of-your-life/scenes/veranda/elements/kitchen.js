// The kitchen as the window shows it from the yard, its far wall from the floor (metres, x −1.2…1.2; the floor at
// the deck's height): cream paint, a sage cupboard, the spice shelf, and on the right the stepladder, folded,
// leaning on the wall — the same kitchen, the same stepladder, all twenty-five years.
g.fillStyle = '#e9dfcb';
g.fillRect(-1.2, -2.62, 2.4, 2.64);
g.fillStyle = 'rgba(80,70,50,0.18)';
g.fillRect(-1.2, -1.62, 1.3, 0.06);
g.fillStyle = '#8fa18b';
g.fillRect(-1.18, -2.45, 1.26, 0.85);
g.strokeStyle = 'rgba(70,86,68,0.6)';
g.lineWidth = 0.012;
g.strokeRect(-1.1, -2.37, 1.1, 0.69);
g.fillStyle = '#b48f66';
g.fillRect(-1.1, -1.32, 0.8, 0.03);
for (let k = 0; k < 6; k++) {
  g.fillStyle = ['#a8632e', '#b58a3a', '#6e7a3c', '#8a3a2e', '#c2b28a', '#7a5a3a'][k];
  g.fillRect(-1.06 + k * 0.12, -1.44, 0.07, 0.12);
}
// the stepladder, folded flat against the wall: its two stiles, the treads seen edge on, the top step
g.save();
g.translate(0.3, 0);
g.rotate(0.07);
g.fillStyle = '#c4c2bc';
g.fillRect(-0.24, -1.62, 0.05, 1.62);
g.fillRect(0.19, -1.62, 0.05, 1.62);
for (let y = -0.35; y > -1.6; y -= 0.3) g.fillRect(-0.22, y, 0.44, 0.04);
g.fillStyle = '#d8d6d0';
g.fillRect(-0.25, -1.66, 0.5, 0.06);
g.restore();
