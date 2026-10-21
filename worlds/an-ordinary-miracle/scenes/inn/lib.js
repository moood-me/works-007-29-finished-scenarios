// The inn «Emilia» — what its paintings share: a steady random, the storybook's touch (soft rounded dabs of gouache
// over a flat ground), a wall of whitewashed plaster between dark oak timbers, hoar frost on a pane, a fir.

// a steady random 0…1, the n-th of a seed
const rnd = (n, seed) => anim.hash(n, seed);

// `n` soft rounded dabs over the rectangle x, y, w, h in the colours given (picked at random), each `r` across (±40%),
// `squash` as tall as wide, at `alpha` — the gouache's broken colour over a flat ground, kept within the rectangle
// (unless `loose`: a bush's leaves, a heap of snow, round at its edge)
function dabs(g, seed, x, y, w, h, colors, n, r, squash = 0.6, alpha = 0.5, loose = false) {
  g.save();
  if (!loose) {
    g.beginPath();
    g.rect(x, y, w, h);
    g.clip();
  }
  const was = g.globalAlpha;
  g.globalAlpha = alpha;
  for (let i = 0; i < n; i++) {
    const cx = x + w * rnd(i, seed), cy = y + h * rnd(i, seed + 1), rr = r * (0.6 + 0.8 * rnd(i, seed + 2));
    g.fillStyle = colors[Math.floor(rnd(i, seed + 3) * colors.length) % colors.length];
    g.beginPath();
    g.ellipse(cx, cy, rr, rr * squash, (rnd(i, seed + 4) - 0.5) * 0.5, 0, Math.PI * 2);
    g.fill();
  }
  g.globalAlpha = was;
  g.restore();
}

// whitewashed plaster over the rectangle, warm and uneven
function plaster(g, seed, x, y, w, h) {
  g.fillStyle = '#e6d9bf';
  g.fillRect(x, y, w, h);
  dabs(g, seed, x, y, w, h, ['#efe4cc', '#d8c8a8', '#e9dcc0', '#d2c09c'], Math.round(w * h * 30), 0.14, 0.6, 0.45);
}

// a dark oak timber from (x0, y0) to (x1, y1), `w` wide: its face, a lighter edge, the grain
function timber(g, seed, x0, y0, x1, y1, w) {
  const dx = x1 - x0, dy = y1 - y0, len = Math.hypot(dx, dy);
  g.save();
  g.translate(x0, y0);
  g.rotate(Math.atan2(dy, dx));
  g.fillStyle = '#5a3a24';
  g.fillRect(0, -w / 2, len, w);
  g.fillStyle = '#7a5434';
  g.fillRect(0, -w / 2, len, w * 0.18);
  g.fillStyle = '#3f2818';
  g.fillRect(0, w / 2 - w * 0.12, len, w * 0.12);
  g.strokeStyle = 'rgba(40, 24, 14, 0.5)';
  g.lineWidth = w * 0.04;
  for (let k = 0; k < len / 0.6; k++) {
    const u = len * rnd(k, seed), v = (rnd(k, seed + 1) - 0.5) * w * 0.6;
    g.beginPath();
    g.moveTo(u, v);
    g.lineTo(u + 0.2 + 0.4 * rnd(k, seed + 2), v + (rnd(k, seed + 3) - 0.5) * 0.02);
    g.stroke();
  }
  g.restore();
}

// hoar frost on a pane x, y, w, h: thick white feathers growing in from its edges and corners, the middle clearer
function frost(g, seed, x, y, w, h) {
  g.save();
  g.beginPath();
  g.rect(x, y, w, h);
  g.clip();
  const edge = (px, py, ax, ay, n) => {
    for (let i = 0; i < n; i++) {
      const sx = px + (ax ? 0 : w * rnd(i, seed)), sy = py + (ay ? 0 : h * rnd(i, seed + 1));
      const ang = Math.atan2(ay, ax) + (rnd(i, seed + 2) - 0.5) * 1.6, len = Math.min(w, h) * (0.15 + 0.35 * rnd(i, seed + 3));
      const ex = sx + Math.cos(ang) * len, ey = sy + Math.sin(ang) * len;
      g.strokeStyle = 'rgba(240, 246, 255, 0.85)';
      g.lineWidth = 0.008;
      g.beginPath();
      g.moveTo(sx, sy);
      g.lineTo(ex, ey);
      g.stroke();
      for (let k = 1; k < 5; k++) {
        const u = k / 5, bx = sx + (ex - sx) * u, by = sy + (ey - sy) * u, bl = len * 0.25 * (1 - u);
        for (const s of [-1, 1]) {
          g.beginPath();
          g.moveTo(bx, by);
          g.lineTo(bx + Math.cos(ang + s * 0.7) * bl, by + Math.sin(ang + s * 0.7) * bl);
          g.stroke();
        }
      }
    }
  };
  edge(x, y, 1, 0, 9);
  edge(x + w, y, -1, 0, 9);
  edge(x, y + h, 0, -1, 9);
  edge(x, y, 0, 1, 6);
  // the white rime thickest at the bottom and in the corners
  const rime = g.createLinearGradient(0, y + h, 0, y);
  rime.addColorStop(0, 'rgba(236, 242, 252, 0.95)');
  rime.addColorStop(0.3, 'rgba(226, 234, 248, 0.45)');
  rime.addColorStop(0.6, 'rgba(226, 234, 248, 0.0)');
  g.fillStyle = rime;
  g.fillRect(x, y, w, h);
  dabs(g, seed + 9, x, y + h * 0.65, w, h * 0.35, ['#eef3fb', '#dfe7f4'], 18, Math.min(w, h) * 0.12, 0.6, 0.7);
  for (const [cx, cy] of [[x, y], [x + w, y], [x, y + h], [x + w, y + h]]) {
    const c = g.createRadialGradient(cx, cy, 0, cx, cy, Math.min(w, h) * 0.5);
    c.addColorStop(0, 'rgba(240, 245, 252, 0.9)');
    c.addColorStop(1, 'rgba(240, 245, 252, 0)');
    g.fillStyle = c;
    g.fillRect(x, y, w, h);
  }
  g.restore();
}

// a fir laden with snow, `w` wide at its foot and `h` tall, from (0, 0) up: tiers of drooping boughs, snow on each
function fir(g, w, h, dark, snow) {
  const tiers = 7;
  for (let i = 0; i < tiers; i++) {
    const u0 = i / tiers, yb = -h * (0.08 + 0.92 * u0), half = (w / 2) * (1 - u0) * 1.05, yt = yb - h * 0.24;
    g.fillStyle = dark;
    g.beginPath();
    g.moveTo(0, yt);
    g.quadraticCurveTo(half * 0.5, yb - h * 0.06, half, yb + h * 0.02);
    g.lineTo(-half, yb + h * 0.02);
    g.quadraticCurveTo(-half * 0.5, yb - h * 0.06, 0, yt);
    g.fill();
    g.fillStyle = snow;
    g.beginPath();
    g.moveTo(0, yt + h * 0.02);
    g.quadraticCurveTo(half * 0.45, yb - h * 0.08, half * 0.95, yb - h * 0.005);
    g.quadraticCurveTo(half * 0.45, yb - h * 0.045, 0, yt + h * 0.07);
    g.quadraticCurveTo(-half * 0.45, yb - h * 0.045, -half * 0.95, yb - h * 0.005);
    g.quadraticCurveTo(-half * 0.45, yb - h * 0.08, 0, yt + h * 0.02);
    g.fill();
  }
  g.fillStyle = dark;
  g.fillRect(-w * 0.03, -h * 0.08, w * 0.06, h * 0.08);
}

return { rnd, dabs, plaster, timber, frost, fir };
