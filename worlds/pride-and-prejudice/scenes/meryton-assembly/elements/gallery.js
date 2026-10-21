// The musicians' gallery across the far end (its front 15 m off, x across from the room's middle at 0.8; y up
// negative): its floor at 3.0 m on two slim columns, a cream fascia, a balustrade of turned balusters to 4.0 m; behind
// the rail the tops of what is played there — a harp's neck, a bass's scroll, two music stands with their candles (their
// flames are `gallery_flames`). Open below and above: the far wall and its doors show through
const L = e.kit.brush, px = L.px(e), r = L.rand(239);
// the columns: slender, cream, a plain capital and base
const cols = new Path2D(), capitals = new Path2D();
for (const x of [-2.0, 2.0]) {
  cols.moveTo(x - 0.11, -0.2);
  cols.lineTo(x - 0.09, -2.72);
  cols.lineTo(x + 0.09, -2.72);
  cols.lineTo(x + 0.11, -0.2);
  cols.closePath();
  capitals.rect(x - 0.17, -2.86, 0.34, 0.14);
  capitals.rect(x - 0.16, -0.2, 0.32, 0.2);
}
L.wash(g, cols, '#efe8d6', [-2.2, -2.9, 2.2, 0], r, 2);
g.fillStyle = '#f2ecdd';
g.fill(capitals);
const flutes = new Path2D();
for (const x of [-2.0, 2.0]) {
  for (const f of [-0.05, 0, 0.05]) {
    flutes.moveTo(x + f, -2.6);
    flutes.lineTo(x + f, -0.35);
  }
}
L.pen(g, flutes, 0.8 * px, 0.35);
L.pen(g, cols, 1.3 * px, 0.75);
L.pen(g, capitals, 1.2 * px, 0.75);
// behind the rail: the harp's neck and pillar, the bass's scroll, two music stands
const harp = new Path2D();
harp.moveTo(-1.25, -3.9);
harp.lineTo(-1.2, -4.75);
harp.quadraticCurveTo(-0.95, -4.9, -0.7, -4.55);
harp.lineTo(-0.72, -3.9);
harp.closePath();
g.fillStyle = '#b48a4e';
g.fill(harp);
const strings = new Path2D();
for (let k = 1; k < 6; k++) {
  const x = -1.2 + k * 0.08;
  strings.moveTo(x, -3.95);
  strings.lineTo(x, -4.72 + k * 0.03);
}
L.pen(g, strings, 0.6 * px, 0.4);
L.pen(g, harp, 1.2 * px, 0.7);
const scroll = new Path2D();
scroll.moveTo(1.36, -3.95);
scroll.lineTo(1.34, -4.5);
scroll.moveTo(1.4, -4.55);
scroll.arc(1.34, -4.55, 0.06, 0, Math.PI * 2);
g.strokeStyle = '#6a442c';
g.lineWidth = 0.05;
g.stroke(scroll);
const stands = new Path2D();
for (const x of [0.15, 0.85]) {
  stands.rect(x - 0.22, -4.42, 0.44, 0.3);
  stands.moveTo(x, -4.12);
  stands.lineTo(x, -3.95);
  stands.rect(x - 0.27, -4.47, 0.03, 0.12);
  stands.rect(x + 0.24, -4.47, 0.03, 0.12);
}
g.fillStyle = '#e8dcc0';
g.fill(stands);
L.pen(g, stands, 1.0 * px, 0.6);
// the balustrade: a rail, a plinth, turned balusters between
const rail = new Path2D();
rail.rect(-3.6, -4.08, 7.2, 0.1);
rail.rect(-3.6, -3.42, 7.2, 0.1);
const balusters = new Path2D();
for (let x = -3.5; x <= 3.5; x += 0.2) {
  balusters.moveTo(x - 0.03, -3.42);
  balusters.quadraticCurveTo(x - 0.07, -3.6, x - 0.025, -3.75);
  balusters.lineTo(x - 0.035, -3.98);
  balusters.lineTo(x + 0.035, -3.98);
  balusters.lineTo(x + 0.025, -3.75);
  balusters.quadraticCurveTo(x + 0.07, -3.6, x + 0.03, -3.42);
  balusters.closePath();
}
g.fillStyle = '#efe8d6';
g.fill(balusters);
g.fill(rail);
L.pen(g, balusters, 0.8 * px, 0.5);
L.pen(g, rail, 1.3 * px, 0.8);
// the fascia under it: a cream band with a sage panel and a garland drawn in the pen
const fascia = new Path2D();
fascia.rect(-3.6, -3.32, 7.2, 0.46);
L.wash(g, fascia, '#ebe2cc', [-3.6, -3.32, 3.6, -2.86], r, 3);
const panel = new Path2D();
panel.rect(-3.3, -3.24, 6.6, 0.3);
L.wash(g, panel, '#a9b597', [-3.3, -3.24, 3.3, -2.94], r, 3);
const garland = new Path2D();
for (let x = -3.1; x < 3.1; x += 0.62) {
  garland.moveTo(x, -3.2);
  garland.quadraticCurveTo(x + 0.31, -2.98, x + 0.62, -3.2);
}
L.pen(g, garland, 1.0 * px, 0.5);
L.pen(g, panel, 1.0 * px, 0.6);
L.pen(g, fascia, 1.4 * px, 0.8);
e.at(0.5, -4.3, 'musicians');
