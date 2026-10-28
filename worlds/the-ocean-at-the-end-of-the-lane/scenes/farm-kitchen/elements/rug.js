// The rag rug before the fire, seen from above: an oval braided of old cloth in rings of rust, ochre, faded blue.
const rings = ['#8a4a36', '#c49a45', '#5d6f8c', '#a5583a', '#7d9268', '#b8743e', '#6b4a3e'];
for (let k = 0; k < 9; k++) {
  const s = 1 - k / 9;
  g.fillStyle = rings[k % rings.length];
  g.beginPath();
  g.ellipse(0, 0, 0.75 * s, 0.5 * s, 0, 0, Math.PI * 2);
  g.fill();
}
