// The street lamp by the parapet, burning though there is no need: a cast-iron post painted dark green on a pedestal,
// a lamplighter's crossbar under the lantern, the lantern a four-sided glass box wider at the top under a pointed
// cap. Its flame (the point lamp#flame) is the scene's light "lamp" and the glow the engine draws
const post = '#47524f';
g.fillStyle = post;
g.fillRect(-0.16, -0.5, 0.32, 0.5);
g.fillRect(-0.2, -0.08, 0.4, 0.08);
g.fillRect(-0.12, -0.6, 0.24, 0.1);
g.beginPath();
g.moveTo(-0.065, -0.6);
g.lineTo(-0.04, -2.85);
g.lineTo(0.04, -2.85);
g.lineTo(0.065, -0.6);
g.closePath();
g.fill();
g.fillRect(-0.07, -1.9, 0.14, 0.06);
g.fillRect(-0.32, -2.78, 0.64, 0.04);
g.fillRect(-0.09, -2.92, 0.18, 0.08);
// the lantern: its glass, its frame, its cap
g.beginPath();
g.moveTo(-0.13, -2.94);
g.lineTo(0.13, -2.94);
g.lineTo(0.19, -3.42);
g.lineTo(-0.19, -3.42);
g.closePath();
g.fillStyle = '#ffdc96';
g.fill();
g.strokeStyle = post;
g.lineWidth = 0.025;
g.stroke();
g.beginPath();
g.moveTo(0, -2.94);
g.lineTo(0, -3.42);
g.stroke();
g.fillStyle = post;
g.beginPath();
g.moveTo(-0.23, -3.42);
g.lineTo(0.23, -3.42);
g.lineTo(0, -3.66);
g.closePath();
g.fill();
g.fillRect(-0.015, -3.74, 0.03, 0.09);
g.strokeStyle = e.lib.INK;
g.lineWidth = 0.012;
g.strokeRect(-0.16, -0.5, 0.32, 0.5);
e.light(0, -3.18, 0.36, '#ffcf88', 1.6, 'flame');
e.at(0, -3.18, 'flame');
