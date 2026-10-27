// What the Terrace's elements share: the water's level, the deck's front edge (where the piles stand and the land falls
// away under the bay), a soft glow, a skiff seen from its side, and the hurricane lamp that hangs under the roof.
const WATER = -1.6;
const EDGE = 9.7;
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
// gunwale, a tiller at the stern; `length` long
const skiff = (g, length, hull, strake, bottom) => {
  const L = length / 2;
  const sheer = x => -0.78 - 0.22 * Math.max(0, x / L) ** 2 + 0.05 * Math.max(0, -x / L);
  const keel = x => -0.02 - 0.42 * Math.max(0, (x / L - 0.45) / 0.55) ** 1.6 - 0.18 * Math.max(0, (-x / L - 0.7) / 0.3);
  const along = (f, dy) => {
    for (let i = 0; i <= 24; i++) g.lineTo(-L + (2 * L * i) / 24, f(-L + (2 * L * i) / 24) + dy);
  };
  const outline = () => {
    g.beginPath();
    g.moveTo(-L, sheer(-L));
    along(sheer, 0);
    g.lineTo(L + 0.12, sheer(L) - 0.04);
    for (let i = 24; i >= 0; i--) g.lineTo(-L + (2 * L * i) / 24, keel(-L + (2 * L * i) / 24));
    g.lineTo(-L - 0.04, keel(-L) - 0.05);
    g.closePath();
  };
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
  along(sheer, -0.02);
  for (let i = 24; i >= 0; i--) g.lineTo(-L + (2 * L * i) / 24, sheer(-L + (2 * L * i) / 24) + 0.13);
  g.closePath();
  g.fill();
  g.restore();
  g.strokeStyle = '#5b4a3a';
  g.lineWidth = 0.05;
  g.beginPath();
  along(sheer, 0);
  g.stroke();
  g.beginPath();
  g.moveTo(-L + 0.05, sheer(-L) - 0.05);
  g.lineTo(-L - 0.35, sheer(-L) - 0.2);
  g.stroke();
};
// a hurricane lamp hanging on its cord from the roof, metres, the foot of its font at (0, 0) and the cord tied `drop`
// metres over it: its tin hood, its wire guard and glass — a layer that swings a little on the cord in the wind,
// about the knot — its flame a light named `flame`
const lamp = (e, drop) => {
  e.layer('lamp', { pivot: [0, -drop], wind: { strength: 0.06, gust: 0.4, scale: 1 }, box: [-0.2, -drop - 0.05, 0.2, 0.05] }, g => {
    g.strokeStyle = '#3a3029';
    g.lineWidth = 0.012;
    g.beginPath();
    g.moveTo(0, -drop);
    g.lineTo(0, -0.4);
    g.stroke();
    // the hood
    g.fillStyle = '#4d4a44';
    g.beginPath();
    g.moveTo(-0.04, -0.4);
    g.lineTo(0.04, -0.4);
    g.lineTo(0.09, -0.32);
    g.lineTo(-0.09, -0.32);
    g.closePath();
    g.fill();
    // the glass, lit, and its guard wires
    g.fillStyle = '#ffdca4';
    g.beginPath();
    g.ellipse(0, -0.2, 0.065, 0.11, 0, 0, Math.PI * 2);
    g.fill();
    g.strokeStyle = 'rgba(70,60,50,0.8)';
    g.lineWidth = 0.01;
    for (const x of [-0.045, 0, 0.045]) {
      g.beginPath();
      g.moveTo(x, -0.31);
      g.lineTo(x * 1.2, -0.09);
      g.stroke();
    }
    // the font under it
    g.fillStyle = '#5a5249';
    g.beginPath();
    g.ellipse(0, -0.05, 0.09, 0.05, 0, 0, Math.PI * 2);
    g.fill();
    e.light(0, -0.2, 0.35, '#ffc27a', 1.6, 'flame');
  });
};
return { WATER, EDGE, glow, skiff, lamp };
