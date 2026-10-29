// What the hall's paintings share: its oak (the library's oak, taller: a linenfold dado, two tiers of plain panels, a
// frieze under the beams), an old portrait in a gilt frame, a wall sconce with its candle, and the stair's measures.
// Metres, y down, from the foot of a wall.
const OAK = '#5a3d27';
const OAK_LIGHT = '#6e4c31';
const OAK_DARK = '#38261a';

// The stair (the far wall's, rising to the left): 13 risers of 0.1615 m, 12 treads of 0.26 m; the first riser at
// across 0.98, the last (the landing's edge) at −2.14; the landing at 2.1 m from there to the left wall.
const STAIR = { foot: 0.98, going: 0.26, rise: 0.1615, steps: 13, top: -2.14, landing: 2.1 };
// the nosing line over the floor at x (metres up; x across, as the far wall's painting has it)
const nosing = x => STAIR.rise + (STAIR.foot - x) * (STAIR.rise / STAIR.going);

// a stretch of the hall's oak from x0 to x1, `top` metres high: the dado's linenfold panels to 1 m, the rail, two
// tiers of tall plain panels above, the frieze under the ceiling
function oak(g, x0, x1, top) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -top - 0.02, w, top + 0.04);
  g.clip();
  g.fillStyle = OAK;
  g.fillRect(x0, -top - 0.02, w, top + 0.04);
  g.strokeStyle = OAK_DARK;
  g.lineWidth = 0.045;
  const mid = -1.15 - (top - 1.55) * 0.55;
  for (let x = Math.floor(x0 / 0.62) * 0.62; x < x1; x += 0.62) {
    g.strokeRect(x + 0.07, mid + 0.06, 0.48, -1.15 - mid - 0.12);
    g.strokeRect(x + 0.07, -top + 0.42, 0.48, mid - (-top + 0.42) - 0.06);
  }
  // the rail between the tiers
  g.fillStyle = OAK_LIGHT;
  g.fillRect(x0, mid - 0.03, w, 0.06);
  // the dado: linenfold panels (folds as light and dark stripes)
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
  // the dado rail, the skirting, the frieze
  g.fillStyle = OAK_LIGHT;
  g.fillRect(x0, -1.1, w, 0.07);
  g.fillStyle = OAK_DARK;
  g.fillRect(x0, -0.14, w, 0.16);
  g.fillRect(x0, -top - 0.02, w, 0.3);
  g.restore();
}

// an old portrait in a gilt frame, x0…x1 by y0…y1 (y0 the top): a dark brown ground, a sitter half-length — a pale
// face, dark clothes, a white ruff or collar; `lady` a woman (a long neck, a pale gown, a jewel)
function portrait(g, x0, y0, x1, y1, lady) {
  const w = x1 - x0;
  const h = y1 - y0;
  g.fillStyle = '#9a7a3a';
  g.fillRect(x0 - 0.07, y0 - 0.07, w + 0.14, h + 0.14);
  g.fillStyle = '#c6a254';
  g.fillRect(x0 - 0.04, y0 - 0.04, w + 0.08, h + 0.08);
  g.fillStyle = '#2e2218';
  g.fillRect(x0, y0, w, h);
  const cx = x0 + w / 2;
  // the body: shoulders to the frame's foot
  g.fillStyle = lady ? '#7a6a5a' : '#1c1814';
  g.beginPath();
  g.moveTo(cx - w * 0.42, y1);
  g.quadraticCurveTo(cx - w * 0.4, y0 + h * 0.55, cx, y0 + h * 0.5);
  g.quadraticCurveTo(cx + w * 0.4, y0 + h * 0.55, cx + w * 0.42, y1);
  g.closePath();
  g.fill();
  // the ruff or the collar
  g.fillStyle = '#d8d0c0';
  g.beginPath();
  g.ellipse(cx, y0 + h * 0.5, w * (lady ? 0.12 : 0.17), h * 0.045, 0, 0, Math.PI * 2);
  g.fill();
  // the face and the hair
  g.fillStyle = lady ? '#6a4a2a' : '#3a2a1e';
  g.beginPath();
  g.ellipse(cx, y0 + h * 0.33, w * 0.15, h * 0.15, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#d8b898';
  g.beginPath();
  g.ellipse(cx, y0 + h * 0.36, w * 0.1, h * 0.11, 0, 0, Math.PI * 2);
  g.fill();
  if (lady) {
    g.fillStyle = '#b8323a';
    g.beginPath();
    g.arc(cx, y0 + h * 0.58, w * 0.03, 0, Math.PI * 2);
    g.fill();
  }
}

// a brass wall sconce at (x, y): a backplate, an arm, a candle; its flame a glow and a light of the wall's named `name`
function sconce(g, e, x, y, name) {
  g.fillStyle = '#9a7a3c';
  g.beginPath();
  g.ellipse(x, y + 0.12, 0.07, 0.13, 0, 0, Math.PI * 2);
  g.fill();
  g.fillRect(x - 0.015, y - 0.02, 0.03, 0.14);
  g.fillRect(x - 0.06, y - 0.03, 0.12, 0.03);
  g.fillStyle = '#ece4d0';
  g.fillRect(x - 0.02, y - 0.22, 0.04, 0.19);
  g.fillStyle = '#ffd890';
  g.beginPath();
  g.ellipse(x, y - 0.255, 0.013, 0.032, 0, 0, Math.PI * 2);
  g.fill();
  e.light(x, y - 0.26, 0.5, '#ffcf8a', 0.7, name);
}

// a leaf of the front door from x0 to x1, 2.9 m high: oak planks, iron studs in rows, a great iron ring `ring` metres
// in from its free edge (+: the free edge is x1; −: x0)
function door(g, x0, x1, ring) {
  g.fillStyle = '#4e3220';
  g.fillRect(x0, -2.9, x1 - x0, 2.9);
  const planks = ['#563824', '#4a2f1e', '#5c3c26', '#503420'];
  for (let i = 0, x = x0; x < x1 - 0.01; i++, x += 0.16) {
    g.fillStyle = planks[i % planks.length];
    g.fillRect(x + 0.006, -2.9, 0.148, 2.9);
  }
  g.fillStyle = '#2a2622';
  for (const y of [-2.5, -1.45, -0.4]) {
    g.fillRect(x0, y - 0.04, x1 - x0, 0.08);
    for (let x = x0 + 0.08; x < x1; x += 0.16) {
      g.beginPath();
      g.arc(x, y, 0.018, 0, Math.PI * 2);
      g.fill();
    }
  }
  const rx = ring > 0 ? x1 - ring : x0 - ring;
  g.strokeStyle = '#2a2622';
  g.lineWidth = 0.025;
  g.beginPath();
  g.arc(rx, -1.2, 0.08, 0, Math.PI * 2);
  g.stroke();
  g.beginPath();
  g.arc(rx, -1.3, 0.035, 0, Math.PI * 2);
  g.fillStyle = '#2a2622';
  g.fill();
}

return { oak, portrait, sconce, door, nosing, STAIR, OAK, OAK_DARK, OAK_LIGHT };
