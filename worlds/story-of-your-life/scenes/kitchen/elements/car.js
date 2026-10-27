// The friend's car at the kerb, seen side on (metres from its foot; its rear on the left, x −2.1…2.1): a small dusty
// blue hatchback, the engine running; its exhaust the point `exhaust`.
const body = new Path2D();
body.moveTo(-2.05, -0.28);
body.lineTo(-2.08, -0.86);
body.quadraticCurveTo(-2.02, -1.02, -1.8, -1.08);
body.lineTo(-1.45, -1.42);
body.lineTo(0.55, -1.44);
body.quadraticCurveTo(0.95, -1.4, 1.35, -0.98);
body.lineTo(1.95, -0.86);
body.quadraticCurveTo(2.1, -0.8, 2.08, -0.5);
body.lineTo(2.05, -0.28);
body.closePath();
g.fillStyle = '#7d95a1';
g.fill(body);
// the windows: dark glass, a pale sky in their tops
const glass = new Path2D();
glass.moveTo(-1.72, -1.06);
glass.lineTo(-1.4, -1.36);
glass.lineTo(0.5, -1.37);
glass.quadraticCurveTo(0.85, -1.33, 1.2, -1.02);
glass.closePath();
g.fillStyle = '#4b585f';
g.fill(glass);
g.save();
g.clip(glass);
g.fillStyle = 'rgba(214,226,234,0.35)';
g.fillRect(-2, -1.4, 3.4, 0.14);
g.restore();
g.fillStyle = '#7d95a1';
g.fillRect(-0.32, -1.38, 0.07, 0.34);
g.fillRect(-1.45, -1.3, 0.06, 0.25);
// doors, handle, the bumpers, a tail light
g.strokeStyle = 'rgba(40,52,60,0.5)';
g.lineWidth = 0.015;
g.beginPath();
g.moveTo(-0.3, -1.04);
g.lineTo(-0.3, -0.32);
g.moveTo(1.15, -0.98);
g.lineTo(1.15, -0.32);
g.stroke();
g.fillStyle = '#c9cdd0';
g.fillRect(0.05, -0.9, 0.16, 0.035);
g.fillStyle = '#3a3c3e';
g.fillRect(-2.1, -0.5, 0.28, 0.16);
g.fillRect(1.82, -0.5, 0.28, 0.16);
g.fillStyle = '#b8443a';
g.fillRect(-2.08, -0.9, 0.08, 0.2);
// the wheels
for (const x of [-1.3, 1.35]) {
  g.fillStyle = '#2a2b2c';
  g.beginPath();
  g.arc(x, -0.3, 0.3, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#9da2a6';
  g.beginPath();
  g.arc(x, -0.3, 0.15, 0, Math.PI * 2);
  g.fill();
}
e.at(-2.04, -0.26, 'exhaust');
