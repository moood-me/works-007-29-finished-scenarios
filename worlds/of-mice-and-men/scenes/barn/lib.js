// What the barn's paintings share.
// CRACKS — the gaps between the boards of the right wall, where the sun comes in: [distance, width] metres (the wall
// at across 4.6, the gaps from 0.1 to 4.7 m up). The light `sun`'s "through" in scene.json is these same gaps.
const CRACKS = [[1.3, 0.04], [2.05, 0.03], [2.6, 0.06], [3.45, 0.035], [4.3, 0.05], [4.85, 0.03], [5.7, 0.06], [6.55, 0.04], [7.05, 0.03], [8.0, 0.05]];
// planks(g, x0, y0, x1, y1, w, color, seed) — rough upright boards across x0…x1 (each about w wide, y down), each its
// own shade, the grain running up them, a dark seam between, here and there a knot.
function planks(g, x0, y0, x1, y1, w, color, seed) {
  const [r, gr, b] = [1, 3, 5].map(i => parseInt(color.slice(i, i + 2), 16));
  let n = seed;
  const rnd = () => {
    n = (n * 16807) % 2147483647;
    return n / 2147483647;
  };
  const rgb = k => `rgb(${Math.round(r * k)},${Math.round(gr * k)},${Math.round(b * k)})`;
  for (let x = x0; x < x1 - 0.001; ) {
    const ww = Math.min(w * (0.8 + rnd() * 0.4), x1 - x);
    g.fillStyle = rgb(0.88 + rnd() * 0.16);
    g.fillRect(x, y0, ww, y1 - y0);
    g.fillStyle = rgb(0.8);
    for (let i = 0; i < 3; i++) g.fillRect(x + ww * (0.2 + rnd() * 0.6), y0, 0.006, y1 - y0);
    g.fillStyle = rgb(0.45);
    g.fillRect(x, y0, Math.max(0.01, ww * 0.05), y1 - y0);
    if (rnd() < 0.4) {
      g.beginPath();
      g.ellipse(x + ww * (0.3 + rnd() * 0.4), y0 + (y1 - y0) * rnd(), w * 0.06, w * 0.11, 0, 0, Math.PI * 2);
      g.fill();
    }
    x += ww;
  }
}
// straw(g, x0, y0, x1, y1, count, colors, rnd) — loose stalks of hay and straw strewn over a patch, every way
function straw(g, x0, y0, x1, y1, count, colors, rnd) {
  g.lineWidth = 0.012;
  for (let i = 0; i < count; i++) {
    const x = x0 + (x1 - x0) * rnd(), y = y0 + (y1 - y0) * rnd(), a = rnd() * Math.PI, l = 0.08 + rnd() * 0.16;
    g.strokeStyle = colors[Math.floor(rnd() * colors.length)];
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l);
    g.stroke();
  }
}
return { CRACKS, planks, straw };
