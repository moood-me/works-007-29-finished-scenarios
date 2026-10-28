// The sleigh's front board, seen from in front and aside: a plain board curving up a little in the middle, the far
// runner's curl rising beside it; snow on its top and packed against its foot.
// (on the sleigh's anchor at its front, turned to face forward; x across the sleigh −0.48…0.48)
const L = e.lib;
const C = L.C;
g.fillStyle = "#4e3f31";
g.beginPath();
g.moveTo(-0.48, -0.04);
g.lineTo(-0.48, -0.47);
g.quadraticCurveTo(0, -0.56, 0.48, -0.47);
g.lineTo(0.48, -0.04);
g.closePath();
g.fill();
g.fillStyle = "rgba(30,24,20,0.5)";
g.fillRect(-0.48, -0.25, 0.96, 0.012);
L.snowCap(g, -0.48, 0.48, -0.5, 0.035, 97);
// the far runner's curl, over the board's far end
g.strokeStyle = "#3c3128";
g.lineWidth = 0.08;
g.lineCap = "round";
g.beginPath();
g.moveTo(0.47, -0.1);
g.quadraticCurveTo(0.5, -0.5, 0.47, -0.62);
g.stroke();
g.fillStyle = C.snow;
g.beginPath();
g.moveTo(-0.6, 0.1);
g.quadraticCurveTo(0, -0.2, 0.6, 0.1);
g.closePath();
g.fill();
