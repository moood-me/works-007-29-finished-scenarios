// The sash window in the far wall (its middle at across 1.7; x −0.6…0.6, from the sill at 0.75 m to 2.75 m): a cream
// frame, six panes over six, the meeting rail, a sill a little proud of the wall
const L = e.kit.brush, px = L.px(e), r = L.rand(109);
const frame = new Path2D();
frame.rect(-0.6, -2.75, 1.2, 2.0);
frame.rect(-0.53, -2.68, 1.06, 0.88);
frame.rect(-0.53, -1.72, 1.06, 0.9);
g.fillStyle = '#f1ebdc';
g.fill(frame, 'evenodd');
const bars = new Path2D();
for (const x of [-0.18, 0.18]) { bars.rect(x - 0.012, -2.68, 0.024, 0.88); bars.rect(x - 0.012, -1.72, 0.024, 0.9); }
for (const y of [-2.39, -2.1, -1.42, -1.12]) bars.rect(-0.53, y - 0.012, 1.06, 0.024);
g.fill(bars);
const sill = new Path2D();
sill.rect(-0.72, -0.78, 1.44, 0.07);
L.wash(g, sill, '#e9e1cc', [-0.72, -0.78, 0.72, -0.71], r, 1);
L.pen(g, frame, 1.3 * px, 0.75);
L.pen(g, bars, 0.9 * px, 0.5);
L.pen(g, sill, 1.3 * px, 0.75);
