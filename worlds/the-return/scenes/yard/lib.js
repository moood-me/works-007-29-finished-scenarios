// The Ivanovs' yard — what its paintings and its land share: the railway embankment (the line rises to the right, toward
// the crossing at the top of the rise, and the dirt road climbs a long ramp up to it), and the gouache's touch — dry
// strokes with ragged edges over a flat ground, and the tooth of rough paper showing through the paint.

// the embankment's top over the yard at `across` (metres): 1.3 m on the left, by the station's side, rising to 2.6 m at
// the crossing (across 8.5) and level beyond it
const top = (across) => 1.3 + 1.3 * anim.ease.smooth(anim.span(across, -16, 8.5));
// how far the road's ramp reaches toward the eye at `across`: 0 off the road, 1 across it (7.8 … 10.2)
const ramp = (across) => anim.span(across, 6.8, 7.8) - anim.span(across, 10.2, 11.2);
// how much of the embankment's height stands at `distance` (and `across`): its near slope from 14 to 15.6 — where the
// road climbs, from 9 — its top to 17.8, its far slope to 19.6
const ridge = (across, distance) => anim.ease.smooth(anim.span(distance, 14 - 5 * ramp(across), 15.6)) - anim.span(distance, 17.8, 19.6);
// where the two rails lie (metres ahead), how high a rail stands over the ballast, where the crossing is (across)
const RAILS = [16.2, 17.2];
const RAIL = 0.15;
const CROSSING = [7.8, 10.2];

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
// of the distance it is seen from, in metres; 0.17 stage heights on the sky
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

// a wall of horizontal logs from x0 to x1, its foot at y 0 and its top at −height (metres, y down): each log a band
// with a darker lower edge and the gaps between them caulked with moss, the brush dry along the grain, the paper's tooth
// `tooth` metres a tile (as far as the wall is seen from: about a fifth of its distance)
function logs(g, seed, x0, x1, height, log = 0.26, tooth = 1.4) {
  g.fillStyle = "#8f846f";
  g.fillRect(x0, -height, x1 - x0, height);
  for (let i = 0, y = 0; y > -height; i++, y -= log) {
    const tone = ["#a09379", "#958870", "#a89a81", "#8c8069"][i % 4];
    g.fillStyle = tone;
    g.fillRect(x0, y - log + 0.02, x1 - x0, log - 0.04);
    g.fillStyle = "rgba(60,52,40,0.5)";
    g.fillRect(x0, y - 0.04, x1 - x0, 0.04);
    g.fillStyle = "rgba(120,118,80,0.55)";
    g.fillRect(x0, y - 0.014, x1 - x0, 0.014);
    strokes(g, seed + i * 7, x0, y - log + 0.03, x1 - x0, log - 0.07, ["#bcae93", "#7a6f5b", "#a1957d", "#cbbfa4"], Math.round((x1 - x0) * 4), 0.5, 0.04, 0, 0.5);
  }
  paper(g, x0, -height, x1 - x0, height, tooth);
}

// a window in a log wall, its middle at x, its sill at `sill` and its top at `top` metres up: a carved white-blue frame
// (nalichnik) round four panes of dark glass with the sky's pale in their upper halves
function windowFrame(g, x, sill, top, w = 0.78) {
  const h = top - sill;
  g.fillStyle = "#c9d2d2";
  g.fillRect(x - w / 2 - 0.12, -top - 0.18, w + 0.24, h + 0.32);
  g.beginPath();
  g.moveTo(x - w / 2 - 0.16, -top - 0.18);
  g.lineTo(x, -top - 0.42);
  g.lineTo(x + w / 2 + 0.16, -top - 0.18);
  g.closePath();
  g.fill();
  g.fillStyle = "#e1e6e2";
  g.fillRect(x - w / 2 - 0.2, -sill + 0.06, w + 0.4, 0.08);
  g.fillStyle = "#39434a";
  g.fillRect(x - w / 2, -top, w, h);
  g.fillStyle = "#7f8f97";
  g.fillRect(x - w / 2, -top, w, h * 0.42);
  g.fillStyle = "#c9d2d2";
  g.fillRect(x - 0.025, -top, 0.05, h);
  g.fillRect(x - w / 2, -top + h * 0.45, w, 0.045);
  g.fillStyle = "#9aa6a8";
  for (let i = 0; i < 5; i++) g.fillRect(x - w / 2 - 0.08 + i * ((w + 0.16) / 4) - 0.02, -top - 0.3 + (i % 2) * 0.05, 0.04, 0.08);
}

// a rail on a card that stands where it lies, across 0, facing the eye, "onLand": false (painted in the land's own
// metres): from 64 m left to 64 m right, its foot on the embankment's top as the line rises — rusty iron, its worn top
// a pale steel catching the evening
function rail(g) {
  const edge = (lift) => {
    for (let x = -64; x <= 64; x += 1) g.lineTo(x, -top(x) - lift);
  };
  const back = (lift) => {
    for (let x = 64; x >= -64; x -= 1) g.lineTo(x, -top(x) - lift);
  };
  g.fillStyle = "#6e4c3a";
  g.beginPath();
  g.moveTo(-64, -top(-64) + 0.01);
  edge(RAIL);
  back(-0.01);
  g.closePath();
  g.fill();
  g.fillStyle = "#c9c3b8";
  g.beginPath();
  g.moveTo(-64, -top(-64) - RAIL);
  edge(RAIL);
  back(RAIL - 0.035);
  g.closePath();
  g.fill();
}

// the steps' risers, the porch's planks: boards across a rectangle x, y, w, h (y down), each `board` high, in near
// tones, the paper's tooth `tooth` metres a tile
function boards(g, seed, x, y, w, h, board, tones, tooth = 1.3) {
  for (let i = 0, yy = y; yy < y + h - 0.001; i++, yy += board) {
    g.fillStyle = tones[Math.floor(rnd(i, seed) * tones.length) % tones.length];
    g.fillRect(x, yy, w, Math.min(board, y + h - yy) - 0.012);
  }
  strokes(g, seed + 1, x, y, w, h, ["#bdae8e", "#6c5d49"], Math.round(w * h * 30), 0.3, 0.02, 0, 0.35);
  paper(g, x, y, w, h, tooth);
}

return { top, ramp, ridge, RAILS, RAIL, CROSSING, rnd, strokes, paper, logs, windowFrame, rail, boards };
