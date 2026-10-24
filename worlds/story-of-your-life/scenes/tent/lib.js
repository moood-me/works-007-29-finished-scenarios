// What the tent's paintings share: the army canvas, a brush stroke, a semagram (heptapod B: one sign written whole —
// a ring and its tendrils), a sheet of paper pinned up with one on it, and a heptapod.

// a steady random sequence from a number (a semagram is the same every painting)
function seeded(seed) {
  let a = (seed * 2654435761) >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// olive army canvas over the rectangle x0…x1, y0…y1 (metres, y down): the cloth, its sewn seams every `seam` metres
// across, a few paler weathered patches
function canvas(g, e, x0, y0, x1, y1, seam = 1.5) {
  const w = x1 - x0, h = y1 - y0;
  g.save();
  g.beginPath();
  g.rect(x0, y0, w, h);
  g.clip();
  g.fillStyle = '#7f7c58';
  g.fillRect(x0, y0, w, h);
  for (let i = 0; i < 10; i++) {
    g.fillStyle = e.rnd() < 0.5 ? 'rgba(150,146,108,0.18)' : 'rgba(96,93,64,0.16)';
    g.beginPath();
    g.ellipse(x0 + e.rnd() * w, y0 + e.rnd() * h, 0.3 + e.rnd() * 0.8, 0.2 + e.rnd() * 0.5, 0, 0, Math.PI * 2);
    g.fill();
  }
  g.strokeStyle = 'rgba(70,68,46,0.55)';
  g.lineWidth = 0.025;
  for (let x = x0 + seam; x < x1 - 0.1; x += seam) {
    g.beginPath();
    g.moveTo(x, y0);
    g.lineTo(x, y1);
    g.stroke();
  }
  g.restore();
}

// a tapering brush stroke along the points `pts` (metres): `w(s)` its half-width at s 0…1 along it, filled
function brush(g, pts, w) {
  const n = pts.length, left = [], right = [];
  for (let i = 0; i < n; i++) {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(n - 1, i + 1)];
    const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1, hw = w(i / (n - 1));
    left.push([pts[i][0] - (dy / l) * hw, pts[i][1] + (dx / l) * hw]);
    right.push([pts[i][0] + (dy / l) * hw, pts[i][1] - (dx / l) * hw]);
  }
  g.beginPath();
  g.moveTo(...left[0]);
  for (let i = 1; i < n; i++) g.lineTo(...left[i]);
  for (let i = n - 1; i >= 0; i--) g.lineTo(...right[i]);
  g.closePath();
  g.fill();
}

// a semagram centred at cx, cy, `size` metres across — one sign of heptapod B, written whole: a ring drawn as one
// brush stroke, swelling and thinning as it goes round (sometimes left open), tendrils curling off it outward and
// inward, a blot or two where the brush pressed; every seed its own sign
function semagram(g, cx, cy, size, seed, color = '#1d2433') {
  const r = seeded(seed), R = size * (0.3 + r() * 0.06), TAU = Math.PI * 2;
  g.save();
  g.fillStyle = color;
  const open = r() < 0.4 ? 0.3 + r() * 0.6 : 0, a0 = r() * TAU, span = TAU - open + (open ? 0 : 0.2);
  const p1 = r() * 6, p2 = r() * 6, p3 = r() * 6, thick = 0.016 + r() * 0.014, k1 = 1 + Math.floor(r() * 3);
  const ring = [];
  for (let i = 0; i <= 120; i++) {
    const t = a0 + (i / 120) * span, rad = R * (1 + 0.05 * Math.sin(t * 3 + p3));
    ring.push([cx + Math.cos(t) * rad, cy + Math.sin(t) * rad]);
  }
  brush(g, ring, s => {
    const ends = open ? Math.min(1, s / 0.08, (1 - s) / 0.08) : Math.min(1, 0.4 + s / 0.05, 0.4 + (1 - s) / 0.05);
    return size * thick * (0.55 + 0.45 * Math.sin(s * TAU * k1 + p1)) * (0.75 + 0.25 * Math.sin(s * 17 + p2)) * ends + size * 0.003;
  });
  // the tendrils: off the ring at their angles, out (or in), curling one way, tapering to a point
  const tendrils = 2 + Math.floor(r() * 4);
  for (let k = 0; k < tendrils; k++) {
    const a = a0 + r() * span, out = r() < 0.75 ? 1 : -1, len = R * (out > 0 ? 0.35 + r() * 0.8 : 0.25 + r() * 0.35);
    const curl = (r() - 0.5) * 2.4, w0 = size * (0.012 + r() * 0.02), pts = [];
    for (let i = 0; i <= 24; i++) {
      const s = i / 24, rad = R + out * len * s, t = a + (curl * s * s * len) / R;
      pts.push([cx + Math.cos(t) * rad, cy + Math.sin(t) * rad]);
    }
    brush(g, pts, s => w0 * (1 - s) * (1 - s * 0.3) + size * 0.002);
    // now and then a hook at a tendril's end, the brush lifting
    if (r() < 0.4) {
      const [ex, ey] = pts[24], h = size * 0.03;
      g.beginPath();
      g.ellipse(ex, ey, h, h * 0.55, a, 0, TAU);
      g.fill();
    }
  }
  // blots where the brush pressed on the ring
  const blots = Math.floor(r() * 3);
  for (let k = 0; k < blots; k++) {
    const t = a0 + r() * span, rad = R * (1 + (r() - 0.5) * 0.08), w = size * (0.03 + r() * 0.04);
    g.beginPath();
    g.ellipse(cx + Math.cos(t) * rad, cy + Math.sin(t) * rad, w, w * (0.45 + r() * 0.3), t + r(), 0, TAU);
    g.fill();
  }
  g.restore();
}

// a sheet of paper pinned at its top corners (x, y — its top left; w by h metres), a semagram on it; a little askew
function sheet(g, x, y, w, h, seed, tilt = 0) {
  g.save();
  g.translate(x + w / 2, y);
  g.rotate(tilt);
  g.fillStyle = '#ece9e0';
  g.fillRect(-w / 2, 0, w, h);
  g.fillStyle = 'rgba(0,0,0,0.07)';
  g.fillRect(-w / 2, h - 0.01, w, 0.01);
  semagram(g, 0, h * 0.5, Math.min(w, h) * 0.78, seed);
  g.fillStyle = '#9c3a2e';
  for (const px of [-w / 2 + 0.02, w / 2 - 0.02]) {
    g.beginPath();
    g.arc(px, 0.02, 0.008, 0, Math.PI * 2);
    g.fill();
  }
  g.restore();
}

// a limb of a heptapod: from its root under the barrel up over its knee and down to the foot — thick and heavy at the
// root, tapering, a broad pad where it stands
function limb(g, root, knee, foot, w0, color) {
  g.fillStyle = color;
  const pts = [];
  for (let i = 0; i <= 28; i++) {
    const s = i / 28, u = 1 - s;
    pts.push([u * u * root[0] + 2 * u * s * knee[0] + s * s * foot[0], u * u * root[1] + 2 * u * s * knee[1] + s * s * foot[1]]);
  }
  brush(g, pts, s => w0 * (1 - 0.62 * s) * (1 + 0.12 * Math.sin(s * 9)));
  g.beginPath();
  g.ellipse(foot[0], foot[1] - w0 * 0.15, w0 * 0.75, w0 * 0.28, 0, 0, Math.PI * 2);
  g.fill();
}

// a heptapod standing (metres from its feet, y down; 2.6 m tall): a heavy barrel hung where its seven limbs meet, its
// hide grey and wrinkled, mottled; a ring of seven eyes round its top. The limbs behind the barrel in the painting
// itself; the barrel the layer `body` (it sways a little about its pivot); the limbs before it the layer `front`; one
// limb lifted off the floor, the layer `arm` (turned about its root). `turn` — where its seven limbs are round it
// (radians).
function heptapod(g, e, turn) {
  const skin = '#55534c', dark = '#46443f', light = '#7a776d', crease = 'rgba(40,38,34,0.22)';
  const limbs = [];
  for (let k = 0; k < 7; k++) {
    const a = turn + (k / 7) * Math.PI * 2;
    limbs.push({ k, sx: Math.sin(a), cz: Math.cos(a) });
  }
  const pathOf = L => {
    const root = [L.sx * 0.26, -1.08 + L.cz * 0.04];
    const knee = [L.sx * 1.0, -2.05 - 0.15 * (1 - Math.abs(L.sx)) + L.cz * 0.08];
    const foot = [L.sx * 1.32, -0.03 - Math.max(0, -L.cz) * 0.18];
    return [root, knee, foot];
  };
  // the raised limb: the one most to the right that faces us
  const raised = limbs.filter(L => L.cz > -0.2).sort((a, b) => b.sx - a.sx)[0];
  for (const L of limbs.filter(L => L.cz < 0 && L !== raised)) {
    const [r, k, f] = pathOf(L);
    limb(g, r, k, f, 0.19, dark);
  }
  e.layer('body', { pivot: [0, -1.1], box: [-0.62, -2.7, 0.62, -0.88] }, c => {
    // the barrel: narrow where the limbs meet, swelling, then a long rounded crown
    const outline = new Path2D();
    outline.moveTo(-0.26, -0.98);
    outline.bezierCurveTo(-0.58, -1.3, -0.56, -2.0, -0.42, -2.36);
    outline.bezierCurveTo(-0.3, -2.66, 0.3, -2.66, 0.42, -2.36);
    outline.bezierCurveTo(0.56, -2.0, 0.58, -1.3, 0.26, -0.98);
    outline.quadraticCurveTo(0, -0.9, -0.26, -0.98);
    c.fillStyle = skin;
    c.fill(outline);
    c.save();
    c.clip(outline);
    // mottled hide
    for (let i = 0; i < 26; i++) {
      c.fillStyle = e.rnd() < 0.5 ? 'rgba(84,82,74,0.35)' : 'rgba(140,136,124,0.25)';
      c.beginPath();
      c.ellipse((e.rnd() - 0.5) * 1.0, -1.0 - e.rnd() * 1.6, 0.04 + e.rnd() * 0.1, 0.06 + e.rnd() * 0.16, 0, 0, Math.PI * 2);
      c.fill();
    }
    // the creases running up it, following its roundness
    c.strokeStyle = crease;
    c.lineWidth = 0.014;
    for (let i = -2; i <= 2; i++) {
      const x = i * 0.17;
      c.beginPath();
      c.moveTo(x * 0.6, -1.0);
      c.bezierCurveTo(x * 1.35, -1.4, x * 1.3, -2.0, x * 0.9, -2.5);
      c.stroke();
    }
    // the folds where the limbs meet it
    c.lineWidth = 0.02;
    for (let i = 0; i < 3; i++) {
      c.beginPath();
      c.ellipse(0, -1.06 - i * 0.07, 0.3 + i * 0.05, 0.04, 0, 0.2, Math.PI - 0.2);
      c.stroke();
    }
    c.restore();
    // the ring of eyes: seven lidded slits round the top, those facing us seen, foreshortened toward the sides
    for (const L of limbs) {
      const a = turn + ((L.k + 0.5) / 7) * Math.PI * 2, sx = Math.sin(a), cz = Math.cos(a);
      if (cz < 0.05) continue;
      const x = sx * 0.36, w = 0.055 * cz + 0.008;
      c.fillStyle = dark;
      c.beginPath();
      c.ellipse(x, -2.3, w * 1.5, 0.042, 0, 0, Math.PI * 2);
      c.fill();
      c.fillStyle = light;
      c.beginPath();
      c.ellipse(x, -2.3, w * 1.15, 0.026, 0, 0, Math.PI * 2);
      c.fill();
      c.fillStyle = '#16181a';
      c.beginPath();
      c.ellipse(x, -2.3, w * 0.8, 0.013, 0, 0, Math.PI * 2);
      c.fill();
    }
  });
  e.layer('front', { box: [-1.45, -2.3, 1.45, 0.05] }, c => {
    for (const L of limbs.filter(L => L.cz >= 0 && L !== raised).sort((a, b) => a.cz - b.cz)) {
      const [r, k, f] = pathOf(L);
      limb(c, r, k, f, 0.2, skin);
    }
  });
  const [r] = pathOf(raised);
  e.layer('arm', { pivot: r, box: [r[0] - 0.25, -2.45, r[0] + 1.45, -0.3] }, c => {
    limb(c, r, [r[0] + 0.85, -2.3], [r[0] + 1.15, -0.75], 0.19, skin);
  });
}

return { canvas, semagram, sheet, heptapod };
