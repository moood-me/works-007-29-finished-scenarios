// «The Canal Embankment» — what its paintings share: the houses' facades, drawn as a lithograph is (a wash of colour,
// a fine sepia ink line round every shape, a little hatching in the shade under the cornices), and the granite. All
// in daylight colours: the white night is the scene's light (notes.md).
const { hash } = anim;
const INK = '#4a3f3a';

// The kinds of houses along the canal: width, height (to the cornice), floors, bays, the wall's wash, the trims', the
// iron roof's; a pediment over the middle bays or none
const HOUSES = {
  a: { w: 24, h: 15.5, floors: 4, bays: 9, wall: '#dcbc78', trim: '#f0e7d5', roof: '#7f8a86', seed: 1 },
  b: { w: 18, h: 13, floors: 3, bays: 6, wall: '#d7a596', trim: '#f0e4d7', roof: '#8a7a72', seed: 2 },
  c: { w: 21, h: 16.5, floors: 4, bays: 7, wall: '#aab6a3', trim: '#ede9dd', roof: '#6f7a78', pediment: true, seed: 3 },
  d: { w: 16, h: 12.5, floors: 3, bays: 5, wall: '#b9bdc7', trim: '#edece7', roof: '#7c8088', seed: 4 },
  e: { w: 26, h: 14, floors: 4, bays: 10, wall: '#e4d9c5', trim: '#f4efe5', roof: '#858c8a', seed: 5 },
  yellow: { w: 26, h: 13, floors: 3, bays: 10, wall: '#dcc68e', trim: '#f5edd8', roof: '#78827e', seed: 6, line: 0.025 },
};

// A facade as an elevation, x 0…w along it, y up negative from its foot (metres): the ground floor rusticated, belt
// courses, windows with light surrounds and grey-blue panes that hold the sky, a cornice and the iron roof's edge with
// chimneys above it; `door` — the x of a door in the ground floor (the bays leave it room)
function facade(g, H, door) {
  const { w, h, floors, bays, wall, trim, roof, seed } = H, line = H.line ?? 0.04, ground = 4.2, upper = (h - ground - 0.9) / (floors - 1);
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
  for (let i = 0; i < Math.round(w / 8); i++) {
    const x = 2 + (w - 4) * hash(i, seed * 7 + 1), tall = 1.2 + 0.9 * hash(i, seed * 7 + 2);
    g.fillStyle = '#a9998e';
    g.fillRect(x, -h - 2.1 - tall, 0.7, tall + 0.4);
    g.strokeRect(x, -h - 2.1 - tall, 0.7, tall + 0.4);
  }
  // the wall
  g.fillStyle = wall;
  g.fillRect(0, -h, w, h);
  // the ground floor, a shade deeper, its rustication
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
  // the belt courses and the cornice
  g.fillStyle = trim;
  g.fillRect(0, -ground - 0.25, w, 0.3);
  for (let f = 1; f < floors - 1; f++) g.fillRect(0, -ground - f * upper - 0.12, w, 0.14);
  g.fillRect(-0.15, -h, w + 0.3, 0.55);
  g.strokeStyle = INK;
  g.lineWidth = line;
  g.strokeRect(-0.15, -h, w + 0.3, 0.55);
  g.strokeRect(0, -ground - 0.25, w, 0.3);
  // (the hatching in the cornice's shade)
  g.beginPath();
  for (let x = 0.1; x < w; x += 0.22) {
    g.moveTo(x, -h + 0.6);
    g.lineTo(x + 0.35, -h + 1.05);
  }
  g.strokeStyle = 'rgba(74,63,58,0.35)';
  g.lineWidth = line * 0.5;
  g.stroke();
  // a pediment over the middle bays
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
  }
  // the windows: each a light surround, a pane holding the pale sky, its glazing bars, a sill
  const bay = w / bays;
  const opening = (cx, top, ww, wh) => {
    g.fillStyle = trim;
    g.fillRect(cx - ww / 2 - 0.18, top - 0.3, ww + 0.36, wh + 0.48);
    const pane = g.createLinearGradient(0, top, 0, top + wh);
    pane.addColorStop(0, '#a8afbf');
    pane.addColorStop(1, '#7d8496');
    g.fillStyle = pane;
    g.fillRect(cx - ww / 2, top, ww, wh);
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
  };
  for (let i = 0; i < bays; i++) {
    const cx = (i + 0.5) * bay;
    if (door !== undefined && Math.abs(cx - door) < bay * 0.8) continue;
    opening(cx, -ground + 1.0, Math.min(1.1, bay * 0.45), 2.0);
    for (let f = 0; f < floors - 1; f++) {
      const top = -ground - (f + 1) * upper + 0.45;
      opening(cx, top, Math.min(1.2, bay * 0.48), Math.min(2.3, upper - 1.2));
    }
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
  g.fillStyle = '#ffdc96';
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

return { INK, HOUSES, facade, door, granite, lamp };
