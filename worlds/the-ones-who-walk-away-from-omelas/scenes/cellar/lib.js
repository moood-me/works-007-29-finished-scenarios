// What the storeroom's walls share: rough stones laid in courses, the damp darkening them up from the floor.
// stones(g, rects, seed) paints a wall's stone where its rectangles are ([left, top, right, bottom], metres, y down,
// the floor at y 0.02) — the courses are the wall's own, laid from its floor, so a wall painted in pieces round a
// doorway or a slit is one wall; each wall its own seed.
const STONES = ['#8e816e', '#988a74', '#857865', '#9f9079', '#8a7a66', '#93877a'];
const stones = (g, rects, seed) => {
  let top = 0.02, bottom = 0.02;
  for (const r of rects) top = Math.min(top, r[1]);
  for (const r of rects) {
    g.fillStyle = '#74685a';
    g.fillRect(r[0], r[1], r[2] - r[0], r[3] - r[1]);
  }
  for (let row = 0, y = bottom; y > top; row++) {
    const h = 0.19 + 0.07 * anim.hash(row, seed);
    let x = -3 - 0.35 * anim.hash(row, seed + 1);
    for (let k = 0; x < 6; k++) {
      const w = 0.26 + 0.34 * anim.hash(row * 37 + k, seed + 2), j = anim.hash(row * 37 + k, seed + 3);
      const sh = h - 0.04 * anim.hash(row * 37 + k, seed + 4);
      g.fillStyle = STONES[Math.floor(j * STONES.length)];
      for (const r of rects) {
        const x0 = Math.max(x + 0.015, r[0]), x1 = Math.min(x + w - 0.015, r[2]);
        const y0 = Math.max(y - sh, r[1]), y1 = Math.min(y - 0.015, r[3]);
        if (x1 > x0 && y1 > y0) g.fillRect(x0, y0, x1 - x0, y1 - y0);
      }
      x += w + 0.03;
    }
    y -= h + 0.03;
  }
  // the damp, up from the floor
  const damp = g.createLinearGradient(0, bottom, 0, bottom - 0.8);
  damp.addColorStop(0, 'rgba(52, 42, 32, 0.7)');
  damp.addColorStop(1, 'rgba(52, 42, 32, 0)');
  g.fillStyle = damp;
  for (const r of rects) {
    const y0 = Math.max(r[1], bottom - 0.8);
    if (r[3] > y0) g.fillRect(r[0], y0, r[2] - r[0], r[3] - y0);
  }
};
return { stones };
