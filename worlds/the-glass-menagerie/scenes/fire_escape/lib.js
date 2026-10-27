// What the scene's paintings share: the flat's old wallpaper — faded rose-beige with a small sprig of flowers in
// rows, a picture rail near the top and a dark baseboard — over x0…x1 of a wall 2.8 m high (metres from the wall's
// foot, y up negative), as the flat's own scene has it.
function wallpaper(g, e, x0, x1) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -2.82, w, 2.84);
  g.clip();
  g.fillStyle = '#cbb09c';
  g.fillRect(x0, -2.82, w, 2.84);
  for (let row = 0, y = -2.2; y < -0.25; y += 0.19, row++) {
    for (let x = x0 + (row % 2) * 0.11; x < x1; x += 0.22) {
      if (e.rnd() < 0.18) continue;
      g.fillStyle = '#a7907f';
      g.beginPath();
      g.ellipse(x - 0.022, y + 0.02, 0.018, 0.008, -0.6, 0, Math.PI * 2);
      g.ellipse(x + 0.022, y + 0.02, 0.018, 0.008, 0.6, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = '#b98a84';
      g.beginPath();
      g.arc(x, y, 0.017, 0, Math.PI * 2);
      g.fill();
    }
  }
  g.fillStyle = 'rgba(120,96,80,0.18)';
  for (let x = x0 + 0.53; x < x1; x += 0.53) g.fillRect(x, -2.35, 0.006, 2.2);
  g.fillStyle = '#6e5241';
  g.fillRect(x0, -2.4, w, 0.045);
  g.fillStyle = '#e2d3bf';
  g.fillRect(x0, -2.82, w, 0.42);
  g.fillStyle = '#5b4232';
  g.fillRect(x0, -0.15, w, 0.17);
  g.restore();
}
return { wallpaper };
