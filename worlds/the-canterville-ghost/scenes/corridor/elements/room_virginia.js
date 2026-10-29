// What is seen of Virginia's room through its door: its far wall (1.8 m wide, 8.2 m away, facing the corridor) —
// pale striped paper, a small chest of drawers with her watercolours pinned above it, a chair with her shawl.
g.fillStyle = '#8a8070';
g.fillRect(-0.9, -3.0, 1.8, 3.02);
g.fillStyle = '#968c7a';
for (let x = -0.85; x < 0.9; x += 0.12) g.fillRect(x, -3.0, 0.05, 2.0);
g.fillStyle = e.lib.OAK;
g.fillRect(-0.9, -1.0, 1.8, 1.0);
g.fillStyle = '#4e3524';
g.fillRect(-0.7, -0.9, 0.7, 0.9);
g.strokeStyle = '#2e1f15';
g.lineWidth = 0.015;
for (const y of [-0.85, -0.58, -0.31]) g.strokeRect(-0.66, y, 0.62, 0.24);
// her watercolours: a tree, a lawn, a sky
for (const [x, y, c] of [[-0.6, -1.7, '#7a9a6a'], [-0.25, -1.75, '#8aa6c4'], [-0.45, -1.35, '#c8a86a']]) {
  g.fillStyle = '#ece6da';
  g.fillRect(x, y, 0.26, 0.2);
  g.fillStyle = c;
  g.fillRect(x + 0.03, y + 0.03, 0.2, 0.14);
}
g.fillStyle = '#3a2618';
g.fillRect(0.3, -0.9, 0.38, 0.06);
g.fillRect(0.3, -0.9, 0.04, 0.9);
g.fillRect(0.64, -0.9, 0.04, 0.9);
g.fillStyle = '#7d9cc4';
g.fillRect(0.28, -1.0, 0.42, 0.14);
