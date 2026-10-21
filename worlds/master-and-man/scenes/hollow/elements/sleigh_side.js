// The sleigh's near side, sunk in the drift where it stopped: the master's sleigh from the yard — dark painted boards,
// a panel of woven bast in them —, its runners gone under the snow but for the curl of the near one rising at the front;
// its back (where the master sits) higher and rounded, the striped rug thrown over it; straw sticking up over the rim;
// snow on the rim and the rug, and the snow the wind has packed against the side, highest at the back.
// It stands on the sleigh's anchor (`sleigh`, turned 150: its front toward the eye on the left), along it: its front at
// x −1.35 (the runner's curl), the front board at −1.06, the back board at 1.12; the rim 0.47…0.52 m up, the back 0.92.
const L = e.lib;
const C = L.C;
const WOOD = "#5c4a39";
const WOOD_DARK = "#3c3128";
const BAST = "#7a6a52";

// the runner's curl at the front, out of the snow: thick, dark, iron along its face
g.lineCap = "round";
g.strokeStyle = WOOD_DARK;
g.lineWidth = 0.09;
g.beginPath();
g.moveTo(-0.95, -0.06);
g.quadraticCurveTo(-1.36, -0.08, -1.33, -0.42);
g.quadraticCurveTo(-1.3, -0.66, -1.12, -0.62);
g.stroke();
g.strokeStyle = C.iron;
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(-1.0, -0.03);
g.quadraticCurveTo(-1.39, -0.06, -1.37, -0.4);
g.stroke();

// the body: dark boards, its back higher and rounded
const body = new Path2D();
body.moveTo(-1.06, -0.04);
body.lineTo(-1.06, -0.47);
body.lineTo(0.68, -0.52);
body.quadraticCurveTo(0.74, -0.86, 0.9, -0.92);
body.quadraticCurveTo(1.08, -0.96, 1.12, -0.86);
body.lineTo(1.12, -0.04);
body.closePath();
g.fillStyle = WOOD;
g.fill(body);
g.save();
g.clip(body);
// (the boards: their seams, a lighter worn edge along each)
for (let y = -0.04; y > -1.0; y -= 0.16) {
  g.fillStyle = "rgba(30,24,20,0.55)";
  g.fillRect(-1.1, y - 0.012, 2.3, 0.012);
  g.fillStyle = "rgba(140,118,94,0.25)";
  g.fillRect(-1.1, y - 0.15, 2.3, 0.02);
}
g.restore();
// the woven bast panel in the side, its weave a darker grid
g.fillStyle = BAST;
g.fillRect(-0.78, -0.4, 1.36, 0.26);
g.save();
g.beginPath();
g.rect(-0.78, -0.4, 1.36, 0.26);
g.clip();
g.strokeStyle = "#5e5040";
g.lineWidth = 0.018;
for (let x = -0.78; x < 0.62; x += 0.07) {
  g.beginPath();
  g.moveTo(x, -0.4);
  g.lineTo(x + 0.08, -0.14);
  g.stroke();
}
for (let y = -0.37; y < -0.14; y += 0.06) {
  g.beginPath();
  g.moveTo(-0.78, y);
  g.lineTo(0.58, y);
  g.stroke();
}
g.restore();
g.strokeStyle = WOOD_DARK;
g.lineWidth = 0.035;
g.strokeRect(-0.78, -0.4, 1.36, 0.26);
// the rim: a darker rail along the top, an upright at the front and where the back begins
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(-1.06, -0.47);
g.lineTo(0.68, -0.52);
g.moveTo(-1.04, -0.05);
g.lineTo(-1.04, -0.47);
g.moveTo(0.7, -0.05);
g.lineTo(0.7, -0.52);
g.stroke();

// the rug over the back: rough dark grey cloth, faded red and green stripes, hanging over the side
g.fillStyle = "#545a5e";
g.beginPath();
g.moveTo(1.14, -0.88);
g.quadraticCurveTo(1.0, -1.0, 0.82, -0.9);
g.quadraticCurveTo(0.7, -0.74, 0.5, -0.56);
g.lineTo(0.44, -0.3);
g.quadraticCurveTo(0.75, -0.24, 1.14, -0.32);
g.closePath();
g.fill();
g.fillStyle = "#7e3a30";
g.fillRect(0.46, -0.46, 0.68, 0.028);
g.fillStyle = "#4f6656";
g.fillRect(0.45, -0.4, 0.69, 0.022);
g.fillRect(0.45, -0.34, 0.69, 0.018);

// straw sticking up over the rim
g.strokeStyle = "#a99a70";
g.lineWidth = 0.012;
for (let i = 0; i < 22; i++) {
  const x = -0.98 + e.rnd() * 1.5;
  const top = -0.47 - 0.05 * ((x + 1.06) / 1.74);
  g.beginPath();
  g.moveTo(x, top + 0.01);
  g.lineTo(x + (e.rnd() - 0.5) * 0.08, top - 0.03 - e.rnd() * 0.06);
  g.stroke();
}

// snow on the rim, on the back and the rug
L.snowCap(g, -1.06, 0.66, -0.5, 0.03, 91);
L.snowCap(g, 0.74, 1.12, -0.93, 0.05, 92);
L.snowCap(g, 0.5, 0.78, -0.6, 0.03, 93);

// the snow packed against the side by the wind: over the runners, higher toward the back, its top soft and wavy
const drift = new Path2D();
drift.moveTo(-1.45, 0.1);
drift.bezierCurveTo(-1.2, -0.06, -0.9, -0.12, -0.5, -0.12);
drift.bezierCurveTo(0.0, -0.13, 0.4, -0.16, 0.8, -0.22);
drift.bezierCurveTo(1.0, -0.26, 1.15, -0.22, 1.25, 0.1);
drift.closePath();
const dg = g.createLinearGradient(0, -0.26, 0, 0.1);
dg.addColorStop(0, C.snow);
dg.addColorStop(1, C.snowShade);
g.fillStyle = dg;
g.fill(drift);
