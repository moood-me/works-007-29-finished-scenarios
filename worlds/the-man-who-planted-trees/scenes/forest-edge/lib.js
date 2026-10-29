// What the forest edge's scene shares: the stream's line (its middle `d` metres ahead, its width there), where the
// forest's edge runs, where the valley's brow runs, the land's shape (the meadow shelf the path runs on, the forest climbing to the left, the valley
// falling away to the right with the village on its floor, its far side rising) — read by the relief, the land's and
// the water's paintings and tools/forest-edge-copies.mjs — and the grown oak the forest is painted of.
const smooth = (a, b, v) => anim.ease.smooth(anim.span(v, a, b));
// the stream's middle, metres right of the view's line: in from the lower left, along the forest's edge, into the wood
function streamX(d) {
  return -6.2 + 4.6 * smooth(-4, 22, d) + 1.3 * Math.sin(d / 3.4) * anim.span(d, -4, 8) + 1.6 * smooth(22, 40, d);
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
// easing to its floor 26 m down, where the village is — seen from the shelf over the brow; the far side rising from
// 700 m to a level 75 m up at 1400 m, where the far hills stand
function slope(across, d) {
  const inWood = edgeA(d) - across;
  const rise = (4 * smooth(0, 30, inWood) + 30 * smooth(40, 420, d) * smooth(0, 60, inWood)) * (1 - smooth(500, 900, d));
  const p = Math.max(0, across - browA(d));
  const q = p < 2 ? (p * p) / 4 : p - 1;
  const fall = -26 * (1 - Math.exp(-q / 25)) * (1 - smooth(700, 1300, d));
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

// A young oak, six years old (the second chapter): a thin dark trunk and limbs, a crown of straight-edged lobes in
// grey-green — the same as the stream's scene paints its young wood. o: h, w, lean, at, wind (as oak's)
function youngOak(g, e, o) {
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

// An oak as the years have it (the state's `year`: 0 the prologue, 6 the second chapter, 20 the third, 30 the
// epilogue): not yet planted (nothing), young (youngOak, `young`'s measures) or grown (oak, `grown`'s); the trunk's
// point `bark` (a hand laid on it) on either
function oakOf(g, e, grown, young) {
  const y = e.state.year;
  if (y >= 20) {
    oak(g, e, grown);
    e.at((grown.at ?? 0) + grown.lean * 0.3, -1.4, "bark");
  } else if (y >= 6) {
    youngOak(g, e, young);
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

// What is left of an oak cut down: a stump to the knee, its roots flaring into the ground and its cut top seen a
// little from above; its point `cut` the cut's middle (a palm laid on it). o: r (the trunk's half-width), kind —
// "fresh" (the cut pale and new, chips round it), "old" (ten years on: grey, split, grown about with shoots of
// undergrowth) or "regrown" (ten years on, and a young oak a man's height come up beside it)
function stump(g, e, o) {
  const R = () => e.rnd(), r = o.r, h = 0.42, fresh = o.kind === "fresh";
  if (o.kind === "regrown") youngOak(g, e, { at: 0.95, h: 1.9, w: 0.62, lean: 0.08, wind: 0.28 });
  g.fillStyle = fresh ? "#4c4237" : "#5f5a52";
  g.beginPath();
  g.moveTo(-r * 1.7, 0.02);
  g.quadraticCurveTo(-r * 1.1, -0.04, -r, -h * 0.4);
  g.lineTo(-r, -h);
  g.lineTo(r, -h);
  g.lineTo(r, -h * 0.4);
  g.quadraticCurveTo(r * 1.15, -0.04, r * 1.8, 0.02);
  g.closePath();
  g.fill();
  g.fillStyle = fresh ? "#3d352c" : "#4f4a44";
  for (let i = 0; i < 4; i++) g.fillRect(-r + r * (0.3 + i * 0.45), -h, r * 0.08, h * 0.85);
  g.fillStyle = fresh ? "#dcc390" : "#8e8a82";
  g.beginPath();
  g.ellipse(0, -h, r, r * 0.3, 0, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = fresh ? "#c2a26c" : "#6f6b64";
  g.lineWidth = 0.012;
  for (const k of [0.35, 0.6, 0.82]) {
    g.beginPath();
    g.ellipse(0, -h, r * k, r * 0.3 * k, 0, 0, Math.PI * 2);
    g.stroke();
  }
  if (fresh) {
    g.fillStyle = "#e3cfa2";
    for (let i = 0; i < 12; i++) {
      g.beginPath();
      g.ellipse((R() - 0.5) * r * 5, 0.01 - R() * 0.03, 0.03 + R() * 0.03, 0.012, R() * 3, 0, Math.PI * 2);
      g.fill();
    }
  } else {
    g.strokeStyle = "#4a443c";
    g.lineWidth = 0.014;
    g.beginPath();
    g.moveTo(-r * 0.1, -h - r * 0.28);
    g.lineTo(r * 0.15, -h + r * 0.05);
    g.lineTo(r * 0.05, -h * 0.5);
    g.stroke();
    if (o.kind === "old") {
      for (let i = 0; i < 7; i++) {
        const x = (R() - 0.5) * r * 5, l = 0.4 + R() * 0.5;
        g.strokeStyle = "#5d5440";
        g.lineWidth = 0.012;
        g.beginPath();
        g.moveTo(x, 0);
        g.lineTo(x + (R() - 0.5) * 0.1, -l);
        g.stroke();
        g.fillStyle = R() < 0.5 ? "#6f8148" : "#86985a";
        for (let k = 0; k < 3; k++) {
          g.beginPath();
          g.ellipse(x + (k % 2 ? 0.06 : -0.06), -l * (0.55 + k * 0.2), 0.07, 0.04, 0, 0, Math.PI * 2);
          g.fill();
        }
      }
    }
  }
  e.at(0, -h, "cut");
}

// The path near: where its middle is `d` metres ahead (across), as land.js paints it — out of the wood along the
// stream's near bank, past where the people stand, on toward the viewer. Sampled once from its two curves
const PATH = (() => {
  const curve = (p0, p1, p2, p3) => {
    const out = [];
    for (let i = 0; i <= 120; i++) {
      const t = i / 120, u = 1 - t, b = [u * u * u, 3 * u * u * t, 3 * u * t * t, t * t * t];
      out.push([b[0] * p0[1] + b[1] * p1[1] + b[2] * p2[1] + b[3] * p3[1], b[0] * p0[0] + b[1] * p1[0] + b[2] * p2[0] + b[3] * p3[0]]);
    }
    return out;
  };
  return [...curve([-1.6, 30], [-1.2, 22], [-0.6, 16], [0.4, 11]), ...curve([0.4, 11], [1.4, 7], [2.2, 3], [4.2, -6])].sort((p, q) => p[0] - q[0]);
})();
function pathX(d) {
  if (d <= PATH[0][0]) return PATH[0][1];
  for (let i = 1; i < PATH.length; i++) {
    if (PATH[i][0] >= d) {
      const [d0, x0] = PATH[i - 1], [d1, x1] = PATH[i];
      return x0 + ((x1 - x0) * (d - d0)) / Math.max(1e-6, d1 - d0);
    }
  }
  return PATH[PATH.length - 1][1];
}

// The Traveller's row of beeches on the Road (one a year, by the path where it comes out of the wood): its k-th
// place (0 the first, the oldest), [across, distance] — fourteen along the path's right side from the wood toward the
// people; from the fifteenth a second row beside it, from the wood again
function rowPlace(k) {
  const second = k >= 14, i = second ? k - 14 : k, d = 23.5 - 1.15 * i;
  return [pathX(d) + 2.1 + (second ? 1.5 : 0), d];
}
// a beech's height at `age` years, metres
function beechHeight(age) {
  return Math.min(9.5, 0.3 + 0.42 * age);
}

return { streamX, streamW, edgeA, browA, slope, channel, ground, WATER, oak, youngOak, oakOf, beech, stump, pathX, rowPlace, beechHeight };
