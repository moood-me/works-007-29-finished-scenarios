// The far shore, 330 m off, side-on: a long low hill rising on the right, and along the water a forest — spruces'
// pointed tops and the round crowns of broadleaf trees among them, of many heights — its foot a thin dark band of bank
// at the water. Painted in its own greens; the night's light, the haze and the distance make it a blue silhouette, and
// the lake mirrors it.
const L = -760, R = 760;
// the hill behind the trees, on the right
g.fillStyle = '#3d5269';
g.beginPath();
g.moveTo(L, 0);
g.lineTo(-120, 0);
g.bezierCurveTo(40, -6, 160, -26, 300, -31);
g.bezierCurveTo(420, -34, 560, -22, R, -14);
g.lineTo(R, 0);
g.closePath();
g.fill();
// the forest along the shore
g.fillStyle = '#2f4a44';
g.fillRect(L, -3, R - L, 3.6);
for (let i = 0; i < 520; i++) {
  const x = L + (R - L) * e.anim.hash(i, 51), tall = 7 + 11 * e.anim.hash(i, 52) ** 1.4;
  const spruce = e.anim.hash(i, 53) > 0.35;
  g.fillStyle = e.anim.hash(i, 54) > 0.5 ? '#2f4a44' : '#2a433f';
  g.beginPath();
  if (spruce) {
    const w = tall * 0.17;
    g.moveTo(x - w, 0);
    g.lineTo(x, -tall);
    g.lineTo(x + w, 0);
    g.closePath();
  } else {
    const r = tall * 0.32;
    g.rect(x - 0.4, -tall * 0.5, 0.8, tall * 0.5);
    g.moveTo(x + r, -tall + r);
    g.arc(x, -tall + r, r, 0, Math.PI * 2);
    g.moveTo(x + r * 1.2, -tall + r * 1.9);
    g.arc(x + r * 0.5, -tall + r * 1.9, r * 0.8, 0, Math.PI * 2);
    g.moveTo(x - r * 0.1, -tall + r * 1.9);
    g.arc(x - r * 0.6, -tall + r * 1.9, r * 0.75, 0, Math.PI * 2);
  }
  g.fill();
}
// the bank at the water: a thin darker line
g.fillStyle = '#233630';
g.fillRect(L, -0.8, R - L, 1.4);
