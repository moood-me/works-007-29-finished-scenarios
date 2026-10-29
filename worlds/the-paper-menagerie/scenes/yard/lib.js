// The yard's pieces (stage 5; modules/beats; the contract: game.md «Stage 5 — pieces», notes.md «Pieces»):
// `film(scene)` — each `{after, tells, seconds, from, run}`. `from` — every value the piece begins at but the game's:
// `<id>_here`, `<id>_mood`, and the keys notes.md names — `way` (the yard's choice: english, chinese, run), `zoo`
// («Зверинец» 0, 1, 2), `father` (all, apple, later), `ending` (tiger, letter, smoke), `laohu_ear`, `laohu_seam`,
// `shoebox`, `menu_house`, `tear`, `hanzi_crooked`; `run` — the director's sequence, its moments told
// (`<piece>:<moment>`) where the game says its lines, ending in a living pose.
// Places (metres; across right of the middle, distance away): the house's front at 8.5, its door at −1.0; the porch at
// 0.6 m from 7.0, its three steps down toward us (treads at 6.86 and 6.58, the foot at 6.44); the puddle at their foot
// (−0.55, 5.85); the apple tree on the right, the bucket at its foot (3.8, 5.4); Jack's window at −4.4 (his room's
// floor 0.6 m up, 8.85 away). Behind the viewer (`view` street: the eye `street_eye` at 1.2, turned round): the front
// fence at −1.6 with its gate (−0.9…0.4), the bus stop (−3.6, −2.9), the road, Mark's house and car (−4.2, −9.7).
function film(scene) {
  const DEG = 180 / Math.PI, EYE = 1.7;
  const CAMK = ['camera_x', 'camera_z', 'camera_h', 'camera_yaw', 'camera_pitch'];
  const CAM0 = { camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
    camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0 };
  // a camera of its own: the eye [across, distance, height] looking at a point [across, distance, height] — in the
  // yard's own view; CAMS — the same two world points seen from the street eye's frame (turned round at 1.2)
  const CAM = ([ex, ez, eh], [tx, tz, th]) => ({ ...CAM0, camera_on: null, view: 'house', camera_x: ex, camera_z: ez, camera_h: eh - EYE,
    camera_yaw: Math.atan2(tx - ex, tz - ez) * DEG, camera_pitch: Math.atan2(th - eh, Math.hypot(tx - ex, tz - ez)) * DEG });
  const CAMS = ([ea, ed, eh], [ta, td, th]) => ({ ...CAM([-ea, 1.2 - ed, eh], [-ta, 1.2 - td, th]), camera_on: 'street_eye', view: 'street' });
  const glide = (s, c, over) => s.all(...CAMK.map(k => s.move(k, c[k], { over, ease: 'inOut' })));
  const SH = {
    wide: { ...CAM0, camera_on: null, view: 'house' },
    street: { ...CAM0, camera_on: 'street_eye', view: 'street' },
    steps: CAM([0.4, 2.6, 1.55], [-0.6, 6.2, 1.0]),
    mark: CAM([-1.2, 3.9, 1.4], [-0.3, 6.0, 1.1]),
    grass: CAM([0.6, 2.7, 1.0], [0.0, 4.6, 0.5]),
    mom: CAM([0.1, 2.9, 1.65], [0.75, 4.55, 1.3]),
    step_mom: CAM([0.5, 4.4, 1.0], [-0.55, 6.5, 0.85]),
    two: CAM([0.9, 3.4, 1.2], [-0.3, 6.4, 0.75]),
    fire: CAM([2.3, 3.5, 1.5], [3.85, 5.6, 1.05]),
    bucket: CAM([2.9, 4.0, 1.25], [3.8, 5.6, 0.85]),
    window: CAM([-3.2, 6.0, 2.1], [-4.4, 8.85, 1.75]),
    dad: CAM([1.2, 3.6, 1.4], [-0.6, 6.6, 1.0]),
    porch: CAM([0.3, 3.0, 1.6], [-1.0, 8.0, 1.5]),
    tree: CAM([1.7, 3.0, 1.6], [4.2, 5.4, 1.4]),
    up: CAM([2.2, 3.0, 1.4], [3.8, 5.4, 2.6]),
    box: CAM([0.1, 5.0, 1.05], [-0.6, 6.86, 0.5]),
    sheet: CAM([-0.55, 4.75, 1.2], [-1.3, 6.5, 0.6]),
    stop: CAMS([0.0, 0.6, 1.6], [-2.6, -2.6, 1.2]),
    gate: CAMS([1.2, -3.2, 1.55], [-0.2, -1.2, 1.45]),
    across: CAMS([-0.9, 1.0, 1.6], [-3.0, -8.0, 1.3]),
  };
  const cast = scene.kit?.cast?.characters ?? {};
  const who = (id, [a, d, turn], does = 'stand', more = {}) => {
    const o = { [`${id}_a`]: a, [`${id}_d`]: d, [`${id}_turn`]: turn, [`${id}_do`]: does, [`${id}_look`]: null, [`${id}_reach`]: null,
      [`${id}_on`]: null, [`${id}_with`]: [], [`${id}_gait`]: null };
    for (const [k, v] of Object.entries(more)) o[`${id}_${k}`] = v;
    return o;
  };
  const merge = (...xs) => Object.assign({}, ...xs);
  const put = (s, o) => Object.entries(o).forEach(([k, v]) => s.set(k, v));
  // the yard's own: the time, the things, Laohu; who wears what by the year (as the script's dress)
  const THINGS = { scraps: false, scraps_left: 5, plate_step: false, knight_at: 'hands', knight_lit: 0, knight_a: -0.55, knight_d: 5.85,
    ingot_named: false, window_animals: false, menagerie_sleep: 0, tremble: 0, fold: 0, letter_close: 0, hanzi_close: 0, hanzi: 0,
    stripes: 0, step_sheet: false, last_box: true, bus_a: 40 };
  const LAOHU = { laohu: 'none', laohu_a: -1.0, laohu_d: 7.3, laohu_e: 0.6, laohu_dir: 1, laohu_held: 'none', laohu_breath: 1, laohu_shake: 0,
    laohu_purr: 0, laohu_rise: 1 };
  const DRESS = year => ({ jack_wear: year ? { ...cast.jack_grown, parts: [] } : null, dad_wear: year ? { ...cast.dad_grey, parts: [] } : null });
  const MORNING = more => merge(THINGS, LAOHU, { year: 0, sold: false, dusk: 0, porch_lamp: 0, house_lights: 0, fire: 0, shoebox: 0, menu_house: false }, DRESS(0),
    { mom_wear: { parts: ['plate'] }, mark_wear: null }, more);
  const DUSK = more => merge(THINGS, LAOHU, { year: 0, sold: false, dusk: 1, porch_lamp: 1, house_lights: 1, fire: 1, shoebox: 0, menu_house: false }, DRESS(0),
    { mom_wear: { parts: [] }, mark_wear: null }, more);
  const YEAR = more => merge(THINGS, LAOHU, { year: 1, sold: true, dusk: 1, porch_lamp: 0, house_lights: 0, fire: 0 }, DRESS(1), { mom_wear: { parts: [] } }, more);
  // where people wait unseen (not brought by the game, or gone): behind the house's corner
  const AWAY = { mom: [-9.5, 9.5, 180], jack: [-9.0, 9.5, 180], mark: [-9.8, 9.2, 180], dad: [-9.3, 9.8, 180], mark_grown: [-4.0, -11, 0],
    boy_a: [-2.7, -2.6, 20], boy_b: [-4.4, -2.5, 345] };
  const away = (...ids) => merge(...ids.map(id => who(id, AWAY[id])));
  const DOOR = [-1.0, 8.15], STEP = [-0.55, 6.62], TOP = [-1.25, 6.86, 0.42], LOW = [-1.3, 6.58, 0.22], BUCKET = [3.8, 5.4];
  // a paper hop: held, then a quick snap to the next spot (angular, as paper moves)
  const hop = async (s, to, { over = 0.28, rest = 0.3, lift = 0.05 } = {}) => {
    const a0 = s.state.laohu_a, d0 = s.state.laohu_d, e0 = s.state.laohu_e;
    s.set('laohu_dir', to[0] >= a0 ? -1 : 1);
    await s.path(['laohu_a', 'laohu_d', 'laohu_e'], [[a0, d0, e0], [(a0 + to[0]) / 2, (d0 + to[1]) / 2, Math.max(e0, to[2]) + lift], to], { over, ease: 'out' });
    await s.wait(s.state.laohu_seam ? rest + 0.25 : rest);
  };
  const walkTo = async (s, to, n) => {
    const a0 = s.state.laohu_a, d0 = s.state.laohu_d, e0 = s.state.laohu_e;
    for (let i = 1; i <= n; i++) await hop(s, [a0 + ((to[0] - a0) * i) / n, d0 + ((to[1] - d0) * i) / n, e0 + ((to[2] - e0) * i) / n], { lift: 0.03 });
  };
  const shake = async (s, t = 0.6) => {
    s.set('laohu_shake', 1);
    await s.wait(t);
    s.set('laohu_shake', 0);
  };
  // the scene's 1.3 as the stage-2 picture has it: Jack crouched with the pieces, Mom by him with the plate, Mark
  const YARD13 = () => merge(MORNING({ scraps: false }), who('jack', [0.0, 4.3, 125], 'crouch_scraps', { with: ['scraps'], look: 'jack#scraps' }),
    who('mom', [1.15, 4.4, 255], 'offer_hand', { reach: { r: [0.72, 4.3, 0.85] }, look: 'jack' }), who('mark', [-1.3, 4.0, 100], 'holding_toy', { look: 'jack' }),
    away('dad', 'mark_grown', 'boy_a', 'boy_b'));
  // the year on, the last dusk: Dad on the top step by the shoebox, the last box on the porch; Jack before him with
  // her sheet
  const PORCH = () => merge(YEAR({ porch_lamp: 0.6 }), who('dad', [TOP[0], TOP[1], 180], 'sitting_on_bed', { on: TOP, look: 'jack' }),
    who('jack', [0.35, 6.0, 250], 'stand', { with: ['letter'], look: 'dad' }), away('mom', 'mark', 'mark_grown', 'boy_a', 'boy_b'));
  // the finales' Jack: sitting on the lower step with the sheet
  const SITTING = () => who('jack', [LOW[0], LOW[1], 180], 'sitting_on_bed', { on: LOW, with: ['letter'], look: 'jack#letter' });

  return {
    // ---- chapter 1, Qingming morning
    // 1.2: Mark with his knight («My dad sent me this»), its sword lit; Laohu out on the porch after Jack sees it,
    // jumps and knocks it off the step into the puddle; Mark fishes it out, grabs Laohu and tears him, twice
    // («It's trash…»), throws the pieces down; the wind carries them over the grass; Jack crouches over them. Then М3
    // (`scraps#s1…s5`: `scraps_left`)
    knight: {
      tells: ['knight:show', 'knight:tear', 'knight:wind'], seconds: 22,
      from: () => merge(MORNING({ mom_wear: null, laohu: 'alive', laohu_a: -1.15, laohu_d: 7.3, laohu_e: 0.6, knight_lit: 1 }), SH.wide,
        who('jack', [0.6, 5.25, 300], 'stand', { look: 'mark#knight' }), who('mark', [-0.35, 6.15, 160], 'holding_toy', { look: 'jack' }),
        away('mom', 'dad', 'mark_grown', 'boy_a', 'boy_b')),
      run: async s => {
        const jack = s.person('jack'), mark = s.person('mark');
        s.tell('knight:show');
        glide(s, SH.mark, 2.5);
        await s.wait(3);
        // Laohu down the steps, a pounce at the shining sword
        await walkTo(s, [-0.7, 6.86, 0.4], 2);
        await hop(s, [-0.45, 6.6, 0.2]);
        await hop(s, [-0.4, 6.15, 0.9], { over: 0.35, lift: 0.15, rest: 0.05 });
        put(s, { mark_wear: { parts: [] }, knight_at: 'puddle', knight_lit: 0, knight_a: -0.55, knight_d: 5.85 });
        await hop(s, [-0.2, 6.0, 0], { over: 0.3, rest: 0.4 });
        mark.look('knight');
        // he fishes it out of the water: wet, the sword dark
        await mark.walk([[-0.45, 5.95]]);
        await mark.do('crouch_scraps', { loop: true });
        await s.wait(1.2);
        put(s, { knight_at: 'grass', knight_a: -0.75, knight_d: 5.7 });
        mark.do('stand');
        mark.look('laohu');
        // he grabs Laohu and tears him, twice
        put(s, { laohu_held: 'mark', laohu_a: -0.4, laohu_d: 5.9, laohu_e: 0.8 });
        await shake(s, 0.4);
        glide(s, SH.mark, 1);
        await mark.do('tear_paper', { loop: false });
        put(s, { laohu: 'none', laohu_held: 'none', mark_with: ['scraps'] });
        s.tell('knight:tear');
        await s.wait(2.5);
        await mark.do('throw_down', { loop: false });
        put(s, { mark_with: [], scraps: true, scraps_left: 5 });
        mark.do('stand');
        mark.look('jack');
        // the wind takes the pieces over the grass; Jack crouches among them
        glide(s, SH.grass, 2);
        s.tell('knight:wind');
        await jack.walk([[0.05, 4.6]]);
        await jack.turn(160);
        jack.look('scraps');
        jack.do('crouch_scraps');
        await s.wait(2);
      },
    },
    // 1.3: Mom comes down the steps with the plate of buns, kneels by Jack, holds out her hand («给我。我来修…»);
    // Mark's two lines; close on her face, her hand held out. Then the choice (8 s)
    plate: {
      tells: ['plate:hand', 'plate:face'], seconds: 12,
      from: () => merge(YARD13(), who('mom', [DOOR[0], DOOR[1], 180], 'stand', { look: 'jack' }), SH.wide),
      run: async s => {
        const mom = s.person('mom');
        await mom.walk([[-1.0, 7.1], [-0.9, 6.3], [0.75, 4.55]]);
        await mom.turn(255);
        mom.do('offer_hand');
        mom.reach({ r: [0.72, 4.3, 0.85] });
        s.person('jack').look('mom');
        s.tell('plate:hand');
        await s.wait(3);
        s.person('jack').look('jack#scraps');
        await glide(s, SH.mom, 4);
        s.tell('plate:face');
        await s.wait(1.5);
      },
    },
    // «По-английски, мам!»: she freezes; «Okay. Eat, please»; she sets the plate on the step and holds her palm open;
    // Jack puts the pieces in it without looking; he and Mark go out through the gate («Come over to mine…»); she is
    // alone on the step, the plate beside her, the pieces in her palm
    yard_english: {
      after: ['plate'], tells: ['yard_english:freeze', 'yard_english:go'], seconds: 15,
      from: () => merge(YARD13(), who('mom', [0.75, 4.55, 255], 'offer_hand', { reach: { r: [0.72, 4.3, 0.85] }, look: 'jack' }), SH.mom),
      run: async s => {
        const mom = s.person('mom'), jack = s.person('jack'), mark = s.person('mark');
        mom.do('stand');
        mom.reach(null);
        s.tell('yard_english:freeze');
        await s.wait(2.5);
        glide(s, SH.two, 2);
        await mom.walk([[-0.2, 6.1]]);
        put(s, { mom_wear: { parts: [] }, plate_step: true });
        await mom.turn(200);
        mom.do('offer_hand');
        jack.do('stand');
        await jack.walk([[-0.05, 5.6]]);
        jack.reach({ r: 'mom#hand_r' });
        await s.wait(0.8);
        put(s, { jack_with: [], mom_with: ['scraps'] });
        jack.reach(null);
        mom.look('mom#scraps');
        s.tell('yard_english:go');
        await s.all(jack.walk([[0.6, 3.0], [0.4, -0.5]]), (async () => {
          await s.wait(0.4);
          await mark.walk([[-0.4, 3.0], [-0.2, -0.5]]);
        })());
        put(s, { mom_a: STEP[0] + 0.25, mom_d: 6.58, mom_turn: 180, mom_on: [STEP[0] + 0.25, 6.58, 0.22], mom_do: 'sit_step', mom_look: 'mom#scraps' });
        await glide(s, SH.step_mom, 2);
        await s.wait(1.5);
      },
    },
    // «По-китайски»: Jack gives her the pieces («妈妈，你修好它。»); Mark mimics, drawling, and goes («Fine, sit
    // there…»), the knight dripping; she sits on the step by Jack and holds out a bun
    yard_chinese: {
      after: ['plate'], tells: ['yard_chinese:give', 'yard_chinese:go'], seconds: 14,
      from: () => merge(YARD13(), who('mom', [0.75, 4.55, 255], 'offer_hand', { reach: { r: [0.72, 4.3, 0.85] }, look: 'jack' }), SH.mom),
      run: async s => {
        const mom = s.person('mom'), jack = s.person('jack'), mark = s.person('mark');
        jack.reach({ r: 'mom#hand_r' });
        jack.look('mom');
        s.tell('yard_chinese:give');
        await s.wait(1.5);
        put(s, { jack_with: [], mom_with: ['scraps'] });
        jack.reach(null);
        mom.reach(null);
        glide(s, SH.mark, 1.5);
        mark.do('mock');
        await s.wait(2.5);
        mark.do('holding_toy');
        s.tell('yard_chinese:go');
        await mark.walk([[-0.6, 2.5], [-0.3, -0.5]]);
        glide(s, SH.two, 2);
        mom.do('stand');
        jack.do('stand');
        await s.all(mom.walk([[-0.15, 6.2]]), jack.walk([[-0.7, 6.15]]));
        put(s, { mom_turn: 180, jack_turn: 180, mom_on: [-0.15, 6.58, 0.22], jack_on: [-0.7, 6.58, 0.22], mom_a: -0.15, mom_d: 6.58, jack_a: -0.7, jack_d: 6.58,
          mom_do: 'sit_step', jack_do: 'sit_step', mom_with: [], mom_wear: { parts: ['plate'] } });
        mom.look('jack');
        mom.reach({ r: 'jack#hands' });
        jack.look('mom#plate');
        await glide(s, SH.step_mom, 2);
        await s.wait(2);
      },
    },
    // «Убежать»: Jack runs into the house, the pieces in his fist; the door bangs; Mark: «Psycho», and goes; Mom stands
    // with the plate, then sets it down on the step
    yard_run: {
      after: ['plate'], tells: ['yard_run:door', 'yard_run:plate'], seconds: 12,
      from: () => merge(YARD13(), who('mom', [0.75, 4.55, 255], 'offer_hand', { reach: { r: [0.72, 4.3, 0.85] }, look: 'jack' }), SH.mom),
      run: async s => {
        const mom = s.person('mom'), jack = s.person('jack'), mark = s.person('mark');
        glide(s, SH.wide, 1.2);
        jack.do('stand');
        jack.gait('run_off');
        mom.reach(null);
        mom.do('stand');
        mom.look('jack');
        await jack.walk([[-0.8, 6.3], [-1.0, 7.4], DOOR]);
        jack.here(false);
        jack.gait(null);
        mark.look('house#door');
        s.tell('yard_run:door');
        await s.wait(1.5);
        await mark.walk([[-0.6, 2.5], [-0.3, -0.5]]);
        await mom.walk([[-0.2, 6.2]]);
        await mom.turn(200);
        put(s, { mom_wear: { parts: [] }, plate_step: true });
        s.tell('yard_run:plate');
        mom.look('house#door');
        await glide(s, SH.step_mom, 2);
        await s.wait(1.5);
      },
    },
    // 1.4: dusk; Mom at the bucket under the apple tree dropping the ingots into the fire one by one, his among them
    // (`ingot_named`). By `way`: english — Jack back through the gate, past her, turning at the porch («Dinner soon»);
    // chinese — Jack beside her dropping his too (her «外公外婆…», his «你们好。»); run — Jack in his window, she looks up
    // to it. Then close on his ingot in the fire
    fire: {
      tells: ['fire:pass', 'fire:speak', 'fire:window', 'fire:ingot'], seconds: 14,
      from: () => {
        const w = scene.get('way');
        const jack = w === 'chinese' ? who('jack', [3.35, 5.75, 165], 'drop_in_fire', { look: 'apple#fire' })
          : w === 'run' ? who('jack', [-4.4, 8.85, 180], 'stand', { look: 'mom' })
          : who('jack', [0.3, 0.2, 0], 'stand');
        return merge(DUSK({ ingot_named: true }), SH.fire, who('mom', [4.2, 5.75, 210], 'drop_in_fire', { look: 'apple#fire' }), jack, away('mark', 'dad', 'mark_grown', 'boy_a', 'boy_b'));
      },
      run: async s => {
        const mom = s.person('mom'), jack = s.person('jack'), w = s.state.way;
        await s.wait(1.5);
        if (w === 'chinese') {
          s.tell('fire:speak');
          mom.look('jack');
          await s.wait(5);
          mom.look('apple#fire');
        } else if (w === 'run') {
          mom.do('stand');
          mom.look('house#jack_window');
          await glide(s, SH.window, 2.5);
          s.tell('fire:window');
          await s.wait(3);
          await glide(s, SH.fire, 2);
          mom.do('drop_in_fire');
        } else {
          glide(s, SH.wide, 1.5);
          const go = jack.walk([[0.6, 4.5], [-0.4, 6.2]]);
          await s.wait(2);
          mom.look('jack');
          s.tell('fire:pass');
          await go;
          await jack.turn(110);
          jack.look('apple#fire');
          mom.look('apple#fire');
          await s.wait(1.5);
        }
        await glide(s, SH.bucket, 2);
        s.tell('fire:ingot');
        await s.wait(3);
      },
    },
    // 1.4: Dad comes in from the gate and stands by her, his hand on her back; then (english, chinese) to Jack on the
    // porch — his line at `dad_home:talk` («Убежал»: his talk is the room's `knock`; the moment is told all the same)
    dad_home: {
      after: ['fire'], tells: ['dad_home:back', 'dad_home:talk'], seconds: 14,
      from: () => {
        const w = scene.get('way');
        const jack = w === 'chinese' ? who('jack', [3.35, 5.75, 165], 'drop_in_fire', { look: 'apple#fire' })
          : w === 'run' ? who('jack', [-4.4, 8.85, 180], 'stand', { look: 'mom' })
          : who('jack', [-0.4, 6.2, 110], 'stand', { look: 'apple#fire' });
        return merge(DUSK({ ingot_named: true }), SH.fire, who('mom', [4.2, 5.75, 210], 'drop_in_fire', { look: 'apple#fire' }), jack,
          who('dad', [1.2, 0.5, 20], 'stand'), away('mark', 'mark_grown', 'boy_a', 'boy_b'));
      },
      run: async s => {
        const mom = s.person('mom'), dad = s.person('dad'), jack = s.person('jack'), w = s.state.way;
        glide(s, SH.wide, 1.5);
        await dad.walk([[2.6, 3.5], [3.8, 5.95]]);
        await dad.turn(210);
        mom.do('stand');
        dad.reach({ r: 'mom#back' });
        dad.look('mom');
        mom.look('dad');
        s.tell('dad_home:back');
        await glide(s, SH.fire, 2);
        await s.wait(2.5);
        dad.reach(null);
        if (w === 'english') {
          await dad.walk([[1.0, 5.6], [0.1, 6.0]]);
          await dad.turn(250);
          dad.look('jack');
          jack.look('dad');
          await glide(s, SH.two, 1.5);
        } else if (w === 'chinese') {
          await dad.walk([[3.0, 5.6]]);
          await dad.turn(270);
          dad.look('jack');
          jack.do('stand');
          jack.look('dad');
        }
        s.tell('dad_home:talk');
        await s.wait(4);
      },
    },
    // 1.7: Monday morning, seen toward the street (`view` street): Mark and the two boys at the bus stop; Jack comes out
    // through the gate. By `way`: english — Mark waves him over and he stands laughing with them; chinese — they drawl
    // after him, he stands apart by the gate, alone; run — they jeer. With `zoo` 1–2 Laohu limps after him to the gate,
    // falls (with «Шов»), and goes back to Mom's «老虎。»; with 2 the goats walk on Jack's sill (`window_animals`, seen by
    // the stop). The bus comes
    stop: {
      tells: ['stop:mark', 'stop:laohu', 'stop:window', 'stop:bus'], seconds: 22,
      from: () => merge(MORNING({ mom_wear: { parts: [] }, laohu: 'taped', laohu_a: 0.0, laohu_d: 2.4, laohu_e: 0, window_animals: scene.get('zoo') === 2 }), SH.stop,
        who('jack', [0.1, 2.6, 180], 'stand', { look: 'mark' }), who('mark', [-3.2, -2.2, 0], 'hands_in_pockets', { look: 'jack' }),
        who('boy_a', [-2.7, -2.6, 20], 'hands_in_pockets', { look: 'jack' }), who('boy_b', [-4.0, -2.5, 345], 'stand', { look: 'jack' }),
        who('mom', [-1.0, 7.9, 180], 'stand', { look: 'jack' }), away('dad', 'mark_grown')),
      run: async s => {
        const jack = s.person('jack'), mark = s.person('mark'), w = s.state.way, z = s.state.zoo ?? 0;
        const laohu = z >= 1;
        if (!laohu) s.set('laohu', 'none');
        const follow = laohu ? walkTo(s, [-0.1, -0.9, 0], 6) : null;
        if (w === 'chinese') {
          await jack.walk([[-0.2, -1.0]]);
          await jack.turn(180);
          for (const id of ['mark', 'boy_a', 'boy_b']) s.person(id).do('mock');
          s.tell('stop:mark');
        } else if (w === 'run') {
          await jack.walk([[-0.2, -1.6], [-1.6, -2.6]]);
          await jack.turn(200);
          for (const id of ['mark', 'boy_a', 'boy_b']) s.person(id).do('mock');
          s.tell('stop:mark');
        } else {
          mark.do('wave', { loop: false });
          s.tell('stop:mark');
          await jack.walk([[-0.2, -1.6], [-2.3, -2.7]]);
          await jack.turn(330);
          jack.mood('laugh');
          mark.do('hands_in_pockets');
        }
        await s.wait(2);
        if (follow) {
          await follow;
          if (s.state.laohu_seam) {
            s.set('laohu_shake', 1);
            await s.move('laohu_rise', 0.3, { over: 0.2 });
            await s.wait(0.6);
            await s.move('laohu_rise', 1, { over: 0.3 });
            s.set('laohu_shake', 0);
          }
          for (const id of ['mark', 'boy_a', 'boy_b']) s.person(id).look('laohu');
          s.tell('stop:laohu');
          await s.wait(2.5);
          await walkTo(s, [0.1, 2.6, 0], 4);
        } else s.tell('stop:laohu');
        s.tell('stop:window');
        await s.wait(z === 2 ? 3 : 0.5);
        for (const id of ['mark', 'boy_a', 'boy_b']) s.person(id).do('hands_in_pockets');
        await s.move('bus_a', -0.6, { over: 5, ease: 'out' });
        s.tell('stop:bus');
        await s.wait(2);
      },
    },

    // ---- chapter 3: a year on, the house sold; the last dusk
    // 3.4: toward the street: grown Mark at his car across the road with a bag; Jack at the gate. By `way`: english — he
    // crosses, pats Jack's shoulder and goes back to the car; chinese — he looks past him and gets in; run — a nod
    // across the street. His line, Jack's, at `mark:say`
    mark: {
      tells: ['mark:say'], seconds: 12,
      from: () => merge(YEAR({}), SH.across, who('jack', [0.3, -1.0, 180], 'stand', { look: 'mark_grown' }),
        who('mark_grown', [-3.4, -8.7, 0], 'stand', { look: 'jack', with: ['duffel'] }), away('mom', 'mark', 'dad', 'boy_a', 'boy_b')),
      run: async s => {
        const m = s.person('mark_grown'), w = s.state.way;
        await s.wait(1.2);
        if (w === 'english') {
          await m.walk([[-1.5, -5.0], [0.1, -2.0]]);
          await m.turn(0);
          glide(s, SH.gate, 1.5);
          s.tell('mark:say');
          m.reach({ r: 'jack#shoulder_l' });
          await s.wait(4);
          m.reach(null);
          await m.walk([[-1.5, -5.0], [-4.0, -8.9]]);
        } else if (w === 'chinese') {
          m.look([6, -9, 1.6]);
          s.tell('mark:say');
          await s.wait(1.5);
          await m.walk([[-4.6, -9.0]]);
          m.here(false);
          await s.wait(2);
        } else {
          m.look('jack');
          glide(s, SH.gate, 1.5);
          s.tell('mark:say');
          await s.wait(4);
        }
      },
    },
    // 3.4: Dad on the top step with the last box, the shoebox of animals beside him; Jack before him with the sheet:
    // «What does she write?» Then the choice
    step: {
      tells: ['step:ask'], seconds: 6,
      from: () => merge(PORCH(), SH.dad),
      run: async s => {
        await s.wait(1.5);
        s.tell('step:ask');
        await s.wait(4);
      },
    },
    // «Рассказать всё»: Dad sits a long while; «A scar… I thought — the stove»; he gets up, goes to the apple tree and
    // stands with his palm on the bark
    father_all: {
      after: ['step'], tells: ['father_all:scar', 'father_all:tree'], seconds: 14,
      from: () => merge(PORCH(), SH.dad),
      run: async s => {
        const dad = s.person('dad');
        await s.wait(2.5);
        dad.look('jack#letter');
        s.tell('father_all:scar');
        await s.wait(4);
        put(s, { dad_on: null, dad_do: 'stand' });
        glide(s, SH.tree, 2.5);
        await dad.walk([[1.5, 5.6], [3.95, 5.15]]);
        await dad.turn(80);
        dad.do('palm_on_tree');
        dad.reach({ r: 'apple#trunk' });
        dad.look('apple#trunk');
        s.tell('father_all:tree');
        await s.wait(3);
      },
    },
    // «Про деревню. И про яблоню»: Dad smiles — he planted the tree before his first letter
    father_apple: {
      after: ['step'], tells: ['father_apple:smile'], seconds: 9,
      from: () => merge(PORCH(), SH.dad),
      run: async s => {
        const dad = s.person('dad');
        await s.wait(1.5);
        dad.mood('smile');
        dad.look('apple#crown');
        s.tell('father_apple:smile');
        await s.wait(5);
        dad.look('jack');
        await s.wait(1.5);
      },
    },
    // «Потом, пап»: he nods, as he nodded to her all his life; «Later. All right»; he carries the last box into the
    // house
    father_later: {
      after: ['step'], tells: ['father_later:nod'], seconds: 10,
      from: () => merge(PORCH(), SH.dad),
      run: async s => {
        const dad = s.person('dad');
        await s.wait(1);
        s.tell('father_later:nod');
        await s.wait(3);
        put(s, { dad_on: null, dad_do: 'stand' });
        await dad.walk([[-1.6, 7.6]]);
        put(s, { last_box: false, dad_with: ['box'], dad_gait: 'carry_box' });
        glide(s, SH.porch, 2);
        await dad.walk([[-1.0, 8.1]]);
        dad.here(false);
        await s.wait(1.5);
      },
    },
    // 3.5: Jack sits down on the lower step with the sheet and his father's pen; close: the bottom of her sheet, her 爱
    // and the room under it (`hanzi` insert). Then М8 (`hanzi#start` → `#end`: `hanzi`, `hanzi_crooked`)
    sign: {
      tells: ['sign:pen'], seconds: 6,
      from: () => merge(PORCH(), who('dad', [-1.6, 7.6, 180], 'stand'), SH.box),
      run: async s => {
        const jack = s.person('jack');
        await jack.walk([[LOW[0], LOW[1] - 0.25]]);
        await jack.turn(180);
        put(s, { jack_on: LOW, jack_a: LOW[0], jack_d: LOW[1], jack_do: 'write_step', jack_look: 'jack#letter' });
        s.tell('sign:pen');
        await s.wait(1.5);
        await s.move('hanzi_close', 1, { over: 0.8 });
        await s.wait(0.5);
      },
    },
    // 3.6: the sun going down behind the apple tree; in the shoebox the animals walk slower and slower — a goat lies
    // down, and is paper, then the deer (`menagerie_sleep`); the sheet in Jack's hands still trembles along the tiger's
    // folds, not along hers (close); the rusty bucket under the tree. Then the choice
    sunset: {
      after: ['sign'], tells: ['sunset:goat', 'sunset:fold'], seconds: 16,
      from: () => merge(PORCH(), SITTING(), who('dad', [-1.6, 7.6, 180], 'stand'), SH.box, { hanzi_close: 1, porch_lamp: 0.8 }),
      run: async s => {
        await s.move('hanzi_close', 0, { over: 0.6 });
        await s.move('menagerie_sleep', 0.22, { over: 2.5, ease: 'linear' });
        s.tell('sunset:goat');
        await s.move('menagerie_sleep', 0.45, { over: 3, ease: 'linear' });
        s.set('tremble', 1);
        await s.move('letter_close', 1, { over: 0.8 });
        s.tell('sunset:fold');
        await s.wait(4);
        await s.move('letter_close', 0, { over: 0.6 });
        await glide(s, SH.bucket, 2.5);
        await s.wait(1);
        await glide(s, SH.box, 2);
      },
    },
    // «Сложить Лаоху»: Jack on the step folds the sheet; then the final mini-game «Сложить» (`jack#letter`: `fold`)
    tiger: {
      after: ['sunset'], tells: ['tiger:fold'], seconds: 5,
      from: () => merge(PORCH(), SITTING(), who('dad', [-1.6, 7.6, 180], 'stand'), SH.sheet, { menagerie_sleep: 0.45, tremble: 1 }),
      run: async s => {
        s.person('jack').do('fold_sheet');
        await glide(s, SH.sheet, 1);
        s.tell('tiger:fold');
        await s.wait(2.5);
      },
    },
    // after «Сложить»: the sheet is the tiger again — Laohu stands up on the step, shakes himself, purrs; Jack takes
    // him into the crook of his arm and walks, humming (`tiger_up:hum`, «Язык дома» 1–2)
    tiger_up: {
      after: ['tiger'], tells: ['tiger_up:up', 'tiger_up:hum'], seconds: 15,
      from: () => merge(PORCH(), SITTING(), who('dad', [-1.6, 7.6, 180], 'stand'), SH.sheet, { menagerie_sleep: 0.45, tremble: 0, fold: 1 },
        { jack_do: 'fold_sheet' }),
      run: async s => {
        const jack = s.person('jack');
        put(s, { jack_with: [], fold: 0, laohu: 'taped', laohu_a: LOW[0] + 0.3, laohu_d: 6.86, laohu_e: 0.4, laohu_rise: 0, laohu_breath: 0, laohu_dir: 1 });
        jack.do('sitting_on_bed');
        jack.look('laohu');
        await s.move('laohu_rise', 1, { over: 1.6, ease: 'linear' });
        await s.move('laohu_breath', 1, { over: 1 });
        s.tell('tiger_up:up');
        await shake(s, 0.8);
        s.set('laohu_purr', 1);
        await s.wait(2);
        s.set('laohu_purr', 0);
        put(s, { jack_on: null, jack_do: 'stand' });
        jack.reach({ r: 'laohu#back' });
        await s.wait(0.6);
        jack.reach(null);
        put(s, { laohu_held: 'arm' });
        jack.gait('hum_carry');
        glide(s, SH.two, 2);
        s.tell('tiger_up:hum');
        await jack.walk([[0.4, 5.6], [0.8, 4.6]]);
        jack.gait(null);
        jack.do('stand');
        await jack.turn(200);
        await s.wait(1);
      },
    },
    // «Оставить письмом»: the porch lamp; Jack on the step with the sheet; then the final mini-game «Разгладить»
    // (`jack#letter`: `tremble` 1 → 0)
    letter_end: {
      after: ['sunset'], tells: ['letter_end:lamp'], seconds: 5,
      from: () => merge(PORCH(), SITTING(), who('dad', [-1.6, 7.6, 180], 'stand'), SH.box, { menagerie_sleep: 0.45, tremble: 1 }),
      run: async s => {
        await s.move('porch_lamp', 1, { over: 1.5 });
        s.tell('letter_end:lamp');
        await glide(s, SH.sheet, 2);
      },
    },
    // after «Разгладить»: he lays the sheet on the step; it lies flat, its folds no longer moving; close: her 爱 and his
    letter_flat: {
      after: ['letter_end'], tells: ['letter_flat:flat'], seconds: 10,
      from: () => merge(PORCH(), SITTING(), who('dad', [-1.6, 7.6, 180], 'stand'), SH.sheet, { menagerie_sleep: 0.45, tremble: 0, porch_lamp: 1 }),
      run: async s => {
        const jack = s.person('jack');
        jack.reach({ r: [-1.0, 6.86, 0.42] });
        await s.wait(1);
        put(s, { jack_with: [], step_sheet: true });
        jack.reach(null);
        jack.look('step_sheet');
        s.tell('letter_flat:flat');
        await s.move('letter_close', 1, { over: 0.8 });
        await s.wait(4.5);
        await s.move('letter_close', 0, { over: 0.8 });
        await s.wait(1);
      },
    },
    // «Отдать Лаоху ей»: Jack at her bucket under the apple tree, the fire lit; he holds the sheet out over it; then the
    // final mini-game «Огонь» (`jack#letter`: `fire`, `jack_reach`)
    smoke: {
      after: ['sunset'], tells: ['smoke:hold'], seconds: 8,
      from: () => merge(PORCH(), who('jack', [-0.3, 6.2, 180], 'stand', { with: ['letter'], look: 'apple#fire' }), who('dad', [-1.6, 7.6, 180], 'stand'), SH.wide,
        { menagerie_sleep: 0.45, tremble: 1, fire: 0 }),
      run: async s => {
        const jack = s.person('jack');
        glide(s, SH.fire, 3);
        await jack.walk([[2.4, 5.6], [3.75, 5.95]]);
        await jack.turn(195);
        s.set('fire', 0.6, 1);
        jack.look('apple#fire');
        s.tell('smoke:hold');
        await glide(s, SH.bucket, 1.5);
      },
    },
    // after «Огонь»: the sheet burns; the smoke goes up through the apple tree and in it, for a moment, something
    // striped (`stripes`); his words to her at `smoke_up:say`
    smoke_up: {
      after: ['smoke'], tells: ['smoke_up:say', 'smoke_up:stripes'], seconds: 13,
      from: () => merge(PORCH(), who('jack', [3.75, 5.95, 195], 'stand', { with: ['letter'], look: 'apple#fire', reach: { r: 'apple#fire' } }),
        who('dad', [-1.6, 7.6, 180], 'stand'), SH.bucket, { menagerie_sleep: 0.45, tremble: 1, fire: 1 }),
      run: async s => {
        const jack = s.person('jack');
        put(s, { jack_with: [], tremble: 0 });
        jack.reach(null);
        await s.wait(1.5);
        glide(s, SH.fire, 2);
        s.tell('smoke_up:say');
        await s.wait(4);
        glide(s, SH.up, 4);
        s.tell('smoke_up:stripes');
        await s.move('stripes', 1, { over: 4.5, ease: 'linear' });
        await s.wait(1);
      },
    },
    // the finales' last shot, by `father` and `ending` (scenario §9): all — at the tree / beside him on the step with the
    // phrasebook / his hand on Jack's back at the fire; apple — waves from the porch / gives him the phrasebook / «That's
    // how she did it» from the porch; later — locks the door and shakes his hand at the gate / carries the box out to
    // the car / at the door (the scenario's open window: Dad cannot stand inside the kitchen's window — notes.md).
    // Then Jack's two last lines over it (`dad_end:last`)
    dad_end: {
      tells: ['dad_end:say', 'dad_end:last'], seconds: 14,
      from: () => {
        const f = scene.get('father'), end = scene.get('ending');
        const base = merge(PORCH(), { menagerie_sleep: 1, porch_lamp: 1, tremble: 0 }, SH.wide);
        const jack = end === 'tiger' ? who('jack', [0.8, 4.6, 200], 'stand', { look: 'laohu' })
          : end === 'smoke' ? who('jack', [3.75, 5.95, 195], 'stand', { look: 'apple#fire' })
          : merge(SITTING(), { jack_with: [], jack_look: 'step_sheet' });
        const things = end === 'tiger' ? { laohu: 'taped', laohu_held: 'arm', laohu_a: 0.7, laohu_d: 4.7, laohu_e: 1.0 }
          : end === 'smoke' ? { fire: 0.6, stripes: 0 } : { step_sheet: true };
        const dad = f === 'all' ? (end === 'tiger' ? who('dad', [3.95, 5.15, 80], 'palm_on_tree', { reach: { r: 'apple#trunk' }, look: 'apple#trunk' })
            : end === 'smoke' ? who('dad', [2.6, 5.7, 120], 'stand', { look: 'apple#fire' })
            : who('dad', [-0.75, 6.4, 180], 'stand', { look: 'jack', with: ['phrasebook'] }))
          : f === 'apple' ? (end === 'letter' ? who('dad', [-1.2, 7.5, 180], 'stand', { look: 'jack', with: ['phrasebook'] }) : who('dad', [-1.0, 7.7, 180], 'stand', { look: 'jack' }))
          : end === 'letter' ? who('dad', [-1.4, 7.6, 180], 'stand', { with: ['box'], gait: 'carry_box', look: 'jack' })
          : who('dad', [-1.0, 7.95, 0], 'stand', { look: 'house#door' });
        return merge(base, things, jack, dad, away('mom', 'mark', 'mark_grown', 'boy_a', 'boy_b'));
      },
      run: async s => {
        const dad = s.person('dad'), jack = s.person('jack'), f = s.state.father, end = s.state.ending;
        if (f === 'all' && end === 'letter') {
          put(s, { dad_on: [-0.75, 6.58, 0.22], dad_a: -0.75, dad_d: 6.58, dad_turn: 180, dad_do: 'reading_seated', dad_look: 'dad#book' });
          await glide(s, SH.two, 2);
        } else if (f === 'all' && end === 'smoke') {
          await dad.walk([[3.25, 5.95]]);
          await dad.turn(165);
          dad.reach({ r: 'jack#back' });
          glide(s, SH.fire, 2);
        } else if (f === 'all') {
          await s.wait(1);
          dad.look('laohu');
        } else if (f === 'apple' && end === 'tiger') {
          await dad.do('wave', { loop: false });
          dad.do('stand');
        } else if (f === 'apple' && end === 'letter') {
          await dad.walk([[-0.55, 6.15]]);
          dad.reach({ r: 'jack#hands' });
          await s.wait(0.8);
          put(s, { dad_with: [], jack_with: ['phrasebook'], dad_reach: null });
        } else if (f === 'later' && end === 'tiger') {
          dad.reach({ r: 'house#door' });
          await s.wait(1.2);
          dad.reach(null);
          await dad.walk([[-0.6, 6.2], [0.5, 4.0]]);
          await dad.turn(0);
          await s.all(dad.do('handshake', { loop: false }), jack.do('handshake', { loop: false }));
          dad.do('stand');
          jack.do('stand');
        } else if (f === 'later' && end === 'letter') {
          await dad.walk([[-0.6, 6.2], [0.6, 2.0], [0.8, -0.5]]);
          dad.here(false);
        } else {
          await dad.turn(180);
          dad.look('jack');
        }
        s.tell('dad_end:say');
        await s.wait(4);
        glide(s, SH.wide, 3);
        s.tell('dad_end:last');
        await s.wait(4);
      },
    },
  };
}

return { film };
