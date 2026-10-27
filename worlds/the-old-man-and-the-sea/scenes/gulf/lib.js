// What the Gulf's elements share: the water's level, a soft glow, and the old man's skiff as numbers — its lines
// along its length (t: 0 the transom, 1 the stem), metres in the skiff's own frame (x along it, the bow +, y up from
// the water, z toward its near side), and its cross-section there, a closed ring of points (the near side down the
// outside to the keel and up the far side, over the far gunwale, down the far side's inside, across the bottom and up
// the near side's inside to the near gunwale) — the hull's form and its transom are drawn from them.
const WATER = 0.3;
const LENGTH = 5;
const SKIN = 0.035;
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
// the half-beam: the transom 0.6 wide each way, the widest just forward of the middle, narrowing to the stem
const beam = t => (t < 0.45 ? 0.6 + 0.18 * Math.sin((t / 0.45) * (Math.PI / 2)) : Math.max(0.006, 0.78 * Math.cos(((t - 0.45) / 0.55) * (Math.PI / 2)) ** 0.75));
// the gunwale's height over the water: low amidships, a little higher at the transom, sweeping up to the bow
const sheer = t => 0.55 + 0.06 * Math.max(0, 1 - t / 0.4) ** 2 + 0.28 * Math.max(0, (t - 0.5) / 0.5) ** 2;
// the keel's depth: a quarter of a metre under the water, shallower at the transom, the forefoot rising to the stem
const keel = t => -0.25 + 0.12 * Math.max(0, 1 - t / 0.12) + 0.75 * Math.max(0, (t - 0.68) / 0.32) ** 1.6;
// the section at t, its ring of [x, y, z] (closed: the first point again at its end), and the girth along it to
// where its outside ends (the far gunwale) and where its inside begins
const section = t => {
  const x = -LENGTH / 2 + LENGTH * t;
  const b = beam(t);
  const s = sheer(t);
  const k = keel(t);
  const bi = Math.max(0.002, b - SKIN);
  const side = (a, half, top, bottom) => [half * Math.cos(a * (Math.PI / 2)) ** 0.6, top - (top - bottom) * Math.sin(a * (Math.PI / 2)) ** 0.8];
  const ring = [];
  const N = 10;
  for (let i = 0; i <= N; i++) {
    const [z, y] = side(i / N, b, s, k);
    ring.push([x, y, z]);
  }
  for (let i = N - 1; i >= 0; i--) {
    const [z, y] = side(i / N, b, s, k);
    ring.push([x, y, -z]);
  }
  for (let i = 0; i <= N; i++) {
    const [z, y] = side(i / N, bi, s, k + SKIN);
    ring.push([x, y, -z]);
  }
  for (let i = N - 1; i >= 0; i--) {
    const [z, y] = side(i / N, bi, s, k + SKIN);
    ring.push([x, y, z]);
  }
  ring.push(ring[0]);
  return ring;
};
// where along a ring (by its length, 0…1) its parts begin: the keel, the far gunwale's top, the far side's inside,
// the near gunwale's top (the ring ends at its outer edge, where it began) — measured on the section amidships, where the painting is laid out
const girth = (() => {
  const ring = section(0.45);
  const len = [0];
  for (let i = 1; i < ring.length; i++) {
    const [a, b] = [ring[i - 1], ring[i]];
    len.push(len[i - 1] + Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]));
  }
  const all = len[len.length - 1];
  return { all, keel: len[10] / all, far: len[20] / all, inside: len[21] / all, near: len[41] / all };
})();
return { WATER, LENGTH, glow, beam, sheer, keel, section, girth };
