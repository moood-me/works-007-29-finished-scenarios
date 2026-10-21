// A chandelier hanging from the ceiling (x across, y up negative from its bottom finial at 3.8 m; the ceiling at 6 m is
// y −2.2): a gilt chain and canopy, a glass stem of bulbs, two gilt rings seen from below — the upper of six candles,
// the lower of eight (lib: RINGS, candles) —, festoons of crystal drops between them and drops hanging under the lower
// ring. Its flames are `chandelier_flames`; its light the scene's `chandelier_near` / `_far`. A copy for each
const L = e.kit.brush, W = e.lib, px = L.px(e);
const GILT = '#b8913f', GLASS = '#dfe8ec';
const all = W.candles();
const candlePath = near => {
  const p = new Path2D();
  for (const [x, y, n] of all) {
    if (n !== near) continue;
    p.rect(x - 0.016, y - W.CANDLE, 0.032, W.CANDLE);
  }
  return p;
};
const cups = near => {
  const p = new Path2D();
  for (const [x, y, n] of all) {
    if (n !== near) continue;
    p.moveTo(x + 0.045, y);
    p.ellipse(x, y, 0.045, 0.018, 0, 0, Math.PI * 2);
  }
  return p;
};
// the chain and the canopy
const chain = new Path2D();
for (let y = -2.18; y < -1.6; y += 0.07) {
  chain.moveTo(0.02, y);
  chain.ellipse(0, y, 0.02, 0.035, 0, 0, Math.PI * 2);
}
L.pen(g, chain, 1.3 * px, 0.8);
const canopy = new Path2D();
canopy.moveTo(-0.18, -2.2);
canopy.quadraticCurveTo(0, -2.02, 0.18, -2.2);
canopy.closePath();
g.fillStyle = GILT;
g.fill(canopy);
L.pen(g, canopy, 1.0 * px, 0.7);
// the far candles (behind the stem and the rings)
g.fillStyle = '#f4efe2';
g.fill(candlePath(0));
g.fillStyle = GILT;
g.fill(cups(0));
L.pen(g, candlePath(0), 0.8 * px, 0.5);
// the stem: glass bulbs on a gilt rod, from the chain to the finial
const stem = new Path2D();
for (const [y, rr] of [[-1.55, 0.06], [-1.38, 0.09], [-1.05, 0.12], [-0.8, 0.08], [-0.42, 0.14], [-0.18, 0.08], [-0.04, 0.05]]) {
  stem.moveTo(rr, y);
  stem.ellipse(0, y, rr, rr * 0.8, 0, 0, Math.PI * 2);
}
g.fillStyle = GLASS;
g.fill(stem);
L.pen(g, stem, 0.9 * px, 0.55);
// the rings: gilt bands seen from below, a little thick
for (const ring of W.RINGS) {
  const band = new Path2D();
  band.ellipse(0, ring.y, ring.rx, ring.ry, 0, 0, Math.PI * 2);
  band.moveTo(ring.rx - 0.07, ring.y + 0.015);
  band.ellipse(0, ring.y + 0.015, ring.rx - 0.07, ring.ry - 0.04, 0, 0, Math.PI * 2);
  g.fillStyle = GILT;
  g.fill(band, 'evenodd');
  L.pen(g, band, 1.2 * px, 0.8);
}
// the arms from the stem out to the lower ring, curving
const arms = new Path2D();
for (const s of [-1, 1]) {
  arms.moveTo(0, -0.9);
  arms.bezierCurveTo(s * 0.3, -1.0, s * 0.62, -0.85, s * 0.78, -0.6);
  arms.moveTo(0, -1.4);
  arms.quadraticCurveTo(s * 0.3, -1.42, s * 0.42, -1.25);
}
g.strokeStyle = GILT;
g.lineWidth = 0.035;
g.stroke(arms);
L.pen(g, arms, 0.7 * px, 0.4);
// festoons of crystal drops: from the upper ring sagging to the lower, and drops hanging under the lower ring
const drops = new Path2D();
for (let k = 0; k < 8; k++) {
  const a0 = (k / 8) * Math.PI * 2, a1 = ((k + 1) / 8) * Math.PI * 2;
  for (let i = 0; i <= 8; i++) {
    const u = i / 8, a = a0 + (a1 - a0) * u, sag = Math.sin(u * Math.PI) * 0.16;
    const x = Math.cos(a) * 0.74, y = -0.6 + Math.sin(a) * 0.11 + sag;
    drops.moveTo(x + 0.02, y);
    drops.ellipse(x, y, 0.02, 0.026, 0, 0, Math.PI * 2);
  }
}
for (let k = 0; k < 16; k++) {
  const a = (k / 16) * Math.PI * 2, x = Math.cos(a) * 0.7, y = -0.6 + Math.sin(a) * 0.11;
  drops.moveTo(x + 0.018, y + 0.2);
  drops.ellipse(x, y + 0.2, 0.018, 0.04, 0, 0, Math.PI * 2);
}
g.fillStyle = GLASS;
g.fill(drops);
L.pen(g, drops, 0.6 * px, 0.35);
// the near candles, over the rings
g.fillStyle = '#f4efe2';
g.fill(candlePath(1));
g.fillStyle = GILT;
g.fill(cups(1));
L.pen(g, candlePath(1), 0.8 * px, 0.5);
// the finial: a glass drop under it all
const finial = new Path2D();
finial.moveTo(0, 0.05);
finial.quadraticCurveTo(0.05, -0.02, 0, -0.06);
finial.quadraticCurveTo(-0.05, -0.02, 0, 0.05);
g.fillStyle = GLASS;
g.fill(finial);
L.pen(g, finial, 0.8 * px, 0.5);
e.at(0, -0.9);
