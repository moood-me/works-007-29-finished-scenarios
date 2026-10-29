// The bench, its back and its ends (metres from its foot at the middle, its face to us; its seat is the plane
// `bench_seat` at 0.44 m): three green-painted slats of the back on two black cast-iron ends that curl into armrests;
// at its left end her handbag, brown leather, stood on the seat against the back. Points: `seat`, `bag`.
const IRON = '#2c2b2e',
  SLAT = '#5f8a62',
  SLAT_D = '#4f7553';
// the back's slats
for (const y of [-0.9, -0.76, -0.62]) {
  g.fillStyle = SLAT;
  g.fillRect(-0.9, y, 1.8, 0.1);
  g.fillStyle = SLAT_D;
  g.fillRect(-0.9, y + 0.08, 1.8, 0.02);
}
// the cast-iron ends: a leg front and back, the arm curling over
for (const s of [-1, 1]) {
  g.save();
  g.scale(s, 1);
  g.fillStyle = IRON;
  g.beginPath();
  g.moveTo(0.86, 0);
  g.lineTo(0.94, 0);
  g.quadraticCurveTo(0.9, -0.3, 0.95, -0.44);
  g.lineTo(0.98, -0.62);
  g.quadraticCurveTo(1.0, -0.7, 0.92, -0.7);
  g.lineTo(0.86, -0.66);
  g.lineTo(0.86, -0.95);
  g.lineTo(0.9, -0.95);
  g.lineTo(0.9, -0.44);
  g.quadraticCurveTo(0.84, -0.3, 0.86, 0);
  g.closePath();
  g.fill();
  g.restore();
}
// the handbag on the seat at its left end
g.fillStyle = '#7a4e34';
g.beginPath();
g.moveTo(-0.72, -0.44);
g.lineTo(-0.74, -0.68);
g.lineTo(-0.44, -0.68);
g.lineTo(-0.46, -0.44);
g.closePath();
g.fill();
g.strokeStyle = '#5a3824';
g.lineWidth = 0.02;
g.beginPath();
g.arc(-0.59, -0.68, 0.1, Math.PI, 0);
g.stroke();
g.fillStyle = '#c9a24a';
g.fillRect(-0.61, -0.64, 0.04, 0.03);
e.at(0.1, -0.5, 'seat');
e.at(-0.59, -0.56, 'bag');
