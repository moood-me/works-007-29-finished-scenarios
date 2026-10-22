// What the garden's paintings share: a chestnut's leaves — palmate clusters of five to seven leaflets fanned downward —
// scattered over an ellipse of a crown (cx, cy, rx, ry metres in the painting), n clusters, leaflets `leaf` metres
// long, in `colors` from the crown's underside (first) to its top (last); a dark mass under them first (`mass`), so
// the gaps show shade, not sky.
function crown(g, rnd, o) {
  if (o.mass) {
    g.fillStyle = o.mass;
    g.beginPath();
    for (let i = 0; i < 18; i++) {
      const t = rnd() * Math.PI * 2;
      const r = Math.sqrt(rnd()) * 0.62;
      const x = o.cx + Math.cos(t) * r * o.rx;
      const y = o.cy + Math.sin(t) * r * o.ry;
      const w = o.rx * (0.28 + rnd() * 0.18);
      g.moveTo(x + w, y);
      g.ellipse(x, y, w, w * 0.7, 0, 0, Math.PI * 2);
    }
    g.fill();
  }
  const paths = o.colors.map(() => new Path2D());
  for (let i = 0; i < o.n; i++) {
    const t = rnd() * Math.PI * 2;
    const r = Math.sqrt(rnd());
    const x = o.cx + Math.cos(t) * r * o.rx;
    const y = o.cy + Math.sin(t) * r * o.ry * (Math.sin(t) > 0 ? 0.8 : 1);
    const up = anim.clamp((o.cy - y) / o.ry * 0.5 + 0.5 + (rnd() - 0.5) * 0.5, 0, 0.999);
    const p = paths[Math.floor(up * o.colors.length)];
    const k = 5 + Math.floor(rnd() * 3);
    const dir = Math.PI * 0.5 + (rnd() - 0.5) * 2.2;
    const s = o.leaf * (0.75 + rnd() * 0.5);
    for (let j = 0; j < k; j++) {
      const u = j / (k - 1) - 0.5;
      const a = dir + u * 3.4;
      const len = s * (1 - 0.45 * Math.abs(u) * 2);
      const cx = x + Math.cos(a) * len * 0.55;
      const cy = y + Math.sin(a) * len * 0.55;
      p.moveTo(cx + Math.cos(a) * len * 0.5, cy + Math.sin(a) * len * 0.5);
      p.ellipse(cx, cy, len * 0.5, len * 0.16, a, 0, Math.PI * 2);
    }
  }
  o.colors.forEach((c, i) => {
    g.fillStyle = c;
    g.fill(paths[i]);
  });
}
return { crown };
