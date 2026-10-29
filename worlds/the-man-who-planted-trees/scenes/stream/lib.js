// What the stream's scene shares: the stream's line (where its middle is `d` metres ahead, how wide it is there), the
// land's shape round it (the valley floor, the slope of young oaks rising behind, the channel the water cut) — read by
// the relief, the land's and the water's paintings and tools/stream-copies.mjs — and the trees the wood is painted of
// across the years (the young oak, the grown one, an oak by its year, the beech).
const smooth = (a, b, v) => anim.ease.smooth(anim.span(v, a, b));
// the stream's middle, metres right of the view's line: in from the lower left, winding to the middle of the view and
// up into the oaks
function streamX(d) {
  return -4.8 + 5.0 * smooth(-4, 30, d) + 1.1 * Math.sin((d + 3) / 4) * anim.span(d, -6, 10) + 0.8 * Math.sin((d - 30) / 15) * anim.span(d, 30, 60);
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


// A grown oak, twenty years old (the third chapter), as the forest's edge paints it: a straight dark trunk bare to a third of its height,
// a few heavy limbs, a big crown of straight-edged lobes — darker under, paler on top (colour, not light: the scene's
// sun lights it). o: h (its height), w (the crown's half-width), lean (metres the crown stands right of the root), at
// (where its root is, across the card), wind (the crown a layer that sways: its strength; 0 — painted with the trunk).
// Its own randomness is the element's (e.rnd).
function grownOak(g, e, o) {
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

// An oak as the years have it (the state's `year`: 0 the first chapter, 6 the second, 20 the third): not yet planted
// (nothing), young (oak, `young`'s measures) or grown (grownOak, `grown`'s); the trunk's point `bark` on either
function oakOf(g, e, grown, young) {
  const y = e.state.year;
  if (y >= 20) {
    grownOak(g, e, grown);
    e.at((grown.at ?? 0) + grown.lean * 0.3, -1.4, "bark");
  } else if (y >= 6) {
    oak(g, e, young);
    e.at(young.at ?? 0, -1.2, "bark");
  }
}

// A beech: a smooth pale-grey trunk and an egg-shaped crown of straight-edged lobes, a deeper and glossier green than
// the oaks'; under 1.2 m a sapling — a thin stem and a few pairs of leaves. o: h (its height), w (the crown's
// half-width), at (its root, across the card), wind (the crown a layer that sways: its strength; 0 — painted with the
// trunk). Its own randomness is the element's (e.rnd)
function beech(g, e, o) {
  const R = () => e.rnd(), x0 = o.at ?? 0;
  g.lineCap = "round";
  if (o.h < 1.2) {
    g.strokeStyle = "#6b5b46";
    g.lineWidth = 0.012 + o.h * 0.012;
    g.beginPath();
    g.moveTo(x0, 0);
    g.quadraticCurveTo(x0 + 0.03, -o.h * 0.5, x0 + 0.01, -o.h);
    g.stroke();
    for (let k = 0; k < 5; k++) {
      const y = -o.h * (0.42 + k * 0.13), s = k % 2 ? 1 : -1, l = o.h * (0.16 - k * 0.015);
      g.fillStyle = k % 2 ? "#7e9a4c" : "#6a8a42";
      g.beginPath();
      g.ellipse(x0 + s * l * 0.75, y, l * 0.75, l * 0.36, s * -0.5, 0, Math.PI * 2);
      g.fill();
    }
    return;
  }
  const tw = 0.025 + o.h * 0.016, cy = -o.h * 0.6, ry = o.h * 0.38;
  g.fillStyle = "#8a8780";
  g.beginPath();
  g.moveTo(x0 - tw, 0);
  g.lineTo(x0 - tw * 0.6, cy);
  g.lineTo(x0 + tw * 0.6, cy);
  g.lineTo(x0 + tw, 0);
  g.closePath();
  g.fill();
  const crown = (g) => {
    const n = 9 + Math.floor(R() * 3), spots = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + R() * 0.5, rr = 0.5 + R() * 0.4;
      spots.push([x0 + Math.cos(a) * o.w * 0.55 * rr, cy + Math.sin(a) * ry * 0.75 * rr, o.w * (0.42 + R() * 0.16)]);
    }
    spots.push([x0, cy, o.w * 0.6]);
    const draw = (paint, lift, k) => {
      for (const [x, y, r] of spots) {
        if (lift < 0 && y > cy + ry * 0.1) continue;
        g.fillStyle = paint;
        g.beginPath();
        for (let q = 0; q < 8; q++) {
          const a = (q / 8) * Math.PI * 2 + R() * 0.4, m = r * k * (0.85 + R() * 0.25);
          g.lineTo(x + lift * r * 0.1 + Math.cos(a) * m, y + lift * r * 0.25 + Math.sin(a) * m * 1.05);
        }
        g.closePath();
        g.fill();
      }
    };
    draw("#3f5a34", 0.4, 1.0);
    draw("#55743e", 0, 0.84);
    draw("#78954f", -1, 0.5);
  };
  if (o.wind) e.layer(`beech${x0}`, { pivot: [x0, cy + ry * 0.6], wind: { strength: o.wind, gust: 0.4 } }, crown);
  else crown(g);
}

return { streamX, streamW, slope, channel, ground, WATER, oak, grownOak, oakOf, beech };
