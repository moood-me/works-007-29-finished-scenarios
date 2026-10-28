// The stair up to the gallery along the right wall, seen from its open side (it faces into the hall): ten steps from
// the floor at the front (x 0.75) to the gallery at the back (x −0.75, 2.45 m up), the stringer under them, turned
// balusters and a handrail, a newel post with a knob at its foot.
const N = 10, R = 0.245, T = 0.15, X = 0.75;
const zig = new Path2D();
zig.moveTo(X, 0);
for (let i = 0; i < N; i++) {
  zig.lineTo(X - i * T, -(i + 1) * R);
  zig.lineTo(X - (i + 1) * T, -(i + 1) * R);
}
zig.lineTo(X - N * T, -N * R + 0.4);
zig.lineTo(X - 0.4, 0);
zig.closePath();
g.fillStyle = '#86603a';
g.fill(zig);
g.fillStyle = '#5a3a24';
g.beginPath();
g.moveTo(X - 0.15, 0);
g.lineTo(X - N * T, -N * R + 0.25);
g.lineTo(X - N * T, -N * R + 0.42);
g.lineTo(X - 0.4, 0);
g.closePath();
g.fill();
g.fillStyle = '#a77a4c';
for (let i = 0; i < N; i++) g.fillRect(X - (i + 1) * T, -(i + 1) * R, T + 0.02, 0.035);
g.fillStyle = '#5a3a24';
for (let i = 0; i < N; i++) g.fillRect(X - i * T - T * 0.6, -(i + 1) * R - 0.82, 0.035, 0.82);
g.strokeStyle = '#4a3020';
g.lineWidth = 0.07;
g.beginPath();
g.moveTo(X + 0.05, -1.0);
g.lineTo(X - N * T, -N * R - 0.85);
g.stroke();
g.fillStyle = '#4a3020';
g.fillRect(X - 0.02, -1.1, 0.1, 1.1);
g.beginPath();
g.arc(X + 0.03, -1.15, 0.07, 0, Math.PI * 2);
g.fill();
