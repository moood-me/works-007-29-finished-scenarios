// The coals heaped in the hearth, showing over its lip: a low mound of embers glowing orange and gold (the element
// glows; the fire's light is the scene's "hearth_fire"), flickering.
g.fillStyle = '#3b2a1e';
g.beginPath();
g.ellipse(0, 0, 0.45, 0.08, 0, Math.PI, 0);
g.fill();
e.layer('glow', { flicker: 0.5 }, g => {
  for (let i = 0; i < 26; i++) {
    const x = (e.anim.hash(i, 1) - 0.5) * 0.75, y = -0.01 - 0.06 * e.anim.hash(i, 2), r = 0.025 + 0.035 * e.anim.hash(i, 3);
    g.fillStyle = e.anim.hash(i, 4) > 0.5 ? '#ffb24a' : '#e8742c';
    g.beginPath();
    g.ellipse(x, y, r * 1.4, r, 0, 0, Math.PI * 2);
    g.fill();
  }
});
