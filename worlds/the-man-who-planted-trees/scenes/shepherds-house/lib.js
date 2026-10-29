// What the house's scene shares: its pieces (FILM).
// The house's pieces (stage 5; modules/beats; the contract: game.md «Stage 5 — pieces» and notes.md «Contract for the
// check»): `film(scene)` — each piece `{after, tells, seconds, from, run}`. `from` sets everything a piece begins at —
// its people's places, turns, what they do, hold and look at, the camera, the door — but never the game's:
// `<id>_here`, `<id>_mood`, the moment's keys (the hour, the hives, the bread, the hut) nor `<id>_wear`. The scene
// tells `<piece>:<moment>` where the game says its lines, and leaves the line's time after it.
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
    gourd: CAM([0.2, 3.0, 1.6], [0.35, 5.6, 1.5]),
    door: CAM([0.6, 5.4, 1.6], [1.7, 7.4, 1.55]),
    nod: CAM([0.9, 6.0, 1.65], [1.7, 7.4, 1.65]),
    ranger: CAM([0.8, 4.4, 1.6], [0.6, 6.6, 1.5]),
    elzeard: CAM([0.6, 5.2, 1.6], [1.6, 7.0, 1.6]),
    laugh: CAM([0.7, 5.7, 1.65], [1.6, 7.0, 1.65]),
    visitors: CAM([2.0, 4.8, 1.6], [2.2, 7.0, 1.5]),
    at_door: CAM([1.2, 4.8, 1.6], [2.0, 7.2, 1.3]),
    // (the last meeting: from the Traveller's side, past his shoulder, the old man's face toward the eye)
    porch: CAM([-0.2, 3.8, 1.6], [0.9, 6.8, 1.5]),
    hut: CAM([-0.6, 2.6, 1.6], [0.0, 4.8, 1.3]),
    rod_house: CAM([0.0, 4.6, 1.6], [0.8, 6.7, 1.45]),
    rod_hut: CAM([2.0, 2.6, 1.6], [0.7, 4.8, 1.45]),
  };
  const DOOR = [2.3, 7.4];

  return {
    // П.3: dusk, the lamp; the Traveller comes up the path; Elzéard at his door; he holds out a gourd of water
    climb: {
      after: [], tells: ["climb:gourd"], seconds: 16,
      from: () => merge(CAM0, { door: "open" }, who("traveller", [-1.4, -1.0, 10], "stand", { look: "window_glow#pane" }),
        who("elzeard", [1.9, 7.2, 200], "stand", { look: "traveller" })),
      run: async (s) => {
        const t = s.person("traveller"), e = s.person("elzeard");
        await t.walk([[-0.8, 2.6], [-0.4, 5.2]]);
        await t.turn(110);
        t.look("elzeard");
        await e.walk([[1.1, 6.0]]);
        await e.turn(250);
        e.with(["gourd"]);
        await e.go("offer", { to: [1.1, 6.0], turn: 250 });
        view(s, SH.gourd);
        s.tell("climb:gourd");
        await s.wait(3);
        e.with([]);
        e.do("stand");
        wide(s);
      },
    },
    // П.5 «спросить»: he gets up from the table, comes out to the dog by the door and stands there, his back to the lit
    // doorway
    out_to_dog: {
      after: [], tells: ["out_to_dog:out"], seconds: 9,
      from: () => merge(CAM0, { door: "open" }, who("elzeard", [2.3, 8.0, 180], "stand"), who("traveller", [-3.0, 1.0, 0], "stand")),
      run: async (s) => {
        const e = s.person("elzeard");
        await e.walk([[2.6, 7.2]]);
        await e.turn(110);
        e.look("dog#head");
        s.tell("out_to_dog:out");
        await s.wait(4);
      },
    },
    // 1.6: dawn; the Traveller steps over the threshold; Elzéard at the door — then the choice
    dawn_door: {
      after: [], tells: ["dawn_door:out"], seconds: 9,
      from: () => merge(CAM0, { door: "open" }, who("traveller", [2.3, 7.8, 180], "stand"), who("elzeard", [1.7, 7.4, 200], "stand", { look: "traveller" })),
      run: async (s) => {
        const t = s.person("traveller");
        await t.walk([[1.0, 6.4], [-1.3, 5.2]]);
        await t.turn(125);
        t.look("elzeard");
        s.tell("dawn_door:out");
        view(s, SH.door);
        await s.wait(1.5);
      },
    },
    // 1.6 «Я вернусь»: he looks at him and nods — «Склон тут»
    farewell_back: {
      after: ["dawn_door"], tells: ["farewell_back:nod"], seconds: 5,
      from: () => merge(CAM0, who("traveller", [-1.3, 5.2, 125], "stand", { look: "elzeard" }), who("elzeard", [1.7, 7.4, 200], "stand", { look: "traveller" })),
      run: async (s) => {
        const e = s.person("elzeard");
        view(s, SH.nod, 1);
        await e.go("nod", { to: [1.7, 7.4], turn: 215 });
        s.tell("farewell_back:nod");
        await s.wait(2.5);
        wide(s);
      },
    },
    // 1.6 a hand raised in silence: the Traveller raises his hand; Elzéard nods and turns to the sheep
    farewell_hand: {
      after: ["dawn_door"], tells: ["farewell_hand:hand"], seconds: 9,
      from: () => merge(CAM0, who("traveller", [-1.3, 5.2, 125], "stand", { look: "elzeard" }), who("elzeard", [1.7, 7.4, 200], "stand", { look: "traveller" })),
      run: async (s) => {
        const t = s.person("traveller"), e = s.person("elzeard");
        await t.go("raise_hand", { to: [-1.3, 5.2], turn: 125 });
        s.tell("farewell_hand:hand");
        await e.go("nod", { to: [1.7, 7.4], turn: 215 });
        e.look(null);
        await e.walk([[0.2, 9.6], [-1.6, 13.4]]);
      },
    },
    // 3.5 the Name, the morning: the young ranger comes to the door — «костры запрещены»; Elzéard nods gravely; the
    // ranger goes; Elzéard laughs
    ranger: {
      after: [], tells: ["ranger:speak", "ranger:nod", "ranger:laugh"], seconds: 20,
      from: () => merge(CAM0, { door: "open" }, who("ranger", [-2.6, -0.6, 20], "stand", { look: "elzeard" }), who("elzeard", [1.6, 7.0, 230], "stand", { look: "ranger" }),
        who("traveller", [-1.9, 5.0, 135], "stand", { look: "ranger" })),
      run: async (s) => {
        const r = s.person("ranger"), e = s.person("elzeard");
        await r.walk([[-1.2, 3.6], [-0.2, 6.4]]);
        await r.turn(95);
        r.look("elzeard");
        await e.turn(260);
        view(s, SH.ranger);
        s.tell("ranger:speak");
        await s.wait(4);
        view(s, SH.elzeard);
        await e.go("nod", { to: [1.6, 7.0], turn: 260 });
        s.tell("ranger:nod");
        await s.wait(1);
        wide(s);
        await r.walk([[-1.4, 3.4], [-2.8, -0.8]]);
        r.here(false);
        view(s, SH.laugh, 1);
        await e.go("laugh_short", { to: [1.6, 7.0], turn: 230 });
        s.tell("ranger:laugh");
        await s.wait(1.5);
        wide(s);
      },
    },
    // 3.5 the Name, later: the trodden path; strangers at the door — «Где тут старик?»; the house empty and clean, the
    // door open; then the guiding `door`: the Traveller shuts the door (`door` shut) and props it with a stick (propped)
    empty_house: {
      after: [], tells: ["empty_house:ask", "empty_house:door"], seconds: 18,
      from: () => merge(CAM0, { door: "open" }, who("visitor_a", [1.2, 7.1, 110], "stand", { look: "door_glow#door" }), who("visitor_b", [3.3, 7.0, 250], "stand", { look: "visitor_a" }),
        who("traveller", [-1.2, 2.4, 20], "stand", { look: "door_glow#door" })),
      run: async (s) => {
        const t = s.person("traveller"), a = s.person("visitor_a"), b = s.person("visitor_b");
        await t.walk([[-0.8, 5.0]]);
        await t.turn(150);
        a.look("traveller");
        b.look("traveller");
        view(s, SH.visitors);
        s.tell("empty_house:ask");
        await s.wait(3);
        wide(s);
        await s.all(a.walk([[0.2, 4.8], [-0.6, 0.6], [-2.4, -1.5]]), s.sequence(async (q) => {
          await q.wait(0.8);
          await q.person("visitor_b").walk([[1.6, 4.6], [0.4, 0.6], [-1.2, -1.6]]);
        }));
        a.here(false);
        b.here(false);
        await t.walk([[1.6, 6.6], [2.0, 7.25]]);
        await t.turn(195);
        t.look("door_glow#handle");
        view(s, SH.at_door);
        s.tell("empty_house:door");
      },
    },
    // Э.2 Silence: the hives, the bread on the porch; Elzéard, old, plants by his porch, slowly
    last_house: {
      after: [], tells: ["last_house:plant", "last_house:up"], seconds: 18,
      from: () => merge(CAM0, who("elzeard", [1.6, 6.6, 230], "stand", { gait: "walk_old", look: "porch_saplings:0#hole" }),
        who("traveller", [-1.6, 2.0, 30], "stand", { look: "elzeard" })),
      run: async (s) => {
        const e = s.person("elzeard"), t = s.person("traveller");
        await e.go("plant_rod", { to: [0.9, 6.8], turn: 240 });
        s.tell("last_house:plant");
        await t.walk([[-0.6, 4.4], [-0.4, 5.5]]);
        await t.turn(120);
        t.look("elzeard");
        await e.turn(260);
        e.look("traveller");
        view(s, SH.porch);
        s.tell("last_house:up");
        await s.wait(2);
      },
    },
    // Э.2 the Name: the hut beyond the ridge, the young trees behind, the seedlings ahead; the Traveller comes; Elzéard
    // does not look up at once — he finishes the row, and only then straightens
    hut: {
      after: [], tells: ["hut:up"], seconds: 34,
      from: () => merge(CAM0, who("elzeard", [-1.8, 5.2, 100], "stand", { gait: "walk_old" }), who("traveller", [-4.4, 0.6, 50], "stand", { look: "elzeard" })),
      run: async (s) => {
        const e = s.person("elzeard"), t = s.person("traveller");
        const come = t.walk([[-1.0, 2.8], [1.6, 4.4]]);
        await e.go("plant_rod", { to: [-1.4, 5.1], turn: 100 });
        await e.go("plant_rod", { to: [-0.4, 5.0], turn: 100 });
        await come;
        await t.turn(245);
        await e.go("plant_rod", { to: [0.6, 4.9], turn: 100 });
        await e.turn(150);
        e.look("traveller");
        view(s, SH.hut);
        s.tell("hut:up");
        await s.wait(2);
      },
    },
    // Э.2: he holds out the rod to the Traveller — «Тяжёлый стал» — then МИ6 (both hands on the rod: `elzeard#rod`)
    rod_held: {
      after: ["last_house", "hut"], tells: ["rod_held:out"], seconds: 8,
      from: () => (scene.get("hut") ? merge(CAM0, who("elzeard", [0.6, 4.9, 150], "stand", { look: "traveller" }), who("traveller", [1.6, 4.4, 245], "stand", { look: "elzeard" }))
        : merge(CAM0, who("elzeard", [0.9, 6.8, 260], "stand", { look: "traveller" }), who("traveller", [-0.4, 5.5, 120], "stand", { look: "elzeard" }))),
      run: async (s) => {
        const e = s.person("elzeard"), t = s.person("traveller"), hut = !!s.get("hut");
        const [ea, ed] = hut ? [0.6, 4.9] : [0.9, 6.8];
        await t.walk([[ea + (hut ? 0.75 : -0.75), ed - 0.4]]);
        await t.turn(hut ? 260 : 100);
        await e.turn(hut ? 100 : 260);
        await e.go("offer", { to: [ea, ed], turn: hut ? 100 : 260 });
        view(s, hut ? SH.rod_hut : SH.rod_house);
        s.tell("rod_held:out");
        await s.wait(2);
      },
    },
  };
}

return { film: FILM };
