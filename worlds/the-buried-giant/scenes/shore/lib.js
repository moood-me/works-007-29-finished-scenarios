// What the shore's paintings share: the land's shape and where the water meets it, a steady random, an uneven stone,
// a band of haze that wraps round its box, a clump of grass
const WATER = -0.3; // the sea's level (the plane `sea`)
// the land: the shingle sloping gently down to the water, the cove's arms curving out to sea on either side, the
// grassy bank rising on the left; under the water it falls away faster
function land(a, d) {
  const x = d - 0.012 * a * a;
  return -0.032 * x - 0.12 * Math.max(0, x - 9.5) + Math.min(7, 0.05 * Math.pow(Math.max(0, -a - 5), 1.6));
}
// how far ahead the water's edge is, `a` metres across
function shoreAt(a) {
  let lo = -10, hi = 400;
  for (let i = 0; i < 40; i++) {
    const m = (lo + hi) / 2;
    if (land(a, m) > WATER) lo = m;
    else hi = m;
  }
  return lo;
}
const rnd = (seed) => {
  let n = 0;
  return () => anim.hash(++n, seed);
};
// an uneven rounded stone round (x, y): rx, ry its half sizes, turned by `turn` radians, `r` its random
function stone(g, x, y, rx, ry, turn, r) {
  const n = 9, pts = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2, k = 0.82 + 0.3 * r();
    pts.push([Math.cos(a) * rx * k, Math.sin(a) * ry * k]);
  }
  g.save();
  g.translate(x, y);
  g.rotate(turn);
  g.beginPath();
  for (let i = 0; i < n; i++) {
    const q = pts[(i + 1) % n], p = pts[i], mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2;
    if (i === 0) g.moveTo(mx, my);
    g.quadraticCurveTo(q[0], q[1], (q[0] + pts[(i + 2) % n][0]) / 2, (q[1] + pts[(i + 2) % n][1]) / 2);
  }
  g.closePath();
  g.fill();
  g.restore();
}
// a band of haze along a box [left, top, right, bottom]: soft puffs (`strength`: how thick), denser at its foot,
// thinning upward; the puffs near either end painted again a box-width over so the band's ends meet as it drifts round
function mist(g, box, seed, density, color, strength = 1) {
  const [l, t, rr, b] = box, w = rr - l, h = b - t, r = rnd(seed), n = Math.round(density);
  for (let i = 0; i < n; i++) {
    const x = l + r() * w, up = Math.pow(r(), 1.6), y = b - up * h * 0.85, rx = (0.06 + 0.1 * r()) * w * (1 - 0.4 * up);
    const ry = rx * (0.12 + 0.08 * r()), a = Math.min(0.7, (0.16 + 0.22 * r()) * (1 - 0.6 * up) * strength);
    for (const dx of [-w, 0, w]) {
      const cx = x + dx;
      if (cx + rx < l || cx - rx > rr) continue;
      g.save();
      g.translate(cx, y);
      g.scale(1, ry / rx);
      const grd = g.createRadialGradient(0, 0, 0, 0, 0, rx);
      grd.addColorStop(0, `rgba(${color},${a})`);
      grd.addColorStop(0.55, `rgba(${color},${a * 0.55})`);
      grd.addColorStop(1, `rgba(${color},0)`);
      g.fillStyle = grd;
      g.fillRect(-rx, -rx, rx * 2, rx * 2);
      g.restore();
    }
  }
}
// a clump of grass blades from (0, 0) up to `tall` metres: thin tapering curved blades in the given colours
function blades(g, tall, count, colors, r, spread) {
  for (let i = 0; i < count; i++) {
    const x0 = (r() - 0.5) * spread, lean = (r() - 0.5) * tall * 0.9, hgt = tall * (0.55 + 0.45 * r()), wid = 0.012 + 0.014 * r();
    g.fillStyle = colors[Math.floor(r() * colors.length)];
    g.beginPath();
    g.moveTo(x0 - wid, 0);
    g.quadraticCurveTo(x0 + lean * 0.2, -hgt * 0.6, x0 + lean, -hgt);
    g.quadraticCurveTo(x0 + lean * 0.2 + wid, -hgt * 0.55, x0 + wid, 0);
    g.closePath();
    g.fill();
  }
}
return { WATER, land, shoreAt, rnd, stone, mist, blades };
