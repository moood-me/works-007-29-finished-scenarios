// What the drawing room's paintings share: its walls' dress (the same on the three walls) and an outline with a hole.
// Metres of a wall card: x along it, y up negative, its foot at 0; the room is 4.2 m high.
const B = kit.brush;
const HIGH = 4.2, DADO = 0.9, FRIEZE = 3.1;
// a rectangle path with rectangular holes cut in it (the holes wound the other way: a plain fill leaves them empty)
const holed = (x0, y0, x1, y1, holes) => {
  const p = new Path2D();
  p.moveTo(x0, y0); p.lineTo(x1, y0); p.lineTo(x1, y1); p.lineTo(x0, y1); p.closePath();
  for (const [hx0, hy0, hx1, hy1] of holes) { p.moveTo(hx0, hy0); p.lineTo(hx0, hy1); p.lineTo(hx1, hy1); p.lineTo(hx1, hy0); p.closePath(); }
  return p;
};
// a wall from x0 to x1, the holes left open: a cream panelled wainscot to the dado rail, a sage paper with fine cream
// stripes above it, a deeper green frieze under the cornice (the page's title is read over it), the pen along every
// rail; px: the pen's pixel at the wall's distance
const wall = (g, x0, x1, holes, r, px) => {
  const all = holed(x0, -HIGH, x1, 0, holes);
  g.save();
  g.clip(all);
  // the paper
  const paper = new Path2D();
  paper.rect(x0, -FRIEZE, x1 - x0, FRIEZE - DADO);
  B.wash(g, paper, '#b3bf9d', [x0, -FRIEZE, x1, -DADO], r, 6);
  const stripes = new Path2D();
  for (let x = x0 + 0.06; x < x1; x += 0.24) { stripes.rect(x, -FRIEZE, 0.035, FRIEZE - DADO); stripes.rect(x + 0.07, -FRIEZE, 0.012, FRIEZE - DADO); }
  g.fillStyle = 'rgba(244,238,220,0.55)';
  g.fill(stripes);
  // the frieze and the cornice
  const frieze = new Path2D();
  frieze.rect(x0, -HIGH, x1 - x0, HIGH - FRIEZE);
  B.wash(g, frieze, '#6b8063', [x0, -HIGH, x1, -FRIEZE], r, 5);
  g.fillStyle = '#ede5d0';
  g.fillRect(x0, -FRIEZE - 0.09, x1 - x0, 0.09);
  g.fillRect(x0, -HIGH, x1 - x0, 0.12);
  // the wainscot: panels under the dado rail, a skirting
  const wains = new Path2D();
  wains.rect(x0, -DADO, x1 - x0, DADO);
  B.wash(g, wains, '#e9e1cc', [x0, -DADO, x1, 0], r, 4);
  g.fillStyle = '#d6cbb0';
  g.fillRect(x0, -0.16, x1 - x0, 0.16);
  const panels = new Path2D();
  for (let x = x0 + 0.12; x + 0.6 < x1; x += 0.72) panels.rect(x, -DADO + 0.14, 0.6, DADO - 0.38);
  B.pen(g, panels, 1.2 * px, 0.45);
  const rails = new Path2D();
  for (const y of [-DADO, -DADO + 0.05, -0.16, -FRIEZE, -FRIEZE - 0.09, -HIGH + 0.12]) { rails.moveTo(x0, y); rails.lineTo(x1, y); }
  B.pen(g, rails, 1.5 * px, 0.7);
  g.restore();
  // round each hole: an architrave, a cream band with the pen on both its edges
  for (const [hx0, hy0, hx1, hy1] of holes) {
    const band = holed(hx0 - 0.11, hy0 - 0.11, hx1 + 0.11, hy1 + (hy1 < -0.01 ? 0.11 : 0), [[hx0, hy0, hx1, hy1]]);
    g.fillStyle = '#efe8d6';
    g.fill(band);
    B.pen(g, band, 1.6 * px, 0.8);
  }
};
return { HIGH, DADO, FRIEZE, holed, wall };
