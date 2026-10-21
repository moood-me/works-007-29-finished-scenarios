// The sleigh's back, seen from within: the high rounded back the master leans on, the striped rug thrown over it and
// hanging down inside, snow on its top.
// (on the sleigh's anchor at its back, x across the sleigh −0.48…0.48)
const L = e.lib;
g.fillStyle = "#56483a";
g.beginPath();
g.moveTo(-0.48, -0.04);
g.lineTo(-0.48, -0.86);
g.quadraticCurveTo(0, -0.98, 0.48, -0.86);
g.lineTo(0.48, -0.04);
g.closePath();
g.fill();
g.fillStyle = "#545a5e";
g.beginPath();
g.moveTo(-0.46, -0.88);
g.quadraticCurveTo(0, -0.99, 0.46, -0.88);
g.lineTo(0.44, -0.2);
g.quadraticCurveTo(0, -0.16, -0.44, -0.22);
g.closePath();
g.fill();
g.fillStyle = "#7e3a30";
g.fillRect(-0.45, -0.62, 0.9, 0.03);
g.fillStyle = "#4f6656";
g.fillRect(-0.45, -0.55, 0.9, 0.024);
g.fillRect(-0.45, -0.48, 0.9, 0.02);
L.snowCap(g, -0.48, 0.48, -0.93, 0.05, 98);
