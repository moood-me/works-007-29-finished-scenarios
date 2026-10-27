// Daru's bed along the back wall, seen from its side (metres from the floor; its head on the left by the wall's
// corner): a plain iron bedstead painted black, the head end higher than the foot; the grey army blanket hanging over
// its side, a strip of sheet showing, the pillow at the head.
const IRON = '#26241f';
// the ends: posts and rails
g.fillStyle = IRON;
g.fillRect(-0.97, -0.95, 0.04, 0.95);
g.fillRect(0.93, -0.72, 0.04, 0.72);
for (const y of [-0.93, -0.75]) g.fillRect(-0.97, y, 0.04, 0.025);
// the pillow
g.fillStyle = '#e6e1d6';
g.beginPath();
g.ellipse(-0.75, -0.56, 0.2, 0.07, 0, 0, Math.PI * 2);
g.fill();
// the blanket over the side: grey wool with two dark stripes near its hem, folds
g.fillStyle = '#e0dbd0';
g.fillRect(-0.93, -0.53, 1.86, 0.03);
g.fillStyle = '#6e6b64';
g.beginPath();
g.moveTo(-0.55, -0.52);
g.lineTo(0.93, -0.52);
g.lineTo(0.93, -0.2);
for (let x = 0.93; x >= -0.55; x -= 0.12) g.lineTo(x, -0.2 + 0.02 * Math.sin(x * 23));
g.closePath();
g.fill();
g.fillStyle = '#4a4844';
g.fillRect(-0.55, -0.3, 1.48, 0.025);
g.fillRect(-0.55, -0.26, 1.48, 0.012);
for (let x = -0.4; x < 0.9; x += 0.22) {
  g.fillStyle = 'rgba(40,38,34,0.25)';
  g.fillRect(x + e.rnd() * 0.05, -0.5, 0.02, 0.3);
}
// the rail and the legs under it
g.fillStyle = IRON;
g.fillRect(-0.93, -0.22, 1.86, 0.025);
g.fillRect(-0.95, -0.2, 0.03, 0.2);
g.fillRect(0.92, -0.2, 0.03, 0.2);
// under the bed: a suitcase
g.fillStyle = '#5e4836';
g.fillRect(0.1, -0.16, 0.55, 0.16);
g.fillStyle = '#3a2c22';
g.fillRect(0.34, -0.17, 0.08, 0.02);
