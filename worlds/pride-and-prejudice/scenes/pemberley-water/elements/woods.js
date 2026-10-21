// The ridge of high woody hills behind the house: a back row of crowns, bluer, and a front row, greener, their tops
// scalloped as a wood seen from afar; a pen line along the front crowns
const L = e.lib, px = L.px(e), r = L.rand(5), n = e.anim.noise;
const crowns = (x0, x1, top, size, seed) => {
  const rr = L.rand(seed), p = new Path2D();
  p.moveTo(x0, 4);
  let x = x0;
  p.lineTo(x, top(x));
  while (x < x1) {
    const w = size * (0.6 + 0.8 * rr()), h = size * (0.35 + 0.35 * rr());
    p.quadraticCurveTo(x + w / 2, top(x + w / 2) - h * 2, x + w, top(x + w));
    x += w;
  }
  p.lineTo(x, 4);
  p.closePath();
  return p;
};
const back = x => -40 - 8 * n(x * 0.004, 7) - 4 * n(x * 0.02, 8);
const front = x => -27 - 7 * n(x * 0.005, 9) - 3 * n(x * 0.03, 10);
L.wash(g, crowns(-900, 900, back, 12, 31), '#8ea493', [-900, -60, 900, 0], r, 5);
const p = crowns(-900, 900, front, 10, 37);
L.wash(g, p, '#748d66', [-900, -45, 900, 0], r, 6, 2 * px);
L.pen(g, p, 1.0 * px, 0.22);
