// The telegraphist's chair behind him: a bentwood back — two uprights and a curved top rail — and its seat.
g.strokeStyle = '#3b2a1d';
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(-0.2, -0.45);
g.lineTo(-0.2, -0.92);
g.quadraticCurveTo(0, -1.02, 0.2, -0.92);
g.lineTo(0.2, -0.45);
g.moveTo(-0.2, -0.7);
g.quadraticCurveTo(0, -0.76, 0.2, -0.7);
g.stroke();
g.fillStyle = '#4a3524';
g.fillRect(-0.24, -0.48, 0.48, 0.04);
g.lineWidth = 0.03;
g.beginPath();
for (const x of [-0.2, 0.2]) {
  g.moveTo(x, -0.44);
  g.lineTo(x * 1.15, 0);
}
g.stroke();
