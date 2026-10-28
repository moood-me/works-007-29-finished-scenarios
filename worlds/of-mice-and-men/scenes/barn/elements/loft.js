// The hayloft's floor seen from below (metres from its front edge over the posts, 5 m ahead, y back toward the
// viewer): rough boards across, the heavy joists under them running back, hay and chaff hanging in the gaps.
g.fillStyle = '#6a5642';
g.fillRect(-4.95, -5.6, 9.9, 5.65);
g.fillStyle = 'rgba(40,30,22,0.6)';
for (let y = -0.25; y > -5.6; y -= 0.22) g.fillRect(-4.95, y, 9.9, 0.012);
g.fillStyle = '#4a3a2b';
for (let x = -4.6; x < 4.95; x += 0.9) g.fillRect(x, -5.6, 0.16, 5.65);
g.strokeStyle = '#a88d58';
g.lineWidth = 0.012;
for (let i = 0; i < 160; i++) {
  const x = -4.9 + e.rnd() * 9.8, y = -0.25 - Math.floor(e.rnd() * 24) * 0.22;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + (e.rnd() - 0.5) * 0.1, y + 0.05 + e.rnd() * 0.08);
  g.stroke();
}
