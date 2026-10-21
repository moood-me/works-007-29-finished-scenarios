// The snowy mountains far off (five kilometres) under the storm: a slate-violet chain, the snow on its tops dimmed to
// grey-lilac, the gullies a deeper blue — the haze lays them back.
const L = e.lib;
const top = x => 120 + L.ridge(x, 3, 130, 700, 160) + 70 * Math.max(0, Math.sin(x / 900 + 0.4)) ** 3;
const path = new Path2D();
path.moveTo(-2600, 10);
for (let x = -2600; x <= 2600; x += 20) path.lineTo(x, -top(x) - 40 * Math.abs(((x / 230) % 2) - 1));
path.lineTo(2600, 10);
path.closePath();
g.fillStyle = '#56607f';
g.fill(path);
g.save();
g.clip(path);
g.fillStyle = '#c9cadb';
g.beginPath();
g.moveTo(-2600, -600);
for (let x = -2600; x <= 2600; x += 40) g.lineTo(x, -top(x) * 0.8 - 30 * L.rnd(Math.round(x / 40), 5));
g.lineTo(2600, -600);
g.closePath();
g.fill();
L.dabs(g, 7, -2600, -520, 5200, 530, ['#9ea3c0', '#47506f'], 240, 30, 2.4, 0.3);
g.restore();
