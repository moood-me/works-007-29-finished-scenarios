// The master's sleigh behind Mukhorty (it stands on the horse's card, along it: its front at the shaft's end), seen
// from its side, its front to the LEFT (the horse): a solid, heavy thing on the snow — thick dark runners shod with
// iron, curling up in front; a body of dark painted boards with a panel of woven bast in it, down to the runners on
// stout uprights (the dark under it, between them, is the shade under the body: nothing is seen through); its back,
// where the master sits, higher and rounded; straw heaped in it over the rim, a rough striped rug thrown over the
// back; snow on the rug, on the rim and lying along the runners, the runners sunk in it and snow pushed up along them.
// Drawn facing right, mirrored (g.scale(-1, 1)): the numbers are the right-facing drawing's.
// (the right-facing drawing: x −1.35…1.35 m, the runners' curl at 1.3, the front at 0.95, the back at −1.12; its foot at 0)
const L = e.lib;
const C = L.C;
const WOOD = "#5c4a39";
const WOOD_DARK = "#3c3128";
const BAST = "#7a6a52";
const UNDER = "#2f2822";
g.save();
g.scale(-1, 1);

// the shade under the body, between the runners and the boards: solid, dark
g.fillStyle = UNDER;
g.beginPath();
g.moveTo(-1.08, -0.06);
g.lineTo(0.9, -0.06);
g.lineTo(0.92, -0.34);
g.lineTo(-1.1, -0.34);
g.closePath();
g.fill();
// the uprights, stout, from the runners up to the body
g.fillStyle = WOOD;
for (const x of [-0.95, -0.35, 0.25, 0.78]) g.fillRect(x - 0.045, -0.36, 0.09, 0.3);
// the runners: thick, dark, iron-shod, their curl in front
g.strokeStyle = WOOD_DARK;
g.lineWidth = 0.1;
g.lineCap = "round";
g.beginPath();
g.moveTo(-1.18, -0.06);
g.lineTo(0.85, -0.06);
g.quadraticCurveTo(1.34, -0.09, 1.3, -0.52);
g.quadraticCurveTo(1.27, -0.8, 1.08, -0.74);
g.stroke();
g.strokeStyle = C.iron;
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(-1.18, -0.02);
g.lineTo(0.88, -0.02);
g.quadraticCurveTo(1.36, -0.06, 1.33, -0.5);
g.stroke();
// (snow lying along the runners' tops)
L.snowCap(g, -1.1, 0.8, -0.1, 0.035, 63);

// the body: dark boards, its back higher and rounded
g.fillStyle = WOOD;
g.beginPath();
g.moveTo(-1.12, -0.3);
g.lineTo(-1.12, -1.0);
g.quadraticCurveTo(-1.06, -1.1, -0.85, -1.08);
g.quadraticCurveTo(-0.72, -1.04, -0.68, -0.82);
g.lineTo(0.96, -0.74);
g.lineTo(0.93, -0.3);
g.closePath();
g.fill();
// the woven bast panel in the side: its weave a darker grid, opaque
g.fillStyle = BAST;
g.fillRect(-0.6, -0.7, 1.42, 0.32);
g.save();
g.beginPath();
g.rect(-0.6, -0.7, 1.42, 0.32);
g.clip();
g.strokeStyle = "#5e5040";
g.lineWidth = 0.02;
for (let x = -0.6; x < 0.84; x += 0.08) {
  g.beginPath();
  g.moveTo(x, -0.7);
  g.lineTo(x + 0.1, -0.38);
  g.stroke();
}
for (let y = -0.66; y < -0.38; y += 0.07) {
  g.beginPath();
  g.moveTo(-0.6, y);
  g.lineTo(0.82, y);
  g.stroke();
}
g.restore();
// (the frame round it, the rim along the top, the bottom board)
g.strokeStyle = WOOD_DARK;
g.lineWidth = 0.04;
g.strokeRect(-0.6, -0.7, 1.42, 0.32);
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(-1.12, -0.3);
g.lineTo(0.93, -0.3);
g.moveTo(-0.68, -0.8);
g.lineTo(0.96, -0.74);
g.stroke();
// the straw heaped in it: a soft mound over the rim from the back to the front, lighter on top, stalks sticking out
g.fillStyle = "#a89a72";
g.beginPath();
g.moveTo(-0.72, -0.8);
g.bezierCurveTo(-0.5, -1.04, 0.3, -1.06, 0.62, -0.93);
g.quadraticCurveTo(0.86, -0.84, 0.96, -0.74);
g.closePath();
g.fill();
g.fillStyle = "#c2b58c";
g.beginPath();
g.moveTo(-0.6, -0.87);
g.bezierCurveTo(-0.4, -1.01, 0.2, -1.02, 0.5, -0.94);
g.quadraticCurveTo(0.1, -0.93, -0.6, -0.87);
g.closePath();
g.fill();
g.strokeStyle = "#8f8460";
g.lineWidth = 0.014;
for (let i = 0; i < 14; i++) {
  const x = -0.6 + i * 0.1;
  const top = -0.82 - 0.18 * Math.sin(Math.PI * (x + 0.72) / 1.68);
  g.beginPath();
  g.moveTo(x, top + 0.02);
  g.lineTo(x + 0.05 * Math.sin(i * 2.1), top - 0.06);
  g.stroke();
}
// the rug over the back: rough dark grey cloth with faded red and green stripes, its edge hanging over the side
g.fillStyle = "#545a5e";
g.beginPath();
g.moveTo(-1.16, -1.02);
g.quadraticCurveTo(-0.95, -1.16, -0.7, -0.96);
g.quadraticCurveTo(-0.45, -0.89, -0.22, -0.91);
g.lineTo(-0.25, -0.48);
g.quadraticCurveTo(-0.6, -0.42, -0.9, -0.53);
g.lineTo(-1.16, -0.58);
g.closePath();
g.fill();
g.fillStyle = "#7e3a30";
g.fillRect(-1.14, -0.74, 0.9, 0.03);
g.fillStyle = "#4f6656";
g.fillRect(-1.14, -0.66, 0.9, 0.025);
g.fillRect(-1.14, -0.56, 0.9, 0.02);
L.snowCap(g, -1.12, -0.72, -1.05, 0.045, 61);
L.snowCap(g, -0.4, 0.6, -0.97, 0.035, 62);
L.snowCap(g, 0.1, 0.94, -0.76, 0.03, 64);
// the snow pushed up along the runners: they stand sunk in it, not on it
g.fillStyle = C.snowShade;
g.beginPath();
g.moveTo(-1.32, 0.08);
g.quadraticCurveTo(-1.2, -0.09, -0.9, -0.08);
g.lineTo(0.8, -0.08);
g.quadraticCurveTo(1.0, -0.09, 1.18, 0.08);
g.closePath();
g.fill();
g.fillStyle = C.snow;
g.beginPath();
g.moveTo(-1.27, 0.08);
g.quadraticCurveTo(-1.1, -0.06, -0.9, -0.05);
g.lineTo(0.8, -0.05);
g.quadraticCurveTo(0.95, -0.06, 1.12, 0.08);
g.closePath();
g.fill();
g.restore();
