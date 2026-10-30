// The bureau's shared code: where its people stand and sit (SPOTS — script.js lays them out by their spot keys, the
// pieces start from the same places), the map's geometry (MAP — the map's painting and its animate), and its pieces
// (stage 5; modules/beats; the contract: docs/new-games/nochnoj-polyot/game.md «Stage 5 — pieces»): `film(scene)` —
// each piece `{after, tells, seconds, from, run}`. `from` — every value a piece begins at but the game's (`<id>_here`,
// `<id>_mood`, the variants its row names: `time` of `she`, `tape_mark` of `last_tape`, `roblet` of `dawn`, `robineau`
// of chapter IV, `outside` and the flags of `next_evening`; and the blue flag from the bearing on — where the game put
// it); `run` — the director's sequence, its moments told (`<piece>:<moment>`), ending in a living pose.
//   The room (metres: across right of the middle, distance away): 6 m wide (−3…3), its floor 1.6…7.4 m ahead, seen
// from its open side. The door onto the field in the left wall at 4.0…5.1 m (whoever comes in waits outside, unseen
// behind the wall, at OUT); Rivière's office door in the back wall at across −2.7…−1.8 (behind it, unseen, at IN_OFFICE);
// the map on the back wall left of the window, the clock over it; the bench under the window; the telegraph table on
// the right; Robineau's desk near the viewer on the right.
const BENCH = 6.82; // the bench under the window: where one sits on it (its seat 0.47 m up)
const SPOTS = {
  riviere: {
    map: { at: [-0.35, 5.85], turn: 235, does: 'hands_behind' },
    desk: { at: [1.1, 3.95], turn: 160, does: 'hands_behind' },
    bench: { at: [0.45, BENCH], turn: 180, does: 'fly_seated', on: [0.45, BENCH, 0.47] },
    inker: { at: [1.45, 5.35], turn: 120, does: 'stand' },
    flags: { at: [-1.0, 6.72], turn: 35, does: 'stand' },
  },
  robineau: {
    desk: { at: [2.75, 4.05], turn: 200, does: 'hold_waist' },
    writing: { at: [2.35, 3.95], turn: 180, does: 'desk_lean', on: [2.35, 3.95, 0.54], wear: { parts: ['moustache'] } },
    bench: { at: [1.05, BENCH], turn: 180, does: 'fly_seated', on: [1.05, BENCH, 0.47] },
  },
  pilot: {
    standing: { at: [1.0, 5.0], turn: 215, does: 'stand_easy' },
    bench: { at: [0.15, BENCH], turn: 180, does: 'fly_seated', on: [0.15, BENCH, 0.47] },
  },
  telegraphist: {
    table: { at: [2.15, 6.3], turn: 190, does: 'desk_lean', reach: { r: [1.95, 5.95, 0.83] } },
    bench: { at: [0.55, BENCH], turn: 180, does: 'fly_seated', on: [0.55, BENCH, 0.47] },
  },
  madame: {
    door: { at: [-2.3, 4.55], turn: 120, does: 'coat_clutch' },
    inker: { at: [1.6, 6.7], turn: 150, does: 'coat_clutch' },
  },
};

// The map's geometry, in the map's own metres as painted (before it is hung 0.2 m lower): lon/lat to x/y; where each
// flag stands by its key ([lon, lat]; at the field each has its own place about the dot); the drawer under the map.
const X = lon => -1.2 + (lon + 80) * 0.0533;
const Y = lat => -2.82 + (-14 - lat) * 0.0402;
const FIELD = [X(-58.4), Y(-34.6)];
const AT = {
  blue: { south: [-69.2, -51.6], san_julian: [-67.7, -49.3], trelew: [-65.3, -43.25], sea: [-63.4, -43.6], off: null },
  west: { air: [-69.6, -33.1], field: 'field', off: null },
  north: { air: [-59.2, -29.2], field: 'field', off: null },
  red: { field: 'field', north: [-55.4, -31.6], off: null },
};
const NEAR = { blue: [0.03, 0.01], west: [-0.03, 0], north: [0.01, 0.01], red: [0.05, -0.005] };
// the drawer's mouth in the map's metres: the table at across −1.3 (the map's middle at −0.5), 0.64 m up
const DRAWER = [-0.8, -0.84];
const MAP = {
  X, Y, FIELD, DRAWER,
  where(name, key) {
    const p = AT[name]?.[key] ?? null;
    if (p === 'field') return [FIELD[0] + NEAR[name][0], FIELD[1] + NEAR[name][1]];
    return p && [X(p[0]), Y(p[1])];
  },
  // where a led flag is going (`flag_to`): `off` — the drawer
  to(name, key) {
    if (key === 'off') return DRAWER;
    return MAP.where(name, key);
  },
};

function film(scene) {
  const DEG = 180 / Math.PI, EYE = 1.7;
  const CAMK = ['camera_x', 'camera_z', 'camera_h', 'camera_yaw', 'camera_pitch'];
  const CAM0 = { camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
    camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0 };
  // a camera of its own: the eye [across, distance, height] looking at a point [across, distance, height] (the
  // operator would go round the people toward the room's open side, where nothing is)
  const CAM = ([ex, ez, eh], [tx, tz, th]) => ({ ...CAM0, camera_x: ex, camera_z: ez, camera_h: eh - EYE,
    camera_yaw: Math.atan2(tx - ex, tz - ez) * DEG, camera_pitch: Math.atan2(th - eh, Math.hypot(tx - ex, tz - ez)) * DEG });
  const glide = (s, c, over) => s.all(...CAMK.map(k => s.move(k, c[k], { over, ease: 'inOut' })));
  const SH = {
    wide: CAM0,
    inker: CAM([2.05, 4.55, 1.3], [2.35, 5.8, 0.95]), // the inker and its tape, close
    tel: CAM([1.55, 4.35, 1.35], [2.15, 6.3, 1.2]), // the telegraphist's face over the table
    tel_med: CAM([0.45, 3.85, 1.6], [1.8, 6.0, 1.15]), // the telegraphist and the inker, Rivière at it
    key: CAM([1.65, 5.0, 1.3], [1.95, 5.95, 0.85]), // his hand over the key
    clock: CAM([-0.3, 5.5, 2.15], [-0.5, 7.35, 2.95]), // the clock's face
    map: CAM([-1.4, 4.3, 1.65], [-0.35, 5.85, 1.6]), // Rivière at the map, his face
    riv: CAM([-1.05, 4.85, 1.65], [-0.35, 5.85, 1.62]), // the same, close
    flags: CAM([0.35, 5.25, 1.7], [-0.75, 7.2, 1.45]), // Rivière close before the map's south, leading a flag
    flag_close: CAM([-0.45, 6.1, 1.6], [-0.65, 7.35, 1.6]), // the flags at the field, close
    face_flags: CAM([0.0, 5.1, 1.65], [-1.0, 6.72, 1.6]), // Rivière at the map turned to the room, close
    two_map: CAM([0.05, 3.85, 1.65], [0.05, 5.75, 1.55]), // two by the map
    her: CAM([-1.05, 3.3, 1.6], [-2.3, 4.55, 1.55]), // her by the field door
    her_close: CAM([-1.55, 3.75, 1.57], [-2.3, 4.55, 1.53]),
    her_riv: CAM([-1.15, 5.05, 1.62], [-2.3, 4.55, 1.52]), // her face at the door, from the side of the one she looks at
    her_all: CAM([-0.6, 3.9, 1.6], [-2.3, 4.55, 1.5]), // her face by the field door, turned to the telegraphist
    her_inker: CAM([0.9, 4.9, 1.6], [1.6, 6.7, 1.5]), // her behind the telegraphist
    // Rivière at the telephone: from before his face (he stands turned to Robineau's desk and the telephone on it, to
    // the right of the lens; listening, he looks out past it)
    desk: CAM([1.6, 2.55, 1.65], [1.1, 3.95, 1.62]),
    desk_close: CAM([1.5, 2.95, 1.65], [1.1, 3.95, 1.63]),
    rob: CAM([2.15, 2.6, 1.6], [2.65, 4.05, 1.5]), // Robineau at his desk
    rob_close: CAM([2.35, 3.0, 1.55], [2.7, 4.05, 1.52]),
    rob_phone: CAM([1.25, 2.7, 1.6], [1.6, 3.85, 1.55]), // Robineau at the telephone, beside Rivière,
    phone_two: CAM([1.2, 2.45, 1.65], [1.45, 4.0, 1.5]), // Rivière and Robineau at the telephone
    write: CAM([1.75, 2.7, 1.55], [2.2, 4.15, 1.3]), // Robineau writing, Rivière's hand over his shoulder
    bench: CAM([0.7, 4.5, 1.4], [0.65, 6.82, 1.15]), // the bench
    pilot: CAM([0.35, 3.4, 1.65], [0.9, 5.0, 1.6]), // the European pilot standing
    talk: CAM([-0.2, 2.95, 1.65], [0.1, 4.55, 1.58]), // the Asunción pilot and Rivière, mid-room
    door: CAM([-0.6, 3.1, 1.7], [-2.6, 4.6, 1.5]), // the field door
    office: CAM([-0.6, 5.0, 1.7], [-2.25, 7.1, 1.4]), // the office door
    window: CAM([0.6, 4.6, 1.75], [1.8, 7.6, 1.65]), // toward the window and the field beyond
    at_window: CAM([1.2, 4.7, 1.75], [2.3, 7.5, 1.55]), // Rivière at the window, the field beyond
    // the last minute's choice (3.3): from the front right, Rivière at the inker on the left, his face, the
    // telegraphist's hand over the key and his face on the right — the one who chooses and what waits on it
    minute: CAM([2.4, 3.6, 1.6], [1.75, 5.6, 1.25]),
    // ... and then the choice itself: Rivière at the inker turned to her by the field door, the telegraphist's hand over
    // the key on the right — the one who chooses, the one it is for, the one who waits on it
    minute_her: CAM([-0.5, 1.95, 1.65], [-0.45, 5.0, 1.42]),
    // Robineau's shoulders (3.7): the two — Robineau at his desk on the right, Rivière at the map looking at him on the
    // left — for what Rivière says to him
    shoulders: CAM([1.1, 1.0, 1.7], [1.4, 4.9, 1.45]),
  };
  const OUT = [-4.2, 3.6]; // outside the field door, unseen behind the left wall
  const DOOR = [-3.1, 4.55]; // the field door's threshold
  const IN = [-2.3, 4.6]; // just inside it
  const IN_OFFICE = [-2.27, 8.35]; // in the office, unseen behind the back wall
  const ODOOR = [-2.27, 7.42]; // the office door's threshold
  const OIN = [-2.2, 6.75]; // just out of it
  const PILOT_UP = { pilot_a: 0.0, pilot_d: 6.45, pilot_turn: 200, pilot_do: 'stand_easy', pilot_on: null };
  const NIGHT = { lamps: 1, office: 1, tape: 0, receiver_off: false, outside: 'european', flag_hand: 'none', flag_to: 'san_julian', flag_u: 0, flag_slip: 0,
    drawer: 0, tape_pull: 0, office_door: 180 };
  const FLAGS = {
    evening: { blue: 'south', west: 'air', north: 'air', red: 'field' },
    julian: { blue: 'san_julian', west: 'air', north: 'air', red: 'field' },
    night: { blue: 'trelew', west: 'field', north: 'field', red: 'field' },
    // from the bearing on the blue flag is where the game put it (by Trelew, or out in the sea)
    late: { west: 'field', north: 'field', red: 'field' },
  };
  const clock = (h, m) => h * 60 + m;
  // a person's whole starting state at a spot (or at a place: [a, d, turn, does]): where, facing, doing; the seat; nothing
  // in the hands but the look's own, no reach, looking where told
  const at = (id, where, look = null, more = {}) => {
    const p = typeof where === 'string' ? SPOTS[id][where] : { at: [where[0], where[1]], turn: where[2], does: where[3] ?? 'stand' };
    const v = {
      [`${id}_a`]: p.at[0], [`${id}_d`]: p.at[1], [`${id}_turn`]: p.turn, [`${id}_do`]: p.does, [`${id}_on`]: p.on ?? null,
      [`${id}_reach`]: p.reach ?? null, [`${id}_look`]: look, [`${id}_with`]: [],
    };
    if (id === 'robineau' || id === 'pilot') v[`${id}_wear`] = p.wear ?? null;
    return { ...v, ...more };
  };
  // everyone at the places most steps have them (each piece moves from these what it needs)
  const ALL = (o = {}) => ({
    ...at('riviere', 'map', 'map'),
    ...at('robineau', 'desk', 'riviere'),
    ...at('telegraphist', 'table', 'tel_inker'),
    ...at('pilot', 'bench', 'riviere'),
    ...at('madame', 'door', 'riviere'),
    ...at('asuncion', [0.6, 5.2, 240, 'stand_easy'], 'riviere'),
    ...o,
  });
  // Robineau where the game's `robineau` (what Rivière said to him, 3.7) puts him in chapter IV: work — at his desk
  // over the report; else standing at his desk (silent: the game has him not here)
  const robIV = () => (scene.get('robineau') === 'work' ? at('robineau', 'writing', 'rob_top') : at('robineau', 'desk', 'riviere'));
  // one comes in by the field door from outside to a place and turns
  const comeIn = async (s, id, path, turn) => {
    const p = s.person(id);
    await p.walk([DOOR, IN, ...path]);
    await p.turn(turn);
  };
  const sitOn = async (s, id, x) => {
    const p = s.person(id);
    await p.walk([[x, 6.4]]);
    await p.turn(180);
    await p.do('sit_down');
    s.set(`${id}_on`, [x, BENCH, 0.47]);
    p.do('fly_seated');
  };
  const standUp = async (s, id, x) => {
    const p = s.person(id);
    await p.do('stand_up');
    s.set(`${id}_on`, null);
    s.set(`${id}_a`, x);
    s.set(`${id}_d`, 6.45);
    p.do('stand_easy');
  };
  // one put at a spot within a piece: its spot key and every value it lays out (the script would do the same)
  const placeAt = (s, id, spot) => {
    s.set(`${id}_spot`, spot);
    for (const [k, v] of Object.entries(at(id, spot))) if (!k.endsWith('_look') && !k.endsWith('_with')) s.set(k, v);
  };
  // Rivière stands holding the drawn tape, reading it
  const tapeRead = s => {
    const r = s.person('riviere');
    r.do('stand');
    r.look('riviere#hands');
  };
  // the evening's room (the epilogue's pieces after `next_evening`: the window and the flags are the game's)
  const EVE = { lamps: 1, office: 1, tape: 0, flag_hand: 'none', flag_to: 'san_julian', flag_u: 0, flag_slip: 0, drawer: 0, tape_pull: 0, office_door: 180 };
  // the office door opened, someone through it, shut again
  const officeDoor = (s, to) => s.move('office_door', to, { over: 1, ease: 'inOut' });

  return {
    // ——— the prologue ———
    // П.2: the inker's tape, the telegraphist tapping, then Rivière, who goes close to the map (М1 `flag` after it)
    inker: {
      tells: ['inker:read', 'inker:map'],
      seconds: 6,
      from: () => ({ ...NIGHT, time: clock(19, 50), tape: 1, ...FLAGS.evening,
        ...ALL({ ...at('telegraphist', 'table', 'tel_inker', { telegraphist_do: 'tap_key', telegraphist_reach: null }) }), ...SH.inker }),
      run: async s => {
        const r = s.person('riviere'), t = s.person('telegraphist');
        await s.wait(1.2);
        await glide(s, SH.tel, 1.3);
        s.tell('inker:read');
        t.do('desk_lean');
        t.reach({ r: [1.95, 5.95, 0.83] });
        await s.wait(1);
        s.set('tape', 0);
        glide(s, SH.flags, 2.5);
        await r.walk([[-0.8, 6.3], SPOTS.riviere.flags.at]);
        await r.turn(35);
        r.do('stand');
        r.look('map#blue');
        s.tell('inker:map');
      },
    },
    // П.2: after the flag — he turns from the map; his hand to his side for a moment
    ache: {
      after: ['inker'],
      tells: ['ache:say', 'ache:hand'],
      seconds: 4,
      from: () => ({ ...NIGHT, time: clock(19, 52), ...FLAGS.julian, ...ALL({ ...at('riviere', 'flags', 'map#blue') }), ...SH.flags }),
      run: async s => {
        const r = s.person('riviere');
        glide(s, SH.face_flags, 1.2);
        r.look(null);
        await r.turn(170);
        s.tell('ache:say');
        await s.wait(0.8);
        await r.do('side_ache');
        s.tell('ache:hand');
        r.do('hands_behind');
        await s.wait(0.5);
      },
    },
    // П.3: five past ten, dark outside; Robineau comes from his desk to Rivière at the map with his folder
    papers: {
      tells: ['papers:near'],
      seconds: 6,
      from: () => ({ ...NIGHT, time: clock(22, 5), ...FLAGS.julian, ...ALL({ ...at('riviere', 'map', 'robineau'), ...at('telegraphist', 'table', 'riviere') }),
        ...SH.wide }),
      run: async s => {
        const r = s.person('riviere'), b = s.person('robineau');
        await b.walk([[1.6, 4.6], [0.5, 5.7]]);
        glide(s, SH.two_map, 2);
        await s.all(b.turn(210), r.turn(150));
        s.tell('papers:near');
        await s.wait(1.5);
      },
    },
    // П.3: Rivière goes out by the field door
    out: {
      after: ['papers'],
      tells: ['out:door'],
      seconds: 6,
      from: () => ({ ...NIGHT, time: clock(22, 8), ...FLAGS.julian,
        ...ALL({ ...at('riviere', [-0.35, 5.85, 150, 'hands_behind'], 'robineau'), ...at('robineau', [0.5, 5.7, 210, 'hold_waist'], 'riviere') }), ...SH.two_map }),
      run: async s => {
        const r = s.person('riviere'), b = s.person('robineau');
        glide(s, SH.wide, 2);
        await r.walk([[-1.4, 5.0], IN, DOOR]);
        b.look(DOOR);
        s.tell('out:door');
        await r.walk([OUT]);
        r.here(false);
        await s.wait(0.5);
      },
    },

    // ——— chapter II ———
    // 2.1 (after М1 `flag_north` in the step's opening shot — Rivière at the map, riviere_spot `flags`): the Asunción
    // pilot comes in by the field door, lays his report on Robineau's desk, turns to Rivière, who comes forward
    // 2.1, before М1 `flag_north`: twenty past eleven, the Asunción mail coming down — in the window the floodlight
    // and its lamp over the field (`outside` the game's: landing); the inker; then close on Rivière at the map's south
    asuncion_flag: {
      tells: ['asuncion_flag:landed', 'asuncion_flag:map'],
      seconds: 7,
      from: () => ({ ...NIGHT, time: clock(23, 20), tape: 1, ...FLAGS.night, north: 'air', west: 'field', blue: 'trelew',
        ...ALL({ ...at('riviere', 'flags', 'map'), ...at('telegraphist', 'table', 'tel_inker'), ...at('asuncion', [OUT[0], OUT[1], 90, 'stand_easy'], null) }),
        ...SH.wide }),
      run: async s => {
        await s.wait(4.5);
        s.tell('asuncion_flag:landed');
        await s.wait(1);
        await glide(s, SH.flags, 1.6);
        s.tell('asuncion_flag:map');
      },
    },
    asuncion_in: {
      tells: ['asuncion_in:report'],
      seconds: 8,
      from: () => ({ ...NIGHT, time: clock(23, 20), tape: 1, ...FLAGS.night,
        ...ALL({ ...at('riviere', 'flags', 'map'), ...at('asuncion', [OUT[0], OUT[1], 90, 'stand_easy'], null), ...at('telegraphist', 'table', 'tel_inker') }),
        ...SH.wide }),
      run: async s => {
        const a = s.person('asuncion'), r = s.person('riviere');
        s.set('tape', 0);
        await comeIn(s, 'asuncion', [[-0.6, 4.35], [1.55, 4.05]], 180);
        r.look('asuncion');
        a.with(['form']);
        await a.do('lay_paper');
        a.with([]);
        a.do('stand_easy');
        glide(s, SH.talk, 2);
        r.walk([[-0.6, 5.6], [-0.45, 4.75]]).then(() => r.turn(105));
        await a.walk([[0.75, 4.45]]);
        await a.turn(255);
        a.look('riviere');
        r.do('hands_behind');
        r.look('asuncion');
        s.tell('asuncion_in:report');
        await s.wait(0.5);
      },
    },
    // 2.1: the inker again; the telegraphist reads the south's two reports; Rivière turns to him and gives the order
    storm_south: {
      after: ['asuncion_in'],
      tells: ['storm_south:read', 'storm_south:order'],
      seconds: 6,
      from: () => ({ ...NIGHT, time: clock(23, 25), ...FLAGS.night,
        ...ALL({ ...at('riviere', [-0.45, 4.75, 105, 'hands_behind'], 'asuncion'), ...at('asuncion', [0.75, 4.45, 255, 'stand_easy'], 'riviere') }),
        ...SH.talk }),
      run: async s => {
        const r = s.person('riviere'), t = s.person('telegraphist');
        s.set('tape', 1);
        await glide(s, SH.tel, 1.2);
        t.look('tel_inker#ink');
        s.tell('storm_south:read');
        await s.wait(1.5);
        s.set('tape', 0);
        t.look('riviere');
        await r.walk([[0.9, 5.2]]);
        await r.turn(90);
        r.look('telegraphist');
        s.person('asuncion').look('telegraphist');
        await glide(s, SH.tel_med, 1.2);
        s.tell('storm_south:order');
        await s.wait(0.5);
      },
    },
    // 2.3: half past twelve; Robineau comes back from supper by the field door, his overcoat on, to his desk
    back: {
      tells: ['back:desk'],
      seconds: 6,
      from: () => ({ ...NIGHT, time: clock(0, 30), ...FLAGS.night,
        ...ALL({ ...at('riviere', 'map', 'robineau'), ...at('robineau', [OUT[0], OUT[1], 90, 'hold_waist'], 'riviere', { robineau_wear: { garment: 'coat' } }) }),
        ...SH.wide }),
      run: async s => {
        await comeIn(s, 'robineau', [[1.3, 4.25], SPOTS.robineau.desk.at], 200);
        await glide(s, SH.rob, 1.5);
        s.tell('back:desk');
      },
    },
    // 2.3 (the fine signed by him): he opens his folder and shifts the papers in it
    folder_shift: {
      after: ['back'],
      tells: ['folder_shift:end'],
      seconds: 4,
      from: () => ({ ...NIGHT, time: clock(0, 31), ...FLAGS.night,
        ...ALL({ ...at('riviere', 'map', 'robineau'), ...at('robineau', 'desk', 'riviere', { robineau_wear: { garment: 'coat' } }) }), ...SH.rob }),
      run: async s => {
        const b = s.person('robineau');
        glide(s, SH.rob_close, 1);
        b.look('robineau#hand_l');
        b.reach({ r: 'robineau#hand_l' });
        await s.wait(1.2);
        b.reach({ r: 'robineau#chest' });
        await s.wait(0.8);
        b.reach({ r: 'robineau#hand_l' });
        await s.wait(1);
        b.reach(null);
        s.tell('folder_shift:end');
      },
    },
    // 2.3 (the fine signed by Rivière): Rivière goes to the map, his back to the room
    to_map: {
      after: ['back'],
      tells: ['to_map:end'],
      seconds: 4,
      from: () => ({ ...NIGHT, time: clock(0, 31), ...FLAGS.night,
        ...ALL({ ...at('riviere', 'map', 'robineau'), ...at('robineau', 'desk', 'riviere', { robineau_wear: { garment: 'coat' } }) }), ...SH.rob }),
      run: async s => {
        const r = s.person('riviere');
        glide(s, SH.map, 1.5);
        await r.walk([[-0.6, 6.55]]);
        await r.turn(10);
        r.look('map');
        r.do('hands_behind');
        s.tell('to_map:end');
      },
    },
    // 2.3 (the fine torn up): Robineau sees «Fabien» on the tape, falls silent, takes off his overcoat
    coat_off: {
      after: ['back'],
      tells: ['coat_off:end'],
      seconds: 5,
      from: () => ({ ...NIGHT, time: clock(0, 31), ...FLAGS.night,
        ...ALL({ ...at('riviere', 'map', 'robineau'), ...at('robineau', 'desk', 'riviere', { robineau_wear: { garment: 'coat' } }) }), ...SH.rob }),
      run: async s => {
        const b = s.person('robineau');
        b.look('tel_inker');
        await s.wait(1);
        await b.do('coat_off');
        s.set('robineau_wear', null);
        b.do('hold_waist');
        b.look('rob_top');
        s.tell('coat_off:end');
      },
    },
    // 2.3: the European pilot comes in by the field door, his helmet in his hand, looks at the map, sits on the bench
    pilot_in: {
      after: ['coat_off'],
      tells: ['pilot_in:look', 'pilot_in:sat'],
      seconds: 10,
      from: () => ({ ...NIGHT, time: clock(0, 40), ...FLAGS.night,
        ...ALL({ ...at('riviere', 'map', 'pilot'), ...at('robineau', 'desk', 'rob_top'), ...at('pilot', [OUT[0], OUT[1], 90, 'stand_easy'], null) }), ...SH.wide }),
      run: async s => {
        const p = s.person('pilot');
        await p.walk([DOOR, IN, [-1.2, 5.3]]);
        await p.turn(20);
        p.look('map');
        s.tell('pilot_in:look');
        await s.wait(1.5);
        p.look(null);
        glide(s, SH.bench, 3);
        await sitOn(s, 'pilot', 0.15);
        placeAt(s, 'pilot', 'bench');
        p.look('riviere');
        s.tell('pilot_in:sat');
        await s.wait(0.5);
      },
    },
    // 2.4: twenty-five to two; the telephone; Rivière takes the receiver
    phone: {
      tells: ['phone:receiver'],
      seconds: 5,
      from: () => ({ ...NIGHT, time: clock(1, 35), ...FLAGS.night,
        ...ALL({ ...at('riviere', 'desk', 'rob_phone'), ...at('telegraphist', 'table', 'riviere'), ...at('robineau', 'desk', 'riviere') }), ...SH.desk }),
      run: async s => {
        const r = s.person('riviere');
        await s.wait(1);
        r.reach({ l: 'rob_phone#phone' });
        await s.wait(0.8);
        r.reach(null);
        r.with(['receiver']);
        s.set('receiver_off', true);
        r.do('phone_listen');
        r.look([1.8, 2.4, 1.55]);
        await glide(s, SH.desk_close, 1.5);
        s.tell('phone:receiver');
        await s.wait(0.5);
      },
    },
    // 2.4 (Robineau): Rivière holds the receiver out to Robineau; Robineau listens, says the wind, hangs up, does not
    // raise his eyes
    phone_robineau: {
      after: ['phone'],
      tells: ['phone_robineau:talk', 'phone_robineau:down'],
      seconds: 9,
      from: () => ({ ...NIGHT, time: clock(1, 36), ...FLAGS.night,
        ...ALL({ ...at('riviere', 'desk', null, { riviere_with: ['receiver'], riviere_do: 'phone_listen' }), ...at('robineau', 'desk', 'riviere') }), receiver_off: true, ...SH.desk_close }),
      run: async s => {
        const r = s.person('riviere'), b = s.person('robineau');
        glide(s, SH.phone_two, 1.5);
        await b.walk([[1.6, 3.85]]);
        await b.turn(235);
        await r.turn(125);
        r.look('robineau');
        await r.do('hand_receiver');
        s.set('robineau_wear', { parts: ['moustache'] });
        r.with([]);
        b.with(['receiver']);
        r.do('hands_behind');
        b.do('phone_listen');
        b.look(null);
        await glide(s, SH.rob_phone, 1.2);
        s.tell('phone_robineau:talk');
        await s.wait(3);
        b.reach({ l: 'rob_phone#phone' });
        await s.wait(0.8);
        b.reach(null);
        b.with([]);
        s.set('receiver_off', false);
        s.set('robineau_wear', null);
        b.do('hold_waist');
        b.look('rob_top');
        s.tell('phone_robineau:down');
        await s.wait(0.5);
      },
    },
    // 2.4 (Rivière himself): he hangs up
    phone_down: {
      after: ['phone'],
      tells: ['phone_down:end'],
      seconds: 3,
      from: () => ({ ...NIGHT, time: clock(1, 36), ...FLAGS.night,
        ...ALL({ ...at('riviere', 'desk', null, { riviere_with: ['receiver'], riviere_do: 'phone_listen' }) }), receiver_off: true, ...SH.desk_close }),
      run: async s => {
        const r = s.person('riviere');
        r.reach({ l: 'rob_phone#phone' });
        await s.wait(0.8);
        r.reach(null);
        r.with([]);
        s.set('receiver_off', false);
        r.do('hands_behind');
        r.look('rob_phone');
        await s.wait(1.5);
        s.tell('phone_down:end');
      },
    },

    // ——— chapter III ———
    // 3.1 (`time` the game's: a quarter to two told the storm, ten past two the wind): she comes in at the field door
    // and stops, her coat held round her; Rivière turns to her; the pilot gets up from the bench
    she: {
      tells: ['she:in', 'she:up'],
      seconds: 8,
      from: () => ({ ...NIGHT, ...FLAGS.night,
        ...ALL({ ...at('riviere', 'map', 'map'), ...at('robineau', [0.4, 5.55, 235, 'hold_waist'], 'riviere'), ...at('pilot', 'bench', 'riviere'),
          ...at('madame', [OUT[0], OUT[1], 90, 'coat_clutch'], null) }), ...SH.wide }),
      run: async s => {
        const m = s.person('madame'), r = s.person('riviere');
        await m.walk([DOOR, SPOTS.madame.door.at]);
        await m.turn(120);
        m.do('coat_clutch');
        m.look('riviere');
        s.tell('she:in');
        r.look('madame');
        s.person('robineau').look('madame');
        s.person('pilot').look('madame');
        glide(s, SH.her, 2);
        await standUp(s, 'pilot', 0.15);
        s.tell('she:up');
        // (her face from Rivière's side of the room — she looks at him)
        await glide(s, SH.her_riv, 2);
      },
    },
    // 3.1: Robineau moves away to his desk
    she_robineau: {
      after: ['she'],
      tells: ['she_robineau:end'],
      seconds: 4,
      from: () => ({ ...NIGHT, time: clock(2, 10), ...FLAGS.night,
        ...ALL({ ...at('riviere', 'map', 'madame'), ...at('robineau', [0.4, 5.55, 235, 'hold_waist'], 'madame'),
          ...at('pilot', [0.15, 6.45, 200, 'stand_easy'], 'madame'), ...at('madame', 'door', 'riviere') }), ...SH.her_close }),
      run: async s => {
        const b = s.person('robineau');
        glide(s, SH.wide, 1.5);
        await b.walk([[1.4, 4.6], SPOTS.robineau.desk.at]);
        await b.turn(200);
        b.look('madame');
        s.tell('she_robineau:end');
      },
    },
    // 3.2: a quarter past two; the inker comes to life; Rivière goes to it (М9 `tape` after: the tape in his hands)
    tape: {
      tells: ['tape:at'],
      seconds: 5,
      from: () => ({ ...NIGHT, time: clock(2, 15), ...FLAGS.night,
        ...ALL({ ...at('riviere', 'map', 'madame'), ...at('pilot', [0.0, 6.45, 200, 'stand_easy'], 'riviere'), ...at('madame', 'door', 'riviere') }),
        ...SH.wide }),
      run: async s => {
        const r = s.person('riviere');
        s.set('tape', 1);
        for (const id of ['madame', 'pilot', 'telegraphist', 'robineau']) s.person(id).look('tel_inker');
        glide(s, SH.tel_med, 2.5);
        await r.walk([[0.6, 5.3], SPOTS.riviere.inker.at]);
        await r.turn(120);
        r.look('tel_inker#ink');
        r.with(['tape']);
        r.do('pull_tape');
        placeAt(s, 'riviere', 'inker');
        s.tell('tape:at');
      },
    },
    // 3.2 (after М9): the telegraphist reads off the tape and raises his eyes to Rivière; she looks at the inker, the
    // pilot at the tape
    comodoro: {
      tells: ['comodoro:read', 'comodoro:eyes'],
      seconds: 8,
      from: () => ({ ...NIGHT, time: clock(2, 15), tape: 1, tape_pull: 1, tape_mark: 'words', ...FLAGS.night,
        ...ALL({ ...at('riviere', 'inker', 'riviere#hands', { riviere_with: ['tape'] }), ...at('pilot', [0.0, 6.45, 200, 'stand_easy'], 'riviere#hands'),
          ...at('madame', 'door', 'tel_inker'), ...at('telegraphist', 'table', 'riviere#hands'), ...at('robineau', 'desk', 'tel_inker') }),
        ...SH.tel }),
      run: async s => {
        const t = s.person('telegraphist');
        s.set('tape', 0);
        tapeRead(s);
        s.tell('comodoro:read');
        await s.wait(2.5);
        t.look('riviere');
        s.tell('comodoro:eyes');
        await s.wait(1);
        await glide(s, SH.her_close, 1.2);
        await s.wait(1.2);
        await glide(s, SH.pilot, 1.2);
        await s.wait(0.6);
      },
    },
    // 3.3: sixteen past two; the telegraphist's hand over the key; the clock's second hand — held while the timer runs
    minute: {
      tells: ['minute:ready'],
      seconds: 5,
      from: () => ({ ...NIGHT, time: clock(2, 16), tape_pull: 1, tape_mark: 'words', ...FLAGS.night,
        ...ALL({ ...at('riviere', 'inker', 'telegraphist', { riviere_with: ['tape'] }), ...at('pilot', [0.0, 6.45, 200, 'stand_easy'], 'riviere'),
          ...at('madame', 'door', 'tel_inker'), ...at('telegraphist', 'table', 'riviere', { telegraphist_reach: null }) }), ...SH.clock }),
      run: async s => {
        const t = s.person('telegraphist');
        await s.wait(1.5);
        await glide(s, SH.key, 1);
        t.reach({ r: [1.95, 5.95, 0.9] });
        t.look([1.95, 5.95, 0.83]);
        await s.wait(1);
        await glide(s, SH.minute, 1.2);
        await s.wait(0.6);
        const r = s.person('riviere');
        r.look('madame');
        await glide(s, SH.minute_her, 1.6);
        r.turn(215);
        s.tell('minute:ready');
      },
    },
    // 3.3 «the bearing»: he sends it and takes his hand off; she looks at the silent inker
    bearing_sent: {
      after: ['minute'],
      tells: ['bearing_sent:off'],
      seconds: 6,
      from: () => ({ ...NIGHT, time: clock(2, 16), tape_pull: 1, tape_mark: 'words', ...FLAGS.night,
        ...ALL({ ...at('riviere', 'inker', 'telegraphist', { riviere_with: ['tape'] }), ...at('pilot', [0.0, 6.45, 200, 'stand_easy'], 'riviere'),
          ...at('madame', 'door', 'tel_inker'), ...at('telegraphist', 'table', [1.95, 5.95, 0.83], { telegraphist_reach: { r: [1.95, 5.95, 0.9] } }) }), ...SH.key }),
      run: async s => {
        const t = s.person('telegraphist');
        t.reach(null);
        t.do('tap_key');
        await s.wait(2.5);
        t.do('desk_lean');
        t.reach({ r: [1.95, 5.95, 0.83] });
        t.look('riviere');
        await glide(s, SH.her_close, 1.2);
        s.person('madame').look('tel_inker');
        await s.wait(1.5);
        s.tell('bearing_sent:off');
        await s.wait(0.5);
      },
    },
    // 3.3 «her words»: Rivière turns and comes toward her; she does not understand at once
    hers_asked: {
      after: ['minute'],
      tells: ['hers_asked:ask'],
      seconds: 6,
      from: () => ({ ...NIGHT, time: clock(2, 16), tape_pull: 1, tape_mark: 'words', ...FLAGS.night,
        ...ALL({ ...at('riviere', 'inker', 'telegraphist', { riviere_with: ['tape'] }), ...at('pilot', [0.0, 6.45, 200, 'stand_easy'], 'riviere'),
          ...at('madame', 'door', 'tel_inker'), ...at('telegraphist', 'table', [1.95, 5.95, 0.83], { telegraphist_reach: { r: [1.95, 5.95, 0.9] } }) }), ...SH.key }),
      run: async s => {
        const r = s.person('riviere'), m = s.person('madame');
        glide(s, SH.wide, 1.5);
        r.do('stand');
        await r.walk([[0.2, 5.0], [-1.05, 4.75]]);
        await r.turn(265);
        r.look('madame');
        m.look('riviere');
        await glide(s, CAM([-1.2, 3.1, 1.65], [-1.7, 4.65, 1.55]), 1.5);
        s.tell('hers_asked:ask');
        await s.wait(1);
      },
    },
    // 3.3 «his own»: the telegraphist taps as Rivière dictates, then raises his eyes; she in the doorway
    own_sent: {
      after: ['minute'],
      tells: ['own_sent:dictate', 'own_sent:eyes'],
      seconds: 8,
      from: () => ({ ...NIGHT, time: clock(2, 16), tape_pull: 1, tape_mark: 'words', ...FLAGS.night,
        ...ALL({ ...at('riviere', 'inker', 'telegraphist', { riviere_with: ['tape'] }), ...at('pilot', [0.0, 6.45, 200, 'stand_easy'], 'riviere'),
          ...at('madame', 'door', 'tel_inker'), ...at('telegraphist', 'table', [1.95, 5.95, 0.83], { telegraphist_reach: { r: [1.95, 5.95, 0.9] } }) }), ...SH.key }),
      run: async s => {
        const t = s.person('telegraphist');
        t.reach(null);
        t.do('tap_key');
        await glide(s, SH.tel_med, 1.2);
        s.tell('own_sent:dictate');
        await s.wait(4);
        t.do('desk_lean');
        t.reach({ r: [1.95, 5.95, 0.83] });
        await glide(s, SH.tel, 0.8);
        t.look('riviere');
        s.tell('own_sent:eyes');
        await s.wait(0.6);
        await glide(s, SH.her_close, 1.2);
      },
    },
    // 3.5 (`tape_mark` the game's): twenty-five past two; the inker again; all look at it; Rivière draws the tape; its
    // close, then her face
    last_tape: {
      tells: ['last_tape:read'],
      seconds: 8,
      from: () => ({ ...NIGHT, time: clock(2, 25), tape: 1, ...FLAGS.night,
        ...ALL({ ...at('riviere', 'inker', 'tel_inker#ink'), ...at('pilot', [0.0, 6.45, 200, 'stand_easy'], 'tel_inker'),
          ...at('madame', 'door', 'tel_inker'), ...at('telegraphist', 'table', 'tel_inker#ink'), ...at('robineau', 'desk', 'tel_inker') }), ...SH.tel_med }),
      run: async s => {
        const r = s.person('riviere');
        r.with(['tape']);
        r.do('pull_tape');
        glide(s, SH.inker, 1.5);
        await s.move('tape_pull', 0.85, { over: 3.5, ease: 'inOut' });
        s.set('tape', 0);
        r.do('stand');
        r.look('riviere#hands');
        s.person('telegraphist').look('riviere#hands');
        s.tell('last_tape:read');
        await s.wait(1.5);
        await glide(s, SH.her_close, 1.5);
        await s.wait(0.5);
      },
    },
    // 3.5: Rivière tears off the strip and gives it to her; she holds it to her
    tape_torn: {
      after: ['last_tape'],
      tells: ['tape_torn:held'],
      seconds: 6,
      from: () => ({ ...NIGHT, time: clock(2, 26), tape_pull: 0.85, ...FLAGS.night,
        ...ALL({ ...at('riviere', 'inker', 'riviere#hands', { riviere_with: ['tape'] }), ...at('pilot', [0.0, 6.45, 200, 'stand_easy'], 'riviere'),
          ...at('madame', 'door', 'riviere'), ...at('telegraphist', 'table', 'riviere') }), ...SH.her_close }),
      run: async s => {
        const r = s.person('riviere'), m = s.person('madame');
        await r.do('tear_tape');
        s.set('tape_pull', 0);
        glide(s, SH.her, 2);
        await r.walk([[0.2, 5.0], [-1.55, 4.7]]);
        await r.turn(265);
        r.look('madame#hand_r');
        r.reach({ r: 'madame#hand_r' });
        m.look('riviere#hands');
        await s.wait(0.8);
        r.with([]);
        r.reach(null);
        r.do('hands_behind');
        m.with(['tape']);
        m.do('hold_tape');
        m.look('madame#hands');
        await glide(s, SH.her_close, 1.2);
        s.tell('tape_torn:held');
        await s.wait(0.5);
      },
    },
    // 3.5: she goes to the telegraph table and reads over his shoulder
    over_shoulder: {
      after: ['last_tape'],
      tells: ['over_shoulder:end'],
      seconds: 6,
      from: () => ({ ...NIGHT, time: clock(2, 26), tape_pull: 0.85, ...FLAGS.night,
        ...ALL({ ...at('riviere', 'inker', 'riviere#hands', { riviere_with: ['tape'] }), ...at('pilot', [0.0, 6.45, 200, 'stand_easy'], 'tel_inker'),
          ...at('madame', 'door', 'tel_inker'), ...at('telegraphist', 'table', 'riviere#hands') }), ...SH.her_close }),
      run: async s => {
        const m = s.person('madame');
        glide(s, SH.wide, 1.5);
        await m.walk([[-0.6, 5.05], [0.9, 6.5], SPOTS.madame.inker.at]);
        await m.turn(150);
        m.look('riviere#hands');
        placeAt(s, 'madame', 'inker');
        await glide(s, SH.her_inker, 1.5);
        s.tell('over_shoulder:end');
      },
    },
    // 3.5: a few scraps of tapping; the inker stops
    scraps: {
      after: ['last_tape'],
      tells: ['scraps:read', 'scraps:stop'],
      seconds: 6,
      from: () => ({ ...NIGHT, time: clock(2, 26), tape_pull: 0.85, ...FLAGS.night,
        ...ALL({ ...at('riviere', 'inker', 'riviere#hands', { riviere_with: ['tape'] }), ...at('pilot', [0.0, 6.45, 200, 'stand_easy'], 'tel_inker'),
          ...at('madame', 'door', 'tel_inker'), ...at('telegraphist', 'table', 'tel_inker#ink') }), ...SH.her_close }),
      run: async s => {
        const t = s.person('telegraphist');
        glide(s, SH.tel, 1.2);
        s.set('tape', 1);
        await s.wait(1.2);
        s.tell('scraps:read');
        s.set('tape', 0);
        await s.wait(0.6);
        s.set('tape', 1);
        await s.wait(0.8);
        s.set('tape', 0);
        await s.wait(2);
        t.look('riviere');
        s.tell('scraps:stop');
        await s.wait(0.5);
      },
    },
    // 3.6: a quarter to three; Rivière at the map; the telegraphist looks at the clock, counting (М1 `flag_sea` or
    // `flag_hold` after it: Rivière close before the map)
    silence: {
      tells: ['silence:count'],
      seconds: 6,
      from: () => ({ ...NIGHT, time: clock(2, 45), ...FLAGS.night,
        ...ALL({ ...at('riviere', 'flags', 'map#blue'), ...at('pilot', 'bench', 'map'), ...at('madame', 'door', 'map'),
          ...at('telegraphist', 'table', 'clock#face'), ...at('robineau', 'desk', 'map') }), ...SH.clock }),
      run: async s => {
        await s.wait(2);
        await glide(s, SH.tel, 1.2);
        s.tell('silence:count');
        await s.wait(1.5);
        await glide(s, SH.flags, 1.2);
      },
    },
    // 3.6 (after М1, before «By the fuel… that's all»): her face by the field door, turned to the telegraphist
    all_gone: {
      after: ['silence'],
      tells: ['all_gone:her'],
      seconds: 2,
      from: () => ({ ...NIGHT, time: clock(2, 45), ...FLAGS.night,
        ...ALL({ ...at('riviere', 'flags', 'map#blue'), ...at('pilot', 'bench', 'map'), ...at('madame', 'door', 'map'),
          ...at('telegraphist', 'table', 'clock#face'), ...at('robineau', 'desk', 'map') }), ...SH.flags }),
      run: async s => {
        s.person('madame').look('telegraphist');
        await glide(s, SH.her_all, 1.4);
        s.tell('all_gone:her');
      },
    },
    // 3.6 (after М1): the pilot gets up, puts his helmet on, goes out by the field door
    pilot_out: {
      tells: ['pilot_out:helmet', 'pilot_out:door'],
      seconds: 10,
      from: () => ({ ...NIGHT, time: clock(2, 46), ...FLAGS.late,
        ...ALL({ ...at('riviere', 'flags', 'map'), ...at('pilot', 'bench', 'riviere'), ...at('madame', 'door', 'map'),
          ...at('telegraphist', 'table', 'clock#face'), ...at('robineau', 'desk', 'map') }), ...SH.bench }),
      run: async s => {
        const p = s.person('pilot');
        await standUp(s, 'pilot', 0.15);
        await p.do('helmet_on');
        s.set('pilot_wear', { hat: 'aviator', parts: [] });
        p.do('stand_easy');
        s.tell('pilot_out:helmet');
        glide(s, SH.wide, 2);
        await p.walk([[-1.2, 5.6], IN, DOOR]);
        s.tell('pilot_out:door');
        await p.walk([OUT]);
        p.here(false);
        await s.wait(0.5);
      },
    },
    // 3.6: Robineau leads her out by the office door
    to_office: {
      after: ['pilot_out'],
      tells: ['to_office:door'],
      seconds: 8,
      from: () => ({ ...NIGHT, time: clock(2, 46), ...FLAGS.late,
        ...ALL({ ...at('riviere', 'flags', 'map'), ...at('madame', 'door', 'map'), ...at('telegraphist', 'table', 'clock#face'), ...at('robineau', 'desk', 'madame') }),
        ...SH.wide }),
      run: async s => {
        const b = s.person('robineau'), m = s.person('madame');
        await b.walk([[1.2, 4.5], [-1.6, 4.75]]);
        await b.turn(260);
        m.look('robineau');
        await s.wait(0.8);
        glide(s, SH.office, 2.5);
        officeDoor(s, 100);
        await s.all(m.walk([[-1.9, 5.6], OIN, ODOOR, IN_OFFICE]), s.sequence(async q => {
          await q.wait(0.6);
          await b.walk([[-1.5, 5.5], [-1.75, 6.5], OIN]);
          b.look(ODOOR);
        }));
        m.here(false);
        s.tell('to_office:door');
        await b.walk([ODOOR, IN_OFFICE]);
        b.here(false);
        await officeDoor(s, 180);
      },
    },
    // 3.7: twelve to three; Robineau comes back by the office door, stands at his desk over his papers; his shoulders
    // shake (the choice after it)
    shoulders: {
      tells: ['shoulders:stand'],
      seconds: 9,
      from: () => ({ ...NIGHT, time: clock(2, 48), ...FLAGS.late,
        ...ALL({ ...at('riviere', 'map', 'office_door'), ...at('telegraphist', 'table', 'tel_inker'),
          ...at('robineau', [IN_OFFICE[0], IN_OFFICE[1], 180, 'hold_waist'], 'rob_top') }), ...SH.wide }),
      run: async s => {
        const b = s.person('robineau');
        await officeDoor(s, 100);
        await b.walk([ODOOR, OIN]);
        officeDoor(s, 180);
        s.person('riviere').look('robineau');
        glide(s, SH.rob, 3);
        await b.walk([[-1.2, 5.0], [1.3, 4.25], SPOTS.robineau.desk.at]);
        // (the spot first — script.js lays him out from it —, then his own turn and motion over it: placed after, the spot
        // would undo them)
        placeAt(s, 'robineau', 'desk');
        await b.turn(190);
        b.look('rob_top');
        b.do('shoulders_shake');
        // (Rivière turned from the map toward him and the lens: at the map's own turn his face went away from both)
        await s.person('riviere').turn(140);
        await glide(s, SH.shoulders, 1.5);
        s.tell('shoulders:stand');
        await s.wait(1);
      },
    },
    // 3.7 «Get to work»: Robineau sits to his report; Rivière's hand over his shoulder, not touching
    work: {
      after: ['shoulders'],
      tells: ['work:hand'],
      seconds: 8,
      from: () => ({ ...NIGHT, time: clock(2, 49), ...FLAGS.late,
        ...ALL({ ...at('riviere', 'map', 'robineau'), ...at('telegraphist', 'table', 'tel_inker'),
          ...at('robineau', 'desk', 'rob_top', { robineau_do: 'shoulders_shake' }) }), ...SH.rob }),
      run: async s => {
        const r = s.person('riviere'), b = s.person('robineau');
        b.do('hold_waist');
        await b.walk([[2.35, 4.15]]);
        placeAt(s, 'robineau', 'writing');
        b.look('rob_top');
        glide(s, SH.write, 2.5);
        await r.walk([[0.6, 5.0], [1.8, 4.5]]);
        await r.turn(150);
        r.look('robineau');
        await r.do('hand_hover');
        r.do('hands_behind');
        s.tell('work:hand');
        await s.wait(1);
      },
    },
    // 3.7 «Sit down»: Rivière sits on the bench; Robineau, slowly, beside him; the telegraphist looks at them and turns
    // back to the inker
    sit: {
      after: ['shoulders'],
      tells: ['sit:sat', 'sit:turn'],
      seconds: 12,
      from: () => ({ ...NIGHT, time: clock(2, 49), ...FLAGS.late,
        ...ALL({ ...at('riviere', 'map', 'robineau'), ...at('telegraphist', 'table', 'tel_inker'),
          ...at('robineau', 'desk', 'rob_top', { robineau_do: 'shoulders_shake' }) }), ...SH.wide }),
      run: async s => {
        const r = s.person('riviere'), b = s.person('robineau'), t = s.person('telegraphist');
        await sitOn(s, 'riviere', 0.45);
        r.look('robineau');
        b.do('hold_waist');
        await s.wait(1);
        await b.walk([[1.5, 5.2], [1.05, 6.4]]);
        await b.turn(180);
        await b.do('sit_down');
        s.set('robineau_on', [1.05, BENCH, 0.47]);
        b.do('fly_seated');
        placeAt(s, 'riviere', 'bench');
        placeAt(s, 'robineau', 'bench');
        glide(s, SH.bench, 2);
        s.tell('sit:sat');
        t.look('riviere');
        await s.wait(2);
        t.look('tel_inker');
        s.tell('sit:turn');
        await s.wait(0.5);
      },
    },
    // 3.7 silence: Rivière turns to the map; Robineau takes his folder and goes out by the field door without his coat
    alone: {
      after: ['shoulders'],
      tells: ['alone:folder', 'alone:door'],
      seconds: 12,
      from: () => ({ ...NIGHT, time: clock(2, 49), ...FLAGS.late,
        ...ALL({ ...at('riviere', 'map', 'robineau'), ...at('telegraphist', 'table', 'tel_inker'),
          ...at('robineau', 'desk', 'rob_top', { robineau_do: 'shoulders_shake' }) }), ...SH.rob }),
      run: async s => {
        const r = s.person('riviere'), b = s.person('robineau');
        await r.turn(10);
        r.look('map');
        b.do('hold_waist');
        b.look('robineau#hand_l');
        s.tell('alone:folder');
        await s.wait(1.5);
        glide(s, SH.wide, 2);
        await b.walk([[1.3, 4.3], [-1.5, 4.5], IN, DOOR]);
        s.tell('alone:door');
        await b.walk([OUT]);
        b.here(false);
        await s.wait(0.5);
      },
    },

    // ——— the finale and the epilogue (chapter IV's steps) ———
    // Ф.5 «A Hard Victory»: ten past three; Rivière comes out of the office to the map (М1 `flag_red` after it)
    victory_map: {
      tells: ['victory_map:at'],
      seconds: 6,
      from: () => ({ ...NIGHT, time: clock(3, 10), outside: 'empty', ...FLAGS.late,
        ...ALL({ ...at('riviere', [IN_OFFICE[0], IN_OFFICE[1], 180, 'stand'], null), ...at('telegraphist', 'table', 'tel_inker'), ...robIV() }), ...SH.office }),
      run: async s => {
        const r = s.person('riviere');
        await officeDoor(s, 100);
        await r.walk([ODOOR, OIN]);
        officeDoor(s, 180);
        glide(s, SH.flags, 2.5);
        await r.walk([SPOTS.riviere.flags.at]);
        await r.turn(35);
        r.look('map#red');
        placeAt(s, 'riviere', 'flags');
        s.tell('victory_map:at');
      },
    },
    // Ф.5 «No Order»: Rivière comes out to the map; looks at the red flag at the field and does not touch it
    silence_map: {
      tells: ['silence_map:look'],
      seconds: 8,
      from: () => ({ ...NIGHT, time: clock(3, 10), outside: 'empty', ...FLAGS.late,
        ...ALL({ ...at('riviere', [IN_OFFICE[0], IN_OFFICE[1], 180, 'stand'], null), ...at('telegraphist', 'table', 'tel_inker'), ...robIV() }), ...SH.office }),
      run: async s => {
        const r = s.person('riviere');
        await officeDoor(s, 100);
        await r.walk([ODOOR, OIN]);
        officeDoor(s, 180);
        await r.walk([SPOTS.riviere.flags.at]);
        await r.turn(35);
        r.look('map#red');
        r.do('hands_behind');
        await glide(s, SH.flag_close, 1.5);
        await s.wait(1.5);
        r.look(null);
        await r.turn(150);
        await glide(s, SH.face_flags, 1.5);
        s.tell('silence_map:look');
        await s.wait(0.5);
      },
    },
    // Ф.5 «Dawn» (`roblet` the game's — in the window): six o'clock, grey; the telegraphist dozes on the bench; Rivière
    // at the map, then toward the window (М1 `flag_down` after it)
    dawn: {
      tells: ['dawn:window'],
      seconds: 8,
      from: () => ({ ...NIGHT, time: clock(6, 0), lamps: 0.45, outside: 'rolled', ...FLAGS.late,
        ...ALL({ ...at('riviere', 'map', 'map'), ...at('telegraphist', 'bench', null, { telegraphist_do: 'doze_drop' }), ...robIV() }), ...SH.wide }),
      run: async s => {
        const r = s.person('riviere');
        await s.wait(1.5);
        r.look('pane');
        await glide(s, SH.window, 3);
        s.tell('dawn:window');
        await s.wait(1);
        r.look('map#red');
        glide(s, SH.flags, 2);
        await r.walk([SPOTS.riviere.flags.at]);
        await r.turn(35);
        placeAt(s, 'riviere', 'flags');
      },
    },
    // Ф.5 «Dawn» (after М1; `robineau` the game's): Rivière takes the other flags down one by one into the drawer; with
    // `sit` Robineau beside him takes them down too; with `work` he is at his desk, his eyes down
    flags_down: {
      tells: ['flags_down:end'],
      seconds: 10,
      from: () => ({ ...NIGHT, time: clock(6, 2), lamps: 0.45, outside: 'rolled', drawer: 1, ...FLAGS.late, red: 'off',
        ...ALL({ ...at('riviere', 'flags', 'map'), ...at('telegraphist', 'bench', null, { telegraphist_do: 'doze_drop' }),
          ...(scene.get('robineau') === 'sit' ? at('robineau', [-0.2, 6.6, 20, 'stand'], 'map', { robineau_wear: { parts: ['moustache'] } }) : robIV()) }),
        ...SH.flags }),
      run: async s => {
        const r = s.person('riviere'), b = s.person('robineau');
        const both = scene.get('robineau') === 'sit';
        if (scene.get('robineau') === 'work') b.look('rob_top');
        for (const name of ['blue', 'west', 'north']) {
          r.look(`map#${name}`);
          r.reach({ r: `map#${name}` });
          if (both && name !== 'blue') b.reach({ r: `map#${name}` });
          await s.wait(1);
          s.set(name, 'off');
          r.reach({ r: 'map_drawer#drawer' });
          r.look('map_drawer#drawer');
          await s.wait(1.2);
          b.reach(null);
        }
        r.reach(null);
        s.set('drawer', 0);
        r.look(null);
        await s.wait(0.5);
        s.tell('flags_down:end');
      },
    },
    // Э.1 (`outside` and the flags the game's, by the ending): the next evening, twenty to eight; Robineau comes in by
    // the field door to his desk; the news after
    next_evening: {
      tells: ['next_evening:in'],
      seconds: 6,
      from: () => ({ ...EVE, time: clock(19, 40),
        ...ALL({ ...at('riviere', 'map', 'robineau'), ...at('telegraphist', 'table', 'tel_inker'),
          ...at('robineau', [OUT[0], OUT[1], 90, 'hold_waist'], 'riviere') }), ...SH.wide }),
      run: async s => {
        await comeIn(s, 'robineau', [[1.3, 4.25], SPOTS.robineau.desk.at], 200);
        placeAt(s, 'robineau', 'desk');
        await glide(s, SH.rob, 1.5);
        s.tell('next_evening:in');
      },
    },
    // Э.2 «Sit down» kept: Robineau sits on the bench without asking, catches Rivière's eye, gets up; Rivière moves to
    // the map
    bench_again: {
      after: ['next_evening'],
      tells: ['bench_again:up'],
      seconds: 8,
      from: () => ({ ...EVE, time: clock(19, 41), ...ALL({ ...at('riviere', 'map', 'robineau'), ...at('telegraphist', 'table', 'tel_inker'), ...at('robineau', 'desk', 'riviere') }),
        ...SH.rob }),
      run: async s => {
        const r = s.person('riviere'), b = s.person('robineau');
        glide(s, SH.wide, 1.5);
        await sitOn(s, 'robineau', 1.05);
        b.look('riviere');
        r.look('robineau');
        await s.wait(1.2);
        await standUp(s, 'robineau', 1.05);
        s.tell('bench_again:up');
        glide(s, SH.map, 2);
        await r.walk([[-0.6, 6.55]]);
        await r.turn(10);
        r.look('map');
      },
    },
    // Э.2 «Get to work» kept: Robineau lays the night's report on the desk
    report: {
      after: ['next_evening'],
      tells: ['report:laid'],
      seconds: 4,
      from: () => ({ ...EVE, time: clock(19, 41), ...ALL({ ...at('riviere', 'map', 'robineau'), ...at('telegraphist', 'table', 'tel_inker'), ...at('robineau', 'desk', 'riviere') }),
        ...SH.rob }),
      run: async s => {
        const b = s.person('robineau');
        s.set('robineau_wear', { parts: ['moustache'] });
        b.with(['form']);
        await b.do('lay_paper');
        b.with([]);
        b.do('stand');
        b.look('riviere');
        s.tell('report:laid');
      },
    },
    // Э.2 silence kept: Robineau coughs; his nose is red
    cough: {
      after: ['next_evening'],
      tells: ['cough:end'],
      seconds: 3,
      from: () => ({ ...EVE, time: clock(19, 41), ...ALL({ ...at('riviere', 'map', 'robineau'), ...at('telegraphist', 'table', 'tel_inker'), ...at('robineau', 'desk', 'riviere') }),
        ...SH.rob_close }),
      run: async s => {
        const b = s.person('robineau');
        await b.do('cough');
        b.do('hold_waist');
        s.tell('cough:end');
      },
    },
    // Э.3 «A Hard Victory»: the inker; the telegraphist reads the two reports (М1 `flag_blue` after it)
    montevideo: {
      after: ['next_evening'],
      tells: ['montevideo:read'],
      seconds: 6,
      from: () => ({ ...EVE, time: clock(19, 42), ...ALL({ ...at('riviere', 'map', 'telegraphist'), ...at('telegraphist', 'table', 'tel_inker#ink'), ...at('robineau', 'desk', 'riviere') }),
        ...SH.inker }),
      run: async s => {
        const r = s.person('riviere');
        s.set('tape', 1);
        await glide(s, SH.tel, 1.5);
        s.tell('montevideo:read');
        await s.wait(1.5);
        glide(s, SH.flags, 2.5);
        await r.walk([[-0.8, 6.3], SPOTS.riviere.flags.at]);
        await r.turn(35);
        r.look('map#blue');
        placeAt(s, 'riviere', 'flags');
      },
    },
    // Э.3 «A Hard Victory» (after М1; `outside` landing): toward the window — the Chilean mail comes down under the
    // floodlight
    chilean_lands: {
      tells: ['chilean_lands:end'],
      seconds: 6,
      from: () => ({ ...EVE, time: clock(19, 43), tape: 0, ...ALL({ ...at('riviere', 'flags', 'pane'), ...at('telegraphist', 'table', 'tel_inker'), ...at('robineau', 'desk', 'pane') }),
        ...SH.flags }),
      run: async s => {
        await glide(s, SH.window, 3);
        await s.wait(2.5);
        s.tell('chilean_lands:end');
      },
    },
    // Э.3 «No Order»: Rivière looks at the map a long time (М1 `flag_late` after it: he is close before the map)
    release: {
      after: ['next_evening'],
      tells: ['release:ask', 'release:say'],
      seconds: 6,
      from: () => ({ ...EVE, time: clock(19, 42), ...ALL({ ...at('riviere', 'map', 'map'), ...at('telegraphist', 'table', 'riviere'), ...at('robineau', 'desk', 'riviere') }),
        ...SH.map }),
      run: async s => {
        const r = s.person('riviere');
        s.tell('release:ask');
        await glide(s, SH.riv, 1.5);
        r.look('map#red');
        await s.wait(2.5);
        s.tell('release:say');
        await r.walk([SPOTS.riviere.flags.at]);
        await r.turn(35);
        placeAt(s, 'riviere', 'flags');
      },
    },
    // Э.3 «Dawn» (`outside` idle): Robineau lays the board's telegram on the desk; Rivière goes to the window — the field
    // dark, Pellerin smoking by his plane
    telegram: {
      after: ['next_evening'],
      tells: ['telegram:read', 'telegram:window'],
      seconds: 12,
      from: () => ({ ...EVE, time: clock(19, 42), ...ALL({ ...at('riviere', 'map', 'robineau'), ...at('telegraphist', 'table', 'tel_inker'), ...at('robineau', 'desk', 'riviere') }),
        ...SH.rob }),
      run: async s => {
        const r = s.person('riviere'), b = s.person('robineau');
        s.set('robineau_wear', { parts: ['moustache'] });
        b.with(['form']);
        await b.do('lay_paper');
        b.with([]);
        b.do('stand');
        b.look('rob_top');
        s.tell('telegram:read');
        await s.wait(1.5);
        glide(s, SH.at_window, 3);
        await r.walk([[0.3, 6.0], [2.6, 6.95]]);
        await r.turn(10);
        r.look('pane');
        r.do('hands_behind');
        s.tell('telegram:window');
        await s.wait(1);
      },
    },
  };
}

return { film, SPOTS, MAP, BENCH };
