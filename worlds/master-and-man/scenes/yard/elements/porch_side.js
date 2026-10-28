// The porch's right side under the landing, turned to the yard's right (x 0 at its front corner, running back to the
// wall at 1.5): upright boards, the edge board at the top, snow banked at its foot.
// (x 0…1.5 m, its foot at 0, 0.85 m high)
const C = e.lib.C;
g.fillStyle = "#807261";
g.fillRect(0, -0.85, 1.5, 0.85);
g.strokeStyle = "#665846";
g.lineWidth = 0.02;
for (let x = 0.12; x < 1.5; x += 0.16) {
  g.beginPath();
  g.moveTo(x, -0.85);
  g.lineTo(x, 0);
  g.stroke();
}
g.fillStyle = C.woodDark;
g.fillRect(0, -0.91, 1.5, 0.08);
g.fillStyle = C.snow;
g.beginPath();
g.moveTo(0, 0.05);
g.quadraticCurveTo(0.5, -0.28, 1.5, -0.18);
g.lineTo(1.5, 0.05);
g.closePath();
g.fill();
