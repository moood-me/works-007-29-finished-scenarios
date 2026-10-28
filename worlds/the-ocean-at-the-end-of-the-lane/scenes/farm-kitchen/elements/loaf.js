// At the far end of the table: a round loaf on its board with the bread knife, and a brown earthenware jug.
g.fillStyle = '#8a6a48';
g.fillRect(-0.36, -0.025, 0.42, 0.025);
g.fillStyle = '#b77a3e';
g.beginPath();
g.ellipse(-0.15, -0.025, 0.15, 0.1, 0, Math.PI, 0);
g.fill();
g.strokeStyle = '#8c5427';
g.lineWidth = 0.008;
for (const x of [-0.22, -0.15, -0.08]) {
  g.beginPath();
  g.moveTo(x - 0.02, -0.1);
  g.lineTo(x + 0.02, -0.06);
  g.stroke();
}
g.fillStyle = '#9b9a98';
g.fillRect(-0.34, -0.03, 0.16, 0.006);
g.fillStyle = '#6e4a2e';
g.beginPath();
g.moveTo(0.18, 0);
g.bezierCurveTo(0.12, -0.08, 0.14, -0.2, 0.2, -0.25);
g.lineTo(0.3, -0.25);
g.bezierCurveTo(0.36, -0.2, 0.38, -0.08, 0.32, 0);
g.closePath();
g.fill();
g.fillStyle = '#d9c8a4';
g.fillRect(0.2, -0.26, 0.1, 0.02);
