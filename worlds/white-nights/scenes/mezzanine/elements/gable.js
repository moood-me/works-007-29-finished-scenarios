// The gable wall at the back (x −2…2, y −2.45 … 0): faded blue paper, its top following the roof — 1 m high at the
// sides, up the slopes to the flat of the ceiling at x −0.7…0.7, 2.45 m —; the little window onto the canal (its opening
// cut at x 0.28…0.92, 0.95…1.75 m up) in a white frame with a deep sill; a cheap print of a sailing ship; its point
// `window`
const INK = e.lib.INK;
g.save();
g.beginPath();
g.moveTo(-2, 0);
g.lineTo(-2, -1.0);
g.lineTo(-0.7, -2.45);
g.lineTo(0.7, -2.45);
g.lineTo(2, -1.0);
g.lineTo(2, 0);
g.closePath();
g.clip();
e.lib.paper(g, -2, 2, 2.45, 63);
g.fillStyle = '#8a6a52';
g.fillRect(-2, -0.12, 4, 0.12);
// the window
e.lib.box(g, 0.2, -1.83, 0.8, 0.96, '#efe9dc', 0.012);
e.lib.box(g, 0.14, -0.95, 0.92, 0.07, '#e6dfcf', 0.01);
e.lib.hatch(g, 0.2, -0.88, 0.8, 0.08, 0.025, 0.2, 0.004);
e.lib.cut(g, 0.28, -1.75, 0.64, 0.8);
g.fillStyle = '#efe9dc';
g.fillRect(0.58, -1.75, 0.04, 0.8);
g.fillRect(0.28, -1.37, 0.64, 0.035);
g.strokeStyle = INK;
g.lineWidth = 0.006;
g.strokeRect(0.28, -1.75, 0.64, 0.8);
// the print
e.lib.box(g, -1.25, -1.75, 0.42, 0.32, '#e8e0cc', 0.008);
g.fillStyle = '#7d8a94';
g.fillRect(-1.2, -1.55, 0.32, 0.08);
g.beginPath();
g.moveTo(-1.08, -1.55); g.lineTo(-1.04, -1.72); g.lineTo(-0.98, -1.55);
g.fillStyle = '#d8d0bc';
g.fill();
g.stroke();
g.restore();
g.beginPath();
g.moveTo(-2, -1.0);
g.lineTo(-0.7, -2.45);
g.lineTo(0.7, -2.45);
g.lineTo(2, -1.0);
g.strokeStyle = INK;
g.lineWidth = 0.012;
g.stroke();
e.at(0.6, -1.35, 'window');
