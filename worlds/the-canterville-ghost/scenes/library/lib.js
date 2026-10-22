// What the library's paintings share: its oak (a panelled dado of linenfold under a rail, a plain frieze under the
// beams) and its bookcases (shelves of old books in worn leather). Metres, y down, from the foot of a wall.
const OAK = '#4a3222';
const OAK_LIGHT = '#5d4029';
const OAK_DARK = '#2e1f15';
const LEATHER = ['#5b2a22', '#3f3a2a', '#6b4a2a', '#2f3a33', '#4e2f3a', '#7a5a34', '#3a2a22', '#5a4a3a'];

// a stretch of the room's oak from x0 to x1, `top` metres high (3.4: the library's): the dado's linenfold panels to
// 1 m, the rail, the wall above in plain panels, the frieze under the ceiling
function oak(g, x0, x1, top = 3.4) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -top - 0.02, w, top + 0.04);
  g.clip();
  g.fillStyle = OAK;
  g.fillRect(x0, -top - 0.02, w, top + 0.04);
  // the upper panels: tall, framed by darker rails
  g.strokeStyle = OAK_DARK;
  g.lineWidth = 0.04;
  for (let x = Math.floor(x0 / 0.6) * 0.6; x < x1; x += 0.6) g.strokeRect(x + 0.06, -top + 0.4, 0.48, top - 1.55);
  // the dado: linenfold panels (folds as light and dark stripes, curled at top and bottom)
  g.fillStyle = OAK_DARK;
  g.fillRect(x0, -1.05, w, 1.05);
  for (let x = Math.floor(x0 / 0.45) * 0.45; x < x1; x += 0.45) {
    g.fillStyle = OAK;
    g.fillRect(x + 0.05, -0.92, 0.35, 0.72);
    for (let f = 0; f < 4; f++) {
      g.fillStyle = f % 2 ? OAK_DARK : OAK_LIGHT;
      g.fillRect(x + 0.08 + f * 0.08, -0.86, 0.04, 0.6);
    }
  }
  // the rail, the skirting, the frieze
  g.fillStyle = OAK_LIGHT;
  g.fillRect(x0, -1.1, w, 0.07);
  g.fillStyle = OAK_DARK;
  g.fillRect(x0, -0.14, w, 0.16);
  g.fillRect(x0, -top - 0.02, w, 0.26);
  g.restore();
}

// a bookcase from x0 to x1, its shelves from `bottom` up to `top` (metres over the floor): a dark frame, shelves of
// books leaning and standing, here and there a gap
function bookcase(g, e, x0, x1, top, bottom = 1.1) {
  g.fillStyle = OAK_DARK;
  g.fillRect(x0 - 0.06, -top - 0.08, x1 - x0 + 0.12, top - bottom + 0.1);
  g.fillStyle = '#1c130d';
  g.fillRect(x0, -top, x1 - x0, top - bottom);
  for (let y = -bottom; y > -top + 0.25; y -= 0.38) {
    let x = x0 + 0.02;
    while (x < x1 - 0.04) {
      const bw = 0.03 + e.rnd() * 0.04;
      if (e.rnd() < 0.05) {
        x += 0.08 + e.rnd() * 0.12;
        continue;
      }
      const bh = 0.22 + e.rnd() * 0.1;
      g.fillStyle = LEATHER[Math.floor(e.rnd() * LEATHER.length)];
      g.fillRect(x, y - bh, Math.min(bw, x1 - x - 0.02), bh);
      // a band of gilt on the spine
      if (e.rnd() < 0.6) {
        g.fillStyle = 'rgba(196,160,92,0.55)';
        g.fillRect(x, y - bh + 0.04, Math.min(bw, x1 - x - 0.02), 0.012);
      }
      x += bw + 0.004;
    }
    // the shelf board
    g.fillStyle = OAK_LIGHT;
    g.fillRect(x0, y, x1 - x0, 0.03);
  }
}

return { oak, bookcase, OAK, OAK_DARK, OAK_LIGHT };
