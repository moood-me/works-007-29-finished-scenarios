// The far wall of the drawing room (x along it from its middle, across 0.2; y up negative): the window to the garden
// cut in it at the right (x 0.9…2.1, from the sill at 0.75 m to 2.75 m), a small oval portrait over the sofa at the left
const L = e.kit.brush, W = e.lib, px = L.px(e), r = L.rand(101);
W.wall(g, -3, 3, [[0.9, -2.75, 2.1, -0.75]], r, px);
// the portrait: a gilt oval frame, a lady's head in profile, a dark ground
const frame = new Path2D();
frame.ellipse(-1.6, -2.05, 0.26, 0.34, 0, 0, Math.PI * 2);
L.wash(g, frame, '#c2a462', [-1.86, -2.39, -1.34, -1.71], r, 2);
const ground = new Path2D();
ground.ellipse(-1.6, -2.05, 0.2, 0.27, 0, 0, Math.PI * 2);
L.wash(g, ground, '#5d5a4c', [-1.8, -2.32, -1.4, -1.78], r, 2);
const sitter = new Path2D();
sitter.moveTo(-1.72, -1.8);
sitter.bezierCurveTo(-1.74, -1.95, -1.66, -2.02, -1.64, -2.1);
sitter.bezierCurveTo(-1.6, -2.17, -1.62, -2.25, -1.56, -2.27);
sitter.bezierCurveTo(-1.48, -2.28, -1.47, -2.18, -1.5, -2.13);
sitter.lineTo(-1.48, -2.08);
sitter.lineTo(-1.51, -2.06);
sitter.bezierCurveTo(-1.5, -2.0, -1.47, -1.9, -1.44, -1.8);
sitter.closePath();
g.fillStyle = '#e6d9bf';
g.fill(sitter);
L.pen(g, frame, 1.4 * px, 0.75);
L.pen(g, ground, 1.0 * px, 0.6);
// its cord and the nail it hangs from
const cord = new Path2D();
cord.moveTo(-1.75, -2.36); cord.lineTo(-1.6, -2.62); cord.lineTo(-1.45, -2.36);
L.pen(g, cord, 1.0 * px, 0.6);
