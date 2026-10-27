// What the yard's walls share: limewash over rough plaster — plaster(g, rects, seed, colour) paints a wall's face in
// its rectangles ([left, top, right, bottom], metres, y down, the ground at y 0): the wash a little uneven, worn thin
// in patches where the warmer plaster shows, a few hairline cracks, and the ground's dust splashed up its foot. A wall
// painted round its door or window is one wall; each wall its own seed.
const plaster = (g, rects, seed, colour) => {
  let bottom = -1e9;
  for (const r of rects) bottom = Math.max(bottom, r[3]);
  g.save();
  const clip = new Path2D();
  for (const r of rects) clip.rect(r[0], r[1], r[2] - r[0], r[3] - r[1]);
  g.clip(clip);
  g.fillStyle = colour;
  for (const r of rects) g.fillRect(r[0], r[1], r[2] - r[0], r[3] - r[1]);
  let x0 = 1e9, x1 = -1e9, y0 = 1e9;
  for (const r of rects) {
    x0 = Math.min(x0, r[0]);
    x1 = Math.max(x1, r[2]);
    y0 = Math.min(y0, r[1]);
  }
  const w = x1 - x0, h = bottom - y0, n = Math.round(w * h * 0.5);
  for (let i = 0; i < n; i++) {
    const x = x0 + w * anim.hash(i, seed), y = y0 + h * anim.hash(i, seed + 1);
    g.fillStyle = anim.hash(i, seed + 2) < 0.6 ? 'rgba(214, 190, 160, 0.13)' : 'rgba(255, 252, 244, 0.16)';
    g.beginPath();
    g.ellipse(x, y, 0.1 + 0.3 * anim.hash(i, seed + 3), 0.06 + 0.16 * anim.hash(i, seed + 4), anim.hash(i, seed + 5) * 3, 0, Math.PI * 2);
    g.fill();
  }
  g.strokeStyle = 'rgba(150, 130, 110, 0.45)';
  g.lineWidth = 0.012;
  for (let i = 0; i < Math.round(w * 0.6); i++) {
    let x = x0 + w * anim.hash(i, seed + 6), y = y0 + h * anim.hash(i, seed + 7);
    g.beginPath();
    g.moveTo(x, y);
    for (let k = 0; k < 4; k++) {
      x += 0.12 * (anim.hash(i * 5 + k, seed + 8) - 0.5);
      y += 0.1 + 0.08 * anim.hash(i * 5 + k, seed + 9);
      g.lineTo(x, y);
    }
    g.stroke();
  }
  const dust = g.createLinearGradient(0, bottom, 0, bottom - 0.35);
  dust.addColorStop(0, 'rgba(160, 130, 95, 0.55)');
  dust.addColorStop(1, 'rgba(160, 130, 95, 0)');
  g.fillStyle = dust;
  g.fillRect(x0, bottom - 0.35, w, 0.35);
  g.restore();
};
// A pot of terracotta with what grows in it: pot(g, x, size, kind) — standing at x on the ground (y 0), `size` its
// height; kind 0 geraniums, 1 basil, 2 rosemary. The leaves go into the layer the caller paints them in.
const POT = ['#b86a45', '#c47a52', '#a85e3c'];
const potBody = (g, x, size, k) => {
  const w = size * 0.62;
  g.fillStyle = POT[k % 3];
  g.beginPath();
  g.moveTo(x - w * 0.5, -size);
  g.lineTo(x + w * 0.5, -size);
  g.lineTo(x + w * 0.36, 0);
  g.lineTo(x - w * 0.36, 0);
  g.closePath();
  g.fill();
  g.fillStyle = '#9a5234';
  g.fillRect(x - w * 0.55, -size, w * 1.1, size * 0.14);
};
const potLeaves = (g, x, size, kind, seed) => {
  const w = size * 0.62, top = -size;
  if (kind === 2) {
    // rosemary: stiff sprigs straight up out of the jar, needles along them
    g.strokeStyle = '#5d6e4c';
    g.lineWidth = 0.012;
    for (let i = 0; i < 11; i++) {
      const bx = x + w * 0.8 * (anim.hash(i, seed) - 0.5), lean = 0.25 * (anim.hash(i, seed + 1) - 0.5);
      const h = size * (0.55 + 0.45 * anim.hash(i, seed + 2));
      g.beginPath();
      g.moveTo(bx, top);
      g.lineTo(bx + lean * h, top - h);
      g.stroke();
      g.fillStyle = i % 2 ? '#5d7354' : '#748a66';
      for (let k = 1; k < 8; k++) {
        const u = k / 8;
        g.beginPath();
        g.ellipse(bx + lean * h * u, top - h * u, 0.03, 0.012, (k % 2 ? 0.6 : -0.6) + lean, 0, Math.PI * 2);
        g.fill();
      }
    }
    return;
  }
  const greens = ['#4f7a3a', '#6c9448', '#86a85a'];
  for (let i = 0; i < 26; i++) {
    const a = anim.hash(i, seed) * Math.PI, r = (0.3 + 0.7 * anim.hash(i, seed + 1)) * size * 0.75;
    g.fillStyle = greens[i % greens.length];
    g.beginPath();
    g.ellipse(x + Math.cos(a) * r * 0.9, top - Math.sin(a) * r * 0.9, w * 0.16, w * 0.12, a, 0, Math.PI * 2);
    g.fill();
  }
  if (kind === 0) {
    for (let i = 0; i < 6; i++) {
      const a = 0.4 + 2.3 * anim.hash(i, seed + 2), r = size * (0.6 + 0.3 * anim.hash(i, seed + 3));
      g.fillStyle = i % 2 ? '#d8483c' : '#ea6a58';
      g.beginPath();
      g.arc(x + Math.cos(a) * r * 0.8, top - Math.sin(a) * r * 0.9, size * 0.09, 0, Math.PI * 2);
      g.fill();
    }
  }
};
return { plaster, potBody, potLeaves };
