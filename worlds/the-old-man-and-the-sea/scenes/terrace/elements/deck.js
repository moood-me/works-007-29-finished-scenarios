// The Terrace's floor seen from above, metres: grey-brown planks running out toward the water, worn pale where feet
// go (between the counter and the tables, out to the rail), their seams and nails, sand blown in from the beach, a wet
// ring under a can here and there. Its centre is 4.3 m ahead, 1 m right; its far edge (y −5.3) the deck's front edge.
const W = 12;
const D = 5.3;
g.fillStyle = '#a08a6c';
g.fillRect(-W, -D, 2 * W, 2 * D);
// the planks, each its own shade of the sun-grey wood
for (let x = -W; x < W; x += 0.19) {
  const k = e.rnd();
  g.fillStyle = k < 0.33 ? '#a99475' : k < 0.66 ? '#978065' : '#ad9a7e';
  g.fillRect(x, -D, 0.19, 2 * D);
  // a plank's butt joint somewhere along it
  const j = -D + e.rnd() * 2 * D;
  g.fillStyle = 'rgba(60,48,36,0.5)';
  g.fillRect(x, j, 0.19, 0.012);
  // its nails, over the joists every 0.9 m
  g.fillStyle = 'rgba(50,40,32,0.6)';
  for (let y = -D + 0.2; y < D; y += 0.9) {
    g.fillRect(x + 0.04, y, 0.012, 0.012);
    g.fillRect(x + 0.14, y, 0.012, 0.012);
  }
}
g.fillStyle = 'rgba(55,44,34,0.55)';
for (let x = -W; x < W; x += 0.19) g.fillRect(x, -D, 0.012, 2 * D);
// worn pale where feet go: from the viewer's side out between the tables to the rail, and along the counter
for (const [x, y, sx, sy] of [[-1.8, 0, 1.6, 5.2], [0.2, -2.5, 3, 2.2], [-3.6, 1.5, 0.8, 3.5]]) e.lib.glow(g, x, y, sx, sy, '206,190,160', 0.45);
// sand blown in, along the planks' seams and in the corners
g.fillStyle = 'rgba(222,204,166,0.55)';
for (let i = 0; i < 260; i++) {
  const x = -W + e.rnd() * 2 * W;
  const y = -D + e.rnd() * 2 * D;
  g.beginPath();
  g.ellipse(x, y, 0.03 + e.rnd() * 0.08, 0.01 + e.rnd() * 0.02, 0, 0, Math.PI * 2);
  g.fill();
}
// wet rings and a dark stain where something was spilt
g.strokeStyle = 'rgba(70,56,42,0.35)';
g.lineWidth = 0.012;
for (const [x, y] of [[-0.3, -1.8], [0.4, 0.6], [-1.5, -2.6], [2.9, -3.3]]) {
  g.beginPath();
  g.arc(x, y, 0.035, 0, Math.PI * 2);
  g.stroke();
}
e.lib.glow(g, -2.9, -0.9, 0.35, 0.22, '80,62,46', 0.35);
