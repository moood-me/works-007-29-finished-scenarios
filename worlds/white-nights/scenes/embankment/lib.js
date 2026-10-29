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

return { INK, HOUSES, facade, door, granite, lamp, wash, hatch, rgbOf };
