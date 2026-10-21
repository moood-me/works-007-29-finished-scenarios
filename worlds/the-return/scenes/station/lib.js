// The village station — what its paintings share: the world's gouache touch, as in the izba (dry strokes with ragged
// edges over a flat ground, kept inside what they paint; the tooth of rough paper as soft blots under the paint, never
// specks), and the station's own surfaces: clapboard painted railway ochre, weathered planks, brick.

// the line: it runs aslant through the station, from behind the eye's left (where the train comes from) away to the
// far left — `u` its direction (across, distance; a unit), `p0` a point on the main track's middle (metres); its right
// side, n = (u[1], −u[0]), is the platform's. A point `t` metres along it from p0 and `off` metres to its right is
// p0 + t·u + off·n: the station house's front stands 6.5 m right of it, its door 8 m along (`HOUSE`)
const LINE = { p0: [-3.2, 2.0], u: [-0.34, 0.94] };
const HOUSE = { door: 8, front: 6.5 };

// a steady random 0…1, the n-th of a seed
const rnd = (n, seed) => anim.hash(n, seed);

// a field of dry strokes over the rectangle x, y, w, h: `n` of them, each `len` long and `wid` wide, mostly along
// `angle` (radians), in the colours given (picked at random), each laid at `alpha` — each a ragged-edged dab, thicker
// where the brush came down, dry and broken where it lifted; kept inside the rectangle
function strokes(g, seed, x, y, w, h, colors, n, len, wid, angle = 0, alpha = 0.35) {
  g.save();
  g.beginPath();
  g.rect(x, y, w, h);
  g.clip();
  g.globalAlpha = alpha;
  for (let i = 0; i < n; i++) {
    const cx = x + w * rnd(i, seed), cy = y + h * rnd(i, seed + 1), a = angle + (rnd(i, seed + 2) - 0.5) * 0.4;
    const l = len * (0.5 + rnd(i, seed + 3)), ww = wid * (0.6 + 0.8 * rnd(i, seed + 4)), j = rnd(i, seed + 6);
    const c = Math.cos(a), s = Math.sin(a), hx = (c * l) / 2, hy = (s * l) / 2, nx = (-s * ww) / 2, ny = (c * ww) / 2;
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

// the tooth of rough paper: a small tile of soft mottling — paler patches where the dry paint skipped the paper's tops,
// a little darker where it pooled, a faint fibre — laid large and smoothed, so that it reads as the paper's grain under
// the gouache, never as specks (hashed: the same every time)
const TILE = 32;
function paperOf() {
  const c = new OffscreenCanvas(TILE, TILE), t = c.getContext("2d"), img = t.createImageData(TILE, TILE), d = img.data;
  for (let yy = 0; yy < TILE; yy++) {
    for (let xx = 0; xx < TILE; xx++) {
      const i = (yy * TILE + xx) * 4;
      const blot = anim.hash(xx * 977 + yy * 31, 7), fibre = anim.hash(((xx + (yy >> 1)) % TILE) + yy * 313, 13);
      const v = 0.75 * blot + 0.25 * fibre;
      if (v > 0.64) {
        d[i] = 248;
        d[i + 1] = 243;
        d[i + 2] = 232;
        d[i + 3] = Math.round(255 * Math.min(0.3, (v - 0.64) * 1.4));
      } else if (v < 0.3) {
        d[i] = 84;
        d[i + 1] = 70;
        d[i + 2] = 54;
        d[i + 3] = Math.round(255 * Math.min(0.16, (0.3 - v) * 0.8));
      }
    }
  }
  t.putImageData(img, 0, 0);
  return c;
}
// the paper's tooth laid over what is painted in the rectangle x, y, w, h (only over paint), one tile `size` × 2.5
// units across — `size` about a fifth of the distance the thing is seen from, in its units — at `alpha`
function paper(g, x, y, w, h, size, alpha = 1) {
  const s = size * 2.5;
  g.save();
  g.globalCompositeOperation = "source-atop";
  g.globalAlpha = alpha * 0.8;
  g.imageSmoothingEnabled = true;
  g.translate(x, y);
  g.scale(s / TILE, s / TILE);
  g.fillStyle = g.createPattern(paperOf(), "repeat");
  g.fillRect(0, 0, (w * TILE) / s, (h * TILE) / s);
  g.restore();
}

// boards over the rectangle x, y, w, h — upright (`upright` true: each `board` wide across x) or lying (each `board`
// high along y) — in near tones, a dark seam between them, dry strokes along the grain, the paper's tooth
function boards(g, seed, x, y, w, h, board, tones, upright, tooth = 1) {
  const n = Math.ceil((upright ? w : h) / board);
  for (let i = 0; i < n; i++) {
    g.fillStyle = tones[Math.floor(rnd(i, seed) * tones.length) % tones.length];
    if (upright) g.fillRect(x + i * board, y, Math.min(board, x + w - (x + i * board)), h);
    else g.fillRect(x, y + i * board, w, Math.min(board, y + h - (y + i * board)));
    g.fillStyle = "rgba(64,52,40,0.45)";
    if (upright) g.fillRect(x + i * board, y, board * 0.06, h);
    else g.fillRect(x, y + (i + 1) * board - board * 0.08, w, board * 0.08);
  }
  const cs = [tones[0], "#f0e6cc", "#6e604c"];
  strokes(g, seed + 3, x, y, w, h, cs, Math.round(w * h * 14) + 8, board * 2.2, board * 0.18, upright ? Math.PI / 2 : 0, 0.3);
  paper(g, x, y, w, h, tooth);
}

// a window in a wall, its middle at x, its sill at `sill` and its top at `top` metres up (y down): a white frame round
// four panes — the glass dark below, the misty sky's pale in its upper half — the sill board under it
function windowFrame(g, x, sill, top, w = 0.8) {
  const h = top - sill;
  g.fillStyle = "#e4e1d6";
  g.fillRect(x - w / 2 - 0.1, -top - 0.12, w + 0.2, h + 0.22);
  g.fillStyle = "#4a5156";
  g.fillRect(x - w / 2, -top, w, h);
  g.fillStyle = "#a9b3b5";
  g.fillRect(x - w / 2, -top, w, h * 0.45);
  g.fillStyle = "#e4e1d6";
  g.fillRect(x - 0.025, -top, 0.05, h);
  g.fillRect(x - w / 2, -top + h * 0.42, w, 0.045);
  g.fillStyle = "#d7d2c4";
  g.fillRect(x - w / 2 - 0.16, -sill + 0.06, w + 0.32, 0.07);
}

return { LINE, HOUSE, rnd, strokes, paper, boards, windowFrame };
