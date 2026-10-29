// The office's shared code: where Rivière and Madame Fabien stand and sit (SPOTS — script.js lays them out by their
// spot keys; the pieces start from the same places), and its pieces (stage 5; modules/beats; the contract:
// docs/new-games/nochnoj-polyot/game.md «Stage 5 — pieces»): `film(scene)` — each piece `{after, tells, seconds, from,
// run}`. `from` — every value a piece begins at but the game's: `<id>_here`, `<id>_mood`, the window's and the room's
// keys of three o'clock by the ending (lamp, floods, rain, plane, yard_roblet, yard_robineau — OFFICE of the game's
// story), where she is at three (`madame_spot`, by the ending: the piece starts her there), and the variants its row
// names (`leave_turn`, `leave_look` of `leaves`); `run` — the director's sequence, its moments told
// (`<piece>:<moment>`), ending in a living pose.
//   The room (metres: across right of the middle, distance away): 5 m wide (−2.5…2.5), its floor 1.3…5.4 m, seen from
// its open side; the door onto the landing in the left wall at 3.75…4.6 m (whoever comes in waits on the landing,
// unseen behind the wall, at LANDING); the big window in the back wall; the desk near on the right, the visitor's chair
// by the door.
const SPOTS = {
  riviere: {
    room: { at: [0.75, 4.4], turn: 235, does: 'hands_behind' },
    window: { at: [1.75, 4.85], turn: 225, does: 'hands_behind' },
    desk: { at: [1.3, 3.62], turn: 180, does: 'desk_lean', on: [1.3, 3.62, 0.54] },
  },
  madame: {
    window: { at: [-0.75, 4.75], turn: 135, does: 'coat_clutch' },
    door: { at: [-1.9, 4.2], turn: 120, does: 'stand' },
    chair: { at: [-1.3, 2.8], turn: 120, does: 'fly_seated', on: [-1.3, 2.8, 0.46] },
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
  // her shots by where she is: her face (medium, close), her hands
  const HER = {
    window: { medium: CAM([0.1, 3.2, 1.6], [-0.75, 4.75, 1.52]), close: CAM([-0.3, 3.85, 1.58], [-0.75, 4.75, 1.53]),
      hands: CAM([-0.15, 3.55, 1.45], [-0.75, 4.75, 1.15]) },
    door: { medium: CAM([-0.85, 2.9, 1.6], [-1.9, 4.2, 1.52]), close: CAM([-1.35, 3.45, 1.58], [-1.9, 4.2, 1.53]),
      hands: CAM([-1.0, 3.0, 1.45], [-1.9, 4.2, 1.15]) },
    chair: { medium: CAM([-0.5, 1.9, 1.35], [-1.3, 2.8, 1.15]), close: CAM([-0.75, 2.2, 1.3], [-1.3, 2.8, 1.17]),
      hands: CAM([-0.55, 1.85, 1.2], [-1.3, 2.8, 0.8]) },
  };
  const SH = {
    wide: CAM0,
    riv: CAM([-0.1, 3.3, 1.65], [0.75, 4.4, 1.6]), // Rivière just in, his face
    riv_window: CAM([0.9, 3.4, 1.65], [1.75, 4.85, 1.6]),
    desk: CAM([0.85, 1.7, 1.25], [1.3, 3.6, 1.15]), // Rivière at his desk over the log
    window: CAM([0.4, 4.5, 1.8], [3.5, 60, -3.2]), // through the glass, down to the yard and the hangar
    doorway: CAM([-1.0, 3.0, 1.65], [-2.25, 4.15, 1.55]), // Robineau in the doorway
  };
  const LANDING = [-3.3, 6.8]; // on the landing, unseen behind the left wall
  const THRESHOLD = [-2.55, 4.2];
  const INSIDE = [-2.0, 4.2];
  const DOORWAY = [-2.25, 4.15];
  const at = (id, where, look = null, more = {}) => {
    const p = typeof where === 'string' ? SPOTS[id][where] : { at: [where[0], where[1]], turn: where[2], does: where[3] ?? 'stand' };
    return {
      [`${id}_a`]: p.at[0], [`${id}_d`]: p.at[1], [`${id}_turn`]: p.turn, [`${id}_do`]: p.does, [`${id}_on`]: p.on ?? null,
      [`${id}_reach`]: null, [`${id}_look`]: look, [`${id}_with`]: [], ...more,
    };
  };
  const placeAt = (s, id, spot) => {
    s.set(`${id}_spot`, spot);
    for (const [k, v] of Object.entries(at(id, spot))) if (!k.endsWith('_look') && !k.endsWith('_with')) s.set(k, v);
  };
  // where she is at three, the game's (by the ending: victory — by the door, silence — at the window, dawn — on the chair)
  const her = () => (SPOTS.madame[scene.get('madame_spot')] ? scene.get('madame_spot') : 'window');
  // where he stays once in: by the window when she sits (dawn), else in the room's middle
  const his = () => (her() === 'chair' ? 'window' : 'room');
  const LOG = { log_open: 0, ink: 0, blot: 0 };
  const PEOPLE = (o = {}) => ({
    ...at('riviere', his(), 'madame'), ...at('madame', her(), 'riviere'), ...at('robineau', [LANDING[0], LANDING[1], 130, 'hold_waist'], 'riviere'), ...o,
  });
  return {
    // Ф.1: three o'clock; Rivière comes in by the door to his place; she turns to him — silence
    office: {
      tells: ['office:in'],
      seconds: 8,
      from: () => ({ ...LOG, ...PEOPLE({ ...at('riviere', [LANDING[0], LANDING[1], 160, 'stand'], null) }), ...SH.wide }),
      run: async s => {
        const r = s.person('riviere'), m = s.person('madame');
        const spot = SPOTS.riviere[his()];
        await r.walk([THRESHOLD, INSIDE, spot.at]);
        await r.turn(spot.turn);
        r.do('hands_behind');
        r.look('madame');
        m.look('riviere');
        s.set('riviere_spot', his());
        s.tell('office:in');
        await glide(s, HER[her()].medium, 2.5);
        await s.wait(1);
      },
    },
    // Ф.2 «Dawn»: she gets up from the visitor's chair and goes toward the door
    rises: {
      after: ['office'],
      tells: ['rises:up'],
      seconds: 5,
      from: () => ({ ...LOG, ...PEOPLE(), ...HER[her()].medium }),
      run: async s => {
        const m = s.person('madame');
        if (her() === 'chair') {
          await m.do('stand_up');
          s.set('madame_on', null);
        }
        m.do('stand');
        s.tell('rises:up');
        glide(s, HER.door.medium, 2.5);
        await m.walk([SPOTS.madame.door.at]);
        await m.turn(SPOTS.madame.door.turn);
        m.look('riviere');
        s.set('madame_spot', 'door');
      },
    },
    // Ф.2: she puts on her gloves
    gloves_on: {
      after: ['office', 'rises'],
      tells: ['gloves_on:end'],
      seconds: 4,
      from: () => ({ ...LOG, ...PEOPLE({ madame_with: ['gloves'] }), ...HER[her()].hands }),
      run: async s => {
        const m = s.person('madame');
        const spot = scene.get('madame_spot') ?? her();
        await glide(s, (HER[spot] ?? HER.window).hands, 0.8);
        m.with(['gloves']);
        m.look('madame#hands');
        await m.do('gloves_on');
        m.with([]);
        m.do(SPOTS.madame[spot]?.does === 'fly_seated' ? 'fly_seated' : 'stand');
        m.look('riviere');
        s.tell('gloves_on:end');
      },
    },
    // Ф.2: she folds the tape into her glove
    tape_glove: {
      after: ['office', 'rises'],
      tells: ['tape_glove:end'],
      seconds: 4,
      from: () => ({ ...LOG, ...PEOPLE({ madame_with: ['tape', 'gloves'] }), ...HER[her()].hands }),
      run: async s => {
        const m = s.person('madame');
        const spot = scene.get('madame_spot') ?? her();
        await glide(s, (HER[spot] ?? HER.window).hands, 0.8);
        m.with(['tape', 'gloves']);
        m.look('madame#hands');
        await m.do('fold_tape');
        m.with(['gloves']);
        m.do(SPOTS.madame[spot]?.does === 'fly_seated' ? 'fly_seated' : 'stand');
        m.look(null);
        s.tell('tape_glove:end');
        await glide(s, (HER[spot] ?? HER.window).close, 1);
      },
    },
    // Ф.2 (`leave_turn`, `leave_look` the game's): she goes to the door; at it, what the keys say — to him (nod, none,
    // look, wait, past) and to the window (none, sky, field); then out
    leaves: {
      after: ['office', 'rises', 'gloves_on', 'tape_glove'],
      tells: ['leaves:door', 'leaves:look', 'leaves:gone'],
      seconds: 10,
      from: () => ({ ...LOG, ...PEOPLE(), ...HER[her()].medium }),
      run: async s => {
        const m = s.person('madame'), r = s.person('riviere');
        const turn = scene.get('leave_turn') ?? 'none', look = scene.get('leave_look') ?? 'none';
        m.look(null);
        if (scene.get('madame_on')) {
          await m.do('stand_up');
          s.set('madame_on', null);
        }
        m.do('stand');
        glide(s, HER.door.medium, 2);
        await m.walk([SPOTS.madame.door.at, INSIDE]);
        await m.turn(250);
        s.tell('leaves:door');
        r.look('madame');
        if (turn === 'nod' || turn === 'look' || turn === 'wait') {
          await m.turn(95);
          m.look('riviere');
          await glide(s, HER.door.close, 1);
          if (turn === 'nod') await m.do('nod');
          else await s.wait(turn === 'wait' ? 3 : 1.5);
          m.do('stand');
        } else await s.wait(0.8);
        if (look === 'sky') m.look([0.4, 30, 14]);
        else if (look === 'field') m.look([0.4, 25, -4]);
        if (look !== 'none') {
          await m.turn(70);
          await s.wait(1.8);
        }
        s.tell('leaves:look');
        m.look(null);
        glide(s, SH.wide, 2);
        await m.walk([THRESHOLD, LANDING]);
        m.here(false);
        r.look('left_wall');
        s.tell('leaves:gone');
        await s.wait(0.5);
      },
    },
    // Ф.3: Rivière sits at his desk and opens the log — its page close (М2 «log» after it, the pen in his hand)
    log: {
      tells: ['log:open'],
      seconds: 5,
      from: () => ({ ...LOG, ...PEOPLE({ ...at('riviere', his(), 'desk_top#log') }), ...SH.wide }),
      run: async s => {
        const r = s.person('riviere');
        glide(s, SH.desk, 2.5);
        await r.walk([[1.3, 4.25]]);
        await r.turn(180);
        await r.do('sit_down');
        placeAt(s, 'riviere', 'desk');
        r.look('desk_top#log');
        await s.move('log_open', 1, { over: 1, ease: 'out' });
        r.do('write_desk');
        s.tell('log:open');
      },
    },
    // Ф.3 (after М2): the page closes; Rivière looks out at the window; the camera through the glass down to the yard
    log_done: {
      tells: ['log_done:window'],
      seconds: 8,
      from: () => ({ ...LOG, log_open: 1, ink: 1, ...PEOPLE({ ...at('riviere', 'desk', 'desk_top#log', { riviere_do: 'write_desk' }) }), ...SH.desk }),
      run: async s => {
        const r = s.person('riviere');
        await s.move('log_open', 0, { over: 0.8, ease: 'in' });
        r.do('desk_lean');
        await s.wait(1);
        r.look([0.4, 12, 1.5]);
        await s.wait(1);
        await glide(s, SH.window, 3.5);
        s.tell('log_done:window');
        await s.wait(1.5);
      },
    },
    // Ф.4: Robineau appears in the doorway
    doorway: {
      after: ['log_done'],
      tells: ['doorway:in'],
      seconds: 4,
      from: () => ({ ...LOG, ...PEOPLE({ ...at('riviere', 'desk', [0.4, 12, 1.5]) }), ...SH.window }),
      run: async s => {
        const b = s.person('robineau'), r = s.person('riviere');
        glide(s, SH.doorway, 2);
        await b.walk([THRESHOLD, DOORWAY]);
        await b.turn(130);
        b.look('riviere');
        r.look('robineau');
        s.tell('doorway:in');
      },
    },
  };
}

return { film, SPOTS };
