// «The Dreamer's Room» — what its paintings share, in the world's look (the embankment's, Grandmother's room): a wash
// of colour and a fine sepia ink line round every shape, all in daylight colours (the scene's light is the engine's:
// notes.md).
const { hash } = anim;
const INK = '#4a3f3a';

// A wall of the room on x0…x1 (metres), from the ceiling at -top down to the floor at 0: old green distemper gone
// dull, washed on unevenly (paler and darker patches), smoked darker under the ceiling, a few runs of damp down it,
// cracks in the plaster drawn in ink, a dark skirting board
function greenWall(g, x0, x1, top, seed) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -top, w, top);
  g.clip();
  g.fillStyle = '#93a084';
  g.fillRect(x0, -top, w, top);
  // (the wash: soft patches, paler and darker, with no edge)
  const n = Math.ceil(w * 5);
  for (let i = 0; i < n; i++) {
    const x = x0 + hash(i, seed) * w, y = -top + hash(i, seed + 1) * top, r = 0.3 + 0.5 * hash(i, seed + 2);
    const tone = hash(i, seed + 3) > 0.5 ? '178,188,160' : '100,112,88';
    const blot = g.createRadialGradient(x, y, 0, x, y, r);
    blot.addColorStop(0, `rgba(${tone},0.16)`);
    blot.addColorStop(1, `rgba(${tone},0)`);
    g.fillStyle = blot;
    g.fillRect(x - r, y - r, 2 * r, 2 * r);
  }
  // (the soot of years of candles and the stove's smoke, thickest under the ceiling)
  const soot = g.createLinearGradient(0, -top, 0, -top + 1.0);
  soot.addColorStop(0, 'rgba(62,60,48,0.42)');
  soot.addColorStop(1, 'rgba(62,60,48,0)');
  g.fillStyle = soot;
  g.fillRect(x0, -top, w, 1.0);
  // (runs of damp)
  for (let i = 0; i < Math.ceil(w * 0.8); i++) {
    const x = x0 + 0.2 + hash(i, seed + 5) * (w - 0.4), len = 0.5 + 0.9 * hash(i, seed + 6);
    const run = g.createLinearGradient(0, -top, 0, -top + len);
    run.addColorStop(0, 'rgba(84,90,70,0.28)');
    run.addColorStop(1, 'rgba(84,90,70,0)');
    g.fillStyle = run;
    g.beginPath();
    g.moveTo(x - 0.05, -top);
    g.quadraticCurveTo(x - 0.02, -top + len * 0.6, x, -top + len);
    g.quadraticCurveTo(x + 0.03, -top + len * 0.6, x + 0.07, -top);
    g.fill();
  }
  // (cracks)
  g.beginPath();
  for (let i = 0; i < Math.ceil(w * 0.7); i++) {
    let x = x0 + 0.3 + hash(i, seed + 8) * (w - 0.6), y = -top + 0.3 + hash(i, seed + 9) * (top - 0.8);
    g.moveTo(x, y);
    for (let k = 0; k < 4; k++) {
      x += (hash(i * 7 + k, seed + 10) - 0.5) * 0.16;
      y += 0.06 + 0.08 * hash(i * 7 + k, seed + 11);
      g.lineTo(x, y);
    }
  }
  g.strokeStyle = 'rgba(74,63,58,0.45)';
  g.lineWidth = 0.006;
  g.stroke();
  // (the skirting)
  g.fillStyle = '#5e5044';
  g.fillRect(x0, -0.12, w, 0.12);
  g.beginPath();
  g.moveTo(x0, -0.12);
  g.lineTo(x1, -0.12);
  g.strokeStyle = INK;
  g.lineWidth = 0.01;
  g.stroke();
  g.restore();
}

// A cut through a painting (an opening in a wall): what is painted there is taken away
function cut(g, x, y, w, h) {
  g.save();
  g.globalCompositeOperation = 'destination-out';
  g.fillStyle = '#000';
  g.fillRect(x, y, w, h);
  g.restore();
}

// A rectangle filled and outlined in ink
function box(g, x, y, w, h, fill, line = 0.01) {
  g.fillStyle = fill;
  g.fillRect(x, y, w, h);
  g.strokeStyle = INK;
  g.lineWidth = line;
  g.strokeRect(x, y, w, h);
}

// A casement leaf of the window, from x0 to x0 + 0.45 (metres from its card's anchor; y −1.2 at its top … 0 at the
// sill): its frame of old grey-white paint, three panes, the glass a faint grey film, half the latch on its free edge
// (`free` 1: at x0 + 0.45; −1: at x0)
function leaf(g, x0, free) {
  const paint = '#d2cbb7';
  g.fillStyle = paint;
  g.beginPath();
  g.rect(x0, -1.2, 0.45, 1.2);
  g.rect(x0 + 0.04, -1.16, 0.37, 1.12);
  g.fill('evenodd');
  g.fillRect(x0 + 0.04, -0.8, 0.37, 0.025);
  g.fillRect(x0 + 0.04, -0.43, 0.37, 0.025);
  g.fillStyle = 'rgba(214,220,216,0.12)';
  g.fillRect(x0 + 0.04, -1.16, 0.37, 1.12);
  g.strokeStyle = INK;
  g.lineWidth = 0.006;
  g.strokeRect(x0, -1.2, 0.45, 1.2);
  g.strokeRect(x0 + 0.04, -1.16, 0.37, 1.12);
  box(g, free > 0 ? x0 + 0.43 : x0, -0.65, 0.02, 0.1, '#5a5048', 0.005);
}

// A cobweb across a corner under the ceiling, hung from the corner (x 0, y −h): threads fanning down from it to a
// sagging edge, rings across them, a grey dusty hammock in its middle, one loose thread hanging — a layer `web` that
// stirs in the draught from the door; r its half-width, h its height
function web(e, g, r = 0.4, h = 0.85) {
  e.layer('web', { pivot: [0, -h], wind: { strength: 0.12, gust: 0.6 } }, w => {
    const ends = [];
    for (let k = 0; k <= 7; k++) {
      const u = k / 7, x = -r + 2 * r * u;
      ends.push([x, -h + (0.12 + 0.5 * Math.sin(Math.PI * u) * (0.8 + 0.3 * hash(k, 71))) * (h / 0.85)]);
    }
    w.fillStyle = 'rgba(214,212,204,0.22)';
    w.beginPath();
    w.moveTo(0, -h);
    for (const [x, y] of ends) w.lineTo(x * 0.55, -h + (y + h) * 0.55);
    w.closePath();
    w.fill();
    w.beginPath();
    for (const [x, y] of ends) {
      w.moveTo(0, -h);
      w.lineTo(x, y);
    }
    for (const f of [0.25, 0.42, 0.6, 0.78, 0.95]) {
      ends.forEach(([x, y], k) => {
        const px = x * f, py = -h + (y + h) * f;
        if (k === 0) w.moveTo(px, py);
        else {
          const [qx, qy] = ends[k - 1];
          w.quadraticCurveTo(((qx + x) / 2) * f * 0.92, -h + (((qy + y) / 2 + h) * f) * 1.04, px, py);
        }
      });
    }
    w.moveTo(0.1 * r / 0.4, -h + 0.38 * h / 0.85);
    w.quadraticCurveTo(0.13 * r / 0.4, -h + 0.6 * h / 0.85, 0.12 * r / 0.4, -h + 0.78 * h / 0.85);
    w.strokeStyle = 'rgba(236,234,226,0.8)';
    w.lineWidth = 0.006;
    w.stroke();
  });
}

// The stove's glazed tiles over x0…x1, from the floor up to `top`: ivory-grey tiles gone darker with smoke toward the
// top, each with a faded blue-grey flower; a dark plinth, a band at the middle, a cornice at the top
function tiles(g, x0, x1, top, seed) {
  const w = x1 - x0, T = 0.2;
  g.fillStyle = '#ddd6c6';
  g.fillRect(x0, -top, w, top);
  g.strokeStyle = 'rgba(120,112,100,0.55)';
  g.lineWidth = 0.004;
  for (let y = -0.2; y > -top + 0.25; y -= T) {
    for (let x = x0 + ((w + 1e-6) % T) / 2; x + T <= x1 + 1e-6; x += T) {
      const k = hash(Math.round((x - x0) * 50 + y * 31), seed);
      g.fillStyle = `rgb(${226 - 12 * k},${220 - 12 * k},${206 - 10 * k})`;
      g.fillRect(x + 0.004, y - T + 0.004, T - 0.008, T - 0.008);
      g.strokeRect(x + 0.004, y - T + 0.004, T - 0.008, T - 0.008);
      g.strokeStyle = 'rgba(96,112,132,0.45)';
      g.beginPath();
      g.arc(x + T / 2, y - T / 2, 0.035, 0, Math.PI * 2);
      for (let a = 0; a < 4; a++) {
        g.moveTo(x + T / 2, y - T / 2);
        g.lineTo(x + T / 2 + 0.06 * Math.cos(a * Math.PI / 2 + 0.78), y - T / 2 + 0.06 * Math.sin(a * Math.PI / 2 + 0.78));
      }
      g.stroke();
      g.strokeStyle = 'rgba(120,112,100,0.55)';
    }
  }
  const soot = g.createLinearGradient(0, -top, 0, -top + 1.2);
  soot.addColorStop(0, 'rgba(80,72,60,0.35)');
  soot.addColorStop(1, 'rgba(80,72,60,0)');
  g.fillStyle = soot;
  g.fillRect(x0, -top, w, 1.2);
  box(g, x0, -0.2, w, 0.2, '#5c5048', 0.008);
  box(g, x0, -1.22, w, 0.06, '#cfc7b4', 0.006);
  box(g, x0, -top, w, 0.16, '#cfc7b4', 0.008);
  box(g, x0, -top + 0.16, w, 0.04, '#bdb4a0', 0.005);
}

// The room's pieces (stage 5; modules/beats; notes.md «Pieces» and «Contract for the check»): `film(scene)` — each piece
// `{after, tells, seconds, from, run}`. `from` — every value a piece begins at but the game's (`<id>_here`, `<id>_mood`,
// and the variants its row names: `rain`, `sun`, `brings`, `cobweb`, `dim`, `coat_drying`); `run` — the director's
// sequence, its moments told (`<piece>:<moment>`), ending in a living pose. Places in metres, [across, distance]: the
// door in the back wall at −1.45…−0.7 (whoever is not in the room waits behind the back wall right of it, unseen), the
// chair turned from the table toward the room, the table along the back wall, the stove before the window on the left,
// the window in the left wall at 3.2…4.1, the cobweb in the back-right corner, his hat's nail on the right wall.
function film(scene) {
  const DEG = 180 / Math.PI, EYE = 1.7;
  const CAMK = ['camera_x', 'camera_z', 'camera_h', 'camera_yaw', 'camera_pitch'];
  const CAM0 = { camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
    camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0 };
  // a camera of its own: the eye [across, distance, height over the floor] looking at a point [across, distance, height]
  const CAM = ([ex, ez, eh], [tx, tz, th]) => ({ ...CAM0, camera_x: ex, camera_z: ez, camera_h: eh - EYE,
    camera_yaw: Math.atan2(tx - ex, tz - ez) * DEG, camera_pitch: Math.atan2(th - eh, Math.hypot(tx - ex, tz - ez)) * DEG });
  const glide = (s, c, over) => s.all(...CAMK.map(k => s.move(k, c[k], { over, ease: 'inOut' })));
  // the room's shots: each a camera of its own (the room is seen from its open side; the operator's framing would go
  // round people toward it)
  const SH = {
    room: CAM0,
    letter: CAM([0.0, 3.5, 1.3], [0.32, 4.38, 0.78]),
    up: CAM([-0.2, 2.2, 1.5], [0.4, 3.85, 1.1]),
    give: CAM([0.15, 1.55, 1.45], [0.15, 3.3, 1.15]),
    read: CAM([0.2, 2.25, 1.35], [0.55, 3.45, 1.05]),
    corner: CAM([1.35, 2.1, 1.6], [1.3, 4.2, 1.55]),
    last: CAM([1.0, 1.35, 1.5], [1.0, 3.7, 1.35]),
    stove: CAM([0.3, 0.25, 1.55], [-0.1, 2.4, 1.15]),
    window: CAM([0.45, 2.35, 1.6], [-1.5, 3.65, 1.3]),
    yard: CAM([-1.05, 3.4, 1.75], [-6.0, 4.6, -4.5]),
    sill: CAM([-0.45, 2.85, 1.45], [-1.45, 3.72, 0.95]),
    stand: CAM([0.25, 1.85, 1.55], [0.38, 3.86, 1.35]),
  };
  const merge = (...xs) => Object.assign({}, ...xs);
  // a person's whole starting state: where, facing, doing; nothing in the hands, no look, no reach, not seated
  const who = (id, [a, d, turn], does = 'stand', more = {}) => {
    const o = { [`${id}_a`]: a, [`${id}_d`]: d, [`${id}_turn`]: turn, [`${id}_do`]: does, [`${id}_look`]: null, [`${id}_reach`]: null,
      [`${id}_on`]: null, [`${id}_with`]: [], [`${id}_wear`]: null, [`${id}_gait`]: null };
    for (const [k, v] of Object.entries(more)) o[`${id}_${k}`] = v;
    return o;
  };
  const sat = (id, [a, d, turn], does, h, more = {}) => who(id, [a, d, turn], does, { on: [a, d, h], ...more });
  const V = scene.kit?.cast?.characters ?? {};

  const SEAT = [0.6, 3.45, 220], SEAT_H = 0.45;
  const HIDE = [-0.25, 5.1], PASS = [-1.05, 5.1], IN = [-1.05, 4.4];
  const TEA = [0.25, 3.85], ASK = [-0.1, 3.3], GIVE = [-0.25, 3.15], HAT = [1.45, 2.92], BRUSH = [-0.45, 4.35], CORNER = [1.2, 4.02];
  const UNDER = [1.4, 3.75], STOVE = [-0.72, 1.45], WIN = [-0.95, 3.65], BACK = [-0.5, 3.2];
  const GIVE_AT = [0.2, 3.3, 1.0], WEB = [1.62, 4.52, 2.0], WINDOW_AT = [-1.59, 3.65, 1.4];
  // the room as it is on these mornings, but for what the game says (rain, sun, the cobweb, the dimness)
  const ROOM = { candle: 1, letter_table: false, tea: false, window: 0, wet: 0, coat_drying: false, hat_peg: true, door: 0.6,
    yard_man_here: false, yard_woman_here: false };
  const seated = (more = {}) => sat('dreamer', SEAT, 'seated', SEAT_H, more);
  const hidden = () => who('matryona', [...HIDE, 270], 'stand', { gait: 'old_walk' });
  // her hands round the brush's pole before her, holding it upright as she goes (her right hand at her chest, her left at
  // her hips: the pole up through them)
  const HOLD = { r: 'matryona#chest', l: 'matryona#hips' };
  const robe = () => (scene.get('coat_drying') ? V.dreamer_robe ?? null : null);

  // she comes in by the door (it swings wider as she passes) and on along `way`
  const enter = async (s, way) => {
    const m = s.person('matryona');
    s.move('door', 0.95, { over: 1.2 });
    await m.walk([PASS, IN, ...way]);
    s.move('door', 0.6, { over: 1.5 });
  };
  // the yard's two, crossing it in the rain far below, never looking up
  const yard = async s => {
    s.person('yard_man').here(true);
    s.person('yard_woman').here(true);
    await s.all(s.person('yard_man').walk([[-4.2, 0.5], [-4.6, 13]]), (async () => {
      await s.wait(1.5);
      await s.person('yard_woman').walk([[-5.6, 11], [-3.4, -2]]);
    })());
  };

  return {
    // ---- Д1, Friday morning: the letter on the table, Matryona brings his tea
    // the letter on the table, close — like a living thing; Matryona comes in with his tea, sets it down by it, looks at
    // it, turns to him (her «От барышни, что ли?»)
    tea: {
      after: [], tells: ['tea:letter', 'tea:asks'], seconds: 15,
      from: () => merge(ROOM, SH.letter, { letter_table: true }, seated({ look: [-0.3, 2.0, 1.05] }), hidden()),
      run: async s => {
        const m = s.person('matryona'), d = s.person('dreamer');
        await s.wait(2.2);
        s.tell('tea:letter');
        m.with(['tea']);
        m.gait('carry_tea');
        glide(s, SH.room, 3);
        await enter(s, [[-0.35, 3.95], TEA]);
        d.look('matryona');
        await m.turn(0);
        const put = m.do('set_down');
        await s.wait(1.4);
        m.with([]);
        s.set('tea', true);
        await put;
        m.gait('old_walk');
        m.look('table_letter#letter');
        await s.wait(1.4);
        glide(s, SH.give, 2.5);
        await m.walk([ASK]);
        await m.turn(105);
        m.look('dreamer');
        s.tell('tea:asks');
        await s.wait(1.5);
      },
    },
    // («Сниму, батюшка, сниму») she glances up at the cobweb and goes out; he gets up, takes the letter from the table,
    // turns to us and puts it in his inside pocket, at his heart
    pocket: {
      after: ['tea'], tells: ['pocket:out', 'pocket:hidden'], seconds: 18,
      from: () => merge(ROOM, SH.give, { letter_table: true, tea: true }, seated({ look: 'matryona' }),
        who('matryona', [...ASK, 105], 'stand', { gait: 'old_walk', look: 'dreamer' })),
      run: async s => {
        const m = s.person('matryona'), d = s.person('dreamer');
        m.look(WEB);
        await s.wait(1.3);
        m.look(null);
        glide(s, SH.room, 3);
        s.move('door', 0.95, { over: 1.2 });
        d.look('matryona');
        await m.walk([[-0.6, 3.9], IN, PASS, HIDE]);
        s.move('door', 0.6, { over: 1.5 });
        s.tell('pocket:out');
        d.look(null);
        d.on(null);
        await d.go('stand_up', { from: [SEAT[0], SEAT[1]], turn: SEAT[2] });
        await d.walk([[0.38, 3.86]]);
        await d.turn(0);
        d.look('table_letter#letter');
        const take = d.do('take_table');
        await s.wait(1.3);
        s.set('letter_table', false);
        d.with(['letter']);
        await take;
        d.look(null);
        glide(s, SH.stand, 2);
        await d.turn(180);
        const hide = d.do('put_pocket');
        await s.wait(2.2);
        d.with([]);
        await hide;
        s.tell('pocket:hidden');
        await s.wait(1.5);
      },
    },

    // ---- the finales' morning (Минута, Лестница, Утро): Matryona comes in with what she brings (`brings`: letter — the
    // letter; none — nothing; hat — his hat, brought back by the boy from Grandmother's) and holds it out to him
    brought: {
      after: [], tells: ['brought:asks'], seconds: 10,
      from: () => merge(ROOM, SH.room, seated({ look: WINDOW_AT }), hidden()),
      run: async s => {
        const m = s.person('matryona'), d = s.person('dreamer'), b = s.get('brings');
        const thing = b === 'hat' ? 'his_hat' : b === 'none' ? null : 'letter';
        s.set('hat_peg', b !== 'hat');
        m.with(thing ? [thing] : []);
        const going = enter(s, [GIVE]);
        await s.wait(2.2);
        d.look('matryona');
        glide(s, SH.give, 3);
        await going;
        await m.turn(110);
        m.look('dreamer');
        if (thing) m.reach({ r: GIVE_AT });
        s.tell('brought:asks');
        await s.wait(1.5);
      },
    },
    // he takes the letter from her hand, opens it and reads; she steps back and watches him, her lips pressed
    take: {
      after: ['brought'], tells: ['take:reads'], seconds: 7,
      from: () => merge(ROOM, SH.give, { hat_peg: true }, seated({ look: 'matryona' }),
        who('matryona', [...GIVE, 110], 'stand', { gait: 'old_walk', look: 'dreamer', with: ['letter'], reach: { r: GIVE_AT } })),
      run: async s => {
        const m = s.person('matryona'), d = s.person('dreamer');
        d.look('matryona#letter');
        d.reach({ r: 'matryona#letter' });
        await s.wait(1.0);
        m.with([]);
        m.reach(null);
        d.reach(null);
        d.with(['letter_open']);
        d.do('read', { loop: true });
        d.look('dreamer#letter_open');
        glide(s, SH.read, 2.5);
        await m.walk([[-0.55, 3.0]]);
        await m.turn(120);
        m.look('dreamer');
        s.tell('take:reads');
        await s.wait(1.5);
      },
    },
    // В12 «сними»: grumbling, she hangs up his hat if she has it, takes the long brush from by the door, goes to the
    // corner and sweeps the cobweb down; she stands with the brush by the bare corner
    sweep: {
      after: ['brought', 'take'], tells: ['sweep:gone'], seconds: 18,
      from: () => merge(ROOM, SH.room, { cobweb: 1 }, seated({ look: 'matryona' }), who('matryona', [...GIVE, 110], 'stand', { gait: 'old_walk', look: 'dreamer' })),
      run: async s => {
        const m = s.person('matryona'), d = s.person('dreamer');
        glide(s, SH.room, 2);
        d.look('matryona');
        m.look(null);
        m.reach(null);
        if ((s.get('matryona_with') ?? []).includes('his_hat')) {
          await m.walk([[0.9, 2.75], HAT]);
          await m.turn(90);
          const hang = m.do('hang');
          await s.wait(1.4);
          m.with([]);
          s.set('hat_peg', true);
          await hang;
        } else m.with([]);
        await m.walk([[-0.3, 3.7], BRUSH]);
        await m.turn(0);
        m.reach({ r: 'brush#brush' });
        await s.wait(0.7);
        m.with(['brush']);
        m.reach(HOLD);
        await s.wait(0.4);
        glide(s, SH.corner, 3);
        await m.walk([[0.0, 3.98], CORNER]);
        await m.turn(45);
        m.reach(null);
        m.look(WEB);
        m.do('sweep_high', { loop: true });
        await s.move('cobweb', 0, { over: 3.5, ease: 'in' });
        s.tell('sweep:gone');
        m.do('stand');
        m.reach(HOLD);
        await m.turn(200);
        m.look('dreamer');
        await s.wait(1.5);
      },
    },
    // В12 «оставь»: she nods, relieved, and shuffles off to stand under the cobweb looking up at it; the room seems to
    // grow older with her (`dim` rises)
    leave: {
      after: ['brought', 'take'], tells: ['leave:nod'], seconds: 12,
      from: () => merge(ROOM, SH.give, { cobweb: 1, dim: 0 }, seated({ look: 'matryona' }), who('matryona', [...GIVE, 110], 'stand', { gait: 'old_walk', look: 'dreamer' })),
      run: async s => {
        const m = s.person('matryona');
        m.reach(null);
        m.look('dreamer');
        await m.do('nod');
        s.tell('leave:nod');
        s.move('dim', 1, { over: 6, ease: 'inOut' });
        glide(s, SH.room, 3);
        await m.walk([[0.0, 3.98], UNDER]);
        await m.turn(200);
        m.look('dreamer');
        await s.wait(1.5);
        m.look('dreamer');
        await s.wait(2);
      },
    },
    // («Целая минута блаженства!..») the last frame: the camera draws slowly back to Matryona by the corner — the cobweb
    // or the bare corner — and him seated before us
    minute: {
      after: ['sweep', 'leave'], tells: ['minute:last'], seconds: 10,
      from: () => merge(ROOM, SH.room, seated({ look: [-0.3, 2.0, 1.05] }), who('matryona', [...UNDER, 200], 'stand', { gait: 'old_walk', look: 'dreamer' })),
      run: async s => {
        const d = s.person('dreamer');
        if ((s.get('dreamer_with') ?? []).includes('letter_open')) d.look('dreamer#letter_open');
        else d.look([-0.3, 2.0, 1.05]);
        await glide(s, SH.last, 8);
        s.tell('minute:last');
        await s.wait(1.5);
      },
    },
    // «Утро»: («Сниму, батюшка, сни…») he puts the letter away, gets up, takes his hat from its nail, puts it on and goes
    // out by the door; she looks after him at the empty door
    out: {
      after: ['take'], tells: ['out:hat', 'out:gone'], seconds: 24,
      from: () => merge(ROOM, SH.read, seated({ look: 'dreamer#letter_open', with: ['letter_open'], do: { motion: 'read', loop: true } }),
        who('matryona', [-0.55, 3.0, 120], 'stand', { gait: 'old_walk', look: 'dreamer' })),
      run: async s => {
        const m = s.person('matryona'), d = s.person('dreamer');
        d.look(null);
        d.with(['letter']);
        d.on(null);
        await d.go('stand_up', { from: [SEAT[0], SEAT[1]], turn: SEAT[2] });
        const hide = d.do('put_pocket');
        await s.wait(2.2);
        d.with([]);
        await hide;
        glide(s, SH.room, 2.5);
        await d.walk([[1.0, 2.9], HAT]);
        await d.turn(90);
        d.look('hat_peg#hat');
        d.reach({ r: 'hat_peg#hat' });
        await s.wait(0.7);
        s.set('hat_peg', false);
        d.with(['his_hat']);
        d.reach(null);
        d.look(null);
        await d.turn(180);
        const on = d.do('hat_on');
        await s.wait(1.4);
        d.with([]);
        d.wear({ hat: 'tophat' });
        await on;
        s.tell('out:hat');
        s.move('door', 0.95, { over: 1.5 });
        await d.walk([[0.7, 3.2], [-0.4, 4.15], IN, PASS]);
        s.tell('out:gone');
        await m.turn(20);
        m.look('door');
        await d.walk([HIDE]);
        await s.wait(1);
      },
    },

    // ---- «Окно», Monday morning, rain
    // У4: Matryona, back from the market, hangs his wet frock coat on the stove (`coat_drying`); he sits in his old dressing
    // gown; she talks to the coat, not to him
    stove: {
      after: [], tells: ['stove:hung'], seconds: 6,
      from: () => merge(ROOM, SH.stove, { coat_drying: true }, seated({ look: WINDOW_AT, wear: V.dreamer_robe ?? null }),
        who('matryona', [...STOVE, 255], 'stand', { gait: 'old_walk', look: 'stove#nail' })),
      run: async s => {
        const m = s.person('matryona');
        await m.do('hang');
        m.do('stand');
        m.look('coat_dry');
        s.tell('stove:hung');
        await s.wait(2);
      },
    },
    // Вс: nothing comes. Matryona looks in at the door; she shakes her head («Не было, батюшка»)
    nothing: {
      after: [], tells: ['nothing:in', 'nothing:no'], seconds: 10,
      from: () => merge(ROOM, SH.room, seated({ look: [-1.07, 4.8, 1.6] }), hidden()),
      run: async s => {
        const m = s.person('matryona'), d = s.person('dreamer');
        await enter(s, []);
        await m.turn(150);
        m.look('dreamer');
        d.look('matryona');
        s.tell('nothing:in');
        await s.wait(2.5);
        await m.do('shake_head');
        s.tell('nothing:no');
        await s.wait(1);
      },
    },
    // М7: he gets up, goes to the window, closed all the game, and puts his hands to its leaves (the game opens it by
    // `window` 0…1 as the finger pulls: his hands go with the latches)
    to_window: {
      after: ['stove', 'nothing'], tells: ['to_window:hands'], seconds: 9,
      from: () => merge(ROOM, SH.room, { coat_drying: !!scene.get('coat_drying') }, seated({ look: WINDOW_AT, wear: robe() }),
        scene.get('coat_drying') ? who('matryona', [...STOVE, 255], 'stand', { gait: 'old_walk', look: 'coat_dry' })
          : who('matryona', [...IN, 150], 'stand', { gait: 'old_walk', look: 'dreamer' })),
      run: async s => {
        const d = s.person('dreamer'), m = s.person('matryona');
        d.look(null);
        d.on(null);
        await d.go('stand_up', { from: [SEAT[0], SEAT[1]], turn: SEAT[2] });
        m.look('dreamer');
        glide(s, SH.window, 3);
        await d.walk([[-0.5, 3.45], WIN]);
        await d.turn(270);
        d.look('window#latch');
        d.reach({ r: 'leaf_far#latch', l: 'leaf_near#latch' });
        await s.wait(1);
        s.tell('to_window:hands');
        await s.wait(0.5);
      },
    },
    // М7 missed: Matryona, grumbling, opens it herself; he stands back, then comes to the open window
    matryona_opens: {
      after: ['to_window'], tells: ['matryona_opens:open'], seconds: 14,
      from: () => merge(ROOM, SH.window, { coat_drying: !!scene.get('coat_drying') },
        who('dreamer', [...WIN, 270], 'stand', { look: 'window#latch', wear: robe(), reach: { r: 'leaf_far#latch', l: 'leaf_near#latch' } }),
        scene.get('coat_drying') ? who('matryona', [...STOVE, 255], 'stand', { gait: 'old_walk', look: 'dreamer' })
          : who('matryona', [...IN, 150], 'stand', { gait: 'old_walk', look: 'dreamer' })),
      run: async s => {
        const d = s.person('dreamer'), m = s.person('matryona');
        d.reach(null);
        d.look('matryona');
        await d.walk([BACK]);
        await d.turn(300);
        await m.walk([[-0.7, 3.3], WIN]);
        await m.turn(270);
        m.look('window#latch');
        m.reach({ r: 'leaf_far#latch', l: 'leaf_near#latch' });
        await s.wait(0.6);
        await s.move('window', 1, { over: 2.5, ease: 'inOut' });
        s.tell('matryona_opens:open');
        m.reach(null);
        await m.walk([[-0.45, 2.75]]);
        await m.turn(30);
        m.look('dreamer');
        d.look(WINDOW_AT);
        await d.walk([WIN]);
        await d.turn(270);
      },
    },
    // the window open: the rain comes in on the sill (`wet` rises); the camera looks out and down at the yard — the rain,
    // an ordinary day, the two crossing it never look up; then the last frame: the open window, the wet sill, his hand on
    // it, his face not seen
    opened: {
      after: ['to_window', 'matryona_opens'], tells: ['opened:yard', 'opened:last'], seconds: 18,
      from: () => merge(ROOM, SH.window, { coat_drying: !!scene.get('coat_drying') },
        who('dreamer', [...WIN, 270], 'stand', { look: 'window#latch', wear: robe(), reach: { r: 'leaf_far#latch', l: 'leaf_near#latch' } }),
        scene.get('coat_drying') ? who('matryona', [...STOVE, 255], 'stand', { gait: 'old_walk', look: 'dreamer' })
          : who('matryona', [...IN, 150], 'stand', { gait: 'old_walk', look: 'dreamer' }),
        who('yard_man', [-4.0, -3, 0], 'stand'), who('yard_woman', [-5.6, 12.5, 180], 'stand')),
      run: async s => {
        const d = s.person('dreamer');
        if ((s.get('window') ?? 0) < 1) await s.move('window', 1, { over: 1.5, ease: 'inOut' });
        d.reach({ r: 'sill#hand' });
        d.look([-6, 4.5, -3]);
        s.move('wet', 1, { over: 12 });
        const crossing = yard(s);
        await glide(s, SH.yard, 3);
        s.tell('opened:yard');
        await s.wait(4);
        await glide(s, SH.sill, 3.5);
        s.tell('opened:last');
        await crossing;
      },
    },
  };
}

// The standing layouts of the game's steps (the key `moment`, stage 4: people present, standing, no motion), each as a
// piece leaves it: tea — Д1, the tea set down by the letter; letter — a finale's morning, Matryona holding out the
// letter; corner — the last frame of «Минута», Matryona by the corner; stove — «Окно» У4; window — the open window
const MOMENTS = { tea: ['pocket'], letter: ['take'], corner: ['minute'], stove: ['stove'],
  window: ['opened', { window: 1, wet: 1, dreamer_reach: { r: 'sill#hand' }, dreamer_look: [-6, 4.5, -3] }] };

return { INK, greenWall, cut, box, leaf, web, tiles, film, MOMENTS };
