// The privet hedge at the bottom of the garden (x -14...14, 1.9 m high), the white wooden gate in it (x 1.0...2.0)
// that opens onto the lane.
g.fillStyle = '#2f4430';
g.beginPath();
g.moveTo(-14, 0.05);
g.lineTo(-14, -1.8);
for (let x = -14; x <= 14; x += 0.5) g.lineTo(x, -1.82 - 0.12 * e.rnd());
g.lineTo(14, 0.05);
g.closePath();
g.fill();
g.fillStyle = 'rgba(78, 104, 70, 0.6)';
for (let k = 0; k < 160; k++) {
  g.beginPath();
  g.arc(-14 + 28 * e.rnd(), -0.2 - 1.55 * e.rnd(), 0.06 + 0.08 * e.rnd(), 0, Math.PI * 2);
  g.fill();
}
// the gap and the gate: the lane's pale earth beyond, the gate's bars
g.fillStyle = '#6e6a66';
g.fillRect(1.0, -1.5, 1.0, 1.55);
g.fillStyle = '#d9d6cc';
g.fillRect(0.94, -1.25, 0.08, 1.3);
g.fillRect(1.98, -1.25, 0.08, 1.3);
for (const y of [-1.1, -0.55, -0.08]) g.fillRect(1.0, y, 1.0, 0.06);
for (let x = 1.12; x < 1.95; x += 0.16) g.fillRect(x, -1.1, 0.035, 1.06);
g.save();
g.translate(1.0, -0.05);
g.rotate(-0.5);
g.fillRect(0, -0.03, 1.15, 0.05);
g.restore();
