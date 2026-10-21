// A sheep, side-on: a cloud of off-white wool, a dark face and thin dark legs, its head down to the dry grass
g.fillStyle = "#2f2925";
for (const x of [-0.38, -0.22, 0.24, 0.38]) g.fillRect(x - 0.025, -0.3, 0.05, 0.3);
g.fillStyle = "#e3dccf";
for (const [x, y, r] of [[-0.3, -0.48, 0.2], [-0.05, -0.55, 0.24], [0.22, -0.5, 0.22], [0.38, -0.42, 0.15], [0, -0.4, 0.25]]) {
  g.beginPath();
  g.arc(x, y, r, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = "#2f2925";
g.beginPath();
g.ellipse(-0.58, -0.36, 0.09, 0.15, 0.6, 0, Math.PI * 2);
g.fill();
g.beginPath();
g.ellipse(-0.5, -0.47, 0.06, 0.025, -0.4, 0, Math.PI * 2);
g.fill();
