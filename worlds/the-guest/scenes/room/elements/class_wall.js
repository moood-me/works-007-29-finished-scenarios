// The classroom's back wall (metres across from across 6): whitewash with its window cut through (x −1.2…−0.2, sill
// 0.95, head 2.25), a row of empty coat pegs.
e.lib.whitewash(g, e, -3.6, 3.6, 2.85);
g.fillStyle = '#5a4433';
g.fillRect(0.2, -1.6, 2.6, 0.06);
for (let x = 0.35; x < 2.8; x += 0.32) {
  g.fillStyle = '#3e2f24';
  g.fillRect(x - 0.015, -1.62, 0.03, 0.1);
}
e.lib.hole(g, -1.2, -2.25, -0.2, -0.95);
