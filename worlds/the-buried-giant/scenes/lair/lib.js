// What the lair's paintings share: the land's shape (the ground falling gently ahead to the pit, the pit itself, the
// slopes rising on the left and beyond), a steady random, an uneven stone, a jagged crag, a band of mist that wraps
// round its box, a clump of grass
const PIT = { across: 9, distance: 22, radius: 10, depth: 3.6, floor: 0.55 };
// how far a place is from the pit's middle, in its radii (1: its rim; below PIT.floor: its floor)
function pitQ(a, d) {
  const x = (a - PIT.across) / PIT.radius, z = (d - PIT.distance) / PIT.radius;
  return Math.sqrt(x * x + z * z);
}
// the land: falling 15 cm a metre from where the viewer stands to the pit's rim, then climbing toward the mountain
// beyond it; rising on the left (the slope the path climbs) and on the far right; the pit sunk into it, its walls
// steep, its floor flat
function land(a, d) {
  const fall = -0.15 * anim.clamp(d - 1, 0, 11);
  const climb = Math.min(40, 0.12 * Math.max(0, d - 30));
  const left = 0.3 * Math.pow(Math.max(0, -a - 4), 1.2) * anim.span(d, 1, 8);
  const right = 0.2 * Math.max(0, a - 19) * anim.span(d, 4, 14);
  const u = anim.span(pitQ(a, d), PIT.floor, 1);
  return fall + climb + left + right - PIT.depth * (1 - u * u * (3 - 2 * u));
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
    const p = pts[i], q = pts[(i + 1) % n], mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2;
    if (i === 0) g.moveTo(mx, my);
    g.quadraticCurveTo(q[0], q[1], (q[0] + pts[(i + 2) % n][0]) / 2, (q[1] + pts[(i + 2) % n][1]) / 2);
  }
  g.closePath();
  g.fill();
  g.restore();
}
// a jagged crag standing on (0, 0): `w` wide, `h` tall, its facets in the given tones (dark, mid, light), lichen on
// its shoulders
function crag(g, w, h, tones, r) {
  const n = 7, top = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n, x = (t - 0.5) * w * (0.9 + 0.1 * r()), rise = Math.sin(Math.PI * Math.min(1, t * 1.15)) * h;
    top.push([x, -rise * (0.7 + 0.3 * r())]);
  }
  g.fillStyle = tones[1];
  g.beginPath();
  g.moveTo(-w * 0.55, 0);
  for (const [x, y] of top) g.lineTo(x, y);
  g.lineTo(w * 0.55, 0);
  g.closePath();
  g.fill();
  // facets: darker on the left, lighter planes on the right, cracks between
  for (let i = 0; i < n; i++) {
    const [x0, y0] = top[i], [x1, y1] = top[i + 1], foot = (x0 + x1) / 2 + (r() - 0.5) * w * 0.15;
    g.fillStyle = i < n / 2 - 0.5 ? tones[0] : r() < 0.6 ? tones[2] : tones[1];
    g.beginPath();
    g.moveTo(x0, y0);
    g.lineTo(x1, y1);
    g.lineTo(foot + (x1 - x0) * 0.3, y1 * 0.25);
    g.lineTo(foot - (x1 - x0) * 0.2, y0 * 0.35);
    g.closePath();
    g.fill();
  }
  g.strokeStyle = 'rgba(60,58,55,0.55)';
  g.lineWidth = w * 0.012;
  for (let i = 1; i < n; i += 2) {
    const [x, y] = top[i];
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + (r() - 0.5) * w * 0.1, y * 0.3);
    g.stroke();
  }
  g.fillStyle = 'rgba(160,156,112,0.65)';
  for (let i = 0; i < 6; i++) {
    const [x, y] = top[1 + Math.floor(r() * (n - 1))];
    g.beginPath();
    g.ellipse(x + (r() - 0.5) * w * 0.1, y + h * 0.06, w * (0.03 + 0.04 * r()), h * 0.025, 0, 0, Math.PI * 2);
    g.fill();
  }
}
// a band of mist along a box [left, top, right, bottom]: soft puffs (`strength`: how white), denser at its foot,
// thinning upward; the puffs near either end painted again a box-width over so the band's ends meet as it drifts round
function mist(g, box, seed, density, color, strength = 1) {
  const [l, t, rr, b] = box, w = rr - l, h = b - t, r = rnd(seed), n = Math.round(density);
  for (let i = 0; i < n; i++) {
    const x = l + r() * w, up = Math.pow(r(), 1.6), y = b - up * h * 0.85, rx = (0.06 + 0.1 * r()) * w * (1 - 0.4 * up);
    const ry = Math.min(rx * (0.16 + 0.1 * r()), h * 0.6), a = Math.min(0.7, (0.16 + 0.22 * r()) * (1 - 0.6 * up) * strength);
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
return { PIT, pitQ, land, rnd, stone, crag, mist, blades };
