// The steep stair up to the loft along the back wall, its open side to the room: twelve steps (0.25 m up, 0.146 m
// on) from the floor at x 0 to the ceiling's hatch at x 1.75, the stringer under them darker, a turned baluster on
// every step, a handrail, a newel post with a knob at its foot. (The treads' tops are `treads`.)
const N = 12, R = 0.25, T = 0.146;
const zig = new Path2D();
zig.moveTo(0, 0);
for (let i = 0; i < N; i++) {
  zig.lineTo(i * T, -(i + 1) * R);
  zig.lineTo((i + 1) * T, -(i + 1) * R);
}
zig.lineTo(N * T, -N * R + 0.5);
zig.lineTo(0.42, 0);
zig.closePath();
g.fillStyle = '#b5844f';
g.fill(zig);
// the stringer: a band along the slope under the steps' ends
g.fillStyle = '#7a5232';
g.beginPath();
g.moveTo(0.18, 0);
g.lineTo(N * T, -N * R + 0.32);
g.lineTo(N * T, -N * R + 0.5);
g.lineTo(0.42, 0);
g.closePath();
g.fill();
// the steps' nosings, lighter
g.fillStyle = '#d3a76c';
for (let i = 0; i < N; i++) g.fillRect(i * T - 0.01, -(i + 1) * R, T + 0.01, 0.03);
// balusters and the handrail, 0.9 m over the steps
const H = 0.9;
for (let i = 0; i < N; i++) {
  const x = i * T + T / 2, y = -(i + 1) * R;
  g.fillStyle = '#9a6c40';
  g.fillRect(x - 0.015, y - H, 0.03, H);
  g.fillStyle = '#b5844f';
  g.beginPath();
  g.ellipse(x, y - H * 0.45, 0.025, 0.06, 0, 0, Math.PI * 2);
  g.fill();
}
g.strokeStyle = '#7a5232';
g.lineWidth = 0.06;
g.beginPath();
g.moveTo(0.05, -R - H - 0.15);
g.lineTo(N * T + 0.1, -N * R - H);
g.stroke();
// the newel post
g.fillStyle = '#8a5f38';
g.fillRect(0.0, -1.25, 0.1, 1.25);
g.fillStyle = '#b5844f';
g.beginPath();
g.arc(0.05, -1.3, 0.07, 0, Math.PI * 2);
g.fill();
