// What the tent's paintings share: the army canvas, a semagram (heptapod B: one sign written whole, its strokes
// joined and crossing), a sheet of paper pinned up with one on it, and a heptapod.

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

// a semagram centred at cx, cy, `size` metres across: a small ring at its heart, two or three sweeping loops round the middle, crossing one
// another, two or three strokes branching off them with a hook at their ends — one line, each stroke thick and thin
function semagram(g, cx, cy, size, seed, color = '#1d2433') {
  const r = seeded(seed), R = size / 2;
  g.save();
  g.strokeStyle = color;
  g.lineCap = 'round';
  g.lineJoin = 'round';
  g.lineWidth = size * 0.03;
  g.beginPath();
  g.arc(cx, cy, R * 0.14, 0, Math.PI * 2);
  g.stroke();
  const loops = 2 + Math.floor(r() * 2);
  for (let k = 0; k < loops; k++) {
    const a0 = (k / loops) * Math.PI * 2 + r() * 0.8, rx = R * (0.45 + r() * 0.5), ry = R * (0.25 + r() * 0.45);
    const ox = (r() - 0.5) * R * 0.5, oy = (r() - 0.5) * R * 0.5;
    g.lineWidth = size * (0.012 + r() * 0.022);
    g.beginPath();
    for (let i = 0; i <= 48; i++) {
      const t = (i / 48) * Math.PI * 2, wob = 1 + 0.1 * Math.sin(t * 2 + k);
      const x = rx * Math.cos(t) * wob, y = ry * Math.sin(t) * wob;
      const px = cx + ox + x * Math.cos(a0) - y * Math.sin(a0), py = cy + oy + x * Math.sin(a0) + y * Math.cos(a0);
      if (i) g.lineTo(px, py);
      else g.moveTo(px, py);
    }
    g.stroke();
  }
  const branches = 2 + Math.floor(r() * 2);
  for (let k = 0; k < branches; k++) {
    const a = r() * Math.PI * 2, from = R * 0.4, to = R * (0.85 + r() * 0.2), bend = (r() - 0.5) * 1.2;
    const x0 = cx + Math.cos(a) * from, y0 = cy + Math.sin(a) * from, x1 = cx + Math.cos(a + bend * 0.3) * to, y1 = cy + Math.sin(a + bend * 0.3) * to;
    g.lineWidth = size * 0.035;
    g.beginPath();
    g.moveTo(x0, y0);
    g.quadraticCurveTo(cx + Math.cos(a + bend) * R * 0.7, cy + Math.sin(a + bend) * R * 0.7, x1, y1);
    g.stroke();
    g.lineWidth = size * 0.02;
    g.beginPath();
    g.arc(x1 + Math.cos(a + 1.6) * size * 0.04, y1 + Math.sin(a + 1.6) * size * 0.04, size * 0.04, a - 1.5, a + 2.5);
    g.stroke();
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

// a limb of a heptapod: from its root on the barrel out to the knee and down to the foot, tapering
function limb(g, root, knee, foot, w0, color) {
  g.fillStyle = color;
  const pts = [root, knee, foot], ws = [w0, w0 * 0.62, w0 * 0.32];
  const side = [];
  for (let i = 0; i < 3; i++) {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(2, i + 1)];
    const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1;
    side.push([-dy / l, dx / l]);
  }
  g.beginPath();
  g.moveTo(root[0] + side[0][0] * ws[0], root[1] + side[0][1] * ws[0]);
  g.quadraticCurveTo(knee[0] + side[1][0] * ws[1] * 1.6, knee[1] + side[1][1] * ws[1] * 1.6, foot[0] + side[2][0] * ws[2], foot[1] + side[2][1] * ws[2]);
  g.lineTo(foot[0] - side[2][0] * ws[2], foot[1] - side[2][1] * ws[2]);
  g.quadraticCurveTo(knee[0] - side[1][0] * ws[1] * 0.6, knee[1] - side[1][1] * ws[1] * 0.6, root[0] - side[0][0] * ws[0], root[1] - side[0][1] * ws[0]);
  g.closePath();
  g.fill();
  // the foot: a small rounded pad
  g.beginPath();
  g.ellipse(foot[0], foot[1] - ws[2] * 0.4, ws[2] * 1.8, ws[2] * 0.9, 0, 0, Math.PI * 2);
  g.fill();
}

// a heptapod standing, seen from the side (metres from its feet, y down; 2.3 m tall): a barrel hung where its seven
// limbs meet, a ring of eyes round its top. The limbs behind the barrel in the painting itself; the barrel the layer
// `body` (it sways a little about its pivot); the limbs before it the layer `front`; one limb lifted off the floor,
// the layer `arm` (turned about its root). `turn` — where its seven limbs are round it (radians).
function heptapod(g, e, turn) {
  const skin = '#62655f', dark = '#50534e', light = '#7c7f78';
  const limbs = [];
  for (let k = 0; k < 7; k++) {
    const a = turn + (k / 7) * Math.PI * 2, sx = Math.sin(a), cz = Math.cos(a);
    limbs.push({ k, sx, cz });
  }
  const pathOf = L => {
    const root = [L.sx * 0.24, -1.12 + L.cz * 0.04];
    const knee = [L.sx * 0.72, -1.5 - 0.1 * (1 - Math.abs(L.sx)) + L.cz * 0.06];
    const foot = [L.sx * 1.15, -0.02 - Math.max(0, -L.cz) * 0.16];
    return [root, knee, foot];
  };
  // the raised limb: the one most to the right that faces us
  const raised = limbs.filter(L => L.cz > -0.2).sort((a, b) => b.sx - a.sx)[0];
  for (const L of limbs.filter(L => L.cz < 0 && L !== raised)) {
    const [r, k, f] = pathOf(L);
    limb(g, r, k, f, 0.12, dark);
  }
  e.layer('body', { pivot: [0, -1.1], box: [-0.6, -2.42, 0.6, -0.9] }, c => {
    // the barrel: wider below its middle, rounded at the top
    c.fillStyle = skin;
    c.beginPath();
    c.moveTo(-0.24, -1.0);
    c.bezierCurveTo(-0.5, -1.35, -0.46, -1.9, -0.3, -2.22);
    c.quadraticCurveTo(0, -2.42, 0.3, -2.22);
    c.bezierCurveTo(0.46, -1.9, 0.5, -1.35, 0.24, -1.0);
    c.quadraticCurveTo(0, -0.94, -0.24, -1.0);
    c.fill();
    // its wrinkled hide: faint rings round it
    c.strokeStyle = 'rgba(70,72,66,0.25)';
    c.lineWidth = 0.012;
    for (let i = 0; i < 5; i++) {
      const y = -1.2 - i * 0.17, hw = 0.42 - Math.abs(y + 1.55) * 0.28;
      c.beginPath();
      c.ellipse(0, y, hw, 0.035, 0, 0.15, Math.PI - 0.15);
      c.stroke();
    }
    c.strokeStyle = 'rgba(150,152,144,0.35)';
    c.beginPath();
    c.moveTo(-0.3, -1.4);
    c.quadraticCurveTo(-0.36, -1.8, -0.22, -2.14);
    c.stroke();
    // the ring of eyes: seven lids round the top, those facing us seen, foreshortened at the sides
    for (const L of limbs) {
      const a = turn + ((L.k + 0.5) / 7) * Math.PI * 2, sx = Math.sin(a), cz = Math.cos(a);
      if (cz < 0.05) continue;
      c.fillStyle = light;
      c.beginPath();
      c.ellipse(sx * 0.27, -2.1, 0.06 * cz + 0.01, 0.03, 0, 0, Math.PI * 2);
      c.fill();
      c.fillStyle = '#1f2321';
      c.beginPath();
      c.ellipse(sx * 0.27, -2.1, 0.042 * cz + 0.006, 0.013, 0, 0, Math.PI * 2);
      c.fill();
    }
  });
  e.layer('front', { box: [-1.2, -1.6, 1.2, 0.05] }, c => {
    for (const L of limbs.filter(L => L.cz >= 0 && L !== raised).sort((a, b) => a.cz - b.cz)) {
      const [r, k, f] = pathOf(L);
      limb(c, r, k, f, 0.13, skin);
    }
  });
  const [r] = pathOf(raised);
  e.layer('arm', { pivot: r, box: [r[0] - 0.2, -2.0, r[0] + 1.3, -0.3] }, c => {
    limb(c, r, [r[0] + 0.55, -1.6], [r[0] + 0.95, -0.6], 0.13, skin);
  });
}

return { canvas, semagram, sheet, heptapod };
