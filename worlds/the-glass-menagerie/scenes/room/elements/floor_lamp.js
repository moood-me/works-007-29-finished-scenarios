// The floor lamp by the daybed: a heavy round foot, a bronze pole, a pleated parchment shade with a beaded fringe; its
// bulb inside the shade is the scene's light "lamp".
g.fillStyle = '#3e3125';
g.beginPath();
g.ellipse(0, -0.03, 0.17, 0.035, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#6b5638';
g.fillRect(-0.014, -1.3, 0.028, 1.28);
g.fillRect(-0.03, -0.7, 0.06, 0.05);
// the shade
g.fillStyle = '#e7d3ad';
g.beginPath();
g.moveTo(-0.13, -1.62);
g.lineTo(0.13, -1.62);
g.lineTo(0.25, -1.3);
g.lineTo(-0.25, -1.3);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(160,128,86,0.45)';
g.lineWidth = 0.008;
for (let i = -5; i <= 5; i++) {
  g.beginPath();
  g.moveTo(i * 0.024, -1.62);
  g.lineTo(i * 0.048, -1.3);
  g.stroke();
}
g.fillStyle = '#b07c48';
g.fillRect(-0.255, -1.31, 0.51, 0.02);
g.fillStyle = '#8f5f36';
for (let x = -0.24; x <= 0.24; x += 0.03) g.fillRect(x, -1.29, 0.006, 0.05);
e.light(0, -1.4, 0.22, '#ffd59a', 1, 'bulb');
