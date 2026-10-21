// What the yard's paintings share: the palette, a cap of snow along an edge, a wall of logs, a wisp of blown snow.
// Everything in metres of the painting that calls it, y down.

// the world's palette: snow and its blue hollows, weathered wood, the warm few
const C = {
  snow: "#e9eef4",
  snowShade: "#c9d4e2",
  snowDeep: "#b4c2d6",
  wood: "#8a7763",
  woodDark: "#5f4f40",
  woodLight: "#a8957e",
  woodGrey: "#9a9188",
  seam: "#4a3d31",
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

// a wall of horizontal logs from x0 to x1, from y0 (top) to y1 (bottom), each `log` metres high: each log a band with
// a darker seam under it and a few cracks along it
function logs(g, x0, x1, y0, y1, log, rnd) {
  g.fillStyle = C.wood;
  g.fillRect(x0, y0, x1 - x0, y1 - y0);
  for (let y = y1; y > y0 + 0.01; y -= log) {
    const top = Math.max(y0, y - log);
    // a log: lighter along its upper middle, a dark seam of moss and shadow at its foot
    g.fillStyle = rnd() < 0.5 ? C.woodLight : "#9c8973";
    g.fillRect(x0, top + log * 0.18, x1 - x0, log * 0.32);
    g.fillStyle = C.seam;
    g.fillRect(x0, y - log * 0.12, x1 - x0, log * 0.12);
    g.fillStyle = C.woodDark;
    for (let k = 0; k < (x1 - x0) / 1.4; k++) {
      const cx = x0 + rnd() * (x1 - x0), w = 0.4 + rnd() * 0.9;
      g.fillRect(cx, top + log * (0.4 + rnd() * 0.3), w, 0.012);
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
    g.fillStyle = "#b29c80";
    g.beginPath();
    g.ellipse(x, y, out * 0.72, log * 0.38, 0, 0, Math.PI * 2);
    g.fill();
  }
}

// a wisp of snow blown low along the ground: a long thin soft streak, see-through, from x to x + len at height y
function wisp(g, x, y, len, thick, alpha) {
  const grad = g.createLinearGradient(x, 0, x + len, 0);
  grad.addColorStop(0, "rgba(240,244,250,0)");
  grad.addColorStop(0.3, `rgba(240,244,250,${alpha})`);
  grad.addColorStop(0.7, `rgba(240,244,250,${alpha * 0.8})`);
  grad.addColorStop(1, "rgba(240,244,250,0)");
  g.fillStyle = grad;
  g.beginPath();
  g.ellipse(x + len / 2, y, len / 2, thick, 0, 0, Math.PI * 2);
  g.fill();
}

return { C, snowCap, logs, logEnds, wisp };
