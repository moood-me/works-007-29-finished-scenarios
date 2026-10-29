// What the Tapestry Chamber's walls share: a low oak dado (plain panels under a rail), the plaster above it, and the
// old hunting tapestries hung over the plaster — faded to blue-greens and dun, the hunters, their hounds and the stag
// among trees on a ground of little flowers (millefleurs), in a woven border. Metres, y down, from the foot of a wall.
const OAK = '#4a3222';
const OAK_LIGHT = '#5d4029';
const OAK_DARK = '#2e1f15';
const PLASTER = '#a49480';

// the wall from x0 to x1, `top` metres high: plaster, the dado to 0.9 m, its rail and skirting
function wall(g, x0, x1, top) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -top - 0.02, w, top + 0.04);
  g.clip();
  g.fillStyle = PLASTER;
  g.fillRect(x0, -top - 0.02, w, top + 0.04);
  g.fillStyle = OAK;
  g.fillRect(x0, -0.9, w, 0.9);
  g.strokeStyle = OAK_DARK;
  g.lineWidth = 0.03;
  for (let x = Math.floor(x0 / 0.5) * 0.5; x < x1; x += 0.5) g.strokeRect(x + 0.05, -0.8, 0.4, 0.62);
  g.fillStyle = OAK_LIGHT;
  g.fillRect(x0, -0.94, w, 0.06);
  g.fillStyle = OAK_DARK;
  g.fillRect(x0, -0.12, w, 0.14);
  // the frieze under the ceiling
  g.fillStyle = '#8a7a64';
  g.fillRect(x0, -top - 0.02, w, 0.18);
  g.restore();
}

// a tapestry from x0 to x1, from y0 (its top, negative) to y1 (its foot): `seed` picks which part of the hunt it shows
function tapestry(g, e, x0, y0, x1, y1, seed) {
  const w = x1 - x0;
  const h = y1 - y0;
  const r = (() => {
    let s = seed * 9301 + 49297;
    return () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  })();
  g.save();
  g.beginPath();
  g.rect(x0, y0, w, h);
  g.clip();
  // the ground: a deep faded blue-green
  g.fillStyle = '#3e5552';
  g.fillRect(x0, y0, w, h);
  const b = 0.14;
  // the millefleurs: little flowers everywhere, cream, rose, ochre, faded
  const flowers = ['#b9ae8c', '#a8786a', '#b39a5a', '#7f9478'];
  for (let i = 0; i < w * h * 60; i++) {
    g.fillStyle = flowers[Math.floor(r() * flowers.length)];
    const x = x0 + b + r() * (w - 2 * b);
    const y = y0 + b + r() * (h - 2 * b);
    g.beginPath();
    g.arc(x, y, 0.012 + r() * 0.01, 0, Math.PI * 2);
    g.fill();
  }
  // trees: round crowns on thin trunks, here and there across it
  for (let x = x0 + 0.35 + r() * 0.3; x < x1 - 0.3; x += 0.8 + r() * 0.5) {
    const top = y0 + 0.25 + r() * 0.2;
    g.fillStyle = '#5a4630';
    g.fillRect(x - 0.025, top + 0.25, 0.05, y1 - top - 0.45);
    g.fillStyle = r() < 0.5 ? '#55684e' : '#4b5f50';
    for (let k = 0; k < 5; k++) {
      g.beginPath();
      g.arc(x + (r() - 0.5) * 0.3, top + 0.1 + r() * 0.2, 0.13 + r() * 0.06, 0, Math.PI * 2);
      g.fill();
    }
  }
  // the hunt: a stag leaping, two hounds after it, a hunter with a spear and one with a horn
  const ground = y1 - 0.42;
  const stag = (x, y, s) => {
    g.fillStyle = '#9a7a52';
    g.beginPath();
    g.ellipse(x, y, 0.2 * s, 0.08 * s, -0.15, 0, Math.PI * 2);
    g.fill();
    g.strokeStyle = '#9a7a52';
    g.lineWidth = 0.03 * s;
    g.beginPath();
    g.moveTo(x - 0.14 * s, y + 0.04 * s);
    g.lineTo(x - 0.26 * s, y + 0.16 * s);
    g.moveTo(x - 0.1 * s, y + 0.05 * s);
    g.lineTo(x - 0.2 * s, y + 0.2 * s);
    g.moveTo(x + 0.12 * s, y + 0.03 * s);
    g.lineTo(x + 0.26 * s, y - 0.05 * s);
    g.moveTo(x + 0.14 * s, y + 0.04 * s);
    g.lineTo(x + 0.3 * s, y + 0.04 * s);
    // the neck and head, the antlers
    g.moveTo(x + 0.16 * s, y - 0.03 * s);
    g.lineTo(x + 0.24 * s, y - 0.16 * s);
    g.stroke();
    g.beginPath();
    g.ellipse(x + 0.28 * s, y - 0.18 * s, 0.06 * s, 0.035 * s, 0.4, 0, Math.PI * 2);
    g.fill();
    g.strokeStyle = '#c4b28a';
    g.lineWidth = 0.014 * s;
    g.beginPath();
    g.moveTo(x + 0.25 * s, y - 0.21 * s);
    g.quadraticCurveTo(x + 0.18 * s, y - 0.36 * s, x + 0.1 * s, y - 0.4 * s);
    g.moveTo(x + 0.2 * s, y - 0.32 * s);
    g.lineTo(x + 0.26 * s, y - 0.4 * s);
    g.moveTo(x + 0.15 * s, y - 0.37 * s);
    g.lineTo(x + 0.16 * s, y - 0.46 * s);
    g.stroke();
  };
  const hound = (x, y, s) => {
    g.fillStyle = '#c8bca0';
    g.beginPath();
    g.ellipse(x, y, 0.14 * s, 0.045 * s, -0.1, 0, Math.PI * 2);
    g.fill();
    g.beginPath();
    g.ellipse(x + 0.15 * s, y - 0.04 * s, 0.05 * s, 0.03 * s, -0.3, 0, Math.PI * 2);
    g.fill();
    g.strokeStyle = '#c8bca0';
    g.lineWidth = 0.022 * s;
    g.beginPath();
    g.moveTo(x - 0.1 * s, y + 0.02 * s);
    g.lineTo(x - 0.2 * s, y + 0.1 * s);
    g.moveTo(x + 0.08 * s, y + 0.02 * s);
    g.lineTo(x + 0.18 * s, y + 0.09 * s);
    g.moveTo(x - 0.13 * s, y - 0.02 * s);
    g.lineTo(x - 0.24 * s, y - 0.08 * s);
    g.stroke();
  };
  const hunter = (x, y, s, coat, horn) => {
    // legs, a tunic, the head in a cap, an arm with a spear or a horn
    g.strokeStyle = '#5c4a3a';
    g.lineWidth = 0.035 * s;
    g.beginPath();
    g.moveTo(x - 0.04 * s, y - 0.2 * s);
    g.lineTo(x - 0.08 * s, y);
    g.moveTo(x + 0.04 * s, y - 0.2 * s);
    g.lineTo(x + 0.1 * s, y);
    g.stroke();
    g.fillStyle = coat;
    g.beginPath();
    g.moveTo(x - 0.1 * s, y - 0.18 * s);
    g.lineTo(x + 0.1 * s, y - 0.18 * s);
    g.lineTo(x + 0.06 * s, y - 0.48 * s);
    g.lineTo(x - 0.06 * s, y - 0.48 * s);
    g.closePath();
    g.fill();
    g.fillStyle = '#d2b896';
    g.beginPath();
    g.arc(x, y - 0.54 * s, 0.055 * s, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#6a3a34';
    g.fillRect(x - 0.06 * s, y - 0.62 * s, 0.12 * s, 0.04 * s);
    g.strokeStyle = coat;
    g.lineWidth = 0.03 * s;
    g.beginPath();
    g.moveTo(x + 0.05 * s, y - 0.44 * s);
    g.lineTo(x + 0.18 * s, y - 0.5 * s);
    g.stroke();
    g.strokeStyle = horn ? '#b8a06a' : '#7a6a56';
    g.lineWidth = (horn ? 0.03 : 0.015) * s;
    g.beginPath();
    if (horn) {
      g.moveTo(x + 0.12 * s, y - 0.58 * s);
      g.quadraticCurveTo(x + 0.22 * s, y - 0.5 * s, x + 0.3 * s, y - 0.62 * s);
    } else {
      g.moveTo(x + 0.02 * s, y - 0.2 * s);
      g.lineTo(x + 0.42 * s, y - 0.8 * s);
    }
    g.stroke();
  };
  const s = 1.1;
  const span = w - 0.6;
  const at = u => x0 + 0.3 + span * ((u + seed * 0.37) % 1);
  stag(at(0.62), ground - 0.3, s);
  hound(at(0.42), ground - 0.12, s);
  hound(at(0.3), ground - 0.02, s * 0.95);
  hunter(at(0.12), ground + 0.2, s, '#8a4a40', false);
  hunter(at(0.86), ground + 0.22, s * 0.95, '#4a5a7a', true);
  // the weave: faint level threads
  g.strokeStyle = 'rgba(20,24,22,0.12)';
  g.lineWidth = 0.006;
  for (let y = y0; y < y1; y += 0.025) {
    g.beginPath();
    g.moveTo(x0, y);
    g.lineTo(x1, y);
    g.stroke();
  }
  // faded: a dusty wash over it all
  g.fillStyle = 'rgba(176,160,128,0.22)';
  g.fillRect(x0, y0, w, h);
  // the border: a dark band with a running leaf in faded gold
  g.strokeStyle = '#2c3a38';
  g.lineWidth = b;
  g.strokeRect(x0 + b / 2, y0 + b / 2, w - b, h - b);
  g.strokeStyle = '#8c7a50';
  g.lineWidth = 0.02;
  g.strokeRect(x0 + b, y0 + b, w - 2 * b, h - 2 * b);
  g.fillStyle = '#8c7a50';
  for (let x = x0 + 0.1; x < x1; x += 0.18) {
    for (const y of [y0 + b / 2, y1 - b / 2]) {
      g.beginPath();
      g.ellipse(x, y, 0.04, 0.02, 0.5, 0, Math.PI * 2);
      g.fill();
    }
  }
  for (let y = y0 + 0.1; y < y1; y += 0.18) {
    for (const x of [x0 + b / 2, x1 - b / 2]) {
      g.beginPath();
      g.ellipse(x, y, 0.02, 0.04, 0.5, 0, Math.PI * 2);
      g.fill();
    }
  }
  g.restore();
  // the rod it hangs from
  g.fillStyle = '#2a1c12';
  g.fillRect(x0 - 0.05, y0 - 0.04, w + 0.1, 0.04);
}

// the stone round an opening (a door, a window): a four-centred Tudor arch from x0 to x1, from y1 (its foot) up to y0
// (its crown), `rise` metres of arch; the path, for a cut or a fill
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

// The chamber's pieces (the game's `beat`; modules/beats; notes.md «Pieces»): each its moments told, its start, what it
// goes on from. Places in metres: across (right of the middle), away. The window seat: Sir Simon sits at SEAT; the
// door to the corridor is in the left wall (4.2…5.2 m away), the corridor beyond it; the wall that parts is the middle
// of the far wall's tapestry (x −2.0…−0.8), the dark way behind it going on to 8.5 m; the mirror on the right wall at
// 4.3 m.
const SEAT = [1.35, 5.52, 0.48];
const SEAT_FRONT = [1.35, 5.45];
const OUT = [-3.7, 4.7];
const IN = [-2.6, 4.75];
const HER = [-1.7, 4.8];
const NEAR = [-0.1, 4.75];
const MIRROR = [2.3, 3.75];
const LISTEN = [2.85, 3.3];
const OPENING = [-1.4, 5.0];
const DEEP = [-1.4, 6.6];
const TAPESTRY = [-1.4, 4.75];
// the camera: the scene's own (wide), or framing someone
const CAM = { camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
  camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0 };
const shot = (target, size, frame = null) => ({ ...CAM, camera_target: target, camera_shot: size, camera_frame: frame });
// the room at rest by day: every key a piece may move, as it is when nothing has happened
const ROOM = { evening: 0, night: 0, vision: 0, dark: 0, wall: 0, stir: 0, shapes: 0, stub: 'none', turnip: false, lantern: false,
  candle_floor: false, door: 120 };
const EVENING = { ...ROOM, evening: 1 };
const NIGHT = { ...ROOM, night: 1 };
// the people where they are when nothing has happened: he on the window seat, she by the wall, the two Otises out in
// the corridor (the game says who is here)
function people(scene) {
  return {
    simon_on: SEAT, simon_a: SEAT[0], simon_d: SEAT[1], simon_turn: 215, simon_do: 'brood', simon_look: [0.2, 3.9, 0.2], simon_reach: null,
    simon_with: [], simon_wear: null,
    virginia_on: null, virginia_a: HER[0], virginia_d: HER[1], virginia_turn: 120, virginia_do: 'upright', virginia_look: 'simon',
    virginia_reach: null, virginia_with: [], virginia_wear: null, virginia_candle: 0,
    otis_on: null, otis_a: OUT[0], otis_d: OUT[1], otis_turn: 90, otis_do: 'stand', otis_look: null, otis_reach: null, otis_with: [],
    otis_wear: null, otis_candle: 0,
    washington_on: null, washington_a: OUT[0], washington_d: OUT[1], washington_turn: 90, washington_do: 'stand', washington_look: null,
    washington_reach: null, washington_with: [],
  };
}
// he gets up off the window seat (where it puts him), and sits down on it again
async function rise(p) {
  p.on(null);
  await p.do('stand_up', { loop: false });
  p.do('stand');
}
async function sit(p) {
  await p.go('faint_sit', { to: SEAT_FRONT, turn: 215 });
  p.on(SEAT);
  p.do('brood');
}

function film(scene) {
  const W = id => scene.kit.cast.characters[id];
  return {
    // 1.6: night, she not here; on the seat he rubs his sleeve, gets up, listens at the wall, and goes back to the seat
    // (the walk seen from the scene's own camera: a shot following him to the right wall would stand past the room's end)
    insulted: {
      tells: ['insulted:ear', 'insulted:seat'],
      seconds: 14,
      from: () => ({ ...NIGHT, ...people(scene), simon_do: 'rub_sleeve', simon_look: 'simon#hand_r', ...shot('simon', 'medium') }),
      run: async s => {
        const p = s.person('simon');
        await s.wait(2.5);
        p.look(null);
        s.camera({ target: null });
        await rise(p);
        await p.walk([LISTEN]);
        await p.turn(180);
        p.do('listen_wall');
        s.tell('insulted:ear');
        await s.wait(3);
        p.do('stand');
        await sit(p);
        s.camera({ target: 'simon', shot: 'medium' });
        p.look([0.2, 3.9, 0.2]);
        s.tell('insulted:seat');
      },
    },
    // 2.3: evening; before the mirror he looms, then bows to it (the mirror shows the room — and him, faintly: notes)
    rehearse: {
      tells: ['rehearse:loom', 'rehearse:bow'],
      seconds: 12,
      from: () => ({ ...EVENING, ...people(scene), simon_on: null, simon_a: MIRROR[0], simon_d: MIRROR[1], simon_turn: 125, simon_do: 'stand',
        simon_look: 'mirror', ...shot('simon', 'medium', 0.4) }),
      run: async s => {
        const p = s.person('simon');
        await s.wait(1);
        p.do('loom');
        s.tell('rehearse:loom');
        await s.wait(5);
        p.do('stand');
        await s.wait(0.5);
        s.tell('rehearse:bow');
        await p.do('bow_deep', { loop: false });
        p.do('stand');
        await s.wait(1);
      },
    },
    // 2.4 after М4: night, he not here; she comes in at the door with her candle (or, put out, the dead candle-end:
    // `candle_out`), goes to the window, whispers, sets the candle-end on the seat by the glass
    candle_room: {
      tells: ['candle_room:whisper', 'candle_room:sill'],
      seconds: 12,
      from: () => ({ ...NIGHT, ...people(scene), door: 150, virginia_a: OUT[0], virginia_d: OUT[1], virginia_turn: 90, virginia_do: 'stand',
        virginia_look: null, virginia_wear: W('virginia_night'), ...shot('virginia', 'medium') }),
      run: async s => {
        const v = s.person('virginia');
        const out = !!scene.get('candle_out');
        v.with([out ? 'stub' : 'candle_l']);
        if (!out) {
          v.do('hold_candle');
          s.set('virginia_candle', 1);
        }
        await v.walk([IN, [0.1, 4.85], [0.75, 5.0]]);
        await v.turn(70);
        v.look('window');
        s.tell('candle_room:whisper');
        await s.wait(2.5);
        v.reach({ r: [1.05, 5.8, 0.55] });
        await s.wait(1);
        v.with([]);
        s.set('virginia_candle', 0);
        s.set('stub', 'sill');
        v.reach(null);
        v.do('clasped');
        s.tell('candle_room:sill');
        await v.turn(150);
        v.look([0.9, 4.2, 0]);
        await s.wait(1.5);
      },
    },
    // 2.5: day; on the seat he turns her candle-end in his fingers and hides it in his sleeve
    stub_sleeve: {
      tells: ['stub_sleeve:turn', 'stub_sleeve:hidden'],
      seconds: 10,
      from: () => ({ ...ROOM, ...people(scene), stub: 'hand', simon_do: 'rub_sleeve', simon_look: 'simon#hand_r', ...shot('simon', 'close') }),
      run: async s => {
        await s.wait(1);
        s.tell('stub_sleeve:turn');
        await s.wait(5);
        s.set('stub', 'none');
        s.tell('stub_sleeve:hidden');
        const p = s.person('simon');
        p.do('brood');
        p.look([0.2, 3.9, 0.2]);
        await s.wait(3);
      },
    },
    // 2.5: day; the twins' turnip by the seat, he shakes his chains at it
    turnip_shake: {
      tells: ['turnip_shake:shake'],
      seconds: 8,
      from: () => ({ ...ROOM, ...people(scene), turnip: true, simon_look: 'turnip#turnip', ...shot('simon', 'medium', 0.6) }),
      run: async s => {
        const p = s.person('simon');
        await s.wait(1.5);
        p.do('shake_chain');
        s.tell('turnip_shake:shake');
        await s.wait(4.5);
        p.do('brood');
        await s.wait(1.5);
      },
    },
    // 3.1: the autumn afternoon; the door opens, Virginia in her riding habit comes in to her place
    leaves: {
      tells: ['leaves:door'],
      seconds: 10,
      from: () => ({ ...ROOM, ...people(scene), door: 90, virginia_a: OUT[0], virginia_d: OUT[1], virginia_turn: 90, virginia_do: 'stand',
        virginia_look: null, ...CAM }),
      run: async s => {
        const v = s.person('virginia');
        v.here(true);
        await s.wait(1.5);
        s.tell('leaves:door');
        await s.move('door', 155, { over: 1.5 });
        await v.walk([IN, HER]);
        await v.turn(120);
        v.look('simon');
        v.do('upright');
        await s.wait(1.5);
      },
    },
    // 3.2 (plays): he gets up and looms — «I am Red Reuben…» — and sits back
    reuben: {
      after: ['leaves'],
      tells: ['reuben:up', 'reuben:down'],
      seconds: 10,
      from: () => ({ ...ROOM, ...people(scene), ...shot('simon', 'medium') }),
      run: async s => {
        const p = s.person('simon');
        s.camera({ target: 'simon', shot: 'medium' });
        p.look('virginia');
        await rise(p);
        p.do('loom');
        s.tell('reuben:up');
        await s.wait(3.5);
        p.do('stand');
        await sit(p);
        s.tell('reuben:down');
        p.look('virginia');
      },
    },
    // 3.2: she walks nearer, 1.6 m from him; the two faces
    talk: {
      after: ['leaves', 'reuben'],
      tells: ['talk:near'],
      seconds: 6,
      from: () => ({ ...ROOM, ...people(scene), simon_look: 'virginia', ...shot('virginia', 'full', 0.35) }),
      run: async s => {
        const v = s.person('virginia');
        s.camera({ target: 'virginia', shot: 'full', frame: 0.35 });
        s.person('simon').look('virginia');
        await v.walk([NEAR]);
        await v.turn(115);
        v.look('simon');
        v.do('upright');
        s.tell('talk:near');
        await s.wait(1);
      },
    },
    // 3.2 «hunger: bread»: she holds out the parcel, he takes it
    sandwich: {
      after: ['talk'],
      tells: ['sandwich:taken'],
      seconds: 8,
      from: () => ({ ...ROOM, ...people(scene), virginia_a: NEAR[0], virginia_d: NEAR[1], virginia_turn: 115, simon_look: 'virginia',
        ...shot('virginia', 'full', 0.35) }),
      run: async s => {
        const v = s.person('virginia');
        const p = s.person('simon');
        v.with(['parcel']);
        await v.walk([[0.6, 4.95]]);
        await v.turn(75);
        v.do('offer');
        s.camera({ target: 'virginia#hand_r', shot: 'close' });
        await s.wait(1.5);
        p.reach({ r: 'virginia#parcel' });
        p.look('virginia#parcel');
        await s.wait(1.5);
        v.with([]);
        p.with(['parcel']);
        p.reach(null);
        v.do('upright');
        s.tell('sandwich:taken');
        p.look('virginia');
        await s.wait(1.5);
      },
    },
    // 3.2: she stamps her foot
    stamp: {
      after: ['talk', 'sandwich'],
      tells: ['stamp:stamp'],
      seconds: 3,
      from: () => ({ ...ROOM, ...people(scene), virginia_a: NEAR[0], virginia_d: NEAR[1], virginia_turn: 115, simon_look: 'virginia',
        ...shot('virginia', 'medium') }),
      run: async s => {
        const v = s.person('virginia');
        s.camera({ target: 'virginia', shot: 'medium' });
        s.tell('stamp:stamp');
        await v.do('stamp', { loop: false });
        v.do('upright');
      },
    },
    // 3.6 after М5 (`vision` back to 0): the hunters stir, the wall parts; he stands and holds out his hand to her
    wall_parts: {
      after: ['talk', 'sandwich', 'stamp'],
      tells: ['wall_parts:supper', 'wall_parts:open', 'wall_parts:hand'],
      seconds: 12,
      from: () => ({ ...ROOM, ...people(scene), virginia_a: NEAR[0], virginia_d: NEAR[1], virginia_turn: 115, simon_look: 'virginia', ...CAM }),
      run: async s => {
        const p = s.person('simon');
        const v = s.person('virginia');
        s.camera({ target: null });
        s.tell('wall_parts:supper');
        await s.move('stir', 1, { over: 2.5 });
        await s.move('wall', 1, { over: 3.5 });
        s.tell('wall_parts:open');
        v.look('wall_l');
        await rise(p);
        await p.turn(250);
        p.look('virginia');
        p.do('offer');
        s.camera({ target: 'simon', shot: 'full', frame: 0.6 });
        await s.wait(1);
        v.look('simon');
        s.tell('wall_parts:hand');
        await s.wait(1);
      },
    },
    // 3.6 «go»: she goes to him, hand in hand they walk into the opening; the wall shuts behind them
    into_wall: {
      after: ['wall_parts'],
      tells: ['into_wall:hand', 'into_wall:shut'],
      seconds: 12,
      from: () => ({ ...ROOM, ...people(scene), wall: 1, stir: 1, simon_on: null, simon_a: 1.3, simon_d: 4.95, simon_turn: 250, simon_do: 'offer',
        simon_look: 'virginia', virginia_a: NEAR[0], virginia_d: NEAR[1], virginia_turn: 115, ...shot('virginia', 'medium') }),
      run: async s => {
        const p = s.person('simon');
        const v = s.person('virginia');
        s.camera({ target: 'virginia', shot: 'medium' });
        await v.walk([[0.75, 4.75]]);
        v.reach({ l: 'simon#hand_r' });
        p.reach({ r: 'virginia#hand_l' });
        p.do('stand');
        s.tell('into_wall:hand');
        await s.wait(1);
        s.camera({ target: null });
        await s.all(
          p.walk([[-0.3, 5.0], [-1.2, 5.25], [-1.2, 6.6]]),
          v.walk([[-0.4, 4.6], [-1.6, 5.1], [-1.6, 6.5]]),
        );
        p.here(false);
        v.here(false);
        p.reach(null);
        v.reach(null);
        await s.move('wall', 0, { over: 3 });
        s.tell('into_wall:shut');
        await s.move('stir', 0, { over: 2 });
      },
    },
    // 3.6 «papa»: he lowers his hand — bows (plays) or sits back tired; the wall shuts slowly; she backs to the door and
    // runs out
    hand_down: {
      after: ['wall_parts'],
      tells: ['hand_down:bow', 'hand_down:whisper', 'hand_down:gone'],
      seconds: 14,
      from: () => ({ ...ROOM, ...people(scene), wall: 1, stir: 1, simon_on: null, simon_a: 1.3, simon_d: 4.95, simon_turn: 250, simon_do: 'offer',
        simon_look: 'virginia', virginia_a: NEAR[0], virginia_d: NEAR[1], virginia_turn: 115, ...shot('simon', 'medium') }),
      run: async s => {
        const p = s.person('simon');
        const v = s.person('virginia');
        s.camera({ target: 'simon', shot: 'medium' });
        p.do('stand');
        await s.wait(1);
        s.tell('hand_down:bow');
        if (scene.get('plays')) {
          await p.do('bow_deep', { loop: false });
          p.do('stand');
        } else await sit(p);
        s.tell('hand_down:whisper');
        s.move('wall', 0, { over: 6 });
        s.move('stir', 0, { over: 6 });
        s.camera({ target: 'virginia', shot: 'medium' });
        await v.walk([[-1.2, 4.6], IN]);
        v.gait('run');
        await v.walk([OUT]);
        v.here(false);
        v.gait(null);
        s.tell('hand_down:gone');
        await s.wait(1);
      },
    },
    // 4.1, 4С.5 — the dark behind the wall: the room gone dark, the wall open, the camera in the opening; the two stand
    // hand in hand in his light; shapes and wings pass
    dark: {
      tells: ['dark:voices'],
      seconds: 8,
      from: () => ({ ...ROOM, ...people(scene), wall: 1, dark: 1, shapes: 1, simon_on: null, simon_a: -1.2, simon_d: DEEP[1], simon_turn: 175,
        simon_do: 'stand', simon_look: 'virginia', simon_reach: { r: 'virginia#hand_l' }, virginia_a: -1.65, virginia_d: DEEP[1] - 0.05,
        virginia_turn: 185, virginia_do: 'stand', virginia_look: [-1.4, 5.0, 1.5], virginia_reach: { l: 'simon#hand_r' },
        ...shot('virginia', 'full', 0.4) }),
      run: async s => {
        await s.wait(2.5);
        s.tell('dark:voices');
        s.person('virginia').look('simon');
        await s.wait(5.5);
      },
    },
    // 4.2: evening, the room empty; Washington opens the door with a lantern — `shares`: pounds on the wall, sets the
    // lantern down and sits under the tapestry; `trap` watch: looks round and goes; else sets it down and sits
    lantern: {
      tells: ['lantern:pound', 'lantern:end'],
      seconds: 12,
      from: () => ({ ...EVENING, ...people(scene), door: 90, washington_with: ['lantern'], ...shot('washington', 'medium') }),
      run: async s => {
        const w = s.person('washington');
        const shares = !!scene.get('shares');
        const watch = !shares && scene.get('trap') === 'watch';
        await s.move('door', 155, { over: 1.2 });
        await w.walk([IN, TAPESTRY]);
        await w.turn(10);
        w.look('wall_l');
        if (shares) {
          w.do('pound_wall');
          s.tell('lantern:pound');
          await s.wait(3);
        } else {
          s.tell('lantern:pound');
          await s.wait(1);
        }
        if (watch) {
          w.look([2.5, 4.0, 1.5]);
          await s.wait(1.2);
          w.look([-2.5, 3.0, 1.5]);
          await s.wait(1.2);
          w.look(null);
          await w.walk([IN, OUT]);
          w.here(false);
        } else {
          w.do('stand');
          w.with([]);
          s.set('lantern', true);
          await w.turn(175);
          w.do('sit_ground');
          w.look('floor_lantern#lantern');
        }
        s.tell('lantern:end');
        await s.wait(1);
      },
    },
    // 4.2: evening, empty; Mr Otis comes in with a candle and knocks on the tapestry: «Sir?»
    knock_evening: {
      tells: ['knock_evening:knock'],
      seconds: 8,
      from: () => ({ ...EVENING, ...people(scene), door: 90, otis_with: ['candle_l'], otis_candle: 1, otis_do: 'hold_candle', ...shot('otis', 'medium') }),
      run: async s => {
        const o = s.person('otis');
        await s.move('door', 155, { over: 1.2 });
        await o.walk([IN, [-1.1, 4.65]]);
        await o.turn(345);
        o.look('wall_r');
        s.tell('knock_evening:knock');
        await o.do('knock_wall', { loop: false });
        o.do('hold_candle');
        await s.wait(1);
      },
    },
    // 4С.5: night, empty; Mr Otis in his dressing gown with a candle knocks, sets the candle on the floor, sits facing
    // the wall; it parts and Virginia in her nightgown steps out with the casket
    wait_wall: {
      tells: ['wait_wall:knock', 'wait_wall:sat', 'wait_wall:out'],
      seconds: 18,
      from: () => ({ ...NIGHT, ...people(scene), door: 150, otis_with: ['candle_l'], otis_candle: 1, otis_do: 'hold_candle', otis_wear: W('otis_gown'),
        virginia_a: -1.4, virginia_d: 6.3, virginia_turn: 180, virginia_do: 'stand', virginia_look: 'otis', virginia_with: ['casket'],
        virginia_wear: W('virginia_night'), ...shot('otis', 'medium') }),
      run: async s => {
        const o = s.person('otis');
        const v = s.person('virginia');
        await o.walk([IN, [-1.1, 4.65]]);
        await o.turn(345);
        o.look('wall_r');
        s.tell('wait_wall:knock');
        await o.do('knock_wall', { loop: false });
        o.with([]);
        s.set('otis_candle', 0);
        s.set('candle_floor', true);
        await o.walk([[-0.2, 4.4]]);
        await o.turn(320);
        o.do('sit_ground');
        o.look([-1.4, 5.4, 1.2]);
        s.tell('wait_wall:sat');
        await s.wait(2.5);
        v.here(true);
        await s.move('wall', 1, { over: 3.5 });
        s.camera({ target: 'virginia', shot: 'medium' });
        await v.walk([[-1.4, 5.0]]);
        await v.turn(140);
        v.do('clasped');
        o.look('virginia');
        s.tell('wait_wall:out');
        await s.wait(1);
      },
    },
    // «Свеча у стены»: night, empty; Mr Otis with a candle comes in and sits on the floor facing the tapestry; nothing
    // stirs
    candle_last: {
      tells: ['candle_last:sat'],
      seconds: 14,
      from: () => ({ ...NIGHT, ...people(scene), door: 150, otis_with: ['candle_l'], otis_candle: 1, otis_do: 'hold_candle', ...CAM }),
      run: async s => {
        const o = s.person('otis');
        s.move('camera_z', 1.2, { over: 14, ease: 'linear' });
        await o.walk([IN, [-1.0, 4.6]]);
        o.with([]);
        s.set('otis_candle', 0);
        s.set('candle_floor', true);
        await o.walk([[-0.2, 4.4]]);
        await o.turn(320);
        o.do('sit_ground');
        o.look([-1.4, 5.4, 1.2]);
        s.tell('candle_last:sat');
        await s.wait(4);
      },
    },
  };
}

return { wall, tapestry, arch, OAK, OAK_DARK, OAK_LIGHT, PLASTER, film };
