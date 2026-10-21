// The Master's room — what its paintings share: a steady random, the storybook's touch (soft rounded dabs of gouache
// over a flat ground), a wall of hewn logs, a ridge's outline, and the far lightning's beat (the sky and the window
// flash together).

// a steady random 0…1, the n-th of a seed
const rnd = (n, seed) => anim.hash(n, seed);

// `n` soft rounded dabs over the rectangle x, y, w, h in the colours given (picked at random), each `r` across (±40%),
// `squash` as tall as wide, at `alpha` — the gouache's broken colour over a flat ground, kept within the rectangle
function dabs(g, seed, x, y, w, h, colors, n, r, squash = 0.6, alpha = 0.5) {
  g.save();
  g.beginPath();
  g.rect(x, y, w, h);
  g.clip();
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

// a wall of hewn logs seen from inside, from x0 to x1, from the foot (y 0) up to `top` (negative), each `d` thick: a
// honey face, a lighter band where the log's round turns up, a dark seam of moss under each, knots and cracks
function logs(g, seed, x0, x1, top, d) {
  g.save();
  g.beginPath();
  g.rect(x0, top, x1 - x0, -top);
  g.clip();
  const rows = Math.ceil(-top / d);
  for (let i = 0; i < rows; i++) {
    const yb = -i * d, yt = Math.max(top, yb - d);
    g.fillStyle = ['#c8955c', '#bf8c54', '#cf9d63'][i % 3];
    g.fillRect(x0, yt, x1 - x0, yb - yt);
    g.fillStyle = '#ddb07a';
    g.fillRect(x0, yt + d * 0.12, x1 - x0, d * 0.2);
    g.fillStyle = '#7a5434';
    g.fillRect(x0, yb - d * 0.09, x1 - x0, d * 0.09);
    g.fillStyle = '#8f7a4a';
    g.fillRect(x0, yb - d * 0.13, x1 - x0, d * 0.04);
    for (let k = 0; k < (x1 - x0) / 1.1; k++) {
      const kx = x0 + (x1 - x0) * rnd(k + i * 37, seed), ky = yt + d * (0.4 + 0.35 * rnd(k + i * 37, seed + 1));
      g.fillStyle = '#9a6a40';
      g.beginPath();
      g.ellipse(kx, ky, d * (0.4 + 1.8 * rnd(k, seed + 2)), d * 0.035, 0, 0, Math.PI * 2);
      g.fill();
    }
  }
  g.restore();
}

// a ridge's outline: its height at x (positive, up), a few broad swells and finer ones — the same every painting
function ridge(x, seed, height, broad, fine) {
  let h = 0;
  for (let k = 0; k < 4; k++) {
    const f = broad / (k + 1), ph = 6.28 * rnd(k, seed);
    h += Math.sin(x / f + ph) * (1 / (k + 1.4));
  }
  h += 0.35 * anim.noise(x / fine, seed);
  return height * (0.62 + 0.3 * h);
}

// the far lightning at second t, 0…1: once in a while (every 13 s, at a random moment of it; one time in four
// nothing) a flash and a second, weaker one after it
function flash(t) {
  const P = 13, k = Math.floor(t / P);
  if (rnd(k, 92) < 0.25) return 0;
  const d = t - (k * P + 2 + 8 * rnd(k, 91));
  if (d < 0 || d > 1.2) return 0;
  return Math.exp(-d * 14) + (d > 0.24 ? 0.65 * Math.exp(-(d - 0.24) * 8) : 0);
}

return { rnd, dabs, logs, ridge, flash };
