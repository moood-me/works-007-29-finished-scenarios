// A treadle machine's table, seen from its back (metres from its foot; the top 0.9 wide at 0.76): the wooden top's
// edge, the little drawers under it, the cast-iron legs in their lattice, the treadle between them, the big belt wheel
// and the belt going up through the top to the machine.
g.fillStyle = '#6a4a32';
g.fillRect(-0.46, -0.78, 0.92, 0.045);
g.fillStyle = 'rgba(255,230,190,0.18)';
g.fillRect(-0.46, -0.78, 0.92, 0.01);
// the drawers, one stack each side
g.fillStyle = '#5a3e2a';
for (const x of [-0.44, 0.24]) {
  g.fillRect(x, -0.735, 0.2, 0.2);
  g.fillStyle = '#4a3222';
  g.fillRect(x + 0.01, -0.64, 0.18, 0.008);
  g.fillStyle = '#c8a050';
  g.beginPath();
  g.arc(x + 0.1, -0.69, 0.01, 0, Math.PI * 2);
  g.arc(x + 0.1, -0.59, 0.01, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#5a3e2a';
}
// the legs: cast iron, a lattice of curves
g.strokeStyle = '#1e1c1c';
g.fillStyle = '#1e1c1c';
for (const s of [-1, 1]) {
  const x = s * 0.36;
  g.fillRect(x - 0.03, -0.535, 0.06, 0.04);
  g.lineWidth = 0.022;
  g.beginPath();
  g.moveTo(x - s * 0.02, -0.5);
  g.lineTo(x - s * 0.06, 0);
  g.moveTo(x + s * 0.02, -0.5);
  g.lineTo(x + s * 0.06, 0);
  g.stroke();
  g.lineWidth = 0.01;
  for (let k = 0; k < 4; k++) {
    const y = -0.45 + k * 0.11;
    g.beginPath();
    g.ellipse(x, y + 0.05, 0.035, 0.05, 0, 0, Math.PI * 2);
    g.stroke();
  }
  g.fillRect(x - 0.1, -0.02, 0.2, 0.025);
}
// the treadle plate and the rod to the wheel
g.fillStyle = '#2a2826';
g.fillRect(-0.3, -0.13, 0.6, 0.05);
g.strokeStyle = '#2a2826';
g.lineWidth = 0.012;
for (let x = -0.26; x < 0.3; x += 0.06) {
  g.beginPath();
  g.moveTo(x, -0.125);
  g.lineTo(x + 0.03, -0.085);
  g.stroke();
}
g.beginPath();
g.moveTo(0.2, -0.11);
g.lineTo(0.22, -0.32);
g.stroke();
// the belt wheel with its spokes, and the belt up to the machine
g.lineWidth = 0.018;
g.beginPath();
g.arc(0.22, -0.34, 0.15, 0, Math.PI * 2);
g.stroke();
g.lineWidth = 0.008;
for (let k = 0; k < 6; k++) {
  const a = k * Math.PI / 3;
  g.beginPath();
  g.moveTo(0.22, -0.34);
  g.lineTo(0.22 + Math.cos(a) * 0.15, -0.34 + Math.sin(a) * 0.15);
  g.stroke();
}
g.strokeStyle = '#6a4e36';
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(0.36, -0.36);
g.lineTo(0.36, -0.73);
g.moveTo(0.08, -0.32);
g.lineTo(0.3, -0.73);
g.stroke();
