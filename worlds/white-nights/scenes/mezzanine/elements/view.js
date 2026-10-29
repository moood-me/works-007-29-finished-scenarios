// What the little window looks out on, far off (x −4…4, y −6 … 1 — metres at its distance, 0 at the mezzanine's floor
// level): the white night over the canal — a lilac sky paling to pearl, a rose glow low over the far bank's roofs, the
// far bank's houses (a pale ochre and a pink front, rows of windows), its granite and the light water below, a lamp
// burning on the near bank though it is light
const INK = e.lib.INK;
const sky = g.createLinearGradient(0, -6, 0, -1.2);
sky.addColorStop(0, '#b4b0cc');
sky.addColorStop(0.7, '#e2d8e0');
sky.addColorStop(1, '#f4e2d6');
g.fillStyle = sky;
g.fillRect(-4, -6, 8, 4.8);
// the far houses
const fronts = [[-4, '#d8c49a', -2.6], [-1.6, '#d9b7ae', -2.9], [0.8, '#c8cbb4', -2.5], [2.6, '#ddcfae', -2.75]];
for (let i = 0; i < fronts.length; i++) {
  const [x, c, top] = fronts[i], x1 = i + 1 < fronts.length ? fronts[i + 1][0] : 4;
  g.fillStyle = c;
  g.fillRect(x, top, x1 - x, -0.6 - top);
  g.fillStyle = 'rgba(120,120,140,0.55)';
  for (let wx = x + 0.15; wx < x1 - 0.1; wx += 0.32) for (let wy = top + 0.25; wy < -0.85; wy += 0.42) g.fillRect(wx, wy, 0.12, 0.2);
  g.strokeStyle = INK;
  g.lineWidth = 0.012;
  g.strokeRect(x, top, x1 - x, -0.6 - top);
}
// the granite and the water
g.fillStyle = '#b9aaa0';
g.fillRect(-4, -0.6, 8, 0.25);
const water = g.createLinearGradient(0, -0.35, 0, 1);
water.addColorStop(0, '#ece4e6');
water.addColorStop(1, '#d6d2e0');
g.fillStyle = water;
g.fillRect(-4, -0.35, 8, 1.35);
g.fillStyle = 'rgba(217,183,174,0.5)';
g.fillRect(-1.6, -0.3, 2.4, 0.5);
// the lamp on the near bank
g.fillStyle = '#3c3836';
g.fillRect(-0.95, -1.6, 0.04, 2.6);
g.fillRect(-1.0, -1.72, 0.14, 0.14);
e.light(-0.93, -1.65, 0.08, '#ffc77e', 0.9, 'lamp');
