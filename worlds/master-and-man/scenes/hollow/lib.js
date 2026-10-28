// What the hollow's paintings share: the world's palette, a cap of snow along an edge, a wisp of blown snow, a band of
// ground wind, a stalk of wormwood.
// Everything in metres of the painting that calls it, y down.

// the world's palette: snow and its blue hollows, weathered wood, the warm few
const C = {
  snow: "#eaf0f7",
  snowShade: "#c4d2e6",
  snowDeep: "#a9bcd8",
  wood: "#6f6459",
  woodDark: "#4a4038",
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

// a stalk of wormwood (полынь) standing out of the snow at x, its foot at 0: a thin dry stem, bent by the wind,
// branching near its top into sprays of tiny dry seed heads; dark grey-brown, the heads a lighter ash
function wormwood(g, x, h, lean, rnd) {
  g.strokeStyle = "#4b4640";
  g.lineCap = "round";
  g.lineWidth = 0.012;
  const tipX = x + lean * h, tipY = -h;
  g.beginPath();
  g.moveTo(x, 0.02);
  g.quadraticCurveTo(x + lean * h * 0.2, -h * 0.55, tipX, tipY);
  g.stroke();
  // the sprays: short twigs off the top third, each with its seed heads
  const n = 4 + Math.floor(rnd() * 4);
  for (let i = 0; i < n; i++) {
    const u = 0.62 + 0.36 * (i / n);
    const sx = x + lean * h * (0.2 + 0.8 * u * u), sy = -h * u;
    const dir = i % 2 ? 1 : -1;
    const ex = sx + dir * (0.05 + rnd() * 0.08) + lean * 0.05, ey = sy - 0.04 - rnd() * 0.06;
    g.lineWidth = 0.007;
    g.strokeStyle = "#57514a";
    g.beginPath();
    g.moveTo(sx, sy);
    g.lineTo(ex, ey);
    g.stroke();
    g.fillStyle = "#8d877d";
    for (let k = 0; k < 5; k++) {
      const v = k / 4;
      g.beginPath();
      g.arc(sx + (ex - sx) * v, sy + (ey - sy) * v + 0.008, 0.009, 0, Math.PI * 2);
      g.fill();
    }
  }
}

return { C, snowCap, wisp, groundWind, wormwood };
