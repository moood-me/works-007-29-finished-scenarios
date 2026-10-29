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

// The room's standing layouts of the game's steps (stage 4: the key `moment`; people placed, standing or seated, no
// motion): `room(scene).layouts` — each a function giving every value it sets (`monday` and `window` take whether his
// coat is drying, else read `coat_drying`) (the people, the room's things, its
// camera). The game's own keys stay the game's: `rain`, `sun`, `dim`, `cobweb`, `coat_drying`. Places in metres,
// [across, distance]: the door in the back wall at −1.45…−0.7 (whoever is not in the room waits behind the back wall right
// of it, unseen), the chair turned from the table toward the room, the table along the back wall, the stove beside the
// viewer on the left, the window in the left wall at 3.2…4.1, the cobweb in the back-right corner, his hat's nail on the
// right wall.
function room(scene) {
  const DEG = 180 / Math.PI, EYE = 1.7;
  const CAM0 = { camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
    camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0 };
  // a camera of its own: the eye [across, distance, height over the floor] looking at a point [across, distance, height]
  const CAM = ([ex, ez, eh], [tx, tz, th]) => ({ ...CAM0, camera_x: ex, camera_z: ez, camera_h: eh - EYE,
    camera_yaw: Math.atan2(tx - ex, tz - ez) * DEG, camera_pitch: Math.atan2(th - eh, Math.hypot(tx - ex, tz - ez)) * DEG });
  // each layout's shot: a camera of its own, framing the faces (the room is seen from its open side; the operator's
  // framing would go round people toward it)
  const SH = {
    give: CAM([0.15, 1.55, 1.45], [0.15, 3.3, 1.15]),
    last: CAM([1.0, 1.35, 1.5], [1.0, 3.7, 1.35]),
    stove: CAM([0.4, 0.3, 1.55], [-0.2, 2.6, 1.15]),
    sill: CAM([0.0, 2.35, 1.5], [-1.45, 3.72, 1.0]),
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
  const IN = [-1.05, 4.4];
  const ASK = [-0.1, 3.3], GIVE = [-0.25, 3.15], UNDER = [1.4, 3.75], STOVE = [-0.85, 1.85], WIN = [-0.95, 3.65];
  const GIVE_AT = [0.2, 3.3, 1.0], WINDOW_AT = [-1.59, 3.65, 1.4];
  // her look between him and us, so her face (and her sharp eyes) read
  const TO_US = [0.15, 1.9, 1.3];
  // the room as it is on these mornings, but for what the game says (rain, sun, the cobweb, the dimness)
  const ROOM = { candle: 1, letter_table: false, tea: false, window: 0, wet: 0, hat_peg: true, door: 0.6,
    yard_man_here: false, yard_woman_here: false };
  const seated = (more = {}) => sat('dreamer', SEAT, 'seated', SEAT_H, more);
  // his frock coat drying (`coat_drying`, or as a caller says): he is in his dressing gown
  const dry = d => (d ?? !!scene.get('coat_drying'));
  const robe = d => (dry(d) ? V.dreamer_robe ?? null : null);
  // Monday: Matryona at the stove, at his coat, talking to it and not to him (У4, the coat drying), or in the door
  // looking at him (У: she has looked in)
  const monday_m = d => (dry(d) ? who('matryona', [...STOVE, 220], 'stand', { gait: 'old_walk', look: 'coat_dry' })
    : who('matryona', [...IN, 150], 'stand', { gait: 'old_walk', look: 'dreamer' }));


  // ---- the standing layouts (stage 4, `moment`), each where a piece leaves its people
  const layouts = {
    // Д1: the tea set down by the letter, Matryona asking him
    tea: () => merge(ROOM, SH.give, { letter_table: true, tea: true }, seated({ look: 'matryona' }),
      who('matryona', [...ASK, 115], 'stand', { gait: 'old_walk', look: TO_US })),
    // a finale's morning: Matryona holding out the letter to him
    letter: () => merge(ROOM, SH.give, seated({ look: 'matryona' }),
      who('matryona', [...GIVE, 120], 'stand', { gait: 'old_walk', look: TO_US, with: ['letter'], reach: { r: GIVE_AT } })),
    // «Минута»'s last frame: Matryona under the cobweb (or the bare corner), he seated reading
    corner: () => merge(ROOM, SH.last, seated({ look: 'dreamer#letter_open', with: ['letter_open'], do: { motion: 'read', loop: true } }),
      who('matryona', [...UNDER, 200], 'stand', { gait: 'old_walk', look: [0.7, 1.5, 1.35] })),
    // «Окно», Monday: he in his chair (in his dressing gown while his coat dries), Matryona at the stove or in the door
    monday: d => merge(ROOM, SH.stove, { coat_drying: dry(d) }, seated({ look: WINDOW_AT, wear: robe(d) }), monday_m(d)),
    // the open window: his hand on the wet sill; two crossing the yard below in the rain
    window: d => merge(ROOM, SH.sill, { window: 1, wet: 1, coat_drying: dry(d) }, who('dreamer', [...WIN, 270], 'stand', { look: [-6, 4.5, -3], wear: robe(d),
      reach: { r: 'sill#hand' } }), monday_m(d), who('yard_man', [-4.3, 3.0, 20], 'stand'), who('yard_woman', [-5.2, 6.5, 200], 'stand'),
      { yard_man_here: true, yard_woman_here: true }),
  };
  return { layouts };
}

return { INK, greenWall, cut, box, leaf, web, tiles, room };


