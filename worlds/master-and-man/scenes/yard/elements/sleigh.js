// The master's sleigh behind Mukhorty (it stands on the horse's card, along it: its front at the shaft's end), seen
// from its side, its front to the LEFT (the horse): dark runners curling up in front, a woven bast body on short
// uprights, its back (where the master sits) higher and rounded; straw heaped in it in a soft mound over the rim, a
// rough striped rug thrown over the back, a dusting of snow; the runners sunk a little in the snow, snow pushed up
// along them. Drawn facing right, mirrored (g.scale(-1, 1)): the numbers are the right-facing drawing's.
// (x −1.35…1.25 m: the runners' curl at −1.3, the front at −0.95, the back at 1.1; its foot at 0)
const L = e.lib;
const C = L.C;
g.save();
g.scale(-1, 1);

// the runners and their curl
g.strokeStyle = "#4a3d31";
g.lineWidth = 0.07;
g.lineCap = "round";
g.beginPath();
g.moveTo(-1.15, -0.05);
g.lineTo(0.85, -0.05);
g.quadraticCurveTo(1.32, -0.08, 1.28, -0.5);
g.quadraticCurveTo(1.25, -0.78, 1.08, -0.72);
g.stroke();
// the uprights
g.lineWidth = 0.05;
for (const x of [-0.95, -0.35, 0.25, 0.8]) {
  g.beginPath();
  g.moveTo(x, -0.08);
  g.lineTo(x + 0.02, -0.32);
  g.stroke();
}
// the body: woven bast, its back higher and rounded
g.fillStyle = "#9c8a68";
g.beginPath();
g.moveTo(-1.1, -0.3);
g.lineTo(-1.1, -0.98);
g.quadraticCurveTo(-1.05, -1.08, -0.85, -1.06);
g.quadraticCurveTo(-0.72, -1.02, -0.68, -0.8);
g.lineTo(0.95, -0.72);
g.lineTo(0.92, -0.3);
g.closePath();
g.fill();
g.save();
g.clip();
g.strokeStyle = "rgba(96,80,56,0.55)";
g.lineWidth = 0.018;
for (let x = -1.6; x < 1.2; x += 0.07) {
  g.beginPath();
  g.moveTo(x, -0.3);
  g.lineTo(x + 0.5, -1.1);
  g.stroke();
  g.beginPath();
  g.moveTo(x + 0.5, -0.3);
  g.lineTo(x, -1.1);
  g.stroke();
}
g.restore();
g.strokeStyle = "#6e5c44";
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(-1.1, -0.3);
g.lineTo(0.92, -0.3);
g.moveTo(-0.68, -0.8);
g.lineTo(0.95, -0.72);
g.stroke();
// the straw heaped in it: a soft mound over the rim from the back to the front, lighter on top, stalks sticking out
g.fillStyle = "#b7a679";
g.beginPath();
g.moveTo(-0.72, -0.8);
g.bezierCurveTo(-0.5, -1.02, 0.3, -1.04, 0.62, -0.92);
g.quadraticCurveTo(0.86, -0.84, 0.95, -0.72);
g.closePath();
g.fill();
g.fillStyle = "#cbbb8c";
g.beginPath();
g.moveTo(-0.6, -0.86);
g.bezierCurveTo(-0.4, -1.0, 0.2, -1.01, 0.5, -0.93);
g.quadraticCurveTo(0.1, -0.92, -0.6, -0.86);
g.closePath();
g.fill();
g.strokeStyle = "#a8976a";
g.lineWidth = 0.012;
for (let i = 0; i < 14; i++) {
  const x = -0.6 + i * 0.1;
  const top = -0.82 - 0.17 * Math.sin(Math.PI * (x + 0.72) / 1.67);
  g.beginPath();
  g.moveTo(x, top + 0.02);
  g.lineTo(x + 0.05 * Math.sin(i * 2.1), top - 0.05);
  g.stroke();
}
// the rug over the back: rough grey cloth with faded green stripes, its edge hanging over the side
g.fillStyle = "#6f7470";
g.beginPath();
g.moveTo(-1.14, -1.0);
g.quadraticCurveTo(-0.95, -1.14, -0.7, -0.95);
g.quadraticCurveTo(-0.45, -0.88, -0.22, -0.9);
g.lineTo(-0.25, -0.5);
g.quadraticCurveTo(-0.6, -0.44, -0.9, -0.55);
g.lineTo(-1.14, -0.6);
g.closePath();
g.fill();
g.fillStyle = "#596e60";
for (const y of [-0.7, -0.62]) g.fillRect(-1.12, y, 0.88, 0.025);
L.snowCap(g, -1.1, -0.72, -1.04, 0.04, 61);
L.snowCap(g, -0.4, 0.6, -0.96, 0.03, 62);
// the snow pushed up along the runners: they stand sunk in it, not on it
g.fillStyle = C.snowShade;
g.beginPath();
g.moveTo(-1.3, 0.06);
g.quadraticCurveTo(-1.2, -0.07, -0.9, -0.06);
g.lineTo(0.8, -0.06);
g.quadraticCurveTo(1.0, -0.07, 1.15, 0.06);
g.closePath();
g.fill();
g.fillStyle = C.snow;
g.beginPath();
g.moveTo(-1.25, 0.06);
g.quadraticCurveTo(-1.1, -0.05, -0.9, -0.04);
g.lineTo(0.8, -0.04);
g.quadraticCurveTo(0.95, -0.05, 1.1, 0.06);
g.closePath();
g.fill();
g.restore();
