// The bay as numbers the land, the sand, the wash and the sea share. The water stands at WATER (metres); its edge lies
// at `shore(across)` metres ahead: 13 m before the viewer, nearer to the right; on the left it curves forward under
// the first houses of the village and runs on out along the bay (bearing about −33°).
const WATER = -0.5;
const shore = across => (across > -14 ? 13 - 0.12 * across + (across < 0 ? 0.05 * across * across : 0) : 24.5 + 1.52 * (-14 - across));
// the land: the beach falling gently to the water and on under it to a shallow bottom; on the left, inland of the
// beach, the slope the village climbs (the road to the old man's hut goes up it)
const land = (across, distance) => {
  const inland = shore(across) - distance;
  const beach = WATER + Math.min(inland, 20) * (0.5 / 13);
  const slope = 4.5 * anim.ease.smooth(anim.span(-across, 6, 24)) * anim.span(inland, 0.5, 9);
  return Math.max(-2.4, beach + slope);
};
// a soft round glow, stretched (sx, sy: its half-widths), falling off with no edge to its disc
const glow = (g, x, y, sx, sy, rgb, alpha) => {
  g.save();
  g.translate(x, y);
  g.scale(sx, sy);
  const r = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  for (const u of [0, 0.2, 0.4, 0.6, 0.8, 1]) r.addColorStop(u, `rgba(${rgb},${(1 - u * u) ** 2})`);
  g.globalAlpha = alpha;
  g.fillStyle = r;
  g.beginPath();
  g.arc(0, 0, 1, 0, Math.PI * 2);
  g.fill();
  g.restore();
};
// a skiff seen from its side, metres, the keel's middle at (0, 0), the bow to the right: its hull (`hull` its paint,
// `strake` the band under the gunwale, `bottom` below the waterline), the far side's inside showing over the near
// gunwale, the thwarts' ends, a tiller at the stern; `length` long
const skiff = (g, length, hull, strake, bottom) => {
  const L = length / 2;
  const sheer = x => -0.78 - 0.22 * Math.max(0, x / L) ** 2 + 0.05 * Math.max(0, -x / L);
  const keel = x => -0.02 - 0.42 * Math.max(0, (x / L - 0.45) / 0.55) ** 1.6 - 0.18 * Math.max(0, (-x / L - 0.7) / 0.3);
  const outline = () => {
    g.beginPath();
    g.moveTo(-L, sheer(-L));
    for (let i = 1; i <= 24; i++) g.lineTo(-L + (2 * L * i) / 24, sheer(-L + (2 * L * i) / 24));
    g.lineTo(L + 0.12, sheer(L) - 0.04);
    for (let i = 24; i >= 0; i--) g.lineTo(-L + (2 * L * i) / 24, keel(-L + (2 * L * i) / 24));
    g.lineTo(-L - 0.04, keel(-L) - 0.05);
    g.closePath();
  };
  // the far side's inside, a sliver over the near gunwale, and the ends of the thwarts
  g.fillStyle = '#a68e6c';
  g.beginPath();
  g.moveTo(-L + 0.1, sheer(-L) + 0.02);
  for (let i = 0; i <= 20; i++) g.lineTo(-L + 0.1 + ((2 * L - 0.3) * i) / 20, sheer(-L + 0.1 + ((2 * L - 0.3) * i) / 20) - 0.07);
  g.lineTo(L - 0.2, sheer(L - 0.2) + 0.02);
  g.closePath();
  g.fill();
  outline();
  g.fillStyle = hull;
  g.fill();
  g.save();
  outline();
  g.clip();
  g.fillStyle = bottom;
  g.beginPath();
  g.moveTo(-L - 0.2, -0.24);
  g.bezierCurveTo(-L * 0.3, -0.2, L * 0.4, -0.22, L + 0.3, -0.36);
  g.lineTo(L + 0.3, 0.1);
  g.lineTo(-L - 0.2, 0.1);
  g.closePath();
  g.fill();
  g.fillStyle = strake;
  g.beginPath();
  for (let i = 0; i <= 24; i++) g.lineTo(-L + (2 * L * i) / 24, sheer(-L + (2 * L * i) / 24) - 0.02);
  for (let i = 24; i >= 0; i--) g.lineTo(-L + (2 * L * i) / 24, sheer(-L + (2 * L * i) / 24) + 0.13);
  g.closePath();
  g.fill();
  // the planks' seams and the paint worn off them
  g.strokeStyle = 'rgba(60,50,40,0.28)';
  g.lineWidth = 0.012;
  for (const k of [0.32, 0.52, 0.72]) {
    g.beginPath();
    for (let i = 0; i <= 24; i++) {
      const x = -L + (2 * L * i) / 24;
      g.lineTo(x, sheer(x) + (keel(x) - sheer(x)) * k);
    }
    g.stroke();
  }
  g.restore();
  // the gunwale's rail and the tiller over the transom
  g.strokeStyle = '#5b4a3a';
  g.lineWidth = 0.05;
  g.beginPath();
  for (let i = 0; i <= 24; i++) g.lineTo(-L + (2 * L * i) / 24, sheer(-L + (2 * L * i) / 24));
  g.stroke();
  g.lineWidth = 0.05;
  g.beginPath();
  g.moveTo(-L + 0.05, sheer(-L) - 0.05);
  g.lineTo(-L - 0.35, sheer(-L) - 0.2);
  g.stroke();
  return { sheer, keel };
};
return { WATER, shore, land, glow, skiff };
