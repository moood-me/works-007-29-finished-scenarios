// A clear late-morning sky over the farm, seen through the window: pale blue overhead, warm and milky toward the field,
// a few soft clouds (screen heights; the horizon at 0.46).
const top = -0.35, bottom = 1.25, w = e.aspect;
const sky = g.createLinearGradient(0, top, 0, 0.47);
sky.addColorStop(0, '#8fb0cc');
sky.addColorStop(0.6, '#bcd0dc');
sky.addColorStop(1, '#efe4cc');
g.fillStyle = sky;
g.fillRect(-0.3, top, w + 0.6, 0.47 - top);
g.fillStyle = '#e9dfc6';
g.fillRect(-0.3, 0.47, w + 0.6, bottom - 0.47);
// soft clouds: a few clusters of overlapping round puffs
for (let c = 0; c < 6; c++) {
  const cx = -0.2 + (w + 0.4) * e.rnd(), cy = 0.08 + 0.26 * e.rnd(), s = 0.03 + 0.04 * e.rnd();
  for (let k = 0; k < 7; k++) {
    const x = cx + (k - 3) * s * 0.9, y = cy - Math.sin((k / 6) * Math.PI) * s * 0.7;
    const r = s * (0.7 + 0.5 * e.rnd());
    const puff = g.createRadialGradient(x, y, 0, x, y, r);
    puff.addColorStop(0, 'rgba(255, 252, 244, 0.55)');
    puff.addColorStop(1, 'rgba(255, 252, 244, 0)');
    g.fillStyle = puff;
    g.fillRect(x - r, y - r, 2 * r, 2 * r);
  }
}
