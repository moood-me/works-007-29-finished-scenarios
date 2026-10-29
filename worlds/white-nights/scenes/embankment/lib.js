// «The Canal Embankment» — what its paintings share: the lithograph's hand (an uneven watercolour wash, the sepia
// ink's hatching in the shade), the houses' facades drawn so (a wash of colour, a fine sepia ink line round every
// shape, hatching under the cornices, in the gateways, at the walls' feet), and the granite. All
// in daylight colours: the white night is the scene's light (notes.md).
const { hash } = anim;
const INK = '#4a3f3a';

// The lithograph's hand, shared by every painting: a watercolour wash is never even — the pigment settles in soft
// blotches, darker and lighter, and pools a little at the foot of a wash; the shade is drawn as hatching, fine
// parallel strokes of the sepia ink. `wash` lays such blotches over a rectangle (x, y its top-left, w × h; `rgb` the
// colour's three numbers; about one blotch to `per` square metres, each up to `size` across; `pooled` — how dark the
// pigment gathers at its foot), `hatch` strokes a
// rectangle with lines `step` apart, leaning right, `alpha` strong. Both kept inside their rectangle (a clip).
function wash(g, x, y, w, h, rgb, seed, per = 10, size = 3, pooled = 0.16) {
  const n = Math.max(4, Math.round((w * h) / per)), [r, gr, b] = rgb;
  g.save();
  g.beginPath();
  g.rect(x, y, w, h);
  g.clip();
  for (let i = 0; i < n; i++) {
    const cx = x + w * hash(i, seed * 13 + 1), cy = y + h * hash(i, seed * 13 + 2);
    const rx = size * (0.3 + 0.7 * hash(i, seed * 13 + 3)), ry = rx * (0.45 + 0.5 * hash(i, seed * 13 + 4));
    const dark = hash(i, seed * 13 + 5) > 0.42, a = 0.05 + 0.08 * hash(i, seed * 13 + 6);
    const k = dark ? 0.78 : 1.14, c = `${Math.min(255, Math.round(r * k))},${Math.min(255, Math.round(gr * k))},${Math.min(255, Math.round(b * k))}`;
    g.save();
    g.translate(cx, cy);
    g.scale(rx, ry);
    const blot = g.createRadialGradient(0, 0, 0, 0, 0, 1);
    blot.addColorStop(0, `rgba(${c},${a})`);
    blot.addColorStop(0.7, `rgba(${c},${a * 0.85})`);
    blot.addColorStop(1, `rgba(${c},0)`);
    g.fillStyle = blot;
    g.fillRect(-1, -1, 2, 2);
    g.restore();
  }
  // (the pigment pooled at the wash's foot)
  const dk = `${Math.round(r * 0.7)},${Math.round(gr * 0.7)},${Math.round(b * 0.7)}`;
  const pool = g.createLinearGradient(0, y + h * 0.8, 0, y + h);
  pool.addColorStop(0, `rgba(${dk},0)`);
  pool.addColorStop(1, `rgba(${dk},${pooled})`);
  g.fillStyle = pool;
  g.fillRect(x, y + h * 0.8, w, h * 0.2);
  g.restore();
}
function hatch(g, x, y, w, h, step, alpha, line) {
  g.save();
  g.beginPath();
  g.rect(x, y, w, h);
  g.clip();
  g.beginPath();
  for (let t = x - h; t < x + w; t += step) {
    g.moveTo(t, y + h);
    g.lineTo(t + h, y);
  }
  g.strokeStyle = `rgba(74,63,58,${alpha})`;
  g.lineWidth = line;
  g.stroke();
  g.restore();
}
// (a colour '#rrggbb' as its three numbers)
const rgbOf = (c) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));

// The kinds of houses along the canal: width, height (to the cornice), floors, bays, the wall's wash, the trims', the
// iron roof's; what each has of its own, so no two kinds read alike: a pediment over the middle bays, pilasters between
// the bays, the main floor's windows taller under little cornices and pediments (`nobile`), a low attic floor of
// square windows, an iron balcony on the main floor, an arched gateway into the yard in the middle of the ground floor
const HOUSES = {
  a: { w: 24, h: 15.5, floors: 4, bays: 9, wall: '#dcbc78', trim: '#f0e7d5', roof: '#7f8a86', seed: 1, nobile: true, balcony: true },
  b: { w: 18, h: 13, floors: 3, bays: 7, wall: '#d7a596', trim: '#f0e4d7', roof: '#8a7a72', seed: 2, gate: true },
  c: { w: 21, h: 16.5, floors: 4, bays: 7, wall: '#aab6a3', trim: '#ede9dd', roof: '#6f7a78', pediment: true, pilasters: true, nobile: true, seed: 3 },
  d: { w: 16, h: 12.5, floors: 3, bays: 5, wall: '#b9bdc7', trim: '#edece7', roof: '#7c8088', seed: 4, gate: true, attic: true },
  e: { w: 26, h: 14, floors: 4, bays: 10, wall: '#e4d9c5', trim: '#f4efe5', roof: '#858c8a', seed: 5, pilasters: true, attic: true },
  yellow: { w: 26, h: 13, floors: 3, bays: 10, wall: '#dcc68e', trim: '#f5edd8', roof: '#78827e', seed: 6, line: 0.025, nobile: true },
};

// A facade as an elevation, x 0…w along it, y up negative from its foot (metres): its wall washed unevenly, the ground
// floor rusticated and hatched in its shade, belt courses, a cornice on its dentils with hatching under it, windows
// in light surrounds — their panes holding the sky, some dim, some with muslin curtains, the reveal's shade inside,
// a sill —, and what the kind has of its own (HOUSES); the iron roof's edge with chimneys above; `door` — the x of a
// door in the ground floor (the bays leave it room)
function facade(g, H, door) {
  const { w, h, floors, bays, wall, trim, roof, seed } = H, line = H.line ?? 0.04, ground = 4.2, upper = (h - ground - 0.9) / (floors - 1);
  const bay = w / bays, mid = Math.floor(bays / 2), tall = Math.min(2.7, upper - 0.8);
  // the roof's edge and its chimneys
  g.fillStyle = roof;
  g.beginPath();
  g.moveTo(-0.2, -h - 0.5);
  g.lineTo(w + 0.2, -h - 0.5);
  g.lineTo(w - 0.6, -h - 2.1);
  g.lineTo(0.6, -h - 2.1);
  g.closePath();
  g.fill();
  g.strokeStyle = INK;
  g.lineWidth = line;
  g.stroke();
  hatch(g, 0.6, -h - 2.1, w - 1.2, 1.6, 0.3, 0.18, line * 0.4);
  g.fillStyle = '#a9998e';
  g.strokeStyle = INK;
  g.lineWidth = line;
  for (let i = 0; i < Math.round(w / 8); i++) {
    const x = 2 + (w - 4) * hash(i, seed * 7 + 1), up = 1.2 + 0.9 * hash(i, seed * 7 + 2);
    g.fillRect(x, -h - 2.1 - up, 0.7, up + 0.4);
    g.strokeRect(x, -h - 2.1 - up, 0.7, up + 0.4);
  }
  // the wall, washed unevenly
  g.fillStyle = wall;
  g.fillRect(0, -h, w, h);
  wash(g, 0, -h, w, h, rgbOf(wall), seed, 7, 3.2);
  // the ground floor, a shade deeper, its rustication; hatched in its lower shade
  g.fillStyle = 'rgba(90,70,60,0.10)';
  g.fillRect(0, -ground, w, ground);
  g.beginPath();
  for (let y = -ground + 0.5; y < 0; y += 0.5) {
    g.moveTo(0, y);
    g.lineTo(w, y);
  }
  g.strokeStyle = 'rgba(74,63,58,0.45)';
  g.lineWidth = line * 0.6;
  g.stroke();
  hatch(g, 0, -1.1, w, 1.1, 0.16, 0.16, line * 0.4);
  // pilasters between the bays, from the ground floor to the cornice, their shaded side hatched
  if (H.pilasters) {
    for (let i = 0; i <= bays; i++) {
      const x = Math.min(w - 0.5, Math.max(0, i * bay - 0.25));
      g.fillStyle = trim;
      g.fillRect(x, -h + 0.55, 0.5, h - ground - 0.55);
      g.strokeStyle = INK;
      g.lineWidth = line * 0.7;
      g.strokeRect(x, -h + 0.55, 0.5, h - ground - 0.55);
      hatch(g, x + 0.36, -h + 0.55, 0.14, h - ground - 0.55, 0.12, 0.3, line * 0.4);
    }
  }
  // the belt courses and the cornice on its dentils
  g.fillStyle = trim;
  g.fillRect(0, -ground - 0.25, w, 0.3);
  for (let f = 1; f < floors - 1; f++) g.fillRect(0, -ground - f * upper - 0.12, w, 0.14);
  g.fillRect(-0.15, -h, w + 0.3, 0.55);
  g.strokeStyle = INK;
  g.lineWidth = line;
  g.strokeRect(-0.15, -h, w + 0.3, 0.55);
  g.strokeRect(0, -ground - 0.25, w, 0.3);
  g.beginPath();
  for (let x = 0.1; x < w - 0.1; x += 0.32) g.rect(x, -h + 0.55, 0.16, 0.16);
  g.fill();
  g.lineWidth = line * 0.5;
  g.stroke();
  // (the hatching in the cornice's shade)
  hatch(g, 0, -h + 0.71, w, 0.5, 0.16, 0.32, line * 0.5);
  // a pediment over the middle bays, a round window in it
  if (H.pediment) {
    const a = w * 0.3, b = w * 0.7;
    g.fillStyle = trim;
    g.beginPath();
    g.moveTo(a, -h);
    g.lineTo((a + b) / 2, -h - 2.2);
    g.lineTo(b, -h);
    g.closePath();
    g.fill();
    g.strokeStyle = INK;
    g.lineWidth = line;
    g.stroke();
    g.beginPath();
    g.arc((a + b) / 2, -h - 0.85, 0.45, 0, Math.PI * 2);
    g.stroke();
  }
  // the windows: each a light surround, a pane holding the pale sky (some dim, some curtained), the reveal's shade
  // along its top and one side, its glazing bars, a sill with its shadow under it; over a main-floor window a little
  // cornice or a pediment (`crown`)
  const opening = (cx, top, ww, wh, k, crown) => {
    const sky = hash(k, seed * 31 + 1), curtained = hash(k, seed * 31 + 2) > 0.72;
    g.fillStyle = trim;
    g.fillRect(cx - ww / 2 - 0.18, top - 0.3, ww + 0.36, wh + 0.48);
    const pane = g.createLinearGradient(0, top, 0, top + wh);
    pane.addColorStop(0, sky > 0.6 ? '#c6c8d6' : sky > 0.25 ? '#a8afbf' : '#8e95a8');
    pane.addColorStop(1, sky > 0.6 ? '#9da3b7' : sky > 0.25 ? '#7d8496' : '#666d80');
    g.fillStyle = pane;
    g.fillRect(cx - ww / 2, top, ww, wh);
    if (curtained) {
      g.fillStyle = 'rgba(246,240,228,0.85)';
      for (const s of [-1, 1]) {
        const edge = cx + (s * ww) / 2;
        g.beginPath();
        g.moveTo(edge, top);
        g.lineTo(edge - s * ww * 0.3, top);
        g.quadraticCurveTo(edge - s * ww * 0.08, top + wh * 0.5, edge, top + wh * 0.82);
        g.closePath();
        g.fill();
      }
    }
    g.fillStyle = 'rgba(52,46,62,0.22)';
    g.fillRect(cx - ww / 2, top, ww, 0.12);
    g.fillRect(cx - ww / 2, top, 0.1, wh);
    g.strokeStyle = INK;
    g.lineWidth = line;
    g.strokeRect(cx - ww / 2 - 0.18, top - 0.3, ww + 0.36, wh + 0.48);
    g.strokeRect(cx - ww / 2, top, ww, wh);
    g.beginPath();
    g.moveTo(cx, top);
    g.lineTo(cx, top + wh);
    g.moveTo(cx - ww / 2, top + wh * 0.62);
    g.lineTo(cx + ww / 2, top + wh * 0.62);
    g.lineWidth = line * 0.6;
    g.stroke();
    g.fillStyle = trim;
    g.fillRect(cx - ww / 2 - 0.28, top + wh + 0.18, ww + 0.56, 0.12);
    g.lineWidth = line;
    g.strokeRect(cx - ww / 2 - 0.28, top + wh + 0.18, ww + 0.56, 0.12);
    g.fillStyle = 'rgba(74,63,58,0.16)';
    g.fillRect(cx - ww / 2 - 0.2, top + wh + 0.3, ww + 0.4, 0.14);
    if (crown) {
      g.fillStyle = trim;
      g.beginPath();
      if (crown === 'pediment') {
        g.moveTo(cx - ww / 2 - 0.35, top - 0.42);
        g.lineTo(cx, top - 0.95);
        g.lineTo(cx + ww / 2 + 0.35, top - 0.42);
        g.closePath();
      } else g.rect(cx - ww / 2 - 0.35, top - 0.58, ww + 0.7, 0.18);
      g.fill();
      g.lineWidth = line * 0.8;
      g.stroke();
    }
  };
  for (let i = 0; i < bays; i++) {
    const cx = (i + 0.5) * bay;
    if (door !== undefined && Math.abs(cx - door) < bay * 0.8) continue;
    if (H.gate && i === mid) {
      // the arched gateway into the yard: its light surround, its dark depth hatched
      const gw = Math.min(2.6, bay * 0.9);
      const arch = (half) => {
        g.beginPath();
        g.moveTo(cx - half, 0);
        g.lineTo(cx - half, -2.4);
        g.arc(cx, -2.4, half, Math.PI, 0);
        g.lineTo(cx + half, 0);
        g.closePath();
      };
      g.fillStyle = trim;
      g.strokeStyle = INK;
      g.lineWidth = line;
      arch(gw / 2 + 0.3);
      g.fill();
      g.stroke();
      g.fillStyle = '#5c5560';
      arch(gw / 2);
      g.fill();
      g.stroke();
      hatch(g, cx - gw / 2, -2.4 - gw / 2, gw, 2.4 + gw / 2, 0.12, 0.25, line * 0.5);
    } else opening(cx, -ground + 1.0, Math.min(1.1, bay * 0.45), 2.0, i, null);
    for (let f = 0; f < floors - 1; f++) {
      const top = -ground - (f + 1) * upper + 0.45, k = i * 7 + f + 1;
      if (H.attic && f === floors - 2) opening(cx, top + upper * 0.25, Math.min(1.0, bay * 0.4), Math.max(0.9, upper * 0.4), k, null);
      else if (H.nobile && f === 0) opening(cx, top - 0.25, Math.min(1.25, bay * 0.5), tall, k, i % 2 ? 'cornice' : 'pediment');
      else opening(cx, top, Math.min(1.2, bay * 0.48), Math.min(2.3, upper - 1.2), k, null);
    }
  }
  // an iron balcony across the middle bays of the main floor, at its windows' feet, on a stone slab and brackets
  if (H.balcony) {
    const a = (mid - 1) * bay + 0.2, b = (mid + 2) * bay - 0.2, y = -ground - upper + 0.2 + tall + 0.3;
    g.fillStyle = trim;
    g.fillRect(a, y, b - a, 0.22);
    g.strokeStyle = INK;
    g.lineWidth = line;
    g.strokeRect(a, y, b - a, 0.22);
    g.beginPath();
    for (let x = a + 0.4; x < b; x += 1.2) {
      g.moveTo(x, y + 0.22);
      g.lineTo(x + 0.15, y + 0.75);
      g.lineTo(x + 0.3, y + 0.22);
    }
    g.stroke();
    g.beginPath();
    g.moveTo(a, y - 0.95);
    g.lineTo(b, y - 0.95);
    g.moveTo(a, y - 0.15);
    g.lineTo(b, y - 0.15);
    for (let x = a; x <= b + 1e-6; x += 0.14) {
      g.moveTo(x, y);
      g.lineTo(x, y - 0.95);
    }
    g.strokeStyle = '#3c4140';
    g.lineWidth = line * 0.7;
    g.stroke();
  }
  // the outline of the whole
  g.strokeStyle = INK;
  g.lineWidth = line;
  g.strokeRect(0, -h, w, h);
}

// A door in a ground floor at x (its middle): two leaves of brown panels, a fanlight over them, a light surround
function door(g, x, line) {
  g.fillStyle = '#f2e9d4';
  g.fillRect(x - 1.05, -3.45, 2.1, 3.45);
  g.fillStyle = '#5a4436';
  g.fillRect(x - 0.78, -2.6, 1.56, 2.6);
  g.fillStyle = '#9aa1b2';
  g.fillRect(x - 0.78, -3.2, 1.56, 0.52);
  g.strokeStyle = INK;
  g.lineWidth = line;
  g.strokeRect(x - 1.05, -3.45, 2.1, 3.45);
  g.strokeRect(x - 0.78, -2.6, 1.56, 2.6);
  g.strokeRect(x - 0.78, -3.2, 1.56, 0.52);
  g.beginPath();
  g.moveTo(x, -2.6);
  g.lineTo(x, 0);
  for (const s of [-1, 1]) {
    g.rect(x + s * 0.39 - 0.25, -2.35, 0.5, 0.9);
    g.rect(x + s * 0.39 - 0.25, -1.2, 0.5, 0.9);
  }
  g.lineWidth = line * 0.7;
  g.stroke();
}

// Granite, the pinkish grey of the city's embankments: a wash, its blocks' joints (one path), a darker wet foot when
// it stands in the water. x 0…len along, y from -top to 0 (metres)
function granite(g, len, top, { block = 2.2, courses = [], wet = 0, colour = '#a69791' } = {}) {
  g.fillStyle = colour;
  g.fillRect(0, -top, len, top);
  wash(g, 0, -top, len, top, rgbOf(colour), 11, 4, Math.min(2.4, top * 1.2));
  g.beginPath();
  for (let x = 0; x < len; x += block) {
    g.moveTo(x, -top);
    g.lineTo(x, -top + Math.min(top, 1.05));
  }
  courses.forEach((y, k) => {
    g.moveTo(0, y);
    g.lineTo(len, y);
    for (let x = (k % 2) * 0.8; x < len; x += 1.6) {
      g.moveTo(x, y);
      g.lineTo(x, y + 0.55);
    }
  });
  g.strokeStyle = 'rgba(74,63,58,0.5)';
  g.lineWidth = 0.025;
  g.stroke();
  if (wet > 0) {
    const w = g.createLinearGradient(0, -wet, 0, 0);
    w.addColorStop(0, 'rgba(70,62,64,0)');
    w.addColorStop(1, 'rgba(70,62,64,0.55)');
    g.fillStyle = w;
    g.fillRect(0, -wet, len, wet);
  }
  g.beginPath();
  g.moveTo(0, -top);
  g.lineTo(len, -top);
  g.strokeStyle = INK;
  g.lineWidth = 0.03;
  g.stroke();
}

// A street lamp by the parapet, burning though there is no need: a cast-iron post painted dark green on a pedestal,
// a lamplighter's crossbar under the lantern, the lantern a four-sided glass box wider at the top under a pointed
// cap; x across it, y up negative from its foot (metres). Its flame (the point #flame) a glow and a light of the engine's
// (the scene's lights `lamp` and `bank_lamps` put them out by the key `lamp`)
function lamp(g, e) {
  const post = '#47524f';
  g.fillStyle = post;
  g.fillRect(-0.16, -0.5, 0.32, 0.5);
  g.fillRect(-0.2, -0.08, 0.4, 0.08);
  g.fillRect(-0.12, -0.6, 0.24, 0.1);
  g.beginPath();
  g.moveTo(-0.065, -0.6);
  g.lineTo(-0.04, -2.85);
  g.lineTo(0.04, -2.85);
  g.lineTo(0.065, -0.6);
  g.closePath();
  g.fill();
  g.fillRect(-0.07, -1.9, 0.14, 0.06);
  g.fillRect(-0.32, -2.78, 0.64, 0.04);
  g.fillRect(-0.09, -2.92, 0.18, 0.08);
  g.beginPath();
  g.moveTo(-0.13, -2.94);
  g.lineTo(0.13, -2.94);
  g.lineTo(0.19, -3.42);
  g.lineTo(-0.19, -3.42);
  g.closePath();
  // (its glass warm while it burns, a cool pale grey when it is out — the key `lamp`)
  const on = Math.max(0, Math.min(1, e.state.lamp ?? 1)), mixc = (a, b) => Math.round(a + (b - a) * on);
  g.fillStyle = `rgb(${mixc(206, 255)},${mixc(212, 220)},${mixc(218, 150)})`;
  g.fill();
  g.strokeStyle = post;
  g.lineWidth = 0.025;
  g.stroke();
  g.beginPath();
  g.moveTo(0, -2.94);
  g.lineTo(0, -3.42);
  g.stroke();
  g.fillStyle = post;
  g.beginPath();
  g.moveTo(-0.23, -3.42);
  g.lineTo(0.23, -3.42);
  g.lineTo(0, -3.66);
  g.closePath();
  g.fill();
  g.fillRect(-0.015, -3.74, 0.03, 0.09);
  g.strokeStyle = INK;
  g.lineWidth = 0.012;
  g.strokeRect(-0.16, -0.5, 0.32, 0.5);
  e.light(0, -3.18, 0.36, '#ffcf88', 1.6, 'flame');
  e.at(0, -3.18, 'flame');
}

// The embankment's pieces (stage 5; modules/beats; notes.md «Pieces»): `film(scene)` — each piece `{after, tells,
// seconds, from, run}`. `from` sets everything a piece begins at — the night's light, the lamps, the rain, the people's
// places, what they do and hold, the camera — but the game's own: `<id>_here`, `<id>_mood` and the variant keys a piece
// reads (`arm`, `cross`, `ten`, `kept`, `went`, `couldnt`, `first`, `confessed`, `bowed`); it never sets `moment` (the
// stage-4 staging of the moments). Who comes in during a piece waits out of sight (round the corner, behind the viewer)
// from its start; who goes, goes out of sight and is `here` false at its end. Shots: the scene's own picture camera
// (`wide`), or cameras of their own — an eye and what it looks at (`CAM`), a face seen from before it (`face`).
function FILM(scene) {
  const DEG = 180 / Math.PI, EYE = 1.7;
  const CAMK = ['camera_x', 'camera_z', 'camera_h', 'camera_yaw', 'camera_pitch'];
  const CAM0 = { camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
    camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0 };
  // an eye at [across, distance, height] looking at a point
  const CAM = ([ex, ez, eh], [tx, tz, th]) => ({ ...CAM0, camera_x: ex, camera_z: ez, camera_h: eh - EYE,
    camera_yaw: Math.atan2(tx - ex, tz - ez) * DEG, camera_pitch: Math.atan2(th - eh, Math.hypot(tx - ex, tz - ez)) * DEG });
  // a face at [across, distance, height] turned `turn` (0 away from the viewer, 180 toward), seen from `dist` metres
  // before it, `side` degrees round from straight on (the three-quarter), the eye a little `up` or down
  const face = ([x, d, h], turn, dist = 1.3, side = 25, up = 0.02) => {
    const t = (turn + side) / DEG;
    return CAM([x + Math.sin(t) * dist, d + Math.cos(t) * dist, h + up], [x, d, h]);
  };
  const glide = (s, c, over) => s.all(...CAMK.map(k => s.move(k, c[k], { over, ease: 'inOut' })));
  const wide = (s, over = 2) => glide(s, CAM0, over);
  const V = scene.kit?.cast?.characters ?? {};
  const PEOPLE = ['nastya', 'dreamer', 'lodger', 'gentleman', 'dvornik', 'nanny', 'child', 'passerby'];
  // where who has no part in a piece waits, out of sight down the side street (the corner)
  const AWAY = { nastya: [14, 0.2], dreamer: [15, 0.8], lodger: [16, 0.2], gentleman: [17, 0.8], dvornik: [18, 0.2], nanny: [19, 0.8],
    child: [19.6, 0.4], passerby: [20.5, 0.2] };
  const who = (id, [a, d, turn], does = 'stand', more = {}) => {
    const o = { [`${id}_a`]: a, [`${id}_d`]: d, [`${id}_turn`]: turn, [`${id}_do`]: does, [`${id}_look`]: null, [`${id}_reach`]: null,
      [`${id}_on`]: null, [`${id}_with`]: [], [`${id}_wear`]: null, [`${id}_gait`]: null };
    for (const [k, v] of Object.entries(more)) o[`${id}_${k}`] = v;
    return o;
  };
  const merge = (...xs) => Object.assign({}, ...xs);
  // a number of the state now; the turn that faces from one place toward another; the letter as it is (`stained`, the
  // game's: the mark «Пятно» — the puddle's stain on it)
  const n0 = (s, k) => Number(s.get(k) ?? 0);
  const aim = ([a, d], [a2, d2]) => ((Math.atan2(a2 - a, d2 - d) * DEG) + 360) % 360;
  const at = (s, id) => [n0(s, `${id}_a`), n0(s, `${id}_d`)];
  const paper = () => (scene.get('stained') ? 'letter_stained' : 'letter');
  // everyone a piece does not name, out of sight
  const cast = (o) => merge(...PEOPLE.filter(id => !(`${id}_a` in o)).map(id => who(id, [...AWAY[id], 270])), o);
  const LIGHT = { dusk: 0, lilac: 0, rose: 0, overcast: 0, day: 0, rain: 0, lamp: 1, cart: false, pin: 0, scraps: false, stick_down: false,
    letter_down: false };
  const NIGHT = { n1: LIGHT, n2: { ...LIGHT, lilac: 1 }, n3: { ...LIGHT, rose: 1 }, n4: { ...LIGHT, overcast: 1 }, dusk: { ...LIGHT, dusk: 1, lamp: 0, cart: true },
    day: { ...LIGHT, day: 1, lamp: 0 } };
  const start = (light, cam, people) => merge(light, cam, cast(people));
  // places: the parapet (her place, under the lamp), the bench's seats (she nearer, he on its far edge), the corner
  const RAIL = [-1.42, 7.3], SEAT_HER = [-0.84, 9.55], SEAT_HIM = [-0.84, 10.6], SEAT_H = 0.45;
  const CORNER = [4.8, -0.6], CORNER_LOOK = [5.5, -0.5, 1.5];
  const seat = (id, [a, d], turn = 90, more = {}) => who(id, [a, d, turn], { motion: 'seated', loop: true }, { on: [a, d, SEAT_H], ...more });
  // sit down on the bench / get up from it (the cast's sit_down, stand_up; then seated looped, the hips on the seat)
  const sit = async (p, [a, d], turn = 90) => {
    await p.go('sit_down', { to: [a, d], turn });
    p.on([a, d, SEAT_H]);
    p.do('seated', { loop: true });
  };
  const rise = async (p, [a, d], turn = 90) => {
    p.on(null);
    await p.go('stand_up', { from: [a, d], turn });
  };
  // two walking arm in arm, she on his left, her right hand on his left elbow, at one pace (their places moved
  // together over the same seconds from where they stand through his points, hers 0.55 m to his left: the steps as the
  // way goes)
  const armInArm = (s, pts, over) => {
    const n = s.person('nastya'), d = s.person('dreamer');
    n.reach({ r: 'dreamer#elbow_l' });
    d.gait('elbow_walk');
    const her = [at(s, 'nastya'), ...pts.map(([a, z]) => [a - 0.55, z])], him = [at(s, 'dreamer'), ...pts];
    return s.all(s.path(['nastya_a', 'nastya_d'], her, { over, ease: 'linear' }), s.path(['dreamer_a', 'dreamer_d'], him, { over, ease: 'linear' }));
  };

  return {
    // ——— the prologue (dusk) ———
    // the Dreamer along the canal by the parapet, tapping his stick on the granite; he stops before the freshly painted
    // yellow house and faces it (the yard-keeper sweeps by its porch, if the game has him here)
    prologue: {
      after: [], tells: ['prologue:walk', 'prologue:stop'], seconds: 14,
      from: () => start(NIGHT.dusk, CAM0, merge(who('dreamer', [-0.9, 22, 180], 'stand', { with: ['cane'], gait: 'tap_walk' }),
        who('dvornik', [5.0, 14.2, 215], { motion: 'sweep', loop: true }, { with: ['broom'] }))),
      run: async s => {
        const d = s.person('dreamer');
        s.tell('prologue:walk');
        await d.walk([[-0.9, 13], [1.6, 10.2], [3.5, 9.4]]);
        d.gait(null);
        await d.turn(110);
        d.look([6.1, 10.6, 3.4]);
        await glide(s, CAM([1.4, 5.8, 1.65], [4.2, 10.0, 1.6]), 2);
        s.tell('prologue:stop');
      },
    },
    // В0 «bow»: he bows to the house; the yard-keeper laughs at him, he reddens and laughs at himself
    bow_house: {
      after: ['prologue'], tells: ['bow_house:bow', 'bow_house:laugh'], seconds: 6,
      run: async s => {
        const d = s.person('dreamer'), k = s.person('dvornik');
        s.tell('bow_house:bow');
        await d.do('bow');
        k.look('dreamer');
        k.do('laugh', { loop: true });
        await d.turn(150);
        d.look('dvornik');
        s.tell('bow_house:laugh');
        await s.wait(2);
        d.look(null);
      },
    },
    // В0 «pass»: he walks on past the house as if he did not know it, out of sight; the house left alone
    pass_house: {
      after: ['prologue'], tells: ['pass_house:gone'], seconds: 8,
      run: async s => {
        const d = s.person('dreamer');
        d.look(null);
        d.gait('tap_walk');
        wide(s, 3);
        await d.walk([[2.6, 6], [1.8, 1.0], [2.2, -3]]);
        d.here(false);
        s.tell('pass_house:gone');
        await s.wait(1.5);
      },
    },
    // the twilight whitens, the lamps along both banks light; the embankment empty
    lamp_lit: {
      after: [], tells: ['lamp_lit:on'], seconds: 9,
      from: () => start(NIGHT.dusk, CAM0, {}),
      run: async s => {
        const dawn = s.move('dusk', 0, { over: 7, ease: 'inOut' });
        await s.wait(3);
        s.tell('lamp_lit:on');
        await s.move('lamp', 1, { over: 1.5 });
        await dawn;
      },
    },

    // ——— the first night (pearl) ———
    // 1.1: he comes along the houses from the corner; at the parapet under the lamp a girl weeps without a sound, only
    // her shoulders seen; the whole roadway between them; he stops
    crying: {
      after: [], tells: ['crying:see'], seconds: 9,
      from: () => start(NIGHT.n1, CAM0, merge(who('nastya', [RAIL[0], RAIL[1], 290], { motion: 'weep_rail', loop: true }),
        who('dreamer', [4.6, -1.5, 0], 'stand', { with: ['cane'] }))),
      run: async s => {
        const d = s.person('dreamer');
        await d.walk([[3.9, 3.0], [3.4, 6.8]]);
        await d.turn(255);
        d.look('nastya');
        s.tell('crying:see');
        await glide(s, CAM([2.6, 3.6, 1.65], [0.4, 8.0, 1.4]), 2.5);
      },
    },
    // В1 «approach»: he crosses to two steps from her and opens his mouth; she starts and goes quickly off along the
    // parapet; he stays
    approach: {
      after: ['crying'], tells: ['approach:stop', 'approach:startle', 'approach:gone'], seconds: 10,
      run: async s => {
        const d = s.person('dreamer'), n = s.person('nastya');
        await d.walk([[1.0, 7.4], [-0.25, 7.6]]);
        await d.turn(260);
        s.tell('approach:stop');
        await s.wait(0.8);
        n.do('stand');
        await n.turn(110);
        n.look('dreamer');
        s.tell('approach:startle');
        await n.do('startle');
        n.look(null);
        n.gait('hurry');
        await n.walk([[-1.3, 10], [-1.25, 20]]);
        s.tell('approach:gone');
        n.gait(null);
        d.look('nastya');
      },
    },
    // В1 «pass»: he walks on to the corner and there looks back: she is already going along the embankment
    pass_by: {
      after: ['crying'], tells: ['pass_by:look'], seconds: 10,
      run: async s => {
        const d = s.person('dreamer'), n = s.person('nastya');
        const her = s.sequence(async q => {
          await q.wait(2.5);
          q.person('nastya').do('stand');
          q.person('nastya').gait('hurry');
          await q.person('nastya').walk([[-1.3, 11], [-1.25, 20]]);
          q.person('nastya').gait(null);
        });
        wide(s, 2);
        await d.walk([[3.6, 4.0], [3.0, 1.6]]);
        await d.turn(330);
        d.look('nastya');
        await glide(s, CAM([1.6, -0.6, 1.65], [2.9, 1.9, 1.62]), 1.5);
        s.tell('pass_by:look');
        await her;
      },
    },
    // 1.2: out of the side street comes a gentleman in a tailcoat, tipsy, after her, quickening; she almost runs —
    // along the parapet toward the viewer, the Dreamer near in the foreground
    gentleman: {
      after: [], tells: ['gentleman:follow'], seconds: 9,
      from: () => start(NIGHT.n1, CAM0, merge(who('nastya', [-1.25, 15, 180], 'stand', { gait: 'hurry' }),
        who('gentleman', [6.0, 21, 250], 'stand', { gait: 'stagger_walk' }), who('dreamer', [1.6, 3.4, 345], 'stand', { with: ['cane'] }))),
      run: async s => {
        const n = s.person('nastya'), g = s.person('gentleman'), d = s.person('dreamer');
        d.look('nastya');
        const her = n.walk([[-1.2, 10], [-1.1, 7.4]]);
        await s.wait(0.6);
        g.look('nastya');
        s.tell('gentleman:follow');
        const him = g.walk([[2.5, 17], [-0.5, 13], [-0.6, 10.5]]);
        await her;
        n.gait(null);
        await n.turn(160);
        n.look('gentleman');
        await him;
        await g.turn(180);
        d.look('gentleman');
      },
    },
    // M1 «stick», its start: he raises his stick and sets off toward the gentleman (the mini-game in this pose)
    stick_go: {
      after: ['gentleman'], tells: ['stick_go:raise'], seconds: 4,
      run: async s => {
        const d = s.person('dreamer');
        d.gait('stick_raised');
        await d.walk([[1.0, 5.0], [0.4, 6.4]]);
        d.gait(null);
        d.look('gentleman');
        s.tell('stick_go:raise');
      },
    },
    // M1 passed: the gentleman sees the stick, «Pardon… I, as it were…», and turns off into the side street; she stops
    stick_off: {
      after: ['stick_go'], tells: ['stick_off:pardon', 'stick_off:gone'], seconds: 9,
      run: async s => {
        const d = s.person('dreamer'), g = s.person('gentleman'), n = s.person('nastya');
        d.gait('stick_raised');
        await d.walk([[0.1, 8.2]]);
        d.gait(null);
        g.look('dreamer');
        s.tell('stick_off:pardon');
        await g.do('bow');
        g.gait('stagger_walk');
        await g.walk([[2.6, 12], [6.0, 15], [8, 16]]);
        g.here(false);
        s.tell('stick_off:gone');
        n.look('dreamer');
        await d.turn(250);
        d.look('nastya');
      },
    },
    // M1 failed: the stick clatters down on the setts; the gentleman runs from the noise alone; she laughs through her
    // tears
    stick_drop: {
      after: ['stick_go'], tells: ['stick_drop:clatter', 'stick_drop:laugh'], seconds: 8,
      run: async s => {
        const d = s.person('dreamer'), g = s.person('gentleman'), n = s.person('nastya');
        await d.do('drop_stick');
        d.with([]);
        s.set('stick_a', (s.get('dreamer_a') ?? 0.4) + 0.35);
        s.set('stick_d', (s.get('dreamer_d') ?? 6.4) + 0.3);
        s.set('stick_down', true);
        s.tell('stick_drop:clatter');
        g.gait('run');
        const off = g.walk([[2.6, 13], [6.0, 16], [8, 17]]);
        await s.wait(0.6);
        n.look('dreamer');
        n.do('laugh', { loop: true });
        s.tell('stick_drop:laugh');
        await off;
        g.here(false);
        await s.wait(1);
      },
    },
    // M1 «arm», its start: he hurries to her side and offers his elbow (the mini-game in this pose)
    arm_go: {
      after: ['gentleman'], tells: ['arm_go:offer'], seconds: 5,
      run: async s => {
        const d = s.person('dreamer'), n = s.person('nastya');
        await d.walk([[0.6, 5.6], [-0.55, 7.2]]);
        await d.turn(160);
        d.do('elbow_out', { loop: true });
        n.look('dreamer');
        d.look('nastya');
        await glide(s, CAM([0.3, 4.4, 1.6], [-0.9, 7.3, 1.45]), 1.5);
        s.tell('arm_go:offer');
      },
    },
    // M1 «arm» either way: her hand lies on his elbow (the game's line differs: she takes it herself on a miss); the
    // gentleman sees the pair and drops back, off into the side street
    arm_take: {
      after: ['arm_go'], tells: ['arm_take:hand', 'arm_take:off'], seconds: 8,
      run: async s => {
        const n = s.person('nastya'), g = s.person('gentleman');
        n.reach({ r: 'dreamer#elbow_l' });
        s.tell('arm_take:hand');
        await s.wait(1.2);
        g.look('dreamer');
        await g.turn(60);
        g.gait('stagger_walk');
        await g.walk([[2.6, 12], [6.0, 15], [8, 16]]);
        g.here(false);
        s.tell('arm_take:off');
      },
    },
    // 1.3: they walk along the water toward the viewer, her hand on his elbow; they slow by the lamp («You are
    // trembling»); his «I have never spoken to a woman» — her «It shows», close on her face
    walk: {
      after: [], tells: ['walk:near', 'walk:seen'], seconds: 16,
      from: () => start(NIGHT.n1, CAM0, merge(who('nastya', [-1.05, 15, 180], 'stand', { reach: { r: 'dreamer#elbow_l' } }),
        who('dreamer', [-0.5, 15, 180], 'stand', { with: ['cane'] }))),
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer');
        await armInArm(s, [[-0.45, 9.5], [-0.4, 5.6]], 9);
        d.gait(null);
        n.look('dreamer');
        d.look([-1.4, 4, 1.4]);
        s.tell('walk:near');
        await s.wait(2.5);
        s.cut(face([-0.95, 5.6, 1.5], 170, 1.15, 20));
        n.mood('smile');
        s.tell('walk:seen');
        await s.wait(2.5);
      },
    },
    // «Поклон»: passing the yellow house he nods to it without thinking; she laughs aloud for the first time
    nod_house: {
      after: [], tells: ['nod_house:nod', 'nod_house:laugh'], seconds: 8,
      from: () => start(NIGHT.n1, CAM([1.6, 3.0, 1.65], [0.6, 9.0, 1.5]), merge(who('nastya', [-0.25, 12.5, 180], 'stand', { reach: { r: 'dreamer#elbow_l' } }),
        who('dreamer', [0.3, 12.5, 180], 'stand', { with: ['cane'] }))),
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer');
        await armInArm(s, [[0.6, 9.8]], 3.5);
        d.gait(null);
        d.look([6.1, 10.5, 3.2]);
        s.tell('nod_house:nod');
        await d.do('nod');
        n.look('dreamer');
        n.do('laugh', { loop: true });
        s.tell('nod_house:laugh');
        await s.wait(2);
        d.look('nastya');
      },
    },
    // ⏸ they go on in silence under the white sky, away along the water, small at last under the lamps
    silence: {
      after: [], tells: ['silence:far'], seconds: 18,
      from: () => start(NIGHT.n1, CAM([0.6, 1.2, 1.9], [-0.8, 20, 1.6]), merge(who('nastya', [-1.05, 6.5, 0], 'stand', { reach: { r: 'dreamer#elbow_l' } }),
        who('dreamer', [-0.5, 6.5, 0], 'stand', { with: ['cane'] }))),
      run: async s => {
        const walk = armInArm(s, [[-0.5, 22], [-0.5, 34]], 22);
        await s.wait(14);
        s.tell('silence:far');
        await s.wait(3);
        await walk;
      },
    },
    // 1.4: her corner — they come up the embankment toward the viewer to the side street; she lets go of his arm and
    // turns to face him
    corner: {
      after: [], tells: ['corner:let'], seconds: 10,
      from: () => start(NIGHT.n1, CAM0, merge(who('nastya', [-0.6, 9.5, 180], 'stand', { reach: { r: 'dreamer#elbow_l' } }),
        who('dreamer', [-0.05, 9.5, 180], 'stand', { with: ['cane'] }))),
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer');
        await armInArm(s, [[0.9, 5.5], [2.6, 3.2]], 6.5);
        d.gait(null);
        n.reach(null);
        await s.all(n.turn(215), d.turn(140));
        n.look('dreamer');
        d.look('nastya');
        await glide(s, CAM([0.7, 0.9, 1.6], [2.3, 3.3, 1.5]), 1.5);
        s.tell('corner:let');
      },
    },
    // В3 «promise»: she gives him her hand like a man, a handshake
    promise: {
      after: ['corner'], tells: ['promise:hand'], seconds: 4,
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer');
        const mid = [2.35, 3.05, 1.0];
        n.reach({ r: mid });
        d.reach({ r: 'nastya#hand_r' });
        s.tell('promise:hand');
        await s.wait(2.5);
        n.reach(null);
        d.reach(null);
      },
    },
    // В3 «silent bow»: he says nothing and bows
    silent_bow: {
      after: ['corner'], tells: ['silent_bow:bow'], seconds: 3,
      run: async s => {
        s.tell('silent_bow:bow');
        await s.person('dreamer').do('bow');
      },
    },
    // she goes off round the corner into the side street without looking back; he stays (any night's end there)
    she_goes: {
      after: ['corner', 'promise', 'silent_bow'], tells: ['she_goes:gone'], seconds: 6,
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer');
        n.reach(null);
        await n.walk([[3.8, 1.6], [5.2, -0.4], [9, -0.4]]);
        n.here(false);
        s.tell('she_goes:gone');
        d.look([5.5, -0.5, 1.5]);
      },
    },

    // ——— the second night (lilac) ———
    // 2.1: he at the parapet since nine, pacing up and down; she comes out of the side street — `arm` (the game's: the
    // mark «Под руку»): she takes his arm at once; else (the mark «Палка») he hides his empty hands behind his back
    waiting: {
      after: [], tells: ['waiting:pace', 'waiting:she'], seconds: 15,
      from: () => start(NIGHT.n2, CAM0, merge(who('dreamer', [-0.9, 6.2, 0]), who('nastya', [CORNER[0], CORNER[1], 250]))),
      run: async s => {
        const d = s.person('dreamer'), n = s.person('nastya');
        s.tell('waiting:pace');
        await d.walk([[-0.9, 8.8]]);
        await d.walk([[-0.95, 5.0]]);
        await d.turn(140);
        d.look(CORNER_LOOK);
        await n.walk([[3.4, 1.5], [0.6, 4.2]]);
        s.tell('waiting:she');
        d.look('nastya');
        n.look('dreamer');
        if (s.get('arm')) {
          await n.walk([[-1.45, 4.9]]);
          await n.turn(180);
          await d.turn(180);
          n.reach({ r: 'dreamer#elbow_l' });
          n.mood('smile');
        } else {
          await n.turn(250);
          d.do('hands_behind', { loop: true });
        }
        await glide(s, CAM([0.9, 1.6, 1.62], [-0.5, 4.9, 1.5]), 1.5);
      },
    },
    // 2.2: «Tell me your story» — the bench by the parapet: she sits (a foot drawn up under her), he on its very edge
    bench: {
      after: [], tells: ['bench:sit'], seconds: 11,
      from: () => start(NIGHT.n2, CAM0, merge(who('nastya', [-0.2, 6.3, 0]), who('dreamer', [0.35, 6.4, 0]))),
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer');
        const her = s.sequence(async q => {
          await q.person('nastya').walk([[-0.2, 9.55]]);
          await sit(q.person('nastya'), SEAT_HER);
        });
        const him = s.sequence(async q => {
          await q.wait(0.6);
          await q.person('dreamer').walk([[0.35, 10.6]]);
          await sit(q.person('dreamer'), SEAT_HIM);
        });
        glide(s, CAM([1.5, 9.9, 1.35], [-0.84, 10.05, 0.95]), 4);
        await s.all(her, him);
        n.look('dreamer');
        d.look('nastya');
        s.tell('bench:sit');
      },
    },
    // В4 «as it is»: she lays her palm on his sleeve, «Poor you»; he cannot bear pity and draws away, looking off
    sleeve: {
      after: ['bench'], tells: ['sleeve:touch', 'sleeve:away'], seconds: 6,
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer');
        n.reach({ l: 'dreamer#elbow_l' });
        s.tell('sleeve:touch');
        await s.wait(2);
        d.look([-3, 13, 0.4]);
        n.reach(null);
        s.tell('sleeve:away');
        await s.wait(1.5);
      },
    },
    // В4 «a type» and «Venice»: he talks with his hands, as a book does; she watches him (laughing, for Venice: the game's
    // mood)
    type: {
      after: ['bench'], tells: ['type:talk'], seconds: 8,
      run: async s => {
        const d = s.person('dreamer');
        d.do('orate_seated', { loop: true });
        s.tell('type:talk');
        await s.wait(7);
        d.do('seated', { loop: true });
      },
    },
    // 2.3: she takes the pin from her collar and pins her hem to his sleeve; close on the pin (M2 in this pose: touch
    // nothing)
    pin: {
      after: ['bench', 'sleeve', 'type'], tells: ['pin:pinned'], seconds: 6,
      from: () => start(NIGHT.n2, CAM([1.5, 9.9, 1.35], [-0.84, 10.05, 0.95]),
        merge(seat('nastya', SEAT_HER, 90, { look: 'dreamer' }), seat('dreamer', SEAT_HIM, 90, { look: 'nastya' }))),
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer');
        d.do('seated', { loop: true });
        n.reach({ r: 'nastya#chest' });
        await s.wait(1);
        n.reach({ r: 'dreamer#hand_l' });
        d.look('dreamer#hand_l');
        await glide(s, CAM([0.75, 9.85, 1.2], [-0.75, 10.1, 0.75]), 2);
        await s.move('pin', 1, { over: 0.4 });
        n.reach(null);
        n.look('dreamer');
        s.tell('pin:pinned');
      },
    },
    // M2 passed: she unpins it herself — «You see how I sit»
    unpin: {
      after: ['pin'], tells: ['unpin:free'], seconds: 4,
      run: async s => {
        const n = s.person('nastya');
        n.reach({ r: 'dreamer#hand_l' });
        await s.wait(1);
        await s.move('pin', 0, { over: 0.4 });
        n.reach(null);
        s.tell('unpin:free');
        await glide(s, CAM([1.5, 9.9, 1.35], [-0.84, 10.05, 0.95]), 1.5);
      },
    },
    // M2 missed: he jerks his arm, a rip, the hem torn — she laughs
    tear_hem: {
      after: ['pin'], tells: ['tear_hem:rip', 'tear_hem:laugh'], seconds: 5,
      run: async s => {
        const d = s.person('dreamer'), n = s.person('nastya');
        const jerk = d.do('jerk_seated');
        await s.wait(0.4);
        s.set('pin', 0);
        s.tell('tear_hem:rip');
        await jerk;
        d.do('seated', { loop: true });
        await glide(s, CAM([1.5, 9.9, 1.35], [-0.84, 10.05, 0.95]), 1);
        n.mood('laugh');
        s.tell('tear_hem:laugh');
        await s.wait(1.5);
      },
    },
    // after her story (Grandmother's room in memory): back on the bench — «It is a year today…» close on her face
    back_bench: {
      after: [], tells: ['back_bench:face'], seconds: 5,
      from: () => start(NIGHT.n2, face([-0.84, 9.55, 1.12], 115, 1.15, 10, 0.05), merge(seat('nastya', SEAT_HER, 100, { look: [1.5, 9, 1.2] }),
        seat('dreamer', SEAT_HIM, 90, { look: 'nastya' }))),
      run: async s => {
        await s.wait(1);
        s.tell('back_bench:face');
        await s.wait(3);
      },
    },
    // В5 «he may not be worth you»: «Don't you dare!» — she gets up and goes to the parapet, her back to him
    to_rail: {
      after: ['back_bench'], tells: ['to_rail:up', 'to_rail:rail'], seconds: 7,
      run: async s => {
        const n = s.person('nastya');
        await glide(s, CAM([1.5, 9.9, 1.35], [-0.84, 9.6, 1.0]), 0.8);
        await rise(n, SEAT_HER);
        s.tell('to_rail:up');
        await n.walk([[-1.35, 8.6]]);
        await n.turn(250);
        n.look([-5, 9, 0]);
        s.tell('to_rail:rail');
      },
    },
    // 2.5 Ш1: she gets up («How good that you did not fall in love with me…») and stands before him — from the bench,
    // or, after «Don't you dare», turning to him from the parapet
    rise: {
      after: ['back_bench', 'to_rail', 'sleeve', 'type', 'unpin', 'tear_hem'], tells: ['rise:up'], seconds: 5,
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer');
        if (s.get('nastya_on')) await rise(n, SEAT_HER, 90);
        await n.walk([[-0.2, 9.1], [-0.3, 11.5]]);
        await n.turn(aim([-0.3, 11.5], at(s, 'dreamer')));
        n.look('dreamer');
        d.look('nastya');
        await glide(s, CAM([1.2, 8.5, 1.45], [-0.45, 11.0, 1.3]), 1.5);
        s.tell('rise:up');
      },
    },
    // ✦ tapped: «Nastenka… but I already…» — she freezes (close), and steps back toward the parapet
    freeze: {
      after: ['rise'], tells: ['freeze:face', 'freeze:back'], seconds: 6,
      run: async s => {
        const n = s.person('nastya');
        s.cut(face([-0.3, 11.5, 1.5], n0(s, 'nastya_turn'), 1.2, 15, -0.03));
        n.mood('surprised');
        s.tell('freeze:face');
        await s.wait(2.5);
        await glide(s, CAM([1.2, 8.5, 1.45], [-0.7, 11.3, 1.3]), 1);
        await n.walk([[-1.15, 11.9]]);
        await n.turn(aim([-1.15, 11.9], at(s, 'dreamer')));
        n.look('dreamer');
        s.tell('freeze:back');
      },
    },
    // 2.6: she takes out a crumpled sealed envelope, her eyes full; holds it out — he gets up and takes it; she goes
    // quickly off to the side street without looking back
    letter: {
      after: ['rise', 'freeze'], tells: ['letter:out', 'letter:give', 'letter:gone'], seconds: 15,
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer');
        if (s.get('dreamer_on')) await rise(d, SEAT_HIM, 90);
        await d.walk([[0.3, 10.6]]);
        const her = at(s, 'nastya'), him = at(s, 'dreamer');
        await s.all(d.turn(aim(him, her)), n.turn(aim(her, him)));
        n.look('dreamer');
        d.look('nastya');
        n.with(['letter']);
        n.reach({ r: [(her[0] + him[0]) / 2, (her[1] + him[1]) / 2, 1.15] });
        s.cut(face([her[0], her[1], 1.5], aim(her, him), 1.3, 15, -0.03));
        s.tell('letter:out');
        await s.wait(2.5);
        await glide(s, CAM([1.5, 8.4, 1.55], [(her[0] + him[0]) / 2, (her[1] + him[1]) / 2, 1.35]), 1);
        d.reach({ r: 'nastya#letter' });
        await s.wait(1);
        n.with([]);
        n.reach(null);
        d.with(['letter']);
        d.reach(null);
        s.tell('letter:give');
        n.look(null);
        n.gait('hurry');
        await n.walk([[0.4, 6.5], [3.2, 1.8], [5.4, -0.4], [9, -0.4]]);
        n.gait(null);
        n.here(false);
        s.tell('letter:gone');
        d.look(CORNER_LOOK);
      },
    },
    // ⏸ he alone at the parapet with the letter: he looks at it, then at the water
    alone_letter: {
      after: ['letter'], tells: ['alone_letter:rail'], seconds: 12,
      run: async s => {
        const d = s.person('dreamer');
        await d.walk([[-1.1, 8.8]]);
        await d.turn(230);
        d.reach({ r: [-1.0, 8.4, 1.2] });
        d.look('dreamer#letter');
        s.tell('alone_letter:rail');
        glide(s, CAM([0.6, 6.0, 1.6], [-1.2, 8.8, 1.35]), 4);
        await s.wait(5);
        d.reach(null);
        d.look([-6, 12, 0]);
        await s.wait(4);
      },
    },

    // ——— the day (Friday) ———
    // Д2: day; he goes along the houses comparing each number with the address in her hand; the wind off the canal
    // (M3 in the pose it ends in: walking on with the letter)
    errand: {
      after: [], tells: ['errand:wind'], seconds: 10,
      from: () => start(NIGHT.day, CAM0, who('dreamer', [3.6, 16, 180], 'stand', { with: ['letter'], look: [6.1, 14, 3.8] })),
      run: async s => {
        const d = s.person('dreamer');
        d.reach({ r: [3.5, 15.5, 1.25] });
        await d.walk([[3.7, 11.5]]);
        d.look([6.1, 9.5, 3.8]);
        await d.walk([[3.4, 8.0]]);
        d.look('dreamer#letter');
        s.tell('errand:wind');
        d.walk([[2.6, 5.2], [2.2, 2.0], [3.0, -1.5]]);
        await s.wait(1.5);
      },
    },
    // M3 missed: the envelope falls into the puddle — he snatches it out: a brown stain on it
    puddle: {
      after: ['errand'], tells: ['puddle:fall', 'puddle:snatch'], seconds: 6,
      from: () => start(NIGHT.day, CAM([3.4, 1.6, 1.6], [1.9, 4.8, 0.7]), who('dreamer', [2.3, 4.0, 180], 'stand', { with: ['letter'] })),
      run: async s => {
        const d = s.person('dreamer');
        d.with([]);
        d.reach(null);
        s.set('letter_down', true);
        s.tell('puddle:fall');
        d.look([1.85, 4.6, 0]);
        await d.turn(330);
        d.reach({ r: [1.9, 4.6, 0.1] });
        await s.wait(1.2);
        s.set('letter_down', false);
        d.with(['letter_stained']);
        d.reach({ r: [2.2, 4.3, 1.2] });
        d.look('dreamer#letter');
        s.tell('puddle:snatch');
        await s.wait(2);
        d.reach(null);
      },
    },

    // ——— the third night (rose) ———
    // 3.0: he waits by the parapet; she comes out of the side street, cheerful and decided — `cross` (the game's: the
    // mark «Уколол»): she stops a step off and takes his arm only after a while; else at once
    third_come: {
      after: [], tells: ['third_come:here', 'third_come:arm'], seconds: 11,
      from: () => start(NIGHT.n3, CAM0, merge(who('dreamer', [-0.95, 5.2, 140], 'stand', { look: CORNER_LOOK }), who('nastya', [CORNER[0], CORNER[1], 250]))),
      run: async s => {
        const d = s.person('dreamer'), n = s.person('nastya');
        await n.walk([[3.4, 1.5], [0.4, 4.0]]);
        await n.turn(290);
        n.look('dreamer');
        d.look('nastya');
        s.tell('third_come:here');
        await glide(s, CAM([1.0, 1.6, 1.62], [-0.4, 4.8, 1.5]), 1.5);
        if (s.get('cross')) await s.wait(2.5);
        await n.walk([[-1.45, 5.0]]);
        await s.all(n.turn(180), d.turn(180));
        n.reach({ r: 'dreamer#elbow_l' });
        s.tell('third_come:arm');
      },
    },
    // В7-А «carried it»: she seizes his arm and pulls him along the parapet almost running
    pull_along: {
      after: ['third_come'], tells: ['pull_along:go'], seconds: 7,
      run: async s => {
        s.tell('pull_along:go');
        wide(s, 2);
        await armInArm(s, [[-0.4, 9.5], [-0.45, 12.5]], 4.5);
        s.person('dreamer').gait(null);
        await s.all(s.person('nastya').turn(160), s.person('dreamer').turn(170));
      },
    },
    // В7-А «he gets it tomorrow»: she stops — «Tomorrow…» — then takes his arm, and they walk slower
    slow_along: {
      after: ['third_come'], tells: ['slow_along:stop', 'slow_along:arm'], seconds: 10,
      run: async s => {
        const n = s.person('nastya');
        n.reach(null);
        n.look([-4, 6, 0.5]);
        s.tell('slow_along:stop');
        await s.wait(2.5);
        n.look('dreamer');
        s.tell('slow_along:arm');
        wide(s, 3);
        await armInArm(s, [[-0.4, 8], [-0.45, 10.5]], 7);
        s.person('dreamer').gait(null);
        await s.all(n.turn(160), s.person('dreamer').turn(170));
      },
    },
    // В7 «carried it» (the letter kept): she is as happy; he does not look her in the eyes — at the granite
    no_eyes: {
      after: ['third_come'], tells: ['no_eyes:look'], seconds: 6,
      run: async s => {
        const d = s.person('dreamer');
        const him = at(s, 'dreamer');
        s.cut(face([him[0], him[1], 1.62], 180, 1.3, -20, -0.05));
        d.look([-1.8, 3.6, 1.0]);
        s.tell('no_eyes:look');
        await s.wait(3.5);
      },
    },
    // В7 «No. Here it is»: he takes the letter out and gives it back; it is in her hands again — her face, close
    here_it_is: {
      after: ['third_come'], tells: ['here_it_is:give', 'here_it_is:face'], seconds: 8,
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer');
        n.reach(null);
        const her = at(s, 'nastya'), him = at(s, 'dreamer'), mid = [(her[0] + him[0]) / 2, (her[1] + him[1]) / 2];
        await s.all(d.turn(aim(him, her)), n.turn(aim(her, him)));
        d.with([paper()]);
        d.reach({ r: [mid[0], mid[1], 1.15] });
        await s.wait(1.2);
        n.reach({ r: 'dreamer#letter' });
        await s.wait(0.8);
        d.with([]);
        d.reach(null);
        n.with([paper()]);
        n.reach({ r: [her[0] + 0.15, her[1] - 0.3, 1.2] });
        s.tell('here_it_is:give');
        s.cut(face([her[0], her[1], 1.5], aim(her, him), 1.2, 25));
        n.look('nastya#letter');
        s.tell('here_it_is:face');
        await s.wait(2.5);
        n.look('dreamer');
      },
    },
    // В7а «couldn't»: «Every day» — she turns her face to the water; «because I love you»: she looks at the letter, not
    // at him (the game picks: this piece is the turn to the water)
    to_water: {
      after: ['here_it_is'], tells: ['to_water:turn'], seconds: 5,
      run: async s => {
        const n = s.person('nastya');
        await glide(s, CAM([1.1, 2.4, 1.6], [-0.6, 4.9, 1.45]), 1);
        await n.turn(260);
        n.look([-6, 6, 0]);
        s.tell('to_water:turn');
      },
    },
    at_letter: {
      after: ['here_it_is'], tells: ['at_letter:look'], seconds: 4,
      run: async s => {
        s.person('nastya').look('nastya#letter');
        s.tell('at_letter:look');
        await s.wait(3);
      },
    },
    // 3.2 «I guessed that you love me»: arm in arm at the parapet, waiting for ten — close on her face, laughing, then
    // cutting herself off
    guessed: {
      after: ['pull_along', 'slow_along', 'no_eyes'], tells: ['guessed:face'], seconds: 6,
      from: () => start(NIGHT.n3, face([-1.0, 7.4, 1.5], 160, 1.25, 25), merge(who('nastya', [-1.0, 7.4, 160], 'stand', { reach: { r: 'dreamer#elbow_l' }, look: 'dreamer' }),
        who('dreamer', [-0.45, 7.5, 175], 'stand', { look: 'nastya' }))),
      run: async s => {
        const n = s.person('nastya');
        n.look('dreamer');
        s.cut(face([-1.0, 7.4, 1.5], 160, 1.25, 25));
        s.tell('guessed:face');
        await s.wait(4);
      },
    },
    // В8 «Yes. I love you»: she reddens, lets go of his arm and takes it again at once
    yes_hand: {
      after: ['guessed'], tells: ['yes_hand:let', 'yes_hand:take'], seconds: 5,
      run: async s => {
        const n = s.person('nastya');
        await glide(s, CAM([0.8, 4.9, 1.6], [-0.7, 7.45, 1.45]), 1);
        n.reach(null);
        n.look([-3, 9, 0.5]);
        s.tell('yes_hand:let');
        await s.wait(1.8);
        n.reach({ r: 'dreamer#elbow_l' });
        n.look('dreamer');
        s.tell('yes_hand:take');
        await s.wait(1);
      },
    },
    // 3.3 ⏸ ten: the bell strikes ten (the game's sound, from `ten:stroke`); she at the parapet with her face to the
    // corner, her back to him; he behind her — the camera on his face. `ten` (the game's): 'carried' — he knows «he was
    // there today»: his lips part and close; 'glasha' — he watches her wait; 'kept' — he looks at the granite, his hand
    // goes to his pocket, the paper rustles (only he hears it)
    ten: {
      after: [], tells: ['ten:stroke', 'ten:last'], seconds: 22,
      from: () => start(NIGHT.n3, CAM([0.0, 3.6, 1.6], [-0.85, 6.6, 1.55]), merge(who('nastya', [-1.3, 5.0, 150], 'stand', { look: CORNER_LOOK }),
        who('dreamer', [-0.8, 6.6, 165], 'stand', { look: 'nastya' }))),
      run: async s => {
        const d = s.person('dreamer'), t = s.get('ten');
        s.tell('ten:stroke');
        await s.wait(2);
        await glide(s, face([-0.8, 6.6, 1.62], 165, 1.25, 15), 5);
        if (t === 'kept') {
          d.look([-1.6, 5.6, 1.0]);
          d.do('hand_on_chest', { loop: true });
        } else if (t === 'carried') {
          // he knows «he was there today»: his eyes go to the corner, then down
          d.look(CORNER_LOOK);
          await s.wait(2);
          d.look([-1.2, 5.4, 1.0]);
          await s.wait(2.5);
          d.look('nastya');
        }
        await s.wait(t === 'carried' ? 6.5 : 11);
        await glide(s, CAM([0.0, 3.6, 1.6], [-0.85, 6.6, 1.55]), 2);
        s.tell('ten:last');
      },
    },
    // 3.4: no one came; she sits down on the bench and is silent
    sit_silent: {
      after: ['ten'], tells: ['sit_silent:sit'], seconds: 9,
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer');
        d.do('stand');
        n.look(null);
        glide(s, CAM([1.5, 9.9, 1.35], [-0.84, 10.05, 0.95]), 4);
        await n.walk([[-0.25, 9.55]]);
        await sit(n, SEAT_HER);
        n.look([0.5, 9.6, 0.2]);
        d.walk([[0.35, 10.2]]);
        d.look('nastya');
        s.tell('sit_silent:sit');
      },
    },
    // В9 «stay»: he sits down beside her and does not touch her; she lays her head on his shoulder («You are like a
    // brother to me») — his face, close
    stay: {
      after: ['sit_silent'], tells: ['stay:sit', 'stay:head', 'stay:face'], seconds: 11,
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer');
        await d.walk([[0.3, 10.15]]);
        await sit(d, [-0.84, 10.15]);
        s.tell('stay:sit');
        await s.wait(1);
        n.do('lean_shoulder', { loop: true });
        n.look([1.0, 10.2, 0.6]);
        s.tell('stay:head');
        await s.wait(2.5);
        s.cut(face([-0.84, 10.15, 1.12], 90, 1.15, 15, 0.05));
        d.look([1.5, 9.8, 1.0]);
        s.tell('stay:face');
        await s.wait(3);
      },
    },
    // В9 «go»: «I… must go. Forgive me» — he walks off to the side street; she looks after him and does not call
    leave: {
      after: ['sit_silent'], tells: ['leave:go', 'leave:gone'], seconds: 8,
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer');
        s.tell('leave:go');
        wide(s, 2);
        n.look('dreamer');
        await d.walk([[1.8, 7.0], [3.6, 2.0], [5.3, -0.4], [9, -0.4]]);
        d.here(false);
        s.tell('leave:gone');
        await s.wait(1);
      },
    },
    // В9 «about Glasha»: she lifts her head — «Every day? Truly?»
    head_up: {
      after: ['sit_silent'], tells: ['head_up:look'], seconds: 4,
      run: async s => {
        const n = s.person('nastya');
        n.look('dreamer');
        s.cut(face([-0.84, 9.55, 1.12], 100, 1.15, 0, 0.05));
        s.tell('head_up:look');
        await s.wait(2.5);
      },
    },
    // 3.4-С: she at the parapet holds the letter over the water; the bell strikes ten (the game's sound from
    // `tear_letter:stroke`); on the tenth she tears it to bits and lets them fall into the canal; she goes off quickly,
    // over her shoulder a word; ⏸ he alone at the parapet, the scraps afloat
    tear_letter: {
      after: [], tells: ['tear_letter:stroke', 'tear_letter:tear', 'tear_letter:gone'], seconds: 30,
      from: () => start(NIGHT.n3, CAM([0.6, 3.4, 1.6], [-1.3, 6.4, 1.3]), merge(
        who('nastya', [-1.42, 6.2, 250], 'stand', { with: [paper()], reach: { r: [-2.15, 6.1, 1.3] }, look: [-2.4, 6.1, 0.9] }),
        who('dreamer', [-0.3, 5.3, 220], 'stand', { look: 'nastya' }))),
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer');
        s.tell('tear_letter:stroke');
        await glide(s, face([-1.42, 6.2, 1.5], 250, 1.4, -55), 6);
        await s.wait(10);
        n.reach(null);
        const tear = n.do('tear');
        await s.wait(1.2);
        n.with([]);
        s.set('scraps', true);
        s.tell('tear_letter:tear');
        await tear;
        await glide(s, CAM([0.6, 3.4, 1.6], [-1.3, 6.4, 1.3]), 1);
        n.gait('hurry');
        n.look('dreamer');
        await n.walk([[-0.6, 4.4], [2.4, 2.2], [5.2, -0.4], [9, -0.4]]);
        n.gait(null);
        n.here(false);
        s.tell('tear_letter:gone');
        await d.walk([[-1.15, 6.6]]);
        await d.turn(250);
        d.look([-4, 7.5, -1.6]);
        await glide(s, CAM([0.4, 4.4, 1.9], [-3.0, 8.5, -1.0]), 4);
      },
    },

    // ——— the fourth night (grey; rain) ———
    // 4.1 (А, У): she at the parapet, leaning on it, weeping («He won't come! He hasn't answered!»), the first night's
    // picture again; he by her. `kept` (the game's: branch У): on «He hasn't answered!» (`fourth_weep:pocket`) his
    // hand goes to his pocket
    fourth_weep: {
      after: [], tells: ['fourth_weep:cry', 'fourth_weep:pocket'], seconds: 10,
      from: () => start(NIGHT.n4, CAM([0.5, 3.3, 1.65], [-1.0, 7.0, 1.3]), merge(who('nastya', [RAIL[0], RAIL[1], 290], { motion: 'weep_rail', loop: true }),
        who('dreamer', [-0.65, 6.2, 215], 'stand', { look: 'nastya' }))),
      run: async s => {
        const d = s.person('dreamer');
        s.tell('fourth_weep:cry');
        await s.wait(4);
        s.tell('fourth_weep:pocket');
        if (s.get('kept')) {
          d.do('hand_on_chest', { loop: true });
          d.look([-1.6, 5.4, 0.9]);
        }
        await s.wait(3);
      },
    },
    // В10 «I love you»: he comes close and speaks (stumbling, at last not in the third person) — his face, then hers
    confess: {
      after: ['fourth_weep'], tells: ['confess:him', 'confess:her'], seconds: 9,
      run: async s => {
        const d = s.person('dreamer'), n = s.person('nastya');
        d.do('stand');
        await d.walk([[-0.9, 6.6]]);
        await d.turn(aim([-0.9, 6.6], RAIL));
        d.look('nastya');
        s.cut(face([-0.9, 6.6, 1.62], aim([-0.9, 6.6], RAIL), 1.25, -35));
        s.tell('confess:him');
        await s.wait(3.5);
        n.do('stand');
        await n.turn(aim(RAIL, [-0.9, 6.6]));
        n.look('dreamer');
        s.cut(face([RAIL[0], RAIL[1], 1.5], aim(RAIL, [-0.9, 6.6]), 1.25, 30));
        s.tell('confess:her');
        await s.wait(2.5);
      },
    },
    // В10 «hold her by the shoulders»: his arm round her shoulders, both looking at the water; she quiets
    shoulders: {
      after: ['fourth_weep'], tells: ['shoulders:arm'], seconds: 8,
      run: async s => {
        const d = s.person('dreamer'), n = s.person('nastya');
        d.do('stand');
        await d.walk([[-1.0, 6.75]]);
        await d.turn(300);
        d.reach({ l: 'nastya#shoulder_r' });
        d.look([-6, 9, 0]);
        s.tell('shoulders:arm');
        await s.wait(2.5);
        n.do('stand');
        n.look([-6, 9, 0]);
        await s.wait(3);
      },
    },
    // В10 «I didn't carry it» (У4): he takes out the letter and holds it out; she looks at the envelope, then at him
    // (close); not a word; she takes it with two fingers as if it were someone else's and goes round the corner; the
    // rain begins; ⏸ he alone at the parapet in the rain, his hands empty
    give_back: {
      after: ['fourth_weep'], tells: ['give_back:out', 'give_back:face', 'give_back:take', 'give_back:gone', 'give_back:rain'], seconds: 24,
      run: async s => {
        const d = s.person('dreamer'), n = s.person('nastya'), sheet = paper();
        d.do('stand');
        n.do('stand');
        await d.walk([[-0.9, 6.6]]);
        await s.all(n.turn(aim(RAIL, [-0.9, 6.6])), d.turn(aim([-0.9, 6.6], RAIL)));
        n.look('dreamer');
        d.with([sheet]);
        d.reach({ r: [-1.15, 6.95, 1.15] });
        s.tell('give_back:out');
        await s.wait(1.5);
        n.look('dreamer#letter');
        s.cut(face([RAIL[0], RAIL[1], 1.5], aim(RAIL, [-0.9, 6.6]), 1.25, 30));
        await s.wait(1.5);
        n.look('dreamer');
        s.tell('give_back:face');
        await s.wait(2);
        await glide(s, CAM([0.5, 3.3, 1.65], [-1.0, 7.0, 1.3]), 1);
        n.reach({ r: 'dreamer#letter' });
        await s.wait(0.8);
        d.with([]);
        d.reach(null);
        n.with([sheet]);
        n.reach(null);
        s.tell('give_back:take');
        await n.walk([[-0.4, 5.0], [2.6, 2.0], [5.2, -0.4], [9, -0.4]]);
        n.here(false);
        s.tell('give_back:gone');
        s.tell('give_back:rain');
        const rain = s.move('rain', 1, { over: 4 });
        await d.walk([[-1.1, 6.9]]);
        await d.turn(250);
        d.look([-6, 10, 0]);
        await rain;
      },
    },
    // 4.3 (А, У): the rain; arm in arm along the water, coming up the embankment toward the viewer (M4 «arm in arm»:
    // they walk on as the mini-game plays). `went` (the game's: the mark «Ушёл»): she gives him her arm only now, at the
    // start (`rain_walk:arm`)
    rain_walk: {
      after: [], tells: ['rain_walk:rain', 'rain_walk:arm'], seconds: 6,
      from: () => start({ ...NIGHT.n4, rain: 0.2 }, CAM([0.9, 1.4, 1.7], [-0.6, 12, 1.4]), merge(who('nastya', [-1.05, 26, 180]),
        who('dreamer', [-0.5, 26, 180]), who('lodger', [-1.0, 6.8, 0], 'stand', { with: ['hat_hand', 'letter'], wear: { hat: 'none' } }))),
      run: async s => {
        s.tell('rain_walk:rain');
        s.move('rain', 1, { over: 5 });
        await s.wait(s.get('went') ? 2 : 0.5);
        s.tell('rain_walk:arm');
        armInArm(s, [[-0.45, 16], [-0.4, 11]], 18);
        await s.wait(3);
      },
    },
    // M4 held fast: she presses close; let go: she takes his arm again («Where are you going?») and walks a little
    // ahead (both go on walking)
    hold_close: {
      after: ['rain_walk'], tells: ['hold_close:close'], seconds: 3,
      run: async s => {
        s.person('nastya').look('dreamer');
        s.person('nastya').mood('smile');
        s.tell('hold_close:close');
        await s.wait(2);
      },
    },
    walk_ahead: {
      after: ['rain_walk'], tells: ['walk_ahead:take'], seconds: 3,
      run: async s => {
        const n = s.person('nastya');
        n.reach(null);
        await s.wait(0.6);
        n.reach({ r: 'dreamer#elbow_l' });
        n.look('dreamer');
        s.tell('walk_ahead:take');
        await s.wait(1.5);
      },
    },
    // 4.3 (У) end: ⏸ he alone under the yellow house's awning in the rain; takes out the envelope, looks at her hand on
    // it, puts it back
    awning_alone: {
      after: [], tells: ['awning_alone:look', 'awning_alone:back'], seconds: 11,
      from: () => start({ ...NIGHT.n4, rain: 1 }, CAM([2.9, 7.4, 1.6], [5.1, 11.4, 1.45]), who('dreamer', [5.1, 11.6, 210], 'stand', { look: [2, 4, 1] })),
      run: async s => {
        const d = s.person('dreamer');
        await s.wait(1.5);
        d.with([paper()]);
        d.reach({ r: [4.95, 11.2, 1.2] });
        d.look('dreamer#letter');
        s.tell('awning_alone:look');
        await glide(s, face([5.1, 11.6, 1.62], 210, 1.3, 25, 0.05), 3);
        await s.wait(2.5);
        d.reach(null);
        d.with([]);
        d.look([2, 4, 1]);
        s.tell('awning_alone:back');
        await s.wait(1.5);
      },
    },
    // 4.1-С: she at the parapet, no tears; nothing to wait for. `couldnt` (the game's: the mark «Не смог»): she takes his
    // arm herself, as a sister takes a brother's, «Well, let us go, my knight»; else she stands and he comes to her, and
    // she walks a step ahead without his arm
    rail_c: {
      after: [], tells: ['rail_c:arm', 'rail_c:walk'], seconds: 12,
      from: () => start(NIGHT.n4, CAM0, merge(who('nastya', [RAIL[0], RAIL[1], 200], 'stand', { look: CORNER_LOOK }), who('dreamer', [1.6, 3.4, 330]))),
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer');
        if (s.get('couldnt')) {
          await n.walk([[-0.6, 5.2]]);
          await d.walk([[0.0, 5.0]]);
          await s.all(n.turn(0), d.turn(0));
          n.reach({ r: 'dreamer#elbow_l' });
          s.tell('rail_c:arm');
          s.tell('rail_c:walk');
          armInArm(s, [[-0.4, 14], [-0.45, 24]], 16);
        } else {
          await d.walk([[-0.6, 6.6]]);
          d.look('nastya');
          n.look('dreamer');
          s.tell('rail_c:arm');
          await s.wait(1.5);
          s.tell('rail_c:walk');
          n.walk([[-1.0, 9], [-1.0, 24]]);
          await s.wait(0.9);
          d.walk([[-0.4, 9], [-0.4, 23]]);
        }
        await s.wait(4);
      },
    },
    // В10-С «I love you»: her night of «nothing» ends at the first word. `first` (the game's: said first now, after «I
    // couldn't»): she stops and looks at him long (close), takes her hand from under his elbow and walks on alone a step
    // ahead; else («I asked — nothing»): she walks on without turning, a step ahead
    confess_c: {
      after: [], tells: ['confess_c:stop', 'confess_c:on'], seconds: 10,
      from: () => start(NIGHT.n4, CAM([0.9, 9.6, 1.65], [-0.6, 13.6, 1.45]), merge(who('nastya', [-0.95, 13.6, 180]), who('dreamer', [-0.4, 13.8, 180], 'stand', { look: 'nastya' }))),
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer');
        if (s.get('first')) {
          n.reach({ r: 'dreamer#elbow_l' });
          await n.turn(120);
          n.look('dreamer');
          s.cut(face([-0.95, 13.6, 1.5], 120, 1.2, 45));
          s.tell('confess_c:stop');
          await s.wait(3);
          n.reach(null);
          s.cut(CAM([0.9, 9.6, 1.65], [-0.6, 13.6, 1.45]));
        } else s.tell('confess_c:stop');
        s.tell('confess_c:on');
        n.look(null);
        n.walk([[-1.0, 10.5], [-1.0, 4]]);
        await s.wait(0.8);
        d.walk([[-0.35, 11], [-0.3, 5]]);
        await s.wait(4);
      },
    },
    // В10-С «he will still come»: «Don't speak of him» — she lets go of his arm and walks on alone
    brother_c: {
      after: [], tells: ['brother_c:let'], seconds: 8,
      from: () => start(NIGHT.n4, CAM([0.9, 9.6, 1.65], [-0.6, 13.6, 1.45]), merge(who('nastya', [-0.95, 13.6, 180], 'stand', { reach: { r: 'dreamer#elbow_l' } }),
        who('dreamer', [-0.4, 13.6, 180]))),
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer');
        await s.wait(1);
        n.reach(null);
        s.tell('brother_c:let');
        n.walk([[-1.0, 10.5], [-1.0, 4]]);
        await s.wait(1.4);
        d.walk([[-0.35, 11], [-0.3, 5]]);
        await s.wait(4);
      },
    },
    // В10-С «walk beside her in silence»: they walk on, not a word; water, steps
    quiet_c: {
      after: [], tells: ['quiet_c:walk'], seconds: 12,
      from: () => start(NIGHT.n4, CAM([0.6, 1.0, 1.8], [-0.7, 12, 1.4]), merge(who('nastya', [-1.0, 16, 180]), who('dreamer', [-0.4, 16, 180]))),
      run: async s => {
        s.tell('quiet_c:walk');
        s.person('nastya').walk([[-1.0, 6]]);
        s.person('dreamer').walk([[-0.4, 6.4]]);
        await s.wait(11);
      },
    },
    // 4.3-С: the rain begins; under the yellow house's awning; the bell strikes ten — her hour (the game's sound from
    // `awning_c:stroke`); on the first stroke she turns to the corner by habit (close). `confessed` (the game's: the
    // mark «Признался»): she stands a step from him, her back to him, facing the corner; on the tenth she turns from the
    // corner to him, comes, takes his arm and stands shoulder to shoulder; else she holds his arm as one holds a rail
    // and looks at the corner to the last stroke (M4 in the pose it ends in)
    awning_c: {
      after: [], tells: ['awning_c:rain', 'awning_c:stroke', 'awning_c:last'], seconds: 30,
      from: () => start({ ...NIGHT.n4, rain: 0 }, CAM([2.6, 6.4, 1.6], [5.1, 11.3, 1.4]), merge(who('nastya', [3.6, 8.2, 20]), who('dreamer', [4.2, 8.0, 20]))),
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer'), confessed = !!s.get('confessed');
        s.tell('awning_c:rain');
        s.move('rain', 1, { over: 3 });
        n.gait('hurry');
        await s.all(n.walk([[4.95, 11.2]]), d.walk([[5.45, 11.5]]));
        n.gait(null);
        await s.all(n.turn(200), d.turn(200));
        if (!confessed) n.reach({ r: 'dreamer#elbow_l' });
        await s.wait(1);
        s.tell('awning_c:stroke');
        if (confessed) await n.walk([[4.9, 10.8]]);
        await n.turn(confessed ? 190 : 205);
        n.look([6.0, -0.5, 1.5]);
        s.cut(face([4.9, confessed ? 10.8 : 11.2, 1.5], 190, 1.2, 20));
        await s.wait(3);
        await glide(s, CAM([3.0, 7.6, 1.6], [5.1, 11.2, 1.4]), 2);
        await s.wait(11);
        if (confessed) {
          await n.turn(30);
          n.look('dreamer');
          await n.walk([[4.95, 11.3]]);
          await n.turn(200);
          n.reach({ r: 'dreamer#elbow_l' });
          n.look(null);
        }
        s.tell('awning_c:last');
        await s.wait(1);
      },
    },
    // 4.4 Ш3 (А): coming up the embankment in the rain, they see under the lamp a man, his hat at his chest, her
    // envelope in his hand — «Nastenka»; her turn to the lamp (close); she stops, takes her hand from under his elbow and
    // puts it into his palm and presses it (M5 «the hand» in this pose)
    lodger: {
      after: ['rain_walk', 'hold_close', 'walk_ahead'], tells: ['lodger:see', 'lodger:turn', 'lodger:hand'], seconds: 12,
      from: () => start({ ...NIGHT.n4, rain: 1 }, CAM([0.9, 4.2, 1.7], [-0.6, 11, 1.45]), merge(who('nastya', [-1.0, 11.4, 180], 'stand', { reach: { r: 'dreamer#elbow_l' } }),
        who('dreamer', [-0.45, 11.4, 180]), who('lodger', [-1.0, 6.8, 0], 'stand', { with: ['hat_hand', 'letter'], wear: { hat: 'none' } }))),
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer'), l = s.person('lodger');
        d.gait(null);
        s.set('nastya_d', s.get('nastya_d'));
        s.set('dreamer_d', s.get('dreamer_d'));
        await s.wait(0.5);
        l.look('nastya');
        s.tell('lodger:see');
        await s.wait(1);
        n.look('lodger');
        s.cut(CAM([-0.35, 8.6, 1.52], [n0(s, 'nastya_a'), n0(s, 'nastya_d'), 1.5]));
        s.tell('lodger:turn');
        n.mood('surprised');
        await s.wait(2.5);
        s.cut(CAM([0.9, 7.2, 1.25], [n0(s, 'nastya_a') + 0.3, n0(s, 'nastya_d'), 1.0]));
        n.reach({ r: 'dreamer#hand_l' });
        d.reach({ l: 'nastya#hand_r' });
        s.tell('lodger:hand');
        await s.wait(1.5);
      },
    },
    // M5 «let go»: she runs to the Lodger, puts her arms round him, runs back, puts her arms round the Dreamer, kisses him
    // and goes back to the Lodger. `went` (the game's): no kiss — from beside the Lodger she only waves
    let_go: {
      after: ['lodger'], tells: ['let_go:run', 'let_go:back', 'let_go:kiss', 'let_go:with'], seconds: 18,
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer'), l = s.person('lodger'), went = !!s.get('went');
        await glide(s, CAM([1.4, 4.4, 1.7], [-0.6, 9.0, 1.4]), 0.8);
        n.reach(null);
        d.reach(null);
        n.gait('run');
        s.tell('let_go:run');
        const a = n0(s, 'nastya_a'), z = n0(s, 'nastya_d');
        await n.walk([[-0.95, 7.45]]);
        n.gait(null);
        await n.turn(180);
        n.do('embrace', { loop: true });
        n.reach({ r: 'lodger#back', l: 'lodger#back' });
        l.reach({ r: 'nastya#back', l: 'nastya#back' });
        await s.wait(2);
        n.reach(null);
        l.reach(null);
        n.do('stand');
        if (went) {
          await n.turn(0);
          n.look('dreamer');
          await n.do('wave');
          s.tell('let_go:back');
          s.tell('let_go:kiss');
        } else {
          await n.turn(0);
          n.gait('run');
          s.tell('let_go:back');
          await n.walk([[a + 0.05, z - 0.6]]);
          n.gait(null);
          await n.turn(30);
          n.do('embrace', { loop: true });
          n.reach({ r: 'dreamer#back', l: 'dreamer#nape' });
          n.look('dreamer#head');
          s.cut(face([a + 0.3, z - 0.3, 1.55], 0, 1.4, 150));
          s.tell('let_go:kiss');
          await s.wait(2.5);
          n.reach(null);
          n.do('stand');
          await glide(s, CAM([1.4, 4.4, 1.7], [-0.6, 9.0, 1.4]), 0.6);
          await n.walk([[-0.7, 7.4]]);
        }
        await n.turn(200);
        n.look('lodger');
        s.tell('let_go:with');
      },
    },
    // M5 «hold»: she pulls, and he feels her pulling away; after three seconds she frees herself, goes to the Lodger,
    // looks back once
    held: {
      after: ['lodger'], tells: ['held:pull', 'held:free', 'held:look'], seconds: 10,
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer');
        s.tell('held:pull');
        await n.do('pull_free');
        await s.wait(1.2);
        n.reach(null);
        d.reach(null);
        s.tell('held:free');
        await glide(s, CAM([1.4, 4.4, 1.7], [-0.6, 9.0, 1.4]), 0.8);
        await n.walk([[-0.7, 7.45]]);
        await n.turn(10);
        n.look('dreamer');
        s.tell('held:look');
        await s.wait(1.5);
        await n.turn(200);
        n.look('lodger');
      },
    },
    // M5 «reach after»: a step after her — «Nastenka!»; she stops halfway, the Lodger waits; she comes back, lays her
    // palm on his cheek, says nothing, goes. `went`: she stops but does not come back
    reached: {
      after: ['lodger'], tells: ['reached:call', 'reached:stop', 'reached:cheek', 'reached:go'], seconds: 13,
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer'), went = !!s.get('went');
        n.reach(null);
        d.reach(null);
        await glide(s, CAM([1.4, 4.4, 1.7], [-0.6, 9.0, 1.4]), 0.8);
        const z = n0(s, 'dreamer_d');
        const going = n.walk([[-0.9, 9.3]]);
        await s.wait(0.8);
        await d.walk([[-0.5, z - 0.6]]);
        s.tell('reached:call');
        await going;
        await n.turn(20);
        n.look('dreamer');
        s.tell('reached:stop');
        await s.wait(2);
        if (!went) {
          await n.walk([[-0.75, z - 1.05]]);
          await n.turn(20);
          n.reach({ r: 'dreamer#head' });
          s.cut(face([-0.6, z - 0.6, 1.62], 200, 1.3, 30));
          s.tell('reached:cheek');
          await s.wait(2.5);
          n.reach(null);
          s.cut(CAM([1.4, 4.4, 1.7], [-0.6, 9.0, 1.4]));
        } else s.tell('reached:cheek');
        await n.walk([[-0.7, 7.45]]);
        await n.turn(200);
        n.look('lodger');
        s.tell('reached:go');
      },
    },
    // with her by him, the Lodger speaks (official, as before his superiors), then looks over her shoulder at the
    // Dreamer and speaks to her, not to him; puts on his hat; they go off down the embankment toward the viewer and round
    // the corner; ⏸ he alone at the parapet in the rain
    leave_with: {
      after: ['let_go', 'held', 'reached'], tells: ['leave_with:speak', 'leave_with:look', 'leave_with:hat', 'leave_with:gone'], seconds: 18,
      run: async s => {
        const n = s.person('nastya'), d = s.person('dreamer'), l = s.person('lodger');
        await l.turn(170);
        l.look('nastya');
        s.cut(CAM([0.4, 4.6, 1.75], [-1.0, 6.9, 1.65]));
        s.tell('leave_with:speak');
        await s.wait(3);
        l.look('dreamer');
        s.tell('leave_with:look');
        await s.wait(2.5);
        l.with(['letter']);
        l.wear(null);
        await l.do('hat_on');
        s.tell('leave_with:hat');
        await glide(s, CAM0, 1.5);
        n.reach({ r: 'lodger#elbow_l' });
        await s.all(n.walk([[-0.5, 4.5], [2.4, 1.6], [5.2, -0.6], [9, -0.6]]), l.walk([[0.05, 4.6], [2.9, 1.8], [5.4, 0.2], [9, 0.2]]));
        n.here(false);
        l.here(false);
        s.tell('leave_with:gone');
        await d.walk([[-1.15, 8.6]]);
        await d.turn(250);
        d.look([-6, 11, 0]);
        await glide(s, CAM([0.6, 5.2, 1.7], [-1.2, 8.6, 1.4]), 4);
      },
    },

    // ——— «Утро» (the morning's end, day) ———
    // the city back from the dachas: people about, a dray; he comes along from the side street; a passer-by brushes his
    // shoulder («Pardon»); `bowed` (the game's: the mark «Поклон»): he nods to the yellow house, else looks at the water;
    // at her place at the parapet a nurse-maid with a child eating a bagel, the crumbs falling into the canal; he stands a
    // step from them, farther than he need — the last picture: the nurse-maid, the bagel, the parapet, he at the side
    morning: {
      after: [], tells: ['morning:pardon', 'morning:look', 'morning:last'], seconds: 22,
      from: () => start({ ...NIGHT.day, cart: true }, CAM0, merge(who('dreamer', [CORNER[0], CORNER[1], 290]),
        who('passerby', [0.6, 14, 180]), who('dvornik', [5.0, 14.6, 215], { motion: 'sweep', loop: true }, { with: ['broom'] }),
        who('nanny', [-1.3, 6.9, 285], 'stand', { look: 'child' }), who('child', [-1.42, 6.2, 255], { motion: 'nibble', loop: true }, { with: ['bagel'], look: [-4, 6.5, -1.6] }))),
      run: async s => {
        const d = s.person('dreamer'), p = s.person('passerby');
        const by = p.walk([[0.9, 6], [2.4, 1.6], [4.6, -0.6], [9, -0.6]]);
        await d.walk([[3.2, 1.6], [1.6, 3.2]]);
        s.tell('morning:pardon');
        await by;
        p.here(false);
        await d.walk([[0.9, 4.4]]);
        if (s.get('bowed')) {
          await d.turn(70);
          d.look([6.1, 8, 3.2]);
          await d.do('nod');
        } else {
          await d.turn(250);
          d.look([-6, 10, 0]);
        }
        s.tell('morning:look');
        await d.walk([[-0.25, 5.4]]);
        await d.turn(235);
        d.look('child');
        await glide(s, CAM([0.9, 2.2, 1.6], [-0.8, 6.2, 1.2]), 4);
        s.tell('morning:last');
        await s.wait(2);
      },
    },
  };
}

return { INK, HOUSES, facade, door, granite, lamp, wash, hatch, rgbOf, film: FILM };
