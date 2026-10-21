// The Ivanovs' yard — what its paintings and its land share: the railway embankment's height (the line rises to the
// right, toward the crossing), and the gouache's touch — short dry strokes of near tones over a flat ground, as a brush
// leaves them on rough paper.

// the embankment's top over the ground at `across` (metres): 0.7 m on the left by the station's side, rising from
// across −12 to 12 to 1.5 m at the crossing
const rise = (across) => 0.7 + 0.8 * anim.ease.smooth(anim.span(across, -12, 12));
// how much of the embankment's height stands at `distance`: its near slope 13.4…14.9, its top to 17.1, its far slope to 18.6
const ridge = (distance) => anim.span(distance, 13.4, 14.9) - anim.span(distance, 17.1, 18.6);
// where the two rails lie (metres ahead) and how high a rail stands over the ballast
const RAILS = [15.24, 16.76];
const RAIL = 0.15;

// a steady random 0…1, the n-th of a seed
const rnd = (n, seed) => anim.hash(n, seed);

// a field of dry strokes over the rectangle x, y, w, h: `n` of them, each `len` long and `wid` wide, mostly along
// `angle` (radians), in the colours given (picked at random), each laid at `alpha`
function strokes(g, seed, x, y, w, h, colors, n, len, wid, angle = 0, alpha = 0.35) {
  const was = g.globalAlpha;
  g.globalAlpha = alpha;
  for (let i = 0; i < n; i++) {
    const cx = x + w * rnd(i, seed), cy = y + h * rnd(i, seed + 1), a = angle + (rnd(i, seed + 2) - 0.5) * 0.4;
    const l = len * (0.5 + rnd(i, seed + 3)), ww = wid * (0.6 + 0.8 * rnd(i, seed + 4));
    g.fillStyle = colors[Math.floor(rnd(i, seed + 5) * colors.length) % colors.length];
    if (angle === 0) {
      g.fillRect(cx - l / 2, cy - ww / 2, l, ww);
      continue;
    }
    g.save();
    g.translate(cx, cy);
    g.rotate(a);
    g.fillRect(-l / 2, -ww / 2, l, ww);
    g.restore();
  }
  g.globalAlpha = was;
}

// a wall of horizontal logs from x0 to x1, its foot at y 0 and its top at −top (metres, y down): each log a band with
// a darker lower edge and the gaps between them caulked with moss
function logs(g, seed, x0, x1, top, log = 0.26) {
  g.fillStyle = "#8f846f";
  g.fillRect(x0, -top, x1 - x0, top);
  for (let i = 0, y = 0; y > -top; i++, y -= log) {
    const tone = ["#9b8f78", "#93876f", "#a39680", "#8a7e68"][i % 4];
    g.fillStyle = tone;
    g.fillRect(x0, y - log + 0.02, x1 - x0, log - 0.04);
    g.fillStyle = "rgba(60,52,40,0.45)";
    g.fillRect(x0, y - 0.035, x1 - x0, 0.035);
    g.fillStyle = "rgba(120,118,80,0.5)";
    g.fillRect(x0, y - 0.012, x1 - x0, 0.012);
    strokes(g, seed + i * 7, x0, y - log + 0.03, x1 - x0, log - 0.07, ["#b1a58c", "#7d725e", "#a0947c", "#c2b69c"], Math.round((x1 - x0) * 5), 0.45, 0.03, 0, 0.42);
  }
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
// a dull grey
function rail(g) {
  const edge = (lift) => {
    for (let x = -64; x <= 64; x += 1) g.lineTo(x, -rise(x) - lift);
  };
  const back = (lift) => {
    for (let x = 64; x >= -64; x -= 1) g.lineTo(x, -rise(x) - lift);
  };
  g.fillStyle = "#7a5b48";
  g.beginPath();
  g.moveTo(-64, -rise(-64) + 0.01);
  edge(RAIL);
  back(-0.01);
  g.closePath();
  g.fill();
  g.fillStyle = "#a39c94";
  g.beginPath();
  g.moveTo(-64, -rise(-64) - RAIL);
  edge(RAIL);
  back(RAIL - 0.03);
  g.closePath();
  g.fill();
}

// the steps' risers, the porch's planks: boards across a rectangle x, y, w, h (y down), each `board` high, in near tones
function boards(g, seed, x, y, w, h, board, tones) {
  for (let i = 0, yy = y; yy < y + h - 0.001; i++, yy += board) {
    g.fillStyle = tones[Math.floor(rnd(i, seed) * tones.length) % tones.length];
    g.fillRect(x, yy, w, Math.min(board, y + h - yy) - 0.012);
  }
  strokes(g, seed + 1, x, y, w, h, ["#b8a888", "#6f604c"], Math.round(w * h * 30), 0.3, 0.015, 0, 0.3);
}

return { rise, ridge, RAILS, RAIL, rnd, strokes, logs, windowFrame, rail, boards };
