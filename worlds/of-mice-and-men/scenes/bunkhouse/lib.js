// What the bunkhouse's paintings share.
// boards(g, x0, y0, x1, y1, w, color, seed) — whitewashed or bare planks side by side across x0…x1 (each w wide), from
// y0 to y1 (y down): each plank a shade of its own, a dark seam between, here and there a knot and a nail head.
function boards(g, x0, y0, x1, y1, w, color, seed) {
  const [r, gr, b] = [1, 3, 5].map(i => parseInt(color.slice(i, i + 2), 16));
  let n = seed;
  const rnd = () => {
    n = (n * 16807) % 2147483647;
    return n / 2147483647;
  };
  for (let x = x0; x < x1 - 0.001; x += w) {
    const k = 0.92 + rnd() * 0.12, ww = Math.min(w, x1 - x);
    g.fillStyle = `rgb(${Math.round(r * k)},${Math.round(gr * k)},${Math.round(b * k)})`;
    g.fillRect(x, y0, ww, y1 - y0);
    g.fillStyle = `rgba(${Math.round(r * 0.45)},${Math.round(gr * 0.42)},${Math.round(b * 0.4)},0.55)`;
    g.fillRect(x, y0, Math.max(0.008, w * 0.04), y1 - y0);
    if (rnd() < 0.5) {
      g.beginPath();
      g.ellipse(x + ww * (0.3 + rnd() * 0.4), y0 + (y1 - y0) * rnd(), w * 0.07, w * 0.12, 0, 0, Math.PI * 2);
      g.fill();
    }
  }
}
// appleBox(g, x, y, w, h) — the end of an apple box seen face on (its foot at y): slats of pale pine, the dark gaps
// between them
function appleBox(g, x, y, w, h) {
  g.fillStyle = '#b89a6e';
  g.fillRect(x - w / 2, y - h, w, h);
  g.fillStyle = 'rgba(70,50,30,0.55)';
  for (let i = 1; i < 3; i++) g.fillRect(x - w / 2, y - h + (h * i) / 3 - 0.006, w, 0.012);
  g.fillStyle = '#9c7f56';
  g.fillRect(x - w / 2, y - h, 0.02, h);
  g.fillRect(x + w / 2 - 0.02, y - h, 0.02, h);
}
return { boards, appleBox };
