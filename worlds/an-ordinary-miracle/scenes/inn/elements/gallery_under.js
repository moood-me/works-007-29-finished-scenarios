// The gallery's floor seen from below: dark planks between joists.
g.fillStyle = '#4e3622';
g.fillRect(-3.35, -0.5, 6.7, 1.0);
for (let x = -3.35; x < 3.35; x += 0.6) {
  g.fillStyle = '#3a2818';
  g.fillRect(x, -0.5, 0.1, 1.0);
}
