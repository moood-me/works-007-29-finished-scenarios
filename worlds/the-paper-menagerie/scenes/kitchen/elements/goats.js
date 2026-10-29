// Two paper goats on the sill, folded from wrapping paper (one green with white dots, one white with blue stripes):
// flat facets, each fold a shade lighter or darker, the creases drawn. Each goat's head and neck is a layer of its own,
// pivoting at the neck: animate nods them now and then, a little stiffly, as paper moves.
// (Not there while the kitchen is packed, `packed`.)
if (e.state.packed) return;
const poly = (l, pts, fill) => {
  l.fillStyle = fill;
  l.beginPath();
  l.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) l.lineTo(pts[i][0], pts[i][1]);
  l.closePath();
  l.fill();
};
const crease = (l, a, b, c) => {
  l.strokeStyle = c;
  l.lineWidth = 0.0025;
  l.beginPath();
  l.moveTo(a[0], a[1]);
  l.lineTo(b[0], b[1]);
  l.stroke();
};
// a goat facing right (s 1) or left (s −1), its feet at x0 on the sill; its body here, its head the layer `head${n}`
const goat = (n, x0, s, light, dark, mark) => {
  const X = x => x0 + s * x;
  // legs
  for (const lx of [-0.045, -0.03, 0.03, 0.045])
    poly(
      g,
      [
        [X(lx - 0.006), -0.045],
        [X(lx + 0.006), -0.045],
        [X(lx), 0],
      ],
      lx < 0 ? dark : light,
    );
  // body: two facets meeting along the spine fold
  poly(
    g,
    [
      [X(-0.06), -0.085],
      [X(0.05), -0.09],
      [X(0.055), -0.045],
      [X(-0.055), -0.042],
    ],
    light,
  );
  poly(
    g,
    [
      [X(-0.06), -0.085],
      [X(0.05), -0.09],
      [X(0.03), -0.068],
      [X(-0.04), -0.066],
    ],
    dark,
  );
  crease(g, [X(-0.06), -0.085], [X(0.05), -0.09], mark);
  // the tail, a flick of paper
  poly(
    g,
    [
      [X(-0.058), -0.084],
      [X(-0.075), -0.1],
      [X(-0.062), -0.078],
    ],
    dark,
  );
  // the dots or stripes of the wrapping paper
  g.fillStyle = mark;
  for (let i = 0; i < 6; i++) g.fillRect(X(-0.045 + i * 0.016), -0.06 - (i % 2) * 0.012, 0.004, 0.004);
  e.layer(`head${n}`, { pivot: [X(0.045), -0.085] }, l => {
    poly(
      l,
      [
        [X(0.035), -0.088],
        [X(0.06), -0.13],
        [X(0.075), -0.12],
        [X(0.055), -0.082],
      ],
      light,
    );
    poly(
      l,
      [
        [X(0.058), -0.13],
        [X(0.092), -0.115],
        [X(0.075), -0.105],
      ],
      dark,
    );
    // horns
    poly(
      l,
      [
        [X(0.06), -0.13],
        [X(0.045), -0.155],
        [X(0.066), -0.133],
      ],
      dark,
    );
    poly(
      l,
      [
        [X(0.066), -0.13],
        [X(0.058), -0.158],
        [X(0.072), -0.131],
      ],
      light,
    );
    // the beard
    poly(
      l,
      [
        [X(0.085), -0.112],
        [X(0.088), -0.095],
        [X(0.08), -0.108],
      ],
      light,
    );
    crease(l, [X(0.06), -0.13], [X(0.055), -0.082], mark);
    l.fillStyle = '#2a2624';
    l.fillRect(X(0.071) - 0.002, -0.121, 0.004, 0.004);
  });
};
goat(0, -0.1, 1, '#9cc49a', '#7aa679', '#eef3e6');
goat(1, 0.12, -1, '#f2efe6', '#d9d6ce', '#6f8fbd');
e.at(-0.1, -0.1, 'goat');
