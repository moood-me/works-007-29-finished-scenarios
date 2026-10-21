// The garden seen through the window, early evening and still light: a pale warm sky, the elms along the lane, the
// clipped yew hedge, the lawn and its gravel walk (x across from its middle, at across 4.5; y up negative, its foot on
// the ground 16 m off; the window frames only x −1.6…1.6, y −4.5…0.9)
const L = e.kit.brush, px = L.px(e), r = L.rand(127);
const sky = g.createLinearGradient(0, -6.2, 0, -1);
sky.addColorStop(0, '#b9cad6');
sky.addColorStop(0.55, '#e3e3d6');
sky.addColorStop(1, '#f6e7c6');
g.fillStyle = sky;
g.fillRect(-3.2, -6.2, 6.4, 6);
// a long cloud, lit warm beneath
const cl = g.createRadialGradient(-0.4, -4.3, 0, -0.4, -4.3, 1.4);
cl.addColorStop(0, 'rgba(250,240,224,0.8)');
cl.addColorStop(1, 'rgba(250,240,224,0)');
g.fillStyle = cl;
g.fillRect(-1.8, -5.7, 2.8, 2.8);
// the elms along the lane, far: tall crowns in blue-greens
L.foliage(g, [[-2.4, -3.0, 0.9], [-1.4, -3.6, 1.1], [-0.3, -3.2, 0.95], [0.9, -3.8, 1.2], [2.1, -3.3, 1.0], [2.9, -2.9, 0.8]], ['#748a76', '#8a9f86', '#a7b79a'], r, 0.12, 1.4 * px);
const trunks = new Path2D();
for (const x of [-1.4, 0.9, 2.1]) { trunks.moveTo(x, -1.4); trunks.lineTo(x + 0.03, -2.6); }
L.pen(g, trunks, 1.6 * px, 0.6);
// the field beyond the hedge, paler
const field = new Path2D();
field.rect(-3.2, -1.9, 6.4, 0.8);
L.wash(g, field, '#c2c99a', [-3.2, -1.9, 3.2, -1.1], r, 3);
// the yew hedge: a dark green wall with a soft top
const hedge = new Path2D();
hedge.moveTo(-3.2, -0.2);
hedge.lineTo(-3.2, -1.25);
for (let x = -3.2; x <= 3.2; x += 0.4) hedge.quadraticCurveTo(x + 0.2, -1.42 - 0.05 * r(), x + 0.4, -1.25);
hedge.lineTo(3.2, -0.2);
hedge.closePath();
L.wash(g, hedge, '#5f7556', [-3.2, -1.45, 3.2, -0.2], r, 4);
L.pen(g, hedge, 1.6 * px, 0.6);
// the lawn and the walk, near
const lawn = new Path2D();
lawn.rect(-3.2, -0.2, 6.4, 1.4);
L.wash(g, lawn, '#a7b77f', [-3.2, -0.2, 3.2, 1.2], r, 4);
const walk = new Path2D();
walk.moveTo(-0.5, -0.2); walk.lineTo(0.1, -0.2); walk.lineTo(1.4, 1.2); walk.lineTo(-0.2, 1.2); walk.closePath();
L.wash(g, walk, '#e2d5b4', [-0.5, -0.2, 1.4, 1.2], r, 2);
L.pen(g, walk, 1.3 * px, 0.5);
// a rose bush by the walk
L.foliage(g, [[-1.3, 0.2, 0.32], [-1.0, 0.05, 0.26]], ['#5c7550', '#738d5c', '#90a873'], r, 0.06, 1.4 * px);
const roses = new Path2D();
for (const [x, y] of [[-1.4, 0.05], [-1.15, -0.1], [-0.95, 0.12], [-1.25, 0.28]]) { roses.moveTo(x + 0.05, y); roses.arc(x, y, 0.05, 0, Math.PI * 2); }
g.fillStyle = '#f0dccb';
g.fill(roses);
