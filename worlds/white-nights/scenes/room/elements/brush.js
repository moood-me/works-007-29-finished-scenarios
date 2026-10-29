// The long brush on a pole for the cobwebs — eight years leaning by the door, never used: the pole from the floor up
// against the wall, the bristles at its top. Not drawn while Matryona has it in her hands (`matryona_with`: brush);
// its point `brush` — where she takes it
const INK = e.lib.INK;
e.at(-0.02, -1.0, 'brush');
if ((e.state.matryona_with ?? []).includes('brush')) return;
g.beginPath();
g.moveTo(-0.1, 0);
g.lineTo(0.06, -1.62);
g.strokeStyle = '#6a5240';
g.lineWidth = 0.026;
g.lineCap = 'round';
g.stroke();
g.strokeStyle = INK;
g.lineWidth = 0.004;
g.stroke();
g.fillStyle = '#8a7a64';
g.beginPath();
g.ellipse(0.065, -1.7, 0.05, 0.12, 0.1, 0, Math.PI * 2);
g.fill();
g.stroke();
g.strokeStyle = 'rgba(74,63,58,0.5)';
g.beginPath();
for (let k = -2; k <= 2; k++) {
  g.moveTo(0.065 + k * 0.016, -1.8);
  g.lineTo(0.065 + k * 0.019, -1.6);
}
g.stroke();
