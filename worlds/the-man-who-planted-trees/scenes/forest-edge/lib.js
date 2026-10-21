// What the forest edge's scene shares: the stream's line (its middle `d` metres ahead, its width there), where the
// forest's edge runs, where the valley's brow runs, the land's shape (the meadow shelf the path runs on, the forest climbing to the left, the valley
// falling away to the right with the village on its floor, its far side rising) — read by the relief, the land's and
// the water's paintings and tools/forest-edge-copies.mjs — and the grown oak the forest is painted of.
const smooth = (a, b, v) => anim.ease.smooth(anim.span(v, a, b));
// the stream's middle, metres right of the view's line: in from the lower left, along the forest's edge, into the wood
function streamX(d) {
  return -6.2 + 4.6 * smooth(-4, 22, d) + 0.8 * Math.sin(d / 4.5) * anim.span(d, -2, 12) + 1.6 * smooth(22, 40, d);
}
// its width there
function streamW(d) {
  return (2.1 - 0.6 * anim.span(d, 0, 30)) * (1 + 0.2 * Math.sin(d / 3.3));
}
// the forest's edge, across: near, along the stream's far bank; from ~16 m it swings off to the right and back, up
// the hill and down into the valley. The forest is where across < edgeA(d).
function edgeA(d) {
  return streamX(d) - 2.6 + 0.4 * (d - 16) * smooth(12, 34, d);
}
// the brow: across where the meadow's shelf ends on the right, the valley's side falling from it
function browA(d) {
  return 2.9 + 0.12 * d;
}
// the land without the stream's channel: level where the people stand, on a shelf at the brow of the valley; the
// forest's hill rising to the left and back; to the right of the brow the valley's side falling, steep first, then
// easing to its floor 44 m down, where the village is — seen from the shelf over the brow; the far side rising from
// 700 m to a level 75 m up at 1400 m, where the far hills stand
function slope(across, d) {
  const inWood = edgeA(d) - across;
  const rise = (4 * smooth(0, 30, inWood) + 30 * smooth(40, 420, d) * smooth(0, 60, inWood)) * (1 - smooth(500, 900, d));
  const p = Math.max(0, across - browA(d));
  const q = p < 2 ? (p * p) / 4 : p - 1;
  const fall = -44 * (1 - Math.exp(-q / 25)) * (1 - smooth(700, 1300, d));
  return rise + fall + 75 * smooth(700, 1400, d);
}
// the channel: 0.6 m deep in the middle, its grassy banks easing up to the land
function channel(across, d) {
  const w = streamW(d) / 2;
  return 0.6 * (1 - smooth(w - 0.6, w + 1.6, Math.abs(across - streamX(d))));
}
function ground(across, d) {
  return slope(across, d) - channel(across, d);
}
// the water's level, the channel's bed under it
const WATER = -0.3;

// A grown oak, twenty years old, as the scene's flat style has it: a straight dark trunk bare to a third of its height,
// a few heavy limbs, a big crown of straight-edged lobes — darker under, paler on top (colour, not light: the scene's
// sun lights it). o: h (its height), w (the crown's half-width), lean (metres the crown stands right of the root), at
// (where its root is, across the card), wind (the crown a layer that sways: its strength; 0 — painted with the trunk).
// Its own randomness is the element's (e.rnd).
function oak(g, e, o) {
  const R = () => e.rnd(), x0 = o.at ?? 0, cx = x0 + o.lean, base = o.h * 0.36, cy = -o.h * 0.66, ry = o.h * 0.33;
  const tw = 0.13 + o.h * 0.014;
  g.fillStyle = "#463f35";
  g.beginPath();
  g.moveTo(x0 - tw, 0);
  g.lineTo(x0 - tw * 0.55 + o.lean * 0.5, -base - o.h * 0.1);
  g.lineTo(cx - tw * 0.3, -o.h * 0.62);
  g.lineTo(cx + tw * 0.3, -o.h * 0.62);
  g.lineTo(x0 + tw * 0.55 + o.lean * 0.5, -base - o.h * 0.1);
  g.lineTo(x0 + tw, 0);
  g.closePath();
  g.fill();
  g.strokeStyle = "#463f35";
  g.lineCap = "round";
  g.lineJoin = "round";
  for (let i = 0; i < 4; i++) {
    const from = -base - o.h * (0.04 + i * 0.07), side = i % 2 ? 1 : -1;
    g.lineWidth = tw * (0.7 - i * 0.1);
    g.beginPath();
    g.moveTo(x0 + o.lean * 0.4, from);
    g.quadraticCurveTo(cx + side * o.w * 0.3, from - o.h * 0.05, cx + side * o.w * (0.55 + R() * 0.25), from - o.h * (0.12 + R() * 0.08));
    g.stroke();
  }
  const lobe = (g, x, y, r, colour) => {
    g.fillStyle = colour;
    g.beginPath();
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2 + R() * 0.45, q = r * (0.8 + R() * 0.3);
      g.lineTo(x + Math.cos(a) * q * 1.12, y + Math.sin(a) * q * 0.86);
    }
    g.closePath();
    g.fill();
  };
  const crown = (g) => {
    const n = 11 + Math.floor(R() * 4), spots = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + R() * 0.5, rr = 0.45 + R() * 0.5;
      spots.push([cx + Math.cos(a) * o.w * 0.62 * rr, cy + Math.sin(a) * ry * 0.62 * rr, o.w * (0.36 + R() * 0.16)]);
    }
    spots.push([cx, cy, o.w * 0.55]);
    const draw = (paint, lift, k) => {
      for (const [x, y, r] of spots) {
        if (lift < 0 && y > cy + ry * 0.1) continue;
        lobe(g, x + lift * r * 0.12, y + lift * r * 0.25, r * k, paint);
      }
    };
    draw("#44533a", 0.45, 1.0);
    draw("#5f7046", 0, 0.86);
    draw("#7f8f5a", -1, 0.56);
    draw("#97a56c", -1.6, 0.3);
  };
  if (o.wind) e.layer(`crown${x0}`, { pivot: [cx, -o.h * 0.5], wind: { strength: o.wind, gust: 0.35 } }, crown);
  else crown(g);
}

return { streamX, streamW, edgeA, browA, slope, channel, ground, WATER, oak };
