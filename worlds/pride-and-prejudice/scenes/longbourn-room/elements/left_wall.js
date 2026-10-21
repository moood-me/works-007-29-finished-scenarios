// The left wall (facing into the room: x along it away from the viewer, its middle at 3.4 m; y up negative): a second
// sash window near the eye (x −1.3…−0.1: 2.1…3.3 m off, the sill at 0.75 m — the daylight from before the sisters, on
// their faces; its frame is a copy of `window`, its pane the unseen `side_opening`), the chimneypiece at 5 m (x 1.6) — cream stone, a dark firebox (its grate and glowing coals: `coals`), the mantel shelf at
// 1.25 m — and over it a landscape in a gilt frame
const L = e.kit.brush, W = e.lib, px = L.px(e), r = L.rand(103);
W.wall(g, -2.8, 2.8, [[-1.3, -2.75, -0.1, -0.75]], r, px);
// the chimneypiece: its jambs and frieze, the shelf a little wider, the firebox
const piece = new Path2D();
piece.rect(0.85, -1.2, 1.5, 1.2);
L.wash(g, piece, '#ece5d5', [0.85, -1.2, 2.35, 0], r, 3);
const shelf = new Path2D();
shelf.rect(0.75, -1.3, 1.7, 0.1);
g.fillStyle = '#f2ecdf';
g.fill(shelf);
const box = new Path2D();
box.rect(1.2, -0.82, 0.8, 0.82);
L.wash(g, box, '#3b2f27', [1.2, -0.82, 2, 0], r, 2);
// (the grate and its coals: `coals`; the hearth's stone)
const hearth = new Path2D();
hearth.rect(0.8, -0.05, 1.6, 0.05);
g.fillStyle = '#cfc6b4';
g.fill(hearth);
// the frieze's carved panel, the jambs' fluting, all in pen
const carving = new Path2D();
carving.rect(1.35, -1.12, 0.5, 0.2);
for (const x of [0.95, 1.02, 2.18, 2.25]) { carving.moveTo(x, -0.86); carving.lineTo(x, -0.08); }
L.pen(g, carving, 1.1 * px, 0.55);
L.pen(g, piece, 1.6 * px, 0.85);
L.pen(g, shelf, 1.5 * px, 0.85);
L.pen(g, box, 1.4 * px, 0.7);
// the landscape over it: a gilt frame, a pale wash of fields, trees and sky
const frame = new Path2D();
frame.rect(1.0, -2.75, 1.2, 0.85);
L.wash(g, frame, '#c2a462', [1, -2.75, 2.2, -1.9], r, 2);
const sky = new Path2D();
sky.rect(1.08, -2.67, 1.04, 0.69);
L.wash(g, sky, '#c9d6d6', [1.08, -2.67, 2.12, -1.98], r, 2);
const land = new Path2D();
land.moveTo(1.08, -2.2);
land.quadraticCurveTo(1.4, -2.32, 1.7, -2.22);
land.quadraticCurveTo(1.95, -2.15, 2.12, -2.26);
land.lineTo(2.12, -1.98); land.lineTo(1.08, -1.98); land.closePath();
L.wash(g, land, '#93a477', [1.08, -2.32, 2.12, -1.98], r, 2);
L.foliage(g, [[1.3, -2.32, 0.1], [1.42, -2.36, 0.08], [1.9, -2.3, 0.09]], ['#5d7550', '#748e5e', '#93ab78'], r, 0.02);
L.pen(g, frame, 1.5 * px, 0.85);
L.pen(g, sky, 1.0 * px, 0.6);
