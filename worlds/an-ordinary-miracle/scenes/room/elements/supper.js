// Supper on the table by the King's hand: a round loaf on a board, a clay honey pot full to the brim — amber honey
// running down its side, a wooden dipper in it —, and a pewter mug.
// the board and the loaf
g.fillStyle = '#9a6c40';
g.fillRect(-0.42, -0.03, 0.34, 0.03);
g.fillStyle = '#c0803c';
g.beginPath();
g.ellipse(-0.25, -0.1, 0.14, 0.09, 0, Math.PI, 0);
g.lineTo(-0.11, -0.03);
g.lineTo(-0.39, -0.03);
g.closePath();
g.fill();
g.strokeStyle = '#8a5424';
g.lineWidth = 0.008;
for (const x of [-0.3, -0.24, -0.18]) {
  g.beginPath();
  g.moveTo(x - 0.02, -0.15);
  g.lineTo(x + 0.02, -0.11);
  g.stroke();
}
// the honey pot
g.fillStyle = '#a5532e';
g.beginPath();
g.moveTo(0.02, 0);
g.quadraticCurveTo(-0.03, -0.12, 0.04, -0.2);
g.lineTo(0.2, -0.2);
g.quadraticCurveTo(0.27, -0.12, 0.22, 0);
g.closePath();
g.fill();
g.fillStyle = '#e8a426';
g.beginPath();
g.ellipse(0.12, -0.2, 0.085, 0.018, 0, 0, Math.PI * 2);
g.fill();
g.beginPath();
g.moveTo(0.17, -0.2);
g.quadraticCurveTo(0.2, -0.14, 0.18, -0.1);
g.quadraticCurveTo(0.165, -0.08, 0.16, -0.12);
g.quadraticCurveTo(0.155, -0.16, 0.15, -0.2);
g.fill();
g.strokeStyle = '#8a6438';
g.lineWidth = 0.014;
g.beginPath();
g.moveTo(0.1, -0.2);
g.lineTo(0.05, -0.33);
g.stroke();
g.fillStyle = '#8a6438';
g.beginPath();
g.ellipse(0.05, -0.34, 0.02, 0.014, 0.4, 0, Math.PI * 2);
g.fill();
// the mug
g.fillStyle = '#8f9196';
g.fillRect(0.3, -0.14, 0.09, 0.14);
g.fillStyle = '#b3b5ba';
g.fillRect(0.31, -0.14, 0.025, 0.14);
g.strokeStyle = '#8f9196';
g.lineWidth = 0.016;
g.beginPath();
g.arc(0.4, -0.07, 0.035, -Math.PI / 2, Math.PI / 2);
g.stroke();
