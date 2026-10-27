// The side alley's far wall seen through the window (metres from its foot): an old wall of the next yard, its wash
// gone green with damp, a banana leaf and an almond's branch leaning over it.
g.fillStyle = '#a8aa94';
g.fillRect(-4, -3.2, 8, 3.25);
for (let i = 0; i < 30; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(110,124,96,0.4)' : 'rgba(180,176,156,0.4)';
  g.fillRect(-4 + e.rnd() * 8, -3.2 + e.rnd() * 3.2, 0.3 + e.rnd() * 0.8, 0.1 + e.rnd() * 0.3);
}
const damp = g.createLinearGradient(0, 0, 0, -1.2);
damp.addColorStop(0, 'rgba(70,90,60,0.6)');
damp.addColorStop(1, 'rgba(70,90,60,0)');
g.fillStyle = damp;
g.fillRect(-4, -1.2, 8, 1.25);
g.fillStyle = '#5a6b4c';
g.fillRect(-4, -3.3, 8, 0.12);
e.layer('leaves', { pivot: [0.5, -3.1], wind: 0.5 }, l => {
  for (const [x, y, a, s] of [[-0.8, -3.3, -0.5, 1], [0.6, -3.5, 0.3, 1.2], [1.6, -3.2, 0.9, 0.9]]) {
    l.save();
    l.translate(x, y);
    l.rotate(a);
    l.scale(s, s);
    l.fillStyle = '#4e7a3e';
    l.beginPath();
    l.ellipse(0, 0.5, 0.28, 0.9, 0, 0, Math.PI * 2);
    l.fill();
    l.strokeStyle = '#3e6230';
    l.lineWidth = 0.03;
    l.beginPath();
    l.moveTo(0, -0.4);
    l.lineTo(0, 1.4);
    l.stroke();
    l.restore();
  }
});
