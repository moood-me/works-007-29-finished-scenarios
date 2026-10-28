// The chrome taps at the sink and the kettle standing by the cooker, seen from the room.
g.fillStyle = '#c9cccc';
g.fillRect(-0.03, -0.24, 0.06, 0.24);
g.fillRect(-0.03, -0.24, 0.16, 0.04);
for (const x of [-0.13, 0.17]) {
  g.fillRect(x - 0.02, -0.08, 0.04, 0.08);
  g.fillStyle = x < 0 ? '#c94a3c' : '#4a6da0';
  g.beginPath();
  g.arc(x, -0.1, 0.022, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#c9cccc';
}
// the kettle (at x 0.82 on the worktop)
g.fillStyle = '#c7cacb';
g.beginPath();
g.moveTo(0.7, 0);
g.bezierCurveTo(0.68, -0.12, 0.74, -0.2, 0.82, -0.21);
g.bezierCurveTo(0.9, -0.2, 0.96, -0.12, 0.94, 0);
g.closePath();
g.fill();
g.fillStyle = '#2b2a2a';
g.fillRect(0.76, -0.25, 0.12, 0.03);
g.strokeStyle = '#c7cacb';
g.lineWidth = 0.015;
g.beginPath();
g.moveTo(0.7, -0.08);
g.lineTo(0.62, -0.16);
g.stroke();
