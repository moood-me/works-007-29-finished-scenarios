// What the hut's paintings share: the palette, a wall of hewn logs seen from inside, a run of floor boards, a strip
// of woven red border. Everything in metres of the painting that calls it, y down. Painted in daylight colours: the
// lamp, the stove's fire and the window lay the evening.

const C = {
  log: "#9a7a58",
  logDark: "#6e5238",
  logLight: "#b8966e",
  tow: "#c9b48a",
  board: "#a88a64",
  boardDark: "#7e6446",
  linen: "#efe8da",
  linenShade: "#d8cfbe",
  red: "#b2302a",
  redDark: "#7e2420",
  lime: "#eeeae2",
  limeShade: "#d6d0c4",
  soot: "#3a3430",
  copper: "#c0703a",
  copperLight: "#e8a868",
  copperDark: "#7a3e1e",
  iron: "#34302c",
};

// a wall of hewn logs from inside, from x0 to x1, from y0 (top) to y1 (bottom), each `log` metres high: the logs
// hewn flat inside and darkened by years of the stove, each its own warm shade, lighter along its rounded top, the
// tow in the seams pale; long cracks along them, a knot here and there
const LOG_SHADES = ["#9a7a58", "#8e6f4f", "#a3825e", "#93744f", "#87694a", "#9e7d5a"];
function logs(g, x0, x1, y0, y1, log, rnd) {
  g.fillStyle = C.log;
  g.fillRect(x0, y0, x1 - x0, y1 - y0);
  for (let y = y1; y > y0 + 0.01; y -= log) {
    const top = Math.max(y0, y - log);
    g.fillStyle = LOG_SHADES[Math.floor(rnd() * LOG_SHADES.length)];
    g.fillRect(x0, top, x1 - x0, y - top);
    g.fillStyle = "rgba(214,190,150,0.35)";
    g.fillRect(x0, top + log * 0.1, x1 - x0, log * 0.2);
    g.fillStyle = "rgba(80,58,38,0.2)";
    g.fillRect(x0, top + log * 0.66, x1 - x0, log * 0.22);
    // the seam: a dark line and the pale tow pressed in it
    g.fillStyle = C.logDark;
    g.fillRect(x0, y - log * 0.09, x1 - x0, log * 0.09);
    g.fillStyle = C.tow;
    for (let k = 0; k < (x1 - x0) / 0.5; k++) g.fillRect(x0 + rnd() * (x1 - x0), y - log * 0.07, 0.12 + rnd() * 0.35, log * 0.04);
    g.fillStyle = C.logDark;
    for (let k = 0; k < (x1 - x0) / 1.2; k++) {
      const cx = x0 + rnd() * (x1 - x0), w = Math.min(0.3 + rnd() * 0.9, x1 - cx);
      g.fillRect(cx, top + log * (0.35 + rnd() * 0.3), w, 0.012);
    }
    for (let k = 0; k < (x1 - x0) / 3; k++) {
      g.beginPath();
      g.ellipse(x0 + rnd() * (x1 - x0), top + log * 0.5, 0.03, 0.022, 0, 0, Math.PI * 2);
      g.fill();
    }
  }
}

// boards side by side from x0 to x1, each `w` wide, along y from y0 to y1: each its own shade, a dark line between,
// the grain
const BOARD_SHADES = ["#a88a64", "#9c7f5b", "#b0916a", "#a2845f", "#96795a"];
function boards(g, x0, x1, y0, y1, w, rnd) {
  for (let x = x0; x < x1 - 0.001; x += w) {
    const ww = Math.min(w, x1 - x);
    g.fillStyle = BOARD_SHADES[Math.floor(rnd() * BOARD_SHADES.length)];
    g.fillRect(x, y0, ww, y1 - y0);
    g.fillStyle = "rgba(90,66,44,0.18)";
    for (let k = 0; k < 3; k++) g.fillRect(x + ww * (0.2 + rnd() * 0.6), y0, 0.008, y1 - y0);
    g.fillStyle = C.boardDark;
    g.fillRect(x, y0, 0.012, y1 - y0);
  }
}

// a woven red border on linen, from x0 to x1 at y, `h` high: two red lines and a row of little diamonds between
function border(g, x0, x1, y, h) {
  g.fillStyle = C.red;
  g.fillRect(x0, y, x1 - x0, h * 0.16);
  g.fillRect(x0, y + h * 0.84, x1 - x0, h * 0.16);
  const s = h * 0.32;
  for (let x = x0 + s; x < x1 - s * 0.5; x += s * 2.2) {
    g.beginPath();
    g.moveTo(x, y + h * 0.5 - s);
    g.lineTo(x + s, y + h * 0.5);
    g.lineTo(x, y + h * 0.5 + s);
    g.lineTo(x - s, y + h * 0.5);
    g.closePath();
    g.fill();
  }
}

return { C, logs, boards, border };
