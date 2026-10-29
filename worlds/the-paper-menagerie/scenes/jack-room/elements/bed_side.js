// The bed's long side toward the room (x from its foot, −0.82, to its head, +0.82 — away from us): the quilt hanging
// over the edge with a rust binding, under it the maple side rail and the legs. Emptied: the mattress's ticking.
if (e.state.packed) {
  g.fillStyle = '#e9e6dc';
  g.fillRect(-0.83, -0.48, 1.66, 0.17);
  g.fillStyle = '#8fa3c0';
  g.fillRect(-0.83, -0.42, 1.66, 0.02);
  g.fillRect(-0.83, -0.37, 1.66, 0.02);
} else {
  g.fillStyle = '#6f8fb4';
  g.fillRect(-0.83, -0.49, 1.66, 0.22);
  g.fillStyle = '#efe6cf';
  for (let x = -0.67; x < 0.83; x += 0.32) g.fillRect(x, -0.49, 0.16, 0.22);
  g.fillStyle = '#b05c3e';
  g.fillRect(-0.83, -0.28, 1.66, 0.02);
}
g.fillStyle = '#c99a62';
g.fillRect(-0.83, -0.27, 1.66, 0.1);
g.fillStyle = 'rgba(120,80,40,0.3)';
g.fillRect(-0.83, -0.18, 1.66, 0.012);
g.fillStyle = '#b8895a';
g.fillRect(-0.83, -0.27, 0.06, 0.27);
g.fillRect(0.77, -0.27, 0.06, 0.27);
