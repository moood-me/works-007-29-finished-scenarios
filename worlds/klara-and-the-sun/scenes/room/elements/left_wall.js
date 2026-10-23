// The wall over the bed (facing into the room; its x runs away from the viewer: x 0 at distance 2.8, the west wall
// at x 1.6): warm white plaster, the skirting board, and Josie's drawings pinned up over the bed — pencil figures,
// two by two, an empty speech bubble over each pair.
g.fillStyle = '#e4dccf';
g.fillRect(-1.62, -2.62, 3.24, 2.64);
g.fillStyle = '#d9cfbf';
g.fillRect(-1.62, -0.12, 3.24, 0.14);
const sheet = (x, y, w, h, tilt) => {
  g.save();
  g.translate(x, y);
  g.rotate(tilt);
  g.fillStyle = '#f6f2ea';
  g.fillRect(-w / 2, -h / 2, w, h);
  g.strokeStyle = 'rgba(120,110,100,0.25)';
  g.lineWidth = 0.004;
  g.strokeRect(-w / 2, -h / 2, w, h);
  // two small figures, one with long hair
  g.strokeStyle = '#6b6560';
  g.lineWidth = 0.006;
  for (const [fx, long] of [[-w * 0.18, true], [w * 0.16, false]]) {
    g.beginPath();
    g.arc(fx, h * 0.05, w * 0.06, 0, Math.PI * 2);
    g.moveTo(fx, h * 0.05 + w * 0.06);
    g.lineTo(fx, h * 0.38);
    if (long) {
      g.moveTo(fx - w * 0.06, h * 0.05);
      g.lineTo(fx - w * 0.07, h * 0.16);
    }
    g.stroke();
  }
  // the empty bubble over them
  g.fillStyle = '#ffffff';
  g.beginPath();
  g.ellipse(0, -h * 0.25, w * 0.3, h * 0.14, 0, 0, Math.PI * 2);
  g.fill();
  g.stroke();
  g.beginPath();
  g.moveTo(-w * 0.04, -h * 0.12);
  g.lineTo(-w * 0.1, -h * 0.03);
  g.lineTo(w * 0.03, -h * 0.12);
  g.stroke();
  g.fillStyle = '#c0453a';
  g.beginPath();
  g.arc(0, -h / 2 + 0.015, 0.008, 0, Math.PI * 2);
  g.fill();
  g.restore();
};
sheet(-0.1, -1.62, 0.3, 0.4, -0.04);
sheet(0.28, -1.5, 0.3, 0.4, 0.05);
sheet(0.66, -1.68, 0.3, 0.4, -0.02);
sheet(1.02, -1.48, 0.3, 0.4, 0.06);
sheet(0.46, -1.98, 0.26, 0.34, 0.03);
