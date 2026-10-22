// The Pit — what its land and its paintings share: the pit's shape, a steady random stream, wind-blown sand.
// Everything is painted in the day's colours; the afternoon is the scene's light.

// the pit: an oval funnel, its flat floor out to `pitR` 1 (7.5 m across either way of across 0.5, 6.5 m either way
// of distance 5), its steep walls up to the lip at 1.3, six metres and a little over above the floor
const CX = 0.5;
const CZ = 5;
const RX = 7.5;
const RZ = 6.5;

// how far a point is out from the pit's middle: 0 its middle, 1 the foot of its walls, 1.3 the lip
function pitR(across, distance) {
  const x = (across - CX) / RX;
  const z = (distance - CZ) / RZ;
  return Math.sqrt(x * x + z * z);
}

// where a point at `r` of the pit, `angle` round from straight to the right, lies: [across, distance]
function pitAt(r, angle) {
  return [CX + RX * r * Math.cos(angle), CZ + RZ * r * Math.sin(angle)];
}

// a steady random 0…1 stream from a seed (the same every painting)
function stream(seed) {
  let s = (seed * 2654435761) >>> 0 || 1;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

// soft streaks of blown sand over [x0, x1] (y from `top` to `bottom`, y down), n of them, each a long soft lens of
// `rgb` at `alpha`: for a layer that drifts and wraps round its box — a streak near one end is drawn again past the
// other, so the ends meet
function streaks(g, seed, n, x0, x1, top, bottom, rgb, alpha, lenMin, lenMax, thick) {
  const r = stream(seed);
  const w = x1 - x0;
  for (let i = 0; i < n; i++) {
    const x = x0 + r() * w;
    const y = top + r() * (bottom - top);
    const len = lenMin + r() * (lenMax - lenMin);
    const t = thick * (0.6 + r() * 0.8);
    const a = alpha * (0.5 + r() * 0.5);
    for (const sx of [x - w, x, x + w]) {
      if (sx + len < x0 || sx - len > x1) continue;
      const band = g.createRadialGradient(sx, y, 0, sx, y, len);
      band.addColorStop(0, `rgba(${rgb}, ${a})`);
      band.addColorStop(1, `rgba(${rgb}, 0)`);
      g.fillStyle = band;
      g.save();
      g.translate(sx, y);
      g.scale(1, t / len);
      g.translate(-sx, -y);
      g.beginPath();
      g.arc(sx, y, len, 0, 6.3);
      g.fill();
      g.restore();
    }
  }
}

return { pitR, pitAt, stream, streaks };
