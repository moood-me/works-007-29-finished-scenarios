// The fire in the hearth: embers and low flames under the pot, flickering (a layer); its light `fire` (the scene's
// `hearth_fire`), as strong as `hearth` (animate)
e.layer('flames', { flicker: 0.6 }, (g) => {
  const glow = g.createRadialGradient(0, -0.08, 0.01, 0, -0.08, 0.38);
  glow.addColorStop(0, 'rgba(255, 210, 120, 0.95)');
  glow.addColorStop(0.4, 'rgba(240, 120, 40, 0.7)');
  glow.addColorStop(1, 'rgba(160, 50, 20, 0)');
  g.fillStyle = glow;
  g.fillRect(-0.4, -0.45, 0.8, 0.47);
  g.fillStyle = '#ffcf7a';
  for (const [x, h] of [[-0.18, 0.18], [-0.05, 0.26], [0.08, 0.2], [0.2, 0.14]]) {
    g.beginPath();
    g.moveTo(x - 0.06, 0);
    g.quadraticCurveTo(x - 0.03, -h * 0.6, x, -h);
    g.quadraticCurveTo(x + 0.03, -h * 0.6, x + 0.06, 0);
    g.closePath();
    g.fill();
  }
  g.fillStyle = '#7a2a14';
  g.fillRect(-0.32, -0.04, 0.64, 0.04);
  e.light(0, -0.12, 0.3, '#ffae60', 0.9, 'fire');
});
