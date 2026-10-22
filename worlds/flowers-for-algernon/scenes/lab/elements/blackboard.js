// The blackboard on the back wall (metres from its foot at the chalk tray, x −1.1…1.1): green-grey slate in an oak
// frame, the cloud of old sums wiped off, and in chalk the morning's work — the plan of the maze, and the two curves
// of the race, the mouse's and the man's, rising side by side (no words). Chalk and a felt eraser on the tray.
g.fillStyle = '#7a5c40';
g.fillRect(-1.12, -1.27, 2.24, 1.29);
g.fillStyle = '#3f4d47';
g.fillRect(-1.06, -1.21, 2.12, 1.17);
// what was wiped off: soft pale clouds
for (let i = 0; i < 9; i++) {
  g.fillStyle = 'rgba(200,210,204,0.07)';
  g.beginPath();
  g.ellipse(-0.9 + e.rnd() * 1.8, -1.0 + e.rnd() * 0.8, 0.15 + e.rnd() * 0.25, 0.06 + e.rnd() * 0.1, e.rnd(), 0, Math.PI * 2);
  g.fill();
}
g.strokeStyle = 'rgba(236,238,230,0.85)';
g.lineCap = 'round';
g.lineJoin = 'round';
// the maze's plan: its outer wall and its corridors on a grid, a dot at the start and a cross at the goal
g.lineWidth = 0.012;
g.strokeRect(-0.95, -1.1, 0.8, 0.8);
const walls = [[-0.95, -0.9, -0.55, -0.9], [-0.75, -0.9, -0.75, -0.5], [-0.55, -1.1, -0.55, -0.7], [-0.35, -0.9, -0.35, -0.5],
  [-0.55, -0.5, -0.15, -0.5], [-0.95, -0.7, -0.75, -0.7], [-0.55, -0.7, -0.35, -0.7], [-0.75, -0.5, -0.75, -0.3]];
g.beginPath();
for (const [x0, y0, x1, y1] of walls) {
  g.moveTo(x0, y0);
  g.lineTo(x1, y1);
}
g.stroke();
g.fillStyle = 'rgba(236,238,230,0.9)';
g.beginPath();
g.arc(-0.85, -0.4, 0.02, 0, Math.PI * 2);
g.fill();
g.beginPath();
g.moveTo(-0.28, -1.05);
g.lineTo(-0.2, -0.97);
g.moveTo(-0.2, -1.05);
g.lineTo(-0.28, -0.97);
g.stroke();
// the graph: two axes with their ticks; one curve rising steadily (the mouse), one rising late and steep (the man)
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(0.05, -1.12);
g.lineTo(0.05, -0.22);
g.lineTo(0.98, -0.22);
for (let i = 1; i < 9; i++) {
  g.moveTo(0.05 + i * 0.1, -0.22);
  g.lineTo(0.05 + i * 0.1, -0.25);
}
g.stroke();
g.lineWidth = 0.013;
g.beginPath();
g.moveTo(0.07, -0.55);
g.bezierCurveTo(0.35, -0.75, 0.6, -0.9, 0.92, -0.96);
g.stroke();
g.setLineDash([0.035, 0.025]);
g.beginPath();
g.moveTo(0.07, -0.27);
g.bezierCurveTo(0.45, -0.3, 0.6, -0.45, 0.92, -1.06);
g.stroke();
g.setLineDash([]);
// the tray, two sticks of chalk, the eraser
g.fillStyle = '#7a5c40';
g.fillRect(-1.1, -0.02, 2.2, 0.05);
g.fillStyle = '#f1efe6';
g.fillRect(-0.4, -0.05, 0.08, 0.025);
g.fillRect(-0.25, -0.045, 0.06, 0.02);
g.fillStyle = '#5a4a3a';
g.fillRect(0.5, -0.07, 0.15, 0.05);
g.fillStyle = '#bfbfb4';
g.fillRect(0.5, -0.03, 0.15, 0.015);
