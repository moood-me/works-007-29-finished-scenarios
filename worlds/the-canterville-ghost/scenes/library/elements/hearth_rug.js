// A rug unrolled over the floor before the hearth, over the stain (`rug`): worn brown and ochre, from above (1.6 m by
// 1.3 m). Nothing while the floor is bare.
if (e.state.rug) {
  g.fillStyle = '#5a3a24';
  g.fillRect(-0.8, -0.65, 1.6, 1.3);
  g.strokeStyle = '#a8803e';
  g.lineWidth = 0.05;
  g.strokeRect(-0.7, -0.55, 1.4, 1.1);
  g.fillStyle = '#7a4a2a';
  g.beginPath();
  g.ellipse(0, 0, 0.4, 0.3, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#c8a870';
  for (const y of [-0.66, 0.66]) for (let x = -0.78; x < 0.8; x += 0.06) g.fillRect(x, y - 0.015, 0.02, 0.03);
}
