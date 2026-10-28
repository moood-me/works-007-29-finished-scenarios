// What the assembly room's paintings share: the walls' dress (the same on the three walls), an outline with holes
// (square or round-headed windows and doors), and the room's measures. Metres of a wall card: x along it, y up negative,
// its foot at 0; the room is 6 m high.
const B = kit.brush;
const HIGH = 6, DADO = 1.0, CORNICE = 5.2;
// a rectangle with holes cut in it — each [x0, y0, x1, y1] (its top y0), round-headed when it says `true` as its fifth
// (a half circle as wide as the hole on top of it); filled and clipped 'evenodd', so the holes stay open
const holed = (x0, y0, x1, y1, holes) => {
  const p = new Path2D();
  p.rect(x0, y0, x1 - x0, y1 - y0);
  for (const [hx0, hy0, hx1, hy1, arch] of holes) {
    if (!arch) {
      p.rect(hx0, hy0, hx1 - hx0, hy1 - hy0);
      continue;
    }
    const r = (hx1 - hx0) / 2, cy = hy0 + r;
    p.moveTo(hx0, hy1);
    p.lineTo(hx0, cy);
    p.arc(hx0 + r, cy, r, Math.PI, 0);
    p.lineTo(hx1, hy1);
    p.closePath();
  }
  return p;
};
// a wall from x0 to x1, the holes left open: a cream wainscot of panels to the dado rail, above it tall panels of pale
// celadon in cream mouldings between flat fluted pilasters (at `pilasters`, x of each), a sage frieze under a cream
// cornice (the page's title is read over the frieze and the ceiling), the pen along every rail; r: the painting's
// random, px: the pen's pixel at the wall's distance
const wall = (g, x0, x1, holes, pilasters, r, px) => {
  const all = holed(x0, -HIGH, x1, 0, holes);
  g.save();
  g.clip(all, 'evenodd');
  const body = new Path2D();
  body.rect(x0, -CORNICE, x1 - x0, CORNICE - DADO);
  B.wash(g, body, '#e6dcc3', [x0, -CORNICE, x1, -DADO], r, 8);
  // the tall panels between the pilasters
  const edges = [x0, ...pilasters, x1];
  const panels = new Path2D(), inner = new Path2D();
  for (let i = 0; i + 1 < edges.length; i++) {
    const a = edges[i] + (i === 0 ? 0.2 : 0.42), b = edges[i + 1] - (i + 1 === edges.length - 1 ? 0.2 : 0.42);
    if (b - a < 0.4) continue;
    panels.rect(a, -CORNICE + 0.45, b - a, CORNICE - DADO - 0.75);
    inner.rect(a + 0.09, -CORNICE + 0.54, b - a - 0.18, CORNICE - DADO - 0.93);
  }
  B.wash(g, panels, '#c3cbb0', [x0, -CORNICE, x1, -DADO], r, 6);
  B.pen(g, panels, 1.3 * px, 0.6);
  B.pen(g, inner, 1.0 * px, 0.4);
  // the frieze and the cornice
  const frieze = new Path2D();
  frieze.rect(x0, -HIGH, x1 - x0, HIGH - CORNICE);
  B.wash(g, frieze, '#8f9d7f', [x0, -HIGH, x1, -CORNICE], r, 5);
  g.fillStyle = '#ece4cf';
  g.fillRect(x0, -CORNICE - 0.14, x1 - x0, 0.14);
  g.fillRect(x0, -HIGH, x1 - x0, 0.2);
  const dentils = new Path2D();
  for (let x = x0 + 0.04; x < x1; x += 0.12) dentils.rect(x, -HIGH + 0.2, 0.06, 0.08);
  g.fillStyle = '#e2d8bf';
  g.fill(dentils);
  B.pen(g, dentils, 0.8 * px, 0.4);
  // the wainscot: square panels under the dado rail, a skirting
  const wains = new Path2D();
  wains.rect(x0, -DADO, x1 - x0, DADO);
  B.wash(g, wains, '#ebe3cf', [x0, -DADO, x1, 0], r, 4);
  g.fillStyle = '#d4c8ab';
  g.fillRect(x0, -0.18, x1 - x0, 0.18);
  const low = new Path2D();
  for (let x = x0 + 0.14; x + 0.62 < x1; x += 0.78) low.rect(x, -DADO + 0.16, 0.62, DADO - 0.42);
  B.pen(g, low, 1.1 * px, 0.4);
  // the pilasters: flat, cream, fluted, a plain capital under the frieze and a base on the skirting
  const shafts = new Path2D(), flutes = new Path2D(), caps = new Path2D();
  for (const x of pilasters) {
    shafts.rect(x - 0.24, -CORNICE, 0.48, CORNICE - 0.18);
    for (const f of [-0.12, -0.04, 0.04, 0.12]) { flutes.moveTo(x + f, -CORNICE + 0.45); flutes.lineTo(x + f, -DADO - 0.2); }
    caps.rect(x - 0.32, -CORNICE + 0.02, 0.64, 0.16);
    caps.rect(x - 0.3, -0.36, 0.6, 0.18);
  }
  B.wash(g, shafts, '#efe8d6', [x0, -CORNICE, x1, 0], r, 3);
  g.fillStyle = '#f2ecdd';
  g.fill(caps);
  B.pen(g, flutes, 0.9 * px, 0.35);
  B.pen(g, shafts, 1.3 * px, 0.7);
  B.pen(g, caps, 1.2 * px, 0.7);
  const rails = new Path2D();
  for (const y of [-DADO, -DADO + 0.06, -0.18, -CORNICE, -CORNICE - 0.14, -HIGH + 0.2, -HIGH + 0.28]) { rails.moveTo(x0, y); rails.lineTo(x1, y); }
  B.pen(g, rails, 1.5 * px, 0.7);
  g.restore();
  // round each hole: an architrave, a cream band with the pen on both its edges
  for (const h of holes) {
    const [hx0, hy0, hx1, hy1, arch] = h, open = hy1 > -0.01;
    const band = holed(hx0 - 0.13, hy0 - 0.13, hx1 + 0.13, hy1 + (open ? 0 : 0.13), [h]);
    g.save();
    if (arch) {
      // (a round-headed architrave: the band follows the arch)
      const outer = holed(0, 0, 0, 0, [[hx0 - 0.13, hy0 - 0.13, hx1 + 0.13, hy1 + (open ? 0 : 0.13), true]]);
      g.clip(outer, 'evenodd');
    }
    g.fillStyle = '#efe8d6';
    g.fill(band, 'evenodd');
    g.restore();
    B.pen(g, holed(0, 0, 0, 0, [[hx0 - 0.13, hy0 - 0.13, hx1 + 0.13, hy1 + (open ? 0 : 0.13), arch]]), 1.6 * px, 0.8);
    B.pen(g, holed(0, 0, 0, 0, [h]), 1.3 * px, 0.7);
  }
};
// a chandelier's candles (its card's metres: x across, y up negative from its bottom finial): two rings seen from
// below — the upper of six candles, the lower of eight —, each candle [x, y of its foot, near (1) or far (0)]; a
// candle is 0.15 m tall, its flame over it — the chandelier and its flames read the same list
const CANDLE = 0.15;
const RINGS = [{ y: -1.25, rx: 0.42, ry: 0.07, n: 6, a0: 0.5 }, { y: -0.6, rx: 0.78, ry: 0.12, n: 8, a0: 0.2 }];
const candles = () => {
  const all = [];
  for (const ring of RINGS) {
    for (let k = 0; k < ring.n; k++) {
      const a = ring.a0 + (k / ring.n) * Math.PI * 2, s = Math.sin(a);
      all.push([ring.rx * Math.cos(a), ring.y + ring.ry * s, s < 0 ? 1 : 0]);
    }
  }
  return all;
};
// a sconce's two candles (its card's metres, from the foot of its backplate): their feet
const SCONCE = [[-0.28, -0.3], [0.28, -0.3]];
return { HIGH, DADO, CORNICE, holed, wall, CANDLE, RINGS, candles, SCONCE };
