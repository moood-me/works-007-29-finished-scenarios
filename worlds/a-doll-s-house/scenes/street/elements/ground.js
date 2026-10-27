// The snow of the street, the lane and the hill, one sheet laid over the land (seen from above: x across, y toward the
// viewer; its middle at across −5, distance 32). The street before the Helmers' house trodden into ruts by sledges and
// carts, the pavement under the house swept to the cobbles here and there; the lane's ruts running up to the hill,
// the sledges' tracks coming straight down it. Metres.
const { ALONG, CORNER } = e.lib;
const AX = -5;
const AD = 32;
// a point of the world as a point of the sheet
const at = (across, distance) => [across - AX, AD - distance];
g.fillStyle = '#e9edf3';
g.fillRect(-35, -30, 70, 60);
// the street's roadway: ruts along it, slush between them
g.fillStyle = 'rgba(186,192,204,0.55)';
const [, yr0] = at(0, 9.9);
const [, yr1] = at(0, 5.0);
g.fillRect(-35, yr0, 70, yr1 - yr0);
g.strokeStyle = 'rgba(150,146,140,0.55)';
for (const [d, w] of [[9.2, 0.18], [8.7, 0.16], [6.9, 0.2], [6.35, 0.15], [5.6, 0.12]]) {
  g.lineWidth = w;
  g.beginPath();
  for (let x = -35; x <= 35; x += 1) {
    const y = at(0, d)[1] + 0.06 * Math.sin(x * 0.7 + d);
    if (x === -35) g.moveTo(x, y);
    else g.lineTo(x, y);
  }
  g.stroke();
}
// the pavement under the houses: swept, the cobbles showing in patches
const [, yp0] = at(0, 11.2);
const [, yp1] = at(0, 10.2);
g.fillStyle = '#c9ccd2';
g.fillRect(-35, yp0, 70, yp1 - yp0);
g.fillStyle = 'rgba(120,116,110,0.45)';
for (let x = -2.2 - AX; x < 35; x += 0.3) {
  for (let y = yp0 + 0.1; y < yp1 - 0.1; y += 0.3) {
    if (e.rnd() < 0.45) g.fillRect(x + e.rnd() * 0.08, y + e.rnd() * 0.08, 0.22, 0.2);
  }
}
g.fillStyle = 'rgba(233,237,243,0.9)';
g.fillRect(-35, yp1 - 0.25, 70, 0.25);
// the lane: its roadway up to the hill (along ALONG from the corner, 6 m wide), ruts and the sledges' tracks
const [cx, cy] = at(CORNER[0], CORNER[1]);
// the lane's way on the sheet: ALONG turned into the sheet's y (toward the viewer)
const ux = ALONG[0];
const uy = -ALONG[1];
// its across, to the lane's left
const vx = -ALONG[1];
const vy = -ALONG[0];
const lane = (s, o) => [cx + ux * s + vx * o, cy + uy * s + vy * o];
g.fillStyle = 'rgba(186,192,204,0.45)';
g.beginPath();
for (const [s, o] of [[-2, 1], [24, 1], [24, 5], [-2, 5]]) g.lineTo(...lane(s, o));
g.closePath();
g.fill();
g.strokeStyle = 'rgba(150,146,140,0.5)';
g.lineWidth = 0.16;
for (const o of [2.2, 2.9, 3.6, 4.3]) {
  g.beginPath();
  g.moveTo(...lane(-2, o));
  g.lineTo(...lane(24, o + 0.2 * Math.sin(o * 3)));
  g.stroke();
}
// the sledges' tracks down the hill: pairs of thin lines, a little wandering
g.strokeStyle = 'rgba(160,172,190,0.6)';
g.lineWidth = 0.06;
for (const o of [1.2, 2.6, 3.4, 4.8, 6.1, -0.6]) {
  for (const k of [0, 0.4]) {
    g.beginPath();
    for (let s = 20; s <= 52; s += 2) {
      const [x, y] = lane(s, o + k + 0.5 * Math.sin(s * 0.25 + o));
      if (s === 20) g.moveTo(x, y);
      else g.lineTo(x, y);
    }
    g.stroke();
  }
}
// footprints in the snow before the house: a woman's small steps coming along the street from the left to where Nora
// stands
g.fillStyle = 'rgba(170,178,192,0.7)';
for (let i = 0; i < 14; i++) {
  const s = i / 13;
  const across = -6.2 + s * 6.2;
  const distance = 7.6 - s * 1.5 + (i % 2 ? 0.1 : -0.1);
  const [x, y] = at(across, distance);
  g.beginPath();
  g.ellipse(x, y, 0.13, 0.06, 0, 0, Math.PI * 2);
  g.fill();
}
