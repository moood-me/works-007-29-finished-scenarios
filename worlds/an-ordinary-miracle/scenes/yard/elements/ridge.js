// The near mountains (two kilometres): long green-blue ridges, dark forest down their flanks, paler meadows high up.
const L = e.lib;
const path = new Path2D();
path.moveTo(-2000, 10);
for (let x = -2000; x <= 2000; x += 20) path.lineTo(x, -L.ridge(x, 9, 330, 420, 90));
path.lineTo(2000, 10);
path.closePath();
g.fillStyle = '#6f9478';
g.fill(path);
g.save();
g.clip(path);
L.dabs(g, 13, -2000, -380, 4000, 400, ['#4f7560', '#5b8268', '#86a77a'], 500, 26, 0.7, 0.55);
L.dabs(g, 17, -2000, -380, 4000, 140, ['#9cb987', '#b1c58f'], 120, 30, 0.5, 0.4);
g.restore();
