// What the stream's scene shares: the stream's line (where its middle is `d` metres ahead, how wide it is there), the
// land's shape round it (the valley floor, the slope of young oaks rising behind, the channel the water cut) — read by
// the relief, the land's and the water's paintings and tools/stream-copies.mjs — and the young oak the wood is
// painted of.
const smooth = (a, b, v) => anim.ease.smooth(anim.span(v, a, b));
// the stream's middle, metres right of the view's line: in from the lower left, winding to the middle of the view and
// up into the oaks
function streamX(d) {
  return -4.8 + 5.0 * smooth(-4, 30, d) + 0.9 * Math.sin(d / 4.5) * anim.span(d, 2, 30) + 0.8 * Math.sin((d - 30) / 15) * anim.span(d, 30, 60);
}
// its width there: narrowing up the slope, wider and narrower as it winds
function streamW(d) {
  return (2.4 - 1.1 * anim.span(d, 0, 40)) * (1 + 0.22 * Math.sin(d / 3.7));
}
// the slope over the valley: level where the viewer stands, rising from 22 m ahead to a long ridge 46 m high 230 m off
function slope(across, d) {
  return 46 * smooth(22, 230, d) * (0.84 + 0.16 * Math.sin(across / 70));
}
// the channel: 0.62 m deep in the middle, its banks easing up to the land
function channel(across, d) {
  const w = streamW(d) / 2;
  return 0.62 * (1 - smooth(w - 0.25, w + 0.7, Math.abs(across - streamX(d))));
}
function ground(across, d) {
  return slope(across, d) - channel(across, d);
}
// the water's level (the valley floor's 0 less), the channel's bed under it
const WATER = -0.32;

// A young oak, six years old, as the scene's flat style has it: a thin dark trunk and limbs, a crown of straight-edged
// lobes in grey-green — darker under, paler where it is open to the sky. o: h (its height), w (the crown's half-width),
// lean (metres the crown stands right of the root), at (where its root is, across the card), wind (the crown a layer
// that sways: its strength; 0 — painted with the trunk). Its own randomness is the element's (e.rnd).
function oak(g, e, o) {
  const R = () => e.rnd(), x0 = o.at ?? 0, cx = x0 + o.lean, cy = -o.h * 0.62, ry = o.h * 0.33;
  g.lineCap = "round";
  g.lineJoin = "round";
  g.strokeStyle = "#4b4235";
  g.lineWidth = 0.05 + o.h * 0.012;
  g.beginPath();
  g.moveTo(x0, 0);
  g.quadraticCurveTo(x0 + o.lean * 0.2, -o.h * 0.25, cx, -o.h * 0.48);
  g.stroke();
  g.lineWidth = 0.03 + o.h * 0.006;
  for (let i = 0; i < 3; i++) {
    const from = -o.h * (0.26 + i * 0.07), side = i % 2 ? 1 : -1;
    g.beginPath();
    g.moveTo(x0 + o.lean * (0.3 + i * 0.15), from);
    g.lineTo(cx + side * o.w * (0.35 + R() * 0.25), from - o.h * (0.14 + R() * 0.08));
    g.stroke();
  }
  const lobe = (g, x, y, r, colour) => {
    g.fillStyle = colour;
    g.beginPath();
    for (let k = 0; k < 7; k++) {
      const a = (k / 7) * Math.PI * 2 + R() * 0.5, q = r * (0.82 + R() * 0.3);
      g.lineTo(x + Math.cos(a) * q * 1.15, y + Math.sin(a) * q * 0.9);
    }
    g.closePath();
    g.fill();
  };
  const crown = (g) => {
    const n = 7 + Math.floor(R() * 3), spots = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + R() * 0.6, rr = 0.55 + R() * 0.35;
      spots.push([cx + Math.cos(a) * o.w * 0.55 * rr, cy + Math.sin(a) * ry * 0.6 * rr, o.w * (0.46 + R() * 0.2)]);
    }
    const draw = (paint, lift, k) => {
      for (const [x, y, r] of spots) {
        if (lift < 0 && y > cy + ry * 0.15) continue;
        lobe(g, x + lift * r * 0.15, y + lift * r * 0.25, r * k, paint);
      }
    };
    draw("#5a6650", 0.4, 1.0);
    draw("#74805f", 0, 0.88);
    draw("#929d7c", -1, 0.55);
  };
  if (o.wind) e.layer(`crown${x0}`, { pivot: [cx, -o.h * 0.5], wind: { strength: o.wind, gust: 0.4 } }, crown);
  else crown(g);
}

return { streamX, streamW, slope, channel, ground, WATER, oak };
