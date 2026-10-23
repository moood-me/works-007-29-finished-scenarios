// Old Mrs Hempstock's chair by the fire: a high-backed wooden armchair, dark with age, its back of spindles, a faded
// patchwork cushion tied to it, curved arms, turned legs.
const wood = '#6e4c33', light = '#86603f';
// the back: a curved top rail and spindles
g.fillStyle = wood;
g.beginPath();
g.moveTo(-0.34, -1.08);
g.quadraticCurveTo(0, -1.2, 0.34, -1.08);
g.lineTo(0.34, -1.0);
g.quadraticCurveTo(0, -1.1, -0.34, -1.0);
g.closePath();
g.fill();
for (let k = 0; k < 7; k++) {
  const x = -0.27 + k * 0.09;
  g.fillRect(x - 0.012, -1.04, 0.024, 0.6);
}
for (const x of [-0.34, 0.31]) g.fillRect(x, -1.06, 0.035, 0.62);
// the cushion on the back: squares of faded cloth
const patches = ['#8a4a36', '#c49a45', '#5d6f8c', '#7d9268', '#b8743e', '#9c6f6a'];
for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) {
  g.fillStyle = patches[(r * 4 + c * 5) % patches.length];
  g.fillRect(-0.24 + c * 0.12, -0.92 + r * 0.13, 0.12, 0.13);
}
// the seat, the arms
g.fillStyle = light;
g.fillRect(-0.36, -0.48, 0.72, 0.06);
g.fillStyle = wood;
for (const s of [-1, 1]) {
  g.beginPath();
  g.moveTo(s * 0.34, -0.7);
  g.quadraticCurveTo(s * 0.44, -0.72, s * 0.43, -0.66);
  g.lineTo(s * 0.42, -0.46);
  g.lineTo(s * 0.39, -0.46);
  g.lineTo(s * 0.4, -0.64);
  g.lineTo(s * 0.34, -0.64);
  g.closePath();
  g.fill();
}
// the legs
for (const x of [-0.33, 0.29]) g.fillRect(x, -0.42, 0.04, 0.42);
g.fillRect(-0.32, -0.18, 0.64, 0.025);
