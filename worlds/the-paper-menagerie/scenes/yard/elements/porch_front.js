// The porch seen from the yard (metres from the ground at its middle; the floor's edge 0.6 m up): white lattice under
// its floor either side of the steps, the white posts from the floor to the porch roof's beam, the rails with their
// spindles either side of the steps, the beam and the shallow roof's edge over it (3.0–3.1 m).
g.fillStyle = '#f2efe6';
g.fillRect(-1.55, -0.64, 3.1, 0.06);
for (const [x0, x1] of [
  [-1.5, -0.6],
  [0.6, 1.5],
]) {
  g.fillStyle = '#5a5650';
  g.fillRect(x0, -0.58, x1 - x0, 0.58);
  g.strokeStyle = '#efece2';
  g.lineWidth = 0.035;
  g.save();
  g.beginPath();
  g.rect(x0, -0.58, x1 - x0, 0.58);
  g.clip();
  for (let k = -1.2; k < 1.2; k += 0.16) {
    g.beginPath();
    g.moveTo(x0 + k, 0);
    g.lineTo(x0 + k + 0.6, -0.6);
    g.moveTo(x0 + k, -0.6);
    g.lineTo(x0 + k + 0.6, 0);
    g.stroke();
  }
  g.restore();
  // the rail and spindles
  g.fillStyle = '#f4f1e8';
  g.fillRect(x0, -1.5, x1 - x0, 0.06);
  g.fillRect(x0, -0.7, x1 - x0, 0.05);
  for (let x = x0 + 0.08; x < x1 - 0.04; x += 0.11) g.fillRect(x, -1.45, 0.03, 0.76);
}
// posts and the beam, the roof's edge
g.fillStyle = '#f6f3ea';
for (const x of [-1.5, 1.38]) g.fillRect(x, -3.0, 0.12, 2.4);
g.fillRect(-1.55, -3.1, 3.1, 0.14);
g.fillStyle = '#76686a';
g.fillRect(-1.6, -3.14, 3.2, 0.05);
