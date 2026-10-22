// The right wall (facing into the room; its x runs toward the viewer: x 0 at distance 3.6, the door at distance
// 3.3…4.3): the pale paint, the door to the corridor — white-painted, a panel of frosted glass, a round steel knob —
// and nearer the viewer a white enamel sink with a towel on its rail.
e.lib.wallPaint(g, e, -1.8, 1.8);
g.fillStyle = '#c9cec6';
g.fillRect(-0.78, -2.25, 1.16, 2.27);
g.fillStyle = '#eef0ea';
g.fillRect(-0.7, -2.18, 1.0, 2.2);
g.fillStyle = '#d8e0e2';
g.fillRect(-0.56, -2.0, 0.72, 0.8);
g.strokeStyle = '#c3c9c2';
g.lineWidth = 0.02;
g.strokeRect(-0.6, -1.0, 0.8, 0.85);
g.fillStyle = '#9ea4a6';
g.beginPath();
g.arc(0.18, -1.02, 0.035, 0, Math.PI * 2);
g.fill();
// the sink
g.fillStyle = '#f2f2ec';
g.fillRect(0.75, -0.95, 0.62, 0.16);
g.fillStyle = '#d6d8d2';
g.fillRect(0.75, -0.8, 0.62, 0.03);
g.fillStyle = '#a8adae';
g.fillRect(1.02, -1.2, 0.03, 0.25);
g.fillRect(0.97, -1.2, 0.12, 0.025);
for (const x of [0.82, 1.28]) g.fillRect(x, -0.78, 0.03, 0.66);
g.fillStyle = '#dfe6e8';
g.fillRect(0.82, -0.77, 0.48, 0.02);
g.fillStyle = '#eae4d2';
g.fillRect(0.9, -0.77, 0.22, 0.32);
g.fillStyle = '#c7b98f';
g.fillRect(0.9, -0.52, 0.22, 0.025);
