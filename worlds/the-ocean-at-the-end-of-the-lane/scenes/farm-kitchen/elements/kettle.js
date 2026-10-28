// The big black kettle on the hotplate, its spout toward the room (to the left as the viewer sees it).
g.fillStyle = '#2e2d30';
g.beginPath();
g.moveTo(-0.15, 0);
g.bezierCurveTo(-0.19, -0.06, -0.17, -0.17, -0.1, -0.2);
g.lineTo(0.1, -0.2);
g.bezierCurveTo(0.17, -0.17, 0.19, -0.06, 0.15, 0);
g.closePath();
g.fill();
g.fillRect(-0.04, -0.24, 0.08, 0.04);
// the spout
g.beginPath();
g.moveTo(-0.14, -0.08);
g.quadraticCurveTo(-0.2, -0.12, -0.22, -0.22);
g.lineTo(-0.19, -0.23);
g.quadraticCurveTo(-0.16, -0.15, -0.12, -0.13);
g.closePath();
g.fill();
// the handle
g.strokeStyle = '#4a494c';
g.lineWidth = 0.018;
g.beginPath();
g.arc(0, -0.2, 0.11, Math.PI * 1.05, Math.PI * 1.95);
g.stroke();
