// What the Tapestry Chamber's walls share: a low oak dado (plain panels under a rail), the plaster above it, and the
// old hunting tapestries hung over the plaster — faded to blue-greens and dun, the hunters, their hounds and the stag
// among trees on a ground of little flowers (millefleurs), in a woven border. Metres, y down, from the foot of a wall.
const OAK = '#4a3222';
const OAK_LIGHT = '#5d4029';
const OAK_DARK = '#2e1f15';
const PLASTER = '#a49480';

// the wall from x0 to x1, `top` metres high: plaster, the dado to 0.9 m, its rail and skirting
function wall(g, x0, x1, top) {
  const w = x1 - x0;
  g.fillStyle = PLASTER;
  g.fillRect(x0, -top - 0.02, w, top + 0.04);
  g.fillStyle = OAK;
  g.fillRect(x0, -0.9, w, 0.9);
  g.strokeStyle = OAK_DARK;
  g.lineWidth = 0.03;
  for (let x = Math.floor(x0 / 0.5) * 0.5; x < x1; x += 0.5) g.strokeRect(x + 0.05, -0.8, 0.4, 0.62);
  g.fillStyle = OAK_LIGHT;
  g.fillRect(x0, -0.94, w, 0.06);
  g.fillStyle = OAK_DARK;
  g.fillRect(x0, -0.12, w, 0.14);
  // the frieze under the ceiling
  g.fillStyle = '#8a7a64';
  g.fillRect(x0, -top - 0.02, w, 0.18);
}

// a tapestry from x0 to x1, from y0 (its top, negative) to y1 (its foot): `seed` picks which part of the hunt it shows
function tapestry(g, e, x0, y0, x1, y1, seed) {
  const w = x1 - x0;
  const h = y1 - y0;
  const r = (() => {
    let s = seed * 9301 + 49297;
    return () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  })();
  g.save();
  g.beginPath();
  g.rect(x0, y0, w, h);
  g.clip();
  // the ground: a deep faded blue-green
  g.fillStyle = '#3e5552';
  g.fillRect(x0, y0, w, h);
  const b = 0.14;
  // the millefleurs: little flowers everywhere, cream, rose, ochre, faded
  const flowers = ['#b9ae8c', '#a8786a', '#b39a5a', '#7f9478'];
  for (let i = 0; i < w * h * 60; i++) {
    g.fillStyle = flowers[Math.floor(r() * flowers.length)];
    const x = x0 + b + r() * (w - 2 * b);
    const y = y0 + b + r() * (h - 2 * b);
    g.beginPath();
    g.arc(x, y, 0.012 + r() * 0.01, 0, Math.PI * 2);
    g.fill();
  }
  // trees: round crowns on thin trunks, here and there across it
  for (let x = x0 + 0.35 + r() * 0.3; x < x1 - 0.3; x += 0.8 + r() * 0.5) {
    const top = y0 + 0.25 + r() * 0.2;
    g.fillStyle = '#5a4630';
    g.fillRect(x - 0.025, top + 0.25, 0.05, y1 - top - 0.45);
    g.fillStyle = r() < 0.5 ? '#55684e' : '#4b5f50';
    for (let k = 0; k < 5; k++) {
      g.beginPath();
      g.arc(x + (r() - 0.5) * 0.3, top + 0.1 + r() * 0.2, 0.13 + r() * 0.06, 0, Math.PI * 2);
      g.fill();
    }
  }
  // the hunt: a stag leaping, two hounds after it, a hunter with a spear and one with a horn
  const ground = y1 - 0.42;
  const stag = (x, y, s) => {
    g.fillStyle = '#9a7a52';
    g.beginPath();
    g.ellipse(x, y, 0.2 * s, 0.08 * s, -0.15, 0, Math.PI * 2);
    g.fill();
    g.strokeStyle = '#9a7a52';
    g.lineWidth = 0.03 * s;
    g.beginPath();
    g.moveTo(x - 0.14 * s, y + 0.04 * s);
    g.lineTo(x - 0.26 * s, y + 0.16 * s);
    g.moveTo(x - 0.1 * s, y + 0.05 * s);
    g.lineTo(x - 0.2 * s, y + 0.2 * s);
    g.moveTo(x + 0.12 * s, y + 0.03 * s);
    g.lineTo(x + 0.26 * s, y - 0.05 * s);
    g.moveTo(x + 0.14 * s, y + 0.04 * s);
    g.lineTo(x + 0.3 * s, y + 0.04 * s);
    // the neck and head, the antlers
    g.moveTo(x + 0.16 * s, y - 0.03 * s);
    g.lineTo(x + 0.24 * s, y - 0.16 * s);
    g.stroke();
    g.beginPath();
    g.ellipse(x + 0.28 * s, y - 0.18 * s, 0.06 * s, 0.035 * s, 0.4, 0, Math.PI * 2);
    g.fill();
    g.strokeStyle = '#c4b28a';
    g.lineWidth = 0.014 * s;
    g.beginPath();
    g.moveTo(x + 0.25 * s, y - 0.21 * s);
    g.quadraticCurveTo(x + 0.18 * s, y - 0.36 * s, x + 0.1 * s, y - 0.4 * s);
    g.moveTo(x + 0.2 * s, y - 0.32 * s);
    g.lineTo(x + 0.26 * s, y - 0.4 * s);
    g.moveTo(x + 0.15 * s, y - 0.37 * s);
    g.lineTo(x + 0.16 * s, y - 0.46 * s);
    g.stroke();
  };
  const hound = (x, y, s) => {
    g.fillStyle = '#c8bca0';
    g.beginPath();
    g.ellipse(x, y, 0.14 * s, 0.045 * s, -0.1, 0, Math.PI * 2);
    g.fill();
    g.beginPath();
    g.ellipse(x + 0.15 * s, y - 0.04 * s, 0.05 * s, 0.03 * s, -0.3, 0, Math.PI * 2);
    g.fill();
    g.strokeStyle = '#c8bca0';
    g.lineWidth = 0.022 * s;
    g.beginPath();
    g.moveTo(x - 0.1 * s, y + 0.02 * s);
    g.lineTo(x - 0.2 * s, y + 0.1 * s);
    g.moveTo(x + 0.08 * s, y + 0.02 * s);
    g.lineTo(x + 0.18 * s, y + 0.09 * s);
    g.moveTo(x - 0.13 * s, y - 0.02 * s);
    g.lineTo(x - 0.24 * s, y - 0.08 * s);
    g.stroke();
  };
  const hunter = (x, y, s, coat, horn) => {
    // legs, a tunic, the head in a cap, an arm with a spear or a horn
    g.strokeStyle = '#5c4a3a';
    g.lineWidth = 0.035 * s;
    g.beginPath();
    g.moveTo(x - 0.04 * s, y - 0.2 * s);
    g.lineTo(x - 0.08 * s, y);
    g.moveTo(x + 0.04 * s, y - 0.2 * s);
    g.lineTo(x + 0.1 * s, y);
    g.stroke();
    g.fillStyle = coat;
    g.beginPath();
    g.moveTo(x - 0.1 * s, y - 0.18 * s);
    g.lineTo(x + 0.1 * s, y - 0.18 * s);
    g.lineTo(x + 0.06 * s, y - 0.48 * s);
    g.lineTo(x - 0.06 * s, y - 0.48 * s);
    g.closePath();
    g.fill();
    g.fillStyle = '#d2b896';
    g.beginPath();
    g.arc(x, y - 0.54 * s, 0.055 * s, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#6a3a34';
    g.fillRect(x - 0.06 * s, y - 0.62 * s, 0.12 * s, 0.04 * s);
    g.strokeStyle = coat;
    g.lineWidth = 0.03 * s;
    g.beginPath();
    g.moveTo(x + 0.05 * s, y - 0.44 * s);
    g.lineTo(x + 0.18 * s, y - 0.5 * s);
    g.stroke();
    g.strokeStyle = horn ? '#b8a06a' : '#7a6a56';
    g.lineWidth = (horn ? 0.03 : 0.015) * s;
    g.beginPath();
    if (horn) {
      g.moveTo(x + 0.12 * s, y - 0.58 * s);
      g.quadraticCurveTo(x + 0.22 * s, y - 0.5 * s, x + 0.3 * s, y - 0.62 * s);
    } else {
      g.moveTo(x + 0.02 * s, y - 0.2 * s);
      g.lineTo(x + 0.42 * s, y - 0.8 * s);
    }
    g.stroke();
  };
  const s = 1.1;
  const span = w - 0.6;
  const at = u => x0 + 0.3 + span * ((u + seed * 0.37) % 1);
  stag(at(0.62), ground - 0.3, s);
  hound(at(0.42), ground - 0.12, s);
  hound(at(0.3), ground - 0.02, s * 0.95);
  hunter(at(0.12), ground + 0.2, s, '#8a4a40', false);
  hunter(at(0.86), ground + 0.22, s * 0.95, '#4a5a7a', true);
  // the weave: faint level threads
  g.strokeStyle = 'rgba(20,24,22,0.12)';
  g.lineWidth = 0.006;
  for (let y = y0; y < y1; y += 0.025) {
    g.beginPath();
    g.moveTo(x0, y);
    g.lineTo(x1, y);
    g.stroke();
  }
  // faded: a dusty wash over it all
  g.fillStyle = 'rgba(176,160,128,0.22)';
  g.fillRect(x0, y0, w, h);
  // the border: a dark band with a running leaf in faded gold
  g.strokeStyle = '#2c3a38';
  g.lineWidth = b;
  g.strokeRect(x0 + b / 2, y0 + b / 2, w - b, h - b);
  g.strokeStyle = '#8c7a50';
  g.lineWidth = 0.02;
  g.strokeRect(x0 + b, y0 + b, w - 2 * b, h - 2 * b);
  g.fillStyle = '#8c7a50';
  for (let x = x0 + 0.1; x < x1; x += 0.18) {
    for (const y of [y0 + b / 2, y1 - b / 2]) {
      g.beginPath();
      g.ellipse(x, y, 0.04, 0.02, 0.5, 0, Math.PI * 2);
      g.fill();
    }
  }
  for (let y = y0 + 0.1; y < y1; y += 0.18) {
    for (const x of [x0 + b / 2, x1 - b / 2]) {
      g.beginPath();
      g.ellipse(x, y, 0.02, 0.04, 0.5, 0, Math.PI * 2);
      g.fill();
    }
  }
  g.restore();
  // the rod it hangs from
  g.fillStyle = '#2a1c12';
  g.fillRect(x0 - 0.05, y0 - 0.04, w + 0.1, 0.04);
}

// the stone round an opening (a door, a window): a four-centred Tudor arch from x0 to x1, from y1 (its foot) up to y0
// (its crown), `rise` metres of arch; the path, for a cut or a fill
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

return { wall, tapestry, arch, OAK, OAK_DARK, OAK_LIGHT, PLASTER };
