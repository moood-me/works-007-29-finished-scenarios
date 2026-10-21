// The master's sleigh at the porch, seen from its side, its front to the right (the horse): dark runners curling up
// in front, a woven bast body on short uprights, its back (where the master sits) higher and rounded; straw heaped
// in it, a rough striped rug thrown over the back, a dusting of snow.
// (x −1.25…1.35 m: the back at −1.1, the front at 0.95, the runners' curl to 1.3; its foot at 0)
const L = e.lib;
const C = L.C;

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
// the straw heaped over the side
g.fillStyle = "#c2b386";
g.beginPath();
g.moveTo(-0.7, -0.8);
for (let i = 0; i <= 16; i++) {
  const x = -0.7 + i * 0.1;
  g.lineTo(x, -0.8 + i * 0.005 - 0.05 - 0.05 * Math.abs(Math.sin(i * 1.7)));
}
g.lineTo(0.92, -0.72);
g.closePath();
g.fill();
// the rug over the back: rough grey cloth with faded green stripes
g.fillStyle = "#6f7470";
g.beginPath();
g.moveTo(-1.14, -1.0);
g.quadraticCurveTo(-0.9, -1.12, -0.6, -0.86);
g.lineTo(-0.2, -0.82);
g.lineTo(-0.25, -0.5);
g.quadraticCurveTo(-0.6, -0.44, -0.9, -0.55);
g.lineTo(-1.14, -0.6);
g.closePath();
g.fill();
g.fillStyle = "#596e60";
for (const y of [-0.7, -0.62]) g.fillRect(-1.12, y, 0.9, 0.025);
L.snowCap(g, -1.1, -0.7, -1.03, 0.04, 61);
L.snowCap(g, -0.2, 0.9, -0.76, 0.035, 62);
