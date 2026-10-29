// The twins' ghost in the making, on the floor by the corner, from above (1.6 m by 1.2 m), when `spook` is "making":
// the white bed sheet spread out crumpled, the hollow turnip with the scooped-out flesh beside it, the kitchen knife,
// the placard half lettered, a pot of black paint and its brush, a candle end, the broomstick.
if (e.state.spook === 'making') {
  g.fillStyle = '#ece8de';
  g.beginPath();
  g.moveTo(-0.7, -0.35);
  g.quadraticCurveTo(-0.3, -0.5, 0.2, -0.4);
  g.lineTo(0.35, 0.1);
  g.quadraticCurveTo(-0.1, 0.3, -0.6, 0.2);
  g.closePath();
  g.fill();
  g.strokeStyle = '#c8c2b4';
  g.lineWidth = 0.012;
  for (const y of [-0.2, -0.05, 0.08]) {
    g.beginPath();
    g.moveTo(-0.6, y);
    g.quadraticCurveTo(-0.2, y + 0.06, 0.25, y - 0.02);
    g.stroke();
  }
  g.fillStyle = '#6a4a2a';
  g.save();
  g.translate(0.1, 0.38);
  g.rotate(-0.15);
  g.fillRect(-0.7, -0.015, 1.4, 0.03);
  g.restore();
  g.fillStyle = '#e8dcc0';
  g.beginPath();
  g.arc(0.5, -0.25, 0.13, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#8a4a7a';
  g.beginPath();
  g.arc(0.5, -0.25, 0.07, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#efe6cc';
  for (let i = 0; i < 9; i++) {
    g.beginPath();
    g.arc(0.62 + e.rnd() * 0.12, -0.05 + e.rnd() * 0.15, 0.02, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = '#c8ccd0';
  g.fillRect(0.38, 0.0, 0.2, 0.025);
  g.fillStyle = '#2a201a';
  g.fillRect(0.3, -0.005, 0.09, 0.035);
  g.fillStyle = '#d6c8a2';
  g.fillRect(-0.15, -0.55, 0.48, 0.3);
  g.fillStyle = '#1a1612';
  g.fillRect(-0.1, -0.5, 0.3, 0.035);
  g.fillRect(-0.1, -0.44, 0.22, 0.02);
  g.fillStyle = '#3a2a20';
  g.beginPath();
  g.arc(0.5, -0.5, 0.05, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#111';
  g.beginPath();
  g.arc(0.5, -0.5, 0.035, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#e8e2d2';
  g.fillRect(-0.4, 0.35, 0.05, 0.12);
}
