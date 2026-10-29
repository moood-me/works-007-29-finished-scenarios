// What the kitchen's walls share: the wallpaper — pale sage with a small pattern of cream sprigs and coral buds in rows
// — over x0…x1 of a wall 2.6 m high (metres from the wall's foot, y up negative), a white skirting board, and a narrow
// moulding under the ceiling. The caller cuts its own openings (clip) before calling.
function wallpaper(g, x0, x1) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -2.62, w, 2.64);
  g.clip();
  g.fillStyle = '#d9dfc8';
  g.fillRect(x0, -2.62, w, 2.64);
  for (let row = 0, y = -2.4; y < -0.2; y += 0.2, row++) {
    for (let x = x0 + (row % 2) * 0.12; x < x1; x += 0.24) {
      g.fillStyle = '#f1ecd8';
      g.beginPath();
      g.ellipse(x - 0.02, y, 0.016, 0.007, -0.7, 0, Math.PI * 2);
      g.ellipse(x + 0.02, y, 0.016, 0.007, 0.7, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = '#d99b8a';
      g.beginPath();
      g.arc(x, y - 0.012, 0.011, 0, Math.PI * 2);
      g.fill();
    }
  }
  g.fillStyle = '#f2ece0';
  g.fillRect(x0, -2.62, w, 0.08);
  g.fillRect(x0, -0.13, w, 0.15);
  g.fillStyle = '#d8cfbf';
  g.fillRect(x0, -0.135, w, 0.012);
  g.restore();
}
// The backsplash: small square tiles, white with a blue one here and there, pale grout, over x0…x1 between heights
// y0 and y1 (y up negative).
function tiles(g, x0, x1, y0, y1) {
  g.fillStyle = '#d9d4c6';
  g.fillRect(x0, y0, x1 - x0, y1 - y0);
  const t = 0.1;
  for (let y = y0; y < y1 - 0.001; y += t) {
    for (let x = x0; x < x1 - 0.001; x += t) {
      g.fillStyle = (Math.round(x / t) + Math.round(y / t)) % 7 === 0 ? '#a9c0d6' : '#f3f1ea';
      g.fillRect(x + 0.006, y + 0.006, Math.min(t, x1 - x) - 0.012, Math.min(t, y1 - y) - 0.012);
    }
  }
}
// Who wears what (the keys `year` and `young`, set by the script and by every piece's start): a year on (chapter 3)
// Jack is grown (the cast's jack_grown without the suit bag) and Dad grey (dad_grey without the book); the prologue's
// Jack is five (jack_five). Mom's look is her own.
function dress(cast, year, young) {
  return {
    jack_wear: year ? { ...cast.jack_grown, parts: [] } : young ? cast.jack_five : null,
    dad_wear: year ? { ...cast.dad_grey, parts: [] } : null,
  };
}

// The kitchen's pieces (stage 5; modules/beats; the contract: game.md «Stage 5 — pieces», notes.md «Pieces»):
// `film(scene)` — each `{after, tells, seconds, from, run}`. `from` — every value the piece begins at but the game's
// (`<id>_here`, `<id>_mood`, and the keys notes.md names: `laohu_ear`, `laohu_seam`, `suit_bag`, `menagerie`);
// `run` — the director's sequence, its moments told (`<piece>:<moment>`) where the game says its lines, ending in a
// living pose. Places: the table's middle at across −0.15, 1.8…2.6 m away; Mom's chair behind it, Jack's at its left
// end, Dad's at its right end; the door to the hall in the right wall (2.85, 3.2 m away); the sill and the sink under
// the window at the back (4.3 m).
function film(scene) {
  const DEG = 180 / Math.PI, EYE = 1.7;
  const CAMK = ['camera_x', 'camera_z', 'camera_h', 'camera_yaw', 'camera_pitch'];
  const CAM0 = { camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
    camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0 };
  // a camera of its own: the eye [across, distance, height] looking at a point [across, distance, height]
  const CAM = ([ex, ez, eh], [tx, tz, th]) => ({ ...CAM0, camera_x: ex, camera_z: ez, camera_h: eh - EYE,
    camera_yaw: Math.atan2(tx - ex, tz - ez) * DEG, camera_pitch: Math.atan2(th - eh, Math.hypot(tx - ex, tz - ez)) * DEG });
  const glide = (s, c, over) => s.all(...CAMK.map(k => s.move(k, c[k], { over, ease: 'inOut' })));
  const SH = {
    wide: CAM0,
    room: CAM([0.1, 0.6, 1.6], [-0.2, 2.6, 1.15]),
    folding: CAM([-0.05, 1.55, 1.35], [-0.1, 2.75, 1.1]),
    palms: CAM([-0.45, 1.3, 1.05], [-0.95, 2.15, 0.8]),
    table: CAM([-0.25, 0.95, 1.45], [-0.35, 2.35, 0.9]),
    jack: CAM([-0.3, 1.45, 1.15], [-1.0, 2.2, 1.0]),
    mom: CAM([-0.45, 1.75, 1.2], [-0.1, 2.9, 1.12]),
    tiger: CAM([-0.35, 1.45, 1.05], [-0.45, 2.15, 0.88]),
    ingot: CAM([-0.62, 1.7, 1.25], [-0.62, 2.12, 0.76]),
    hands: CAM([-0.5, 1.6, 1.2], [-0.6, 2.45, 0.85]),
    door: CAM([0.9, 1.3, 1.6], [2.45, 3.2, 1.45]),
    goats: CAM([-0.5, 3.35, 1.25], [-0.62, 4.28, 1.08]),
    deer: CAM([0.45, 3.4, 1.25], [0.6, 4.2, 1.02]),
    buffalo: CAM([0.15, 3.45, 1.25], [0.12, 4.28, 1.12]),
    shark: CAM([-0.3, 3.45, 1.45], [-0.3, 4.18, 0.9]),
    box: CAM([-0.6, 1.2, 1.55], [0.0, 2.6, 1.15]),
  };
  const cast = scene.kit?.cast?.characters ?? {};
  // a person's whole start: where, facing, doing; nothing in the hands, no look, no reach, on their feet
  const who = (id, [a, d, turn], does = 'stand', more = {}) => {
    const o = { [`${id}_a`]: a, [`${id}_d`]: d, [`${id}_turn`]: turn, [`${id}_do`]: does, [`${id}_look`]: null, [`${id}_reach`]: null,
      [`${id}_on`]: null, [`${id}_with`]: [], [`${id}_gait`]: null };
    for (const [k, v] of Object.entries(more)) o[`${id}_${k}`] = v;
    return o;
  };
  const SEAT = { mom: [-0.1, 2.9, 180], jack: [-1.0, 2.2, 90], dad: [0.72, 2.2, 270] };
  const H = 0.45;
  const sat = (id, does = 'sitting_on_bed', more = {}) => who(id, SEAT[id], does, { on: [SEAT[id][0], SEAT[id][1], H], ...more });
  const merge = (...xs) => Object.assign({}, ...xs);
  const put = (s, o) => Object.entries(o).forEach(([k, v]) => s.set(k, v));
  // sitting down onto one's chair (the cast's sit_down, then a seated loop)
  const sitDown = async (s, id, does = 'sitting_on_bed') => {
    const p = s.person(id), [a, d, turn] = SEAT[id];
    await p.go('sit_down', { to: [a, d], turn });
    p.on([a, d, H]);
    p.do(does);
  };
  // Laohu's own: where, which way, held, breathing; the table's things
  const LAOHU = { laohu: 'alive', laohu_a: -0.45, laohu_d: 2.1, laohu_e: 0.76, laohu_dir: 1, laohu_held: 'none', laohu_breath: 1, laohu_shake: 0, tape_laid: 0 };
  const TABLE = { wrapping: false, robot: false, ingots: 0, ingot_fold: 0, ingot_named: false, scraps: false, tape: false };
  const HOME = { packed: false, day: 0, lamp: 1, ...TABLE, ...LAOHU };
  const EVENING = (more = {}) => merge(HOME, { year: 0, young: false }, dress(cast, 0, false), { mom_wear: null }, more);
  const PROLOGUE = more => merge(EVENING(), dress(cast, 0, true), { young: true, wrapping: true, robot: true }, more);
  // her look with the red wrapping sheet in her hands (the prologue): her sheet's colour the Christmas red
  const MOM_RED = cast.mom ? { ...cast.mom, colors: { ...cast.mom.colors, accent: '#d8402f' } } : null;
  // a paper hop along the oilcloth: held, then a quick snap to the next spot (angular, as paper moves)
  const hop = async (s, to, { over = 0.28, rest = 0.35, lift = 0.05 } = {}) => {
    const a0 = s.state.laohu_a, d0 = s.state.laohu_d, e0 = s.state.laohu_e;
    s.set('laohu_dir', to[0] >= a0 ? -1 : 1);
    await s.path(['laohu_a', 'laohu_d', 'laohu_e'], [[a0, d0, e0], [(a0 + to[0]) / 2, (d0 + to[1]) / 2, Math.max(e0, to[2]) + lift], to], { over, ease: 'out' });
    await s.wait(rest);
  };
  const walkTo = async (s, to, n) => {
    const a0 = s.state.laohu_a, d0 = s.state.laohu_d, e0 = s.state.laohu_e;
    for (let i = 1; i <= n; i++)
      await hop(s, [a0 + ((to[0] - a0) * i) / n, d0 + ((to[1] - d0) * i) / n, e0 + ((to[2] - e0) * i) / n], { lift: 0.025, rest: s.state.laohu_seam ? 0.5 : 0.25 });
  };
  const shake = async (s, t = 0.6) => {
    s.set('laohu_shake', 1);
    await s.wait(t);
    s.set('laohu_shake', 0);
  };
  const DOOR = [2.45, 3.2], HALL = [3.3, 3.2];

  return {
    // ---- the prologue
    // П.1: Christmas evening; Jack (five) crying over his broken robot, Dad squatting by him, Mom behind the table; she
    // picks up a red sheet and folds it without looking at her hands
    robot: {
      tells: ['robot:dad', 'robot:fold'], seconds: 10,
      from: () => merge(PROLOGUE({ laohu: 'none', mom_wear: MOM_RED }), SH.wide,
        who('jack', [-1.0, 2.1, 100], 'cry_child', { look: 'robot' }), who('dad', [-1.35, 1.85, 70], 'squat_comfort', { look: 'jack' }),
        who('mom', [-0.1, 2.75, 180], 'stand', { look: 'jack' })),
      run: async s => {
        await s.wait(1.5);
        s.tell('robot:dad');
        await s.wait(3);
        s.person('mom').do('folding');
        glide(s, SH.folding, 2.5);
        s.tell('robot:fold');
        await s.wait(4.5);
      },
    },
    // П.2: she comes round to him and puts the tiger into his palms; then М1 (`jack#hands`: `laohu_breath`)
    palms: {
      after: ['robot'], tells: ['palms:give'], seconds: 8,
      from: () => merge(PROLOGUE({ laohu: 'none', mom_wear: MOM_RED }), SH.folding,
        who('jack', [-1.0, 2.1, 100], 'cry_child', { look: 'robot' }), who('dad', [-1.35, 1.85, 70], 'squat_comfort', { look: 'jack' }),
        who('mom', [-0.1, 2.75, 180], 'folding', { look: 'jack' })),
      run: async s => {
        const mom = s.person('mom'), jack = s.person('jack');
        glide(s, SH.palms, 3);
        mom.do('stand');
        await mom.walk([[-0.75, 2.75], [-0.85, 2.55]]);
        await mom.turn(215);
        jack.look('mom');
        jack.do('hold_palms');
        s.set('mom_wear', { parts: [] });
        put(s, { laohu: 'paper', laohu_breath: 0, laohu_held: 'jack', laohu_a: -0.95, laohu_d: 2.2, laohu_e: 0.55, laohu_dir: 1 });
        mom.reach({ r: 'jack#hands' });
        s.tell('palms:give');
        await s.wait(1.6);
        mom.reach(null);
        mom.look('jack#hands');
        jack.look('jack#hands');
        s.person('dad').look('jack#hands');
        await s.wait(2);
      },
    },
    // П.3: Laohu jumps onto the wrapping paper; his name; Dad gets up; Jack reaches for a fold and she takes his fingers;
    // she sings and he walks in time; the menagerie at the window; Dad asleep in his chair, Laohu growls at the snore
    menagerie: {
      after: ['palms'], tells: ['menagerie:name', 'menagerie:dad', 'menagerie:fold', 'menagerie:song', 'menagerie:snore'], seconds: 33,
      from: () => merge(PROLOGUE({ mom_wear: { parts: [] }, laohu: 'alive', laohu_breath: 1, laohu_held: 'jack', laohu_a: -0.95, laohu_d: 2.2, laohu_e: 0.55 }), SH.palms,
        who('jack', [-1.0, 2.1, 100], 'hold_palms', { look: 'jack#hands' }), who('dad', [-1.35, 1.85, 70], 'squat_comfort', { look: 'jack#hands' }),
        who('mom', [-0.85, 2.55, 215], 'stand', { look: 'jack#hands' })),
      run: async s => {
        const mom = s.person('mom'), jack = s.person('jack'), dad = s.person('dad');
        // he jumps out of the palms onto the paper
        await shake(s);
        s.set('laohu_held', 'none');
        await hop(s, [-0.55, 2.1, 0.76], { over: 0.45, lift: 0.12, rest: 0.4 });
        s.set('laohu_dir', 1);
        jack.do('stand');
        for (const p of [jack, mom, dad]) p.look('laohu');
        glide(s, SH.table, 1.5);
        s.tell('menagerie:name');
        await s.wait(3);
        dad.do('stand');
        dad.look('mom');
        s.tell('menagerie:dad');
        await s.wait(3.5);
        // Jack reaches for the fold on his flank; she takes his fingers
        jack.reach({ r: 'laohu#back' });
        await s.wait(1);
        mom.reach({ r: 'jack#hand_r' });
        mom.look('jack');
        jack.look('mom');
        s.tell('menagerie:fold');
        await s.wait(6.5);
        jack.reach(null);
        mom.reach(null);
        // the song: he walks across the paper in time, hop by hop
        s.tell('menagerie:song');
        mom.look('laohu');
        jack.look('laohu');
        await walkTo(s, [0.2, 2.15, 0.76], 5);
        // the menagerie at the window, one by one
        for (const [shot, wait] of [[SH.goats, 2.2], [SH.deer, 1.8], [SH.buffalo, 1.8], [SH.shark, 2.2]]) {
          s.cut(shot);
          await s.wait(wait);
        }
        // Dad asleep in his chair at the table's end; Laohu turns on the snore and growls
        put(s, { dad_a: SEAT.dad[0], dad_d: SEAT.dad[1], dad_turn: SEAT.dad[2], dad_on: [SEAT.dad[0], SEAT.dad[1], H], dad_do: 'sitting_on_bed', dad_look: null });
        dad.mood('eyes_closed');
        s.cut(SH.room);
        await s.wait(1);
        s.set('laohu_dir', -1);
        jack.look('dad');
        s.tell('menagerie:snore');
        await shake(s, 1.2);
        await s.wait(2);
      },
    },

    // ---- chapter 1
    // 1.1: Qingming morning; Mom and Jack (ten) at the table folding the yellow squares; her words; then the camera on
    // his square for М2 (`ingot`: `ingot_fold`)
    ingots: {
      tells: ['ingots:say'], seconds: 11,
      from: () => merge(EVENING(), { lamp: 0, day: 1, ingots: 0.6, laohu_a: 0.2, laohu_d: 2.3 }, SH.table,
        sat('mom', 'fold_sheet', { look: 'jack' }), sat('jack', 'fold_sheet', { look: 'ingot' }), who('dad', HALL)),
      run: async s => {
        await s.wait(1.5);
        s.tell('ingots:say');
        s.person('jack').look('mom');
        await s.wait(6);
        s.person('jack').look('ingot');
        s.person('jack').do('hold_down');
        s.person('mom').look('ingot');
        await glide(s, SH.ingot, 2.5);
      },
    },
    // 1.1 after М2: he writes his name on his ingot; she laughs; Laohu bats at the paper; Mark calls from the street
    ingot_name: {
      after: ['ingots'], tells: ['ingot_name:write', 'ingot_name:call'], seconds: 12,
      from: () => merge(EVENING(), { lamp: 0, day: 1, ingots: 0.6, ingot_fold: 1, laohu_a: 0.2, laohu_d: 2.3 }, SH.ingot,
        sat('mom', 'fold_sheet', { look: 'ingot' }), sat('jack', 'hold_down', { look: 'ingot' }), who('dad', HALL)),
      run: async s => {
        const jack = s.person('jack'), mom = s.person('mom');
        s.set('ingot_fold', 1);
        jack.do('write_table');
        glide(s, SH.jack, 2);
        await s.wait(1.5);
        s.set('ingot_named', true);
        s.tell('ingot_name:write');
        await s.wait(2.5);
        mom.mood('laugh');
        mom.look('jack');
        await walkTo(s, [-0.45, 2.15, 0.76], 3);
        await shake(s, 0.5);
        jack.do('sitting_on_bed');
        mom.mood('smile');
        glide(s, SH.table, 2);
        jack.look('window');
        s.tell('ingot_name:call');
        await s.wait(4);
      },
    },
    // 1.5: evening; Laohu's scraps and the tape on the oilcloth; Mom sitting, laying them out by the old lines; Jack
    // comes and sits, holds the halves together; then М4 (`laohu`: `tape_laid`)
    tape: {
      tells: ['tape:now'], seconds: 9,
      from: () => merge(EVENING(), { scraps: true, tape: true, laohu: 'none' }, SH.table,
        sat('mom', 'fold_sheet', { look: 'table' }), who('jack', [-1.3, 2.6, 60], 'stand', { look: 'mom' }), who('dad', HALL)),
      run: async s => {
        const jack = s.person('jack'), mom = s.person('mom');
        s.tell('tape:now');
        await s.wait(1.5);
        s.set('scraps', false);
        put(s, { laohu: 'torn', laohu_breath: 0, laohu_a: -0.5, laohu_d: 2.15, laohu_e: 0.76, laohu_dir: 1, tape_laid: 0 });
        mom.look('laohu');
        mom.reach({ r: 'laohu#back' });
        await sitDown(s, 'jack', 'hold_down');
        jack.look('laohu');
        jack.reach({ r: 'laohu#back', l: 'laohu#paws' });
        mom.reach(null);
        mom.do('sitting_on_bed');
        await glide(s, SH.tiger, 2);
        await s.wait(1);
      },
    },
    // after М4: she breathes on him; Laohu stands up whole and limps along the oilcloth (worse with «Шов»)
    breathe: {
      after: ['tape'], tells: ['breathe:up'], seconds: 8,
      from: () => merge(EVENING(), { tape: true, laohu: 'torn', laohu_breath: 0, tape_laid: 1, laohu_a: -0.5, laohu_d: 2.15 }, SH.tiger,
        sat('mom', 'sitting_on_bed', { look: 'laohu' }), sat('jack', 'hold_down', { look: 'laohu', reach: { r: 'laohu#back', l: 'laohu#paws' } }), who('dad', HALL)),
      run: async s => {
        const jack = s.person('jack');
        s.set('laohu', 'taped');
        await s.wait(1.2);
        jack.reach(null);
        jack.do('sitting_on_bed');
        await s.move('laohu_breath', 1, { over: 2, ease: 'in' });
        s.tell('breathe:up');
        await shake(s, 0.5);
        await walkTo(s, [-0.1, 2.2, 0.76], 3);
        s.set('laohu_dir', 1);
        await s.wait(1);
      },
    },
    // 1.5: her words, not raising her eyes from the roll; she takes his palm and writes 爱 on it with a finger
    palm: {
      after: ['breathe'], tells: ['palm:say', 'palm:sign'], seconds: 14,
      from: () => merge(EVENING(), { tape: true, laohu: 'taped', laohu_a: -0.1, laohu_d: 2.2 }, SH.table,
        sat('mom', 'sitting_on_bed', { look: 'table' }), sat('jack', 'sitting_on_bed', { look: 'laohu' }), who('dad', HALL)),
      run: async s => {
        const jack = s.person('jack'), mom = s.person('mom');
        s.tell('palm:say');
        await s.wait(6);
        glide(s, SH.hands, 1.5);
        jack.reach({ r: [-0.6, 2.5, 0.85] });
        mom.reach({ r: 'jack#hand_r' });
        mom.look('jack#hand_r');
        jack.look('jack#hand_r');
        await mom.do('write_palm', { loop: false });
        s.tell('palm:sign');
        mom.do('sitting_on_bed');
        mom.look('jack');
        await glide(s, SH.mom, 2);
        mom.reach(null);
        jack.reach(null);
        jack.look('mom');
        await s.wait(2);
      },
    },
    // 1.5: Dad in the doorway, in from the porch, taking off his jacket; then the choice
    question: {
      after: ['palm'], tells: ['question:door'], seconds: 5,
      from: () => merge(EVENING(), { tape: true, laohu: 'taped', laohu_a: -0.1, laohu_d: 2.2 }, SH.mom,
        sat('mom', 'sitting_on_bed', { look: 'jack' }), sat('jack', 'sitting_on_bed', { look: 'mom' }), who('dad', [DOOR[0], DOOR[1], 250], 'stand', { look: 'mom' })),
      run: async s => {
        glide(s, SH.room, 1.5);
        s.tell('question:door');
        await s.person('dad').do('jacket_off', { loop: false });
        s.person('dad').do('stand');
      },
    },
    // «Папа тебя купил?»: her hand stops; she looks at Dad; her answer; his line; he goes (the piece takes him out); the
    // hammer from the porch; Jack's question, her «later»; his crooked smile
    asked: {
      after: ['question'], tells: ['asked:look', 'asked:dad', 'asked:hammer'], seconds: 18,
      from: () => merge(EVENING(), { tape: true, laohu: 'taped', laohu_a: -0.1, laohu_d: 2.2 }, SH.room,
        sat('mom', 'sitting_on_bed', { look: 'jack' }), sat('jack', 'sitting_on_bed', { look: 'mom' }), who('dad', [DOOR[0], DOOR[1], 250], 'stand', { look: 'mom' })),
      run: async s => {
        const mom = s.person('mom'), dad = s.person('dad'), jack = s.person('jack');
        glide(s, SH.mom, 1.5);
        await s.wait(1);
        mom.look('dad');
        await s.wait(1.2);
        mom.look('jack');
        s.tell('asked:look');
        await s.wait(5);
        s.cut(SH.door);
        mom.look('dad');
        s.tell('asked:dad');
        await s.wait(4);
        await dad.walk([HALL]);
        dad.here(false);
        s.cut(SH.jack);
        mom.look('right_wall#door');
        s.tell('asked:hammer');
        await s.wait(3);
        jack.look('mom');
        mom.look('laohu');
        await s.wait(3);
      },
    },
    // «Промолчать»: she waits; he strokes Laohu; she hums; Dad comes to the table and sits; Laohu limps over to him
    silent: {
      after: ['question'], tells: ['silent:dad'], seconds: 14,
      from: () => merge(EVENING(), { tape: true, laohu: 'taped', laohu_a: -0.1, laohu_d: 2.2 }, SH.room,
        sat('mom', 'sitting_on_bed', { look: 'jack' }), sat('jack', 'sitting_on_bed', { look: 'mom' }), who('dad', [DOOR[0], DOOR[1], 250], 'stand', { look: 'mom' })),
      run: async s => {
        const mom = s.person('mom'), dad = s.person('dad'), jack = s.person('jack');
        jack.look('laohu');
        jack.reach({ r: 'laohu#back' });
        await s.wait(2.5);
        mom.look('laohu');
        mom.do('fold_sheet');
        await s.wait(2);
        jack.reach(null);
        s.tell('silent:dad');
        await dad.walk([[1.2, 2.5], [SEAT.dad[0] + 0.3, SEAT.dad[1] + 0.1]]);
        await sitDown(s, 'dad');
        dad.look('laohu');
        await walkTo(s, [0.3, 2.2, 0.76], 3);
        s.set('laohu_dir', -1);
        await s.wait(1.5);
      },
    },

    // ---- chapter 3: a year on, the house sold (Mom is not here: the game does not bring her)
    // 3.1: the kitchen packed, by day; Dad taping the box on the table; the suit on its hook (with `suit_bag` —
    // «Остался» — he takes it down and gives it to Jack); the cranes and frogs on the bare sill («Зверинец» 2,
    // `menagerie`: sill)
    boxes: {
      tells: ['boxes:dad', 'boxes:suit', 'boxes:sill'], seconds: 22,
      from: () => merge(HOME, { year: 1, young: false }, dress(cast, 1, false), { packed: true, day: 1, lamp: 0, tape: true, laohu: 'none' }, SH.box,
        who('dad', [0.05, 2.8, 180], 'tape_box', { look: 'table_box#box' }), who('jack', [-1.15, 2.45, 100], 'stand', { look: 'dad' }), who('mom', HALL)),
      run: async s => {
        const dad = s.person('dad'), jack = s.person('jack');
        await s.wait(2);
        dad.look('jack');
        s.tell('boxes:dad');
        await s.wait(6);
        if (s.state.suit_bag) {
          dad.do('stand');
          await dad.walk([[1.4, 2.6], [2.45, 2.35]]);
          await dad.turn(90);
          dad.reach({ r: 'right_wall#suit' });
          await s.wait(0.8);
          s.set('suit_bag', false);
          dad.with(['suit_bag']);
          dad.reach(null);
          await dad.walk([[-0.6, 2.45]]);
          await dad.turn(270);
          dad.look('jack');
          s.tell('boxes:suit');
          await s.wait(3);
          dad.with([]);
          jack.with(['suit_bag']);
          jack.do('showing_suit');
          jack.look('dad');
          await s.wait(2);
          jack.do('stand');
        } else {
          s.tell('boxes:suit');
          await s.wait(3);
        }
        glide(s, SH.goats, 2.5);
        jack.look('cranes#cranes');
        dad.look('cranes#cranes');
        s.tell('boxes:sill');
        await s.wait(4);
      },
    },
    // 3.2: Jack walks through the kitchen with the sheet; Dad: «That's her hand» — «I'll find someone to read it»
    her_hand: {
      tells: ['her_hand:dad'], seconds: 9,
      from: () => merge(HOME, { year: 1, young: false }, dress(cast, 1, false), { packed: true, day: 1, lamp: 0, tape: true, laohu: 'none' }, SH.wide,
        who('dad', [0.05, 2.8, 180], 'tape_box', { look: 'table_box#box' }), who('jack', [-2.3, 3.0, 90], 'stand', { look: 'jack#letter', with: ['letter'] }), who('mom', HALL)),
      run: async s => {
        const dad = s.person('dad'), jack = s.person('jack');
        await jack.walk([[-0.9, 2.95]]);
        dad.do('stand');
        dad.look('jack#letter');
        await jack.turn(140);
        jack.look('dad');
        glide(s, SH.box, 1.5);
        s.tell('her_hand:dad');
        await s.wait(5);
      },
    },
  };
}

return { wallpaper, tiles, dress, film };
