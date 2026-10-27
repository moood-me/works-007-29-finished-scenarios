// The tall steel window (metres from its anchor at the middle of its sill, y up negative): a grid of small panes in
// a green-grey frame — six across, seven up —, the glass mostly clear but dulled with dust, a few panes frosted or
// painted over long ago (they glow when the sun is behind them: the element is translucent), one broken and patched
// with a piece of carton. Its top middle panes hinge out (a vent), left a little open.
const W = 2.5;
const H = 2.4;
const COLS = 6;
const ROWS = 7;
const pw = W / COLS;
const ph = H / ROWS;
const x0 = -W / 2;
for (let r = 0; r < ROWS; r++) {
  for (let c = 0; c < COLS; c++) {
    const x = x0 + c * pw;
    const y = -H + r * ph;
    const k = e.rnd();
    if ((r === 4 && c === 1) || (r === 2 && c === 5)) {
      g.fillStyle = '#f4efe0';
    } else if (r === 5 && c === 4) {
      g.fillStyle = '#a58a64';
    } else if (k < 0.12) {
      g.fillStyle = 'rgba(246,240,224,0.85)';
    } else {
      g.fillStyle = `rgba(214,204,176,${0.12 + k * 0.1})`;
    }
    g.fillRect(x, y, pw, ph);
  }
}
// dust thicker toward the bottom of the glass
const dust = g.createLinearGradient(0, -1.2, 0, 0);
dust.addColorStop(0, 'rgba(200,184,150,0)');
dust.addColorStop(1, 'rgba(200,184,150,0.3)');
g.fillStyle = dust;
g.fillRect(x0, -1.2, W, 1.2);
// the frame: the outer frame heavier, the bars thin
g.fillStyle = '#56605a';
for (let c = 0; c <= COLS; c++) g.fillRect(x0 + c * pw - 0.017, -H, 0.034, H);
for (let r = 0; r <= ROWS; r++) g.fillRect(x0, -H + r * ph - 0.015, W, 0.03);
g.fillRect(x0 - 0.05, -H - 0.05, 0.08, H + 0.05);
g.fillRect(-x0 - 0.03, -H - 0.05, 0.08, H + 0.05);
g.fillRect(x0 - 0.05, -H - 0.05, W + 0.1, 0.07);
g.fillRect(x0 - 0.05, -0.04, W + 0.1, 0.06);
// the vent's frame, a darker line where it stands open from the rest, its stay
g.fillStyle = '#3a423e';
g.fillRect(x0 + 2 * pw - 0.02, -H + ph - 0.03, 2 * pw + 0.04, 0.05);
g.strokeStyle = '#3a423e';
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(x0 + 3 * pw, -H + ph);
g.lineTo(x0 + 3 * pw + 0.12, -H + ph + 0.22);
g.stroke();
// the catch and the handle at the middle
g.fillStyle = '#2f3331';
g.fillRect(-0.03, -1.32, 0.06, 0.16);
