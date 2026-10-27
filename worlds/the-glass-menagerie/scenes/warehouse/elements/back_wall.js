// The storeroom's back wall (metres across from its anchor, y up negative, the floor at 0): old brick whitewashed
// long ago — the wash grey-cream, worn through to the red here and there —, grime up to the height of a stack of
// cartons, a steam pipe along under the ceiling. Cut through it, the tall window (x −1.25…1.25, sill 0.95, head 3.35),
// its stone sill; to its left a shipping line's calendar — a steamer on blue water — tacked to the wall; to its
// right the stencilled "NO SMOKING" and a fire bucket of sand on its hook.
const X0 = -3.4;
const X1 = 3.6;
const T = -3.92;
g.save();
g.beginPath();
g.rect(X0, T, X1 - X0, -T + 0.02);
g.rect(-1.25, -3.35, 2.5, 2.4);
g.clip('evenodd');
g.fillStyle = '#d9d0bd';
g.fillRect(X0, T, X1 - X0, -T + 0.02);
// the brick under the wash: courses showing faintly, worn through in patches
g.strokeStyle = 'rgba(150,130,110,0.28)';
g.lineWidth = 0.01;
for (let y = -0.075, row = 0; y > T; y -= 0.075, row++) {
  g.beginPath();
  g.moveTo(X0, y);
  g.lineTo(X1, y);
  g.stroke();
  for (let x = X0 + (row % 2) * 0.11; x < X1; x += 0.22) {
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x, y - 0.075);
    g.stroke();
  }
}
for (let i = 0; i < 22; i++) {
  const x = X0 + e.rnd() * (X1 - X0);
  const y = T + 0.3 + e.rnd() * 3.2;
  const w = 0.15 + e.rnd() * 0.45;
  const h = 0.08 + e.rnd() * 0.2;
  g.fillStyle = 'rgba(160,96,74,0.22)';
  g.beginPath();
  g.ellipse(x, y, w / 2, h / 2, (e.rnd() - 0.5) * 0.4, 0, Math.PI * 2);
  g.fill();
}
// grime: up to where the stacks stood against it, and soot over the window
const dirt = g.createLinearGradient(0, -1.5, 0, 0);
dirt.addColorStop(0, 'rgba(110,92,74,0)');
dirt.addColorStop(1, 'rgba(110,92,74,0.5)');
g.fillStyle = dirt;
g.fillRect(X0, -1.5, X1 - X0, 1.52);
const soot = g.createLinearGradient(0, -3.9, 0, -3.1);
soot.addColorStop(0, 'rgba(90,76,66,0.45)');
soot.addColorStop(1, 'rgba(90,76,66,0)');
g.fillStyle = soot;
g.fillRect(X0, -3.9, X1 - X0, 0.8);
// the skirting board
g.fillStyle = '#6a5442';
g.fillRect(X0, -0.16, X1 - X0, 0.18);
g.restore();
// the window's stone sill and lintel
g.fillStyle = '#b9ad98';
g.fillRect(-1.35, -0.97, 2.7, 0.09);
g.fillStyle = 'rgba(60,48,40,0.5)';
g.fillRect(-1.35, -0.88, 2.7, 0.025);
g.fillStyle = '#c3b8a4';
g.fillRect(-1.33, -3.47, 2.66, 0.12);
// the steam pipe under the ceiling, its brackets
g.fillStyle = '#6d6a63';
g.fillRect(X0, -3.72, X1 - X0, 0.09);
g.fillStyle = 'rgba(255,255,255,0.18)';
g.fillRect(X0, -3.71, X1 - X0, 0.02);
g.fillStyle = '#4f4c47';
for (let x = X0 + 0.5; x < X1; x += 1.2) g.fillRect(x, -3.75, 0.05, 0.16);
// the calendar: a picture of a steamer on blue water over the month's grid, tacked by its corners
g.fillStyle = '#efe8d6';
g.fillRect(-2.35, -2.25, 0.5, 0.72);
g.fillStyle = '#7fa1c2';
g.fillRect(-2.31, -2.21, 0.42, 0.3);
g.fillStyle = '#4a6f93';
g.fillRect(-2.31, -2.01, 0.42, 0.1);
g.fillStyle = '#2e2b30';
g.beginPath();
g.moveTo(-2.27, -2.03);
g.lineTo(-1.93, -2.03);
g.lineTo(-1.95, -2.0);
g.lineTo(-2.25, -2.0);
g.fill();
g.fillStyle = '#f2efe6';
g.fillRect(-2.2, -2.07, 0.16, 0.04);
g.fillStyle = '#2b2a2e';
g.fillRect(-2.12, -2.14, 0.035, 0.07);
g.fillStyle = '#b4493a';
g.fillRect(-2.12, -2.12, 0.035, 0.012);
g.fillStyle = 'rgba(80,70,64,0.6)';
for (let r = 0; r < 5; r++) for (let c = 0; c < 7; c++) g.fillRect(-2.31 + c * 0.06, -1.86 + r * 0.055, 0.04, 0.035);
g.fillStyle = '#8a3b2f';
for (const [x, y] of [[-2.33, -2.23], [-1.87, -2.23]]) {
  g.beginPath();
  g.arc(x, y, 0.012, 0, Math.PI * 2);
  g.fill();
}
// the stencil
g.fillStyle = 'rgba(120,40,34,0.82)';
g.font = 'bold 0.15px sans-serif';
g.textAlign = 'center';
g.fillText(tr('NO SMOKING'), 2.25, -2.55);
// the fire bucket on its hook: red, round-bottomed, sand in it
g.fillStyle = '#4b4741';
g.fillRect(2.23, -2.12, 0.04, 0.1);
g.fillStyle = '#a8382c';
g.beginPath();
g.moveTo(2.07, -2.02);
g.lineTo(2.43, -2.02);
g.lineTo(2.39, -1.75);
g.quadraticCurveTo(2.25, -1.63, 2.11, -1.75);
g.closePath();
g.fill();
g.fillStyle = 'rgba(255,255,255,0.2)';
g.fillRect(2.1, -2.0, 0.05, 0.22);
g.strokeStyle = '#3a3632';
g.lineWidth = 0.012;
g.beginPath();
g.arc(2.25, -2.02, 0.18, Math.PI, 0);
g.stroke();
