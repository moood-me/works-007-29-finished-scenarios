// The rods of the schoolroom's lamps: two brass-capped rods hanging from the ceiling (3.2) to the fitters that hold
// the milk-glass globes (`globes`) — the near row here, the far row a part 2.3 m farther. Metres from 2.0 up, x across
// the room.
const row = c => {
  for (const x of [-1.6, 0.9]) {
    c.fillStyle = '#3a3530';
    c.fillRect(x - 0.08, -1.21, 0.16, 0.04);
    c.fillRect(x - 0.012, -1.18, 0.024, 0.76);
    c.fillStyle = '#9c7c3c';
    c.beginPath();
    c.moveTo(x - 0.04, -0.42);
    c.lineTo(x + 0.04, -0.42);
    c.lineTo(x + 0.08, -0.38);
    c.lineTo(x - 0.08, -0.38);
    c.closePath();
    c.fill();
  }
};
row(g);
e.part(0, 2.3, row);
