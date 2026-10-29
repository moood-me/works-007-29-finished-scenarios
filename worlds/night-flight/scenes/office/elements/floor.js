// The office's floor from above: oiled boards running away from the viewer; a worn carpet of dark red and blue under
// the desk and before it. Its own metres: x across, y toward the viewer (x −2.5…2.5, y −2.05…2.05: the back wall at
// y −2.05).
g.fillStyle = '#6a4b33';
g.fillRect(-2.5, -2.05, 5, 4.1);
for (let x = -2.5, k = 0; x < 2.5; x += 0.15, k++) {
  g.fillStyle = k % 3 === 0 ? '#654630' : k % 3 === 1 ? '#6f5038' : '#684932';
  g.fillRect(x, -2.05, 0.145, 4.1);
  g.fillStyle = 'rgba(40,26,16,0.45)';
  for (let y = -2.05 + ((k * 0.71) % 1.7); y < 2.05; y += 1.7) g.fillRect(x, y, 0.145, 0.012);
}
g.fillStyle = 'rgba(35,22,14,0.5)';
for (let x = -2.5; x < 2.5; x += 0.15) g.fillRect(x + 0.142, -2.05, 0.008, 4.1);
// the carpet (across −0.3…2.3, 2.2…4.5 m away)
g.fillStyle = '#6e2e2a';
g.fillRect(-0.3, -1.15, 2.6, 2.3);
g.strokeStyle = '#2f3a52';
g.lineWidth = 0.12;
g.strokeRect(-0.18, -1.03, 2.36, 2.06);
g.strokeStyle = '#b08a5a';
g.lineWidth = 0.025;
g.strokeRect(-0.06, -0.91, 2.12, 1.82);
g.fillStyle = 'rgba(200,170,130,0.12)';
g.fillRect(0.3, 0.3, 1.4, 0.6);
