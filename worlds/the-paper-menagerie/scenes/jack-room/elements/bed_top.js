// Jack's bed from above (metres, its middle at across −2.355, distance 3.325; x across, y toward the viewer — the
// head far, y −0.82): the patchwork quilt Mom made — faded blue, cream and rust squares — over it, the sheet turned
// down at the head. Emptied (`packed`): the bare mattress, blue-and-white ticking.
if (e.state.packed) {
  g.fillStyle = '#e9e6dc';
  g.fillRect(-0.48, -0.83, 0.96, 1.66);
  g.fillStyle = '#8fa3c0';
  for (let x = -0.46; x < 0.48; x += 0.06) g.fillRect(x, -0.83, 0.018, 1.66);
  g.fillStyle = 'rgba(150,140,120,0.25)';
  g.beginPath();
  g.ellipse(0.05, -0.2, 0.2, 0.12, 0.3, 0, Math.PI * 2);
  g.fill();
} else {
  g.fillStyle = '#f3f0e6';
  g.fillRect(-0.48, -0.83, 0.96, 0.3);
  const colours = ['#6f8fb4', '#efe6cf', '#c46a4a', '#9fb7cf', '#e2c99a', '#5f7da4'];
  for (let r = 0; r < 9; r++)
    for (let c = 0; c < 6; c++) {
      g.fillStyle = colours[(r * 7 + c * 3 + ((r * c) % 4)) % colours.length];
      g.fillRect(-0.48 + c * 0.16, -0.55 + r * 0.155, 0.16, 0.155);
    }
  g.strokeStyle = 'rgba(250,246,236,0.55)';
  g.lineWidth = 0.005;
  for (let r = 0; r <= 9; r++) {
    g.beginPath();
    g.moveTo(-0.48, -0.55 + r * 0.155);
    g.lineTo(0.48, -0.55 + r * 0.155);
    g.stroke();
  }
  g.fillStyle = '#e8e2d2';
  g.fillRect(-0.48, -0.57, 0.96, 0.04);
}
e.at(0, -0.1, 'quilt');
