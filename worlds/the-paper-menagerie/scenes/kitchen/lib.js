// What the kitchen's walls share: the wallpaper — warm butter-yellow with a small pattern of pale blue sprigs in rows —
// over x0…x1 of a wall 2.6 m high (metres from the wall's foot, y up negative), a white skirting board, and a narrow
// moulding under the ceiling. The caller cuts its own openings (clip) before calling.
function wallpaper(g, e, x0, x1) {
  const w = x1 - x0;
  g.fillStyle = '#ead9a8';
  g.fillRect(x0, -2.62, w, 2.64);
  for (let row = 0, y = -2.4; y < -0.2; y += 0.2, row++) {
    for (let x = x0 + (row % 2) * 0.12; x < x1; x += 0.24) {
      g.fillStyle = '#b9c3c4';
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
  for (let i = 0; i < 5; i++) {
    g.fillStyle = e.rnd() < 0.5 ? 'rgba(196,170,120,0.12)' : 'rgba(250,240,210,0.18)';
    g.beginPath();
    g.ellipse(x0 + e.rnd() * w, -2.2 + e.rnd() * 2, 0.3 + e.rnd() * 0.4, 0.2 + e.rnd() * 0.3, 0, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = '#f2ece0';
  g.fillRect(x0, -2.62, w, 0.08);
  g.fillRect(x0, -0.13, w, 0.15);
  g.fillStyle = '#d8cfbf';
  g.fillRect(x0, -0.135, w, 0.012);
}
// The backsplash: small square tiles, pale mint, white grout, over x0…x1 between heights y0 and y1 (y up negative).
function tiles(g, x0, x1, y0, y1) {
  g.fillStyle = '#f4f2ea';
  g.fillRect(x0, y0, x1 - x0, y1 - y0);
  const t = 0.1;
  for (let y = y0; y < y1 - 0.001; y += t) {
    for (let x = x0; x < x1 - 0.001; x += t) {
      g.fillStyle = (Math.round(x / t) + Math.round(y / t)) % 7 === 0 ? '#c4ddd0' : '#d3e6da';
      g.fillRect(x + 0.006, y + 0.006, Math.min(t, x1 - x) - 0.012, Math.min(t, y1 - y) - 0.012);
    }
  }
}
return { wallpaper, tiles };
