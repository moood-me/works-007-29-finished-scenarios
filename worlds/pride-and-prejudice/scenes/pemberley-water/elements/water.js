// The water before the house, seen from above (x across, y toward the viewer; the far shore at y −49, the near bank at
// y 49): a still green-grey, paler far off where it takes the sky, a few long light streaks; lily pads by the near bank
// on the left. It mirrors the house, the bridge, the trees and the sky (its "reflect")
const L = e.lib, r = L.rand(61);
const base = g.createLinearGradient(0, -49, 0, 49);
base.addColorStop(0, '#b7c7c2');
base.addColorStop(0.5, '#a1b6b0');
base.addColorStop(1, '#8aa39c');
g.fillStyle = base;
g.fillRect(-250, -49, 500, 98);
const streaks = new Path2D();
for (let i = 0; i < 46; i++) {
  const y = -48 + 96 * r() ** 0.7, x = -200 + 400 * r(), w = 6 + 30 * r() * (0.4 + (y + 49) / 98), h = 0.08 + 0.12 * r();
  streaks.moveTo(x + w, y);
  streaks.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
}
g.fillStyle = 'rgba(214,224,220,0.45)';
g.fill(streaks);
// lily pads: round leaves with a notch, two pale flowers
const pads = new Path2D();
for (const [x, y, s] of [[-6, 45.5, 0.42], [-4.9, 46.4, 0.35], [-7.1, 46.8, 0.38], [-3.7, 44.9, 0.3], [-2.8, 46.9, 0.36], [-8.1, 44.6, 0.32], [-1.3, 45.6, 0.28]]) {
  const a = r() * Math.PI * 2;
  pads.moveTo(x, y);
  pads.arc(x, y, s, a + 0.35, a + Math.PI * 2 - 0.05);
  pads.closePath();
}
L.wash(g, pads, '#7d9768', [-8.5, 44, -0.9, 47.5], r, 1, 0.02);
const flowers = new Path2D();
for (const [x, y] of [[-5.4, 45.8], [-3.1, 46.6]]) { flowers.moveTo(x + 0.13, y); flowers.ellipse(x, y, 0.13, 0.1, 0, 0, Math.PI * 2); }
g.fillStyle = '#f3ecd8';
g.fill(flowers);
