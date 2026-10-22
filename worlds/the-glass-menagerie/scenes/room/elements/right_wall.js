// The right wall (facing into the room; its x runs toward the viewer: x 0 at distance 3.65, the door at distance
// 4.6): the old paper, the front door to the landing — dark varnished panels, a brass knob — and beside it the hook
// with Tom's overcoat.
e.lib.wallpaper(g, e, -1.8, 1.8, false);
// the door: its casing, its four panels
g.fillStyle = '#d9cbb4';
g.fillRect(-1.45, -2.17, 1.0, 2.19);
g.fillStyle = '#4a3122';
g.fillRect(-1.38, -2.08, 0.86, 2.1);
g.fillStyle = '#3c271b';
for (const [x, y, h] of [[-1.32, -2.0, 0.85], [-0.95, -2.0, 0.85], [-1.32, -1.0, 0.88], [-0.95, -1.0, 0.88]]) g.fillRect(x, y, 0.31, h);
g.fillStyle = '#c8a45a';
g.beginPath();
g.arc(-0.6, -1.0, 0.03, 0, Math.PI * 2);
g.fill();
// the hook and Tom's overcoat hanging from it by its loop: the collar, the shoulders falling away, the long body
g.fillStyle = '#3a2a20';
g.fillRect(-0.04, -1.8, 0.04, 0.05);
g.fillStyle = '#4b4a50';
g.beginPath();
g.moveTo(-0.02, -1.76);
g.lineTo(-0.12, -1.7);
g.quadraticCurveTo(-0.24, -1.66, -0.24, -1.5);
g.lineTo(-0.26, -0.7);
g.lineTo(0.22, -0.7);
g.lineTo(0.2, -1.5);
g.quadraticCurveTo(0.2, -1.66, 0.08, -1.7);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(28,28,34,0.65)';
g.lineWidth = 0.014;
g.beginPath();
g.moveTo(-0.12, -1.7);
g.lineTo(-0.02, -1.5);
g.lineTo(0.08, -1.7);
g.moveTo(-0.02, -1.5);
g.lineTo(-0.03, -0.71);
g.moveTo(-0.2, -1.1);
g.lineTo(-0.08, -1.1);
g.stroke();
g.fillStyle = '#2b2a2e';
for (const y of [-1.4, -1.2, -1.0]) {
  g.beginPath();
  g.arc(0.02, y, 0.012, 0, Math.PI * 2);
  g.fill();
}
