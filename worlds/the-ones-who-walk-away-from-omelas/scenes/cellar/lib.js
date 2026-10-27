// What the storeroom's walls share: rough stones laid in courses under an old whitewash gone grey-ochre, the damp
// darkening them up from the floor. stones(g, x0, y0, x1, y1, seed) paints the rectangle (metres, y down, the floor
// at y1) — each wall its own seed, so no two walls are laid alike.
const STONES = ['#8e816e', '#988a74', '#857865', '#9f9079', '#8a7a66', '#93877a'];
const stones = (g, x0, y0, x1, y1, seed) => {
  g.fillStyle = '#6c604f';
  g.fillRect(x0, y0, x1 - x0, y1 - y0);
  let row = 0;
  for (let y = y1; y > y0 - 0.3; row++) {
    const h = 0.19 + 0.07 * anim.hash(row, seed);
    let x = x0 - 0.35 * anim.hash(row, seed + 1), k = 0;
    while (x < x1) {
      const w = 0.26 + 0.34 * anim.hash(row * 37 + k, seed + 2), j = anim.hash(row * 37 + k, seed + 3);
      g.fillStyle = STONES[Math.floor(j * STONES.length)];
      g.beginPath();
      g.moveTo(x + 0.03, y - 0.02);
      g.lineTo(x + w - 0.02, y - 0.03 + 0.02 * j);
      g.lineTo(x + w - 0.03, y - h + 0.03);
      g.lineTo(x + 0.02, y - h + 0.02 + 0.02 * j);
      g.closePath();
      g.fill();
      x += w + 0.03;
      k++;
    }
    y -= h + 0.03;
  }
  // what is left of the whitewash: pale patches, thicker up the wall
  g.fillStyle = '#c2b59d';
  for (let i = 0; i < 26; i++) {
    const u = anim.hash(i, seed + 4), v = anim.hash(i, seed + 5);
    g.globalAlpha = 0.25 + 0.3 * anim.hash(i, seed + 6);
    g.beginPath();
    g.ellipse(x0 + u * (x1 - x0), y0 + v * v * (y1 - y0) * 0.8, 0.2 + 0.4 * anim.hash(i, seed + 7), 0.1 + 0.2 * anim.hash(i, seed + 8), 0, 0, Math.PI * 2);
    g.fill();
  }
  g.globalAlpha = 1;
  // the damp, up from the floor
  const damp = g.createLinearGradient(0, y1, 0, y1 - 0.8);
  damp.addColorStop(0, 'rgba(52, 42, 32, 0.7)');
  damp.addColorStop(1, 'rgba(52, 42, 32, 0)');
  g.fillStyle = damp;
  g.fillRect(x0, y1 - 0.8, x1 - x0, 0.8);
};
return { stones };
