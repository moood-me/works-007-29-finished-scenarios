// The floor from above (metres, its middle at distance 5.3, y toward the viewer): dark varnished boards running across
// the room, worn paler where feet go, and the faded red rug before the daybed (its middle at distance 4.9, y 0.4).
g.fillStyle = '#4a3427';
g.fillRect(-3.7, -3.4, 7.4, 6.8);
const tones = ['#5e4231', '#59402f', '#634635', '#553c2c'];
const B = 0.13;
for (let y = -3.4; y < 3.4; y += B) {
  let x = -3.7 - e.rnd() * 1.5;
  while (x < 3.7) {
    const len = 1.1 + e.rnd() * 1.8;
    g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    g.fillRect(x + 0.006, y + 0.006, len - 0.012, B - 0.012);
    x += len;
  }
}
g.fillStyle = 'rgba(150,118,90,0.18)';
g.beginPath();
g.ellipse(1.6, 0.9, 1.0, 0.6, 0.3, 0, Math.PI * 2);
g.fill();
// the rug: a deep red border, a dusky field, a worn medallion, fringe at the ends
g.save();
g.translate(-0.1, 0.4);
g.fillStyle = '#6e2f2b';
g.fillRect(-1.5, -0.95, 3.0, 1.9);
g.fillStyle = '#8c4a3b';
g.fillRect(-1.32, -0.78, 2.64, 1.56);
g.fillStyle = '#5b3a40';
g.beginPath();
g.ellipse(0, 0, 0.62, 0.42, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#b48a5e';
g.beginPath();
g.ellipse(0, 0, 0.3, 0.2, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#c29a6a';
g.lineWidth = 0.025;
g.strokeRect(-1.4, -0.86, 2.8, 1.72);
for (let i = 0; i < 26; i++) {
  g.fillStyle = 'rgba(205,170,130,0.2)';
  g.beginPath();
  g.ellipse(-1.2 + e.rnd() * 2.4, -0.7 + e.rnd() * 1.4, 0.06 + e.rnd() * 0.15, 0.03 + e.rnd() * 0.06, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#d8c7a6';
for (let y = -0.9; y < 0.9; y += 0.04) {
  g.fillRect(-1.58, y, 0.08, 0.012);
  g.fillRect(1.5, y, 0.08, 0.012);
}
g.restore();
