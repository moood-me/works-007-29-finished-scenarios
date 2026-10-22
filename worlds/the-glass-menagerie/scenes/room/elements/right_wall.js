// The right wall (facing into the room; its x runs toward the viewer: x 0 at distance 4.15, the door at distance
// 5.5): the old paper, the front door to the landing — dark varnished panels, a brass knob — and beside it the hook
// with Tom's coat and his cap.
e.lib.wallpaper(g, e, -2.3, 2.3, false);
// the door: its casing, its four panels
g.fillStyle = '#d9cbb4';
g.fillRect(-1.85, -2.17, 1.0, 2.19);
g.fillStyle = '#4a3122';
g.fillRect(-1.78, -2.08, 0.86, 2.1);
g.fillStyle = '#3c271b';
for (const [x, y, h] of [[-1.72, -2.0, 0.85], [-1.35, -2.0, 0.85], [-1.72, -1.0, 0.88], [-1.35, -1.0, 0.88]]) g.fillRect(x, y, 0.31, h);
g.fillStyle = '#c8a45a';
g.beginPath();
g.arc(-1.0, -1.0, 0.03, 0, Math.PI * 2);
g.fill();
// the hook and Tom's coat on it: a dark grey overcoat hanging from its collar, a flat cap over it
g.fillStyle = '#3a2a20';
g.fillRect(-0.48, -1.78, 0.04, 0.05);
g.fillStyle = '#4a4a50';
g.beginPath();
g.moveTo(-0.5, -1.74);
g.bezierCurveTo(-0.7, -1.7, -0.74, -1.3, -0.72, -0.75);
g.lineTo(-0.24, -0.75);
g.bezierCurveTo(-0.22, -1.3, -0.26, -1.7, -0.46, -1.74);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(25,25,30,0.6)';
g.lineWidth = 0.015;
g.beginPath();
g.moveTo(-0.48, -1.7);
g.lineTo(-0.5, -0.76);
g.moveTo(-0.6, -1.6);
g.lineTo(-0.52, -1.35);
g.stroke();
g.fillStyle = '#3b3633';
g.beginPath();
g.ellipse(-0.48, -1.8, 0.12, 0.05, 0, 0, Math.PI * 2);
g.fill();
