// What the hall's paintings share: a wall of the hall (the back wall and the two side walls are the same masonry,
// painted by this) — great blocks of grey stone laid in courses up to about three metres, their joints dark, each block
// its own shade, a few cracked; above them the living rock of the underworld going on up, rough, in slabs and clefts.
// x along the wall from x0 to x1, y up negative, the floor at 0, as high as top.
const wall = (g, x0, x1, top, seed) => {
  g.save();
  g.beginPath();
  g.rect(x0, top, x1 - x0, -top + 0.05);
  g.clip();
  g.fillStyle = '#6e665e';
  g.fillRect(x0, top, x1 - x0, -top + 0.05);
  // the rock above the masonry: slabs, clefts
  for (let i = 0; i < 40; i++) {
    const x = x0 + (x1 - x0) * anim.hash(i, seed), y = top + (-top - 3) * anim.hash(i, seed + 1), w = 0.6 + 1.6 * anim.hash(i, seed + 2), h = 0.4 + 1.2 * anim.hash(i, seed + 3);
    g.fillStyle = anim.hash(i, seed + 4) > 0.5 ? '#766d64' : '#625a53';
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + w, y + h * 0.2);
    g.lineTo(x + w * 0.85, y + h);
    g.lineTo(x - w * 0.1, y + h * 0.8);
    g.closePath();
    g.fill();
  }
  g.strokeStyle = 'rgba(40,34,30,0.5)';
  g.lineWidth = 0.04;
  for (let i = 0; i < 18; i++) {
    const x = x0 + (x1 - x0) * anim.hash(i, seed + 5), y = top + (-top - 3.2) * anim.hash(i, seed + 6);
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + (anim.hash(i, seed + 7) - 0.5) * 0.6, y + 0.8 + anim.hash(i, seed + 8));
    g.stroke();
  }
  // the masonry: courses of blocks, the joints dark
  const H = 3.1, course = 0.62;
  g.fillStyle = '#3f3833';
  g.fillRect(x0, -H, x1 - x0, H + 0.05);
  for (let r = 0, y = 0; y > -H + 0.01; r++, y -= course) {
    let x = x0 - anim.hash(r, seed + 9) * 0.8;
    for (let b = 0; x < x1; b++) {
      const w = 0.9 + 0.7 * anim.hash(r * 31 + b, seed + 10), t = anim.hash(r * 31 + b, seed + 11);
      g.fillStyle = t > 0.66 ? '#8c8277' : t > 0.33 ? '#83796e' : '#7a7066';
      g.fillRect(x + 0.025, y - course + 0.025, w - 0.05, course - 0.05);
      if (anim.hash(r * 31 + b, seed + 12) > 0.85) {
        g.strokeStyle = 'rgba(50,44,38,0.55)';
        g.lineWidth = 0.015;
        g.beginPath();
        g.moveTo(x + w * 0.3, y - course + 0.03);
        g.lineTo(x + w * 0.42, y - course * 0.5);
        g.lineTo(x + w * 0.36, y - 0.03);
        g.stroke();
      }
      x += w;
    }
  }
  g.restore();
};

return { wall };
