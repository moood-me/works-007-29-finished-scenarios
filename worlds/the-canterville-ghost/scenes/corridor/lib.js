// What the corridor's paintings share: its walls (a panelled oak dado to 1 m, plaster above, a frieze under the
// beams), the Tudor arch over its doors and windows, an old door's leaf, an ancestor's portrait in its dark frame.
// Metres, y down, from the foot of a wall.
const OAK = '#4a3222';
const OAK_LIGHT = '#5d4029';
const OAK_DARK = '#2e1f15';
const PLASTER = '#a89a86';
const STONE = '#857a6c';
const STONE_DARK = '#6a6156';

// the wall from x0 to x1, `top` metres high: plaster, the dado to 1 m in panels, its rail, the skirting, the frieze
function wall(g, x0, x1, top) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -top - 0.02, w, top + 0.04);
  g.clip();
  g.fillStyle = PLASTER;
  g.fillRect(x0, -top - 0.02, w, top + 0.04);
  g.fillStyle = OAK;
  g.fillRect(x0, -1.0, w, 1.0);
  g.strokeStyle = OAK_DARK;
  g.lineWidth = 0.03;
  for (let x = Math.floor(x0 / 0.5) * 0.5; x < x1; x += 0.5) g.strokeRect(x + 0.05, -0.88, 0.4, 0.7);
  g.fillStyle = OAK_LIGHT;
  g.fillRect(x0, -1.04, w, 0.06);
  g.fillStyle = OAK_DARK;
  g.fillRect(x0, -0.12, w, 0.14);
  g.fillStyle = '#8e7e66';
  g.fillRect(x0, -top - 0.02, w, 0.22);
  g.fillStyle = OAK_DARK;
  g.fillRect(x0, -top + 0.2, w, 0.04);
  g.restore();
}

// a four-centred Tudor arch from x0 to x1, from y1 (its foot) up to y0 (its crown), `rise` metres of arch: the path
function arch(g, x0, x1, y0, y1, rise) {
  const m = (x0 + x1) / 2;
  const q = (x1 - x0) * 0.3;
  g.beginPath();
  g.moveTo(x0, y1);
  g.lineTo(x0, y0 + rise);
  g.quadraticCurveTo(x0 + 0.02, y0 + rise * 0.15, m - q, y0 + rise * 0.05);
  g.lineTo(m, y0);
  g.lineTo(m + q, y0 + rise * 0.05);
  g.quadraticCurveTo(x1 - 0.02, y0 + rise * 0.15, x1, y0 + rise);
  g.lineTo(x1, y1);
  g.closePath();
}

// an opening from x0 to x1, up to y0 from y1, under its arch: the dressed stone round it painted, the opening cut through
function opening(g, x0, x1, y0, y1, rise) {
  g.fillStyle = STONE;
  arch(g, x0 - 0.13, x1 + 0.13, y0 - 0.13, y1, rise + 0.04);
  g.fill();
  g.strokeStyle = STONE_DARK;
  g.lineWidth = 0.02;
  arch(g, x0 - 0.06, x1 + 0.06, y0 - 0.06, y1, rise + 0.02);
  g.stroke();
  g.globalCompositeOperation = 'destination-out';
  arch(g, x0, x1, y0, y1, rise);
  g.fill();
  g.globalCompositeOperation = 'source-over';
}

// a door's leaf from x0 to x1 (its hinge side either), 2.2 m high under its arch: old oak planks, two iron strap
// hinges, a ring for a handle near the free edge `free` (x)
function leaf(g, x0, x1, free) {
  g.fillStyle = '#563826';
  arch(g, x0, x1, -2.2, 0, 0.28);
  g.fill();
  g.save();
  arch(g, x0, x1, -2.2, 0, 0.28);
  g.clip();
  g.strokeStyle = '#3a2618';
  g.lineWidth = 0.014;
  for (let x = x0 + 0.16; x < x1; x += 0.16) {
    g.beginPath();
    g.moveTo(x, -2.2);
    g.lineTo(x, 0);
    g.stroke();
  }
  g.restore();
  g.fillStyle = '#2a2622';
  const hinge = free > (x0 + x1) / 2 ? x0 : x1;
  const dir = free > hinge ? 1 : -1;
  for (const y of [-1.75, -0.45]) {
    g.fillRect(Math.min(hinge, hinge + dir * 0.62), y, 0.62, 0.05);
    g.beginPath();
    g.arc(hinge + dir * 0.62, y + 0.025, 0.04, 0, Math.PI * 2);
    g.fill();
  }
  g.strokeStyle = '#3a342c';
  g.lineWidth = 0.02;
  g.beginPath();
  g.arc(free, -1.0, 0.045, 0, Math.PI * 2);
  g.stroke();
  g.fillStyle = '#2a2622';
  g.fillRect(free - 0.03, -1.08, 0.06, 0.05);
}

// an ancestor's portrait from x (its middle), its foot at y, w by h: a dark gilt frame, a dim face and ruff or lace
// over a sombre coat on a brown ground — `seed` says whose (a man, a lady)
function portrait(g, x, y, w, h, seed) {
  g.fillStyle = '#5a4424';
  g.fillRect(x - w / 2 - 0.07, y - h - 0.07, w + 0.14, h + 0.14);
  g.fillStyle = '#7a6034';
  g.fillRect(x - w / 2 - 0.04, y - h - 0.04, w + 0.08, h + 0.08);
  g.fillStyle = '#2e2418';
  g.fillRect(x - w / 2, y - h, w, h);
  const lady = seed % 2 === 1;
  const cx = x;
  const fy = y - h * 0.62;
  // the coat or gown
  g.fillStyle = lady ? '#3a2a40' : '#1e1c1c';
  g.beginPath();
  g.moveTo(cx - w * 0.42, y);
  g.quadraticCurveTo(cx - w * 0.36, fy + h * 0.2, cx, fy + h * 0.14);
  g.quadraticCurveTo(cx + w * 0.36, fy + h * 0.2, cx + w * 0.42, y);
  g.closePath();
  g.fill();
  // the ruff or the lace collar
  g.fillStyle = '#c8bea8';
  g.beginPath();
  g.ellipse(cx, fy + h * 0.15, w * (lady ? 0.2 : 0.16), h * 0.05, 0, 0, Math.PI * 2);
  g.fill();
  // the face, the hair
  g.fillStyle = '#c09878';
  g.beginPath();
  g.ellipse(cx, fy, w * 0.12, h * 0.1, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = lady ? '#4a3220' : '#2a221c';
  g.beginPath();
  g.ellipse(cx, fy - h * 0.06, w * (lady ? 0.15 : 0.13), h * 0.06, 0, Math.PI, Math.PI * 2);
  g.fill();
  g.fillStyle = '#3a2a1c';
  for (const s of [-1, 1]) {
    g.beginPath();
    g.arc(cx + s * w * 0.045, fy - h * 0.005, w * 0.012, 0, Math.PI * 2);
    g.fill();
  }
  // the varnish gone brown over it
  g.fillStyle = 'rgba(90,60,20,0.18)';
  g.fillRect(x - w / 2, y - h, w, h);
}

// The corridor's pieces (stage 5; modules/beats; the contract: game.md «Stage 5 — pieces»; notes.md «Pieces»): each
// its `after`, its moments (`tells`), its own seconds, the values it begins at (`from` — never who is here, their
// faces, the game's variant keys: those are the game's) and its sequence (`run`). Sir Simon's light follows him by the
// script (ghost_d = simon_d − 0.6).
// the camera as the scene has it, nothing framed
const CAM0 = { camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
  camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0 };
// the corridor's own keys at rest: the night, the doors shut, nothing on the floor, no candles
const NIGHT = { evening: 0, sconces: 0, door_parents: 90, door_virginia: 270, door_twins: 270, bottle: 'none', spook: 'none', armchair: false,
  stand_candle: true, pillow: false, pillow_a: 1.9, pillow_d: 10.2, pillow_e: 1.5, pillow_spin: 0, ghost_light: 0, otis_candle: 0, virginia_candle: 0 };
// one of the people where they stand: across, along, turn, what they do, and the rest of their keys at rest
function at(id, a, d, turn, does = 'stand', more = {}) {
  const v = { [`${id}_a`]: a, [`${id}_d`]: d, [`${id}_turn`]: turn, [`${id}_do`]: does, [`${id}_look`]: null, [`${id}_reach`]: null,
    [`${id}_on`]: null, [`${id}_with`]: [], [`${id}_wear`]: null, [`${id}_gait`]: null };
  for (const [k, x] of Object.entries(more)) v[`${id}_${k}`] = x;
  return v;
}
// Sir Simon at a place (his light 0.6 m before him)
const simon = (a, d, turn, does = 'stand', more = {}) => ({ ...at('simon', a, d, turn, does, more), ghost_d: d - 0.6 });
// the armchair by her door and Mr Otis in it (the seat: notes.md 4С.3)
const SEAT = [1.4, 7.32, 0.45];
const SEAT_FLOOR = [1.4, 7.32];
const seated = (does, more = {}) => at('otis', 1.4, 7.32, 180, does, { on: SEAT, with: ['book'], ...more });
// the evening (2.4, 4С.2): dusk at the windows, the sconces lit
const EVENING = { ...NIGHT, evening: 1, sconces: 1 };
// the turnip ghost standing at the corner: where the boys stand clear of it (it covers across −1.9…−0.6)
const BOYS = { ...at('twin_star', -0.35, 7.5, 200), ...at('washington', -0.45, 9.1, 200), ...at('twin_stripes', 0.1, 8.3, 215) };
// where he goes through: the far door (the Tapestry Chamber's), the right wall between her door and the twins'
const FAR_DOOR = [0, 13.7];
const WALL_R = [1.85, 8.4];
// 1.2: she behind her door, at its crack (М2 opened it so far), her candle lit, looking out at him
const CRACK = { ...at('virginia', 2.35, 6.6, 245, 'hold_candle', { with: ['candle_l'], look: 'simon' }), virginia_candle: 1 };
// 4С.3–4С.4 after the farewell: what `plays` decides (his full light and array, or his garden look and a faint light)
// is the game's and the farewell's — a piece cut to here leaves both as they are
const LATE = v => {
  delete v.ghost_light;
  delete v.simon_wear;
  return v;
};
// a camera of the piece's own: the eye at [across, along] (camera_h over the scene's eye), looking level at [across,
// along] — always on down the corridor: behind the start the corridor has no end wall (it is built to be seen forward)
const CAM = ([ea, ed], [ta, td], h = 0) => ({ camera_target: null, camera_x: ea, camera_z: ed, camera_h: h,
  camera_yaw: (Math.atan2(ta - ea, td - ed) * 180) / Math.PI, camera_pitch: 0 });
// at her door's crack: he stands just beyond its free edge and looks back into it — toward the viewer, so his face
// reads — seen from down the corridor's middle
const CRACK_SPOT = [1.45, 7.3];
const CRACK_TURN = 140;
const CRACK_LOOK = [2.0, 6.85, 1.5];
const AT_CRACK = CAM([0.55, 5.5], [1.5, 7.3]);
// the two at her door (4С.2), from down the corridor's middle: both in profile, face to face
const AT_DOOR = CAM([0.5, 3.9], [1.35, 6.5]);
// he at her door before her, Mr Otis asleep in the chair behind (4С.3)
const AT_FAREWELL = CAM([0.1, 3.4], [1.2, 6.7]);
// the camera moved to a camera of the piece's own, over seconds (from the scene's, or from another of its own)
const glide = (s, cam, over = 2) => s.all(...['camera_x', 'camera_z', 'camera_h', 'camera_yaw', 'camera_pitch'].map(k => s.move(k, cam[k], { over })));
// seen from her doorway, over her shoulder, down the corridor
const FROM_DOOR = { camera_target: null, camera_x: 1.75, camera_z: 4.6, camera_yaw: -6, camera_h: 0 };

function film(scene) {
  const cast = () => scene.kit.cast.characters;
  // his look by `plays` (the game's): the full array, or the garden look without his irons
  const array = s => s.person('simon').wear(s.get('plays') ? null : cast().simon_garden);
  // he fades out as he goes into a wall: his light down, then gone
  const fade = async (s, over = 1.2) => {
    await s.move('ghost_light', 0, { over });
    s.person('simon').here(false);
  };
  return {
    // 1.1: he walks slowly from the far end toward her door, his light coming; she is behind it (М2 next)
    chains: {
      after: [], tells: ['chains:near'], seconds: 8,
      from: () => ({ ...CAM0, ...NIGHT, ghost_light: 1, ...simon(0, 12.4, 180), ...at('virginia', 2.5, 6.3, 270, 'hold_candle', { with: ['candle_l'] }),
        virginia_candle: 1, camera_target: 'door_virginia', camera_shot: 1.6, camera_frame: [0.62, 0.5] }),
      run: async s => {
        const him = s.person('simon');
        await s.wait(0.8);
        await him.walk([[0.3, 9.6], [0.7, 7.4]]);
        await him.turn(120);
        him.look('door_virginia#handle');
        s.tell('chains:near');
        await s.wait(1);
      },
    },
    // 1.2: Mr Otis opens his door, offers the oil, sets the bottle on the little table, goes back in
    oil: {
      after: [], tells: ['oil:speak', 'oil:set', 'oil:shut'], seconds: 14,
      from: () => {
        const v = { ...CAM0, ...NIGHT, ghost_light: 1, ...simon(0.2, 4.6, 230, 'stand', { look: 'otis' }),
          ...at('otis', -2.55, 6.1, 90, 'stand', { with: ['bottle', 'candle_l'] }), otis_candle: 1,
          ...CRACK };
        delete v.door_virginia; // as М2 left it
        return v;
      },
      run: async s => {
        const otis = s.person('otis');
        await s.move('door_parents', 0, { over: 1.2 });
        await otis.walk([[-1.6, 6.1]]);
        s.camera({ target: 'otis', shot: 'medium' });
        await otis.turn(130);
        otis.look('simon');
        otis.do('offer');
        s.tell('oil:speak');
        await s.wait(3);
        s.camera({ target: null });
        otis.do('stand');
        await otis.walk([[0.2, 5.4], [1.05, 4.6]]);
        await otis.turn(90);
        otis.look('table#top');
        otis.reach({ r: 'table#top' });
        await s.wait(0.6);
        s.set('bottle', 'table');
        otis.with(['candle_l']);
        otis.reach(null);
        s.tell('oil:set');
        await s.wait(0.6);
        otis.look(null);
        await otis.walk([[-0.6, 5.6], [-1.6, 6.1], [-2.55, 6.1]]);
        await s.move('door_parents', 90, { over: 1 });
        otis.here(false);
        s.set('otis_candle', 0);
        s.tell('oil:shut');
      },
    },
    // 1.2: he smashes the bottle and howls; a pillow flies at his head from the twins' door; he backs along the right
    // wall to her door's crack («Доброй ночи» next: a touch on simon#chest)
    smash: {
      after: ['oil'], tells: ['smash:howl', 'smash:pillow', 'smash:crack'], seconds: 12,
      from: () => {
        const v = { ...CAM0, ...NIGHT, ghost_light: 1, bottle: 'table', ...simon(0.2, 4.6, 230, 'stand', { look: 'table#top' }), ...CRACK };
        delete v.door_virginia; // as М2 left it
        return v;
      },
      run: async s => {
        const him = s.person('simon');
        him.look('table#top');
        await him.walk([[1.0, 4.55]]);
        await him.turn(90);
        const smash = him.do('smash', { loop: false });
        await s.wait(0.9);
        s.set('bottle', 'none');
        him.with(['bottle']);
        await s.wait(1.3);
        him.with([]);
        s.set('bottle', 'smashed');
        him.look(null);
        s.tell('smash:howl');
        await smash;
        await s.move('door_twins', 322, { over: 0.4 });
        s.set('pillow', true);
        s.tell('smash:pillow');
        await s.path(['pillow_a', 'pillow_d', 'pillow_e', 'pillow_spin'],
          [[1.9, 10.2, 1.5, 0], [1.3, 6.6, 1.95, 300], [0.85, 3.6, 1.6, 620], [0.6, 2.4, 0.05, 720]], { over: 1.1, ease: 'linear' });
        him.look('door_twins');
        s.move('door_twins', 276, { over: 0.8 });
        await him.walk([[1.3, 5.5], [1.2, 7.0], CRACK_SPOT]);
        await him.turn(CRACK_TURN);
        him.look(CRACK_LOOK);
        s.cut({ ...AT_CRACK });
        s.tell('smash:crack');
        await s.wait(1);
      },
    },
    // after «Good night, sir»: he stops dead, looks into the crack, his light sinks; he walks into the right wall
    wish_stop: {
      after: ['smash'], tells: ['wish_stop:look', 'wish_stop:gone'], seconds: 8,
      from: () => ({ ...CAM0, ...NIGHT, ghost_light: 1, bottle: 'smashed', ...simon(...CRACK_SPOT, CRACK_TURN, 'stand', { look: CRACK_LOOK }),
        ...CRACK, door_virginia: 292, ...AT_CRACK }),
      run: async s => {
        const him = s.person('simon');
        him.mood('sad');
        s.move('ghost_light', 0.5, { over: 2 });
        s.tell('wish_stop:look');
        await s.wait(2.5);
        him.look(null);
        await him.walk([WALL_R]);
        await fade(s);
        s.tell('wish_stop:gone');
      },
    },
    // no «Good night»: he walks past the crack into the wall
    pass_by: {
      after: ['smash'], tells: ['pass_by:gone'], seconds: 6,
      from: () => ({ ...CAM0, ...NIGHT, ghost_light: 1, bottle: 'smashed', ...simon(...CRACK_SPOT, CRACK_TURN, 'stand', { look: CRACK_LOOK }), ...CRACK,
        door_virginia: 292, ...AT_CRACK }),
      run: async s => {
        const him = s.person('simon');
        him.look(null);
        await him.walk([WALL_R]);
        await fade(s);
        s.tell('pass_by:gone');
      },
    },
    // the door creaked (М2) and no «Good night»: he turns to the crack and stares, burning, then goes into the wall
    creak_look: {
      after: ['smash'], tells: ['creak_look:stare', 'creak_look:gone'], seconds: 7,
      from: () => ({ ...CAM0, ...NIGHT, ghost_light: 1, bottle: 'smashed', ...simon(...CRACK_SPOT, CRACK_TURN, 'stand'), ...CRACK, door_virginia: 292,
        ...AT_CRACK }),
      run: async s => {
        const him = s.person('simon');
        await him.turn(CRACK_TURN);
        him.look(CRACK_LOOK);
        him.mood('angry');
        s.tell('creak_look:stare');
        await s.wait(2.5);
        him.look(null);
        await him.walk([WALL_R]);
        await fade(s);
        s.tell('creak_look:gone');
      },
    },
    // 1.6 «заперла»: in the dark he walks up and down before her shut door, the chains clinking, then he is gone
    pacing: {
      after: [], tells: ['pacing:clink', 'pacing:gone'], seconds: 10,
      from: () => ({ ...CAM0, ...NIGHT, ghost_light: 1, ...simon(0.6, 6.6, 0), camera_z: 1.5 }),
      run: async s => {
        const him = s.person('simon');
        await him.walk([[0.6, 8.0]]);
        s.tell('pacing:clink');
        await him.walk([[0.6, 5.0]]);
        s.tell('pacing:clink');
        await him.walk([[0.9, 6.4], WALL_R]);
        await fade(s);
        s.tell('pacing:gone');
      },
    },
    // 1.6 «сказала»: the empty corridor at night; the twins' door opens a crack (a cry), a groan somewhere
    peas_night: {
      after: [], tells: ['peas_night:cry', 'peas_night:groan'], seconds: 6,
      from: () => ({ ...CAM0, ...NIGHT, ...at('twin_star', 2.5, 10.3, 270, 'stand'), camera_z: 2 }),
      run: async s => {
        await s.wait(1);
        await s.move('door_twins', 300, { over: 0.6 });
        s.tell('peas_night:cry');
        await s.wait(2);
        s.tell('peas_night:groan');
        await s.move('door_twins', 270, { over: 0.8 });
        await s.wait(1);
      },
    },
    // 2.4: the boys stand the turnip ghost up at the corner (close on its placard); she walks to her place across them
    turnip: {
      after: [], tells: ['turnip:placard', 'turnip:stop'], seconds: 12,
      from: () => ({ ...CAM0, ...EVENING, spook: 'making', ...at('twin_star', -1.5, 7.2, 140, 'stand', { look: 'washington' }),
        ...at('washington', -1.25, 8.9, 165, 'offer', { look: 'twin_star' }), ...at('twin_stripes', -0.45, 8.3, 200, 'stand', { look: 'twin_star' }),
        ...at('virginia', 1.8, 6.3, 230, 'stand', { wear: cast().virginia, look: 'twin_stripes' }) }),
      run: async s => {
        const [star, wash, stripes, her] = ['twin_star', 'washington', 'twin_stripes', 'virginia'].map(id => s.person(id));
        await s.wait(1.5);
        wash.do('stand');
        await s.all(star.walk([[-0.35, 7.5]]), wash.walk([[-0.45, 9.1]]), stripes.walk([[0.1, 8.3]]));
        s.set('spook', 'standing');
        await s.all(star.turn(200), wash.turn(200), stripes.turn(215));
        for (const b of [star, wash, stripes]) b.look('spook#turnip');
        s.camera({ target: 'spook#placard', shot: 'medium' });
        s.tell('turnip:placard');
        await s.wait(3);
        s.camera({ target: 'twin_stripes', shot: 'wide' });
        her.look('twin_star');
        await her.walk([[0.9, 7.6]]);
        await her.turn(250);
        for (const b of [star, wash, stripes]) b.look('virginia');
        s.tell('turnip:stop');
        await s.wait(1);
      },
    },
    // 2.5 «warn»: she walks from her door to the far door with her candle, driven by М4 (virginia_d 6.3 → 13.4)
    candle_walk: {
      after: [], tells: ['candle_walk:door'], seconds: 8,
      from: () => ({ ...CAM0, ...NIGHT, spook: 'standing', door_virginia: 330, ...at('virginia', 1.8, 6.3, 0, 'hold_candle', { with: ['candle_l'] }),
        virginia_candle: 1, camera_target: 'virginia', camera_shot: 'medium' }),
      run: async s => {
        await s.until(() => (s.get('virginia_d') ?? 0) >= 13.2);
        await s.person('virginia').walk([[0.35, 13.6]]);
        s.tell('candle_walk:door');
      },
    },
    // 2.5 midnight: he walks up to the turnip ghost, looks it over, runs a finger along the placard, snorts and walks
    // past to the far door; the twins' door a crack
    route: {
      after: [], tells: ['route:stop', 'route:snort', 'route:gone'], seconds: 14,
      from: () => ({ ...CAM0, ...NIGHT, spook: 'standing', ghost_light: 1, ...simon(0.1, 3.2, 0), camera_target: 'simon', camera_shot: 'full' }),
      run: async s => {
        const him = s.person('simon');
        await him.walk([[0.0, 7.6], [-0.5, 8.8]]);
        await him.turn(235);
        him.look('spook#turnip');
        s.camera({ target: 'simon', shot: 'medium' });
        s.tell('route:stop');
        await s.wait(2);
        him.look('spook#placard');
        him.reach({ r: 'spook#placard' });
        await s.wait(1.6);
        him.reach(null);
        him.mood('disgusted');
        s.tell('route:snort');
        s.move('door_twins', 290, { over: 0.6 });
        await s.wait(1);
        him.look(null);
        s.camera({ target: null });
        await him.walk([[0.1, 11.0], FAR_DOOR]);
        await fade(s);
        s.tell('route:gone');
      },
    },
    // 2.5 midnight: he comes round the corner onto the turnip ghost, starts back, runs for the far door; behind the
    // twins' door the boys laugh
    fright: {
      after: [], tells: ['fright:shriek', 'fright:gone', 'fright:laugh'], seconds: 10,
      from: () => ({ ...CAM0, ...NIGHT, spook: 'standing', ghost_light: 1, door_twins: 300, ...simon(-2.8, 9.5, 90),
        ...at('twin_star', 2.45, 10.25, 250, 'laugh_bend'), ...at('twin_stripes', 2.6, 10.6, 250, 'laugh_bend'),
        ...at('washington', 2.8, 10.0, 250, 'stand'), ...at('virginia', 2.8, 10.5, 250, 'stand', { wear: cast().virginia }) }),
      run: async s => {
        const him = s.person('simon');
        await him.walk([[-1.4, 9.4]]);
        await him.turn(180);
        him.look('spook#turnip');
        await him.go('recoil', { to: [-1.25, 10.2], turn: 180 });
        s.camera({ target: 'simon', shot: 'close', glide: 0.4 });
        s.tell('fright:shriek');
        await s.wait(1);
        s.camera({ target: null });
        him.look(null);
        await him.walk([[-0.4, 11.4], FAR_DOOR], { gait: 'run' });
        await fade(s, 0.6);
        s.tell('fright:gone');
        await s.move('door_twins', 315, { over: 0.5 });
        s.tell('fright:laugh');
        await s.wait(1);
      },
    },
    // 2.4 «defend»: she stands before the boys at the corner and holds out her hand; then goes into her room
    defend: {
      after: [], tells: ['defend:say', 'defend:go'], seconds: 10,
      from: () => ({ ...CAM0, ...EVENING, spook: 'standing', ...BOYS, twin_star_look: 'virginia', washington_look: 'virginia',
        twin_stripes_look: 'virginia', ...at('virginia', 0.9, 7.6, 250, 'stand', { wear: cast().virginia, look: 'twin_star' }),
        door_virginia: 300, camera_target: 'twin_stripes', camera_shot: 'wide' }),
      run: async s => {
        const her = s.person('virginia');
        her.do('offer');
        s.tell('defend:say');
        await s.wait(3);
        her.do('stand');
        her.look(null);
        s.move('door_virginia', 330, { over: 0.8 });
        await her.walk([[1.75, 6.4], [2.6, 6.3]]);
        await s.move('door_virginia', 270, { over: 0.8 });
        her.here(false);
        s.tell('defend:go');
      },
    },
    // 2.5 the next morning: the twins run down the corridor toward the Tapestry Chamber
    gallop: {
      after: [], tells: ['gallop:run'], seconds: 6,
      from: () => ({ ...CAM0, ...NIGHT, evening: 1, ...at('twin_stripes', 0.35, 2.2, 0), ...at('twin_star', -0.35, 1.6, 0) }),
      run: async s => {
        const star = s.person('twin_star'), stripes = s.person('twin_stripes');
        s.tell('gallop:run');
        const first = stripes.walk([[0.4, 12.6]], { gait: 'run' });
        await s.wait(0.3);
        await star.walk([[-0.4, 12.9]], { gait: 'run' });
        await first;
        await s.all(star.turn(160), stripes.turn(200));
        star.do('laugh_bend');
        stripes.do('laugh_bend');
        await s.wait(0.6);
      },
    },
    // 4С.2: the armchair by her door; Mr Otis holds out his hand to her (М9 next: she takes it)
    word: {
      after: [], tells: ['word:hand'], seconds: 4,
      from: () => ({ ...CAM0, ...EVENING, armchair: true, door_virginia: 330, ...at('otis', 0.95, 6.35, 90, 'stand', { wear: cast().otis, look: 'virginia' }),
        ...at('virginia', 1.8, 6.35, 270, 'stand', { wear: cast().virginia, look: 'otis' }), ...AT_DOOR }),
      run: async s => {
        await s.wait(0.8);
        s.person('otis').do('offer');
        await s.wait(1.2);
        s.tell('word:hand');
        await s.wait(0.8);
      },
    },
    // after М9: he sits down in the armchair with the book
    chair_sit: {
      after: ['word'], tells: ['chair_sit:sat'], seconds: 6,
      from: () => ({ ...CAM0, ...EVENING, armchair: true, door_virginia: 330, ...at('otis', 0.95, 6.35, 90, 'stand', { wear: cast().otis, look: 'virginia' }),
        ...at('virginia', 1.8, 6.35, 270, 'stand', { wear: cast().virginia, look: 'otis' }), ...AT_DOOR }),
      run: async s => {
        const otis = s.person('otis');
        otis.reach(null);
        s.person('virginia').reach(null);
        otis.do('stand');
        otis.look(null);
        await otis.go('faint_sit', { to: SEAT_FLOOR, turn: 180 });
        otis.on(SEAT);
        otis.with(['book']);
        otis.do('read_seated');
        s.person('virginia').look('otis');
        s.tell('chair_sit:sat');
        await s.wait(0.8);
      },
    },
    // 4С.3: Mr Otis asleep in the chair; Sir Simon walks soundlessly from the far end to her door; she opens it; he bows
    farewell: {
      after: [], tells: ['farewell:far', 'farewell:door', 'farewell:bow'], seconds: 16,
      from: () => {
        const v = { ...CAM0, ...NIGHT, armchair: true, ...simon(0, 12.4, 180), ...seated('doze', { wear: cast().otis }),
          ...at('virginia', 2.55, 6.3, 270, 'stand') };
        delete v.ghost_light; // the game's, by `plays`
        return v;
      },
      run: async s => {
        const him = s.person('simon'), her = s.person('virginia');
        array(s);
        s.set('ghost_light', s.get('plays') ? 1 : 0.4);
        s.tell('farewell:far');
        await s.wait(1.5);
        await him.walk([[0.3, 9.0], [0.75, 6.4]]);
        s.move('door_virginia', 330, { over: 1 });
        await her.walk([[1.75, 6.3]]);
        await her.turn(265);
        her.look('simon');
        s.tell('farewell:door');
        await him.turn(85);
        him.look('virginia');
        await glide(s, AT_FAREWELL, 1.5);
        await him.go('bow_deep', { to: [0.75, 6.35], turn: 85 });
        s.tell('farewell:bow');
        await s.wait(0.6);
      },
    },
    // he turns and walks away down the corridor; seen from her doorway, over her shoulder
    farewell_go: {
      after: ['farewell'], tells: ['farewell_go:end'], seconds: 6,
      from: () => LATE({ ...CAM0, ...NIGHT, armchair: true, door_virginia: 330, ...simon(0.75, 6.35, 85, 'stand', { look: 'virginia' }),
        ...seated('doze', { wear: cast().otis }), ...at('virginia', 1.75, 6.3, 265, 'stand', { look: 'simon' }) }),
      run: async s => {
        const him = s.person('simon'), her = s.person('virginia');
        array(s);
        s.cut({ ...FROM_DOOR });
        him.look(null);
        await him.walk([[0.3, 9.0], [0.0, 11.6]]);
        her.look('simon');
        s.tell('farewell_go:end');
        await s.wait(0.6);
      },
    },
    // after М8 (she crept past the chair): she walks on to him at the far end; he turns to her
    pass_chair: {
      after: ['farewell_go'], tells: ['pass_chair:met'], seconds: 8,
      from: () => LATE({ ...CAM0, ...NIGHT, armchair: true, door_virginia: 330, ...simon(0.0, 11.6, 0), ...seated('doze', { wear: cast().otis }),
        ...at('virginia', 0.6, 8.2, 0, 'stand') }),
      run: async s => {
        const him = s.person('simon'), her = s.person('virginia');
        array(s);
        s.cut({ ...CAM0, camera_target: 'simon', camera_shot: 'full' });
        await her.walk([[0.75, 10.9]]);
        await him.turn(160);
        him.look('virginia');
        her.look('simon');
        await her.turn(330);
        s.camera({ target: 'simon', shot: 'medium', frame: [0.4, 0.45] });
        s.tell('pass_chair:met');
        await s.wait(1.2);
      },
    },
    // after М8в (she stayed on her threshold): he walks on to the far door and fades into the wall; she shuts her door
    stay_door: {
      after: ['farewell_go'], tells: ['stay_door:stop', 'stay_door:gone', 'stay_door:shut'], seconds: 10,
      from: () => LATE({ ...CAM0, ...NIGHT, armchair: true, door_virginia: 330, ...simon(0.0, 11.6, 0), ...seated('doze', { wear: cast().otis }),
        ...at('virginia', 1.75, 6.3, 265, 'stand', { look: 'simon' }), ...FROM_DOOR }),
      run: async s => {
        const him = s.person('simon'), her = s.person('virginia');
        array(s);
        await him.walk([[0.0, 12.6]]);
        s.tell('stay_door:stop');
        await s.wait(2.5);
        await him.walk([FAR_DOOR]);
        await fade(s, 1.6);
        s.tell('stay_door:gone');
        her.look(null);
        await her.walk([[2.6, 6.3]]);
        await s.move('door_virginia', 270, { over: 1 });
        s.tell('stay_door:shut');
      },
    },
    // after М8б (she woke him): Mr Otis gets up and faces the far end; Sir Simon bows (or nods) and fades; Papa takes her hand
    wake_papa: {
      after: ['farewell_go'], tells: ['wake_papa:up', 'wake_papa:bow', 'wake_papa:gone', 'wake_papa:hand'], seconds: 14,
      from: () => LATE({ ...CAM0, ...NIGHT, armchair: true, door_virginia: 330, ...simon(0.0, 11.6, 0), ...seated('doze', { wear: cast().otis }),
        ...at('virginia', 1.0, 6.9, 30, 'stand', { look: 'otis' }) }),
      run: async s => {
        const him = s.person('simon'), otis = s.person('otis'), her = s.person('virginia');
        array(s);
        s.cut({ ...CAM0, camera_target: 'otis', camera_shot: 'medium' });
        her.reach(null);
        otis.mood('surprised');
        otis.with([]);
        otis.on(null);
        await otis.do('stand_up', { loop: false });
        await otis.turn(340);
        otis.look('simon');
        otis.mood('neutral');
        s.tell('wake_papa:up');
        s.cut({ ...CAM0, ...CAM([0.6, 4.4], [0.2, 11.6]) });
        await him.turn(180);
        him.look('otis');
        await s.wait(1.2);
        if (s.get('plays')) await him.go('bow_deep', { to: [0.0, 11.6], turn: 180 });
        else {
          him.look([0.6, 9.5, 0.6]);
          await s.wait(0.8);
          him.look('otis');
        }
        s.tell('wake_papa:bow');
        await s.wait(1);
        await fade(s, 2);
        s.tell('wake_papa:gone');
        await her.walk([[1.0, 6.75]]);
        await her.turn(60);
        otis.look('virginia');
        her.look('otis');
        otis.reach({ l: 'virginia#hand_r' });
        her.reach({ r: 'otis#hand_l' });
        s.tell('wake_papa:hand');
        await s.wait(1);
      },
    },
    // 4С.5: the silence wakes him; her room is empty; he takes the chair's candle and goes to the far door
    woken: {
      after: [], tells: ['woken:up', 'woken:gone'], seconds: 12,
      from: () => ({ ...CAM0, ...NIGHT, armchair: true, door_virginia: 360, ...seated('doze', { wear: cast().otis }), camera_target: 'otis', camera_shot: 'medium' }),
      run: async s => {
        const otis = s.person('otis');
        await s.wait(1.2);
        otis.mood('surprised');
        otis.with([]);
        otis.on(null);
        await otis.do('stand_up', { loop: false });
        await otis.walk([[1.5, 6.3]]);
        await otis.turn(90);
        otis.look([2.8, 6.4, 1.2]);
        s.tell('woken:up');
        await s.wait(1.5);
        otis.look('chair_candle#flame');
        await otis.walk([[0.95, 7.0]]);
        await otis.turn(110);
        otis.reach({ r: 'chair_candle#flame' });
        await s.wait(0.7);
        s.set('stand_candle', false);
        otis.reach(null);
        otis.with(['candle']);
        s.set('otis_candle', 1);
        otis.look(null);
        await otis.walk([[0.3, 10.5], [0.1, 13.2]]);
        s.tell('woken:gone');
      },
    },
    // the epilogue («Миндаль»): he sits reading by her door; she goes in and shuts it
    chair_night: {
      after: [], tells: ['chair_night:sat'], seconds: 8,
      from: () => ({ ...CAM0, ...NIGHT, armchair: true, door_virginia: 300, ...seated('read_seated', { look: 'virginia' }),
        ...at('virginia', 1.75, 6.3, 210, 'stand', { look: 'otis' }), camera_z: 1.5 }),
      run: async s => {
        const her = s.person('virginia');
        await s.wait(1.5);
        s.tell('chair_night:sat');
        await s.wait(1.5);
        s.move('door_virginia', 330, { over: 0.6 });
        await her.walk([[2.6, 6.3]]);
        await s.move('door_virginia', 270, { over: 1 });
        her.here(false);
        s.person('otis').look('otis#book');
        await s.wait(1);
      },
    },
    // the epilogue («Свеча»): no armchair, nobody; she opens her door and looks out
    no_chair: {
      after: [], tells: ['no_chair:end'], seconds: 6,
      from: () => ({ ...CAM0, ...NIGHT, ...at('virginia', 2.6, 6.3, 270, 'stand'), camera_target: 'door_virginia', camera_shot: 'full' }),
      run: async s => {
        const her = s.person('virginia');
        await s.move('door_virginia', 330, { over: 1 });
        await her.walk([[1.75, 6.3]]);
        await her.turn(200);
        her.look([1.0, 3.5, 1.0]);
        s.camera({ target: 'virginia', shot: 'medium' });
        await s.wait(2);
        s.tell('no_chair:end');
      },
    },
  };
}

return { film, wall, arch, opening, leaf, portrait, OAK, OAK_DARK, OAK_LIGHT, PLASTER, STONE, STONE_DARK };
