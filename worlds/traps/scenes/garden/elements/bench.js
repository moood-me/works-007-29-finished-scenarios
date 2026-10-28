// The white garden bench under the near chestnut, by the way down to the gate.
g.fillStyle = '#e8e2d2';
for (let i = 0; i < 4; i++) g.fillRect(-0.8, -0.92 + i * 0.1, 1.6, 0.06);
g.fillRect(-0.85, -0.47, 1.7, 0.07);
g.fillStyle = '#d9d2c0';
for (const x of [-0.72, 0.72]) {
  g.fillRect(x - 0.035, -0.95, 0.07, 0.95);
}
g.fillRect(-0.86, -0.66, 0.06, 0.04);
g.fillRect(0.8, -0.66, 0.06, 0.04);
