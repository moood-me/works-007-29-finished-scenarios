// The milk-glass globes of the schoolroom's lamps, lit (glows): two rows of two — the near row here, the far row a part
// 1.9 m farther —, each globe its own light (`#near_left`, `#near_right`, `#far_left`, `#far_right`). Metres from 2.0
// up, x across the room.
const row = (c, which) => {
  for (const [x, side] of [[-1.6, 'left'], [0.9, 'right']]) {
    c.fillStyle = '#fff3d6';
    c.beginPath();
    c.arc(x, -0.24, 0.15, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = '#fffaf0';
    c.beginPath();
    c.arc(x - 0.04, -0.27, 0.07, 0, Math.PI * 2);
    c.fill();
    e.light(x, -0.24, 0.35, '#ffe2b0', 0.8, `${which}_${side}`);
  }
};
row(g, 'near');
e.part(0, 1.9, c => row(c, 'far'));
