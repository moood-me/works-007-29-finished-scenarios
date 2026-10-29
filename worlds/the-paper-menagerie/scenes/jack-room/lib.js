// What Jack's room shares: its wallpaper and the hall's paint (walls 2.5 m high, metres from a wall's foot, y up
// negative; the caller cuts its own openings before calling), the pale patches where things hung once the room is
// emptied, and the paper animals — folded from wrapping paper, flat facets a shade lighter or darker at each fold,
// the creases drawn (as in the kitchen) — drawn standing with their feet on y 0 at x0, facing right (s 1) or left (−1).
const H = 2.52;
// Jack's wallpaper: a pale washed blue with thin cream stripes and, between them, small cream stars in rows; a white
// skirting board.
function wallpaper(g, x0, x1) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -H, w, H + 0.02);
  g.clip();
  g.fillStyle = '#c9d6dc';
  g.fillRect(x0, -H, w, H + 0.02);
  g.fillStyle = 'rgba(244,240,226,0.55)';
  for (let x = Math.ceil(x0 / 0.3) * 0.3; x < x1; x += 0.3) g.fillRect(x, -H, 0.012, H);
  g.fillStyle = 'rgba(246,242,228,0.8)';
  for (let y = -2.35; y < -0.25; y += 0.24) {
    for (let x = Math.ceil(x0 / 0.3) * 0.3 - 0.15; x < x1; x += 0.3) {
      g.beginPath();
      for (let i = 0; i < 10; i++) {
        const a = -Math.PI / 2 + (i * Math.PI) / 5,
          r = i % 2 ? 0.006 : 0.015;
        g.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r);
      }
      g.closePath();
      g.fill();
    }
  }
  g.fillStyle = '#f3efe5';
  g.fillRect(x0, -0.12, w, 0.14);
  g.fillStyle = '#d6cfc0';
  g.fillRect(x0, -0.125, w, 0.01);
  g.restore();
}
// The hall: warm cream paint above a wainscot of narrow beaded boards painted sage, a moulding along its top.
function hall(g, x0, x1) {
  const w = x1 - x0;
  g.fillStyle = '#efe4cc';
  g.fillRect(x0, -H, w, H + 0.02);
  g.fillStyle = '#a7b59a';
  g.fillRect(x0, -0.92, w, 0.94);
  g.fillStyle = 'rgba(80,96,72,0.25)';
  for (let x = Math.ceil(x0 / 0.09) * 0.09; x < x1; x += 0.09) g.fillRect(x, -0.88, 0.006, 0.78);
  g.fillStyle = '#c9d2bc';
  g.fillRect(x0, -0.96, w, 0.05);
  g.fillStyle = '#eee8d8';
  g.fillRect(x0, -0.12, w, 0.14);
}
// A pale patch on a wall where a picture hung all those years (the room emptied): a rectangle of the paper a little
// brighter than round it, a nail hole.
function patch(g, x, y, w, h) {
  g.fillStyle = 'rgba(250,250,244,0.35)';
  g.fillRect(x, y, w, h);
  g.fillStyle = 'rgba(80,80,80,0.6)';
  g.beginPath();
  g.arc(x + w / 2, y + 0.02, 0.005, 0, Math.PI * 2);
  g.fill();
}
const poly = (g, pts, fill) => {
  g.fillStyle = fill;
  g.beginPath();
  g.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) g.lineTo(pts[i][0], pts[i][1]);
  g.closePath();
  g.fill();
};
const crease = (g, a, b, c) => {
  g.strokeStyle = c;
  g.lineWidth = 0.0025;
  g.beginPath();
  g.moveTo(a[0], a[1]);
  g.lineTo(b[0], b[1]);
  g.stroke();
};
// a goat (as the kitchen's): legs, the body's two facets along the spine fold, a flick of a tail, the paper's dots,
// the head and neck with horns and a beard
function goat(g, x0, s, light, dark, mark) {
  const X = x => x0 + s * x;
  for (const lx of [-0.045, -0.03, 0.03, 0.045])
    poly(g, [[X(lx - 0.006), -0.045], [X(lx + 0.006), -0.045], [X(lx), 0]], lx < 0 ? dark : light);
  poly(g, [[X(-0.06), -0.085], [X(0.05), -0.09], [X(0.055), -0.045], [X(-0.055), -0.042]], light);
  poly(g, [[X(-0.06), -0.085], [X(0.05), -0.09], [X(0.03), -0.068], [X(-0.04), -0.066]], dark);
  crease(g, [X(-0.06), -0.085], [X(0.05), -0.09], mark);
  poly(g, [[X(-0.058), -0.084], [X(-0.075), -0.1], [X(-0.062), -0.078]], dark);
  g.fillStyle = mark;
  for (let i = 0; i < 6; i++) g.fillRect(X(-0.045 + i * 0.016) - (s < 0 ? 0.004 : 0), -0.06 - (i % 2) * 0.012, 0.004, 0.004);
  poly(g, [[X(0.035), -0.088], [X(0.06), -0.13], [X(0.075), -0.12], [X(0.055), -0.082]], light);
  poly(g, [[X(0.058), -0.13], [X(0.092), -0.115], [X(0.075), -0.105]], dark);
  poly(g, [[X(0.06), -0.13], [X(0.045), -0.155], [X(0.066), -0.133]], dark);
  poly(g, [[X(0.066), -0.13], [X(0.058), -0.158], [X(0.072), -0.131]], light);
  poly(g, [[X(0.085), -0.112], [X(0.088), -0.095], [X(0.08), -0.108]], light);
  crease(g, [X(0.06), -0.13], [X(0.055), -0.082], mark);
  g.fillStyle = '#2a2624';
  g.fillRect(X(0.071) - 0.002, -0.121, 0.004, 0.004);
}
// a deer folded from gold-brown paper: long thin legs, a narrow body, the neck up, two branched antlers of creased
// paper, a white scut
function deer(g, x0, s) {
  const X = x => x0 + s * x,
    L = '#d7a85a',
    D = '#b8863e',
    C = 'rgba(90,60,20,0.55)';
  for (const [lx, c] of [[-0.04, D], [-0.025, L], [0.03, D], [0.045, L]])
    poly(g, [[X(lx - 0.005), -0.085], [X(lx + 0.005), -0.085], [X(lx + 0.002), 0], [X(lx - 0.002), 0]], c);
  poly(g, [[X(-0.058), -0.125], [X(0.055), -0.13], [X(0.06), -0.082], [X(-0.052), -0.08]], L);
  poly(g, [[X(-0.058), -0.125], [X(0.055), -0.13], [X(0.03), -0.108], [X(-0.04), -0.106]], D);
  crease(g, [X(-0.058), -0.125], [X(0.055), -0.13], C);
  poly(g, [[X(-0.06), -0.122], [X(-0.07), -0.13], [X(-0.058), -0.112]], '#f3ead8');
  poly(g, [[X(0.04), -0.128], [X(0.062), -0.19], [X(0.078), -0.186], [X(0.062), -0.122]], L);
  poly(g, [[X(0.06), -0.19], [X(0.1), -0.178], [X(0.08), -0.168]], D);
  crease(g, [X(0.062), -0.19], [X(0.062), -0.122], C);
  g.strokeStyle = '#8a6430';
  g.lineWidth = 0.004;
  g.lineCap = 'round';
  g.beginPath();
  g.moveTo(X(0.066), -0.192);
  g.lineTo(X(0.058), -0.235);
  g.moveTo(X(0.061), -0.215);
  g.lineTo(X(0.045), -0.228);
  g.moveTo(X(0.074), -0.19);
  g.lineTo(X(0.09), -0.228);
  g.moveTo(X(0.083), -0.21);
  g.lineTo(X(0.1), -0.218);
  g.stroke();
  g.fillStyle = '#2a2624';
  g.fillRect(X(0.079) - 0.002, -0.184, 0.004, 0.004);
}
// a water buffalo folded from brown kraft paper (as the kitchen's): broad facets, swept-back horns
function buffalo(g, x0, s) {
  const X = x => x0 + s * x;
  for (const [x, c] of [[-0.05, '#7d5d3f'], [-0.035, '#9a7752'], [0.035, '#7d5d3f'], [0.05, '#9a7752']])
    poly(g, [[X(x - 0.008), -0.04], [X(x + 0.008), -0.04], [X(x), 0]], c);
  poly(g, [[X(-0.075), -0.075], [X(0.055), -0.085], [X(0.065), -0.035], [X(-0.07), -0.03]], '#a9845c');
  poly(g, [[X(-0.075), -0.075], [X(0.055), -0.085], [X(0.03), -0.055], [X(-0.05), -0.053]], '#8e6c48');
  poly(g, [[X(0.05), -0.085], [X(0.095), -0.07], [X(0.09), -0.04], [X(0.06), -0.038]], '#8e6c48');
  poly(g, [[X(0.07), -0.08], [X(0.05), -0.115], [X(0.1), -0.102], [X(0.08), -0.082]], '#ccb791');
  g.fillStyle = '#2a2624';
  g.fillRect(X(0.082) - (s < 0 ? 0.005 : 0), -0.066, 0.005, 0.005);
  crease(g, [X(-0.075), -0.075], [X(0.055), -0.085], 'rgba(70,50,30,0.6)');
}
// a little terracotta flower pot of dark soil, its rim at y −0.11 (for the buffalo standing in it)
function pot(g, x0) {
  poly(g, [[x0 - 0.09, -0.11], [x0 + 0.09, -0.11], [x0 + 0.07, 0], [x0 - 0.07, 0]], '#b8653f');
  g.fillStyle = '#c9774d';
  g.fillRect(x0 - 0.1, -0.125, 0.2, 0.025);
  g.fillStyle = '#4c3a2e';
  g.fillRect(x0 - 0.088, -0.13, 0.176, 0.008);
}
// a frog folded from green paper, squatting, its back legs folded under it: about 6 cm long
function frog(g, x0, s, light, dark) {
  const X = x => x0 + s * x;
  poly(g, [[X(-0.032), 0], [X(-0.03), -0.022], [X(0.006), -0.036], [X(0.03), -0.02], [X(0.032), 0]], light);
  poly(g, [[X(-0.032), 0], [X(-0.03), -0.022], [X(-0.01), -0.012], [X(-0.006), 0]], dark);
  poly(g, [[X(0.012), 0], [X(0.03), -0.02], [X(0.036), 0]], dark);
  crease(g, [X(-0.03), -0.022], [X(0.03), -0.02], 'rgba(40,70,30,0.6)');
  g.fillStyle = '#f4f0e0';
  g.beginPath();
  g.arc(X(0.012), -0.034, 0.004, 0, Math.PI * 2);
  g.arc(X(0.022), -0.03, 0.004, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#2a2624';
  g.fillRect(X(0.012) - 0.0015, -0.035, 0.003, 0.003);
  g.fillRect(X(0.022) - 0.0015, -0.031, 0.003, 0.003);
}
// a paper crane, wings up, its middle at (x, y), about 0.1 m across
function crane(g, x, y, c, d) {
  poly(g, [[x - 0.05, y + 0.005], [x, y + 0.018], [x + 0.05, y + 0.005], [x, y - 0.002]], c);
  poly(g, [[x - 0.012, y + 0.008], [x - 0.04, y - 0.05], [x + 0.004, y + 0.004]], d);
  poly(g, [[x + 0.012, y + 0.008], [x + 0.036, y - 0.046], [x - 0.004, y + 0.004]], c);
  poly(g, [[x + 0.045, y + 0.006], [x + 0.062, y - 0.016], [x + 0.058, y + 0.002]], d);
  poly(g, [[x - 0.045, y + 0.006], [x - 0.06, y - 0.01], [x - 0.054, y + 0.004]], d);
}
// years of attic dust over whatever was just painted in this canvas (source-atop: only on what is painted)
function dust(g, x, y, w, h) {
  g.save();
  g.globalCompositeOperation = 'source-atop';
  g.fillStyle = 'rgba(176,166,150,0.42)';
  g.fillRect(x, y, w, h);
  g.restore();
}
// The room's moments (the key `moment`) and what the menagerie's choice left (`menagerie`): every key of the room and
// its people for one moment — the script sets them when `moment` changes (notes.md has the table), and the pieces
// begin from them.
//   bedtime — the prologue's night (П.4): Jack sitting up on his bed with Laohu by him, Mom sitting by his pillow.
//   night   — chapter 1's last night (1.6): Jack on his bed over the empty shoe box, the animals on the shelf, Laohu
//             taped on the pillow; with `menagerie` set, as each choice leaves the room.
//   hatch   — the same night: the box shut on the stool under the open attic hatch in the hall, Jack under it.
//   ran     — 1.4 after «Убежать», at dusk: Jack at his window, the scraps on the sill; Dad at his shut door with the
//             plate of buns.
//   call    — 1.5 after «Убежать», in the evening: Mom at his open door; Jack by the window with the scraps.
//   packed  — chapter 3 (3.2), the house sold: the room emptied, cartons, day; Jack grown; by `menagerie` the box down
//             from the attic with the dusty animals and Laohu out of it, or Laohu alone on the bare shelf (and with
//             «весь дом» Dad in the doorway with a paper frog).
const BED = 0.48;
function moment(cast, moment, menagerie) {
  const m = menagerie;
  const k = {
    night: 0, day: 0, lamp: 0, hall: 0,
    packed: false, shelf: 'animals', zoo: false, scraps: false, plate_door: false,
    box: 'none', box_a: -1.45, box_d: 3.0, box_e: 0, stir: false,
    hatch: 0, door: 270,
    goats_a: -0.55, goats_d: 4.12, goats_e: 0.88,
    laohu_out: true, laohu_a: -2.4, laohu_d: 3.88, laohu_e: 0.59, laohu_dir: 1,
    laohu_tape: true, laohu_fold: false, laohu_dust: false, laohu_asleep: false, laohu_purr: 0, laohu_unfold: 0, laohu_shake: 0,
    letter_close: 0, tremble: 0,
    dad_frog: false,
    jack_here: true, jack_wear: null, jack_with: null, jack_on: null, jack_do: 'stand', jack_mood: 'neutral', jack_reach: null,
    mom_here: false, mom_wear: { parts: [] }, mom_with: null, mom_on: null, mom_do: 'stand', mom_mood: 'neutral', mom_reach: null,
    dad_here: false, dad_wear: null, dad_with: null, dad_on: null, dad_do: 'stand', dad_mood: 'neutral', dad_reach: null,
  };
  const person = (id, a, d, turn, look) => Object.assign(k, { [`${id}_here`]: true, [`${id}_a`]: a, [`${id}_d`]: d, [`${id}_turn`]: turn, [`${id}_look`]: look });
  const seat = (id, a, d, turn, look) => {
    person(id, a, d, turn, look);
    k[`${id}_on`] = [a, d, BED];
    k[`${id}_do`] = 'sitting_on_bed';
  };
  if (moment === 'bedtime') {
    Object.assign(k, { night: 1, lamp: 1, laohu_tape: false, laohu_a: -2.4, laohu_d: 2.92, laohu_e: BED + 0.01 });
    seat('jack', -2.05, 3.05, 200, 'laohu');
    k.jack_mood = 'tired';
    seat('mom', -2.05, 3.62, 200, 'jack');
    k.mom_mood = 'smile';
  } else if (moment === 'hatch') {
    Object.assign(k, { night: 1, lamp: 1, hall: 1, door: 180, hatch: 1, box: 'shut', box_a: 1.5, box_d: 3.36, box_e: 0.45, shelf: 'empty' });
    if (m === 'laohu') Object.assign(k, { laohu_asleep: true });
    else Object.assign(k, { laohu_out: false, stir: true });
    person('jack', 1.08, 3.05, 200, 'ceiling_hall#hatch');
    k.jack_mood = 'sad';
  } else if (moment === 'ran') {
    Object.assign(k, { hall: 1, scraps: true, laohu_out: false });
    person('jack', -1.1, 3.62, 20, [5, 8, -0.6]);
    k.jack_mood = 'sad';
    person('dad', 1.05, 3.3, 235, 'door#door');
    Object.assign(k, { dad_do: 'offer_hand', dad_with: ['plate'], dad_mood: 'sad' });
  } else if (moment === 'call') {
    Object.assign(k, { night: 0.5, lamp: 1, hall: 1, door: 180, laohu_out: false });
    person('jack', -1.1, 3.55, 120, 'mom');
    Object.assign(k, { jack_do: 'holding_toy', jack_with: ['scraps'], jack_mood: 'sad' });
    person('mom', 0.9, 3.35, 250, 'jack');
  } else if (moment === 'packed') {
    Object.assign(k, { day: 1, packed: true, shelf: 'bare', door: 180, laohu_fold: true, jack_wear: { ...cast.jack_grown, parts: [] } });
    if (m === 'laohu' || m === 'house') {
      Object.assign(k, { laohu_a: -1.6, laohu_d: 4.12, laohu_e: 1.285 });
      person('jack', -0.75, 3.35, 250, 'laohu');
      if (m === 'house') {
        person('dad', 0.95, 3.3, 245, 'jack');
        Object.assign(k, { dad_wear: { ...cast.dad_grey, parts: [] }, dad_do: 'holding_toy', dad_frog: true });
      }
    } else {
      Object.assign(k, { hatch: 1, box: 'opened', box_a: -1.3, box_d: 3.2, laohu_a: -0.85, laohu_d: 3.1, laohu_e: 0, laohu_dust: true });
      person('jack', -0.55, 3.6, 220, 'laohu');
      k.jack_mood = 'surprised';
    }
  } else {
    // night (1.6)
    Object.assign(k, { night: 1, lamp: 1, box: 'empty' });
    seat('jack', -2.05, 3.25, 160, 'shoebox#box');
    k.jack_mood = 'sad';
    if (m === 'attic') Object.assign(k, { box: 'shut', stir: true, shelf: 'empty', laohu_out: false });
    else if (m === 'laohu') Object.assign(k, { box: 'shut', shelf: 'empty', laohu_asleep: true });
    else if (m === 'house') {
      Object.assign(k, { zoo: true, shelf: 'deer', goats_a: -2.45, goats_d: 2.85, goats_e: BED + 0.01 });
      k.jack_look = 'goats';
      k.jack_mood = 'smile';
    }
  }
  return k;
}

// The room's pieces (stage 5; modules/beats; the contract: game.md «Stage 5 — pieces», notes.md «Pieces»):
// `film(scene)` — each `{after, tells, seconds, from, run}`. `from` — a moment's keys (above) and the piece's own over
// them; never the game's: `<id>_here`, `<id>_mood`, `menagerie` (the game's «Зверинец»), `laohu_ear`, `laohu_seam`.
function film(scene) {
  const DEG = 180 / Math.PI, EYE = 1.7;
  const CAMK = ['camera_x', 'camera_z', 'camera_h', 'camera_yaw', 'camera_pitch'];
  const CAM0 = { camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
    camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0 };
  const CAM = ([ex, ez, eh], [tx, tz, th]) => ({ ...CAM0, camera_x: ex, camera_z: ez, camera_h: eh - EYE,
    camera_yaw: Math.atan2(tx - ex, tz - ez) * DEG, camera_pitch: Math.atan2(th - eh, Math.hypot(tx - ex, tz - ez)) * DEG });
  const glide = (s, c, over) => s.all(...CAMK.map(k => s.move(k, c[k], { over, ease: 'inOut' })));
  const SH = {
    wide: CAM0,
    bed: CAM([-1.15, 1.9, 1.25], [-2.05, 3.3, 0.98]),
    jack_bed: CAM([-1.0, 1.75, 1.35], [-2.05, 3.3, 0.95]),
    pillow: CAM([-1.55, 2.6, 1.2], [-2.35, 3.85, 0.7]),
    door: CAM([-0.9, 2.0, 1.5], [0.9, 3.4, 1.3]),
    hatch: CAM([-0.1, 1.8, 1.25], [1.3, 3.3, 1.75]),
    floor: CAM([-0.15, 1.85, 1.05], [-0.8, 3.15, 0.55]),
    lap: CAM([-0.5, 2.35, 0.9], [-0.8, 3.05, 0.35]),
    shelf: CAM([-0.9, 2.5, 1.45], [-1.6, 4.12, 1.35]),
    quilt: CAM([-1.3, 2.0, 1.2], [-2.3, 3.0, 0.6]),
  };
  const cast = scene.kit?.cast?.characters ?? {};
  const merge = (...xs) => Object.assign({}, ...xs);
  const put = (s, o) => Object.entries(o).forEach(([k, v]) => s.set(k, v));
  // a moment's keys without the game's (who is here, their moods)
  const at = (name, m, more = {}) => {
    const k = moment(cast, name, m);
    for (const key of Object.keys(k)) if (/_(here|mood)$/.test(key)) delete k[key];
    return merge(k, more);
  };
  // the game's «Зверинец» as the room was left by it (`menagerie`: attic, laohu, house; shelf — not chosen yet)
  const zooOf = () => (scene.get('menagerie') === 'attic' ? 'attic' : scene.get('menagerie') === 'house' ? 'house' : 'laohu');
  // a paper hop: held, then a quick snap to the next spot (angular, as paper moves)
  const hop = async (s, to, { over = 0.28, rest = 0.3, lift = 0.05 } = {}) => {
    const a0 = s.state.laohu_a, d0 = s.state.laohu_d, e0 = s.state.laohu_e;
    s.set('laohu_dir', to[0] >= a0 ? -1 : 1);
    await s.path(['laohu_a', 'laohu_d', 'laohu_e'], [[a0, d0, e0], [(a0 + to[0]) / 2, (d0 + to[1]) / 2, Math.max(e0, to[2]) + lift], to], { over, ease: 'out' });
    await s.wait(s.state.laohu_seam ? rest + 0.25 : rest);
  };
  const walkTo = async (s, to, n) => {
    const a0 = s.state.laohu_a, d0 = s.state.laohu_d, e0 = s.state.laohu_e;
    for (let i = 1; i <= n; i++) await hop(s, [a0 + ((to[0] - a0) * i) / n, d0 + ((to[1] - d0) * i) / n, e0 + ((to[2] - e0) * i) / n], { lift: 0.025 });
  };
  const shake = async (s, t = 0.6) => {
    s.set('laohu_shake', 1);
    await s.wait(t);
    s.set('laohu_shake', 0);
  };
  // Jack (grown) sitting on the floor before the window, the lap Laohu comes to
  const FLOOR = [-0.8, 3.25], LAP = [-0.8, 3.05, 0.2];
  const onFloor = { jack_a: FLOOR[0], jack_d: FLOOR[1], jack_turn: 170, jack_do: 'sit_floor', jack_on: null, jack_look: 'laohu', jack_with: [], jack_reach: null };
  // where Laohu wakes by the menagerie: by the attic's box on the floor (attic), or on the bare shelf
  const wakeAt = m => (m === 'attic' ? { laohu_a: -1.05, laohu_d: 3.1, laohu_e: 0 } : { laohu_a: -1.6, laohu_d: 4.12, laohu_e: 1.285 });

  return {
    // ---- the prologue
    // П.4: night; Jack (five) sitting up in bed, Laohu under his hand, Mom on the edge of the bed; she straightens the
    // blanket
    bedtime: {
      tells: ['bedtime:ask', 'bedtime:blanket'], seconds: 14,
      from: () => at('bedtime', null, { young: true, jack_wear: cast.jack_five, jack_reach: { r: 'laohu#back' }, ...SH.bed }),
      run: async s => {
        const mom = s.person('mom'), jack = s.person('jack');
        await s.wait(1);
        jack.look('mom');
        s.tell('bedtime:ask');
        await s.wait(6);
        mom.reach({ r: [-2.3, 3.0, 0.52] });
        mom.look('bed_top');
        await s.wait(1.5);
        mom.reach(null);
        mom.look('jack');
        s.tell('bedtime:blanket');
        await s.wait(3);
        jack.look('laohu');
        jack.mood('eyes_closed');
        await s.wait(2.5);
      },
    },

    // ---- chapter 1
    // 1.4 «Убежал»: dusk; Jack on his bed; Dad behind the shut door (unseen: not brought by the game) knocks, then sets
    // the plate by the door (`plate_door`)
    knock: {
      tells: ['knock:knock', 'knock:plate'], seconds: 9,
      from: () => at('night', 'shelf', { night: 0.6, lamp: 0, hall: 1, box: 'none', laohu_out: false, scraps: true,
        jack_a: -2.05, jack_d: 3.25, jack_turn: 160, jack_on: [-2.05, 3.25, BED], jack_do: 'sitting_on_bed', jack_look: 'sill', ...SH.jack_bed }),
      run: async s => {
        const jack = s.person('jack');
        await s.wait(1);
        s.tell('knock:knock');
        jack.look('door#door');
        await s.wait(4);
        s.tell('knock:plate');
        s.set('plate_door', true);
        await s.wait(2);
        jack.look('sill');
        await s.wait(2);
      },
    },
    // 1.6: night; Jack on the bed over the empty shoe box; Laohu limping on the pillow (with «Шов» he keels over); the
    // animals on the shelf; then the choice
    box_night: {
      tells: ['box_night:end'], seconds: 7,
      from: () => at('night', 'shelf', { laohu_a: -2.6, laohu_d: 3.88, laohu_e: 0.59, ...SH.jack_bed }),
      run: async s => {
        await walkTo(s, [-2.15, 3.86, 0.59], 3);
        s.person('jack').look('laohu');
        await s.wait(1.5);
        s.tell('box_night:end');
        await s.wait(1);
      },
    },
    // «Всех — в коробку»: the animals into the box, the lid on; Laohu scratches inside, then still; Jack carries the
    // box out to the hatch in the hall
    box_attic: {
      after: ['box_night'], tells: ['box_attic:shut', 'box_attic:hatch'], seconds: 14,
      from: () => at('night', 'shelf', { laohu_a: -2.15, laohu_d: 3.86, laohu_e: 0.59, ...SH.jack_bed }),
      run: async s => {
        const jack = s.person('jack');
        put(s, { jack_on: null, jack_do: 'stand' });
        await jack.walk([[-1.9, 3.7]]);
        await jack.turn(0);
        jack.look('shelf');
        jack.reach({ r: 'shelf', l: 'laohu' });
        await s.wait(1.2);
        put(s, { shelf: 'empty', laohu_out: false, box: 'shut', stir: true });
        jack.reach(null);
        jack.look('shoebox#box');
        s.tell('box_attic:shut');
        await s.wait(2);
        put(s, { box: 'none', stir: false, jack_with: ['shoebox'], door: 180, hall: 1 });
        glide(s, SH.door, 3);
        await jack.walk([[-0.4, 3.5], [0.6, 3.4], [1.1, 3.15]]);
        await jack.turn(200);
        s.set('hatch', 1);
        jack.look('ceiling_hall#hatch');
        await glide(s, SH.hatch, 1.5);
        s.tell('box_attic:hatch');
        await s.wait(2.5);
      },
    },
    // «Всех, кроме Лаоху»: the others into the box; Laohu falls asleep under his hand
    box_laohu: {
      after: ['box_night'], tells: ['box_laohu:asleep'], seconds: 9,
      from: () => at('night', 'shelf', { laohu_a: -2.15, laohu_d: 3.86, laohu_e: 0.59, ...SH.jack_bed }),
      run: async s => {
        const jack = s.person('jack');
        jack.look('shelf');
        await s.wait(1);
        put(s, { shelf: 'empty', box: 'shut' });
        await s.wait(1.5);
        await hop(s, [-2.15, 3.45, BED + 0.01]);
        jack.look('laohu');
        jack.reach({ r: 'laohu#back' });
        glide(s, SH.quilt, 2);
        s.set('laohu_asleep', true);
        s.tell('box_laohu:asleep');
        await s.wait(4);
      },
    },
    // «Никого»: the animals stay where they lived — on the shelf and the sill, the goats walking on the blanket; Laohu
    // creeps under the covers
    box_all: {
      after: ['box_night'], tells: ['box_all:goats'], seconds: 9,
      from: () => at('night', 'shelf', { laohu_a: -2.15, laohu_d: 3.86, laohu_e: 0.59, ...SH.jack_bed }),
      run: async s => {
        const jack = s.person('jack');
        put(s, { zoo: true, shelf: 'deer', goats_a: -2.45, goats_d: 3.6, goats_e: BED + 0.01 });
        jack.look('goats');
        glide(s, SH.quilt, 2);
        await s.path(['goats_a', 'goats_d'], [[-2.45, 3.6], [-2.5, 3.3], [-2.45, 2.85]], { over: 3 });
        s.tell('box_all:goats');
        await hop(s, [-2.35, 3.5, BED + 0.01]);
        s.set('laohu_out', false);
        jack.mood('smile');
        await s.wait(3);
      },
    },

    // ---- chapter 3: the house sold, the room emptied, by day; Jack grown
    // 3.2 «Зверинец» 0 (after the attic's `wake_attic`): Jack sitting on the floor with the box down from the attic; the
    // lid lifts, the dusty animals come out, and Laohu
    wake_room: {
      tells: ['wake_room:out'], seconds: 9,
      from: () => at('packed', 'attic', { box: 'shut', box_a: -1.3, box_d: 3.2, laohu_out: false, laohu_a: -1.3, laohu_d: 3.15, laohu_e: 0.05, ...onFloor, jack_look: 'shoebox#box', ...SH.floor }),
      run: async s => {
        s.set('stir', true);
        await s.wait(2.5);
        put(s, { stir: false, box: 'opened', laohu_out: true });
        s.tell('wake_room:out');
        await shake(s, 0.8);
        await walkTo(s, [-1.05, 3.1, 0], 2);
        s.person('jack').look('laohu');
        await s.wait(2);
      },
    },
    // «Зверинец» 1: on the bare shelf Laohu stretches; a rustle over his head in the attic
    wake_shelf: {
      tells: ['wake_shelf:stretch'], seconds: 7,
      from: () => at('packed', 'laohu', { laohu_asleep: true, ...SH.shelf }),
      run: async s => {
        await s.wait(1);
        s.set('laohu_asleep', false);
        await shake(s, 1);
        s.tell('wake_shelf:stretch');
        s.person('jack').look('laohu');
        await s.wait(1.5);
        s.person('jack').look('ceiling_room');
        await s.wait(2);
        s.person('jack').look('laohu');
        await s.wait(1);
      },
    },
    // «Зверинец» 2: Laohu stretches on the shelf; the house rustles below; Dad calls, and comes into the doorway with a
    // paper frog on his palm (`dad_frog`)
    wake_house: {
      tells: ['wake_house:call', 'wake_house:frog'], seconds: 11,
      from: () => at('packed', 'house', { laohu_asleep: true, dad_a: 2.0, dad_d: 3.3, dad_turn: 270, dad_do: 'stand', dad_frog: false, ...SH.shelf }),
      run: async s => {
        const dad = s.person('dad'), jack = s.person('jack');
        await s.wait(1);
        s.set('laohu_asleep', false);
        await shake(s, 1);
        s.tell('wake_house:call');
        jack.look('door#door');
        glide(s, SH.door, 2.5);
        await dad.walk([[0.95, 3.3]]);
        await dad.turn(245);
        dad.do('offer_hand');
        s.set('dad_frog', true);
        dad.look('jack');
        s.tell('wake_house:frog');
        await s.wait(4);
      },
    },
    // 3.2: Jack sits on the floor; Laohu comes to him and rubs against him (one ear with «Ухо», limping with «Шов»), into
    // his lap; then М6 (`laohu`: `laohu_purr`)
    unfold: {
      after: ['wake_room', 'wake_shelf', 'wake_house'], tells: ['unfold:rub'], seconds: 9,
      from: () => {
        const m = zooOf();
        return at('packed', m, { ...wakeAt(m), laohu_dust: m === 'attic', ...onFloor, ...SH.floor });
      },
      run: async s => {
        const jack = s.person('jack');
        if (s.state.laohu_e > 1) await hop(s, [-1.35, 3.6, 0.4], { over: 0.45, lift: 0.08 });
        await walkTo(s, [-0.95, 3.1, 0], 2);
        await shake(s, 0.5);
        s.tell('unfold:rub');
        await hop(s, LAP, { lift: 0.1 });
        s.set('laohu_dir', 1);
        jack.look('laohu');
        jack.do('stroke');
        jack.reach({ r: 'laohu#back' });
        await glide(s, SH.lap, 2);
      },
    },
    // after М6: he lies down in Jack's lap and unfolds — the crooked fold at the tail first, then the others one by
    // one; the sheet in Jack's hands, close: her columns, the tape, the tear; trembling along its folds
    open: {
      after: ['unfold'], tells: ['open:tail', 'open:flat'], seconds: 14,
      from: () => at('packed', zooOf(), { laohu_dust: zooOf() === 'attic', laohu_a: LAP[0], laohu_d: LAP[1], laohu_e: LAP[2], laohu_purr: 1, ...onFloor,
        jack_do: 'stroke', jack_reach: { r: 'laohu#back' }, ...SH.lap }),
      run: async s => {
        const jack = s.person('jack');
        await s.move('laohu_purr', 0, { over: 1.5 });
        jack.reach(null);
        jack.do('sit_floor');
        s.tell('open:tail');
        await s.move('laohu_unfold', 0.25, { over: 1.2, ease: 'linear' });
        await s.wait(0.6);
        await s.move('laohu_unfold', 1, { over: 3.5, ease: 'linear' });
        put(s, { laohu_out: false, jack_with: ['letter'], tremble: 1 });
        jack.look('jack#letter');
        await s.move('letter_close', 1, { over: 0.8 });
        s.tell('open:flat');
        await s.wait(5);
        await s.move('letter_close', 0, { over: 0.8 });
        await s.wait(0.5);
      },
    },
  };
}

return { wallpaper, hall, patch, poly, crease, goat, deer, buffalo, pot, frog, crane, dust, moment, film };
