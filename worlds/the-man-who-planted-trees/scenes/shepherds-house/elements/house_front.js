// The front of the stone house: dry-laid limestone in rough courses, the open door (x −1.25…−0.35) and the one window
// (x 1.25…1.95, 0.98…1.68 m up) cut through it — what is lit behind them is door_glow and window_glow; big lintel
// stones over both, a wooden window frame, a darker footing
const HOLES = [[-1.25, -1.9, -0.35, 0], [1.25, -1.675, 1.95, -0.975]];
const hits = (x0, y0, x1, y1) => HOLES.some(([a, b, c, d]) => x0 < c + 0.04 && x1 > a - 0.04 && y0 < d + 0.04 && y1 > b - 0.04);
g.fillStyle = "#958470";
g.beginPath();
g.rect(-3.1, -2.5, 6.2, 2.5);
for (const [a, b, c, d] of HOLES) g.rect(a, b, c - a, d - b);
g.fill("evenodd");
const STONE = ["#bfae90", "#b5a385", "#c6b697", "#ad9b7e", "#bba98a"];
let y = 0;
while (y > -2.5) {
  const h = 0.2 + e.rnd() * 0.1;
  let x = -3.1 - e.rnd() * 0.3;
  while (x < 3.1) {
    const w = 0.32 + e.rnd() * 0.4, x0 = Math.max(x + 0.025, -3.1), x1 = Math.min(x + w - 0.025, 3.1), y0 = Math.max(y - h + 0.025, -2.5), y1 = y - 0.02;
    if (x1 > x0 && !hits(x0, y0, x1, y1)) {
      g.fillStyle = STONE[Math.floor(e.rnd() * STONE.length)];
      g.beginPath();
      g.roundRect(x0, y0, x1 - x0, y1 - y0, 0.04);
      g.fill();
    }
    x += w;
  }
  y -= h;
}
// the jambs and the lintels: big dressed stones
g.fillStyle = "#c9b99b";
g.fillRect(-1.45, -2.2, 1.3, 0.28);
g.fillRect(1.12, -1.92, 0.96, 0.22);
g.fillStyle = "#b8a789";
for (let k = 0; k < 4; k++) {
  g.fillRect(-1.43, -1.9 + k * 0.48, 0.16, 0.44);
  g.fillRect(-0.33, -1.9 + k * 0.48, 0.16, 0.44);
}
g.fillRect(1.15, -0.975, 0.9, 0.09);
// the window's wooden frame
g.strokeStyle = "#4f3e30";
g.lineWidth = 0.06;
g.strokeRect(1.25, -1.675, 0.7, 0.7);
// the footing: bigger, darker stones along the ground
g.fillStyle = "#8a7a64";
g.fillRect(-3.1, -0.14, 1.85, 0.14);
g.fillRect(-0.35, -0.14, 3.45, 0.14);
