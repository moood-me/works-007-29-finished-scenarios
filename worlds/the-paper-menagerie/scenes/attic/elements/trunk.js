// An old steamer trunk against the right slope: green canvas over wood, brass corners and clasps, two leather straps.
g.fillStyle = '#4f6a58';
g.fillRect(-0.4, -0.48, 0.8, 0.48);
g.fillStyle = '#7a5a3a';
for (const x of [-0.24, 0.2]) g.fillRect(x, -0.48, 0.05, 0.48);
g.fillStyle = '#c9a25a';
for (const [x, y] of [[-0.4, -0.48], [0.34, -0.48], [-0.4, -0.06], [0.34, -0.06]]) g.fillRect(x, y, 0.06, 0.06);
g.fillRect(-0.03, -0.46, 0.06, 0.05);
g.fillStyle = 'rgba(30,40,34,0.3)';
g.fillRect(-0.4, -0.27, 0.8, 0.02);
e.lib.dust(g, -0.42, -0.5, 0.84, 0.51, 0.3);
