// The floor, seen from above (x across, y toward the viewer; 9.4 × 3.1 m, its middle 3.55 m ahead): broad scrubbed
// boards running away from the viewer, worn paler where people walk, and a round braided rug before the hearth in
// rings of madder red, ochre, blue and cream (its middle at across −1.2, 3.55 m ahead).
const L = e.lib;
g.fillStyle = '#b3824f';
g.fillRect(-4.7, -1.55, 9.4, 3.1);
for (let i = 0, x = -4.7; x < 4.7; i++, x += 0.3) {
  g.fillStyle = ['#b98852', '#ab7a48', '#c1915b'][i % 3];
  g.fillRect(x, -1.55, 0.3, 3.1);
  g.fillStyle = '#6f4a2c';
  g.fillRect(x, -1.55, 0.018, 3.1);
}
L.dabs(g, 81, -4.7, -1.55, 9.4, 3.1, ['#cfa271', '#9c6d40'], 180, 0.2, 0.4, 0.3);
// the walked path, paler, from the front toward the table and the hearth
L.dabs(g, 82, -2.0, -0.8, 4.0, 2.3, ['#d6ad7c'], 60, 0.3, 0.5, 0.25);
// the rug
const RX = -1.2, RY = 0;
const rings = ['#f0e4c8', '#3f5f9c', '#e2b048', '#a8382c', '#f0e4c8', '#a8382c', '#e2b048', '#3f5f9c', '#a8382c'];
rings.forEach((c, i) => {
  const k = 1 - i / rings.length;
  g.fillStyle = c;
  g.beginPath();
  g.ellipse(RX, RY, 1.0 * k, 0.72 * k, 0, 0, Math.PI * 2);
  g.fill();
});
g.strokeStyle = 'rgba(70, 40, 25, 0.25)';
g.lineWidth = 0.012;
for (let i = 1; i < 28; i++) {
  const k = i / 28;
  g.beginPath();
  g.ellipse(RX, RY, 1.0 * k, 0.72 * k, 0, 0, Math.PI * 2);
  g.stroke();
}
