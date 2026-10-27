// What the street's paintings share: the lane's way (it runs back and to the left from the Helmers' corner, up to the
// sledging hill at its end), a tall window of 1879 in a plastered wall (its panes dark by day) and that window's
// lamplight behind the curtains in the evening (a painting's layer `lit`). Metres, y down, the window's foot (its
// sill) at y.

// the lane: from the Helmers' corner (across, distance), along `along` (a unit step on the ground: left and back)
const CORNER = [-2.2, 11.2];
const ALONG = [-0.39, 0.92];
// how far up the lane a point of the ground is (metres from the corner's line across it)
function up(across, distance) {
  return (across - CORNER[0]) * ALONG[0] + (distance - CORNER[1]) * ALONG[1];
}

const GLASS = '#3d4555';
const SASH = '#ece6da';
const SNOW = '#f3f5f8';

// a window w by h, its middle at x, its sill at y; `trim` — the plaster surround's colour; `cap` — a pediment over it
function casement(g, x, y, w, h, trim, cap) {
  g.fillStyle = trim;
  g.fillRect(x - w / 2 - 0.12, y - h - 0.12, w + 0.24, h + 0.12);
  if (cap) {
    g.beginPath();
    g.moveTo(x - w / 2 - 0.22, y - h - 0.14);
    g.lineTo(x + w / 2 + 0.22, y - h - 0.14);
    g.lineTo(x, y - h - 0.5);
    g.closePath();
    g.fill();
    g.fillStyle = SNOW;
    g.beginPath();
    g.moveTo(x - w / 2 - 0.26, y - h - 0.12);
    g.lineTo(x - w / 2 - 0.1, y - h - 0.2);
    g.lineTo(x, y - h - 0.5);
    g.lineTo(x, y - h - 0.56);
    g.closePath();
    g.fill();
  } else {
    g.fillRect(x - w / 2 - 0.2, y - h - 0.26, w + 0.4, 0.14);
    g.fillStyle = SNOW;
    g.fillRect(x - w / 2 - 0.22, y - h - 0.31, w + 0.44, 0.06);
  }
  g.fillStyle = GLASS;
  g.fillRect(x - w / 2, y - h, w, h);
  bars(g, x, y, w, h);
  // the sill, snow lying on it
  g.fillStyle = trim;
  g.fillRect(x - w / 2 - 0.16, y, w + 0.32, 0.1);
  g.fillStyle = SNOW;
  g.beginPath();
  g.moveTo(x - w / 2 - 0.16, y + 0.01);
  g.quadraticCurveTo(x, y - 0.1, x + w / 2 + 0.16, y + 0.01);
  g.closePath();
  g.fill();
}

// the casement's frame and glazing bars: two leaves, three panes each
function bars(g, x, y, w, h) {
  g.fillStyle = SASH;
  g.fillRect(x - w / 2, y - h, w, 0.06);
  g.fillRect(x - w / 2, y - 0.06, w, 0.06);
  g.fillRect(x - w / 2, y - h, 0.06, h);
  g.fillRect(x + w / 2 - 0.06, y - h, 0.06, h);
  g.fillRect(x - 0.03, y - h, 0.06, h);
  for (const k of [0.36, 0.68]) g.fillRect(x - w / 2, y - h * k - 0.02, w, 0.04);
}

// the window lit from inside: warm lamplight, curtains drawn back to either side, the bars over it; its glow — the
// painting's light `name`, `k` of the strength of a lit room
function lamplight(g, e, x, y, w, h, curtain, name, k = 1) {
  const glow = g.createLinearGradient(0, y - h, 0, y);
  glow.addColorStop(0, '#f2c27a');
  glow.addColorStop(1, '#e09a52');
  g.fillStyle = glow;
  g.fillRect(x - w / 2, y - h, w, h);
  g.fillStyle = curtain;
  for (const s of [-1, 1]) {
    g.beginPath();
    g.moveTo(x + s * w / 2, y - h);
    g.lineTo(x + s * (w / 2 - 0.2), y - h);
    g.quadraticCurveTo(x + s * (w / 2 - 0.08), y - h * 0.45, x + s * (w / 2 - 0.16), y);
    g.lineTo(x + s * w / 2, y);
    g.closePath();
    g.fill();
  }
  bars(g, x, y, w, h);
  e.light(x, y - h * 0.5, w * 0.8, '#ffc77e', 0.45 * k, name);
}

// the rows of town houses along the lane, plastered in pale colours: each house { x0, x1 (metres along its row), h (to
// the eaves), wall, trim }; three storeys of windows (two where the house is low), a door in the middle of each
const ROWS = {
  // the right side, from its far end (x −9) to the Helmers' corner (x 9)
  right: {
    lit: 3,
    houses: [
      { x0: -9.1, x1: -3, h: 8.2, wall: '#c9bba1', trim: '#e6dcc8' },
      { x0: -3, x1: 3, h: 9.6, wall: '#b9a58a', trim: '#e3d7c0' },
      { x0: 3, x1: 9.1, h: 10.6, wall: '#cbc2ae', trim: '#ece4d2' },
    ],
  },
  // the left side, from the street (x −10) up to the hill (x 12)
  left: {
    lit: 4,
    houses: [
      { x0: -10.1, x1: -4, h: 10.2, wall: '#c7b29a', trim: '#e8dcc6' },
      { x0: -4, x1: 2, h: 8.4, wall: '#d1c6ae', trim: '#eee6d4' },
      { x0: 2, x1: 7.5, h: 10.8, wall: '#b4a690', trim: '#e2d8c4' },
      { x0: 7.5, x1: 12.1, h: 7.6, wall: '#c3b8a4', trim: '#e6dece' },
    ],
  },
};
// a row's windows: [x, sill, height] each, and where its doors are ([x])
function windowsOf(houses) {
  const windows = [];
  const doors = [];
  for (const { x0, x1, h } of houses) {
    const n = Math.max(2, Math.round((x1 - x0) / 1.7));
    const step = (x1 - x0) / n;
    for (let i = 0; i < n; i++) {
      const x = x0 + step * (i + 0.5);
      if (i === Math.floor(n / 2)) doors.push(x);
      else windows.push([x, -1.2, 1.8]);
      for (const y of [-4.2, -7.3]) if (h > -y + 2) windows.push([x, y, 1.9]);
    }
  }
  return { windows, doors };
}
// how many of a row's windows are lit in the evening (every `lit`-th): its glows are w0 … w(n − 1)
function litCount(name) {
  const { houses, lit } = ROWS[name];
  return Math.ceil(windowsOf(houses).windows.length / lit);
}
// a row painted: the houses' fronts, their plinths, string courses, eaves and snow, the windows, the doors; the
// windows lit in the evening are the layer `lit` (its animate fades it and the glows by the day)
function row(g, e, name) {
  const { houses, lit } = ROWS[name];
  for (const { x0, x1, h, wall, trim } of houses) {
    g.fillStyle = wall;
    g.fillRect(x0, -h, x1 - x0, h);
    g.fillStyle = '#8d8a84';
    g.fillRect(x0, -0.5, x1 - x0, 0.5);
    g.fillStyle = trim;
    for (const y of [-3.5, -6.6]) if (h > -y + 1) g.fillRect(x0, y - 0.18, x1 - x0, 0.18);
    g.fillRect(x0 - 0.05, -h, x1 - x0 + 0.1, 0.3);
    g.fillStyle = SNOW;
    g.fillRect(x0 - 0.08, -h - 0.16, x1 - x0 + 0.16, 0.16);
    for (const y of [-3.68, -6.78]) if (h > -y + 1) g.fillRect(x0, y - 0.06, x1 - x0, 0.06);
  }
  const { windows, doors } = windowsOf(houses);
  const trimAt = x => houses.find(hs => x >= hs.x0 && x < hs.x1).trim;
  for (const [x, y, hh] of windows) casement(g, x, y, 0.85, hh, trimAt(x), false);
  for (const x of doors) {
    // a door of dark wood under a transom, a step before it
    g.fillStyle = trimAt(x);
    g.fillRect(x - 0.6, -2.9, 1.2, 2.9);
    g.fillStyle = '#4c3a2c';
    g.fillRect(x - 0.45, -2.6, 0.9, 2.45);
    g.fillStyle = '#3d4555';
    g.fillRect(x - 0.45, -2.85, 0.9, 0.22);
    g.fillStyle = '#9a968e';
    g.fillRect(x - 0.7, -0.15, 1.4, 0.15);
  }
  e.layer('lit', {}, c => {
    windows.forEach(([x, y, hh], i) => {
      if (i % lit === 0) lamplight(c, e, x, y, 0.85, hh, i % 3 ? '#8a4b38' : '#5d6b52', `w${i / lit}`, 0.8);
    });
  });
}

return { CORNER, ALONG, up, casement, lamplight, row, litCount, SNOW };
