// Old Mrs Hempstock's chair, its back as one sees it from before the chair: a high back of spindles under a curved top
// rail, dark with age, a faded patchwork cushion tied to it, the back legs down to the floor.
const wood = '#6e4c33';
g.fillStyle = wood;
for (const x of [-0.3, 0.26]) g.fillRect(x, -1.1, 0.04, 1.1);
g.beginPath();
g.moveTo(-0.32, -1.08);
g.quadraticCurveTo(0, -1.2, 0.32, -1.08);
g.lineTo(0.32, -0.99);
g.quadraticCurveTo(0, -1.1, -0.32, -0.99);
g.closePath();
g.fill();
for (let k = 0; k < 6; k++) g.fillRect(-0.23 + k * 0.09 - 0.012, -1.03, 0.024, 0.6);
g.fillRect(-0.3, -0.45, 0.6, 0.04);
g.fillRect(-0.3, -0.16, 0.6, 0.025);
const patches = ['#8a4a36', '#c49a45', '#5d6f8c', '#7d9268', '#b8743e', '#9c6f6a'];
for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) {
  g.fillStyle = patches[(r * 4 + c * 5) % patches.length];
  g.fillRect(-0.24 + c * 0.12, -0.9 + r * 0.13, 0.12, 0.13);
}
