// The town at dusk, 260 m off and 9 m below the ward's floor (metres from its foot): a far row of taller blocks in
// cool blue-greys, a near row of lower ones before them (lib's town), flat roofs; among them, a little right of the
// window's middle, the new office tower — the tallest, its forty floors in bands, a mast on its roof. Their windows
// dark here (the lit ones: town_windows).
const block = ([x, w, h], c) => {
  g.fillStyle = c;
  g.fillRect(x - w / 2, -h, w, h);
  g.fillStyle = 'rgba(20,24,40,0.18)';
  g.fillRect(x - w / 2, -h, w, 0.6);
  g.fillStyle = 'rgba(30,34,52,0.35)';
  for (let y = -h + 2; y < -1; y += 3) for (let xx = x - w / 2 + 1.2; xx < x + w / 2 - 1.2; xx += 2.4) g.fillRect(xx, y, 1.1, 1.4);
};
const back = ['#6d7096', '#636892', '#71739a'],
  front = ['#545a7e', '#4c5274', '#5a5f82'];
e.lib.town.far.forEach((b, i) => block(b, back[i % 3]));
g.fillStyle = '#5d6890';
g.fillRect(-36, -44, 16, 44);
g.fillStyle = '#4d5780';
g.fillRect(-36, -44, 4, 44);
g.fillStyle = 'rgba(160,176,220,0.25)';
for (let y = -43; y < -1; y += 1.1) g.fillRect(-31.5, y, 11, 0.5);
g.strokeStyle = '#4d5780';
g.lineWidth = 0.3;
g.beginPath();
g.moveTo(-28, -44);
g.lineTo(-28, -49);
g.stroke();
e.lib.town.near.forEach((b, i) => block(b, front[i % 3]));
