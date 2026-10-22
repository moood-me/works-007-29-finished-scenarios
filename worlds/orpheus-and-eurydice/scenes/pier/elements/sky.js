// The night sky over the lake, in stage heights: a deep blue, darkest at the top, paler and a little violet down at
// the far shore; the full moon high on the right (its point sky#disc: the moon's light comes from there, and its glow
// is the engine's — the lake draws it out into a long path); stars (a layer: they twinkle in the sky's shader), fewer
// low down; a few thin streaks of cloud drifting slowly (a layer the engine moves).
const A = e.aspect, H = 0.5; // (H: the horizon on the stage, as the scene's "horizon" says)
const air = g.createLinearGradient(0, -0.35, 0, 1.25), at = y => (y + 0.35) / 1.6;
air.addColorStop(0, '#0b1230');
air.addColorStop(at(0.1), '#111b42');
air.addColorStop(at(H - 0.18), '#1d2a58');
air.addColorStop(at(H - 0.04), '#33416f');
air.addColorStop(at(H), '#3e4a78');
air.addColorStop(at(H + 0.1), '#28355f');
air.addColorStop(1, '#1d2747');
g.fillStyle = air;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
// the moon: a full disc, its seas a shade greyer
const mx = A * 0.76, my = 0.15, mr = 0.03;
g.fillStyle = '#f3f0e4';
g.beginPath();
g.arc(mx, my, mr, 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(200,196,182,0.45)';
for (const [dx, dy, r] of [[-0.008, -0.006, 0.009], [0.009, -0.004, 0.006], [0.002, 0.011, 0.008]]) {
  g.beginPath();
  g.arc(mx + dx, my + dy, r, 0, Math.PI * 2);
  g.fill();
}
e.at(mx, my, 'disc');
e.light(mx, my, 0.09, '#dfe6ff', 1.1, 'glow');
// the stars: small and many high up, a few bright ones, thinning toward the far shore
e.layer('stars', {}, g => {
  for (let i = 0; i < 320; i++) {
    const x = -0.3 + (A + 0.6) * e.anim.hash(i, 31), y = -0.35 + (H + 0.3) * e.anim.hash(i, 32) ** 1.5;
    if (Math.hypot(x - mx, y - my) < 0.07) continue;
    const big = e.anim.hash(i, 33) > 0.93, r = big ? 0.0022 : 0.0008 + 0.0009 * e.anim.hash(i, 34);
    g.fillStyle = big ? '#fff7e6' : `rgba(225,232,255,${0.5 + 0.5 * e.anim.hash(i, 35)})`;
    g.beginPath();
    g.arc(x, y, r, 0, Math.PI * 2);
    g.fill();
  }
});
// thin streaks of cloud, grey-blue, lit a little on the moon's side; each painted again past the box's ends so the
// drifting layer's ends meet
const x0 = -0.3, W = A + 0.6;
e.layer('clouds', { box: [x0, 0.02, x0 + W, H - 0.06], drift: [0.002, 0] }, g => {
  for (let i = 0; i < 9; i++) {
    const y = 0.08 + (H - 0.2) * e.anim.hash(i, 41), len = 0.2 + 0.45 * e.anim.hash(i, 42), thick = 0.006 + 0.014 * e.anim.hash(i, 43);
    const x = x0 + W * e.anim.hash(i, 44);
    for (const k of [0, -W, W]) {
      if (x + k + len < x0 || x + k - len > x0 + W) continue;
      g.save();
      g.translate(x + k, y);
      g.scale(len, thick);
      const c = g.createRadialGradient(0, 0, 0, 0, 0, 1);
      c.addColorStop(0, 'rgba(120,134,180,0.45)');
      c.addColorStop(1, 'rgba(120,134,180,0)');
      g.fillStyle = c;
      g.fillRect(-1, -1, 2, 2);
      g.restore();
    }
  }
});
