// The stone bridge where the water narrows, to the right: three round arches on two piers, a coping along the top,
// voussoirs drawn round each arch; a grassy abutment at either end with a few shrubs. Its foot is the water's level;
// through the arches the water beyond, and the water doubles it
const L = e.lib, px = L.px(e), r = L.rand(53);
const STONE = '#ddd0b1';
const body = new Path2D();
body.rect(-17, -6.2, 39, 6.4);
const arches = [-9, 0.5, 10.5].map(c => [c, 3.6]);
for (const [c, rad] of arches) {
  body.moveTo(c - rad, 0.2);
  body.lineTo(c - rad, -1.4);
  body.arc(c, -1.4, rad, Math.PI, 0);
  body.lineTo(c + rad, 0.2);
  body.closePath();
}
g.fillStyle = STONE;
g.fill(body, 'evenodd');
for (let i = 0; i < 5; i++) {
  const x = -17 + 39 * r(), y = -6 + 6 * r(), rad = 3 + 5 * r();
  const gr = g.createRadialGradient(x, y, 0, x, y, rad), k = r() < 0.5 ? 0.92 : 1.08;
  gr.addColorStop(0, L.tone(STONE, k, 0.5));
  gr.addColorStop(1, L.tone(STONE, k, 0));
  g.fillStyle = gr;
  g.fill(body, 'evenodd');
}
// the coping, a shade lighter, and its shadow line
g.fillStyle = L.tone(STONE, 1.08);
g.fillRect(-17.3, -6.6, 39.6, 0.45);
// the voussoirs and the courses
const lines = new Path2D();
for (const [c, rad] of arches) {
  for (let k = 0; k <= 10; k++) {
    const a = Math.PI + (k / 10) * Math.PI, ca = Math.cos(a), sa = Math.sin(a);
    lines.moveTo(c + ca * rad, -1.4 + sa * rad);
    lines.lineTo(c + ca * (rad + 0.9), -1.4 + sa * (rad + 0.9));
  }
}
lines.moveTo(-17, -5.0); lines.lineTo(22, -5.0);
L.pen(g, lines, 0.9 * px, 0.35);
L.pen(g, body, 1.1 * px, 0.55);
// the abutments: banks of grass down to the water at either end, a shrub or two
const banks = new Path2D();
banks.moveTo(-27, 0.25); banks.quadraticCurveTo(-19, -1, -16.5, -6.3); banks.lineTo(-16.5, 0.25); banks.closePath();
banks.moveTo(21.5, -6.3); banks.quadraticCurveTo(24, -1, 34, 0.25); banks.lineTo(21.5, 0.25); banks.closePath();
L.wash(g, banks, '#93a873', [-27, -6.5, 34, 0.25], r, 2);
L.foliage(g, [[-22, -4.2, 2.3], [-19.2, -6.6, 2.1], [25, -6.8, 2.4], [28.5, -4.6, 2.2]], ['#5c7650', '#738f5e', '#93ad77'], r, 0.5);
