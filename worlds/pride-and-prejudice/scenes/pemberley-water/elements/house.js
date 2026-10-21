// Pemberley: "a large, handsome stone building, standing well on rising ground". A Palladian front of warm cream
// stone seen across the water: a centre block of three storeys with a portico of six columns under a pediment, two
// lower wings, a balustrade along the tops, rows of sash windows, a terrace before it all. Metres: x across the front
// (−44…44), y up negative; its foot on the terrace's foot
const L = e.lib, px = L.px(e), r = L.rand(17);
const STONE = '#e9ddc2', STONE_D = '#d6c7a6', ROOF = '#9ea4a4', GLASS = '#7f8d96';
const rect = (x, y, w, h) => { const p = new Path2D(); p.rect(x, y, w, h); return p; };
// the roofs, low behind the balustrades: the centre's hipped, the wings' long and low
const roofs = new Path2D();
roofs.moveTo(-13, -19.5); roofs.lineTo(-10, -22.5); roofs.lineTo(10, -22.5); roofs.lineTo(13, -19.5); roofs.closePath();
roofs.moveTo(-39, -13.5); roofs.lineTo(-37, -16.6); roofs.lineTo(-15, -16.6); roofs.lineTo(-14, -13.5); roofs.closePath();
roofs.moveTo(39, -13.5); roofs.lineTo(37, -16.6); roofs.lineTo(15, -16.6); roofs.lineTo(14, -13.5); roofs.closePath();
L.wash(g, roofs, ROOF, [-40, -23, 40, -13], r, 2);
// chimneys in pairs on the centre's roof
const chimneys = new Path2D();
for (const x of [-8.5, -6.8, 6.8, 8.5]) chimneys.rect(x - 0.5, -24.2, 1, 2.2);
L.wash(g, chimneys, STONE_D, [-9, -24.2, 9, -22], r, 0);
L.pen(g, chimneys, 1.1 * px, 0.5);
// the wings and the centre block
const wings = new Path2D();
wings.rect(-40, -13.5, 26, 12);
wings.rect(14, -13.5, 26, 12);
L.wash(g, wings, STONE, [-40, -13.5, 40, -1.5], r, 4);
const centre = rect(-14, -19.5, 28, 18);
L.wash(g, centre, STONE, [-14, -19.5, 14, -1.5], r, 3);
// cornices and balustrades: a band a shade darker under each top edge, the balusters as a row of short strokes
const bands = new Path2D();
bands.rect(-40, -13.5, 26, 0.5); bands.rect(14, -13.5, 26, 0.5); bands.rect(-14, -19.5, 28, 0.6);
bands.rect(-40, -7.6, 26, 0.3); bands.rect(14, -7.6, 26, 0.3); bands.rect(-14, -7.6, 28, 0.3);
g.fillStyle = L.tone(STONE_D, 0.95);
g.fill(bands);
const balusters = new Path2D();
const rail = (x0, x1, y) => {
  balusters.moveTo(x0, y - 1.2); balusters.lineTo(x1, y - 1.2);
  for (let x = x0 + 0.4; x < x1; x += 0.8) { balusters.moveTo(x, y - 1.15); balusters.lineTo(x, y - 0.05); }
};
rail(-40, -14, -13.5); rail(14, 40, -13.5); rail(-14, 14, -19.5);
const top = new Path2D();
top.rect(-40, -14.9, 26, 1.4); top.rect(14, -14.9, 26, 1.4); top.rect(-14, -20.9, 28, 1.4);
g.fillStyle = STONE;
g.fill(top);
L.pen(g, balusters, 1.0 * px, 0.45);
// the windows: tall sash windows below, shorter above; the glass a grey-blue wash, lighter at the top where it takes
// the sky, glazing bars and a pen line round each
const glass = new Path2D(), bars = new Path2D();
const win = (x, y, w, h) => {
  glass.rect(x - w / 2, y - h, w, h);
  bars.rect(x - w / 2, y - h, w, h);
  bars.moveTo(x, y - h); bars.lineTo(x, y);
  for (let k = 1; k < 3; k++) { bars.moveTo(x - w / 2, y - (h * k) / 3); bars.lineTo(x + w / 2, y - (h * k) / 3); }
};
for (const side of [-1, 1]) {
  for (let i = 0; i < 6; i++) {
    const x = side * (16.2 + i * 4.1);
    win(x, -2.6, 1.5, 3.2);
    win(x, -8.6, 1.4, 2.5);
  }
}
for (const x of [-11.5, 11.5]) { win(x, -2.6, 1.5, 3.2); win(x, -8.6, 1.4, 2.5); win(x, -14.4, 1.3, 2.0); }
for (const x of [-5, -1.7, 1.7, 5]) win(x, -14.4, 1.3, 2.0);
const sky = g.createLinearGradient(0, -17, 0, -1);
sky.addColorStop(0, '#a9b8c0');
sky.addColorStop(1, GLASS);
g.fillStyle = sky;
g.fill(glass);
L.pen(g, bars, 0.9 * px, 0.5);
// the portico: six columns before the centre, a pediment over them, the shade behind the columns
const porch = rect(-8, -13, 16, 11.5);
g.fillStyle = L.tone(STONE_D, 0.9);
g.fill(porch);
const doors = new Path2D();
doors.rect(-1.1, -5.6, 2.2, 4.1);
for (const x of [-5, 5]) doors.rect(x - 0.7, -4.8, 1.4, 3.2);
g.fillStyle = '#6d6a62';
g.fill(doors);
const columns = new Path2D();
for (let i = 0; i < 6; i++) columns.rect(-7.6 + i * 2.9, -13, 0.85, 11.5);
g.fillStyle = STONE;
g.fill(columns);
L.pen(g, columns, 0.9 * px, 0.4);
const pediment = new Path2D();
pediment.moveTo(-8.8, -13); pediment.lineTo(0, -17.6); pediment.lineTo(8.8, -13); pediment.closePath();
L.wash(g, pediment, STONE, [-9, -17.6, 9, -13], r, 0);
const tympanum = new Path2D();
tympanum.moveTo(-6.8, -13.5); tympanum.lineTo(0, -16.9); tympanum.lineTo(6.8, -13.5); tympanum.closePath();
L.pen(g, pediment, 1.1 * px, 0.55);
L.pen(g, tympanum, 0.8 * px, 0.35);
g.fillStyle = L.tone(STONE_D, 1);
g.fillRect(-8.8, -13.4, 17.6, 0.5);
// the terrace before the house: a long low wall, steps down in the middle to the lawn
const terrace = rect(-46, -1.5, 92, 1.5);
L.wash(g, terrace, STONE_D, [-46, -1.5, 46, 0], r, 2);
const steps = new Path2D();
for (let k = 0; k < 4; k++) { steps.moveTo(-4 - k * 0.6, -1.5 + k * 0.37); steps.lineTo(4 + k * 0.6, -1.5 + k * 0.37); }
L.pen(g, steps, 0.8 * px, 0.4);
// the pen over the whole front: its outlines, a little loose
const outline = new Path2D();
outline.rect(-40, -14.9, 26, 13.4); outline.rect(14, -14.9, 26, 13.4); outline.rect(-14, -20.9, 28, 19.4); outline.rect(-46, -1.5, 92, 1.5);
L.pen(g, outline, 1.2 * px, 0.55);
L.pen(g, roofs, 1.0 * px, 0.4);
