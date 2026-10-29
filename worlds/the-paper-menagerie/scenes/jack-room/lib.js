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
// The room's moments (the key `moment`) and what the menagerie's choice left (`menagerie`): moment(which, menagerie)
// → { keys — the room's keys and its people's places, turns, seats, motions, looks, what they hold and wear, set by
// the scene's script; here — who is in the moment (the scenario's), moods — their faces }. Who is here and their
// moods are the game's to set (here, the showcase sets them by this). notes.md has the table.
const BED = 0.48;
function moment(which, menagerie) {
  const cast = kit.cast.characters;
  const m = menagerie;
  const k = {
    night: 0, day: 0, lamp: 0, hall: 0,
    packed: false, shelf: 'animals', zoo: false, scraps: false,
    box: 'none', box_a: -0.95, box_d: 3.0, box_e: 0, stir: false,
    hatch: 0, door: 270,
    goats_a: -0.05, goats_d: 4.12, goats_e: 0.88,
    laohu_out: true, laohu_a: -1.9, laohu_d: 3.88, laohu_e: 0.59,
    laohu_tape: true, laohu_fold: false, laohu_dust: false, laohu_asleep: false,
    dad_frog: false,
    jack_wear: null, jack_with: null, jack_on: null, jack_do: 'stand',
    mom_wear: { parts: [] }, mom_with: null, mom_on: null, mom_do: 'stand',
    dad_wear: null, dad_with: null, dad_on: null, dad_do: 'stand',
  };
  const here = [],
    moods = {};
  const person = (id, a, d, turn, look, mood) => {
    here.push(id);
    moods[id] = mood;
    Object.assign(k, { [`${id}_a`]: a, [`${id}_d`]: d, [`${id}_turn`]: turn, [`${id}_look`]: look });
  };
  const seat = (id, a, d, turn, look, mood) => {
    person(id, a, d, turn, look, mood);
    k[`${id}_on`] = [a, d, BED];
    k[`${id}_do`] = 'sitting_on_bed';
  };
  if (which === 'bedtime') {
    Object.assign(k, { night: 1, lamp: 1, hall: 0.35, laohu_tape: false, laohu_a: -1.85, laohu_d: 3.2, laohu_e: BED + 0.01 });
    seat('jack', -1.55, 2.95, 70, 'mom', 'tired');
    seat('mom', -1.55, 3.55, 130, 'jack', 'smile');
  } else if (which === 'hatch') {
    Object.assign(k, { night: 1, lamp: 1, hall: 1, door: 180, hatch: 1, box: 'shut', box_a: 2, box_d: 3.36, box_e: 0.45, shelf: 'empty' });
    if (m === 'laohu') Object.assign(k, { laohu_asleep: true });
    else Object.assign(k, { laohu_out: false, stir: true });
    person('jack', 1.58, 3.05, 200, 'ceiling_hall#hatch', 'sad');
  } else if (which === 'ran') {
    Object.assign(k, { hall: 1, scraps: true, laohu_out: false });
    person('jack', -0.6, 3.62, 20, [5, 8, -0.6], 'sad');
    person('dad', 1.95, 3.35, 245, 'door#door', 'sad');
    Object.assign(k, { dad_do: 'offer_hand', dad_with: ['plate'] });
  } else if (which === 'call') {
    Object.assign(k, { night: 0.5, lamp: 1, hall: 1, door: 180, laohu_out: false });
    person('jack', -0.6, 3.55, 120, 'mom', 'sad');
    Object.assign(k, { jack_do: 'holding_toy', jack_with: ['scraps'] });
    person('mom', 1.85, 3.4, 250, 'jack', 'neutral');
  } else if (which === 'packed') {
    Object.assign(k, { day: 1, packed: true, shelf: 'bare', door: 180, laohu_fold: true, jack_wear: { ...cast.jack_grown, parts: [] } });
    if (m === 'laohu' || m === 'house') {
      Object.assign(k, { laohu_a: -1.1, laohu_d: 4.12, laohu_e: 1.285 });
      person('jack', -0.25, 3.35, 225, 'laohu', 'neutral');
      if (m === 'house') {
        person('dad', 2, 3.35, 240, 'jack', 'neutral');
        Object.assign(k, { dad_wear: { ...cast.dad_grey, parts: [] }, dad_do: 'holding_toy', dad_frog: true });
      }
    } else {
      Object.assign(k, { hatch: 1, box: 'opened', box_a: -0.8, box_d: 3.2, laohu_a: -0.35, laohu_d: 3.1, laohu_e: 0, laohu_dust: true });
      person('jack', -0.05, 3.6, 220, 'laohu', 'surprised');
    }
  } else {
    // night (1.6)
    Object.assign(k, { night: 1, lamp: 1, hall: 0.35, box: 'empty', laohu_a: -2.1 });
    seat('jack', -1.55, 3.45, 130, 'shoebox#box', 'sad');
    if (m === 'attic') Object.assign(k, { box: 'shut', stir: true, shelf: 'empty', laohu_out: false });
    else if (m === 'laohu') Object.assign(k, { box: 'shut', shelf: 'empty', laohu_asleep: true });
    else if (m === 'house') {
      Object.assign(k, { zoo: true, shelf: 'deer', goats_a: -1.85, goats_d: 3.0, goats_e: BED + 0.01 });
      k.jack_look = 'goats';
      moods.jack = 'smile';
    }
  }
  return { keys: k, here, moods };
}
return { wallpaper, hall, patch, poly, crease, goat, deer, buffalo, pot, frog, crane, dust, moment };
