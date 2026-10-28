// The back wall, from its foot (metres across from the room's middle): whitewash with the window cut through it over
// the bed (x −1.55…−0.55, sill 1.0, head 2.05), a shelf of books over the bed's head, the soot of the stovepipe going up
// into the ceiling, a post-office calendar.
e.lib.whitewash(g, e, -2.55, 2.55, 2.85);
// the soot behind the stove
const soot = g.createRadialGradient(0.75, -1.4, 0.05, 0.75, -1.8, 1.1);
soot.addColorStop(0, 'rgba(60,52,46,0.4)');
soot.addColorStop(1, 'rgba(60,52,46,0)');
g.fillStyle = soot;
g.fillRect(-0.4, -2.9, 2.3, 2.6);
// the shelf over the bed's head and its books
g.fillStyle = '#5a4433';
g.fillRect(-2.5, -1.82, 0.8, 0.04);
g.fillStyle = '#3e2f24';
g.fillRect(-2.42, -1.78, 0.03, 0.12);
g.fillRect(-1.8, -1.78, 0.03, 0.12);
let x = -2.46;
for (let i = 0; i < 9; i++) {
  const w = 0.03 + e.rnd() * 0.03;
  const h = 0.17 + e.rnd() * 0.09;
  g.fillStyle = ['#6b3b2e', '#3d4d5e', '#7a6a4a', '#4a5a3e', '#8a7a64'][Math.floor(e.rnd() * 5)];
  g.fillRect(x, -1.82 - h, w, h);
  x += w + 0.006;
}
g.save();
g.translate(x + 0.05, -1.82);
g.rotate(0.35);
g.fillStyle = '#5b4a3a';
g.fillRect(0, -0.2, 0.04, 0.2);
g.restore();
// the calendar
g.fillStyle = '#d9cdb0';
g.fillRect(1.5, -1.95, 0.32, 0.44);
g.fillStyle = '#7e4a3a';
g.fillRect(1.5, -1.95, 0.32, 0.12);
g.fillStyle = 'rgba(80,70,60,0.5)';
for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) g.fillRect(1.53 + c * 0.055, -1.78 + r * 0.06, 0.035, 0.03);
g.fillStyle = '#2a2622';
g.fillRect(1.65, -1.99, 0.02, 0.05);
e.lib.hole(g, -1.55, -2.05, -0.55, -1.0);
