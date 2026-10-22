// What the flat's walls share: the old wallpaper — faded rose-beige with a small sprig of flowers in rows, a picture
// rail near the top and a dark baseboard — over x0…x1 of a wall 2.8 m high (in metres from the wall's foot, y up
// negative). `dim` darkens it (the dining room's, a shade browner). The caller clips holes (a window, an arch) itself.
function wallpaper(g, e, x0, x1, dim) {
  const w = x1 - x0;
  g.fillStyle = dim ? '#b79b84' : '#cbb09c';
  g.fillRect(x0, -2.82, w, 2.84);
  // the sprigs: a small flower and two leaves, in staggered rows, here and there faded out
  for (let row = 0, y = -2.2; y < -0.25; y += 0.19, row++) {
    for (let x = x0 + (row % 2) * 0.11; x < x1; x += 0.22) {
      if (e.rnd() < 0.18) continue;
      g.fillStyle = dim ? '#9c8574' : '#a7907f';
      g.beginPath();
      g.ellipse(x - 0.022, y + 0.02, 0.018, 0.008, -0.6, 0, Math.PI * 2);
      g.ellipse(x + 0.022, y + 0.02, 0.018, 0.008, 0.6, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = dim ? '#a87f78' : '#b98a84';
      g.beginPath();
      g.arc(x, y, 0.017, 0, Math.PI * 2);
      g.fill();
    }
  }
  // damp and age: soft paler and darker patches, a seam between the strips of paper
  for (let i = 0; i < 6; i++) {
    g.fillStyle = e.rnd() < 0.5 ? 'rgba(150,120,100,0.14)' : 'rgba(232,214,196,0.22)';
    g.beginPath();
    g.ellipse(x0 + e.rnd() * w, -2.4 + e.rnd() * 2, 0.2 + e.rnd() * 0.4, 0.15 + e.rnd() * 0.3, 0, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = 'rgba(120,96,80,0.18)';
  for (let x = x0 + 0.53; x < x1; x += 0.53) g.fillRect(x, -2.35, 0.006, 2.2);
  // the picture rail and the baseboard
  g.fillStyle = '#6e5241';
  g.fillRect(x0, -2.4, w, 0.045);
  g.fillStyle = '#e2d3bf';
  g.fillRect(x0, -2.82, w, 0.42);
  g.fillStyle = '#5b4232';
  g.fillRect(x0, -0.15, w, 0.17);
  g.fillStyle = '#4a3528';
  g.fillRect(x0, -0.165, w, 0.02);
}
return { wallpaper };
