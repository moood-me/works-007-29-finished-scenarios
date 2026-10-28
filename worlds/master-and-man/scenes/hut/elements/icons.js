// The icons' corner (the krasny ugol), over the table: a corner shelf set across the corner, three icons on it — the
// Saviour in the middle, larger, and two saints, dark gold, their faces small and dark —, a towel with red-woven ends
// draped over them, and the lampada hung before them on three thin chains, its red glass lit.
// (x −0.42…0.42 across the corner, the shelf at y 0, the lampada at y −0.16)
const L = e.lib;
const C = L.C;
// the towel over the top and down both sides
g.fillStyle = C.linen;
g.fillRect(-0.4, -0.86, 0.8, 0.07);
g.fillRect(-0.4, -0.86, 0.07, 0.86);
g.fillRect(0.33, -0.86, 0.07, 0.86);
L.border(g, -0.4, -0.33, -0.22, 0.06);
L.border(g, 0.33, 0.4, -0.22, 0.06);
g.fillStyle = C.red;
g.fillRect(-0.4, -0.12, 0.07, 0.1);
g.fillRect(0.33, -0.12, 0.07, 0.1);
// the icons: boards with a raised border, a gold ground, the figure dark
function icon(x, y, w, h, robe) {
  g.fillStyle = "#5a3a22";
  g.fillRect(x - w / 2, y - h, w, h);
  g.fillStyle = "#c89a48";
  g.fillRect(x - w / 2 + 0.018, y - h + 0.018, w - 0.036, h - 0.036);
  g.fillStyle = "#e0b860";
  g.beginPath();
  g.arc(x, y - h * 0.68, w * 0.2, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "#8a5a3a";
  g.beginPath();
  g.ellipse(x, y - h * 0.68, w * 0.11, w * 0.14, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = robe;
  g.beginPath();
  g.moveTo(x - w * 0.3, y - 0.02);
  g.lineTo(x - w * 0.16, y - h * 0.52);
  g.lineTo(x + w * 0.16, y - h * 0.52);
  g.lineTo(x + w * 0.3, y - 0.02);
  g.closePath();
  g.fill();
}
icon(-0.2, -0.05, 0.17, 0.24, "#3e4a6a");
icon(0.2, -0.05, 0.17, 0.24, "#6a2a22");
icon(0, -0.05, 0.24, 0.34, "#7a2a24");
// the shelf, its carved edge
g.fillStyle = C.boardDark;
g.fillRect(-0.36, -0.05, 0.72, 0.05);
for (let x = -0.33; x < 0.34; x += 0.06) {
  g.beginPath();
  g.arc(x, 0, 0.022, 0, Math.PI);
  g.fill();
}
// the lampada on its chains, its red glass
g.strokeStyle = "#8a7a52";
g.lineWidth = 0.004;
for (const dx of [-0.04, 0, 0.04]) {
  g.beginPath();
  g.moveTo(dx * 0.2, -0.62);
  g.lineTo(dx, -0.2);
  g.stroke();
}
g.fillStyle = "#b8963e";
g.fillRect(-0.045, -0.205, 0.09, 0.012);
g.fillStyle = "#c8282a";
g.beginPath();
g.moveTo(-0.045, -0.19);
g.quadraticCurveTo(-0.045, -0.13, 0, -0.12);
g.quadraticCurveTo(0.045, -0.13, 0.045, -0.19);
g.closePath();
g.fill();
g.fillStyle = "#b8963e";
g.fillRect(-0.012, -0.12, 0.024, 0.03);
e.light(0, -0.17, 0.07, "#ff6a3a", 0.8, "lampada");
e.at(0, -0.3, "icons");
