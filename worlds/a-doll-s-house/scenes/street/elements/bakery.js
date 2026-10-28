// The house next to the Helmers' (to the right, 9.2 m of its front): pale ochre plaster, the baker's shop on the
// ground floor — its wide window with loaves and cakes on the shelves, its door, and over the pavement the baker's
// golden kringle on an iron bracket; two floors of windows over it. Lit in the evening: the layer `lit` (the shop
// `shop`, a window upstairs `u0`, `u1`), shown as the day goes by its animate. Metres, the foot at the pavement.
const { casement, lamplight, SNOW } = e.lib;
const WALL = '#cdb58e';
const TRIM = '#ece2cc';
g.fillStyle = WALL;
g.fillRect(-4.6, -10.2, 9.2, 10.2);
g.fillStyle = '#8d8a84';
g.fillRect(-4.6, -0.5, 9.2, 0.5);
g.fillStyle = TRIM;
for (const y of [-3.6, -6.8]) g.fillRect(-4.6, y - 0.2, 9.2, 0.2);
g.fillRect(-4.65, -10.2, 9.3, 0.32);
g.fillStyle = SNOW;
g.fillRect(-4.7, -10.36, 9.4, 0.16);
for (const y of [-3.8, -7.0]) g.fillRect(-4.6, y - 0.06, 9.2, 0.06);
// the shop front: a dark green frame round the window and the door, a fascia board
g.fillStyle = '#2f4a3a';
g.fillRect(-4.0, -3.2, 4.2, 2.7);
g.fillStyle = '#b8954f';
g.fillRect(-4.0, -3.2, 4.2, 0.05);
g.fillStyle = '#3d4555';
g.fillRect(-3.8, -2.75, 2.5, 1.95);
g.fillStyle = '#4a3326';
g.fillRect(-1.05, -2.75, 1.0, 2.25);
g.fillStyle = SNOW;
g.fillRect(-3.85, -0.82, 2.6, 0.06);
// the windows of the floors above, and the ground floor's to the right of the shop
for (const x of [-3.0, -1.0, 1.0, 3.0]) {
  casement(g, x, -4.3, 0.9, 2.0, TRIM, true);
  casement(g, x, -7.55, 0.85, 1.85, TRIM, false);
}
casement(g, 2.4, -1.2, 0.9, 1.8, TRIM, false);
// the kringle: a golden pretzel hanging from an iron bracket, snow on the bracket
g.strokeStyle = '#24282a';
g.lineWidth = 0.04;
g.beginPath();
g.moveTo(-4.6, -3.0);
g.lineTo(-3.95, -3.0);
g.moveTo(-4.6, -2.7);
g.lineTo(-4.1, -3.0);
g.moveTo(-4.1, -3.0);
g.lineTo(-4.1, -2.86);
g.stroke();
g.fillStyle = SNOW;
g.fillRect(-4.62, -3.06, 0.68, 0.04);
g.strokeStyle = '#c99a3c';
g.lineWidth = 0.08;
g.beginPath();
g.moveTo(-4.1, -2.86);
g.bezierCurveTo(-4.55, -2.9, -4.55, -2.3, -4.1, -2.45);
g.bezierCurveTo(-3.65, -2.3, -3.65, -2.9, -4.1, -2.86);
g.moveTo(-4.35, -2.42);
g.quadraticCurveTo(-4.1, -2.75, -3.85, -2.42);
g.stroke();
e.layer('lit', {}, c => {
  const glow = c.createLinearGradient(0, -2.75, 0, -0.8);
  glow.addColorStop(0, '#f6cf88');
  glow.addColorStop(1, '#e9a65c');
  c.fillStyle = glow;
  c.fillRect(-3.8, -2.75, 2.5, 1.95);
  // shelves of loaves and cakes, a tiered cake in the middle
  c.fillStyle = '#9c6a3a';
  for (const y of [-2.2, -1.55]) c.fillRect(-3.8, y, 2.5, 0.04);
  for (let x = -3.65; x < -1.45; x += 0.28) {
    c.beginPath();
    c.ellipse(x + 0.1, -2.27, 0.11, 0.07, 0, 0, Math.PI * 2);
    c.ellipse(x + 0.1, -1.62, 0.1, 0.07, 0, 0, Math.PI * 2);
    c.fill();
  }
  c.fillStyle = '#f4ece0';
  c.fillRect(-2.75, -1.25, 0.4, 0.3);
  c.fillRect(-2.67, -1.42, 0.24, 0.17);
  c.fillStyle = '#b3332b';
  c.fillRect(-2.6, -1.5, 0.1, 0.08);
  c.fillStyle = '#2f4a3a';
  c.fillRect(-2.56, -2.75, 0.04, 1.95);
  e.light(-2.55, -1.8, 1.4, '#ffc77e', 1, 'shop');
  lamplight(c, e, -1.0, -4.3, 0.9, 2.0, '#8a4b38', 'u0', 0.8);
  lamplight(c, e, 3.0, -7.55, 0.85, 1.85, '#5d6b52', 'u1', 0.8);
});
e.at(-4.1, -2.65, 'kringle');
