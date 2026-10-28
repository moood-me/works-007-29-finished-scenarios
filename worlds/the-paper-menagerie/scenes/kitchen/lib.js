// What the kitchen's walls share: the wallpaper — pale sage with a small pattern of cream sprigs and coral buds in rows
// — over x0…x1 of a wall 2.6 m high (metres from the wall's foot, y up negative), a white skirting board, and a narrow
// moulding under the ceiling. The caller cuts its own openings (clip) before calling.
function wallpaper(g, x0, x1) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -2.62, w, 2.64);
  g.clip();
  g.fillStyle = '#d9dfc8';
  g.fillRect(x0, -2.62, w, 2.64);
  for (let row = 0, y = -2.4; y < -0.2; y += 0.2, row++) {
    for (let x = x0 + (row % 2) * 0.12; x < x1; x += 0.24) {
      g.fillStyle = '#f1ecd8';
      g.beginPath();
      g.ellipse(x - 0.02, y, 0.016, 0.007, -0.7, 0, Math.PI * 2);
      g.ellipse(x + 0.02, y, 0.016, 0.007, 0.7, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = '#d99b8a';
      g.beginPath();
      g.arc(x, y - 0.012, 0.011, 0, Math.PI * 2);
      g.fill();
    }
  }
  g.fillStyle = '#f2ece0';
  g.fillRect(x0, -2.62, w, 0.08);
  g.fillRect(x0, -0.13, w, 0.15);
  g.fillStyle = '#d8cfbf';
  g.fillRect(x0, -0.135, w, 0.012);
  g.restore();
}
// The backsplash: small square tiles, white with a blue one here and there, pale grout, over x0…x1 between heights
// y0 and y1 (y up negative).
function tiles(g, x0, x1, y0, y1) {
  g.fillStyle = '#d9d4c6';
  g.fillRect(x0, y0, x1 - x0, y1 - y0);
  const t = 0.1;
  for (let y = y0; y < y1 - 0.001; y += t) {
    for (let x = x0; x < x1 - 0.001; x += t) {
      g.fillStyle = (Math.round(x / t) + Math.round(y / t)) % 7 === 0 ? '#a9c0d6' : '#f3f1ea';
      g.fillRect(x + 0.006, y + 0.006, Math.min(t, x1 - x) - 0.012, Math.min(t, y1 - y) - 0.012);
    }
  }
}
return { wallpaper, tiles };
