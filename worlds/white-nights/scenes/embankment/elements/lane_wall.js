// The side walls of the side street (the corner): plain washed stucco, the ground floor's rustication, a row of
// windows on each floor, x 0…24 along the lane from the embankment, y up negative from its foot (metres); the
// lithograph's ink line and hatching (lib)
const INK = e.lib.INK, w = 24, h = 13;
g.fillStyle = '#d8c9a8';
g.fillRect(0, -h, w, h);
e.lib.wash(g, 0, -h, w, h, [216, 201, 168], 11, 7, 3);
g.fillStyle = 'rgba(90,70,60,0.10)';
g.fillRect(0, -4.2, w, 4.2);
e.lib.hatch(g, 0, -1.1, w, 1.1, 0.16, 0.16, 0.016);
for (const y of [-3.1, -6.6, -9.9]) {
  for (let x = 2; x < w - 1; x += 3.2) {
    g.fillStyle = '#efe6d3';
    g.fillRect(x - 0.12, y - 0.12, 1.24, 2.04);
    g.fillStyle = '#b9b8c8';
    g.fillRect(x, y, 1.0, 1.8);
    g.strokeStyle = INK;
    g.lineWidth = 0.03;
    g.strokeRect(x - 0.12, y - 0.12, 1.24, 2.04);
  }
}
g.beginPath();
g.moveTo(0, -h);
g.lineTo(w, -h);
g.moveTo(0, -4.2);
g.lineTo(w, -4.2);
g.strokeStyle = INK;
g.lineWidth = 0.04;
g.stroke();
