// The Master's yard — what its paintings share: a steady random, the storybook's touch (soft rounded dabs of
// gouache over a flat ground), the logs of the house and the well, a ridge's outline.

// a steady random 0…1, the n-th of a seed
const rnd = (n, seed) => anim.hash(n, seed);

// `n` soft rounded dabs over the rectangle x, y, w, h in the colours given (picked at random), each `r` across (±40%),
// `squash` as tall as wide, at `alpha` — the gouache's broken colour over a flat ground
function dabs(g, seed, x, y, w, h, colors, n, r, squash = 0.6, alpha = 0.5) {
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
}

// a wall of horizontal logs from x0 to x1, from the foot (y 0) up to `top` (negative), each log `d` thick: a honey
// body, a lighter top where the light falls, a dark seam of moss and shade under each; a log's end stands out by
// `end` metres at x1 (a corner)
function logs(g, seed, x0, x1, top, d, end = 0) {
  const rows = Math.round(-top / d);
  for (let i = 0; i < rows; i++) {
    const yb = -i * d, yt = yb - d;
    g.fillStyle = ['#b88752', '#ae7d4a', '#c09159'][i % 3];
    g.fillRect(x0, yt, x1 - x0, d);
    g.fillStyle = '#d3a76c';
    g.fillRect(x0, yt + d * 0.08, x1 - x0, d * 0.22);
    g.fillStyle = '#6e4a2c';
    g.fillRect(x0, yb - d * 0.1, x1 - x0, d * 0.1);
    // (knots and cracks along it)
    for (let k = 0; k < (x1 - x0) / 1.3; k++) {
      const kx = x0 + (x1 - x0) * rnd(k + i * 37, seed), ky = yt + d * (0.35 + 0.35 * rnd(k + i * 37, seed + 1));
      g.fillStyle = '#8a5f37';
      g.beginPath();
      g.ellipse(kx, ky, d * (0.4 + 1.6 * rnd(k, seed + 2)), d * 0.04, 0, 0, Math.PI * 2);
      g.fill();
    }
    if (end > 0) {
      // the log's round end at the corner: rings
      const cx = x1 + end * 0.45, cy = yt + d / 2, r = d * 0.52;
      g.fillStyle = '#c99a5e';
      g.beginPath();
      g.ellipse(cx, cy, end * 0.55, r, 0, 0, Math.PI * 2);
      g.fill();
      g.strokeStyle = '#8f6339';
      g.lineWidth = d * 0.04;
      for (const k of [0.62, 0.32]) {
        g.beginPath();
        g.ellipse(cx, cy, end * 0.55 * k, r * k, 0, 0, Math.PI * 2);
        g.stroke();
      }
    }
  }
}

// a ridge's outline from x0 to x1: its height at x (positive, up), made of a few broad swells and finer ones — the
// same every painting
function ridge(x, seed, height, broad, fine) {
  let h = 0;
  for (let k = 0; k < 4; k++) {
    const f = broad / (k + 1), ph = 6.28 * rnd(k, seed);
    h += Math.sin(x / f + ph) * (1 / (k + 1.4));
  }
  h += 0.35 * anim.noise(x / fine, seed);
  return height * (0.62 + 0.3 * h);
}

// a fir: a dark-green cone of drooping tiers over a short trunk, `h` tall, painted at the foot (0, 0), each tier's
// edge lighter where the evening sun catches it
function fir(g, seed, h, dark, light) {
  g.fillStyle = '#4a3828';
  g.fillRect(-h * 0.025, -h * 0.14, h * 0.05, h * 0.15);
  const tiers = 7;
  for (let i = 0; i < tiers; i++) {
    const u = i / tiers, y0 = -h * (0.1 + 0.86 * u), w = h * 0.24 * (1 - u * 0.82), t = h * 0.2;
    const j = (rnd(i, seed) - 0.5) * w * 0.2;
    g.fillStyle = dark;
    g.beginPath();
    g.moveTo(j, y0 - t);
    g.quadraticCurveTo(w * 0.35, y0 - t * 0.5, w + j, y0);
    g.quadraticCurveTo(w * 0.45, y0 - t * 0.12, 0, y0 - t * 0.05);
    g.quadraticCurveTo(-w * 0.45, y0 - t * 0.12, -w + j, y0);
    g.quadraticCurveTo(-w * 0.35, y0 - t * 0.5, j, y0 - t);
    g.fill();
    g.fillStyle = light;
    g.beginPath();
    g.moveTo(w * 0.2 + j, y0 - t * 0.35);
    g.quadraticCurveTo(w * 0.6, y0 - t * 0.12, w + j, y0);
    g.quadraticCurveTo(w * 0.6, y0 - t * 0.02, w * 0.25, y0 - t * 0.12);
    g.fill();
  }
  g.fillStyle = dark;
  g.beginPath();
  g.moveTo(0, -h);
  g.lineTo(h * 0.03, -h * 0.9);
  g.lineTo(-h * 0.03, -h * 0.9);
  g.fill();
}

return { rnd, dabs, logs, ridge, fir };
