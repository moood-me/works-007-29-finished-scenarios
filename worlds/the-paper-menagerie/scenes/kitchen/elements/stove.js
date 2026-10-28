// The stove: white enamel with chrome trim, the oven door and its handle, four knobs, a raised back with a clock; on
// the top, seen a little from above, the burners and the blue kettle.
g.fillStyle = '#f4f1ea';
g.fillRect(-0.4, -0.9, 0.8, 0.9);
g.fillStyle = '#3c3a3a';
g.fillRect(-0.4, -0.05, 0.8, 0.05);
// the oven door, its window and handle
g.fillStyle = '#e9e5dc';
g.fillRect(-0.34, -0.66, 0.68, 0.56);
g.fillStyle = '#4a4a4f';
g.fillRect(-0.2, -0.54, 0.4, 0.22);
g.fillStyle = '#c3c6c8';
g.fillRect(-0.26, -0.72, 0.52, 0.025);
// the knobs
g.fillStyle = '#2f2e30';
for (let i = 0; i < 4; i++) {
  g.beginPath();
  g.arc(-0.24 + i * 0.16, -0.8, 0.025, 0, Math.PI * 2);
  g.fill();
}
// the top: a sliver seen from above, two dark burners
g.fillStyle = '#e4e1da';
g.fillRect(-0.4, -0.95, 0.8, 0.05);
g.fillStyle = '#4b4a4c';
g.fillRect(-0.3, -0.94, 0.2, 0.025);
g.fillRect(0.1, -0.94, 0.2, 0.025);
// the back panel with its little clock
g.fillStyle = '#efebe3';
g.fillRect(-0.4, -1.22, 0.8, 0.26);
g.fillStyle = '#c3c6c8';
g.fillRect(-0.4, -1.22, 0.8, 0.02);
g.fillStyle = '#fbf7ec';
g.beginPath();
g.arc(0, -1.09, 0.06, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#3b3a3a';
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(0, -1.09);
g.lineTo(0, -1.135);
g.moveTo(0, -1.09);
g.lineTo(0.03, -1.08);
g.stroke();
// the kettle on the near left burner
g.fillStyle = '#5d86a8';
g.beginPath();
g.moveTo(-0.3, -0.95);
g.quadraticCurveTo(-0.32, -1.1, -0.2, -1.12);
g.quadraticCurveTo(-0.08, -1.1, -0.1, -0.95);
g.closePath();
g.fill();
g.strokeStyle = '#33393f';
g.lineWidth = 0.012;
g.beginPath();
g.arc(-0.2, -1.12, 0.06, Math.PI, 0);
g.stroke();
g.fillStyle = '#5d86a8';
g.beginPath();
g.moveTo(-0.11, -1.0);
g.lineTo(-0.04, -1.07);
g.lineTo(-0.05, -1.04);
g.lineTo(-0.11, -0.97);
g.closePath();
g.fill();
