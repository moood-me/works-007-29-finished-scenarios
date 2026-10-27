// What the Tree's painting shares. A leaf as Niggle paints them — a pointed oval from (x, y), `len` long, turned by
// `a` (radians): `leafPath` adds its outline to the path being built (many leaves of one colour, one fill); `leaf`
// paints one alone, filled `fill`, its midrib and veins in `vein`.
function leafPath(g, x, y, len, a) {
  const c = Math.cos(a);
  const s = Math.sin(a);
  const p = (u, v) => [x + u * c - v * s, y + u * s + v * c];
  const [x1, y1] = p(len * 0.3, -len * 0.32);
  const [x2, y2] = p(len * 0.75, -len * 0.22);
  const [x3, y3] = p(len, 0);
  const [x4, y4] = p(len * 0.75, len * 0.22);
  const [x5, y5] = p(len * 0.3, len * 0.32);
  g.moveTo(x, y);
  g.bezierCurveTo(x1, y1, x2, y2, x3, y3);
  g.bezierCurveTo(x4, y4, x5, y5, x, y);
}
function leaf(g, x, y, len, a, fill, vein) {
  g.fillStyle = fill;
  g.beginPath();
  leafPath(g, x, y, len, a);
  g.fill();
  g.save();
  g.translate(x, y);
  g.rotate(a);
  g.strokeStyle = vein;
  g.lineWidth = len * 0.025;
  g.beginPath();
  g.moveTo(0, 0);
  g.lineTo(len * 0.95, 0);
  for (let i = 1; i < 6; i++) {
    const u = len * (0.12 + i * 0.14);
    const w = len * 0.2 * Math.sin((i / 6) * Math.PI);
    g.moveTo(u - len * 0.08, 0);
    g.lineTo(u, -w);
    g.moveTo(u - len * 0.08, 0);
    g.lineTo(u, w);
  }
  g.stroke();
  g.restore();
}
return { leafPath, leaf };
