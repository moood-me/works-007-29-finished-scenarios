// The balcony's front (metres from the foot of its fascia; its floor 0.3 up): the fascia board, a railing of turned
// balusters painted the green of the shutters, a top rail worn by elbows.
g.fillStyle = '#4e4034';
g.fillRect(-1.35, -0.32, 2.7, 0.32);
g.fillStyle = 'rgba(30,26,22,0.35)';
g.fillRect(-1.35, -0.06, 2.7, 0.06);
g.fillStyle = '#4e6a62';
g.fillRect(-1.33, -1.32, 2.66, 0.07);
g.fillRect(-1.33, -0.42, 2.66, 0.06);
for (let x = -1.25; x <= 1.26; x += 0.125) {
  g.fillStyle = '#58766c';
  g.fillRect(x - 0.018, -1.26, 0.036, 0.85);
  g.beginPath();
  g.ellipse(x, -0.84, 0.03, 0.06, 0, 0, Math.PI * 2);
  g.fill();
}
