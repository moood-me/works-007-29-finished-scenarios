// The right wall, from its foot (facing the room: x runs toward the viewer, distance 5.6 at x −1.88, 1.84 at 1.88):
// limewash over adobe, bare but for a small shelf with a saint's print and a stub of candle.
e.lib.limewash(g, e, -1.88, 1.88, 2.9);
g.fillStyle = '#6b4f38';
g.fillRect(-0.55, -1.62, 0.5, 0.04);
g.fillStyle = '#4e3a2a';
g.fillRect(-0.5, -1.58, 0.04, 0.12);
g.fillRect(-0.14, -1.58, 0.04, 0.12);
// the print: a saint in blue and red, its paper gone yellow
g.fillStyle = '#d6c79e';
g.fillRect(-0.42, -2.05, 0.26, 0.38);
g.fillStyle = '#4e6a96';
g.beginPath();
g.moveTo(-0.29, -1.98);
g.lineTo(-0.36, -1.72);
g.lineTo(-0.22, -1.72);
g.closePath();
g.fill();
g.fillStyle = '#a2453a';
g.beginPath();
g.arc(-0.29, -1.95, 0.025, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#e8dcc0';
g.fillRect(-0.12, -1.7, 0.03, 0.08);
