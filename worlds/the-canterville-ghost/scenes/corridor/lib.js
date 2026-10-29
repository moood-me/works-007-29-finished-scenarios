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

return { wall, arch, opening, leaf, portrait, OAK, OAK_DARK, OAK_LIGHT, PLASTER, STONE, STONE_DARK };
