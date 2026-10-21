// The Ivanovs' izba — what its paintings share: the gouache's touch, the same as the yard's (broad dry dabs with ragged
// edges over a flat ground, the tooth of rough paper under the paint, no direction in it), and the room's own surfaces:
// walls of hewn logs, scrubbed boards, the stove's whitewash.

// a steady random 0…1, the n-th of a seed
const rnd = (n, seed) => anim.hash(n, seed);

// a field of dry strokes over the rectangle x, y, w, h: `n` of them, each `len` long and `wid` wide, mostly along
// `angle` (radians), in the colours given (picked at random), each laid at `alpha` — each a ragged-edged dab, thicker
// where the brush came down, dry and broken where it lifted
function strokes(g, seed, x, y, w, h, colors, n, len, wid, angle = 0, alpha = 0.35) {
  const was = g.globalAlpha;
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
  g.globalAlpha = was;
}

// the tooth of rough paper: a tile of 128 × 128 of its grain — pale specks where the dry paint skipped the paper's tops,
// darker pits where it pooled, in two sizes and no direction (a fibre hashed along the rows read as diagonal scratches)
// — the same every time (hashed, not random), in a canvas of the painting's own
const TILE = 128;
function paperOf() {
  const c = new OffscreenCanvas(TILE, TILE), t = c.getContext("2d"), img = t.createImageData(TILE, TILE), d = img.data;
  for (let yy = 0; yy < TILE; yy++) {
    for (let xx = 0; xx < TILE; xx++) {
      const i = (yy * TILE + xx) * 4;
      // (a grain of two sizes, periodic across the tile's edges, no direction)
      const big = anim.hash(((xx >> 2) % (TILE >> 2)) * 977 + ((yy >> 2) % (TILE >> 2)), 7);
      const small = anim.hash(xx * 131 + yy * 7919, 11);
      const v = 0.55 * small + 0.45 * big;
      if (v > 0.7) {
        d[i] = 250; d[i + 1] = 246; d[i + 2] = 236; d[i + 3] = Math.round(255 * Math.min(0.4, (v - 0.7) * 1.8));
      } else if (v < 0.28) {
        d[i] = 70; d[i + 1] = 58; d[i + 2] = 44; d[i + 3] = Math.round(255 * Math.min(0.22, (0.28 - v) * 1.1));
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
// are hewn flat, honey-brown and darkened with years, each a band with a darker lower edge and the caulked seam under
// it, broad dry dabs along the grain; `tooth` — the paper's tile (about a fifth of the distance it is seen from)
function hewn(g, seed, x0, x1, height, log = 0.25, tooth = 0.9) {
  g.fillStyle = "#8a7a60";
  g.fillRect(x0, -height, x1 - x0, height);
  g.save();
  g.beginPath();
  g.rect(x0, -height, x1 - x0, height);
  g.clip();
  for (let i = 0, y = 0; y > -height; i++, y -= log) {
    g.fillStyle = ["#ab9a7a", "#a19072", "#b3a282", "#9b8a6c"][i % 4];
    g.fillRect(x0, y - log + 0.018, x1 - x0, log - 0.036);
    g.fillStyle = "rgba(70,52,34,0.5)";
    g.fillRect(x0, y - 0.034, x1 - x0, 0.034);
    g.fillStyle = "rgba(160,140,104,0.55)";
    g.fillRect(x0, y - 0.013, x1 - x0, 0.013);
    strokes(g, seed + i * 7, x0, y - log + 0.035, x1 - x0, log - 0.07, ["#c2b192", "#8f7e62", "#b8a888"], Math.round((x1 - x0) * 2.2), 0.6, 0.09, 0, 0.3);
  }
  g.restore();
  paper(g, x0, -height, x1 - x0, height, tooth, 0.4);
}

// boards over the rectangle x, y, w, h — running along y (`along` true) or along x — each `board` wide, in near
// tones, a dark seam between them, broad dabs along the grain, the paper's tooth `tooth` metres a tile
function planks(g, seed, x, y, w, h, board, tones, along, tooth = 0.7) {
  const n = Math.ceil((along ? w : h) / board);
  for (let i = 0; i < n; i++) {
    g.fillStyle = tones[Math.floor(rnd(i, seed) * tones.length) % tones.length];
    if (along) g.fillRect(x + i * board, y, Math.min(board, x + w - (x + i * board)), h);
    else g.fillRect(x, y + i * board, w, Math.min(board, y + h - (y + i * board)));
    g.fillStyle = "rgba(70,54,38,0.45)";
    if (along) g.fillRect(x + i * board, y, 0.012, h);
    else g.fillRect(x, y + i * board, w, 0.012);
  }
  g.save();
  g.beginPath();
  g.rect(x, y, w, h);
  g.clip();
  strokes(g, seed + 3, x, y, w, h, ["#c9b590", "#8f7959", "#b9a27c"], Math.round(w * h * 7), 0.5, 0.07, along ? Math.PI / 2 : 0, 0.3);
  g.restore();
  paper(g, x, y, w, h, tooth, 0.4);
}

// whitewash over the rectangle x, y, w, h: the lime's warm white, its grey under it showing in broad dry dabs, the
// paper's tooth
function whitewash(g, seed, x, y, w, h, tooth = 0.6) {
  g.fillStyle = "#ece4d2";
  g.fillRect(x, y, w, h);
  g.save();
  g.beginPath();
  g.rect(x, y, w, h);
  g.clip();
  strokes(g, seed, x, y, w, h, ["#f6f1e6", "#d9ceb8", "#e2d8c4"], Math.round(w * h * 12), 0.45, 0.1, 0, 0.4);
  g.restore();
  paper(g, x, y, w, h, tooth, 0.45);
}

// an arch (a stove's mouth, a niche): from x0 to x1, its foot at y0 (y down), its springing `side` up and its crown
// `rise` over that
function arch(g, x0, x1, y0, side, rise) {
  const m = (x0 + x1) / 2;
  g.beginPath();
  g.moveTo(x0, y0);
  g.lineTo(x0, y0 - side);
  g.bezierCurveTo(x0, y0 - side - rise * 1.3, x1, y0 - side - rise * 1.3, x1, y0 - side);
  g.lineTo(x1, y0);
  g.closePath();
  return m;
}

return { rnd, strokes, paper, hewn, planks, whitewash, arch };
