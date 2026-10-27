// The right wall (x -2.7 at the back wall ... 2.7 at the front): the flowered paper, a roller towel on its rail, a
// framed print of a harbour.
g.fillStyle = '#cfcfaa';
g.fillRect(-2.75, -2.42, 5.5, 2.44);
for (let r = 0, y = -2.35; y < 0; r++, y += 0.16) {
  for (let x = -2.75 + (r % 2) * 0.09; x < 2.75; x += 0.18) {
    g.fillStyle = r % 2 ? 'rgba(176, 108, 58, 0.55)' : 'rgba(130, 96, 62, 0.45)';
    for (let k = 0; k < 4; k++) {
      const a = (k / 4) * Math.PI * 2 + 0.4;
      g.beginPath();
      g.ellipse(x + Math.cos(a) * 0.022, y + Math.sin(a) * 0.022, 0.018, 0.011, a, 0, Math.PI * 2);
      g.fill();
    }
  }
}
g.fillStyle = '#e4ddc8';
g.fillRect(-2.75, -0.1, 5.5, 0.1);
// the roller towel
g.fillStyle = '#7a5a3e';
g.fillRect(-1.2, -1.42, 0.5, 0.03);
g.fillStyle = '#ece6d6';
g.fillRect(-1.16, -1.39, 0.42, 0.62);
g.fillStyle = '#b84a3c';
g.fillRect(-1.16, -1.32, 0.42, 0.02);
g.fillRect(-1.16, -0.86, 0.42, 0.02);
// the print: a harbour, boats, in a thin black frame
g.fillStyle = '#2a2624';
g.fillRect(-0.1, -1.95, 0.56, 0.42);
g.fillStyle = '#9fb6c6';
g.fillRect(-0.07, -1.92, 0.5, 0.36);
g.fillStyle = '#6a8aa0';
g.fillRect(-0.07, -1.72, 0.5, 0.16);
g.fillStyle = '#c94a3c';
g.fillRect(0.05, -1.75, 0.08, 0.03);
g.fillStyle = '#efe6d0';
g.beginPath();
g.moveTo(0.25, -1.74);
g.lineTo(0.3, -1.86);
g.lineTo(0.31, -1.74);
g.closePath();
g.fill();
