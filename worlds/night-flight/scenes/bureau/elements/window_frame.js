// The window's frame on the field: white-painted wood round the opening (x −1…1, y −2.55…−1.05), two casements
// and a fanlight over them, a deep sill.
const W = 1;
g.fillStyle = '#d7d1bd';
g.beginPath();
g.rect(-W - 0.1, -2.65, 2 * W + 0.2, 1.6);
g.rect(-W + 0.04, -2.51, 2 * W - 0.08, 1.42);
g.fill('evenodd');
g.fillRect(-0.035, -2.51, 0.07, 1.42);
g.fillRect(-W + 0.04, -2.12, 2 * W - 0.08, 0.06);
g.fillRect(-W + 0.04, -1.65, 2 * W - 0.08, 0.04);
// the sill, its edge catching the light
g.fillStyle = '#cfc8b2';
g.fillRect(-W - 0.16, -1.08, 2 * W + 0.32, 0.08);
g.fillStyle = '#9d957f';
g.fillRect(-W - 0.16, -1.0, 2 * W + 0.32, 0.03);
// a catch on the casements
g.fillStyle = '#7a6a48';
g.fillRect(-0.06, -1.9, 0.12, 0.03);
