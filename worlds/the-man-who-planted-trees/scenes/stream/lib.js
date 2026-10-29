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

// The stream's pieces (stage 5; modules/beats; the contract: game.md «Stage 5 — pieces» and notes.md «Contract for
// the check»): `film(scene)` — each piece `{after, tells, seconds, from, run}`. `from` sets everything a piece begins at
// — its people's places, turns, what they do, hold and look at, the camera — but never the game's: `<id>_here`,
// `<id>_mood`, the year's keys (the moment sets those) nor `<id>_wear`. The scene tells `<piece>:<moment>` where the
// game says its lines, and leaves the line's time after it.
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
  // shots: the eye and what it looks at (metres: across, ahead, up), glided to — the picture camera moved, never the
  // operator (the picture's camera walks through no one); `wide` — back to the picture
  const DEG = 180 / Math.PI, EYE = 1.7, CAMK = ["camera_x", "camera_z", "camera_h", "camera_yaw", "camera_pitch"];
  const CAM = ([ex, ez, eh], [tx, tz, th]) => ({ ...CAM0, camera_x: ex, camera_z: ez, camera_h: eh - EYE,
    camera_yaw: Math.atan2(tx - ex, tz - ez) * DEG, camera_pitch: Math.atan2(th - eh, Math.hypot(tx - ex, tz - ez)) * DEG });
  const view = (s, c, over = 1.5) => (over ? s.all(...CAMK.map((k) => s.move(k, c[k], { over, ease: "inOut" }))) : s.all(...CAMK.map((k) => s.set(k, c[k]))));
  const wide = (s, over = 1.5) => view(s, CAM0, over);
  const SH = {
    lina: CAM([0.2, 5.6, 1.5], [-1.0, 7.6, 1.5]),
    palms: CAM([-2.6, 4.6, 1.2], [-1.0, 7.0, 0.8]),
    letter: CAM([-0.2, 5.4, 1.55], [-0.9, 7.6, 1.5]),
    maples: CAM([2.0, 6.4, 1.6], [4.6, 12.0, 1.2]),
  };
  const LINA = [-1.0, 7.6];

  return {
    // 2.2: the sound of water; the Traveller comes down to the stream; Lina by it, her pail — she knows him
    water: {
      after: [], tells: ["water:meet"], seconds: 12,
      from: () => merge(CAM0, who("traveller", [4.2, 1.6, 330], "stand", { look: [-2.5, 9, 0] }), who("lina", [...LINA, 120], "stand", { look: [-2.6, 8.2, -0.3] })),
      run: async (s) => {
        const t = s.person("traveller"), l = s.person("lina");
        await t.walk([[3.2, 4.4], [2.6, 5.8]]);
        await t.turn(240);
        l.look("traveller");
        t.look("lina");
        view(s, SH.lina);
        s.tell("water:meet");
        await s.wait(3);
        wide(s);
      },
    },
    // 2.3: both kneel at the water — then МИ3 (the Traveller's right hand in the water)
    palms: {
      after: ["water"], tells: ["palms:kneel"], seconds: 9,
      from: () => merge(CAM0, who("traveller", [2.6, 5.8, 240], "stand", { look: "lina" }), who("lina", [...LINA, 120], "stand", { look: "traveller" })),
      run: async (s) => {
        const t = s.person("traveller"), l = s.person("lina");
        await s.all(t.walk([[-0.9, 6.3]]), l.walk([[-1.0, 7.5]]));
        await s.all(t.turn(265), l.turn(265));
        t.do("kneel_water");
        l.do("kneel_water");
        t.look([-2.2, 6.6, -0.3]);
        l.look([-2.2, 7.6, -0.3]);
        view(s, SH.palms);
        s.tell("palms:kneel");
        await s.wait(2);
      },
    },
    // 2.4: Lina stands with her letter, writes, and looks up the slope — then the choice «Откуда вода»
    letter: {
      after: [], tells: ["letter:write", "letter:look"], seconds: 14,
      from: () => merge(CAM0, who("traveller", [0.4, 6.6, 250], "stand", { look: "lina" }), who("lina", [-0.9, 7.6, 120], "write_standing", { with: ["letter"], look: "lina#letter" })),
      run: async (s) => {
        const l = s.person("lina");
        view(s, SH.letter, 0);
        s.tell("letter:write");
        await s.wait(4);
        l.do("stand");
        l.look([4, 60, 18]);
        s.tell("letter:look");
        await s.wait(3);
        l.look("traveller");
        wide(s);
      },
    },
    // 2.4 «Это он»: the letter into her pocket; they go up the path toward the slope
    letter_pocket: {
      after: ["letter"], tells: ["letter_pocket:go"], seconds: 10,
      from: () => merge(CAM0, who("traveller", [0.4, 6.6, 250], "stand", { look: "lina" }), who("lina", [-0.9, 7.6, 120], "stand", { with: ["letter"], look: "traveller" })),
      run: async (s) => {
        const l = s.person("lina"), t = s.person("traveller");
        l.with([]);
        s.tell("letter_pocket:go");
        await s.wait(1.5);
        await s.all(l.walk([[0.4, 9.4], [1.4, 13.2], [3.6, 16.8]]), s.sequence(async (q) => {
          await q.wait(0.6);
          await q.person("traveller").walk([[0.9, 9.0], [1.9, 13.0], [4.2, 16.6]]);
        }));
      },
    },
    // 2.4 «Земля отдохнула» / silence: she writes on; (silence) once more she looks up the slope
    letter_write: {
      after: ["letter"], tells: ["letter_write:look"], seconds: 9,
      from: () => merge(CAM0, who("traveller", [0.4, 6.6, 250], "stand", { look: "lina" }), who("lina", [-0.9, 7.6, 120], "write_standing", { with: ["letter"], look: "lina#letter" })),
      run: async (s) => {
        const l = s.person("lina");
        await s.wait(3);
        l.look([4, 60, 18]);
        s.tell("letter_write:look");
        await s.wait(2.5);
        l.look("lina#letter");
        await s.wait(1.5);
      },
    },
    // 2.6: the far edge — rows of dry maple sticks, the tiny beeches; Elzéard points
    maples: {
      after: [], tells: ["maples:point", "maples:beeches"], seconds: 12,
      from: () => merge(CAM0, who("elzeard", [3.2, 10.2, 250], "stand", { look: "traveller" }), who("traveller", [1.4, 9.4, 115], "stand", { look: "elzeard" })),
      run: async (s) => {
        const e = s.person("elzeard");
        view(s, SH.maples);
        await e.turn(80);
        e.look("maple_sticks:8");
        e.do("point");
        s.person("traveller").look("maple_sticks:8");
        s.tell("maples:point");
        await s.wait(3);
        e.do("stand");
        e.look("beech_young:4");
        s.tell("maples:beeches");
        await s.wait(2.5);
        await e.turn(250);
        e.look("traveller");
        wide(s);
      },
    },
  };
}

return { streamX, streamW, slope, channel, ground, WATER, oak, grownOak, oakOf, beech, film: FILM };
