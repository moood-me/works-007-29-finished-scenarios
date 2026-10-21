// The Ivanovs' izba — what its paintings share: the gouache's touch, as in the yard (dry strokes with ragged edges over
// a flat ground, the tooth of rough paper showing through the paint — the same functions as the yard's lib), and the
// room's own surfaces: walls of hewn logs, scrubbed boards, whitewash.

// a steady random 0…1, the n-th of a seed
const rnd = (n, seed) => anim.hash(n, seed);

// a field of dry strokes over the rectangle x, y, w, h: `n` of them, each `len` long and `wid` wide, mostly along
// `angle` (radians), in the colours given (picked at random), each laid at `alpha` — each a ragged-edged dab, thicker
// where the brush came down, dry and broken where it lifted; kept inside the rectangle (here, unlike the yard's: a dab
// at the edge does not run past the thing it paints)
function strokes(g, seed, x, y, w, h, colors, n, len, wid, angle = 0, alpha = 0.35) {
  g.save();
  g.beginPath();
  g.rect(x, y, w, h);
  g.clip();
  g.globalAlpha = alpha;
  for (let i = 0; i < n; i++) {
    const cx = x + w * rnd(i, seed), cy = y + h * rnd(i, seed + 1), a = angle + (rnd(i, seed + 2) - 0.5) * 0.4;
    const l = len * (0.5 + rnd(i, seed + 3)), ww = wid * (0.6 + 0.8 * rnd(i, seed + 4)), j = rnd(i, seed + 6);
    const c = Math.cos(a), s = Math.sin(a), hx = (c * l) / 2, hy = (s * l) / 2, nx = -s * ww / 2, ny = c * ww / 2;
    g.fillStyle = colors[Math.floor(rnd(i, seed + 5) * colors.length) % colors.length];
    g.beginPath();
    g.moveTo(cx - hx + nx * 0.6, cy - hy + ny * 0.6);
    g.lineTo(cx - hx * 0.3 + nx * (1.1 + 0.3 * j), cy - hy * 0.3 + ny * (1.1 + 0.3 * j));
    g.lineTo(cx + hx * 0.4 + nx * (0.8 - 0.3 * j), cy + hy * 0.4 + ny * (0.8 - 0.3 * j));
    g.lineTo(cx + hx, cy + hy + ny * 0.1);
    g.lineTo(cx + hx * 0.5 - nx * (0.5 + 0.4 * j), cy + hy * 0.5 - ny * (0.5 + 0.4 * j));
    g.lineTo(cx - hx * 0.2 - nx * (1.0 - 0.2 * j), cy - hy * 0.2 - ny * (1.0 - 0.2 * j));
    g.lineTo(cx - hx - nx * 0.4, cy - hy - ny * 0.4);
    g.closePath();
    g.fill();
  }
  g.restore();
}

// the tooth of rough paper: a tile of 128 × 128 of its grain — pale specks where the dry paint skipped the paper's tops,
// darker pits where it pooled, a faint fibre running through — the same every time (hashed, not random), in a canvas of
// the painting's own
const TILE = 128;
function paperOf() {
  const c = new OffscreenCanvas(TILE, TILE), t = c.getContext("2d"), img = t.createImageData(TILE, TILE), d = img.data;
  for (let yy = 0; yy < TILE; yy++) {
    for (let xx = 0; xx < TILE; xx++) {
      const i = (yy * TILE + xx) * 4;
      // (a grain of two sizes, periodic across the tile's edges, and a fibre along it)
      const big = anim.hash(((xx >> 2) % (TILE >> 2)) * 977 + ((yy >> 2) % (TILE >> 2)), 7);
      const small = anim.hash(xx * 131 + yy * 7919, 11), fibre = anim.hash(((xx + (yy >> 3) * 5) % TILE) + (yy >> 1) * 313, 13);
      const v = 0.5 * small + 0.35 * big + 0.15 * fibre;
      if (v > 0.68) {
        d[i] = 250; d[i + 1] = 246; d[i + 2] = 236; d[i + 3] = Math.round(255 * Math.min(0.55, (v - 0.68) * 2.2));
      } else if (v < 0.3) {
        d[i] = 70; d[i + 1] = 58; d[i + 2] = 44; d[i + 3] = Math.round(255 * Math.min(0.32, (0.3 - v) * 1.4));
      }
    }
  }
  t.putImageData(img, 0, 0);
  return c;
}
// the paper's tooth laid over what is painted in the rectangle x, y, w, h (only over paint: nothing where it is clear),
// one tile `size` units across, at `alpha` — a tile as big as the grain stays a pixel or so on the screen: about a fifth
// of the distance it is seen from, in metres; 0.12 stage heights on the sky, faintly
function paper(g, x, y, w, h, size, alpha = 1) {
  g.save();
  g.globalCompositeOperation = "source-atop";
  g.globalAlpha = alpha;
  g.translate(x, y);
  g.scale(size / TILE, size / TILE);
  g.fillStyle = g.createPattern(paperOf(), "repeat");
  g.fillRect(0, 0, (w * TILE) / size, (h * TILE) / size);
  g.restore();
}

// a wall of hewn logs from x0 to x1, its foot at y 0 and its top at −height (metres, y down): inside the izba the logs
// are hewn flat, honey-grey and darkened with years, each a band with a darker lower edge and the caulked seam under
// it, the brush dry along the grain; `tooth` — the paper's tile (a fifth of the distance it is seen from)
function hewn(g, seed, x0, x1, height, log = 0.24, tooth = 1.1) {
  g.fillStyle = "#9c8566";
  g.fillRect(x0, -height, x1 - x0, height);
  for (let i = 0, y = 0; y > -height; i++, y -= log) {
    g.fillStyle = ["#b39b76", "#a88f6b", "#b8a27e", "#a08868"][i % 4];
    g.fillRect(x0, y - log + 0.015, x1 - x0, log - 0.03);
    g.fillStyle = "rgba(74,58,40,0.55)";
    g.fillRect(x0, y - 0.03, x1 - x0, 0.03);
    g.fillStyle = "rgba(150,132,98,0.6)";
    g.fillRect(x0, y - 0.012, x1 - x0, 0.012);
    strokes(g, seed + i * 7, x0, y - log + 0.03, x1 - x0, log - 0.06, ["#c8b38e", "#8c7556", "#bca681", "#d2c09d"], Math.round((x1 - x0) * 5), 0.45, 0.035, 0, 0.45);
  }
  paper(g, x0, -height, x1 - x0, height, tooth);
}

// boards over the rectangle x, y, w, h — running along y (`along` true) or along x — each `board` wide, in near tones,
// a dark seam between them, dry strokes along the grain, the paper's tooth `tooth` metres a tile
function planks(g, seed, x, y, w, h, board, tones, along, tooth = 0.9) {
  const n = Math.ceil((along ? w : h) / board);
  for (let i = 0; i < n; i++) {
    g.fillStyle = tones[Math.floor(rnd(i, seed) * tones.length) % tones.length];
    if (along) g.fillRect(x + i * board, y, Math.min(board, x + w - (x + i * board)), h);
    else g.fillRect(x, y + i * board, w, Math.min(board, y + h - (y + i * board)));
    g.fillStyle = "rgba(70,54,38,0.5)";
    if (along) g.fillRect(x + i * board, y, 0.012, h);
    else g.fillRect(x, y + i * board, w, 0.012);
  }
  const cs = ["#cdbb98", "#8a7457", "#bfa983"];
  strokes(g, seed + 3, x, y, w, h, cs, Math.round(w * h * 26), 0.4, 0.025, along ? Math.PI / 2 : 0, 0.4);
  paper(g, x, y, w, h, tooth);
}

// whitewash over the rectangle x, y, w, h: the lime's white with its warm grey under it showing in dry strokes, the
// paper's tooth
function whitewash(g, seed, x, y, w, h, tooth = 0.8) {
  g.fillStyle = "#e6dfcf";
  g.fillRect(x, y, w, h);
  strokes(g, seed, x, y, w, h, ["#f3eee2", "#d4cab5", "#ece5d6", "#cbbfa8"], Math.round(w * h * 40), 0.35, 0.05, 0, 0.45);
  paper(g, x, y, w, h, tooth);
}

return { rnd, strokes, paper, hewn, planks, whitewash };
