// What the yard's paintings share: the palette, a cap of snow along an edge, a wall of logs, a wisp of blown snow.
// Everything in metres of the painting that calls it, y down.

// the world's palette: snow and its blue hollows, weathered wood, the warm few
const C = {
  snow: "#eaf0f7",
  snowShade: "#c4d2e6",
  snowDeep: "#a9bcd8",
  wood: "#837a70",
  woodDark: "#5a5048",
  woodLight: "#a19a90",
  woodGrey: "#9a9188",
  seam: "#463e37",
  trim: "#e6e1d6",
  iron: "#3b3936",
};

// a cap of snow lying along a top edge from x0 to x1 at y: thicker in the middle, its underside a little wavy, its
// ends rounded off; `seed` makes each cap its own
function snowCap(g, x0, x1, y, thick, seed) {
  const n = Math.max(3, Math.round((x1 - x0) / 0.35));
  g.fillStyle = C.snow;
  g.beginPath();
  g.moveTo(x0 - thick * 0.3, y + thick * 0.15);
  for (let i = 0; i <= n; i++) {
    const u = i / n, x = x0 + (x1 - x0) * u, bump = 0.75 + 0.35 * Math.sin(seed * 7.1 + i * 2.3) * Math.sin(seed * 3.3 + i * 1.1);
    g.lineTo(x, y - thick * bump * (0.55 + 0.45 * Math.sin(Math.PI * u)));
  }
  g.lineTo(x1 + thick * 0.3, y + thick * 0.15);
  for (let i = n; i >= 0; i--) {
    const u = i / n, x = x0 + (x1 - x0) * u;
    g.lineTo(x, y + thick * (0.18 + 0.12 * Math.sin(seed * 5.7 + i * 3.1)));
  }
  g.closePath();
  g.fill();
  // (its underside a shade bluer)
  g.fillStyle = C.snowShade;
  g.fillRect(x0, y + thick * 0.02, x1 - x0, thick * 0.1);
}

// a wall of horizontal logs from x0 to x1, from y0 (top) to y1 (bottom), each `log` metres high: each log its own
// weathered shade (silver-grey to brown), lighter along its round top, a dark seam of moss and shadow under it, long
// cracks along it and here and there a knot
const LOG_SHADES = ["#8e8170", "#9a8c79", "#857868", "#a39582", "#7f7466", "#958673"];
function logs(g, x0, x1, y0, y1, log, rnd) {
  g.fillStyle = C.wood;
  g.fillRect(x0, y0, x1 - x0, y1 - y0);
  for (let y = y1; y > y0 + 0.01; y -= log) {
    const top = Math.max(y0, y - log);
    // the log's body, its own shade; its round top lighter, its belly darker
    g.fillStyle = LOG_SHADES[Math.floor(rnd() * LOG_SHADES.length)];
    g.fillRect(x0, top, x1 - x0, y - top);
    g.fillStyle = "rgba(196,186,170,0.45)";
    g.fillRect(x0, top + log * 0.14, x1 - x0, log * 0.22);
    g.fillStyle = "rgba(70,58,48,0.22)";
    g.fillRect(x0, top + log * 0.62, x1 - x0, log * 0.26);
    // the seam: moss and shadow
    g.fillStyle = C.seam;
    g.fillRect(x0, y - log * 0.12, x1 - x0, log * 0.12);
    g.fillStyle = "rgba(98,104,78,0.6)";
    for (let k = 0; k < (x1 - x0) / 0.9; k++) g.fillRect(x0 + rnd() * (x1 - x0), y - log * 0.13, 0.15 + rnd() * 0.4, log * 0.05);
    // the cracks along it, a knot now and then
    g.fillStyle = C.woodDark;
    for (let k = 0; k < (x1 - x0) / 1.0; k++) {
      const cx = x0 + rnd() * (x1 - x0), w = Math.min(0.4 + rnd() * 1.1, x1 - cx);
      g.fillRect(cx, top + log * (0.35 + rnd() * 0.3), w, 0.014);
    }
    for (let k = 0; k < (x1 - x0) / 3; k++) {
      g.beginPath();
      g.ellipse(x0 + rnd() * (x1 - x0), top + log * 0.5, 0.035, 0.025, 0, 0, Math.PI * 2);
      g.fill();
    }
  }
}

// the round ends of the logs at a corner, at x, from y0 to y1, sticking out `out` metres
function logEnds(g, x, y0, y1, log, out) {
  for (let y = y1 - log / 2; y > y0; y -= log) {
    g.fillStyle = C.woodDark;
    g.beginPath();
    g.ellipse(x, y, out, log * 0.5, 0, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = "#aaa194";
    g.beginPath();
    g.ellipse(x, y, out * 0.72, log * 0.38, 0, 0, Math.PI * 2);
    g.fill();
  }
}

// a wisp of snow blown low along the ground: a long thin streak, soft on every side (see-through, no hard edge),
// from x to x + len at height y, a few finer threads along it
function wisp(g, x, y, len, thick, alpha) {
  const cx = x + len / 2;
  g.save();
  g.translate(cx, y);
  g.scale(len / 2, thick);
  const soft = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  soft.addColorStop(0, `rgba(242,246,252,${alpha})`);
  soft.addColorStop(0.55, `rgba(242,246,252,${alpha * 0.55})`);
  soft.addColorStop(1, "rgba(242,246,252,0)");
  g.fillStyle = soft;
  g.beginPath();
  g.arc(0, 0, 1, 0, Math.PI * 2);
  g.fill();
  g.restore();
}

// a band of ground wind over a layer's box [x0, y0, x1, y1] (y1 the ground): `n` wisps, each painted again a box's
// width to either side so the layer wraps as it drifts
function groundWind(c, rnd, box, n, lenMin, lenMax, thickMin, thickMax, aMin, aMax) {
  const [x0, y0, x1] = box, W = x1 - x0;
  for (let i = 0; i < n; i++) {
    const x = x0 + rnd() * W;
    const y = -0.03 + (y0 + thickMax + 0.04) * rnd() ** 1.6;
    const len = lenMin + rnd() * (lenMax - lenMin);
    const thick = thickMin + rnd() * (thickMax - thickMin);
    const alpha = aMin + rnd() * (aMax - aMin);
    for (const dx of [-W, 0, W]) {
      if (x + dx + len < x0 || x + dx > x1) continue;
      wisp(c, x + dx, y, len, thick, alpha);
    }
  }
}

return { C, snowCap, logs, logEnds, wisp, groundWind };
