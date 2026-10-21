// The high snowy peaks far off (five kilometres): a blue-violet chain, snow on its tops catching the evening's
// apricot light, the cracks of the rock in a deeper blue — the haze lays them back.
const L = e.lib;
const top = x => L.ridge(x, 3, 1250, 900, 260) + 500 * Math.max(0, Math.sin(x / 1300 + 0.7)) ** 3;
const path = new Path2D();
path.moveTo(-5200, 10);
for (let x = -5200; x <= 5200; x += 40) path.lineTo(x, -top(x) - 120 * Math.abs(((x / 330) % 2) - 1));
path.lineTo(5200, 10);
path.closePath();
g.fillStyle = '#8c98c0';
g.fill(path);
g.save();
g.clip(path);
// the snow: above a ragged snow line
g.fillStyle = '#f4e6dc';
g.beginPath();
g.moveTo(-5200, -2000);
for (let x = -5200; x <= 5200; x += 60) g.lineTo(x, -top(x) * 0.62 - 140 * L.rnd(Math.round(x / 60), 5));
g.lineTo(5200, -2000);
g.closePath();
g.fill();
// the shaded sides of the snow and the rock's gullies
L.dabs(g, 7, -5200, -1800, 10400, 1500, ['#b7b4d0', '#7e88b2'], 260, 70, 2.4, 0.35);
g.restore();
