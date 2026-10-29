// The flat's hall seen through the door (its far wall, facing the door: x −1.55…1.55, across 1.4…4.5; y −3 … 0): warm ochre wallpaper with a
// narrow stripe, an inner doorway into a lighter room, a peg rail with a grey cloak and a bonnet on it
const INK = e.lib.INK;
g.fillStyle = '#d6b884';
g.fillRect(-1.55, -3, 3.1, 3);
e.lib.wash(g, -1.55, -3, 3.1, 3, [214, 184, 132], 31, 0.3, 0.6, 0.12);
g.fillStyle = 'rgba(248,236,206,0.4)';
for (let x = -1.5; x < 1.55; x += 0.22) g.fillRect(x, -3, 0.05, 3);
e.lib.box(g, 0.25, -2.2, 0.8, 2.2, '#f1e9d8', 0.012);
e.lib.box(g, 0.45, -1.6, 0.4, 1.6, '#f6f3ec', 0.008);
g.fillStyle = '#7d5d45';
g.fillRect(-1.55, -0.14, 3.1, 0.14);
e.lib.box(g, -1.35, -1.9, 0.95, 0.06, '#7d5d45', 0.008);
g.fillStyle = '#7c7f86';
g.beginPath();
g.moveTo(-1.2, -1.85);
g.quadraticCurveTo(-1.35, -1.2, -1.25, -0.75);
g.lineTo(-0.89, -0.75);
g.quadraticCurveTo(-0.85, -1.3, -1.0, -1.85);
g.closePath();
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.008;
g.stroke();
g.fillStyle = '#a07d5a';
g.beginPath();
g.ellipse(-0.63, -1.72, 0.13, 0.1, 0, 0, Math.PI * 2);
g.fill();
g.stroke();
