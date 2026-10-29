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

// The forest edge's pieces (stage 5; modules/beats; the contract: game.md «Stage 5 — pieces» and notes.md «Contract
// for the check»): `film(scene)` — each piece `{after, tells, seconds, from, run}`. `from` sets everything a piece
// begins at — its people's places, turns, what they do, hold and look at, the camera, its own things (the rod in the
// ground, the pail, the new beech) — but never the game's: `<id>_here`, `<id>_mood`, the year and the branch's keys
// (the moment sets those, the game after it), nor `<id>_wear` (the moment's look of the year). The scene tells
// `<piece>:<moment>` where the game says its lines, and leaves the line's time after it.
function FILM(scene) {
  const CAM0 = { camera_target: null, camera_shot: "full", camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
    camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0 };
  const who = (id, [a, d, turn], does = "stand", more = {}) => {
    const o = { [`${id}_a`]: a, [`${id}_d`]: d, [`${id}_turn`]: turn, [`${id}_do`]: does, [`${id}_look`]: null, [`${id}_reach`]: null,
      [`${id}_on`]: null, [`${id}_with`]: [], [`${id}_gait`]: null };
    for (const [k, v] of Object.entries(more)) o[`${id}_${k}`] = v;
    return o;
  };
  const merge = (...xs) => Object.assign({}, ...xs);
  // a shot: the operator frames a target (a person's head, a point) at a size; back to the picture with `wide`
  // shots: the eye and what it looks at (metres: across, ahead, up), glided to — the picture camera moved, never the
  // operator (the picture's camera walks through no one); `wide` — back to the picture
  const DEG = 180 / Math.PI, EYE = 1.7, CAMK = ["camera_x", "camera_z", "camera_h", "camera_yaw", "camera_pitch"];
  const CAM = ([ex, ez, eh], [tx, tz, th]) => ({ ...CAM0, camera_x: ex, camera_z: ez, camera_h: eh - EYE,
    camera_yaw: Math.atan2(tx - ex, tz - ez) * DEG, camera_pitch: Math.atan2(th - eh, Math.hypot(tx - ex, tz - ez)) * DEG });
  const view = (s, c, over = 1.5) => (over ? s.all(...CAMK.map((k) => s.move(k, c[k], { over, ease: "inOut" }))) : s.all(...CAMK.map((k) => s.set(k, c[k]))));
  const wide = (s, over = 1.5) => view(s, CAM0, over);
  const SH = {
    plant: CAM([1.8, 7.2, 1.6], [-0.6, 11.6, 1.0]),
    stone: CAM([1.4, 12.6, 1.3], [0.3, 16.2, 0.95]),
    hives: CAM([-2.4, 8.6, 1.6], [-5.4, 11.3, 1.4]),
    zrya: CAM([-4.0, 10.1, 1.6], [-5.4, 11.3, 1.55]),
    own_oak: CAM([1.2, 13.2, 1.6], [-0.6, 16.8, 1.5]),
    axe_path: CAM([-1.8, 6.0, 1.6], [-2.0, 9.6, 1.4]),
    loud: CAM([0.3, 6.6, 1.6], [1.6, 8.0, 1.6]),
    chief: CAM([3.6, 5.6, 1.65], [3.4, 8.4, 1.6]),
    hug: CAM([0.6, 4.2, 1.6], [0.6, 6.3, 1.5]),
    row: CAM([2.2, 20.5, 1.7], [2.0, 26.0, 1.5]),
    row_jan: CAM([1.4, 24.6, 1.6], [2.4, 26.4, 1.6]),
    jan: CAM([0.1, 5.6, 1.6], [1.4, 7.0, 1.6]),
    jan_m: CAM([0.4, 4.8, 1.6], [1.4, 7.0, 1.5]),
    lina_named: CAM([-0.2, 6.0, 1.5], [-1.2, 7.4, 1.5]),
    lina_path: CAM([3.6, 8.4, 1.6], [2.2, 8.1, 1.55]),
    palm: CAM([-8.4, 18.2, 1.5], [-6.5, 15.8, 0.8]),
    lina_stumps: CAM([-3.6, 10.2, 1.55], [-4.0, 12.0, 1.5]),
    board: CAM([0.6, 9.4, 1.6], [-0.6, 13.6, 1.3]),
    two_rods: CAM([-0.2, 7.6, 1.15], [1.3, 10.9, 1.0]),
    pupil: CAM([0.2, 5.2, 1.5], [1.1, 7.6, 1.2]),
  };
  const old = () => (scene.get("year") >= 20 ? "walk_old" : null);
  const NONE = { rod_ground: false, pail: "none", new_beech: "none" };
  const spot = () => (scene.get("beeches") === "row" ? [scene.get("beech_next_a"), scene.get("beech_next_d")] : [2.4, 12]);

  return {
    // 1.1: the morning mist on the bare slope; Elzéard with the rod and the pail drives the rod in three times — the
    // dull blow — the Traveller watching
    rod_mist: {
      after: [], tells: ["rod_mist:blow"], seconds: 22,
      from: () => merge(CAM0, NONE, { pail: "acorns", pail_a: -1.3, pail_d: 11.0 },
        who("elzeard", [-1.6, 10.6, 110], "stand", { with: ["rod"], look: "plant_spot" }), who("traveller", [0.9, 10.4, 245], "stand", { look: "elzeard" })),
      run: async (s) => {
        const e = s.person("elzeard");
        await s.wait(1);
        await e.go("plant_rod", { to: [-0.9, 11.4], turn: 100 });
        s.tell("rod_mist:blow");
        await s.wait(1);
        view(s, SH.plant, 2);
        await e.go("plant_rod", { to: [-0.5, 11.6], turn: 100 });
        await e.go("plant_rod", { to: [-0.1, 11.8], turn: 100 });
        e.look("traveller");
        await s.wait(1);
      },
    },
    // 1.3: both sit on the flat stone by the path; his facts, the Traveller's questions
    stone: {
      after: [], tells: ["stone:sit"], seconds: 8,
      from: () => merge(CAM0, NONE, { rod_ground: true, rod_a: -0.6, rod_d: 16.0 },
        who("elzeard", [-0.05, 16.3, 165], "sit_stone", { on: [-0.05, 16.3, 0.27], look: [0, 4, 1.2] }),
        who("traveller", [0.65, 16.1, 200], "sit_stone", { on: [0.65, 16.1, 0.27], look: "elzeard" })),
      run: async (s) => {
        view(s, SH.stone, 0);
        await s.wait(1.5);
        s.tell("stone:sit");
        await s.wait(6);
      },
    },
    // 1.4: Elzéard leaves the rod standing in the earth and goes to the sheep; the rod stays — the choice on `rod#top`
    rod_left: {
      after: [], tells: ["rod_left:gone"], seconds: 9,
      from: () => merge(CAM0, NONE, { pail: "acorns", pail_a: -1.3, pail_d: 11.0 },
        who("elzeard", [-0.6, 11.6, 100], "stand", { with: ["rod"], look: "traveller" }), who("traveller", [0.9, 10.4, 245], "stand", { look: "elzeard" })),
      run: async (s) => {
        const e = s.person("elzeard");
        await s.wait(1);
        e.with([]);
        s.set("rod_a", -0.2);
        s.set("rod_d", 11.8);
        s.set("rod_ground", true);
        e.look(null);
        await e.walk([[0.8, 13.0], [2.0, 15.2]]);
        await e.turn(60);
        s.tell("rod_left:gone");
        s.person("traveller").look("rod#top");
        await s.wait(1.5);
      },
    },
    // 1.4 «take the rod»: the Traveller drives it in himself, clumsy; Elzéard comes back, looks at the hole, takes the
    // rod and plants on as if so it should be
    took_rod: {
      after: ["rod_left"], tells: ["took_rod:back"], seconds: 18,
      from: () => merge(CAM0, NONE, { rod_ground: true, rod_a: -0.2, rod_d: 11.8, pail: "acorns", pail_a: -1.3, pail_d: 11.0 },
        who("elzeard", [2.0, 15.2, 60]), who("traveller", [0.9, 10.4, 245], "stand", { look: "rod#top" })),
      run: async (s) => {
        const t = s.person("traveller"), e = s.person("elzeard");
        await t.walk([[0.3, 11.3]]);
        s.set("rod_ground", false);
        t.with(["rod"]);
        await t.go("plant_rod", { to: [0.2, 11.4], turn: 280 });
        await e.walk([[0.9, 12.6]]);
        await e.turn(230);
        e.look("plant_spot");
        s.tell("took_rod:back");
        await s.wait(2.5);
        t.with([]);
        e.with(["rod"]);
        e.look(null);
        await e.go("plant_rod", { to: [1.4, 13.2], turn: 70 });
        t.look("elzeard");
      },
    },
    // 1.4 «wait»: Elzéard comes back, pulls the rod and plants on; the Traveller counts aloud
    counting: {
      after: ["rod_left"], tells: ["counting:count"], seconds: 18,
      from: () => merge(CAM0, NONE, { rod_ground: true, rod_a: -0.2, rod_d: 11.8, pail: "acorns", pail_a: -1.3, pail_d: 11.0 },
        who("elzeard", [2.0, 15.2, 60]), who("traveller", [0.9, 10.4, 245], "stand", { look: "rod#top" })),
      run: async (s) => {
        const e = s.person("elzeard");
        await e.walk([[0.1, 12.2]]);
        s.set("rod_ground", false);
        e.with(["rod"]);
        s.person("traveller").look("elzeard");
        await e.go("plant_rod", { to: [-0.5, 12.6], turn: 100 });
        s.tell("counting:count");
        await e.go("plant_rod", { to: [-1.0, 13.0], turn: 100 });
        await s.wait(2);
      },
    },
    // 2.5: among the young oaks; the Traveller on the near bank; Elzéard by his hives across the stream («Овцы ели»);
    // (Lina knows — `lina_here`) Lina at an oak by the hives, her palm on its bark («Я всем расскажу»), then down almost
    // running; Elzéard's «Зря» — his face close
    oaks: {
      after: [], tells: ["oaks:hives", "oaks:lina", "oaks:zrya"], seconds: 26,
      from: () => merge(CAM0, NONE,
        who("traveller", [0.4, 7.2, 300], "stand", { look: [-6.5, 14, 3] }), who("elzeard", [-5.4, 11.3, 110], "stand", { look: "hives:2" }),
        who("lina", [-6.5, 13.3, 275], "touch_bark", { look: "edge_first:1#bark" })),
      run: async (s) => {
        const t = s.person("traveller"), e = s.person("elzeard");
        await t.walk([[-0.6, 8.6], [-1.1, 9.8]]);
        await t.turn(260);
        t.look("elzeard");
        e.look("traveller");
        view(s, SH.hives);
        s.tell("oaks:hives");
        await s.wait(3);
        if (s.get("lina_here")) {
          wide(s);
          const l = s.person("lina");
          l.look(null);
          s.tell("oaks:lina");
          await s.wait(2.5);
          l.do("stand");
          l.gait("run");
          await l.walk([[-4.6, 11.0], [-2.4, 8.0], [-0.4, 4.0], [1.6, 0.5]]);
          l.here(false);
          e.look("traveller");
          view(s, SH.zrya, 1);
          await s.wait(1.2);
          s.tell("oaks:zrya");
          await s.wait(2.5);
        }
        wide(s);
      },
    },
    // 2.5 (his own oak): Elzéard leads him over to the crooked oak by the stone
    own_oak: {
      after: ["oaks"], tells: ["own_oak:there"], seconds: 14,
      from: () => merge(CAM0, NONE, who("traveller", [-1.1, 9.8, 260], "stand", { look: "elzeard" }), who("elzeard", [-5.4, 11.3, 110], "stand", { look: "traveller" })),
      run: async (s) => {
        const t = s.person("traveller"), e = s.person("elzeard");
        await s.all(e.walk([[-3.6, 12.6], [-1.6, 15.6], [-0.6, 16.6]]), s.sequence(async (q) => {
          await q.wait(1);
          await q.person("traveller").walk([[-0.8, 13.0], [0.2, 15.9]]);
        }));
        await e.turn(200);
        await t.turn(240);
        e.look("own_oak#bark");
        t.look("own_oak#bark");
        view(s, SH.own_oak);
        s.tell("own_oak:there");
        await s.wait(3);
      },
    },
    // 3.1: the tall forest; (Road) the Traveller comes to the end of his row of beeches, (Slope) to his own slope; Lina
    // with her pail by the stream
    edge: {
      after: [], tells: ["edge:arrive"], seconds: 12,
      from: () => merge(CAM0, NONE, who("traveller", [4.4, 4.2, 330], "stand", { look: null }), who("lina", [-1.6, 8.6, 140], "stand", { look: "traveller" })),
      run: async (s) => {
        const t = s.person("traveller"), [a, d] = spot();
        await t.walk([[2.8, 6.0], [a + 0.6, d - 1.0]]);
        await t.turn(250);
        t.look("lina");
        s.tell("edge:arrive");
        await s.wait(2);
      },
    },
    // 3.1 (Lina does not know): the axeman with his axe by the fresh stumps; Lina steps onto the path between him and the
    // forest; «Не ничей!» — the Traveller, louder than ever; the axeman goes off down the path
    axe: {
      after: ["edge"], tells: ["axe:path", "axe:nobody", "axe:loud", "axe:whose", "axe:go"], seconds: 26,
      from: () => merge(CAM0, NONE, who("axeman", [-5.4, 10.0, 120], "stand", { look: "edge_first:0#cut" }),
        who("lina", [-1.6, 8.6, 140], "stand", { look: "axeman" }), who("traveller", [1.6, 8.0, 250], "stand", { look: "axeman" })),
      run: async (s) => {
        const l = s.person("lina"), x = s.person("axeman"), t = s.person("traveller");
        x.look("lina");
        await s.all(x.walk([[-3.6, 9.0], [-2.6, 9.4]]), l.walk([[-1.4, 9.8]]));
        await s.all(x.turn(80), l.turn(260));
        l.look("axeman");
        view(s, SH.axe_path);
        s.tell("axe:path");
        await s.wait(3);
        s.tell("axe:nobody");
        await s.wait(3);
        view(s, SH.loud, 1);
        t.look("axeman");
        s.tell("axe:loud");
        await s.wait(2);
        s.tell("axe:whose");
        await s.wait(2.5);
        l.look("traveller");
        wide(s);
        s.tell("axe:go");
        await x.walk([[-0.6, 8.6], [1.4, 7.6], [5.2, 9.6], [8.5, 12]]);
        x.here(false);
      },
    },
    // МИ4: the Traveller at his place — the end of his row (Road) or his own slope — the rod in his hand and a beech
    // sapling at his feet (`new_beech`); then the mini-game drives `new_beech` (crooked | straight)
    beech: {
      after: ["edge"], tells: ["beech:ready"], seconds: 7,
      from: () => {
        const [a, d] = spot();
        return merge(CAM0, NONE, { new_beech_a: a, new_beech_d: d }, who("traveller", [a + 0.6, d - 1.0, 250], "stand", { look: "lina" }),
          who("lina", [-1.6, 8.6, 140], "stand", { look: "traveller" }));
      },
      run: async (s) => {
        const t = s.person("traveller"), [a, d] = spot();
        s.set("new_beech_a", a);
        s.set("new_beech_d", d);
        t.with(["rod"]);
        await t.walk([[a + 0.45, d - 0.25]]);
        await t.turn(290);
        t.look("new_beech");
        view(s, CAM([a - 1.2, d - 3.0, 1.5], [a + 0.45, d - 0.25, 1.0]));
        await t.go("plant_rod", { to: [a + 0.45, d - 0.25], turn: 290 });
        s.tell("beech:ready");
      },
    },
    // 3.2: the town's people come up the path from the valley, Lina leading; the chief delighted, laughing; Jan knows
    // the Traveller — a hand on his shoulder
    delegation: {
      after: [], tells: ["delegation:jan_place", "delegation:chief", "delegation:laugh", "delegation:alive", "delegation:hug", "delegation:up"], seconds: 34,
      from: () => merge(CAM0, NONE, who("traveller", [0.2, 6.2, 110], "stand", { look: [6, 11, 1.4] }),
        who("lina", [5.6, 9.8, 300], "stand"), who("jan", [6.3, 11.0, 300], "stand"), who("chief", [6.8, 10.4, 300], "stand"), who("ranger", [7.3, 11.8, 300], "stand")),
      run: async (s) => {
        const l = s.person("lina"), j = s.person("jan"), c = s.person("chief"), r = s.person("ranger"), t = s.person("traveller");
        await s.all(l.walk([[3.0, 8.0], [-1.2, 7.4]]), c.walk([[4.6, 9.0], [3.4, 8.4]]), j.walk([[4.6, 9.8], [2.3, 6.4]]), r.walk([[5.2, 10.4], [3.6, 10.0]]));
        await s.all(l.turn(140), c.turn(215), j.turn(300), r.turn(210));
        c.look([-6, 22, 7]);
        r.look([-6, 22, 7]);
        j.look([-4, 30, 6]);
        l.look("traveller");
        s.tell("delegation:jan_place");
        await s.wait(3.5);
        view(s, SH.chief);
        s.tell("delegation:chief");
        await s.wait(4);
        await c.go("laugh_short", { to: [3.4, 8.4], turn: 215 });
        s.tell("delegation:laugh");
        await s.wait(1);
        wide(s);
        await j.turn(252);
        j.look("traveller");
        t.look("jan");
        s.tell("delegation:alive");
        await s.wait(3);
        await j.walk([[1.0, 6.4]]);
        await j.turn(260);
        j.reach({ r: [0.35, 6.2, 1.42] });
        view(s, SH.hug);
        s.tell("delegation:hug");
        await s.wait(2);
        j.reach(null);
        j.look([-4, 26, 6]);
        s.tell("delegation:up");
        await s.wait(2.5);
        wide(s);
      },
    },
    // 3.3: along a row to the wood's edge; Jan's palm on the bark («Этим за двадцать»), his notebook open on a blank page
    // — then Ш2, his face close
    the_row: {
      after: ["delegation"], tells: ["the_row:bark", "the_row:page"], seconds: 22,
      from: () => merge(CAM0, NONE, who("traveller", [0.2, 6.2, 110], "stand", { look: "jan" }), who("jan", [1.0, 6.4, 260], "stand", { look: "traveller" }),
        who("lina", [-1.2, 7.4, 140], "stand", { look: "traveller" }), who("chief", [3.4, 8.4, 215], "stand", { look: [-6, 22, 7] }), who("ranger", [3.6, 10.0, 210], "stand", { look: [-6, 22, 7] })),
      run: async (s) => {
        const j = s.person("jan"), t = s.person("traveller");
        view(s, SH.row, 5);
        await s.all(j.walk([[1.6, 12], [2.2, 20], [2.4, 26.4]]), s.sequence(async (q) => {
          await q.wait(0.8);
          await q.person("traveller").walk([[0.9, 12], [1.2, 20], [1.4, 25.8]]);
        }));
        await j.turn(10);
        j.do("touch_bark");
        s.tell("the_row:bark");
        await s.wait(3);
        await j.turn(220);
        await t.turn(110);
        j.look("traveller");
        t.look("jan");
        j.do("write_standing");
        view(s, SH.row_jan, 1.2);
        s.tell("the_row:page");
        await s.wait(2);
      },
    },
    // Ш2 «name»: Jan writes slowly; he goes to the chief and reads aloud; Lina — her line close — turns and walks ahead
    // along the path, her back to him
    named: {
      after: ["the_row"], tells: ["named:good", "named:read", "named:chief", "named:lina"], seconds: 32,
      from: () => merge(CAM0, NONE, who("traveller", [0.4, 6.6, 120], "stand", { look: "jan" }), who("jan", [1.4, 7.0, 240], "write_standing", { look: "traveller" }),
        who("lina", [-1.2, 7.4, 140], "stand", { look: "traveller" }), who("chief", [3.4, 9.4, 215], "stand", { look: "jan" }), who("ranger", [4.0, 10.6, 210], "stand", { look: "chief" })),
      run: async (s) => {
        const j = s.person("jan"), l = s.person("lina");
        view(s, SH.jan, 0);
        await s.wait(2);
        s.tell("named:good");
        await s.wait(3);
        wide(s);
        await j.walk([[2.8, 8.6]]);
        await j.turn(100);
        j.look("chief");
        s.tell("named:read");
        await s.wait(4);
        s.tell("named:chief");
        await s.wait(4);
        l.look("traveller");
        view(s, SH.lina_named, 1);
        s.tell("named:lina");
        await s.wait(3);
        wide(s);
        l.look(null);
        await l.walk([[-0.6, 10.5], [-0.8, 15]]);
      },
    },
    // Ш2 «grew» / «silent»: Jan writes and shows the page (grew) or grips his shoulder (silent); the chief reads; Lina
    // puts down her pail and stands on the path before him — close; the chief walks round her and goes down
    unnamed: {
      after: ["the_row"], tells: ["unnamed:jan", "unnamed:read", "unnamed:look", "unnamed:lina", "unnamed:whose", "unnamed:answer", "unnamed:down"], seconds: 34,
      from: () => merge(CAM0, NONE, who("traveller", [0.4, 6.6, 120], "stand", { look: "jan" }), who("jan", [1.4, 7.0, 240], "write_standing", { look: "traveller" }),
        who("lina", [-1.2, 7.4, 140], "stand", { look: "traveller" }), who("chief", [3.4, 9.4, 215], "stand", { look: "jan" }), who("ranger", [4.0, 10.6, 210], "stand", { look: "chief" })),
      run: async (s) => {
        const j = s.person("jan"), l = s.person("lina"), c = s.person("chief");
        view(s, SH.jan_m, 0);
        await s.wait(1.5);
        j.do("stand");
        if (s.get("silent")) j.reach({ l: [0.55, 6.6, 1.42] });
        s.tell("unnamed:jan");
        await s.wait(3);
        j.reach(null);
        wide(s);
        await j.walk([[2.8, 8.6]]);
        await j.turn(100);
        j.look("chief");
        s.tell("unnamed:read");
        await s.wait(5);
        j.look([-5, 9, 2]);
        s.tell("unnamed:look");
        await s.wait(2);
        await l.walk([[0.8, 7.8], [2.2, 8.1]]);
        await l.turn(70);
        l.look("chief");
        view(s, SH.lina_path, 1);
        s.tell("unnamed:lina");
        await s.wait(3);
        s.tell("unnamed:whose");
        await s.wait(2.5);
        s.tell("unnamed:answer");
        await s.wait(2.5);
        wide(s);
        s.tell("unnamed:down");
        await c.walk([[3.4, 7.2], [3.0, 5.6], [4.4, 3.0], [6.0, 1.0]]);
        c.here(false);
      },
    },
    // 3.5 Silence: the lower edge felled; Jan among the stumps, counting, his palm on a cut; he goes down; Elzéard comes
    // down from the wood between the stumps with his rod and plants; the Traveller beside him (the guiding `stumps`);
    // Lina at the stumps — close
    stumps: {
      after: [], tells: ["stumps:palm", "stumps:down", "stumps:rod", "stumps:lina"], seconds: 50,
      from: () => merge(CAM0, NONE, who("jan", [-5.4, 12.2, 160], "stand", { look: [-7.09, 16.59, 0.42] }), who("elzeard", [-9.5, 24, 160], "stand"),
        who("traveller", [-1.6, 9.0, 225], "stand", { look: "jan" }), who("lina", [-0.1, 7.6, 205], "stand", { look: "jan" })),
      run: async (s) => {
        const j = s.person("jan"), e = s.person("elzeard"), t = s.person("traveller"), l = s.person("lina");
        await j.walk([[-6.4, 15.6]]);
        await j.turn(330);
        await j.go("palm_stump", { to: [-6.6, 15.9], turn: 330 });
        view(s, SH.palm);
        s.tell("stumps:palm");
        await s.wait(4);
        j.do("stand");
        await j.turn(150);
        j.look("traveller");
        s.tell("stumps:down");
        await s.wait(3);
        wide(s);
        const down = s.sequence(async (q) => {
          await q.person("jan").walk([[-3.6, 11.2], [-0.8, 6.0], [1.8, 2.0]]);
          q.person("jan").here(false);
        });
        e.gait("walk_old");
        await e.walk([[-8.2, 20.0], [-6.8, 15.0]]);
        await e.go("plant_rod", { to: [-6.3, 14.4], turn: 140 });
        s.tell("stumps:rod");
        t.with(["rod"]);
        await t.walk([[-3.0, 11.4], [-5.2, 13.6]]);
        await t.turn(150);
        t.look("elzeard");
        await down;
        await l.walk([[-1.6, 9.4], [-4.0, 12.0]]);
        await l.turn(170);
        l.look("elzeard");
        view(s, SH.lina_stumps, 1);
        s.tell("stumps:lina");
        await s.wait(3);
        wide(s);
      },
    },
    // «Табличка»: the board, visitors reading aloud; the Traveller presses the rod in under the board, lays an acorn,
    // closes the earth with his foot — they do not turn — and goes
    plaque: {
      after: [], tells: ["plaque:read", "plaque:rod"], seconds: 22,
      from: () => merge(CAM0, NONE, who("visitor_a", [-1.5, 12.6, 75], "stand", { look: "board#plate" }), who("visitor_b", [0.5, 12.3, 265], "stand", { look: "board#plate" }),
        who("traveller", [1.4, 6.4, 330], "stand", { with: ["rod"], look: "board#plate" })),
      run: async (s) => {
        const t = s.person("traveller");
        view(s, SH.board);
        s.tell("plaque:read");
        await s.wait(4);
        await t.walk([[0.6, 10.5], [-0.3, 12.9]]);
        await t.go("plant_rod", { to: [-0.45, 13.1], turn: 0 });
        s.tell("plaque:rod");
        await s.wait(1.5);
        wide(s);
        await t.walk([[0.6, 10.0], [1.6, 6.0], [3.0, 2.0]]);
        t.here(false);
      },
    },
    // «Два прута»: among his beeches he plants with his own rod; Elzéard's rod stands in the earth beside him; the pail of
    // seeds wrapped in notebook leaves; below, the old stumps and young oaks
    two_rods: {
      after: [], tells: ["two_rods:plant"], seconds: 12,
      from: () => merge(CAM0, NONE, { rod_ground: true, rod_a: 2.3, rod_d: 11.8, pail: "leaves", pail_a: 1.7, pail_d: 10.9 },
        who("traveller", [1.2, 10.4, 200], "stand", { with: ["rod"], look: "rod#top" })),
      run: async (s) => {
        const t = s.person("traveller");
        view(s, SH.two_rods);
        await t.go("plant_rod", { to: [1.3, 11.0], turn: 160 });
        s.tell("two_rods:plant");
        t.look("rod#top");
        await s.wait(3);
      },
    },
    // «Ученик»: the visitors round him — «Это вы — Эльзеар?» — «Нет»; he gives the boy the rod and sets his hands on it
    pupil: {
      after: [], tells: ["pupil:ask", "pupil:no", "pupil:hands"], seconds: 18,
      from: () => merge(CAM0, NONE, who("traveller", [0.6, 8.0, 200], "stand", { with: ["rod"], look: "visitor_a" }), who("boy", [1.6, 7.2, 245], "stand", { look: "traveller" }),
        who("visitor_a", [-0.7, 9.2, 160], "stand", { look: "traveller" }), who("visitor_b", [2.6, 8.6, 215], "stand", { look: "traveller" })),
      run: async (s) => {
        const t = s.person("traveller"), b = s.person("boy");
        view(s, SH.pupil);
        s.tell("pupil:ask");
        await s.wait(3);
        s.tell("pupil:no");
        await s.wait(2);
        t.look("boy");
        t.with([]);
        b.with(["rod"]);
        t.reach({ r: "boy#hand_r", l: "boy#hand_r" });
        s.tell("pupil:hands");
        await s.wait(3);
        t.reach(null);
        wide(s);
      },
    },
  };
}

return { streamX, streamW, edgeA, browA, slope, channel, ground, WATER, oak, youngOak, oakOf, beech, stump, pathX, rowPlace, beechHeight, film: FILM };
