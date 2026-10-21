// The right wall (facing into the room: x along it toward the viewer, its middle at 3.4 m; y up negative): a
// panelled door near the far corner (x −1.6…−0.7), shut
const L = e.kit.brush, W = e.lib, px = L.px(e), r = L.rand(107);
W.wall(g, -2.8, 2.8, [[-1.6, -2.15, -0.7, 0]], r, px);
const door = new Path2D();
door.rect(-1.6, -2.15, 0.9, 2.15);
L.wash(g, door, '#e6dcc4', [-1.6, -2.15, -0.7, 0], r, 3);
const panels = new Path2D();
for (const [x, y, h] of [[-1.5, -2.03, 0.62], [-1.12, -2.03, 0.62], [-1.5, -1.3, 1.12], [-1.12, -1.3, 1.12]]) panels.rect(x, y, 0.32, h);
L.pen(g, panels, 1.2 * px, 0.65);
L.pen(g, door, 1.5 * px, 0.8);
const knob = new Path2D();
knob.arc(-0.8, -1.02, 0.03, 0, Math.PI * 2);
g.fillStyle = '#b8964f';
g.fill(knob);
L.pen(g, knob, 1.0 * px, 0.7);
