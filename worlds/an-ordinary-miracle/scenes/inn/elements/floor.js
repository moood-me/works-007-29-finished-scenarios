// The hall's floor, seen from above (10 × 3.4 m, its middle 4.6 m ahead; x across, y toward the viewer): broad dark
// boards running across, scuffed and patched, snow melting into a dark wet patch inside the door (at across 3.15, the
// back), a rag rug before the hearth.
const L = e.lib;
for (let i = 0, y = -1.7; y < 1.7; i++, y += 0.28) {
  g.fillStyle = ['#8a6440', '#7d5838', '#946c46'][i % 3];
  g.fillRect(-5, y, 10, 0.28);
  g.fillStyle = '#4e3420';
  g.fillRect(-5, y, 10, 0.016);
  for (let k = 0; k < 3; k++) {
    g.fillRect(-5 + 10 * L.rnd(i * 3 + k, 91), y, 0.016, 0.28);
  }
}
L.dabs(g, 92, -5, -1.7, 10, 3.4, ['#a27a52', '#6e4c30'], 160, 0.22, 0.4, 0.3);
// the wet patch and the snow blown in by the door
L.dabs(g, 93, 2.5, -1.7, 1.3, 0.8, ['#5a4030', '#634632'], 30, 0.18, 0.6, 0.6);
L.dabs(g, 94, 2.75, -1.7, 0.8, 0.25, ['#eef2f8', '#d8e0ec'], 26, 0.07, 0.5, 0.9);
// a rag rug before the hearth: stripes of red, ochre and blue
const RX = -2.4, RY = 0.15;
g.save();
g.translate(RX, RY);
const st = ['#a8382c', '#e2b048', '#3f5f9c', '#f0e4c8', '#a8382c', '#3f5f9c', '#e2b048', '#a8382c'];
for (let i = 0; i < st.length; i++) {
  g.fillStyle = st[i];
  g.fillRect(-0.9, -0.5 + i * 0.125, 1.8, 0.125);
}
L.dabs(g, 95, -0.9, -0.5, 1.8, 1.0, ['#f0e4c8', '#5a3a2a'], 40, 0.05, 0.4, 0.25);
g.restore();
