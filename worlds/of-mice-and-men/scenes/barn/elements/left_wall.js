// The left wall, facing the room (metres from its middle, 4.25 m ahead; x runs away from the viewer): grey weathered
// boards; along the stalls (x −3.65…2.95) the manger — a long trough of planks at hip height, hay in it; past the
// last stall the harness on its pegs — hames, a bridle, a coiled line, a saddle on its rack.
e.lib.planks(g, -4.8, -4.85, 4.8, 0.02, 0.26, '#9d8c74', 7);
g.fillStyle = 'rgba(60,45,30,0.25)';
g.fillRect(-4.8, -0.25, 9.6, 0.27);
// the manger
g.fillStyle = '#6f5c46';
g.fillRect(-4.8, -1.15, 7.75, 0.5);
g.fillStyle = '#5a4936';
g.fillRect(-4.8, -1.18, 7.75, 0.05);
g.fillStyle = '#c4a66a';
g.beginPath();
g.moveTo(-4.8, -1.13);
for (let x = -4.8; x <= 2.95; x += 0.12) g.lineTo(x, -1.18 - 0.08 * Math.abs(Math.sin(x * 3.1)));
g.lineTo(2.95, -1.05);
g.lineTo(-4.8, -1.05);
g.closePath();
g.fill();
// the pegs past the last stall, and what hangs on them
g.fillStyle = '#4b3a2a';
for (const x of [3.3, 3.85, 4.35]) g.fillRect(x - 0.03, -1.95, 0.06, 0.06);
g.strokeStyle = '#3d2c20';
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(3.3, -1.9);
g.bezierCurveTo(3.15, -1.5, 3.2, -1.1, 3.3, -1.0);
g.bezierCurveTo(3.4, -1.1, 3.45, -1.5, 3.3, -1.9);
g.stroke();
g.lineWidth = 0.025;
for (let i = 0; i < 4; i++) {
  g.beginPath();
  g.ellipse(3.85, -1.62, 0.2 - i * 0.012, 0.3 - i * 0.015, 0, 0, Math.PI * 2);
  g.stroke();
}
g.strokeStyle = '#2f241b';
g.beginPath();
g.moveTo(4.35, -1.9);
g.lineTo(4.25, -1.2);
g.moveTo(4.35, -1.9);
g.lineTo(4.45, -1.25);
g.stroke();
// the saddle on its rack
g.fillStyle = '#6b4a2e';
g.beginPath();
g.moveTo(3.4, -0.95);
g.quadraticCurveTo(3.85, -1.15, 4.4, -0.98);
g.lineTo(4.35, -0.7);
g.quadraticCurveTo(3.9, -0.78, 3.45, -0.7);
g.closePath();
g.fill();
g.fillStyle = '#4b3a2a';
g.fillRect(3.5, -0.7, 0.8, 0.06);
