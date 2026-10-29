// The stairwell's back wall (x −1.9…1.9 — across −2.4…1.4; y −5.7 at the ceiling … 0 at the landing below, the
// landing's own floor at y −2.4): pale grey-green distemper with its darker dado; over the well the tall stair window
// (its opening cut at x −1.25…−0.55, 0.9…2.7 m over the landing), its frame and glazing bars painted round and over it
const INK = e.lib.INK;
g.fillStyle = '#c9b896';
g.fillRect(-1.9, -2.4, 3.8, 2.4);
g.save();
g.translate(0, -2.4);
e.lib.plaster(g, -1.9, 1.9, 3.3, [228, 210, 172], 11);
// the window: a deep reveal, a sill, the frame
e.lib.box(g, -1.36, -2.82, 0.92, 1.97, '#d9d6c6', 0.012);
e.lib.hatch(g, -1.36, -2.82, 0.08, 1.97, 0.03, 0.18, 0.004);
e.lib.box(g, -1.4, -0.94, 1.0, 0.08, '#cfc8b4', 0.01);
e.lib.cut(g, -1.25, -2.7, 0.7, 1.8);
g.fillStyle = '#e9e4d6';
g.fillRect(-0.94, -2.7, 0.04, 1.8);
for (const y of [-2.12, -1.52]) g.fillRect(-1.25, y - 0.015, 0.7, 0.03);
g.fillRect(-1.25, -2.72, 0.7, 0.04);
g.fillRect(-1.25, -0.92, 0.7, 0.04);
g.fillRect(-1.27, -2.7, 0.04, 1.8);
g.fillRect(-0.57, -2.7, 0.04, 1.8);
g.strokeStyle = INK;
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(-0.94, -2.68); g.lineTo(-0.94, -0.92);
g.moveTo(-0.9, -2.68); g.lineTo(-0.9, -0.92);
for (const y of [-2.12, -1.52]) {
  g.moveTo(-1.23, y - 0.015); g.lineTo(-0.57, y - 0.015);
  g.moveTo(-1.23, y + 0.015); g.lineTo(-0.57, y + 0.015);
}
g.strokeRect(-1.25, -2.7, 0.7, 1.8);
g.stroke();
g.restore();
