// The corridor's far wall beyond the doorway: the same stone, paler; on the left the foot of the stair going up
// to the side door — stone steps rising to the left along the wall, worn hollow in the middle
e.lib.stones(g, [[-1.7, -2.4, 1.7, 0.02]], 41);
for (let i = 0; i < 7; i++) {
  const x = -0.3 - i * 0.26, top = -0.19 * (i + 1);
  g.fillStyle = '#7d705f';
  g.fillRect(x - 0.26, top, 0.27, -top);
  g.fillStyle = '#a19480';
  g.fillRect(x - 0.26, top, 0.27, 0.035);
}
