// What the window shows in the vision (`vision`, М5): not the avenue but a little garden under the moon — long grass,
// hemlock, an old yew, the moon's disc — standing just outside the glass in place of the park. It keeps its own
// colours (glows), a picture more than a place; its layer fades in as `vision` rises.
e.layer('garden', {}, l => {
  const sky = l.createLinearGradient(0, -3.4, 0, -0.4);
  sky.addColorStop(0, '#05081a');
  sky.addColorStop(1, '#1d2a52');
  l.fillStyle = sky;
  l.fillRect(-2.2, -3.4, 4.4, 3.7);
  // the moon and its halo
  const halo = l.createRadialGradient(-0.6, -2.5, 0, -0.6, -2.5, 0.8);
  halo.addColorStop(0, 'rgba(220,228,255,0.5)');
  halo.addColorStop(1, 'rgba(220,228,255,0)');
  l.fillStyle = halo;
  l.fillRect(-2.2, -3.4, 4.4, 3.7);
  l.fillStyle = '#eef1ff';
  l.beginPath();
  l.arc(-0.6, -2.5, 0.16, 0, Math.PI * 2);
  l.fill();
  l.fillStyle = '#dfe6f4';
  for (let i = 0; i < 50; i++) {
    l.beginPath();
    l.arc(-2.1 + e.rnd() * 4.2, -3.3 + e.rnd() * 1.6, 0.006 + e.rnd() * 0.006, 0, Math.PI * 2);
    l.fill();
  }
  // the yew: a short thick trunk, low dark tiers of needles
  l.fillStyle = '#0c1210';
  l.fillRect(0.55, -1.5, 0.22, 1.2);
  for (const [x, y, rx, ry] of [[0.66, -1.9, 0.9, 0.35], [0.66, -2.3, 0.7, 0.3], [0.66, -1.5, 1.1, 0.3]]) {
    l.beginPath();
    l.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
    l.fill();
  }
  // the long grass, silver under the moon, and the hemlock's white heads
  const grass = l.createLinearGradient(0, -1.0, 0, 0.3);
  grass.addColorStop(0, '#2c3a40');
  grass.addColorStop(1, '#3e5258');
  l.fillStyle = grass;
  l.fillRect(-2.2, -0.9, 4.4, 1.2);
  l.strokeStyle = '#7f96a0';
  l.lineWidth = 0.008;
  for (let i = 0; i < 160; i++) {
    const x = -2.2 + e.rnd() * 4.4;
    const y = -0.85 + e.rnd() * 1.1;
    l.beginPath();
    l.moveTo(x, y);
    l.quadraticCurveTo(x + 0.02, y - 0.1, x + 0.05 * (e.rnd() - 0.3), y - 0.18 - e.rnd() * 0.12);
    l.stroke();
  }
  l.fillStyle = '#d8dde0';
  for (let i = 0; i < 18; i++) {
    l.beginPath();
    l.ellipse(-2 + e.rnd() * 4, -0.9 + e.rnd() * 0.4, 0.05, 0.02, 0, 0, Math.PI * 2);
    l.fill();
  }
});
