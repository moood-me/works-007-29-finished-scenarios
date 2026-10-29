// What the village's scene shares: the land's shape (the level square, the slope rising behind the village to the
// plateau above, the plateau's edge falling away on the right to the lowlands, the stream's bed coming down the slope
// on the left) — read by the relief, the land's and the water's paintings and tools/village-copies.mjs —; the houses
// (where each stands, how it is built, how it is in each `time`); and the painters the houses, the trees and the
// heaps share. Everything that changes over the years reads `time` (TIMES), each painting once per value.
const sm = (a, b, v) => anim.ease.smooth(anim.span(v, a, b));

// ── the years ──────────────────────────────────────────────────────────
// prologue (and chapter 1): the dying village; chapter2 (+6 years): empty, the stream back; chapter3 (+20): people
// come back, a few hearths; epilogue (+30): the village alive
const TIMES = ["prologue", "chapter2", "chapter3", "epilogue"];
const T = (e) => Math.max(0, TIMES.indexOf(e.state.time));

// ── the land ───────────────────────────────────────────────────────────
// the stream's middle, metres right of the view's line: down the slope on the left, past the back of the village,
// round behind the near houses on the left and out of the view at the lower left
function streamX(d) {
  return -19 + 4.5 * sm(-5, 12, d) + 4.5 * sm(8, 32, d) - 4 * sm(40, 90, d) - 20 * sm(90, 400, d);
}
function streamW(d) {
  return 1.5 + 0.8 * anim.span(d, 30, 200);
}
// the plateau's edge on the right: across where the land begins to fall to the lowlands
function edgeA(d) {
  return 24 + 0.18 * d;
}
// the slope over the village: level to the back of the square (30 m), then a bank to 9 m by 60 m, then the long rise
// to the plateau above (+50 m by 450 m, +80 by 1400 m); it fades out toward the plateau's edge on the right
function rise(a, d) {
  const back = d - 30;
  return (9 * sm(0, 30, back) + 41 * sm(25, 420, back) + 30 * sm(420, 1400, back)) * (1 - sm(edgeA(d) - 40, edgeA(d) - 6, a));
}
// past the edge: steep at first, easing down to the lowlands 110 m below
function fall(a, d) {
  const p = a - edgeA(d);
  if (p <= 0) return 0;
  const q = p < 4 ? (p * p) / 8 : p - 2;
  return -110 * (1 - Math.exp(-q / 35));
}
function slope(a, d) {
  return rise(a, d) + fall(a, d);
}
// the stream's channel: 0.45 m deep in the middle, its banks easing up to the land
function channel(a, d) {
  const w = streamW(d) / 2;
  return 0.45 * (1 - sm(w - 0.4, w + 1.2, Math.abs(a - streamX(d))));
}
function ground(a, d) {
  return slope(a, d) - channel(a, d);
}
// the water's level in the channel (the bed under it); the forest's lower edge over the village
const WATER = -0.3, EDGE_D = 46;

// ── the houses ─────────────────────────────────────────────────────────
// Each stands on its unseen anchor (scene.json: across, distance, facing): the middle of its front wall's foot. w — the
// front's width, H — the wall's height, D — the house's depth (the gable's width; the roof pitched 32°), door — the
// door's middle across the front, wins — the windows' middles, chim — the chimney's place across, stone — the walls'
// tint. `leaf`: the door is a leaf of its own (home_door), the front paints only the doorway behind it.
const D = 4.6, PITCH = 32, APEX = (D / 2) * Math.tan((PITCH * Math.PI) / 180);
const HOUSES = {
  home: { w: 7, H: 2.7, door: -1.8, wins: [0.6, 2.3], chim: -2.8, stone: 0, leaf: true },
  edge: { w: 6.4, H: 2.6, door: -1.6, wins: [0.4, 1.9], chim: 2.5, stone: 1 },
  b1: { w: 7.4, H: 2.9, door: 0.9, wins: [-2.2, -0.8, 2.5], chim: -2.6, stone: 2 },
  b2: { w: 6.6, H: 2.7, door: -1.2, wins: [0.6, 2.2], chim: 2.1, stone: 1 },
  l2: { w: 7, H: 2.6, door: 1.2, wins: [-1.8, -0.4], chim: 2.4, stone: 2 },
  r1: { w: 7.2, H: 2.8, door: -0.6, wins: [-2.4, 1.2, 2.6], chim: -2.5, stone: 0 },
};
// how each house is in each time: [roof, front]. roof — old (weathered slabs), holed (slabs fallen in), patched (old,
// mended with new), new; front — empty (the door gone, the windows dark holes, a shutter hanging), shut (shutters and
// door closed, nobody living), lived (glazed, curtains, shutters open), new (lived, the window surrounds lime-washed,
// flowers on the sills)
const PLAN = {
  home: [["old", "lived"], ["old", "lived"], ["patched", "lived"], ["new", "new"]],
  edge: [["holed", "empty"], ["holed", "empty"], ["holed", "empty"], ["new", "new"]],
  b1: [["holed", "empty"], ["holed", "empty"], ["patched", "lived"], ["new", "new"]],
  b2: [["holed", "empty"], ["holed", "empty"], ["holed", "empty"], ["new", "new"]],
  l2: [["old", "shut"], ["old", "shut"], ["old", "shut"], ["new", "new"]],
  r1: [["old", "empty"], ["old", "empty"], ["patched", "lived"], ["new", "new"]],
};
function houseState(e, id) {
  const t = T(e);
  // the empty house at the edge, where the Traveller lives in the third chapter if he stayed (`edge_house`)
  if (id === "edge" && t === 2 && e.state.edge_house === "lived") return ["patched", "lived"];
  return PLAN[id][t];
}
const STONES = [
  ["#bfae90", "#b5a385", "#c6b697", "#ad9b7e", "#bba98a"],
  ["#b9ab95", "#ae9f88", "#c3b6a0", "#a5967f", "#b4a690"],
  ["#c4b292", "#b8a585", "#ccbc9c", "#b09d80", "#bead8c"],
];
const MORTAR = ["#958470", "#8f8170", "#9a8872"];
// dry-laid stone over a shape already filled with mortar: rough courses from the foot up to `top(x)`, leaving `holes`
function stones(g, e, x0, x1, top, holes, palette) {
  const hits = (a0, b0, a1, b1) => holes.some(([a, b, c, d]) => a0 < c + 0.04 && a1 > a - 0.04 && b0 < d + 0.04 && b1 > b - 0.04);
  let y = 0;
  const highest = Math.min(top(x0), top((x0 + x1) / 2), top(x1));
  while (y > highest) {
    const h = 0.2 + e.rnd() * 0.1;
    let x = x0 - e.rnd() * 0.3;
    while (x < x1) {
      const w = 0.32 + e.rnd() * 0.4, a0 = Math.max(x + 0.025, x0), a1 = Math.min(x + w - 0.025, x1), b1 = y - 0.02;
      const b0 = Math.max(y - h + 0.025, top((a0 + a1) / 2) + 0.03);
      const colour = palette[Math.floor(e.rnd() * palette.length)];
      if (a1 - a0 > 0.08 && b1 - b0 > 0.06 && !hits(a0, b0, a1, b1)) {
        g.fillStyle = colour;
        g.beginPath();
        g.roundRect(a0, b0, a1 - a0, b1 - b0, 0.04);
        g.fill();
      }
      x += w;
    }
    y -= h;
  }
}
// the front wall: stone with its door and windows; what is in them by the house's state. Its points: `door` (the
// doorway's middle, a man's height), `threshold` (its foot)
function front(g, e, id) {
  const o = HOUSES[id], [, kind] = houseState(e, id), w2 = o.w / 2, H = o.H;
  const DOOR = [o.door - 0.47, -1.95, o.door + 0.47, 0];
  const WINS = o.wins.map((x) => [x - 0.37, -1.75, x + 0.37, -1.0]);
  const holes = [DOOR, ...WINS];
  g.fillStyle = MORTAR[o.stone];
  g.beginPath();
  g.rect(-w2, -H, o.w, H);
  for (const [a, b, c, d] of holes) g.rect(a, b, c - a, d - b);
  g.fill("evenodd");
  stones(g, e, -w2, w2, () => -H, holes, STONES[o.stone]);
  // the footing; a ragged top course under the eave
  g.fillStyle = "#8a7a64";
  g.fillRect(-w2, -0.14, DOOR[0] + w2, 0.14);
  g.fillRect(DOOR[2], -0.14, w2 - DOOR[2], 0.14);
  g.fillStyle = "#857661";
  g.fillRect(-w2, -H, o.w, 0.12);
  const DARK = "#2a231f", WOOD = "#76624c", SHUT = "#6e604e";
  // lime-washed surrounds of a house done up anew
  if (kind === "new") {
    g.fillStyle = "#e4dccb";
    for (const [a, b, c, d] of holes) {
      g.fillRect(a - 0.12, b - 0.12, c - a + 0.24, 0.12);
      g.fillRect(a - 0.12, b, 0.12, d - b);
      g.fillRect(c, b, 0.12, d - b);
      if (d < 0) g.fillRect(a - 0.12, d, c - a + 0.24, 0.1);
    }
  }
  // lintels
  g.fillStyle = "#c9b99b";
  for (const [a, b, c] of holes) g.fillRect(a - 0.16, b - 0.2, c - a + 0.32, 0.2);
  // the doorway
  const [da, db, dc, dd] = DOOR;
  if (o.leaf || kind === "empty") {
    g.fillStyle = DARK;
    g.fillRect(da, db, dc - da, dd - db);
    g.fillStyle = "#3a302a";
    g.fillRect(da, dd - 0.28, dc - da, 0.28);
  }
  if (kind === "empty" && !o.leaf) {
    // the door off its upper hinge, leaning in the doorway
    g.fillStyle = "#6a5a48";
    g.beginPath();
    g.moveTo(da + 0.02, db + 0.15);
    g.lineTo(da + 0.42, db + 0.05);
    g.lineTo(da + 0.62, dd);
    g.lineTo(da + 0.18, dd);
    g.closePath();
    g.fill();
    g.strokeStyle = "#54473a";
    g.lineWidth = 0.02;
    for (let k = 1; k < 4; k++) {
      g.beginPath();
      g.moveTo(da + 0.02 + k * 0.1, db + 0.15 - k * 0.025);
      g.lineTo(da + 0.18 + k * 0.11, dd);
      g.stroke();
    }
  } else if (!o.leaf) {
    g.fillStyle = kind === "shut" ? "#6f5e4a" : kind === "new" ? "#5f6f66" : WOOD;
    g.fillRect(da, db, dc - da, dd - db);
    g.fillStyle = "rgba(40, 32, 26, 0.45)";
    for (let x = da + 0.19; x < dc - 0.05; x += 0.19) g.fillRect(x, db, 0.018, dd - db);
    g.fillStyle = "#3d3630";
    g.fillRect(da + 0.06, db + 0.32, dc - da - 0.12, 0.05);
    g.fillRect(da + 0.06, dd - 0.45, dc - da - 0.12, 0.05);
    g.beginPath();
    g.arc(dc - 0.14, -0.98, 0.03, 0, Math.PI * 2);
    g.fill();
  }
  // the windows
  for (const [a, b, c, d] of WINS) {
    const ww = c - a, hh = d - b;
    if (kind === "empty") {
      g.fillStyle = DARK;
      g.fillRect(a, b, ww, hh);
      // one shutter hanging by a hinge, the other gone
      g.fillStyle = "#6c5c49";
      g.save();
      g.translate(a, b + 0.06);
      g.rotate(0.35 + e.rnd() * 0.3);
      g.fillRect(-0.36, 0, 0.36, hh - 0.08);
      g.restore();
    } else if (kind === "shut") {
      g.fillStyle = SHUT;
      g.fillRect(a, b, ww, hh);
      g.fillStyle = "rgba(40, 32, 26, 0.5)";
      g.fillRect(a + ww / 2 - 0.012, b, 0.024, hh);
      for (let y = b + 0.12; y < d; y += 0.14) g.fillRect(a, y, ww, 0.016);
    } else {
      // glazed: dark panes with the sky's grey in them, a wooden cross, a pale curtain; the shutters folded back
      g.fillStyle = "#56606a";
      g.fillRect(a, b, ww, hh);
      g.fillStyle = "#7d8a94";
      g.fillRect(a + 0.04, b + 0.04, ww / 2 - 0.06, hh / 2 - 0.06);
      g.fillStyle = "#e9e3d4";
      g.fillRect(a + ww * 0.55, b + 0.03, ww * 0.42, hh - 0.06);
      g.fillStyle = "#4f3e30";
      g.fillRect(a + ww / 2 - 0.02, b, 0.04, hh);
      g.fillRect(a, b + hh / 2 - 0.02, ww, 0.04);
      g.strokeStyle = "#4f3e30";
      g.lineWidth = 0.05;
      g.strokeRect(a, b, ww, hh);
      g.fillStyle = kind === "new" ? "#6a7f74" : "#5e6a58";
      g.fillRect(a - 0.4, b, 0.34, hh);
      g.fillRect(c + 0.06, b, 0.34, hh);
      if (kind === "new") {
        // a box of geraniums on the sill: pinks and whites, leaves
        g.fillStyle = "#6a5440";
        g.fillRect(a - 0.04, d + 0.02, ww + 0.08, 0.14);
        for (let k = 0; k < 7; k++) {
          const x = a + 0.02 + (k / 6) * (ww - 0.04);
          g.fillStyle = "#5f7a46";
          g.beginPath();
          g.arc(x, d - 0.02, 0.07, 0, Math.PI * 2);
          g.fill();
          g.fillStyle = k % 2 ? "#e3a2a8" : "#f1ede2";
          g.beginPath();
          g.arc(x + 0.02, d - 0.09, 0.05, 0, Math.PI * 2);
          g.fill();
        }
      }
    }
  }
  // cracks and fallen stones on an empty house; a stone or two gone from the top course of the shut one
  if (kind === "empty") {
    g.strokeStyle = "#4a3e33";
    g.lineWidth = 0.03;
    for (let k = 0; k < 3; k++) {
      let x = -w2 + 0.4 + e.rnd() * (o.w - 0.8), y = -H + 0.1;
      g.beginPath();
      g.moveTo(x, y);
      for (let s = 0; s < 6; s++) {
        x += (e.rnd() - 0.5) * 0.3;
        y += 0.12 + e.rnd() * 0.12;
        g.lineTo(x, y);
      }
      g.stroke();
    }
  }
  e.at(o.door, -1.0, "door");
  e.at(o.door, -0.02, "threshold");
}
// the gable end: the same stone up to the roof's point, a vent under the ridge
function gable(g, e, id) {
  const o = HOUSES[id], [roof] = houseState(e, id), H = o.H, d2 = D / 2, top = H + APEX;
  const edgeOf = (x) => -(H + APEX * (1 - Math.abs(x) / d2));
  g.fillStyle = MORTAR[o.stone];
  g.beginPath();
  g.moveTo(-d2, 0);
  g.lineTo(-d2, -H);
  g.lineTo(0, -top);
  g.lineTo(d2, -H);
  g.lineTo(d2, 0);
  g.closePath();
  g.fill();
  stones(g, e, -d2, d2, edgeOf, [[-0.15, -top + 0.45, 0.15, -top + 0.75]], STONES[o.stone]);
  g.fillStyle = "#3a2e26";
  g.fillRect(-0.15, -top + 0.45, 0.3, 0.3);
  g.fillStyle = "#8a7a64";
  g.fillRect(-d2, -0.14, D, 0.14);
  // the roof's edge seen end on along the gable's slopes
  g.strokeStyle = roof === "new" ? "#a88f6c" : "#5f564c";
  g.lineWidth = 0.14;
  g.beginPath();
  g.moveTo(-d2 - 0.3, -H + 0.12);
  g.lineTo(0, -top - 0.08);
  g.lineTo(d2 + 0.3, -H + 0.12);
  g.stroke();
}
// the roof's front slope from above (x along the ridge, y down the slope toward the eave)
function roof(g, e, id) {
  const o = HOUSES[id], [kind] = houseState(e, id), W = o.w + 0.5, w2 = W / 2, h2 = 1.5;
  const OLD = ["#7b7166", "#867b6e", "#6f665c", "#8f8476", "#776c60"], NEW = ["#c3ab88", "#b89d78", "#cbb593", "#bea47e"];
  g.fillStyle = kind === "new" ? "#a68e6c" : "#5f564c";
  g.fillRect(-w2, -h2, W, h2 * 2);
  // where slabs have fallen in: holes onto the dark loft, the rafters across them
  const HOLES = kind === "holed" ? [[-w2 + 0.6 + e.rnd() * 1.2, -0.6, 1.4, 1.1], [0.4 + e.rnd() * 1.2, -1.1, 1.2, 1.3], [w2 - 1.4, 0.1, 0.9, 0.8]] : [];
  const inHole = (x, y) => HOLES.some(([a, b, w, h]) => x > a && x < a + w && y > b && y < b + h);
  const patch = kind === "patched" ? [-w2 + 1 + e.rnd() * 2, 2.2] : null;
  for (let y = -h2; y < h2; y += 0.24) {
    let x = -w2 - e.rnd() * 0.25;
    while (x < w2) {
      const w = 0.3 + e.rnd() * 0.35, fresh = kind === "new" || (patch && x > patch[0] && x < patch[0] + patch[1]);
      const list = fresh ? NEW : OLD, colour = list[Math.floor(e.rnd() * list.length)];
      if (!inHole(x + w / 2, y + 0.13)) {
        g.fillStyle = colour;
        g.beginPath();
        g.roundRect(Math.max(x + 0.02, -w2), y + 0.02, Math.min(w - 0.04, w2 - x), 0.26 + e.rnd() * 0.05, 0.05);
        g.fill();
      }
      x += w;
    }
  }
  for (const [a, b, w, h] of HOLES) {
    g.fillStyle = "#2a231f";
    g.beginPath();
    g.moveTo(a, b + 0.1);
    g.lineTo(a + w * 0.6, b);
    g.lineTo(a + w, b + h * 0.4);
    g.lineTo(a + w * 0.8, b + h);
    g.lineTo(a + 0.1, b + h * 0.85);
    g.closePath();
    g.fill();
    g.fillStyle = "#5a4836";
    for (let x = a + 0.25; x < a + w - 0.1; x += 0.55) g.fillRect(x, b - 0.05, 0.08, h + 0.1);
  }
  g.fillStyle = kind === "new" ? "#8f775a" : "#4e463e";
  g.fillRect(-w2, -h2, W, 0.1);
}
// a squat stone chimney stack with a flat capstone; its top (`top`) is where its smoke rises from
function chimney(g, e) {
  g.fillStyle = "#a99880";
  g.fillRect(-0.24, -1.4, 0.48, 1.4);
  g.fillStyle = "#8f806a";
  for (let y = -0.2; y > -1.4; y -= 0.25) g.fillRect(-0.24, y, 0.48, 0.03);
  g.fillStyle = "#6c6156";
  g.fillRect(-0.3, -1.52, 0.6, 0.12);
  e.at(0, -1.55, "top");
}

// ── the oaks ───────────────────────────────────────────────────────────
// An oak as the world's flat style has it (as the forest edge's): a straight dark trunk, a few heavy limbs, a crown of
// straight-edged lobes, darker under, paler on top. o: h, w (the crown's half-width), lean, at (its root across the
// card), wind (the crown a layer that sways: its strength; 0 — painted with the trunk), young (a thin sapling's grey-
// green crown, as the oaks were in their sixth year: "a grey haze of leaves")
function oak(g, e, o) {
  const R = () => e.rnd(), x0 = o.at ?? 0, cx = x0 + o.lean, base = o.h * 0.36, cy = -o.h * 0.66, ry = o.h * 0.33;
  const tw = o.young ? 0.05 + o.h * 0.01 : 0.13 + o.h * 0.014;
  g.fillStyle = o.young ? "#5a5244" : "#463f35";
  g.beginPath();
  g.moveTo(x0 - tw, 0);
  g.lineTo(x0 - tw * 0.55 + o.lean * 0.5, -base - o.h * 0.1);
  g.lineTo(cx - tw * 0.3, -o.h * 0.62);
  g.lineTo(cx + tw * 0.3, -o.h * 0.62);
  g.lineTo(x0 + tw * 0.55 + o.lean * 0.5, -base - o.h * 0.1);
  g.lineTo(x0 + tw, 0);
  g.closePath();
  g.fill();
  g.strokeStyle = g.fillStyle;
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
    if (o.young) {
      draw("#76806a", 0.3, 0.95);
      draw("#929a7e", -1, 0.6);
    } else {
      draw("#44533a", 0.45, 1.0);
      draw("#5f7046", 0, 0.86);
      draw("#7f8f5a", -1, 0.56);
      draw("#97a56c", -1.6, 0.3);
    }
  };
  if (o.wind) e.layer(`crown${x0}`, { pivot: [cx, -o.h * 0.5], wind: { strength: o.wind, gust: 0.35 } }, crown);
  else crown(g);
}
// how tall the slope's oaks are in each time (none yet; six years old — over a man's head; grown; ten years more)
const OAK_H = [0, 3.4, 10.5, 12];

// a stump of a felled oak (the third chapter's cutting, or its tenth year), its cut face pale or greyed
function stump(g, e, old) {
  const r = 0.22 + e.rnd() * 0.12, h = 0.35 + e.rnd() * 0.25;
  g.fillStyle = old ? "#6a6156" : "#584c3e";
  g.beginPath();
  g.moveTo(-r - 0.12, 0);
  g.quadraticCurveTo(-r, -0.08, -r, -h);
  g.lineTo(r, -h + 0.05);
  g.quadraticCurveTo(r, -0.08, r + 0.14, 0);
  g.closePath();
  g.fill();
  g.fillStyle = old ? "#9a9184" : "#d6c39a";
  g.beginPath();
  g.ellipse(0, -h + 0.025, r, 0.07, -0.05, 0, Math.PI * 2);
  g.fill();
}

// ── the people's looks by the years ───────────────────────────────────
// Who wears which look of the cast in each `time` (script.js dresses them as `time` changes: `<id>_wear` takes the
// look's own object): Lina 17 / 23 / 37 / 47, the Traveller 20 / 26 / 40 / 50, Jan 26 (his own look) / 40. null — the
// person's own look (`person.who` in scene.json).
const AGES = {
  prologue: { lina: null, traveller: null, jan: null },
  chapter2: { lina: "lina_23", traveller: "traveller_26", jan: null },
  chapter3: { lina: "lina_37", traveller: "traveller_40", jan: "jan_40" },
  epilogue: { lina: "lina_47", traveller: "traveller_50", jan: "jan_40" },
};

// ── the pieces ─────────────────────────────────────────────────────────
// The village's pieces (stage 5; modules/beats; the contract: game.md «Stage 5 — pieces» and notes.md «Contract for
// the check»): `film(scene)` — each piece `{after, tells, seconds, from, run}`. `from` sets everything a piece begins at
// — its people's places, turns, what they do, hold and look at, the camera, the square's things (the door, the mug,
// the wet stump, the cart, the stump or the lime, the rod, the notebook) — but never the game's: `<id>_here`,
// `<id>_mood`, the year's keys (`time`, the smoke, the coal, the fountain, `edge`) nor `<id>_wear` (the script dresses
// them by `time`; Lina's mug on the stump: `mug`). The scene tells `<piece>:<moment>` where the game says its lines,
// and leaves the line's time after it. Places in metres (across, away); turns as people's (0 away, 90 right, 180
// toward the viewer).
function film(scene) {
  const CAM0 = { camera_target: null, camera_shot: "full", camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
    camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0 };
  const cam = (target, shot = "full", frame = null) => ({ ...CAM0, camera_target: target, camera_shot: shot, camera_frame: frame });
  const who = (id, [a, d, turn], does = "stand", more = {}) => {
    const o = { [`${id}_a`]: a, [`${id}_d`]: d, [`${id}_turn`]: turn, [`${id}_do`]: does, [`${id}_look`]: null, [`${id}_reach`]: null,
      [`${id}_on`]: null, [`${id}_with`]: [], [`${id}_gait`]: null };
    for (const [k, v] of Object.entries(more)) o[`${id}_${k}`] = v;
    return o;
  };
  const merge = (...xs) => Object.assign({}, ...xs);
  const loop = (motion) => ({ motion, loop: true });
  // the square: the stump between them, Lina left of it, the Traveller right, turned to each other (their faces to
  // the viewer); `pair` — the unseen point between them the two-shot frames
  const LINA = [-0.35, 8.6, 120], TRAV = [1.55, 8.5, 240], SLOPE = [-1.5, 80, 25];
  const SQUARE0 = { home_door: 180, mug: false, wet: false, cart: false, rod: false, stump: "stump", pour: 0, notebook_open: 0,
    notebook_page: "was", notebook_name: 0, notebook_turn: 0 };
  // 1.7: Lina at the well, the Traveller come down to her (`pair_well` between them), the father loading his cart
  const WELL_LINA = [3.6, 11.2, 227], WELL_TRAV = [2.2, 9.9, 47], FATHER = [-4.3, 9.3, 250];
  const COAL = () => merge(cam("pair_well", "full"), SQUARE0, { cart: true },
    who("lina", WELL_LINA, "stand", { look: "traveller" }), who("traveller", WELL_TRAV, "stand", { look: "lina" }),
    who("father", FATHER, loop("load_sack"), { look: "cart#bed" }));
  // 2.1: dawn at the empty house at the edge — the Traveller sitting up on its threshold, Jan by the wall left of the
  // door (edge_front#door; the front faces 235)
  const SILL = [8.11, 12.55], JAN_WALL = [7.3, 13.6, 170];
  // the scene's own camera set there (the operator would go round to the wall): from the square's right, looking at
  // the doorway; and at the mound: from beside Lina's father's house, the mound before the Traveller
  const AT_DOOR = { ...CAM0, camera_x: 6.8, camera_z: 8.2, camera_yaw: 10 };
  const AT_MOUND = { ...CAM0, camera_x: -6.0, camera_z: 14.5, camera_yaw: -16 };
  // the epilogue: the pit on the square, Lina left of it, the neighbours round it, the children at the fountain
  const PIT = { lina: [-0.4, 8.7, 120], neighbour_a: [0.3, 9.7, 175], neighbour_b: [1.35, 9.0, 235], child_a: [-2.8, 11.9, 160],
    child_b: [-4.1, 11.95, 195], traveller: [1.25, 8.05, 260] };
  // the fountain's rim, right of its pillar: where the Traveller sits in «Рассказ» (the rod leans just right of him)
  const SEAT = [-2.6, 12.42, 0.5];
  // the pit's group seen whole, nearer: the scene's own camera dollied in (the operator on Lina came in at her side and
  // cut the spade off the frame)
  const AT_PIT = { ...CAM0, camera_x: 0.4, camera_z: 4.2 };
  // the fountain's rim, the Traveller sitting on it, from a few steps before it (the operator came in to his knees)
  const AT_RIM = { ...CAM0, camera_x: -2.3, camera_z: 8.2 };

  return {
    // П.1: the plateau's wind; the Traveller shakes his flask at his ear — empty — and comes on into the square, where
    // Lina stands by the stump with her mug
    flask: {
      after: [], tells: ["flask:shake"], seconds: 14,
      from: () => merge(cam("traveller", "full", 0.45), SQUARE0, { home_door: 120 },
        who("traveller", [4.6, 5.4, 205]), who("lina", LINA, "stand", { look: "stump#top" })),
      run: async (s) => {
        const t = s.person("traveller");
        t.wear({ parts: ["satchel"] });
        t.with(["flask_hand"]);
        s.tell("flask:shake");
        await t.do("shake_flask", { loop: false });
        t.with([]);
        t.wear(null);
        t.do("stand");
        await s.wait(1.5);
        s.camera({ target: null, glide: 3 });
        t.look("lina");
        await t.walk([[3.0, 7.4], [TRAV[0], TRAV[1]]]);
        await t.turn(TRAV[2]);
        await s.wait(1);
      },
    },
    // П.1–П.2: a man's angry shout from behind the wall of her father's house; the door slams; Lina raises her mug
    // over the stump — then the choice «Дай попить»
    stump: {
      after: ["flask"], tells: ["stump:shout"], seconds: 9,
      from: () => merge(CAM0, SQUARE0, { home_door: 120 }, who("traveller", TRAV, "stand", { look: "lina" }),
        who("lina", LINA, "stand", { look: "stump#top" })),
      run: async (s) => {
        const l = s.person("lina"), t = s.person("traveller");
        await s.wait(1);
        s.tell("stump:shout");
        l.look("home_front#door");
        t.look("home_front#door");
        await s.wait(2.6);
        await s.move("home_door", 180, { over: 0.25 });
        await s.wait(1.4);
        l.look("stump#top");
        l.reach({ r: [0.3, 8.25, 0.8] });
        t.look("lina");
        s.camera({ target: "pair", shot: "full" });
        await s.wait(2);
      },
    },
    // П.2 «Дай попить»: she looks at the stump, at him; she holds the mug out, he drinks, she takes it back and sets it
    // upside down on the stump (`mug`)
    drink: {
      after: ["stump"], tells: ["drink:look"], seconds: 20,
      from: () => merge(cam("pair", "full"), SQUARE0, who("traveller", TRAV, "stand", { look: "lina" }),
        who("lina", LINA, "stand", { look: "stump#top", reach: { r: [0.3, 8.25, 0.8] } })),
      run: async (s) => {
        const l = s.person("lina"), t = s.person("traveller");
        l.reach(null);
        l.look("stump#top");
        await s.wait(1.2);
        l.look("traveller");
        s.tell("drink:look");
        await s.wait(2.5);
        await l.walk([[0.5, 8.75]]);
        await s.all(l.turn(95), t.turn(270));
        await l.go("offer", { to: [0.5, 8.75], turn: 95 });
        l.wear({ parts: [] });
        t.with(["mug"]);
        l.do("stand");
        s.camera({ target: "traveller", shot: "full", frame: 0.6 });
        await t.do("drink", { loop: false });
        t.do("stand");
        l.reach({ r: "traveller#mug" });
        await s.wait(0.6);
        t.with([]);
        l.wear(null);
        l.reach(null);
        s.camera({ target: "pair", shot: "full" });
        await l.turn(205);
        l.look("stump#top");
        l.reach({ r: "stump#top" });
        await s.wait(0.8);
        s.set("mug", true);
        l.reach(null);
        await s.wait(0.6);
        await l.turn(110);
        l.look("traveller");
        await s.wait(1);
      },
    },
    // П.2 silent: she pours her mug out on the stump (`pour`: the water running, then `wet`); then looks at his flask
    pour: {
      after: ["stump"], tells: ["pour:end"], seconds: 12,
      from: () => merge(cam("pair", "full"), SQUARE0, who("traveller", TRAV, "stand", { look: "lina" }),
        who("lina", LINA, "stand", { look: "stump#top", reach: { r: [0.3, 8.25, 0.8] } })),
      run: async (s) => {
        const l = s.person("lina");
        l.reach(null);
        const pouring = l.do("pour", { loop: false });
        await s.wait(0.5);
        s.set("pour", 1);
        await s.wait(1.6);
        s.set("wet", true);
        s.set("pour", 0);
        await pouring;
        l.do("stand");
        l.look("traveller");
        s.tell("pour:end");
        await s.wait(6);
        l.look("traveller#flask");
        await s.wait(2);
      },
    },
    // П.2 both: she turns and points up the slope (her arm toward it) — «Наверху пастух…»; he looks up there too; she
    // turns back to him
    point_up: {
      after: ["drink", "pour"], tells: ["point_up:point"], seconds: 10,
      from: () => merge(cam("pair", "full"), SQUARE0, who("traveller", TRAV, "stand", { look: "lina" }),
        who("lina", LINA, "stand", { look: "traveller" })),
      run: async (s) => {
        const l = s.person("lina"), t = s.person("traveller");
        s.camera({ target: "pair", shot: "wide", glide: 2 });
        await l.turn(350);
        l.look(SLOPE);
        l.reach({ r: SLOPE });
        t.look(SLOPE);
        s.tell("point_up:point");
        await s.wait(4);
        l.reach(null);
        await l.turn(110);
        l.look("traveller");
        await s.wait(1);
        t.look("lina");
        s.camera({ target: "pair", shot: "full" });
        await s.wait(1);
      },
    },
    // 1.7: down through the village — the Traveller comes down the path between the back houses; her father loads
    // sacks of charcoal on his cart and does not look up; Lina at the well turns to him — «Внизу кричат…» — then the
    // choice «Что делает пастух?»
    coal_cart: {
      after: [], tells: ["coal_cart:lina"], seconds: 16,
      from: () => merge(COAL(), CAM0, who("traveller", [1.0, 19.5, 175])),
      run: async (s) => {
        const l = s.person("lina"), t = s.person("traveller");
        l.look("traveller");
        await t.walk([[1.6, 14.5], [WELL_TRAV[0], WELL_TRAV[1]]]);
        await t.turn(WELL_TRAV[2]);
        t.look("lina");
        s.camera({ target: "lina", shot: "full", frame: 0.6 });
        s.tell("coal_cart:lina");
        await s.wait(5);
        s.camera({ target: "pair_well", shot: "full" });
        await s.wait(2);
      },
    },
    // 1.7 «Сажает дубы»: Lina laughs — «Дубы. Здесь»; her father, not turning — «Дурак он» (the whole square, he at
    // his cart); she looks up at the slope longer than she needs to (she and the slope she looks at)
    oaks_laugh: {
      after: ["coal_cart"], tells: ["oaks_laugh:laugh", "oaks_laugh:father", "oaks_laugh:slope"], seconds: 14,
      from: () => COAL(),
      run: async (s) => {
        const l = s.person("lina");
        s.tell("oaks_laugh:laugh");
        await l.do("laugh_short", { loop: false });
        l.do("stand");
        s.camera({ target: null, glide: 1 });
        s.tell("oaks_laugh:father");
        await s.wait(2.5);
        l.look(SLOPE);
        s.camera({ target: "lina", shot: "wide", frame: 0.45 });
        s.tell("oaks_laugh:slope");
        await s.wait(5);
      },
    },
    // 1.7 «Пасёт овец»: «Ну да. А что ещё» — she goes to the stump and pours her mug out on it (`wet`)
    pour_again: {
      after: ["coal_cart"], tells: ["pour_again:pour"], seconds: 14,
      from: () => COAL(),
      run: async (s) => {
        const l = s.person("lina");
        s.camera({ target: null, glide: 2 });
        l.look("stump#top");
        await l.walk([[2.2, 9.6], [0.8, 8.8]]);
        await l.turn(213);
        const pouring = l.do("pour", { loop: false });
        await s.wait(0.5);
        s.set("pour", 1);
        s.tell("pour_again:pour");
        await s.wait(1.6);
        s.set("wet", true);
        s.set("pour", 0);
        await pouring;
        l.do("stand");
        l.look("traveller");
        await s.wait(2);
      },
    },
    // 2.1: dawn at the empty house at the edge — the Traveller sitting up on its threshold where he slept, Jan by the
    // wall tying his kitbag («Опять у двери»); Jan gets up, lays his hand on the regiment's notebook in his breast
    // pocket («Пять лет я записывал мёртвых…» — and the talk); he stays, facing the Traveller
    by_door: {
      after: [], tells: ["by_door:tie", "by_door:pat"], seconds: 14,
      from: () => merge(AT_DOOR, { dawn: 1 }, SQUARE0,
        who("traveller", [...SILL, 250], loop("sit_stone"), { on: [...SILL, 0.12], look: "jan" }),
        who("jan", JAN_WALL, loop("tie_bag"), { look: [7.4, 13.1, 0] })),
      run: async (s) => {
        const j = s.person("jan");
        s.tell("by_door:tie");
        await s.wait(4);
        j.do("stand");
        await s.wait(0.6);
        await j.turn(144);
        j.look("traveller");
        j.reach({ r: "jan#chest" });
        s.tell("by_door:pat");
        await s.wait(1.5);
        j.reach(null);
        await s.wait(2);
      },
    },
    // 2.1 end: Jan goes off down the road toward the plateau's edge and is gone; the Traveller watches him go
    jan_goes: {
      after: ["by_door"], tells: ["jan_goes:gone"], seconds: 12,
      from: () => merge(AT_DOOR, { dawn: 1 }, SQUARE0,
        who("traveller", [...SILL, 250], loop("sit_stone"), { on: [...SILL, 0.12], look: "jan" }),
        who("jan", [JAN_WALL[0], JAN_WALL[1], 144], "stand", { look: "traveller" })),
      run: async (s) => {
        const j = s.person("jan");
        await j.walk([[8.6, 10.6], [11.6, 7.0], [15.5, 2.5]]);
        j.here(false);
        s.tell("jan_goes:gone");
        await s.wait(1);
      },
    },
    // 2.2 (village): the empty village; the Traveller gets up and crosses the square to the fresh mound (he stands
    // beyond it, over it, toward the viewer); then looks up at the slope: the grey haze over it is leaves — then the
    // stream (М4)
    haze: {
      after: ["jan_goes"], tells: ["haze:mound", "haze:leaves"], seconds: 18,
      from: () => merge(CAM0, { dawn: 0.35 }, SQUARE0,
        who("traveller", [...SILL, 250], loop("sit_stone"), { on: [...SILL, 0.12] })),
      run: async (s) => {
        const t = s.person("traveller");
        t.on(null);
        t.do("stand");
        await s.wait(0.6);
        t.look("grave#mound");
        s.cut(CAM0);
        await t.walk([[5.2, 13.0], [0.5, 16.5], [-4.5, 20.6], [-7.6, 20.2]]);
        await t.turn(143);
        s.cut(AT_MOUND);
        s.tell("haze:mound");
        await s.wait(3);
        await t.turn(20);
        t.look(SLOPE);
        s.move("camera_pitch", 12, { over: 4 });
        s.tell("haze:leaves");
        await s.wait(4);
      },
    },
    // Э.1: the village alive — the fountain running, the children come to it, new roofs; the eye goes up to the
    // forest's edge above (on the Silence: old stumps among young oaks) and back; on the square Lina and the neighbours
    // at the pit where the stump was, the young lime lying ready; she waves the Traveller over («Зовёт Путника»), he
    // comes and the neighbour gives him the spade — the pose for МИ5 («Липа»: `traveller#spade`)
    alive: {
      after: [], tells: ["alive:village", "alive:edge", "alive:call", "alive:spade"], seconds: 24,
      from: () => merge(CAM0, SQUARE0, { stump: "dug" },
        who("lina", PIT.lina, "stand", { look: "stump#top" }), who("neighbour_a", PIT.neighbour_a, "stand", { look: "stump#top" }),
        who("neighbour_b", PIT.neighbour_b, "stand", { look: "stump#top", with: ["spade"] }),
        who("child_a", [-5.6, 10.4, 60]), who("child_b", [-6.2, 11.2, 70]), who("traveller", [6.0, 6.2, 280])),
      run: async (s) => {
        const l = s.person("lina"), t = s.person("traveller"), nb = s.person("neighbour_b");
        s.tell("alive:village");
        await s.all(
          s.person("child_a").walk([[-4.2, 11.0], PIT.child_a.slice(0, 2)]),
          s.sequence(async (q) => {
            await q.wait(0.4);
            await q.person("child_b").walk([[-5.0, 11.6], PIT.child_b.slice(0, 2)]);
          }),
        );
        s.person("child_a").look("fountain#fall");
        s.person("child_b").look("fountain#fall");
        await s.wait(1);
        s.move("camera_pitch", 7, { over: 3 });
        s.tell("alive:edge");
        await s.wait(4.5);
        await s.move("camera_pitch", 0, { over: 2.5 });
        l.look("traveller");
        await l.turn(150);
        s.move("camera_z", AT_PIT.camera_z, { over: 3 });
        s.move("camera_x", AT_PIT.camera_x, { over: 3 });
        l.go("beckon", { to: PIT.lina.slice(0, 2), turn: 150 });
        s.tell("alive:call");
        await t.walk([[3.6, 7.2], PIT.traveller.slice(0, 2)]);
        await t.turn(PIT.traveller[2]);
        t.look("lina");
        await l.turn(PIT.lina[2]);
        nb.look("traveller");
        nb.reach({ r: "traveller#hand_r" });
        await s.wait(0.8);
        nb.with([]);
        nb.reach(null);
        t.with(["spade"]);
        t.look("stump#top");
        s.tell("alive:spade");
        await s.wait(1.5);
      },
    },
    // Э.1 after МИ5: the Traveller digs the earth in round the young lime, now standing in the pit (`stump` planted,
    // `wet`); Lina presses the earth down with her foot and looks up at its leaves — close
    planted: {
      after: ["alive"], tells: ["planted:look"], seconds: 12,
      from: () => merge(AT_PIT, SQUARE0, { stump: "dug" },
        who("lina", PIT.lina, "stand", { look: "stump#top" }), who("neighbour_a", PIT.neighbour_a, "stand", { look: "stump#top" }),
        who("neighbour_b", PIT.neighbour_b, "stand", { look: "traveller" }),
        who("child_a", PIT.child_a, "stand", { look: "fountain#fall" }), who("child_b", PIT.child_b, "stand", { look: "fountain#fall" }),
        who("traveller", PIT.traveller, "stand", { look: "stump#top", with: ["spade"] })),
      run: async (s) => {
        const l = s.person("lina"), t = s.person("traveller");
        const digging = t.do("spade", { loop: false });
        await s.wait(1.6);
        s.set("stump", "planted");
        s.set("wet", true);
        await digging;
        t.do("stand");
        t.look("stump#crown");
        s.person("neighbour_a").look("stump#crown");
        s.person("neighbour_b").look("stump#crown");
        l.reach({ foot_r: "stump#top" });
        await s.wait(1.2);
        l.reach(null);
        l.look("stump#crown");
        s.camera({ target: "lina", shot: "close" });
        s.tell("planted:look");
        await s.wait(4);
      },
    },
    // «Рассказ» (the final): the Traveller comes to the fountain with Elzéard's rod, leans it on the trough (`rod`),
    // sits on the rim and opens his notebook; the insert of its pages (`notebook_open`): a page a year, «Был» on each;
    // on a blank page he writes the name (`notebook_name`)
    story: {
      after: [], tells: ["story:sit", "story:name"], seconds: 22,
      from: () => merge(CAM0, SQUARE0, { stump: "planted" },
        who("traveller", [2.2, 9.6, 300], "stand", { with: ["rod"], look: "fountain" })),
      run: async (s) => {
        const t = s.person("traveller");
        await t.walk([[-0.4, 11.2], [SEAT[0], SEAT[1] - 0.45]]);
        await t.turn(160);
        t.with([]);
        s.set("rod", true);
        await s.wait(0.5);
        t.turn(180);
        t.on(SEAT);
        t.do("sit_stone", { loop: true });
        s.move("camera_z", AT_RIM.camera_z, { over: 2.5 });
        s.move("camera_x", AT_RIM.camera_x, { over: 2.5 });
        await s.wait(1.5);
        t.with(["notebook"]);
        t.look("traveller#notebook");
        s.tell("story:sit");
        await s.wait(2);
        await s.move("notebook_open", 1, { over: 1 });
        await s.wait(3);
        s.set("notebook_page", "blank");
        await s.wait(1);
        await s.move("notebook_name", 1, { over: 3 });
        s.tell("story:name");
        await s.wait(1.5);
      },
    },
    // «Рассказ», after the narrator's line: the wind turns the pages back, to «Был»; the insert closes on him sitting
    // on the rim, the rod beside him, the notebook on his knee
    story_wind: {
      after: ["story"], tells: ["story_wind:was"], seconds: 10,
      from: () => merge(AT_RIM, SQUARE0, { stump: "planted", rod: true, notebook_open: 1, notebook_page: "blank",
        notebook_name: 1 }, who("traveller", [SEAT[0], SEAT[1], 180], loop("sit_stone"), { on: SEAT, with: ["notebook"], look: "traveller#notebook" })),
      run: async (s) => {
        await s.move("notebook_turn", 1, { over: 2.5 });
        s.set("notebook_page", "was");
        s.set("notebook_turn", 0);
        s.tell("story_wind:was");
        await s.wait(2.5);
        await s.move("notebook_open", 0, { over: 1 });
        s.person("traveller").look([0, 40, 6]);
        s.move("camera_z", 0, { over: 4 });
        s.move("camera_x", 0, { over: 4 });
        await s.wait(2);
      },
    },
  };
}

return { sm, TIMES, T, streamX, streamW, edgeA, rise, fall, slope, channel, ground, WATER, EDGE_D, D, PITCH, APEX, HOUSES, PLAN,
  houseState, front, gable, roof, chimney, oak, OAK_H, stump, AGES, film };
