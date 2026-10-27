// The floor from above (metres; its middle at distance 3.75, y toward the viewer): cement tiles pressed with a
// pattern, ochre and brick-red and grey, worn plain where feet go; wet footprints in from the street door; scraps of
// cloth and ends of thread under the machines, chalk dust by the cutting.
const T = 0.25;
for (let x = -3.4; x < 3.4; x += T) {
  for (let y = -2.45; y < 2.45; y += T) {
    g.fillStyle = '#a48a68';
    g.fillRect(x, y, T, T);
    g.fillStyle = '#8c4a38';
    g.beginPath();
    g.moveTo(x + T / 2, y + 0.03);
    g.lineTo(x + T - 0.03, y + T / 2);
    g.lineTo(x + T / 2, y + T - 0.03);
    g.lineTo(x + 0.03, y + T / 2);
    g.closePath();
    g.fill();
    g.fillStyle = '#b8a888';
    g.beginPath();
    g.arc(x + T / 2, y + T / 2, 0.035, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = 'rgba(60,48,38,0.5)';
    g.fillRect(x, y, T, 0.006);
    g.fillRect(x, y, 0.006, T);
  }
}
// worn where feet go: from the door to the machines, before the mirror
g.fillStyle = 'rgba(160,140,112,0.55)';
for (const [x, y, rx, ry, a] of [[-1.9, -1.4, 0.6, 1.1, 0.2], [-0.6, -0.5, 1.4, 0.45, 0.1], [1.4, -0.6, 1.6, 0.35, 0], [-2.7, 0.5, 0.5, 0.8, 0]]) {
  g.beginPath();
  g.ellipse(x, y, rx, ry, a, 0, Math.PI * 2);
  g.fill();
}
// wet footprints in from the street door
g.fillStyle = 'rgba(60,52,44,0.45)';
for (let i = 0; i < 7; i++) {
  const x = -1.95 + (i % 2 ? 0.12 : -0.08) + i * 0.02;
  const y = -2.3 + i * 0.32;
  g.beginPath();
  g.ellipse(x, y, 0.045, 0.11, 0.1, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = 'rgba(60,52,44,0.3)';
g.beginPath();
g.ellipse(-1.95, -2.35, 0.6, 0.12, 0, 0, Math.PI * 2);
g.fill();
// scraps of cloth and ends of thread under the machines
const scrap = ['#2c2b30', '#e4e0d4', '#7a776e', '#c4b08a', '#8e3a30'];
for (let i = 0; i < 40; i++) {
  const x = -1.4 + e.rnd() * 4.6;
  const y = -1.2 + e.rnd() * 0.9;
  g.fillStyle = scrap[Math.floor(e.rnd() * scrap.length)];
  g.save();
  g.translate(x, y);
  g.rotate(e.rnd() * 3);
  g.fillRect(-0.04, -0.015, 0.05 + e.rnd() * 0.08, 0.02 + e.rnd() * 0.03);
  g.restore();
}
g.lineWidth = 0.004;
for (let i = 0; i < 30; i++) {
  const x = -1.4 + e.rnd() * 4.6;
  const y = -1.3 + e.rnd() * 1.4;
  g.strokeStyle = e.rnd() < 0.5 ? 'rgba(240,236,226,0.8)' : 'rgba(40,40,44,0.7)';
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x + (e.rnd() - 0.5) * 0.2, y + (e.rnd() - 0.5) * 0.2, x + (e.rnd() - 0.5) * 0.25, y + (e.rnd() - 0.5) * 0.15);
  g.stroke();
}
