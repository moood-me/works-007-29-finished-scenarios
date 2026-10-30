// What the hall's paintings share: its oak (the library's oak, taller: a linenfold dado, two tiers of plain panels, a
// frieze under the beams), an old portrait in a gilt frame, a wall sconce with its candle, and the stair's measures.
// Metres, y down, from the foot of a wall.
const OAK = '#5a3d27';
const OAK_LIGHT = '#6e4c31';
const OAK_DARK = '#38261a';

// The stair (the far wall's, rising to the left): 13 risers of 0.1615 m, 12 treads of 0.26 m; the first riser at
// across 0.98, the last (the landing's edge) at −2.14; the landing at 2.1 m from there to the left wall.
const STAIR = { foot: 0.98, going: 0.26, rise: 0.1615, steps: 13, top: -2.14, landing: 2.1 };
// the nosing line over the floor at x (metres up; x across, as the far wall's painting has it)
const nosing = x => STAIR.rise + (STAIR.foot - x) * (STAIR.rise / STAIR.going);

// a stretch of the hall's oak from x0 to x1, `top` metres high: the dado's linenfold panels to 1 m, the rail, two
// tiers of tall plain panels above, the frieze under the ceiling
function oak(g, x0, x1, top) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -top - 0.02, w, top + 0.04);
  g.clip();
  g.fillStyle = OAK;
  g.fillRect(x0, -top - 0.02, w, top + 0.04);
  g.strokeStyle = OAK_DARK;
  g.lineWidth = 0.045;
  const mid = -1.15 - (top - 1.55) * 0.55;
  for (let x = Math.floor(x0 / 0.62) * 0.62; x < x1; x += 0.62) {
    g.strokeRect(x + 0.07, mid + 0.06, 0.48, -1.15 - mid - 0.12);
    g.strokeRect(x + 0.07, -top + 0.42, 0.48, mid - (-top + 0.42) - 0.06);
  }
  // the rail between the tiers
  g.fillStyle = OAK_LIGHT;
  g.fillRect(x0, mid - 0.03, w, 0.06);
  // the dado: linenfold panels (folds as light and dark stripes)
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
  // the dado rail, the skirting, the frieze
  g.fillStyle = OAK_LIGHT;
  g.fillRect(x0, -1.1, w, 0.07);
  g.fillStyle = OAK_DARK;
  g.fillRect(x0, -0.14, w, 0.16);
  g.fillRect(x0, -top - 0.02, w, 0.3);
  g.restore();
}

// an old portrait in a gilt frame, x0…x1 by y0…y1 (y0 the top): a dark brown ground, a sitter half-length — a pale
// face, dark clothes, a white ruff or collar; `lady` a woman (a long neck, a pale gown, a jewel)
function portrait(g, x0, y0, x1, y1, lady) {
  const w = x1 - x0;
  const h = y1 - y0;
  g.fillStyle = '#9a7a3a';
  g.fillRect(x0 - 0.07, y0 - 0.07, w + 0.14, h + 0.14);
  g.fillStyle = '#c6a254';
  g.fillRect(x0 - 0.04, y0 - 0.04, w + 0.08, h + 0.08);
  g.fillStyle = '#2e2218';
  g.fillRect(x0, y0, w, h);
  const cx = x0 + w / 2;
  // the body: shoulders to the frame's foot
  g.fillStyle = lady ? '#7a6a5a' : '#1c1814';
  g.beginPath();
  g.moveTo(cx - w * 0.42, y1);
  g.quadraticCurveTo(cx - w * 0.4, y0 + h * 0.55, cx, y0 + h * 0.5);
  g.quadraticCurveTo(cx + w * 0.4, y0 + h * 0.55, cx + w * 0.42, y1);
  g.closePath();
  g.fill();
  // the ruff or the collar
  g.fillStyle = '#d8d0c0';
  g.beginPath();
  g.ellipse(cx, y0 + h * 0.5, w * (lady ? 0.12 : 0.17), h * 0.045, 0, 0, Math.PI * 2);
  g.fill();
  // the face and the hair
  g.fillStyle = lady ? '#6a4a2a' : '#3a2a1e';
  g.beginPath();
  g.ellipse(cx, y0 + h * 0.33, w * 0.15, h * 0.15, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#d8b898';
  g.beginPath();
  g.ellipse(cx, y0 + h * 0.36, w * 0.1, h * 0.11, 0, 0, Math.PI * 2);
  g.fill();
  if (lady) {
    g.fillStyle = '#b8323a';
    g.beginPath();
    g.arc(cx, y0 + h * 0.58, w * 0.03, 0, Math.PI * 2);
    g.fill();
  }
}

// a brass wall sconce at (x, y): a backplate, an arm, a candle; its flame a glow and a light of the wall's named `name`
function sconce(g, e, x, y, name) {
  g.fillStyle = '#9a7a3c';
  g.beginPath();
  g.ellipse(x, y + 0.12, 0.07, 0.13, 0, 0, Math.PI * 2);
  g.fill();
  g.fillRect(x - 0.015, y - 0.02, 0.03, 0.14);
  g.fillRect(x - 0.06, y - 0.03, 0.12, 0.03);
  g.fillStyle = '#ece4d0';
  g.fillRect(x - 0.02, y - 0.22, 0.04, 0.19);
  g.fillStyle = '#ffd890';
  g.beginPath();
  g.ellipse(x, y - 0.255, 0.013, 0.032, 0, 0, Math.PI * 2);
  g.fill();
  e.light(x, y - 0.26, 0.5, '#ffcf8a', 0.7, name);
}

// a leaf of the front door from x0 to x1, 2.9 m high: oak planks, iron studs in rows, a great iron ring `ring` metres
// in from its free edge (+: the free edge is x1; −: x0)
function door(g, x0, x1, ring) {
  g.fillStyle = '#4e3220';
  g.fillRect(x0, -2.9, x1 - x0, 2.9);
  const planks = ['#563824', '#4a2f1e', '#5c3c26', '#503420'];
  for (let i = 0, x = x0; x < x1 - 0.01; i++, x += 0.16) {
    g.fillStyle = planks[i % planks.length];
    g.fillRect(x + 0.006, -2.9, 0.148, 2.9);
  }
  g.fillStyle = '#2a2622';
  for (const y of [-2.5, -1.45, -0.4]) {
    g.fillRect(x0, y - 0.04, x1 - x0, 0.08);
    for (let x = x0 + 0.08; x < x1; x += 0.16) {
      g.beginPath();
      g.arc(x, y, 0.018, 0, Math.PI * 2);
      g.fill();
    }
  }
  const rx = ring > 0 ? x1 - ring : x0 - ring;
  g.strokeStyle = '#2a2622';
  g.lineWidth = 0.025;
  g.beginPath();
  g.arc(rx, -1.2, 0.08, 0, Math.PI * 2);
  g.stroke();
  g.beginPath();
  g.arc(rx, -1.3, 0.035, 0, Math.PI * 2);
  g.fillStyle = '#2a2622';
  g.fill();
}

// The hall's pieces (stage 5; modules/beats; the contract: game.md «Stage 5 — pieces»): `film(scene)` — each piece
// `{after, tells, seconds, from, run}`. `from` sets everything a piece begins at — the hall's light, the clock, the
// panel, the doors, the carriage, the people's places and hands — but the game's (`<id>_here`, `<id>_mood`, the variants
// a row names: `shares`, `trap`, `wake`, `plays`); it never sets `moment` (that is the hall's own staging of its moments:
// a piece lays out its own). Shots are cameras of their own (eye, what it looks at), as in the library.
function FILM(scene) {
  const DEG = 180 / Math.PI, EYE = 1.7;
  const CAMK = ['camera_x', 'camera_z', 'camera_h', 'camera_yaw', 'camera_pitch'];
  const CAM0 = { camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
    camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0 };
  const CAM = ([ex, ez, eh], [tx, tz, th]) => ({ ...CAM0, camera_x: ex, camera_z: ez, camera_h: eh - EYE,
    camera_yaw: Math.atan2(tx - ex, tz - ez) * DEG, camera_pitch: Math.atan2(th - eh, Math.hypot(tx - ex, tz - ez)) * DEG });
  const glide = (s, c, over) => s.all(...CAMK.map(k => s.move(k, c[k], { over, ease: 'inOut' })));
  const SH = {
    landing: CAM([0.4, 3.4, 2.6], [-3.4, 7.5, 3.3]),
    foot: CAM([-0.6, 3.0, 1.6], [-0.75, 5.9, 1.3]),
    door: CAM([3.3, 4.4, 1.6], [1.85, 6.6, 1.4]),
    coat: CAM([0.9, 3.6, 1.6], [1.3, 6.1, 1.4]),
    porch: CAM([2.0, 3.2, 1.7], [3.2, 9.0, 1.4]),
  };
  const V = scene.kit?.cast?.characters ?? {};
  const who = (id, [a, d, turn], does = 'stand', more = {}) => {
    const o = { [`${id}_a`]: a, [`${id}_d`]: d, [`${id}_turn`]: turn, [`${id}_do`]: does, [`${id}_look`]: null, [`${id}_reach`]: null,
      [`${id}_on`]: null, [`${id}_with`]: [], [`${id}_wear`]: null, [`${id}_gait`]: null };
    for (const [k, v] of Object.entries(more)) o[`${id}_${k}`] = v;
    return o;
  };
  const merge = (...xs) => Object.assign({}, ...xs);
  // whoever has no part in a piece stands aside by the right wall's far end (seen, if the game names them, as one more
  // of the family)
  const ASIDE = { virginia: [4.4, 6.6, 220], otis: [4.8, 6.2, 220], mrs_otis: [4.6, 5.6, 220], washington: [5.0, 5.2, 220], twin_star: [4.3, 5.0, 220],
    twin_stripes: [4.0, 5.4, 220], cecil: [4.9, 6.9, 220], mrs_umney: [-1.0, 5.6, 160] };
  const aside = (...ids) => merge(...ids.map(id => who(id, ASIDE[id])));
  const NIGHT = { day: 0, candles: 1, clock_going: true, panel: 180, door_l: 180, door_r: 180, carriage: false, pond_lantern: 0, otis_candle: 0, lantern_held: 0 };
  const MORNING = { day: 1, candles: 0, hour: 9, clock_going: true, panel: 180, door_l: 250, door_r: 110, carriage: true, pond_lantern: 0, otis_candle: 0,
    lantern_held: 0 };
  const ARM = [0.7, 5.9, 180];

  return {
    // 4.2: supper-time, Virginia missing — Mrs Otis on the stair calling up it, the twins running up and down
    calling: {
      after: [], tells: ['calling:call'], seconds: 9,
      from: () => merge(NIGHT, CAM0, { hour: 19.5 }, who('mrs_otis', [0.35, 7.2, 260], 'stand', { with: ['shawl'], look: [-3.4, 7.4, 3.6] }),
        who('twin_star', [-1.6, 7.2, 90], 'stand', { gait: 'run' }), who('twin_stripes', [2.2, 6.0, 300], 'stand', { gait: 'run' }),
        aside('virginia', 'otis', 'washington', 'cecil', 'mrs_umney')),
      run: async s => {
        await s.wait(0.8);
        s.tell('calling:call');
        const down = s.sequence(async q => {
          const t = q.person('twin_star');
          await t.walk([[0.9, 7.2], [2.0, 6.3]]);
          await t.walk([[1.0, 6.9], [-1.4, 7.2]]);
        });
        const up = s.sequence(async q => {
          const t = q.person('twin_stripes');
          await q.wait(0.6);
          await t.walk([[1.1, 7.0], [-1.9, 7.2]]);
          await t.walk([[0.9, 7.2], [2.4, 6.2]]);
        });
        await s.all(down, up);
        s.person('twin_star').turn(200);
        s.person('twin_stripes').turn(200);
        s.person('twin_star').look('mrs_otis');
        s.person('twin_stripes').look('mrs_otis');
        await s.wait(0.8);
      },
    },
    // 4.6: midnight — the twelve strokes, the silence; the panel opens, Virginia on the landing with the casket; the
    // family to her as the variants say; Mrs Otis takes her face in her hands
    midnight: {
      after: [], tells: ['midnight:stroke', 'midnight:panel', 'midnight:hold'], seconds: 42,
      from: () => {
        const watch = scene.get('trap') === 'watch';
        return merge(NIGHT, CAM0, { hour: 23.99 },
          who('virginia', [-3.75, 7.75, 160], 'clasped', { with: ['casket'], wear: V.virginia_habit ?? null }),
          who('otis', [1.6, 5.2, 160], 'hold_candle', { with: ['candle_l'] }),
          who('mrs_otis', ARM, 'brood', { on: [ARM[0], ARM[1], 0.45], with: ['shawl'] }),
          watch ? who('washington', [2.9, 9.6, 180], 'stand', { with: ['lantern'] }) : who('washington', [2.3, 5.8, 200]),
          who('twin_star', [2.6, 6.1, 210]), who('twin_stripes', [3.1, 6.5, 215]), who('cecil', [3.5, 7.2, 220]), aside('mrs_umney'),
          { otis_candle: 1, lantern_held: watch ? 1 : 0 });
      },
      run: async s => {
        const shares = !!s.get('shares'), trap = s.get('trap');
        const v = s.person('virginia'), o = s.person('otis'), w = s.person('washington'), m = s.person('mrs_otis');
        const here = !!s.get('virginia_here');
        v.here(false);
        await s.wait(1);
        s.set('hour', 0);
        s.tell('midnight:stroke');
        for (const id of ['otis', 'mrs_otis', 'washington', 'twin_star', 'twin_stripes', 'cecil']) s.person(id).look('clock#face');
        // (the twelve strokes are the game's sound, 1.1 s apart: with the last the clock stops and the house falls
        // silent; the silence held while the game says so)
        await s.wait(13.8);
        s.set('clock_going', false);
        await s.wait(6);
        glide(s, SH.landing, 2);
        await s.move('panel', 250, { over: 1.5 });
        if (here) v.here(true);
        for (const id of ['otis', 'mrs_otis', 'washington', 'twin_star', 'twin_stripes', 'cecil']) s.person(id).look('virginia');
        s.tell('midnight:panel');
        await v.walk([[-3.2, 7.2]]);
        await v.turn(150);
        v.look('otis');
        if (shares) {
          // Washington runs up first and takes her hands
          w.gait('run');
          await w.walk([[1.2, 7.2], [-2.0, 7.2]]);
          w.gait(null);
          await w.turn(270);
          w.reach({ r: 'virginia#hand_l', l: 'virginia#hand_r' });
          v.look('washington');
        } else {
          // she waits; Mr Otis climbs to her; Washington two steps below (warn, defend) or last in at the door with
          // his lantern from the pond (watch)
          const climb = o.walk([[1.2, 7.2], [-2.2, 7.2]]);
          if (trap === 'watch') {
            s.set('door_l', 250);
            s.set('door_r', 110);
            await climb;
            await w.walk([[2.9, 8.3], [1.6, 6.6]]);
            await w.turn(240);
          } else {
            await s.all(climb, w.walk([[1.2, 7.2], [-0.9, 7.2]]));
            await w.turn(250);
          }
          await o.turn(270);
          o.look('virginia');
        }
        await s.wait(1);
        // she comes down to her mother; Washington and Mr Otis come down after her (whoever was up the stair, and Mr
        // Otis to her from wherever he stood) and stand by, in the shot at the stair's foot — Mr Otis says his «How
        // could you!» there, his face to us; Mrs Otis gets up and takes her face in her hands, near enough for her
        // elbows to bend
        w.reach(null);
        glide(s, SH.foot, 3);
        m.on(null);
        const up = m.go('stand_up', { from: [ARM[0], ARM[1]], turn: 200 });
        const brother = s.sequence(async q => {
          if (trap === 'watch' && !shares) return; // (in at the door with his lantern: he stays there)
          await q.wait(0.8);
          const b = q.person('washington');
          await b.walk([[1.2, 7.2], [1.3, 6.75]]);
          await b.turn(235);
          b.look('virginia');
        });
        const father = s.sequence(async q => {
          await q.wait(shares ? 0.5 : 2.2);
          const f = q.person('otis');
          await f.walk(shares ? [[0.9, 5.6], [0.35, 6.5]] : [[1.2, 7.2], [0.35, 6.5]]);
          await f.turn(225);
          f.look('virginia');
        });
        await v.walk([[1.1, 7.2], [0.7, 6.0], [-0.3, 5.9]]);
        await up;
        await v.turn(260);
        await m.walk([[-0.2, 5.5], [-0.75, 5.9]]);
        await m.turn(100);
        m.look('virginia');
        v.look('mrs_otis');
        await s.all(brother, father);
        m.reach({ r: 'virginia#head', l: 'virginia#head' });
        s.tell('midnight:hold');
        await s.wait(2);
      },
    },
    // «Свеча у стены», years later: by the open door, the carriage waiting — he takes her hand and lets it go first
    wedding: {
      after: [], tells: ['wedding:hand', 'wedding:let'], seconds: 10,
      from: () => merge(MORNING, SH.door, { hour: 11 }, who('virginia', [2.3, 6.9, 215], 'stand', { wear: V.virginia_duchess ?? null, look: 'otis' }),
        who('otis', [1.4, 6.35, 45], 'stand', { look: 'virginia' }), who('cecil', [3.05, 8.1, 200], 'stand', { wear: V.cecil_duke ?? null, look: 'virginia' }),
        aside('mrs_otis', 'washington', 'twin_star', 'twin_stripes', 'mrs_umney')),
      run: async s => {
        const o = s.person('otis'), v = s.person('virginia');
        await s.wait(1.5);
        o.reach({ r: 'virginia#hand_l' });
        v.reach({ l: 'otis#hand_r' });
        s.tell('wedding:hand');
        await s.wait(4);
        o.reach(null);
        s.tell('wedding:let');
        await s.wait(1);
        v.reach(null);
        await s.wait(2.5);
      },
    },
    // the morning of leaving: Mr Otis buttons his coat, Virginia by him
    coat: {
      after: [], tells: ['coat:end'], seconds: 6,
      from: () => merge(MORNING, SH.coat, who('otis', [1.7, 6.3, 205], 'button_coat', { look: null }), who('virginia', [0.8, 5.8, 160], 'stand', { look: 'otis', wear: V.virginia ?? null }),
        who('mrs_otis', [2.55, 7.0, 190]), who('washington', [3.55, 6.75, 205]), who('twin_star', [2.65, 7.85, 200]), who('twin_stripes', [3.2, 7.75, 170]),
        who('mrs_umney', [-1.0, 5.6, 160], 'clasped', { look: 'virginia' }), aside('cecil')),
      run: async s => {
        await s.wait(4);
        s.person('otis').do('stand');
        s.person('otis').look('virginia');
        await s.wait(1.5);
        s.tell('coat:end');
      },
    },
    // the porch: they go out to the carriage — she between the twins (shares), or last, turning on the porch to look up
    // at the house (her face to us); his hand given her (wake); the chain heard from the windows (plays)
    porch: {
      after: [], tells: ['porch:board', 'porch:chain', 'porch:look'], seconds: 15,
      from: () => merge(MORNING, SH.porch, who('otis', [1.7, 6.3, 160]), who('virginia', [0.8, 5.8, 160], 'stand', { look: 'otis', wear: V.virginia ?? null }),
        who('mrs_otis', [2.55, 7.0, 190]), who('washington', [3.55, 6.75, 205]), who('twin_star', [2.65, 7.85, 200]), who('twin_stripes', [3.2, 7.75, 170]),
        who('mrs_umney', [-1.0, 5.6, 160], 'clasped', { look: 'virginia' }), aside('cecil')),
      run: async s => {
        const shares = !!s.get('shares'), wake = !!s.get('wake'), plays = !!s.get('plays');
        const go = (id, pts, wait = 0) => s.sequence(async q => {
          await q.wait(wait);
          await q.person(id).walk(pts);
          q.person(id).here(false);
        });
        const OUT = [3.2, 9.5];
        const first = s.all(go('mrs_otis', [[2.8, 8.2], OUT]), go('washington', [[3.2, 8.2], OUT], 0.4));
        const v = s.person('virginia'), o = s.person('otis');
        if (shares) {
          await first;
          s.tell('porch:board');
          v.look(null);
          await s.all(go('twin_star', [[2.6, 8.2], OUT], 0.2), go('twin_stripes', [[3.3, 8.2], OUT], 0.2), go('virginia', [[2.3, 7.0], [2.95, 8.2], OUT]),
            go('otis', [[2.6, 7.3], [2.9, 8.3], OUT], 1.2));
          if (plays) s.tell('porch:chain');
          s.tell('porch:look');
          await s.wait(1);
          return;
        }
        await s.all(first, go('twin_star', [[2.6, 8.2], OUT], 0.8), go('twin_stripes', [[3.3, 8.2], OUT], 1.2));
        s.tell('porch:board');
        if (wake) {
          o.reach({ r: 'virginia#hand_l' });
          v.reach({ l: 'otis#hand_r' });
        }
        await s.all(v.walk([[2.0, 7.0], [3.0, 8.2], [3.3, 9.0]]), s.sequence(async q => {
          await q.wait(0.3);
          await q.person('otis').walk([[2.4, 7.1], [3.2, 8.3], [3.3, 9.6]]);
        }));
        o.reach(null);
        v.reach(null);
        await v.turn(180);
        if (plays) {
          s.tell('porch:chain');
          await s.wait(1);
        }
        v.look([2.9, 7.0, 6.5]);
        s.tell('porch:look');
        await s.wait(2.5);
      },
    },
  };
}

return { oak, portrait, sconce, door, nosing, STAIR, OAK, OAK_DARK, OAK_LIGHT, film: FILM };
