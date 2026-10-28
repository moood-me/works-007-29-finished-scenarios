// The jukebox in the corner: a walnut cabinet with a round-arched top; in its face the lit arch (bands of amber,
// rose and green glass), a window onto the records and the arm, a chrome speaker grille below over an amber
// light, and down each side a glass pilaster with bubbles rising in it. The lit glass is layer 1 too: the shader
// makes it glow, its colours rolling slowly up the arch and the bubbles rising (u_glow: how bright it is lit).
// Metres from its foot, x −0.42…0.42, 1.55 high.
const arch = (c, r, top) => {
  c.beginPath();
  c.moveTo(-r, 0);
  c.lineTo(-r, top + r);
  c.arc(0, top + r, r, Math.PI, 0);
  c.lineTo(r, 0);
  c.closePath();
};
g.fillStyle = '#5e3622';
arch(g, 0.42, -1.55);
g.fill();
g.fillStyle = '#7a4a2f';
arch(g, 0.36, -1.5);
g.fill();
const lit = c => {
  // the arch's bands
  const bands = ['#ffb347', '#ff6f61', '#ff9fb0', '#8ee0a8'];
  for (let i = 0; i < 4; i++) {
    c.strokeStyle = bands[i];
    c.lineWidth = 0.035;
    c.beginPath();
    c.arc(0, -1.12, 0.3 - i * 0.045, Math.PI, 0);
    c.lineTo(0.3 - i * 0.045, -0.9);
    c.moveTo(-0.3 + i * 0.045, -0.9);
    c.lineTo(-0.3 + i * 0.045, -1.12);
    c.stroke();
  }
  // the pilasters
  for (const x of [-0.39, 0.39]) {
    const p = c.createLinearGradient(0, -1.1, 0, -0.1);
    p.addColorStop(0, '#ff8a6a');
    p.addColorStop(0.5, '#ffc15a');
    p.addColorStop(1, '#ff7a90');
    c.fillStyle = p;
    c.fillRect(x - 0.025, -1.1, 0.05, 1.0);
  }
  // the grille's light
  c.fillStyle = '#ffb04a';
  c.fillRect(-0.24, -0.62, 0.48, 0.42);
};
lit(g);
e.layer('lit', {}, lit);
// the record window
g.fillStyle = '#2a1d17';
g.beginPath();
g.ellipse(0, -1.0, 0.17, 0.12, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#151112';
g.beginPath();
g.ellipse(0, -0.98, 0.11, 0.035, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#c84a3c';
g.beginPath();
g.ellipse(0, -0.985, 0.03, 0.01, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#c9ccc8';
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(0.14, -1.06);
g.lineTo(0.03, -0.99);
g.stroke();
// the selector strip and the grille's chrome bars
g.fillStyle = '#e8e2d2';
g.fillRect(-0.24, -0.78, 0.48, 0.1);
g.fillStyle = '#8a7a64';
for (let x = -0.22; x < 0.22; x += 0.04) g.fillRect(x, -0.76, 0.025, 0.06);
g.fillStyle = '#d4d6d2';
for (let x = -0.23; x < 0.24; x += 0.06) g.fillRect(x, -0.62, 0.018, 0.42);
g.fillRect(-0.26, -0.64, 0.52, 0.025);
g.fillRect(-0.26, -0.21, 0.52, 0.025);
// the plinth
g.fillStyle = '#3c2417';
g.fillRect(-0.43, -0.1, 0.86, 0.1);
e.light(0, -0.95, 0.5, '#ff9d6a', 0.6, 'glow');
e.at(0, -1.0, 'records');
