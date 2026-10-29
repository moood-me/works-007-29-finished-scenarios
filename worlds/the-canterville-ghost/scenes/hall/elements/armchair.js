// The high-backed armchair at the stair's foot, seen from the front (1.25 m high, its seat 0.45 m up): carved dark oak,
// a crimson cushion on its seat and its back, the arms ending in scrolls. Whoever sits in it is before it (its seat
// point `armchair#seat`).
const L = e.lib;
g.fillStyle = L.OAK_DARK;
// the back's posts and its carved cresting
g.fillRect(-0.33, -1.2, 0.08, 1.2);
g.fillRect(0.25, -1.2, 0.08, 1.2);
g.beginPath();
g.moveTo(-0.33, -1.1);
g.quadraticCurveTo(0, -1.36, 0.33, -1.1);
g.lineTo(0.33, -1.02);
g.lineTo(-0.33, -1.02);
g.closePath();
g.fill();
g.fillStyle = '#7a2428';
g.fillRect(-0.25, -1.02, 0.5, 0.5);
g.fillStyle = '#5e1a1e';
for (const [x, y] of [[-0.12, -0.88], [0.12, -0.88], [0, -0.74], [-0.12, -0.6], [0.12, -0.6]]) {
  g.beginPath();
  g.arc(x, y, 0.018, 0, Math.PI * 2);
  g.fill();
}
// the seat's cushion and its front rail, the legs
g.fillStyle = '#8a2a2e';
g.fillRect(-0.3, -0.52, 0.6, 0.08);
g.fillStyle = L.OAK_DARK;
g.fillRect(-0.32, -0.45, 0.64, 0.08);
g.fillRect(-0.32, -0.4, 0.07, 0.42);
g.fillRect(0.25, -0.4, 0.07, 0.42);
g.fillRect(-0.3, -0.1, 0.6, 0.04);
// the arms, coming forward to scrolls
g.fillStyle = L.OAK;
for (const s of [-1, 1]) {
  g.fillRect(s * 0.36 - 0.05, -0.72, 0.1, 0.06);
  g.fillRect(s * 0.36 - 0.03, -0.68, 0.06, 0.26);
  g.beginPath();
  g.arc(s * 0.36, -0.72, 0.055, 0, Math.PI * 2);
  g.fill();
}
e.at(0, -0.48, 'seat');
