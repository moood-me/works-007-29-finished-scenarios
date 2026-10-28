// The back lawn seen from above (x -30...30, y -26 far ... 26 near): mown stripes going away from the house, a path
// of flags from the back door to the gate, a bed of roses along it.
g.fillStyle = '#4c6146';
g.fillRect(-30, -26, 60, 52);
for (let x = -30; x < 30; x += 1.2) {
  g.fillStyle = Math.round(x / 1.2) % 2 ? 'rgba(98, 122, 88, 0.35)' : 'rgba(58, 76, 54, 0.25)';
  g.fillRect(x, -26, 1.2, 52);
}
// the path, flags along it
g.fillStyle = '#9a9488';
for (let y = 25.5; y > 16; y -= 0.75) {
  g.beginPath();
  g.roundRect(1.0 + 0.08 * Math.sin(y * 3), y - 0.6, 0.62, 0.6, 0.06);
  g.fill();
}
// the rose bed: a strip of dark earth, bushes, a few pale roses
g.fillStyle = '#4a3a2e';
g.fillRect(-4, 16.5, 4.4, 1.1);
for (let k = 0; k < 9; k++) {
  const x = -3.7 + k * 0.48;
  g.fillStyle = '#3d5236';
  g.beginPath();
  g.arc(x, 17.05, 0.26, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = k % 2 ? '#e7c6c8' : '#f0e2cf';
  g.beginPath();
  g.arc(x + 0.08, 16.95, 0.06, 0, Math.PI * 2);
  g.fill();
}
