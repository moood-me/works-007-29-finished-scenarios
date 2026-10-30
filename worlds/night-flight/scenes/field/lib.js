// The field's pieces (stage 5; modules/beats; the contract: docs/new-games/nochnoj-polyot/game.md «Stage 5 — pieces»):
// `film(scene)` — each piece `{after, tells, seconds, from, run}`. `from` — every value a piece begins at but the
// game's (`<id>_here`, `<id>_mood`, and the variant keys a row names: `bends`, `robineau`, `roblet`, and in chapter IV
// `roblet_spot`, `workbench`); `run` — the director's sequence, its moments told (`<piece>:<moment>`), ending in a
// living pose. Places in metres (across — right of the middle, away): the plane stands at 4.2, 13.6 (its nose at
// −1.7, the cowling −1.35…−0.1 at 1.2–2.4 m up, the wheel at 1.05); the field's switch on the hangar wall at about
// −1.05, 20.46 (one stands at it at SWITCH, facing the wall); Roblet's box at −1.3, 3.75; the workbench at 12.6, 11.8;
// the office's lit window upstairs (her silhouette, `office_windows#madame`) at about −31.4, 67, 6 m up. The shots are
// cameras of their own (the eye and what it looks at) — faces toward the lens.
// Roblet's places by `roblet_spot` (script.js lays him out when the key changes; a piece's `from` sets the same values,
// never the spot itself):
const SPOTS = {
  front: { at: [-0.75, 3.45], turn: 165, does: 'hold_low' },
  engine: { at: [-1.3, 12.0], turn: 150, does: 'stand_easy' },
  chocks: { at: [-0.4, 12.6], turn: 190, does: 'hold_low' },
};

function film(scene) {
  const DEG = 180 / Math.PI, EYE = 1.7;
  const CAMK = ['camera_x', 'camera_z', 'camera_h', 'camera_yaw', 'camera_pitch'];
  const CAM0 = { camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
    camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0 };
  // a camera of its own: the eye [across, distance, height] looking at a point [across, distance, height]
  const CAM = ([ex, ez, eh], [tx, tz, th]) => ({ ...CAM0, camera_x: ex, camera_z: ez, camera_h: eh - EYE,
    camera_yaw: Math.atan2(tx - ex, tz - ez) * DEG, camera_pitch: Math.atan2(th - eh, Math.hypot(tx - ex, tz - ez)) * DEG });
  const glide = (s, c, over) => s.all(...CAMK.map(k => s.move(k, c[k], { over, ease: 'inOut' })));
  // a cut inside a piece: the shot made ready, then shown whole
  const cut = async (s, c) => {
    const next = s.shot(c);
    await s.until(() => next.ready);
    next.cut();
  };
  const SWITCH = [-1.2, 19.93]; // standing at the switch, facing the wall (turn 16)
  const AT_SWITCH = { r: 'hangar_front#switch' };
  const SH = {
    wide: CAM0,
    // (the sky is painted far aside — sky.js — so a shot may turn some 60° from ahead)
    switch: CAM([-0.3, 16.6, 1.85], [-1.1, 20.2, 1.6]),
    pellerin: CAM([-0.7, 6.0, 1.7], [-0.6, 8.6, 1.6]),
    group: CAM([-0.4, 5.2, 1.75], [-0.4, 9.0, 1.45]),
    pellerin_hands: CAM([-0.5, 7.3, 1.25], [-0.6, 8.55, 1.0]),
    shadow: CAM([-3.2, 7.4, 1.75], [-3.6, 9.8, 1.65]),
    both_I: CAM([-1.5, 6.0, 1.75], [-2.0, 9.2, 1.5]),
    touch: CAM([-0.9, 6.3, 1.7], [-1.0, 8.7, 1.6]),
    pass: CAM([-1.0, 5.6, 1.75], [-1.4, 10.0, 1.5]),
    // (from Robineau's side and in front: Rivière's face, turned to him, three-quarters — the choice is his)
    fine: CAM([2.4, 3.3, 1.7], [1.0, 5.55, 1.55]),
    robineau_I: CAM([1.3, 3.6, 1.7], [1.7, 5.4, 1.5]),
    roblet_face: CAM([-0.5, 2.0, 1.62], [-0.75, 3.45, 1.55]), // Roblet's face, close (1.3)
    roblet_hands: CAM([-0.6, 2.4, 1.2], [-0.75, 3.35, 1.0]),
    // the two before the choice: Roblet (his eyes on his cap) and Rivière, faces toward the lens, the mechanics behind
    ask: CAM([0.1, 1.2, 1.65], [0.0, 3.9, 1.45]),
    // the mechanics at the Chilean's engine, turned to Rivière before them (1.2 «tear»)
    crew: CAM([-0.4, 9.0, 1.7], [-0.7, 12.7, 1.55]),
    // Ф.4, from above as from Rivière's window: Roblet by the plane in the rain; his empty workbench; Robineau by the wall
    below_roblet: CAM([-5.5, 7.0, 4.2], [-1.0, 12.6, 1.0]),
    below_bench: CAM([9.0, 7.0, 3.8], [12.6, 11.8, 0.9]),
    below_wall: CAM([-3.0, 11.0, 4.0], [-4.8, 16.0, 1.0]),
    // Robineau by the hangar wall, Rivière at the switch beyond him not looking (4.1, went out alone)
    // Ш3's choice: the two of them across the plane's nose — Rivière (left, three-quarters) and the pilot looking at him
    // (her window was the shot before)
    choose: CAM([0.9, 9.2, 1.9], [-0.6, 13.2, 1.6]),
    wall: CAM([-2.6, 13.1, 1.7], [-3.4, 17.6, 1.5]),
    box: CAM([-2.5, 2.5, 1.6], [-1.0, 4.0, 1.15]), // from the left: Roblet, facing the viewer, does not stand in it,
    // (the eye low: from eye height their heads, bowed to the box, showed their crowns, read as backs)
    two_box: CAM([-0.4, 1.8, 1.15], [-1.0, 3.9, 1.4]),
    // M4: the two face to face in profile, the hands between them at the waist, close
    // (the two turned to the lens and to each other (135/225), their eyes on the hands at their waists: the eye low, so
    // the bowed faces are seen three-quarters, the spanner and the open palm between them — the engine's author, seen in
    // the browser: from eye height the bowed heads showed their crowns, read as backs)
    two_hands: CAM([-0.6, 2.0, 1.15], [-0.6, 3.85, 1.25]),
    roblet_riv: CAM([1.6, 2.2, 1.65], [-0.5, 4.1, 1.5]), // from the right: Roblet turned to Rivière in profile, Rivière's face,
    // chapter IV: Rivière at R4 left of the nose and the pilot by the fuselage at PILOT, level with each other (each looking
    // at the other in profile): each shot from the front on the side he looks to
    riviere: CAM([-1.0, 11.4, 1.75], [-2.6, 13.0, 1.65]),
    pilot: CAM([0.4, 11.5, 1.75], [2.0, 13.15, 1.65]),
    pilot_roblet: CAM([0.2, 9.3, 1.7], [0.3, 12.6, 1.5]),
    chocks: CAM([-0.2, 11.0, 1.5], [-0.4, 12.6, 1.25]),
    young: CAM([0.4, 10.0, 1.7], [0.0, 12.5, 1.5]),
    bench: CAM([12.0, 8.0, 1.6], [12.6, 11.8, 1.0]),
    robineau_in: CAM([-3.0, 8.6, 1.7], [-3.4, 12.2, 1.5]),
    window: CAM([-27.5, 57.1, 5.6], [-31.4, 67.05, 6.0]),
    // over his shoulder toward the lit window upstairs (his face away: the window is ahead)
    robineau_up: CAM([-2.6, 10.6, 1.75], [-5.69, 20.1, 2.27]),
    the_two: CAM([-2.0, 9.4, 1.75], [-3.0, 12.7, 1.55]),
  };
  // a person's whole starting state: where, facing, doing; nothing in the hands, no look, no reach, as they are dressed
  const P = (id, [a, d], turn, does = 'stand_easy', more = {}) => {
    const o = { [`${id}_a`]: a, [`${id}_d`]: d, [`${id}_turn`]: turn, [`${id}_do`]: does, [`${id}_look`]: null, [`${id}_reach`]: null,
      [`${id}_with`]: [], [`${id}_wear`]: null, [`${id}_gait`]: null, [`${id}_still`]: false };
    for (const [k, v] of Object.entries(more)) o[`${id}_${k}`] = v;
    return o;
  };
  // Roblet at a spot's place (the values only: a `from` never sets `roblet_spot` — a stale spot in the cut's values would
// move him after it)
const R = (spot, more = {}) => P('roblet', SPOTS[spot].at, SPOTS[spot].turn, SPOTS[spot].does, more);
  const DARK = { floods: 0, flood_0: 0, flood_1: 0, flood_2: 0, lever: 0, hangar: 1, office: 1 };
  const LIT = { floods: 1, flood_0: 1, flood_1: 1, flood_2: 1, lever: 1, hangar: 1, office: 1 };
  const STAND = (plane, engine = 0) => ({ plane, plane_a: 4.2, plane_d: 13.6, plane_h: 0, plane_pitch: 0, engine, plane_lights: 0, chocks: 1 });
  // the Chilean far out in the dark, coming in from the right on a straight line to its stand (so it comes nose first)
  const COMING = { plane: 'chilean', plane_a: 110, plane_d: 330, plane_h: 35, plane_pitch: -4, engine: 1, plane_lights: 1, chocks: 0 };
  const THINGS = { cowling: 0, paper_open: 0, ink: 0, blot: 0, folder_open: 0, madame_window: 0, bags: 0, toolbox: 0, workbench: 'tools' };
  const HELMET = { hat: 'aviator', parts: [] }; // a pilot's helmet on his head (his look holds it in his hand)
  const CAP_ON = { hat: 'cap', parts: ['moustache'] }; // Roblet's cap on his head

  // chapter I, after the landing: Pellerin among the mechanics before the plane, Rivière in the shadow on the left
  const PELLERIN = [-0.6, 8.6];
  const SHADOW = [-3.6, 9.8];
  const GROUP = {
    ...P('pellerin', PELLERIN, 180, 'stand_easy', { look: 'mechanic_b' }),
    // (the mechanics round him on the lens's side, so that his face, turned to them, is seen)
    ...P('mechanic', [-1.9, 7.7], 55, 'stand_easy', { look: 'pellerin' }),
    ...P('mechanic_b', [0.8, 7.5], 308, 'stand_easy', { look: 'pellerin' }),
    ...P('mechanic_c', [1.6, 8.5], 273, 'stand_easy', { look: 'pellerin' }),
  };
  // the people not in a piece: where they wait out of the way (the game says who is here)
  const AWAY = {
    ...P('pellerin', [2.0, 3.3], 235), ...P('pilot', [-1.9, 3.9], 140, 'stand_easy'), ...P('robineau', [2.1, 3.85], 245, 'hold_waist'),
  };
  // chapter I at the engines (1.2–1.4): the Chilean standing, the mechanics working at it
  const ENGINES = {
    // (close up to the cowling, so that their working hands are on it, not out in the air)
    ...P('mechanic', [-0.6, 12.95], 10, 'engine_work', { look: 'plane#cowling' }),
    ...P('mechanic_b', [-1.7, 13.15], 40, 'engine_work', { look: 'plane#cowling' }),
    ...P('mechanic_c', [0.3, 13.05], 340, 'engine_work', { look: 'plane#cowling' }),
  };
  // chapter IV: Rivière left of the plane's nose, level with the pilot by its side (they look at each other across it) (his right hand to the fuselage), the
  // mechanics at the bags, the young one at the engine; Robineau at Rivière's shoulder (or by the hangar's wall)
  const R4 = [-2.6, 13.0];
  const PILOT = [2.0, 13.15];
  const BESIDE = [-3.4, 12.4];
  const WALL = [-4.8, 16.0];
  const CREW = {
    ...P('mechanic', [-0.6, 12.4], 10, 'engine_work', { look: 'plane#cowling' }),
    ...P('mechanic_b', [0.9, 12.5], 160, 'load_sack'),
    ...P('mechanic_c', [3.6, 12.9], 220, 'load_sack'),
  };

  // a mechanic who pulls the chocks: Roblet if he was taken off the engines, else the young one if he is there
  const chocksMan = () => {
    if (scene.get('roblet') === 'remove' && scene.get('roblet_here') !== false) return 'roblet';
    if (scene.get('mechanic_here') !== false) return 'mechanic';
    return 'mechanic_b';
  };
  async function pullChocks(s, id) {
    const m = s.person(id);
    m.look('plane#wheel');
    await m.walk([[0.8, 12.95]]);
    await m.turn(10);
    await m.do('pull_chocks');
    s.set('chocks', 0);
    m.do('stand_easy');
    await m.walk([[-0.6, 11.4]]);
    await m.turn(30);
    m.look('plane');
  }
  // the European's run across the lit field and away north, its lamps melting into the dark
  async function away(s) {
    s.move('engine', 1, { over: 0.8 });
    await s.path(['plane_a', 'plane_d', 'plane_h', 'plane_pitch'],
      [[4.2, 13.6, 0, 0], [-14, 22, 0, 0], [-30, 44, 3, 5], [-45, 140, 25, 6], [-130, 420, 90, 6]], { over: 12, ease: 'in' });
  }
  async function helmetOn(s, id) {
    const p = s.person(id);
    const act = p.do('helmet_on');
    await s.wait(1.6);
    p.wear(HELMET);
    await act;
    p.do('stand_easy');
  }
  async function helmetOff(s, id) {
    const p = s.person(id);
    const act = p.do('helmet_off');
    await s.wait(1.4);
    p.wear(null);
    await act;
    p.do('stand_easy');
  }

  const CH4 = (more = {}) => ({
    ...DARK, ...STAND('european', 0.4), ...THINGS, cowling: 1, bags: 1,
    ...P('riviere', R4, 100, 'hands_behind', { look: 'pilot' }),
    ...P('pilot', PILOT, 265, 'stand_easy', { look: 'plane' }),
    ...P('robineau', BESIDE, 110, 'hold_waist', { look: 'riviere' }),
    ...P('pellerin', [2.0, 3.3], 235),
    ...CREW,
    ...more,
  });

  return {
    // ——— chapter I ———
    // 1.1: the field dark, the drone; the Chilean's lamp far out; the mechanics by the drums looking up; Rivière walks
    // to the switch on the hangar wall and puts his hand to it (М8 `light` next)
    dark_drone: {
      tells: ['dark_drone:switch'],
      seconds: 6,
      from: () => ({
        ...DARK, ...COMING, ...THINGS, ...AWAY, ...R('front'),
        ...P('riviere', [0.2, 14.6], 340, 'stand', { look: 'plane' }),
        ...P('mechanic', [-3.6, 16.0], 150, 'stand_easy', { look: 'plane' }),
        ...P('mechanic_b', [-2.6, 15.2], 160, 'stand_easy', { look: 'plane' }),
        ...P('mechanic_c', [-4.6, 15.0], 140, 'stand_easy', { look: 'plane' }),
        ...SH.wide,
      }),
      run: async s => {
        const r = s.person('riviere');
        r.look(null);
        await r.walk([SWITCH]);
        await r.turn(16);
        r.do('hands_behind');
        r.look('hangar_front#switch');
        r.reach(AT_SWITCH);
        await glide(s, SH.switch, 2);
        r.look('plane');
        s.tell('dark_drone:switch');
        await s.wait(0.5);
      },
    },
    // 1.1 after М8: the Chilean comes down out of the dark onto the lit field and rolls up to the hangar, the engine
    // dies; Pellerin climbs down behind the wing, comes round the nose and pulls off his helmet; the mechanics walk up;
    // Rivière goes back into the shadow on the left
    landing: {
      after: ['dark_drone'],
      tells: ['landing:down', 'landing:stop', 'landing:pellerin'],
      seconds: 14,
      from: () => ({
        ...LIT, ...COMING, ...THINGS, ...AWAY, ...R('front'),
        ...P('riviere', SWITCH, 16, 'stand', { look: 'plane', reach: AT_SWITCH }),
        ...P('pellerin', [1.8, 14.3], 270, 'stand_easy', { wear: HELMET }),
        ...P('mechanic', [-3.6, 16.0], 150, 'stand_easy', { look: 'plane' }),
        ...P('mechanic_b', [-2.6, 15.2], 160, 'stand_easy', { look: 'plane' }),
        ...P('mechanic_c', [-4.6, 15.0], 140, 'stand_easy', { look: 'plane' }),
        ...SH.switch,
      }),
      run: async s => {
        const r = s.person('riviere'), p = s.person('pellerin');
        const crew = ['mechanic', 'mechanic_b', 'mechanic_c'].map(id => s.person(id));
        p.here(false);
        p.wear(HELMET);
        r.reach(null);
        glide(s, SH.wide, 2);
        r.walk([[-2.6, 15.0], SHADOW]).then(() => {
          r.turn(112);
          r.do('hands_behind');
          r.look('plane');
        });
        await s.path(['plane_a', 'plane_d', 'plane_h', 'plane_pitch'], [[110, 330, 35, -4], [25, 75, 3, -2], [16, 48, 0, 0]], { over: 7, ease: 'inOut' });
        s.tell('landing:down');
        await s.path(['plane_a', 'plane_d'], [[16, 48], [4.2, 13.6]], { over: 5, ease: 'out' });
        s.move('engine', 0, { over: 2 });
        s.move('plane_lights', 0, { over: 1 });
        s.tell('landing:stop');
        p.here(true);
        crew.forEach(m => m.look('plane#cockpit'));
        crew[0].walk([[-1.9, 7.7]]);
        crew[1].walk([[0.8, 7.5]]);
        crew[2].walk([[1.6, 8.5]]);
        await p.walk([[-2.5, 14.1], PELLERIN]);
        await p.turn(180);
        crew.forEach((m, i) => {
          m.turn([55, 308, 273][i]);
          m.look('pellerin');
        });
        await glide(s, SH.pellerin, 1.5);
        await helmetOff(s, 'pellerin');
        s.tell('landing:pellerin');
        await s.wait(0.5);
      },
    },
    // 1.1: Pellerin among the mechanics — «Fine. A bit of a breeze»; they laugh; he shows the ridge with his hands
    breeze: {
      after: ['landing'],
      tells: ['breeze:say', 'breeze:laugh', 'breeze:hands'],
      seconds: 10,
      from: () => ({
        ...LIT, ...STAND('chilean'), ...THINGS, ...AWAY, ...R('front'), ...GROUP,
        ...P('riviere', SHADOW, 112, 'hands_behind', { look: 'pellerin' }), ...SH.pellerin,
      }),
      run: async s => {
        const p = s.person('pellerin');
        const crew = ['mechanic', 'mechanic_b', 'mechanic_c'].map(id => s.person(id));
        await glide(s, SH.group, 1.5);
        p.look('mechanic_b');
        s.tell('breeze:say');
        await s.wait(2);
        crew.forEach(m => m.do('laugh'));
        s.tell('breeze:laugh');
        await s.wait(2);
        p.do('show_hands');
        p.look('mechanic');
        s.tell('breeze:hands');
        await s.wait(3);
        crew.forEach(m => m.do('stand_easy'));
        await s.wait(1);
      },
    },
    // 1.1: Pellerin pulls off his gloves and pushes his hands into his pockets — they shake; Rivière in the shadow
    // watching him (the chance «Тронуть за плечо» next: the two in the frame)
    gloves: {
      after: ['breeze'],
      tells: ['gloves:pockets', 'gloves:riviere'],
      seconds: 6,
      from: () => ({
        ...LIT, ...STAND('chilean'), ...THINGS, ...AWAY, ...R('front'), ...GROUP,
        ...P('riviere', SHADOW, 112, 'hands_behind', { look: 'pellerin' }), ...SH.group,
      }),
      run: async s => {
        const p = s.person('pellerin');
        await cut(s, SH.pellerin_hands);
        p.with(['gloves']);
        p.look('pellerin#hands');
        const act = p.do('gloves_pockets');
        await s.wait(2);
        p.with([]);
        await act;
        s.tell('gloves:pockets');
        p.look(null);
        await cut(s, SH.shadow);
        s.person('riviere').look('pellerin');
        await s.wait(2);
        s.tell('gloves:riviere');
        await glide(s, SH.both_I, 1.2);
      },
    },
    // 1.1 «touched»: Rivière walks to him, lays his hand on his shoulder; Pellerin turns, surprised
    touch: {
      after: ['gloves'],
      tells: ['touch:hand', 'touch:turn'],
      seconds: 6,
      from: () => ({
        ...LIT, ...STAND('chilean'), ...THINGS, ...AWAY, ...R('front'), ...GROUP, pellerin_do: { motion: 'gloves_pockets', from: 3.9 },
        ...P('riviere', SHADOW, 112, 'hands_behind', { look: 'pellerin' }), ...SH.both_I,
      }),
      run: async s => {
        const r = s.person('riviere'), p = s.person('pellerin');
        glide(s, SH.touch, 2.5);
        // (the hand laid on him, not the Kimodo take: its arm went out straight past his shoulder toward his head)
        await r.walk([[-1.5, 8.8]]);
        await r.turn(95);
        r.reach({ r: 'pellerin#chest' });
        await s.wait(1.3);
        r.reach(null);
        s.tell('touch:hand');
        r.do('hands_behind');
        // (he turns his head after the hand, toward Rivière's side and the lens: looking at him, his head went round past
        // the profile and showed its back)
        p.look([-1.4, 7.6, 1.65]);
        await s.wait(0.6);
        s.tell('touch:turn');
        await s.wait(1);
      },
    },
    // 1.1 «not touched»: Rivière walks past him toward the hangar — «Report to Robineau» as he passes
    pass: {
      after: ['gloves'],
      tells: ['pass:by'],
      seconds: 5,
      from: () => ({
        ...LIT, ...STAND('chilean'), ...THINGS, ...AWAY, ...R('front'), ...GROUP, pellerin_do: { motion: 'gloves_pockets', from: 3.9 },
        ...P('riviere', SHADOW, 112, 'hands_behind', { look: 'pellerin' }), ...SH.both_I,
      }),
      run: async s => {
        const r = s.person('riviere');
        glide(s, SH.pass, 2);
        await r.walk([[-1.5, 9.4]]);
        s.tell('pass:by');
        r.look(null);
        await r.walk([[-1.3, 11.6], [-2.4, 14.6]]);
        r.do('hands_behind');
        await s.wait(0.5);
      },
    },
    // 1.2: the field lit, the Chilean standing; Robineau before it with the form of the fine; Rivière comes to him
    fine: {
      tells: ['fine:near'],
      seconds: 6,
      from: () => ({
        ...LIT, ...STAND('chilean'), ...THINGS, ...R('front'), ...ENGINES, ...AWAY,
        ...P('robineau', [1.7, 5.4], 230, 'hold_waist', { with: ['form'], look: 'riviere' }),
        ...P('riviere', [-1.0, 8.6], 150, 'stand', { look: 'robineau' }), ...SH.wide,
      }),
      run: async s => {
        const r = s.person('riviere');
        await r.walk([[0.55, 5.65]]);
        await r.turn(115);
        r.do('hands_behind');
        r.look('robineau');
        await glide(s, SH.fine, 1.5);
        s.tell('fine:near');
        await s.wait(0.5);
      },
    },
    // 1.2 «Robineau»: he signs the fine himself, slowly, and puts it in his pocket
    fine_robineau: {
      after: ['fine'],
      tells: ['fine_robineau:pocket'],
      seconds: 8,
      from: () => ({
        ...LIT, ...STAND('chilean'), ...THINGS, ...R('front'), ...ENGINES, ...AWAY,
        ...P('robineau', [1.7, 5.4], 230, 'hold_waist', { with: ['form'], look: 'riviere' }),
        ...P('riviere', [0.55, 5.65], 115, 'hands_behind', { look: 'robineau' }), ...SH.fine,
      }),
      run: async s => {
        const b = s.person('robineau');
        await glide(s, SH.robineau_I, 1.5);
        b.look('robineau#form');
        await b.do('sign_paper');
        await b.do('put_pocket', { from: 0.7 }); // (its first 0.7 s: the hands at the head — not this)
        b.with([]);
        b.do('hold_waist');
        b.look('riviere');
        s.tell('fine_robineau:pocket');
        await s.wait(1);
      },
    },
    // 1.2 «himself»: Rivière takes the form, signs it, gives it back — «Give it to him from me»; Robineau pockets it
    fine_self: {
      after: ['fine'],
      tells: ['fine_self:give', 'fine_self:pocket'],
      seconds: 8,
      from: () => ({
        ...LIT, ...STAND('chilean'), ...THINGS, ...R('front'), ...ENGINES, ...AWAY,
        ...P('robineau', [1.7, 5.4], 230, 'hold_waist', { with: ['form'], look: 'riviere' }),
        ...P('riviere', [0.55, 5.65], 115, 'hands_behind', { look: 'robineau' }), ...SH.fine,
      }),
      run: async s => {
        const r = s.person('riviere'), b = s.person('robineau');
        r.do('hands_behind');
        r.reach({ r: 'robineau#form' });
        await s.wait(1);
        b.with([]);
        r.with(['form']);
        r.reach(null);
        r.look('riviere#form');
        await r.do('sign_paper');
        r.do('hands_behind');
        r.reach({ r: 'robineau#hand_r' });
        r.look('robineau');
        await s.wait(1);
        r.with([]);
        b.with(['form']);
        r.reach(null);
        r.do('hands_behind');
        s.tell('fine_self:give');
        await b.do('put_pocket', { from: 0.7 }); // (its first 0.7 s: the hands at the head — not this)
        b.with([]);
        b.do('hold_waist');
        s.tell('fine_self:pocket');
        await s.wait(0.5);
      },
    },
    // 1.2 «tear»: Rivière takes the form and tears it up before the mechanics; they look at one another
    fine_tear: {
      after: ['fine'],
      tells: ['fine_tear:rip', 'fine_tear:torn', 'fine_tear:look'],
      seconds: 6,
      from: () => ({
        ...LIT, ...STAND('chilean'), ...THINGS, ...R('front'), ...ENGINES, ...AWAY,
        ...P('robineau', [1.7, 5.4], 230, 'hold_waist', { with: ['form'], look: 'riviere' }),
        ...P('riviere', [0.55, 5.65], 115, 'hands_behind', { look: 'robineau' }), ...SH.fine,
      }),
      run: async s => {
        const r = s.person('riviere'), b = s.person('robineau');
        const crew = ['mechanic', 'mechanic_b', 'mechanic_c'].map(id => s.person(id));
        r.do('hands_behind');
        r.reach({ r: 'robineau#form' });
        await s.wait(1);
        b.with([]);
        r.with(['form']);
        r.reach(null);
        await r.turn(160);
        crew.forEach((m, i) => {
          m.do('stand_easy');
          m.turn([190, 170, 200][i]);
          m.look('riviere');
        });
        const tearing = r.do('tear_paper');
        s.tell('fine_tear:rip');
        await tearing;
        r.with([]);
        r.do('hands_behind');
        s.tell('fine_tear:torn');
        b.look('riviere');
        // (the mechanics, who saw it: their faces, between him and them)
        await cut(s, SH.crew);
        await s.wait(0.8);
        crew[0].look('mechanic_b');
        crew[1].look('mechanic');
        crew[2].look('mechanic_b');
        s.tell('fine_tear:look');
        await s.wait(1);
      },
    },
    // 1.3: Roblet in the gate with his cap, his box at his feet; the mechanics at the engines slow and turn to listen;
    // the camera comes in to his hands on the cap
    roblet: {
      tells: ['roblet:say', 'roblet:hands'],
      seconds: 14,
      from: () => ({
        ...LIT, ...STAND('chilean'), ...THINGS, toolbox: 1, ...ENGINES, ...AWAY, ...R('front', { look: 'roblet#hands' }),
        ...P('riviere', [0.7, 4.25], 200, 'hands_behind', { look: 'roblet' }),
        ...P('robineau', [2.1, 3.85], 245, 'hold_waist', { look: 'roblet' }), ...SH.wide,
      }),
      run: async s => {
        const crew = ['mechanic', 'mechanic_b', 'mechanic_c'].map(id => s.person(id));
        s.tell('roblet:say');
        // (his face while Robineau and he speak; his hands on the cap for the narrator's «Rivière looked at his hands»)
        glide(s, SH.roblet_face, 2.5);
        await s.wait(2.5);
        for (const [i, m] of crew.entries()) {
          await s.wait(0.4 + 0.3 * i);
          m.do('stand_easy');
          m.look('roblet');
          m.turn([190, 170, 200][i]);
        }
        await s.wait(5);
        s.person('roblet').look('roblet#hands');
        await glide(s, SH.roblet_hands, 3);
        s.tell('roblet:hands');
        await s.wait(1.5);
      },
    },
    // Ш1, before the choice: the two of them, Roblet's eyes on his cap in his hands, Rivière looking at him — the
    // mechanics turned to listen (the choice's mark on Roblet next)
    roblet_ask: {
      after: ['roblet'],
      tells: ['roblet_ask:ready'],
      seconds: 2,
      from: () => ({
        ...LIT, ...STAND('chilean'), ...THINGS, toolbox: 1, ...ENGINES, ...AWAY, ...R('front', { look: 'roblet#hands' }),
        ...P('mechanic', [-0.6, 12.4], 190, 'stand_easy', { look: 'roblet' }),
        ...P('mechanic_b', [-1.8, 12.9], 170, 'stand_easy', { look: 'roblet' }),
        ...P('mechanic_c', [0.3, 12.8], 200, 'stand_easy', { look: 'roblet' }),
        ...P('riviere', [0.7, 4.25], 200, 'hands_behind', { look: 'roblet' }),
        ...P('robineau', [2.1, 3.85], 245, 'hold_waist', { look: 'roblet' }), ...SH.ask,
      }),
      run: async s => {
        await s.wait(1);
        s.tell('roblet_ask:ready');
        await s.wait(0.5);
      },
    },
    // Ш1 «dismiss»: Rivière lays the order on the box (М2 `pen` next: the insert)
    order: {
      after: ['roblet', 'roblet_ask'],
      tells: ['order:laid'],
      seconds: 4,
      from: () => ({
        ...LIT, ...STAND('chilean'), ...THINGS, toolbox: 1, ...ENGINES, ...AWAY, ...R('front', { look: 'riviere' }),
        ...P('riviere', [0.7, 4.25], 200, 'hands_behind', { look: 'roblet' }),
        ...P('robineau', [2.1, 3.85], 245, 'hold_waist', { look: 'roblet' }), ...SH.wide,
      }),
      run: async s => {
        const r = s.person('riviere');
        r.with(['form']);
        glide(s, SH.box, 2);
        await r.walk([[-1.1, 4.35]]);
        await r.turn(198);
        r.look('toolbox');
        await r.do('lay_paper');
        r.with([]);
        r.do('hands_behind');
        s.tell('order:laid');
        await s.wait(0.5);
      },
    },
    // Ш1 after М2: Roblet puts his cap on, lifts his box and goes across the lit field to the gate and out of the
    // light; the mechanics keep their heads down
    roblet_go: {
      after: ['order'],
      tells: ['roblet_go:cap', 'roblet_go:lift', 'roblet_go:gate'],
      seconds: 16,
      from: () => ({
        ...LIT, ...STAND('chilean'), ...THINGS, toolbox: 1, ...ENGINES, ...AWAY, ...R('front', { look: 'riviere' }),
        ...P('riviere', [-1.1, 4.35], 198, 'stand', { look: 'toolbox' }),
        ...P('robineau', [2.1, 3.85], 245, 'hold_waist', { look: 'roblet' }), ...SH.box,
      }),
      run: async s => {
        const r = s.person('riviere'), o = s.person('roblet');
        const crew = ['mechanic', 'mechanic_b', 'mechanic_c'].map(id => s.person(id));
        // (heads down, not at work: the `engine_work` take holds the arms out level)
        crew.forEach(m => {
          m.do('stand_easy');
          m.look('plane#wheel');
        });
        r.look('roblet');
        await glide(s, SH.roblet_riv, 1.5);
        const act = o.do('cap_on');
        await s.wait(1);
        o.wear(CAP_ON);
        await act;
        o.do('stand');
        s.tell('roblet_go:cap');
        await s.wait(2);
        o.look('toolbox');
        await o.do('lift_box');
        o.with(['toolbox_held']);
        s.set('toolbox', 0);
        s.tell('roblet_go:lift');
        o.gait('walk_carry');
        o.look(null);
        // (the lens goes with him across the lit field, not a wide shot where he is a speck)
        s.set('camera_shot', 'full');
        s.set('camera_target', 'roblet');
        await o.walk([[-2.5, 8.0], [-6.0, 20.0], [-9.0, 34.0]]);
        s.tell('roblet_go:gate');
        o.here(false);
        o.gait(null);
        r.do('hands_behind');
        await s.wait(0.5);
      },
    },
    // Ш1 «keep»: Rivière lifts the box himself and holds it out to Roblet (М3 `box` next)
    box_lift: {
      after: ['roblet', 'roblet_ask'],
      tells: ['box_lift:lift', 'box_lift:held'],
      seconds: 4,
      from: () => ({
        ...LIT, ...STAND('chilean'), ...THINGS, toolbox: 1, ...ENGINES, ...AWAY, ...R('front', { look: 'riviere' }),
        ...P('riviere', [0.7, 4.25], 200, 'hands_behind', { look: 'roblet' }),
        ...P('robineau', [2.1, 3.85], 245, 'hold_waist', { look: 'roblet' }), ...SH.wide,
      }),
      run: async s => {
        const r = s.person('riviere');
        glide(s, SH.two_box, 2);
        await r.walk([[-1.35, 4.3]]);
        await r.turn(180);
        r.look('toolbox');
        await r.do('lift_box');
        s.set('toolbox', 0);
        r.with(['toolbox_held']);
        s.tell('box_lift:lift');
        // (the two turned to each other and half to the lens — 135 / 225 here — so both faces are seen over the box)
        const o = s.person('roblet');
        o.turn(225);
        o.look('riviere');
        r.look('roblet');
        await r.turn(135);
        await r.do('give_box');
        s.tell('box_lift:held');
      },
    },
    // Ш1 after М3: Roblet holds his box; the mechanics look at Rivière — «Sir… you?»
    box_given: {
      after: ['box_lift'],
      tells: ['box_given:look'],
      seconds: 5,
      from: () => ({
        ...LIT, ...STAND('chilean'), ...THINGS, ...ENGINES, ...AWAY, ...R('front', { look: 'riviere', with: ['toolbox_held'], turn: 225 }),
        ...P('riviere', [-1.35, 4.3], 135, 'stand', { look: 'roblet' }),
        ...P('robineau', [2.1, 3.85], 245, 'hold_waist', { look: 'roblet' }), ...SH.two_box,
      }),
      run: async s => {
        const r = s.person('riviere');
        r.do('hands_behind');
        ['mechanic', 'mechanic_b', 'mechanic_c'].forEach((id, i) => {
          const m = s.person(id);
          m.do('stand_easy');
          m.turn([190, 170, 200][i]);
          m.look('riviere');
        });
        await glide(s, SH.wide, 2.5);
        s.tell('box_given:look');
        await s.wait(2);
      },
    },
    // Ш1 «take him off»: Roblet has the spanner in his hand; Rivière holds out his palm for it (М4 `spanner` next)
    palm: {
      after: ['roblet', 'roblet_ask'],
      tells: ['palm:out'],
      seconds: 3,
      from: () => ({
        ...LIT, ...STAND('chilean'), ...THINGS, toolbox: 1, ...ENGINES, ...AWAY, ...R('front', { look: 'riviere' }),
        ...P('riviere', [0.7, 4.25], 200, 'hands_behind', { look: 'roblet' }),
        ...P('robineau', [2.1, 3.85], 245, 'hold_waist', { look: 'roblet' }), ...SH.wide,
      }),
      run: async s => {
        const r = s.person('riviere'), o = s.person('roblet');
        // (the two turned to each other and half to the lens, faces three-quarters — Roblet on the right, the spanner in
        // his left hand (`spanner_l`), the one toward the lens; the turns are the run's — they win over `from`; Rivière's open hand held out between them at the waist, under the spanner in Roblet's hand — not the Kimodo `palm_out`, whose take turns the body away and lifts the hand to the
        // other's face)
        o.wear(CAP_ON);
        o.with(['spanner_l']);
        o.do('stand_easy');
        o.walk([[-0.15, 3.85]]).then(() => o.turn(225));
        await r.walk([[-0.3, 4.5], [-1.05, 3.85]]);
        await r.turn(135);
        r.do('stand');
        o.look('riviere#hand_r');
        r.look('roblet#hand_l');
        r.reach({ r: [-0.6, 3.6, 1.0] });
        await cut(s, SH.two_hands);
        s.tell('palm:out');
        await s.wait(1);
      },
    },
    // Ш1 after М4: Roblet picks up the chocks — «Better you had fired me» — and walks to the plane's wheel
    chocks_pick: {
      after: ['palm'],
      tells: ['chocks_pick:say', 'chocks_pick:pick', 'chocks_pick:gone'],
      seconds: 8,
      from: () => ({
        ...LIT, ...STAND('chilean'), ...THINGS, toolbox: 1, ...ENGINES, ...AWAY, ...P('roblet', [-0.15, 3.85], 225, 'stand_easy', { look: 'riviere', wear: CAP_ON }),
        ...P('riviere', [-1.05, 3.85], 135, 'stand', { look: 'roblet' }),
        ...P('robineau', [2.1, 3.85], 245, 'hold_waist', { look: 'roblet' }), ...SH.two_hands,
      }),
      run: async s => {
        const r = s.person('riviere'), o = s.person('roblet');
        r.reach(null);
        r.do('hands_behind');
        await glide(s, SH.roblet_riv, 1.5);
        o.look('riviere');
        s.tell('chocks_pick:say');
        await s.wait(1.5);
        o.look(null);
        await o.do('pick_chocks');
        s.tell('chocks_pick:pick');
        o.do('stand');
        glide(s, SH.wide, 3);
        await o.walk([[-1.0, 8.0], SPOTS.chocks.at]);
        await o.turn(SPOTS.chocks.turn);
        o.do('hold_low');
        o.look('plane#wheel');
        s.tell('chocks_pick:gone');
      },
    },

    // ——— the finale, Ф.4 ———
    // three o'clock, the rain: what Rivière sees from his window above — Roblet where Ш1 put him (by the hangar's gate in
    // the rain, or gathering up the chocks; dismissed: his workbench empty under its lamp), and, if he went out alone
    // (3.7), Robineau still by the hangar's wall without his coat. The game's keys: `roblet`, `robineau`, `floods`,
    // `plane`. A shot each, from above, as from the window
    below: {
      tells: ['below:roblet', 'below:robineau'],
      seconds: 9,
      from: () => ({
        ...STAND(scene.get('plane') ?? 'none'), ...THINGS, workbench: scene.get('roblet') === 'fire' ? 'empty' : 'tools', rain: 1, hangar: 1, office: 1,
        lever: scene.get('floods') ?? 1, flood_0: scene.get('floods') ?? 1, flood_1: scene.get('floods') ?? 1, flood_2: scene.get('floods') ?? 1,
        ...(scene.get('roblet') === 'remove' ? R('chocks', { look: 'plane#wheel', wear: CAP_ON }) : R('engine', { look: 'plane', wear: CAP_ON, turn: 200 })),
        ...P('robineau', WALL, 150, 'hold_waist', { look: [-4.0, 14.0, 0.5] }),
        ...(scene.get('roblet') === 'fire' ? SH.below_bench : SH.below_roblet),
      }),
      run: async s => {
        if (scene.get('roblet') === 'remove') {
          const o = s.person('roblet');
          o.do('pick_chocks');
        }
        await s.wait(3.5);
        s.tell('below:roblet');
        if (scene.get('robineau') === 'silent') {
          await glide(s, SH.below_wall, 2);
          await s.wait(3);
        }
        s.tell('below:robineau');
      },
    },

    // ——— chapter IV ———
    // 4.1: ten to three, the field dark; the European under the hangar's lamps, its engine warming; the mechanics
    // loading the bags; the pilot by its side; Rivière goes out to the switch (М8 `light_european` next). Roblet where
    // the game's `roblet_spot` puts him; Robineau (if here) at Rivière's place or by the wall (the game's `robineau`)
    european: {
      tells: ['european:switch'],
      seconds: 10,
      // (sat with him, 3.7: Robineau comes out with Rivière and stops at his shoulder's place; went out alone: he has
      // long been by the hangar wall, no coat, the folder to his chest — Rivière comes to the switch near him and does not
      // look at him)
      from: () => ({
        ...CH4(),
        ...P('riviere', [-4.0, 6.0], 20, 'stand', { look: 'hangar_front#switch' }),
        ...(scene.get('robineau') === 'silent' ? P('robineau', WALL, 150, 'hold_waist', { look: 'robineau#hands' })
          : scene.get('robineau') === 'sit' ? P('robineau', [-4.7, 5.6], 20, 'hold_waist', { look: 'riviere' })
            : P('robineau', BESIDE, 110, 'hold_waist', { look: 'riviere' })),
        ...SH.wide,
      }),
      run: async s => {
        const r = s.person('riviere'), b = s.person('robineau');
        const how = scene.get('robineau');
        if (how === 'sit') b.walk([[-3.4, 9.0], BESIDE]).then(() => { b.turn(110); b.look('riviere'); });
        await r.walk([[-2.4, 12.0], SWITCH]);
        await r.turn(16);
        r.do('hands_behind');
        r.reach(AT_SWITCH);
        if (how === 'silent' && scene.get('robineau_here') !== false) {
          r.look('hangar_front#switch');
          await cut(s, SH.wall);
          await s.wait(2.8);
        }
        await glide(s, SH.switch, 2.5);
        s.tell('european:switch');
        await s.wait(0.5);
      },
    },
    // 4.1 «kept»: Roblet shuts the cowling, wipes his hands — «Checked it twice»; the pilot looks at him, then at
    // Rivière
    twice: {
      after: ['european'],
      tells: ['twice:shut', 'twice:wipe', 'twice:look'],
      seconds: 8,
      from: () => ({ ...CH4(LIT), ...R('engine'), ...P('riviere', SWITCH, 16, 'stand', { look: 'plane' }), ...SH.pilot_roblet }),
      run: async s => {
        const o = s.person('roblet'), pl = s.person('pilot');
        pl.look('roblet');
        await o.turn(20);
        o.look('plane#cowling');
        o.do('engine_work');
        await s.wait(1.5);
        s.set('cowling', 0);
        s.tell('twice:shut');
        await s.wait(0.5);
        await o.turn(110);
        o.look('pilot');
        o.do('wipe_hands');
        s.tell('twice:wipe');
        await s.wait(2.5);
        pl.look('riviere');
        s.tell('twice:look');
        await s.wait(1.5);
      },
    },
    // 4.1 «taken off the engines»: Roblet at the wheels with the chocks, not looking at the engine
    at_chocks: {
      after: ['european'],
      tells: ['at_chocks:end'],
      seconds: 4,
      from: () => ({ ...CH4(LIT), ...R('chocks', { look: 'plane#wheel' }), ...P('riviere', SWITCH, 16, 'stand', { look: 'plane' }), ...SH.wide }),
      run: async s => {
        await cut(s, SH.chocks);
        s.person('roblet').look([-0.2, 13.0, 0]);
        await s.wait(3.5);
        s.tell('at_chocks:end');
      },
    },
    // 4.1 «dismissed»: the pilot to the young mechanic — «Who checked it?», «I did…»; he looks under the cowling; the
    // camera goes to Roblet's empty workbench under its lamp
    who_checked: {
      after: ['european'],
      tells: ['who_checked:ask', 'who_checked:under', 'who_checked:bench'],
      seconds: 12,
      from: () => ({ ...CH4(LIT), ...P('riviere', SWITCH, 16, 'stand', { look: 'plane' }), ...SH.pilot }),
      run: async s => {
        const pl = s.person('pilot'), m = s.person('mechanic');
        pl.look('mechanic');
        await pl.walk([[0.5, 12.0]]);
        await pl.turn(265);
        m.do('stand_easy');
        await m.turn(80);
        m.look('pilot');
        await glide(s, SH.young, 1.5);
        s.tell('who_checked:ask');
        await s.wait(2.5);
        await pl.walk([[-0.7, 12.95]]);
        await pl.turn(350);
        pl.look('plane#cowling');
        await pl.do('look_under');
        s.tell('who_checked:under');
        await glide(s, SH.bench, 3);
        s.tell('who_checked:bench');
        await s.wait(2);
      },
    },
    // 4.1 «sent to work»: Robineau walks in from the office's side, buttoned up, the folder and the report under his
    // arm, to Rivière's place
    robineau_out: {
      after: ['european', 'twice', 'at_chocks', 'who_checked'],
      tells: ['robineau_out:near'],
      seconds: 8,
      from: () => ({ ...CH4(LIT), ...P('robineau', [-8.0, 6.0], 40, 'hold_waist', { with: ['form'] }), ...P('riviere', SWITCH, 16, 'stand', { look: 'plane' }), ...SH.robineau_in }),
      run: async s => {
        const b = s.person('robineau');
        b.with(['form']);
        await b.walk([BESIDE]);
        await b.turn(110);
        b.look('plane');
        s.tell('robineau_out:near');
        await s.wait(1);
      },
    },
    // 4.1: Rivière comes back from the switch; the camera goes up to the lit window upstairs — her silhouette; back to
    // the pilot by his plane (his two lines)
    window: {
      after: ['european', 'twice', 'at_chocks', 'who_checked', 'robineau_out'],
      tells: ['window:her', 'window:pilot'],
      seconds: 8,
      from: () => ({ ...CH4(LIT), ...P('riviere', SWITCH, 16, 'stand', { look: 'plane' }), ...SH.wide }),
      run: async s => {
        const r = s.person('riviere'), pl = s.person('pilot');
        r.reach(null);
        if (Math.hypot((scene.get('riviere_a') ?? 0) - R4[0], (scene.get('riviere_d') ?? 0) - R4[1]) > 0.3) {
          glide(s, SH.wide, 1.5);
          await r.walk([[-2.8, 14.6], R4]);
        }
        await r.turn(100);
        r.do('hands_behind');
        r.look('pilot');
        pl.look('office_windows#madame');
        await cut(s, SH.window);
        await s.move('madame_window', 1, { over: 2 });
        s.tell('window:her');
        await s.wait(1.5);
        await cut(s, SH.pilot);
        await pl.turn(265);
        pl.look('riviere');
        s.tell('window:pilot');
        await s.wait(1);
      },
    },
    // 4.1: Robineau looks up at the window — «One more… this same night…» — opens his folder: the board's paper close;
    // he shuts it
    folder: {
      after: ['window'],
      tells: ['folder:look', 'folder:paper', 'folder:shut'],
      seconds: 8,
      from: () => ({ ...CH4(LIT), madame_window: 1, ...SH.robineau_up }),
      run: async s => {
        const b = s.person('robineau');
        await b.turn(280);
        b.look('office_windows#madame');
        await cut(s, SH.robineau_up);
        s.tell('folder:look');
        await s.wait(2.5);
        b.look('robineau#hands');
        await s.move('folder_open', 1, { over: 0.8 });
        s.tell('folder:paper');
        await s.wait(3);
        await s.move('folder_open', 0, { over: 0.6 });
        b.look('riviere');
        s.tell('folder:shut');
        await s.wait(0.5);
      },
    },
    // 4.1 (`bends` the game's): none — the pilot puts his helmet on and waits, not looking at the window; one — and
    // turns to Rivière; bends — the mechanics by the bags talk low, the pilot buckles his helmet, his hand on the
    // plane's side — «Ready, sir» / «Ready. Ready a long time»
    ready: {
      after: ['folder'],
      tells: ['ready:say'],
      seconds: 8,
      from: () => ({ ...CH4(LIT), madame_window: 1, ...SH.pilot }),
      run: async s => {
        const pl = s.person('pilot');
        const bends = scene.get('bends') ?? 'none';
        await glide(s, SH.pilot, 1);
        if (bends === 'bends') {
          for (const id of ['mechanic_b', 'mechanic_c']) {
            const m = s.person(id);
            m.do('stand_easy');
            m.look(id === 'mechanic_b' ? 'mechanic_c' : 'mechanic_b');
          }
        }
        pl.look(null);
        await helmetOn(s, 'pilot');
        if (bends === 'none') pl.look([6, 30, 1.8]);
        else pl.look('riviere');
        if (bends === 'bends') pl.do('hand_on_side');
        s.tell('ready:say');
        await s.wait(2);
      },
    },
    // 4.2: the engine runs up; the pilot looks at Rivière; close on Rivière while the timer runs (Ш3 next)
    runup: {
      tells: ['runup:look'],
      seconds: 5.5,
      from: () => ({ ...CH4(LIT), engine: 0.6, cowling: 0, madame_window: 1, pilot_wear: HELMET, pilot_do: 'hand_on_side', pilot_look: 'riviere', riviere_look: 'pilot', ...SH.pilot }),
      run: async s => {
        s.move('engine', 1, { over: 1.5 });
        await s.wait(1);
        await cut(s, SH.riviere);
        await s.wait(1.2);
        await glide(s, SH.choose, 1.8);
        s.tell('runup:look');
        await s.wait(0.5);
      },
    },
    // Ш3 «fly»: Rivière raises his hand and holds it (М7 `chocks` next)
    hand_up: {
      after: ['runup'],
      tells: ['hand_up:up'],
      seconds: 3,
      from: () => ({ ...CH4(LIT), engine: 1, cowling: 0, madame_window: 1, pilot_wear: HELMET, pilot_do: 'hand_on_side', pilot_look: 'riviere', riviere_look: 'pilot', ...SH.riviere }),
      run: async s => {
        await s.person('riviere').do('raise_hand');
        s.tell('hand_up:up');
      },
    },
    // Ш3 after М7 (`roblet`, `robineau` the game's): the pilot behind the wing; the chocks pulled (Roblet if he was
    // taken off the engines, else a mechanic); the plane runs across the lit field and goes north, its lights
    // melting; Rivière and Robineau watch (Robineau beside him looking at the window / writing the time / by the wall)
    takeoff: {
      after: ['hand_up'],
      tells: ['takeoff:chocks', 'takeoff:off', 'takeoff:gone'],
      seconds: 16,
      from: () => ({ ...CH4(LIT), engine: 1, cowling: 0, madame_window: 1, pilot_wear: HELMET, pilot_look: 'riviere', riviere_do: { motion: 'raise_hand', from: 2.9 }, riviere_look: 'pilot', ...SH.wide }),
      run: async s => {
        const r = s.person('riviere'), pl = s.person('pilot'), b = s.person('robineau');
        const how = scene.get('robineau');
        glide(s, SH.wide, 1.5);
        await pl.walk([[3.0, 14.3]]);
        pl.here(false);
        await pullChocks(s, chocksMan());
        s.tell('takeoff:chocks');
        r.do('hands_behind');
        r.look('plane');
        const run = away(s);
        await s.wait(4);
        s.tell('takeoff:off');
        if (how === 'silent') {
          b.look('plane');
        } else {
          await b.walk([BESIDE]);
          await b.turn(110);
          if (how === 'work') {
            b.with(['notebook']);
            b.look('robineau#notebook');
            b.do('write_note');
          } else b.look('office_windows#madame');
        }
        await glide(s, SH.the_two, 2.5);
        await run;
        await s.move('plane_lights', 0, { over: 2.5 });
        s.tell('takeoff:gone');
        if (how === 'work') b.do('hold_waist');
        await s.wait(0.5);
      },
    },
    // Ш3 «stand down» (`bends` the game's): none — the mechanics freeze; else the pilot slowly pulls off his helmet and
    // looks at the plane — «Stand down? You?» / «Till dawn, sir»; «To the board… shall I write?», «I will myself»;
    // then Rivière goes to the switch, Robineau after him (М8 `light_off` next)
    stand_down: {
      after: ['runup'],
      tells: ['stand_down:pilot', 'stand_down:robineau'],
      seconds: 8,
      from: () => ({ ...CH4(LIT), engine: 1, cowling: 0, madame_window: 1, pilot_wear: HELMET, pilot_do: 'hand_on_side', pilot_look: 'riviere', riviere_look: 'pilot', ...SH.riviere }),
      run: async s => {
        const r = s.person('riviere'), pl = s.person('pilot'), b = s.person('robineau');
        const bends = scene.get('bends') ?? 'none';
        await cut(s, SH.pilot);
        if (bends === 'none') {
          for (const id of ['mechanic', 'mechanic_b', 'mechanic_c']) s.person(id).still(true);
        } else {
          pl.do('stand_easy');
          await helmetOff(s, 'pilot');
          pl.look('plane');
        }
        s.tell('stand_down:pilot');
        await s.wait(2);
        await cut(s, SH.the_two);
        b.look('riviere');
        s.tell('stand_down:robineau');
        await s.wait(2);
        for (const id of ['mechanic', 'mechanic_b', 'mechanic_c']) s.person(id).still(false);
        glide(s, SH.wide, 2);
        b.walk([[-2.4, 13.2], [-2.3, 19.2]]).then(() => b.turn(30));
        await r.walk([[-3.0, 13.2], SWITCH]);
        await r.turn(16);
        r.do('hands_behind');
        r.reach(AT_SWITCH);
        await glide(s, SH.switch, 2);
      },
    },
    // Ш3 after М8 off: the engine dies; the pilot stays by his plane, his hand on its side; Rivière walks away toward
    // the office — past Roblet if he is at the engine («Because of me?», «No»)
    dark_field: {
      after: ['stand_down'],
      tells: ['dark_field:still', 'dark_field:walk'],
      seconds: 10,
      from: () => ({ ...CH4(DARK), engine: 1, cowling: 0, madame_window: 1, ...P('pilot', PILOT, 265, 'hand_on_side', { look: 'plane' }),
        ...P('riviere', SWITCH, 16, 'stand', { reach: AT_SWITCH }), ...P('robineau', [-2.3, 19.2], 30, 'hold_waist', { look: 'riviere' }), ...SH.switch }),
      run: async s => {
        const r = s.person('riviere'), o = s.person('roblet');
        s.move('engine', 0, { over: 3 });
        s.person('pilot').do('hand_on_side');
        r.reach(null);
        r.do('hands_behind');
        await glide(s, SH.wide, 2);
        await r.walk([[-2.6, 15.0], [-2.3, 12.7]]);
        if (scene.get('roblet_here') !== false && scene.get('roblet_spot') === 'engine') {
          o.look('riviere');
          r.look('roblet');
        }
        s.tell('dark_field:still');
        await s.wait(2);
        r.look(null);
        await r.walk([[-5.5, 10.5], [-9.0, 8.5]]);
        s.tell('dark_field:walk');
        await s.wait(0.5);
      },
    },
    // Ш3 «says nothing»: Rivière does not move; the pilot looks at him, at the window, at him again — «He won't come
    // now», «Since you say nothing — by the timetable»
    waits: {
      after: ['runup'],
      tells: ['waits:say'],
      seconds: 8,
      from: () => ({ ...CH4(LIT), engine: 1, cowling: 0, madame_window: 1, pilot_wear: HELMET, pilot_do: 'hand_on_side', pilot_look: 'riviere', riviere_look: 'pilot', ...SH.riviere }),
      run: async s => {
        const pl = s.person('pilot');
        await s.wait(2);
        await cut(s, SH.pilot);
        pl.look('office_windows#madame');
        await s.wait(1.5);
        pl.look('riviere');
        s.tell('waits:say');
        await s.wait(2);
      },
    },
    // Ш3 «says nothing» (`robineau` the game's): the pilot behind the wing; a mechanic, looking at the wing and at
    // Rivière, pulls the chocks; the plane runs and goes; Rivière raises his hand when its lights are in the sky and
    // stands till the drone dies
    timetable: {
      after: ['waits'],
      tells: ['timetable:chocks', 'timetable:gone', 'timetable:hand'],
      seconds: 18,
      from: () => ({ ...CH4(LIT), engine: 1, cowling: 0, madame_window: 1, pilot_wear: HELMET, pilot_look: 'riviere', riviere_look: 'pilot', ...SH.pilot }),
      run: async s => {
        const r = s.person('riviere'), pl = s.person('pilot'), b = s.person('robineau');
        const how = scene.get('robineau');
        glide(s, SH.wide, 1.5);
        await pl.walk([[3.0, 14.3]]);
        pl.here(false);
        const id = scene.get('mechanic_here') !== false ? 'mechanic' : 'mechanic_b';
        const m = s.person(id);
        m.do('stand_easy');
        m.look('riviere');
        await s.wait(1);
        m.look('plane');
        await pullChocks(s, id);
        s.tell('timetable:chocks');
        r.look('plane');
        if (how !== 'silent') b.look('plane');
        const run = away(s);
        await s.wait(7);
        await glide(s, SH.the_two, 2);
        await r.do('raise_hand');
        s.tell('timetable:hand');
        await run;
        await s.move('plane_lights', 0, { over: 2.5 });
        s.tell('timetable:gone');
        r.do('hands_behind');
        await s.wait(1);
      },
    },
  };
}

return { film, SPOTS };
