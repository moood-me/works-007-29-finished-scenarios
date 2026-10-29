// What the library's paintings share: its oak (a panelled dado of linenfold under a rail, a plain frieze under the
// beams) and its bookcases (shelves of old books in worn leather). Metres, y down, from the foot of a wall.
const OAK = '#4a3222';
const OAK_LIGHT = '#5d4029';
const OAK_DARK = '#2e1f15';
const LEATHER = ['#5b2a22', '#3f3a2a', '#6b4a2a', '#2f3a33', '#4e2f3a', '#7a5a34', '#3a2a22', '#5a4a3a'];

// a stretch of the room's oak from x0 to x1, `top` metres high (3.4: the library's): the dado's linenfold panels to
// 1 m, the rail, the wall above in plain panels, the frieze under the ceiling
function oak(g, x0, x1, top = 3.4) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -top - 0.02, w, top + 0.04);
  g.clip();
  g.fillStyle = OAK;
  g.fillRect(x0, -top - 0.02, w, top + 0.04);
  // the upper panels: tall, framed by darker rails
  g.strokeStyle = OAK_DARK;
  g.lineWidth = 0.04;
  for (let x = Math.floor(x0 / 0.6) * 0.6; x < x1; x += 0.6) g.strokeRect(x + 0.06, -top + 0.4, 0.48, top - 1.55);
  // the dado: linenfold panels (folds as light and dark stripes, curled at top and bottom)
  g.fillStyle = OAK_DARK;
  g.fillRect(x0, -1.05, w, 1.05);
  for (let x = Math.floor(x0 / 0.45) * 0.45; x < x1; x += 0.45) {
    g.fillStyle = OAK;
    g.fillRect(x + 0.05, -0.92, 0.35, 0.72);
    for (let f = 0; f < 4; f++) {
      g.fillStyle = f % 2 ? OAK_DARK : OAK_LIGHT;
      g.fillRect(x + 0.08 + f * 0.08, -0.86, 0.04, 0.6);
    }
  }
  // the rail, the skirting, the frieze
  g.fillStyle = OAK_LIGHT;
  g.fillRect(x0, -1.1, w, 0.07);
  g.fillStyle = OAK_DARK;
  g.fillRect(x0, -0.14, w, 0.16);
  g.fillRect(x0, -top - 0.02, w, 0.26);
  g.restore();
}

// a bookcase from x0 to x1, its shelves from `bottom` up to `top` (metres over the floor): a dark frame, shelves of
// books leaning and standing, here and there a gap
function bookcase(g, e, x0, x1, top, bottom = 1.1) {
  g.fillStyle = OAK_DARK;
  g.fillRect(x0 - 0.06, -top - 0.08, x1 - x0 + 0.12, top - bottom + 0.1);
  g.fillStyle = '#1c130d';
  g.fillRect(x0, -top, x1 - x0, top - bottom);
  for (let y = -bottom; y > -top + 0.25; y -= 0.38) {
    let x = x0 + 0.02;
    while (x < x1 - 0.04) {
      const bw = 0.03 + e.rnd() * 0.04;
      if (e.rnd() < 0.05) {
        x += 0.08 + e.rnd() * 0.12;
        continue;
      }
      const bh = 0.22 + e.rnd() * 0.1;
      g.fillStyle = LEATHER[Math.floor(e.rnd() * LEATHER.length)];
      g.fillRect(x, y - bh, Math.min(bw, x1 - x - 0.02), bh);
      // a band of gilt on the spine
      if (e.rnd() < 0.6) {
        g.fillStyle = 'rgba(196,160,92,0.55)';
        g.fillRect(x, y - bh + 0.04, Math.min(bw, x1 - x - 0.02), 0.012);
      }
      x += bw + 0.004;
    }
    // the shelf board
    g.fillStyle = OAK_LIGHT;
    g.fillRect(x0, y, x1 - x0, 0.03);
  }
}

// The library's pieces (stage 5; modules/beats; the contract: game.md «Stage 5 — pieces»): `film(scene)` — each piece
// `{after, tells, seconds, from, run}`. `from` — every value a piece begins at but the game's (`<id>_here`,
// `<id>_mood`, the variants it names: `stain` of wagers, `shares`, `plays`, `paints`, `sketch`); `run` — the director's
// sequence, its moments told (`<piece>:<moment>`), ending in a living pose. The places (notes.md «Pieces»): the doors in
// the left wall (6.8–8.0 m), the passage beyond them where whoever is not in the room waits unseen; the breakfast table
// by the window (its six seats); Mr Otis's desk; the wing chair by the fire; the window seat.
function FILM(scene) {
  const DEG = 180 / Math.PI, EYE = 1.7;
  const IDS = ['virginia', 'simon', 'otis', 'mrs_otis', 'washington', 'twin_star', 'twin_stripes', 'mrs_umney', 'cecil'];
  const CAMK = ['camera_x', 'camera_z', 'camera_h', 'camera_yaw', 'camera_pitch'];
  const CAM0 = { camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
    camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0 };
  // a camera of its own: the eye [across, distance, height over the floor] looking at a point [across, distance, height]
  const CAM = ([ex, ez, eh], [tx, tz, th]) => ({ ...CAM0, camera_x: ex, camera_z: ez, camera_h: eh - EYE,
    camera_yaw: Math.atan2(tx - ex, tz - ez) * DEG, camera_pitch: Math.atan2(th - eh, Math.hypot(tx - ex, tz - ez)) * DEG });
  // moving the camera: to a camera of its own over seconds; to the operator on a target (null: the scene's own picture)
  const glide = (s, c, over) => s.all(...CAMK.map(k => s.move(k, c[k], { over, ease: 'inOut' })));
  const aim = (s, target, shot = 'full', over = 1.5) => {
    for (const k of CAMK) s.move(k, 0, { over, ease: 'inOut' });
    s.set('camera_shot', shot);
    s.set('camera_glide', over);
    s.set('camera_target', target);
    return s.wait(over);
  };
  // the room's shots (the operator's own framing goes round people and toward the room's open side here: each shot is
  // a camera of its own, the eye and what it looks at)
  const SH = {
    stain: CAM([0.9, 3.2, 1.6], [2.7, 6.0, 0.9]),
    wash: CAM([1.6, 4.0, 1.3], [2.95, 6.3, 0.8]),
    her: CAM([-1.5, 3.1, 1.5], [-0.4, 4.4, 1.35]),
    face: CAM([1.0, 5.6, 1.5], [-0.4, 4.4, 1.45]),
    table: CAM([-0.6, 4.6, 1.75], [-1.9, 8.6, 1.0]),
    green: CAM([-1.5, 7.3, 1.35], [-0.7, 8.3, 1.05]),
    peas: CAM([-1.6, 6.6, 1.5], [-2.15, 9.15, 1.1]),
    sill: CAM([0.9, 7.4, 1.4], [0.4, 9.8, 0.95]),
    box: CAM([0.6, 7.6, 1.5], [-0.4, 9.75, 0.6]),
    desk: CAM([-1.9, 4.3, 1.4], [-3.62, 5.28, 1.1]),
    desk_close: CAM([-2.3, 4.0, 1.75], [-3.62, 5.28, 1.15]),
    door: CAM([-1.8, 6.4, 1.6], [-3.6, 7.4, 1.4]),
    floor: CAM([1.6, 4.2, 1.5], [2.6, 6.2, 1.0]),
    half: CAM([2.3, 4.6, 1.3], [2.9, 5.6, 0]),
    fire: CAM([1.4, 6.6, 1.6], [0.3, 9.4, 1.0]),
    two: CAM([1.0, 7.0, 1.5], [0.1, 9.5, 1.0]),
    laid: CAM([0.9, 8.2, 1.3], [0.05, 9.8, 0.55]),
  };

  // a person's whole starting state: where, facing, doing; nothing in the hands, no look, no reach, not seated
  const who = (id, [a, d, turn], does = 'stand', more = {}) => {
    const o = { [`${id}_a`]: a, [`${id}_d`]: d, [`${id}_turn`]: turn, [`${id}_do`]: does, [`${id}_look`]: null, [`${id}_reach`]: null,
      [`${id}_on`]: null, [`${id}_with`]: [], [`${id}_wear`]: null, [`${id}_gait`]: null };
    for (const [k, v] of Object.entries(more)) o[`${id}_${k}`] = v;
    return o;
  };
  // seated: the hips over the seat ([across, distance, turn]; its height h), a seated loop
  const sat = (id, [a, d, turn], does, h = 0.46, more = {}) => who(id, [a, d, turn], does, { on: [a, d, h], ...more });
  const merge = (...xs) => Object.assign({}, ...xs);

  // where they wait unseen: in the passage beyond the doors (hidden by the wall from the room's picture)
  const OUT = { virginia: [-5.2, 6.9, 90], simon: [-5.4, 7.7, 90], otis: [-5.0, 7.3, 90], mrs_otis: [-5.4, 7.0, 90], washington: [-5.0, 7.9, 90],
    twin_star: [-5.5, 7.5, 90], twin_stripes: [-5.3, 8.0, 90], mrs_umney: [-5.6, 6.8, 90], cecil: [-5.6, 8.1, 90] };
  const DOOR_IN = [-3.3, 7.4], DOOR_OUT = [-4.8, 7.4];
  const out = (...ids) => merge(...ids.map(id => who(id, OUT[id])));
  // the breakfast table's seats: the far side's four facing the room, Mr Otis at its left end, Virginia at its right
  const SEAT = { twin_star: [-2.65, 9.15, 180], twin_stripes: [-2.15, 9.15, 180], washington: [-1.65, 9.15, 180], mrs_otis: [-1.15, 9.15, 180],
    otis: [-3.3, 8.3, 90], virginia: [-0.7, 8.3, 270] };
  const TABLE = ['otis', 'mrs_otis', 'washington', 'twin_star', 'twin_stripes', 'virginia'];
  const breakfast = (but = []) => merge(...TABLE.filter(id => !but.includes(id)).map(id => sat(id, SEAT[id], id === 'otis' ? 'read_paper' : 'sit_table',
    0.46, id === 'otis' ? { with: ['newspaper'] } : {})));
  const DESK = [-3.62, 5.28, 120];
  const ARM = [3.02, 8.5, 250];
  const SILL = [0.4, 9.8, 180], SILL_W = [-0.3, 9.8, 180];
  // the evening by the fire: Mrs Otis in the wing chair, the twins on the floor before the hearth, Washington by the
  // mantel, Mr Otis on the hearth rug's edge, Virginia on the window seat
  const FIRE = () => merge(sat('mrs_otis', ARM, 'brood', 0.45), sat('twin_star', [2.25, 7.35, 215], 'sit_ground', 0), sat('twin_stripes', [2.0, 6.75, 205], 'sit_ground', 0),
    who('washington', [2.75, 8.0, 225], 'stand'), who('otis', [1.7, 6.3, 200], 'upright'), sat('virginia', SILL, 'sit_sill', 0.5), out('mrs_umney', 'cecil', 'simon'));
  // the prologue's evening, the family in the room (as `arrive` leaves them)
  const EVE = { otis: [-1.6, 5.4, 160], mrs_otis: [-0.85, 6.1, 175], washington: [0.35, 6.3, 195], twin_star: [-2.5, 5.9, 150],
    twin_stripes: [-2.05, 6.6, 160], virginia: [-0.4, 4.4, 180], mrs_umney: [2.3, 7.9, 235] };

  // the room's light and things
  const ROOM = { flash: 0, face: 0, rain: 0, ghost_light: 0, rug: false, washington_candle: 0, sketchbook_open: 0, sketch_on: true };
  const EVENING = { ...ROOM, fire: 1, lamp: 1, day: 0, doors: 1 };
  const MORNING = { ...ROOM, fire: 0.5, lamp: 0, day: 1, doors: 1 };
  const NIGHT = { ...ROOM, fire: 0.3, lamp: 1, day: 0, doors: 1 };
  const V = scene.kit?.cast?.characters ?? {};

  return {
    // ---- the prologue: the family come in out of the storm; the stain; Pinkerton's Champion; the face in the window
    arrive: {
      after: [], tells: ['arrive:in', 'arrive:curtsey'], seconds: 10,
      from: () => merge(EVENING, CAM0, { rain: 1, stain: 'dull', drawing: 'none' },
        out('virginia', 'otis', 'mrs_otis', 'washington', 'twin_star', 'twin_stripes', 'cecil', 'simon'), who('mrs_umney', EVE.mrs_umney, 'clasped')),
      run: async s => {
        s.move('camera_z', 1.2, { over: 10, ease: 'inOut' });
        const come = (id, wait) => s.sequence(async q => {
          await q.wait(wait);
          const [a, d, turn] = EVE[id];
          await q.person(id).walk([DOOR_IN, [a, d]]);
          await q.person(id).turn(turn);
          q.person(id).look('mrs_umney');
        });
        await s.all(come('otis', 0), come('mrs_otis', 0.5), come('virginia', 1.0), come('washington', 1.3), come('twin_star', 1.7), come('twin_stripes', 2.0));
        s.tell('arrive:in');
        s.person('mrs_umney').look('otis');
        await s.wait(0.6);
        s.tell('arrive:curtsey');
        await s.person('mrs_umney').do('bow_deep', { loop: false });
        s.person('mrs_umney').do('clasped');
      },
    },
    stain: {
      after: ['arrive'], tells: ['stain:point'], seconds: 6,
      from: () => merge(EVENING, CAM0, { rain: 1, stain: 'dull' }, ...Object.entries(EVE).map(([id, p]) => who(id, p, id === 'mrs_umney' ? 'clasped' : 'stand')), out('cecil', 'simon')),
      run: async s => {
        s.set('stain', 'dull');
        glide(s, SH.stain, 2);
        await s.person('mrs_otis').walk([[2.55, 6.5]]);
        await s.person('mrs_otis').turn(160);
        for (const id of ['otis', 'washington', 'twin_star', 'twin_stripes', 'virginia', 'mrs_umney', 'mrs_otis']) s.person(id).look('stain');
        s.tell('stain:point');
        await s.person('mrs_otis').do('point', { loop: false });
        s.person('mrs_otis').do('stand');
      },
    },
    rub: {
      after: ['stain'], tells: ['rub:kneel', 'rub:gone', 'rub:thunder', 'rub:cheer'], seconds: 11,
      from: () => merge(EVENING, SH.stain, { rain: 1, stain: 'dull' },
        ...Object.entries(EVE).filter(([id]) => id !== 'mrs_otis').map(([id, p]) => who(id, p, id === 'mrs_umney' ? 'clasped' : 'stand', { look: 'stain' })),
        who('mrs_otis', [2.55, 6.5, 160], 'stand', { look: 'stain' }), out('cecil', 'simon')),
      run: async s => {
        const w = s.person('washington');
        s.sequence(async q => {
          await q.person('mrs_otis').walk([[1.9, 6.95]]);
          await q.person('mrs_otis').turn(200);
        });
        await w.walk([[2.95, 6.3]]);
        await w.turn(180);
        w.look('stain');
        w.do('kneel_rub');
        glide(s, SH.wash, 1.2);
        s.tell('rub:kneel');
        await s.wait(3.2);
        s.set('stain', 'none');
        s.tell('rub:gone');
        await s.wait(0.8);
        aim(s, null, 'full', 0.6);
        s.set('flash', 1);
        s.tell('rub:thunder');
        s.move('flash', 0, { over: 0.9, ease: 'out' });
        const umney = s.person('mrs_umney');
        umney.look(null);
        await umney.go('faint_sit', { to: [ARM[0], ARM[1]], turn: ARM[2] });
        umney.on([ARM[0], ARM[1], 0.45]);
        umney.do('doze');
        s.person('twin_star').do('wave_hands');
        s.person('twin_stripes').do('wave_hands');
        s.tell('rub:cheer');
        await s.wait(1.5);
      },
    },
    window_face: {
      after: ['rub'], tells: ['window_face:ready'], seconds: 4,
      from: () => merge(EVENING, CAM0, { rain: 1, stain: 'none' }, ...['otis', 'twin_star', 'twin_stripes', 'virginia'].map(id => who(id, EVE[id])),
        who('mrs_otis', [1.9, 6.95, 200]), who('washington', [2.95, 6.3, 180], 'kneel_rub'), sat('mrs_umney', ARM, 'doze', 0.45), out('cecil', 'simon')),
      run: async s => {
        for (const id of ['twin_star', 'twin_stripes']) {
          s.person(id).do('laugh_bend');
          s.person(id).look('mrs_umney');
        }
        for (const id of ['otis', 'mrs_otis']) s.person(id).look('mrs_umney');
        s.person('washington').do('stand');
        s.person('washington').look('mrs_umney');
        const v = s.person('virginia');
        v.turn(0);
        v.look('window');
        await glide(s, CAM([-0.3, 2.4, 1.6], [-0.2, 10, 2.0]), 3.5);
        s.tell('window_face:ready');
      },
    },
    face_told: {
      after: ['window_face'], tells: ['face_told:turn', 'face_told:hand'], seconds: 8,
      from: () => merge(EVENING, CAM([-0.3, 2.4, 1.6], [-0.2, 10, 2.0]), { rain: 1, stain: 'none' },
        ...['otis', 'twin_star', 'twin_stripes'].map(id => who(id, EVE[id], 'stand', { look: 'mrs_umney' })), who('virginia', [EVE.virginia[0], EVE.virginia[1], 0], 'stand', { look: 'window' }),
        who('mrs_otis', [1.9, 6.95, 200]), who('washington', [2.95, 6.3, 180]), sat('mrs_umney', ARM, 'doze', 0.45), out('cecil', 'simon')),
      run: async s => {
        s.set('face', 0);
        for (const id of ['otis', 'mrs_otis', 'washington', 'twin_star', 'twin_stripes']) {
          s.person(id).look('window');
          s.person(id).turn(15);
        }
        s.tell('face_told:turn');
        await glide(s, CAM0, 2);
        s.person('washington').look('virginia');
        s.person('washington').turn(250);
        for (const id of ['twin_star', 'twin_stripes']) {
          s.person(id).turn(160);
          s.person(id).look('virginia');
          s.person(id).do('laugh_bend');
        }
        const o = s.person('otis'), v = s.person('virginia');
        await o.walk([[0.25, 3.85]]);
        await o.turn(310);
        o.look('virginia');
        v.turn(220);
        v.look('otis');
        o.reach({ r: 'virginia#shoulder_l' });
        glide(s, SH.her, 1.5);
        s.tell('face_told:hand');
        await s.wait(2);
      },
    },
    face_silent: {
      after: ['window_face'], tells: ['face_silent:end'], seconds: 6,
      from: () => merge(EVENING, CAM([-0.3, 2.4, 1.6], [-0.2, 10, 2.0]), { rain: 1, stain: 'none' },
        ...['otis', 'twin_star', 'twin_stripes'].map(id => who(id, EVE[id], 'stand', { look: 'mrs_umney' })), who('virginia', [EVE.virginia[0], EVE.virginia[1], 0], 'stand', { look: 'window' }),
        who('mrs_otis', [1.9, 6.95, 200], 'stand', { look: 'mrs_umney' }), who('washington', [2.95, 6.3, 180], 'stand', { look: 'mrs_umney' }), sat('mrs_umney', ARM, 'doze', 0.45),
        out('cecil', 'simon')),
      run: async s => {
        s.set('face', 0);
        const next = s.shot(SH.face);
        await s.wait(0.8);
        next.cut();
        await s.wait(1.5);
        s.person('mrs_umney').do('brood');
        s.person('mrs_umney').mood('tired');
        await s.wait(2.5);
        s.tell('face_silent:end');
      },
    },

    // ---- chapter I: the wagers at breakfast; the paint-box on the sill; the floor clean; half a stain
    wagers: {
      after: [], tells: ['wagers:bet', 'wagers:paper'], seconds: 12,
      from: () => merge(MORNING, SH.table, breakfast(), out('mrs_umney', 'cecil', 'simon')),
      run: async s => {
        for (const id of ['twin_star', 'twin_stripes']) s.person(id).look('stain');
        await s.wait(1);
        s.tell('wagers:bet');
        s.person('twin_star').do('shake_chain');
        s.person('twin_stripes').do('shake_chain');
        await s.wait(3.5);
        s.person('twin_star').do('sit_table');
        s.person('twin_stripes').do('sit_table');
        s.person('washington').look('stain');
        await s.wait(2.5);
        s.tell('wagers:paper');
        s.person('otis').look('twin_star');
        await s.wait(5);
      },
    },
    box_morning: {
      after: [], tells: ['box_morning:end'], seconds: 8,
      from: () => merge(MORNING, CAM0, { paints: true, stain: 'scarlet' }, breakfast(['virginia']), who('virginia', [-2.0, 7.2, 90]), out('mrs_umney', 'cecil', 'simon')),
      run: async s => {
        const v = s.person('virginia');
        glide(s, SH.box, 3);
        await v.walk([[-0.6, 7.3], [-0.4, 9.25]]);
        await v.turn(10);
        v.look([-0.39, 9.79, 0.55]);
        await s.wait(2);
        await v.turn(150);
        v.look('stain');
        glide(s, SH.stain, 1.5);
        await s.wait(1.5);
        s.tell('box_morning:end');
      },
    },
    clean_floor: {
      after: [], tells: ['clean_floor:end'], seconds: 5,
      from: () => merge(MORNING, CAM0, { stain: 'none' }, breakfast(['virginia']), who('virginia', [2.5, 6.6, 200], 'clasped', { look: 'stain' }), out('mrs_umney', 'cecil', 'simon'),
        SH.floor),
      run: async s => {
        await s.wait(4.5);
        s.tell('clean_floor:end');
      },
    },
    half_stain: {
      after: [], tells: ['half_stain:end'], seconds: 4,
      from: () => merge(MORNING, CAM0, { stain: 'half' }, breakfast(), out('mrs_umney', 'cecil', 'simon'), SH.half),
      run: async s => {
        await s.wait(3.8);
        s.tell('half_stain:end');
      },
    },

    // ---- chapter II: the green stain at breakfast; the clean floor; the peas; Cecil; the sleepless night and the drawing
    breakfast_green: {
      after: [], tells: ['breakfast_green:laugh', 'breakfast_green:out'], seconds: 12,
      from: () => merge(MORNING, CAM0, { stain: 'emerald' }, breakfast(), out('mrs_umney', 'cecil', 'simon')),
      run: async s => {
        const up = id => s.sequence(async q => {
          const p = q.person(id), [a, d, turn] = SEAT[id];
          p.on(null);
          await p.go('stand_up', { from: [a, d], turn });
          p.do('laugh_bend');
          p.look('stain');
        });
        await s.all(up('twin_star'), up('twin_stripes'));
        for (const id of ['washington', 'mrs_otis', 'otis']) s.person(id).look('twin_star');
        s.tell('breakfast_green:laugh');
        s.person('virginia').look('stain');
        await s.wait(2.5);
        const v = s.person('virginia');
        glide(s, SH.green, 1.2);
        await s.wait(1.6);
        v.on(null);
        await v.go('stand_up', { from: [SEAT.virginia[0], SEAT.virginia[1]], turn: 200 });
        aim(s, null, 'full', 1.5);
        await v.walk([[-1.0, 7.3], DOOR_IN, DOOR_OUT]);
        s.tell('breakfast_green:out');
      },
    },
    breakfast_clean: {
      after: [], tells: ['breakfast_clean:say'], seconds: 6,
      from: () => merge(MORNING, SH.table, { stain: 'none' }, breakfast(), out('mrs_umney', 'cecil', 'simon')),
      run: async s => {
        await s.wait(1);
        s.tell('breakfast_clean:say');
        s.person('twin_star').look('otis');
        await s.wait(4.5);
      },
    },
    breakfast_peas: {
      after: [], tells: ['breakfast_peas:show', 'breakfast_peas:wink'], seconds: 8,
      from: () => merge(MORNING, CAM0, { stain: 'half' }, breakfast(), out('mrs_umney', 'cecil', 'simon')),
      run: async s => {
        const t = s.person('twin_stripes');
        glide(s, SH.peas, 1.5);
        t.on(null);
        await t.go('stand_up', { from: [SEAT.twin_stripes[0], SEAT.twin_stripes[1]], turn: 180 });
        t.do('offer');
        t.look('stain');
        s.tell('breakfast_peas:show');
        await s.wait(2.5);
        s.person('washington').look('twin_stripes');
        s.person('washington').mood('smile');
        s.tell('breakfast_peas:wink');
        await s.wait(2);
      },
    },
    cecil_in: {
      after: [], tells: ['cecil_in:bow'], seconds: 8,
      from: () => merge(MORNING, CAM0, { stain: 'none' }, breakfast(['virginia']), who('virginia', [0.85, 8.1, 20], 'clasped', { look: 'window' }),
        who('cecil', OUT.cecil), out('mrs_umney', 'simon')),
      run: async s => {
        const c = s.person('cecil'), v = s.person('virginia');
        await c.walk([DOOR_IN, [-0.55, 7.2], [-0.45, 8.1]]);
        await c.turn(90);
        c.look('virginia');
        v.turn(270);
        v.look('cecil');
        const two = CAM([0.2, 5.3, 1.55], [0.2, 8.1, 1.35]);
        glide(s, two, 2);
        await c.do('bow_deep', { loop: false });
        s.tell('cecil_in:bow');
        c.do('stand');
        await s.wait(1.5);
      },
    },
    sleepless: {
      after: [], tells: ['sleepless:door', 'sleepless:sat'], seconds: 12,
      from: () => merge(NIGHT, CAM0, { drawing: 'none' }, sat('otis', DESK, 'write'), who('virginia', [DOOR_IN[0] - 0.2, DOOR_IN[1], 120], 'stand', { wear: V.virginia_night ?? null }),
        out('mrs_otis', 'washington', 'twin_star', 'twin_stripes', 'mrs_umney', 'cecil', 'simon')),
      run: async s => {
        const v = s.person('virginia'), o = s.person('otis');
        o.look('virginia');
        v.look('otis');
        s.tell('sleepless:door');
        await s.wait(2);
        o.look(null);
        await v.walk([[-0.8, 7.2], [0.1, 9.0], [SILL[0], 9.35]]);
        await v.turn(180);
        v.on([SILL[0], SILL[1], 0.5]);
        v.do('sit_sill');
        v.with(['sketchbook']);
        v.look('otis');
        glide(s, SH.sill, 2);
        s.tell('sleepless:sat');
        await s.wait(2);
      },
    },
    question: {
      after: ['sleepless'], tells: ['question:pen'], seconds: 6,
      from: () => merge(NIGHT, CAM0, { drawing: 'none' }, sat('otis', DESK, 'write'), sat('virginia', SILL, 'sit_sill', 0.5, { wear: V.virginia_night ?? null, with: ['sketchbook'] }),
        out('mrs_otis', 'washington', 'twin_star', 'twin_stripes', 'mrs_umney', 'cecil', 'simon')),
      run: async s => {
        const o = s.person('otis');
        glide(s, SH.desk_close, 1.5);
        await s.wait(1);
        o.do('sit_table');
        o.look('virginia');
        s.tell('question:pen');
        await s.wait(4.5);
      },
    },
    wash_door: {
      after: ['question'], tells: ['wash_door:in'], seconds: 5,
      from: () => merge(NIGHT, CAM0, { drawing: 'none' }, sat('otis', DESK, 'sit_table', 0.46, { look: 'virginia' }),
        sat('virginia', SILL, 'sit_sill', 0.5, { wear: V.virginia_night ?? null, with: ['sketchbook'] }), who('washington', OUT.washington, 'stand', { with: ['candle_l'] }),
        out('mrs_otis', 'twin_star', 'twin_stripes', 'mrs_umney', 'cecil', 'simon')),
      run: async s => {
        const w = s.person('washington');
        w.with(['candle_l']);
        s.set('washington_candle', 1);
        await w.walk([[-3.6, 7.4]]);
        await w.turn(120);
        w.do('hold_candle');
        w.look('otis');
        glide(s, SH.door, 1.2);
        s.person('otis').look('washington');
        s.person('virginia').look('washington');
        s.tell('wash_door:in');
        await s.wait(1.5);
      },
    },
    drawing: {
      after: ['wash_door'], tells: ['drawing:look', 'drawing:mother'], seconds: 15,
      from: () => merge(NIGHT, CAM0, { drawing: 'none', washington_candle: 1 }, sat('otis', DESK, 'sit_table', 0.46),
        sat('virginia', SILL, 'sit_sill', 0.5, { wear: V.virginia_night ?? null, with: ['sketchbook'] }), who('washington', [-3.6, 7.4, 120], 'hold_candle', { with: ['candle_l'] }),
        who('mrs_otis', OUT.mrs_otis), out('twin_star', 'twin_stripes', 'mrs_umney', 'cecil', 'simon')),
      run: async s => {
        const o = s.person('otis'), v = s.person('virginia');
        o.on(null);
        await o.go('stand_up', { from: [DESK[0], DESK[1]], turn: DESK[2] });
        glide(s, SH.two, 2.5);
        await o.walk([[-2.4, 6.4], [-0.6, 7.3], [-0.1, 9.25]]);
        await o.turn(60);
        o.look('virginia#sketchbook');
        v.look('otis');
        o.reach({ r: 'virginia#sketchbook' });
        await s.wait(0.7);
        await s.wait(0.6);
        o.reach(null);
        o.look(null);
        // her sketchbook close up: the drawing as she left it
        s.set('portrait', 1);
        s.move('sketchbook_open', 1, { over: 0.6 });
        s.tell('drawing:look');
        await s.wait(3);
        await s.move('sketchbook_open', 0, { over: 0.5 });
        glide(s, SH.desk, 2);
        await o.walk([[-0.6, 7.3], [-2.55, 5.95]]);
        await o.turn(DESK[2]);
        s.set('drawing', 'inkstand');
        o.look('desk#drawing');
        const m = s.person('mrs_otis');
        await m.walk([[-3.7, 7.0]]);
        await m.turn(130);
        m.look('otis');
        o.look('mrs_otis');
        s.tell('drawing:mother');
        await s.wait(1.5);
      },
    },

    // ---- chapter IV: the drawing in his pocket; by the fire; London
    pocket: {
      after: [], tells: ['pocket:say', 'pocket:out'], seconds: 9,
      from: () => merge(NIGHT, CAM0, { drawing: 'inkstand' }, sat('otis', DESK, 'sit_table', 0.46, { look: 'desk#drawing' }),
        out('virginia', 'mrs_otis', 'washington', 'twin_star', 'twin_stripes', 'mrs_umney', 'cecil', 'simon'), SH.desk),
      run: async s => {
        const o = s.person('otis');
        await s.wait(0.8);
        s.tell('pocket:say');
        o.reach({ r: 'desk#drawing' });
        await s.wait(0.7);
        s.set('drawing', 'none');
        o.reach(null);
        o.look(null);
        await s.wait(1);
        o.on(null);
        await o.go('stand_up', { from: [DESK[0], DESK[1]], turn: DESK[2] });
        await o.walk([DOOR_IN, DOOR_OUT]);
        s.tell('pocket:out');
      },
    },
    fireside: {
      after: [], tells: ['fireside:touch'], seconds: 10,
      from: () => merge(EVENING, CAM0, { stain: 'brown' }, FIRE()),
      run: async s => {
        const o = s.person('otis'), v = s.person('virginia');
        for (const id of ['mrs_otis', 'washington', 'twin_star', 'twin_stripes']) s.person(id).look('virginia');
        glide(s, SH.fire, 3);
        await o.walk([[1.3, 7.8], [1.0, 9.35]]);
        await o.turn(270);
        o.look('virginia');
        v.look('otis');
        if (!s.get('shares')) o.reach({ r: 'virginia#head' });
        await s.wait(0.7);
        s.tell('fireside:touch');
        await s.wait(2);
      },
    },
    london: {
      after: [], tells: ['london:say', 'london:sat'], seconds: 8,
      from: () => merge(EVENING, CAM0, { stain: 'brown' }, FIRE(), who('otis', [1.7, 6.3, 200], 'upright', { look: 'virginia' })),
      run: async s => {
        const w = s.person('washington');
        s.tell('london:say');
        s.person('virginia').look('otis');
        glide(s, SH.fire, 3);
        await w.walk([[1.0, 8.3], [SILL_W[0], 9.35]]);
        await w.turn(180);
        w.on([SILL_W[0], SILL_W[1], 0.5]);
        w.do('sit_sill');
        w.look('virginia');
        s.tell('london:sat');
        await s.wait(1.5);
      },
    },

    // ---- the epilogue: the brown stain under a rug; the funeral breakfast; the letters; the morning of leaving
    brown: {
      after: [], tells: ['brown:rubbed', 'brown:rug'], seconds: 14,
      from: () => merge(MORNING, CAM0, { stain: 'brown', rug: false }, who('washington', [2.95, 6.3, 180], 'kneel_rub', { look: 'stain' }),
        who('mrs_otis', [1.4, 5.4, 140], 'stand', { look: 'washington' }), who('virginia', [DOOR_IN[0] - 0.2, DOOR_IN[1], 120], 'stand', { look: 'stain' }),
        out('otis', 'twin_star', 'twin_stripes', 'mrs_umney', 'cecil', 'simon'), SH.wash),
      run: async s => {
        const w = s.person('washington');
        await s.wait(4);
        s.tell('brown:rubbed');
        w.do('sit_ground');
        w.look('mrs_otis');
        await s.wait(2);
        aim(s, null, 'full', 2);
        s.tell('brown:rug');
        await s.wait(2.5);
        w.do('stand');
        await w.walk([[2.2, 5.0]]);
        await w.turn(200);
        s.set('rug', true);
        w.look('hearth_rug');
        await s.wait(2);
      },
    },
    breakfast_funeral: {
      after: [], tells: ['breakfast_funeral:say', 'breakfast_funeral:end'], seconds: 10,
      from: () => merge(MORNING, SH.table, { stain: 'brown', rug: true }, breakfast(), out('mrs_umney', 'cecil', 'simon')),
      run: async s => {
        s.person('otis').do('sit_table');
        s.person('otis').with([]);
        await s.wait(1);
        s.tell('breakfast_funeral:say');
        for (const id of ['mrs_otis', 'washington', 'twin_star', 'twin_stripes', 'virginia']) s.person(id).look('otis');
        await s.wait(3.5);
        if (s.get('shares')) {
          const m = s.person('mrs_otis'), w = s.person('washington');
          m.look('virginia');
          m.reach({ r: 'virginia#hand_l' });
          s.person('virginia').reach({ l: 'mrs_otis#hand_r' });
          w.on(null);
          await w.go('stand_up', { from: [SEAT.washington[0], SEAT.washington[1]], turn: 180 });
          await w.walk([[-1.1, 7.3], DOOR_IN, DOOR_OUT]);
        } else await s.wait(4);
        s.tell('breakfast_funeral:end');
      },
    },
    letters: {
      after: [], tells: ['letters:drawer'], seconds: 8,
      from: () => merge(NIGHT, CAM0, { drawing: 'inkstand' }, sat('otis', DESK, 'write'),
        out('virginia', 'mrs_otis', 'washington', 'twin_star', 'twin_stripes', 'mrs_umney', 'cecil', 'simon'), SH.desk),
      run: async s => {
        const o = s.person('otis');
        await s.wait(4);
        o.do('sit_table');
        o.look('desk#drawing');
        o.reach({ r: 'desk#drawing' });
        await s.wait(0.7);
        s.set('drawing', 'drawer');
        o.reach(null);
        s.tell('letters:drawer');
        await s.wait(2);
      },
    },
    departure: {
      after: [], tells: ['departure:stain', 'departure:sketch'], seconds: 12,
      from: () => merge(MORNING, CAM0, { rug: false, sketch_on: false, drawing: 'none' }, who('virginia', [-2.6, 6.9, 100], 'stand'),
        who('otis', [-1.4, 5.6, 150], 'upright'), who('washington', [2.0, 5.3, 150], 'stand'), who('mrs_umney', [DOOR_IN[0] - 0.2, DOOR_IN[1], 120], 'clasped'),
        who('mrs_otis', [-2.1, 6.2, 150], 'clasped'), who('twin_star', [-0.6, 6.4, 170]), who('twin_stripes', [-0.1, 6.0, 170]), out('cecil', 'simon')),
      run: async s => {
        const plays = !!s.get('plays');
        s.set('stain', plays ? 'scarlet' : 'none');
        const w = s.person('washington');
        for (const id of ['otis', 'washington', 'virginia', 'mrs_umney']) s.person(id).look('stain');
        if (plays) {
          w.with(['bottle']);
          w.do('offer');
        }
        await s.wait(1.5);
        s.tell('departure:stain');
        await s.wait(2.5);
        if (plays) w.do('stand');
        const v = s.person('virginia');
        await v.walk([[-0.9, 7.3], [-0.6, 9.3]]);
        await v.turn(60);
        v.look([0.05, 9.78, 0.55]);
        glide(s, SH.laid, 2);
        v.reach({ r: [0.05, 9.78, 0.55] });
        await s.wait(0.7);
        s.set('sketch_on', true);
        v.reach(null);
        s.tell('departure:sketch');
        await s.wait(1.5);
      },
    },
  };
}

// М10's line in the sketchbook (stage heights): his profile from the brow down to the chin — straight, or with the nose
// drawn too long and askew (`askew`); `along(path, k)` — the point k of the way along it (one array, kept)
const PROFILE = [[0.965, 0.22], [0.975, 0.3], [0.985, 0.36], [1.03, 0.45], [0.985, 0.475], [0.99, 0.52], [0.975, 0.555], [0.985, 0.6], [0.955, 0.66], [0.9, 0.69]];
const PROFILE_ASKEW = PROFILE.map(([x, y], i) => (i === 3 ? [1.075, 0.49] : i === 4 ? [0.99, 0.5] : [x, y]));
const LENS = P => {
  const l = [0];
  for (let i = 1; i < P.length; i++) l.push(l[i - 1] + Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]));
  return l;
};
const LEN = new Map([[PROFILE, LENS(PROFILE)], [PROFILE_ASKEW, LENS(PROFILE_ASKEW)]]);
const AT = [0, 0];
const PORTRAIT = {
  path: askew => (askew ? PROFILE_ASKEW : PROFILE),
  along(P, k) {
    const l = LEN.get(P), want = k * l[l.length - 1];
    let i = 1;
    while (i < l.length - 1 && l[i] < want) i++;
    const f = Math.min(1, Math.max(0, (want - l[i - 1]) / (l[i] - l[i - 1] || 1)));
    AT[0] = P[i - 1][0] + (P[i][0] - P[i - 1][0]) * f;
    AT[1] = P[i - 1][1] + (P[i][1] - P[i - 1][1]) * f;
    return AT;
  },
};

return { oak, bookcase, OAK, OAK_DARK, OAK_LIGHT, PORTRAIT, film: FILM };
