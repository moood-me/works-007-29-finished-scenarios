// The Edge of the Village — what its land and its paintings share: the pits of the village, the land's shape, a steady
// random stream, wind-blown streaks, the winch every pit has. Everything is painted in the day's colours; the hour is
// the scene's light.

// the pits, row behind row: [across, distance, half-width, half-depth] of each pit's floor (its walls rise from there
// to the lip at 1.3 of it, six metres and a little over); the first is the one the old man stands by
const PITS = [
  [5, 15, 6, 6],
  [-13, 24, 6.5, 6],
  [-1, 38, 6, 6],
  [16.5, 36, 6.5, 6],
  [-24, 44, 7, 6],
  [6, 55, 6.5, 6],
  [25, 58, 7, 6],
  [-12, 64, 6.5, 6],
  [-34, 70, 7, 6],
  [14, 78, 6, 6],
  [-4, 88, 6.5, 6],
  [34, 86, 7, 6],
  [-24, 94, 6.5, 6],
];
const N = PITS.length;
const P = new Float64Array(N * 4);
for (let i = 0; i < N; i++) for (let k = 0; k < 4; k++) P[i * 4 + k] = PITS[i][k];

// how far a point is out from pit i's middle: 0 its middle, 1 the foot of its walls, 1.3 the lip
function pitR(i, across, distance) {
  const x = (across - P[i * 4]) / P[i * 4 + 2];
  const z = (distance - P[i * 4 + 1]) / P[i * 4 + 3];
  return Math.sqrt(x * x + z * z);
}

// where a point at `r` of pit i, `angle` round from straight to the right, lies: [across, distance]
function pitAt(i, r, angle) {
  return [P[i * 4] + P[i * 4 + 2] * r * Math.cos(angle), P[i * 4 + 1] + P[i * 4 + 3] * r * Math.sin(angle)];
}

function smooth(u) {
  const t = u < 0 ? 0 : u > 1 ? 1 : u;
  return t * t * (3 - 2 * t);
}
function span(v, a, b) {
  const t = (v - a) / (b - a);
  return t < 0 ? 0 : t > 1 ? 1 : t;
}

// the land: the low rise the eye stands on, falling a metre and a half to the village's plain; the plain's gentle
// swell; the pits sunk into it, each with a low lip of thrown-up sand; the great dunes rising beyond the village
// to the horizon
function land(across, distance) {
  let h = -1.5 * smooth(span(distance, 2.5, 8) + 0.02 * Math.abs(across) * span(distance, 0, 6));
  h += 0.35 * Math.sin(across * 0.21 + distance * 0.13) * span(distance, 7, 14);
  h += 0.25 * Math.sin(across * 0.07 - distance * 0.05) * span(distance, 10, 30);
  for (let i = 0; i < N; i++) {
    const r = pitR(i, across, distance);
    if (r > 1.75) continue;
    h += -6.2 * smooth(span(r, 1.3, 1)) + 0.4 * span(r, 1.3, 1.4) - 0.4 * span(r, 1.4, 1.75);
  }
  const ridge = 1 + 0.35 * Math.sin(across * 0.025 + 1.3) + 0.2 * Math.sin(across * 0.061 + 0.4);
  h += 16 * ridge * smooth(span(distance, 105, 200));
  h += 6 * smooth(span(distance, 60, 120)) * smooth(span(-across, 30, 70));
  return h;
}

// a steady random 0…1 stream from a seed (the same every painting)
function stream(seed) {
  let s = (seed * 2654435761) >>> 0 || 1;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

// soft streaks of blown sand or high cloud over [x0, x1] (y from `top` to `bottom`, y down), n of them, each a long
// soft lens of `rgb` at `alpha`: for a layer that drifts and wraps round its box — a streak near one end is drawn
// again past the other, so the ends meet
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

// a pit's winch, as «The Pit» has it on its lip (its foot at 0, facing the eye; x −1.7…1.1): two rough posts, the
// drum with the rope wound on it and a crank, the rope ladder rolled up beside it, a lantern on the right post — its
// flame the glow `flame` — and the sand blown up round the posts. Point `ladder` — the rolled ladder.
function winch(g, e) {
  g.fillStyle = "#5b4a3a";
  g.fillRect(-0.62, -1.2, 0.1, 1.25);
  g.fillRect(0.52, -1.2, 0.1, 1.25);
  g.fillStyle = "#7a644c";
  g.fillRect(-0.55, -0.98, 1.1, 0.2);
  g.strokeStyle = "#a88d63";
  g.lineWidth = 0.03;
  for (let k = 0; k < 7; k++) {
    g.beginPath();
    g.moveTo(-0.4 + k * 0.12, -0.98);
    g.lineTo(-0.36 + k * 0.12, -0.78);
    g.stroke();
  }
  g.strokeStyle = "#4a3c30";
  g.lineWidth = 0.04;
  g.beginPath();
  g.moveTo(-0.62, -0.88);
  g.lineTo(-0.78, -0.88);
  g.lineTo(-0.78, -0.62);
  g.stroke();
  g.fillStyle = "#8d7552";
  g.beginPath();
  g.ellipse(-1.25, -0.16, 0.38, 0.16, 0, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = "#5e4b35";
  g.lineWidth = 0.025;
  for (let k = 0; k < 4; k++) {
    g.beginPath();
    g.moveTo(-1.55 + k * 0.2, -0.3);
    g.lineTo(-1.5 + k * 0.2, -0.02);
    g.stroke();
  }
  e.at(-1.25, -0.16, "ladder");
  g.strokeStyle = "#35322d";
  g.lineWidth = 0.015;
  g.beginPath();
  g.moveTo(0.62, -1.12);
  g.lineTo(0.78, -1.12);
  g.lineTo(0.78, -1.04);
  g.stroke();
  g.fillStyle = "#3b3833";
  g.fillRect(0.71, -1.05, 0.14, 0.035);
  g.fillRect(0.71, -0.84, 0.14, 0.035);
  g.fillStyle = "#e9dcc0";
  g.beginPath();
  g.ellipse(0.78, -0.94, 0.055, 0.085, 0, 0, Math.PI * 2);
  g.fill();
  e.light(0.78, -0.94, 0.12, "#ffc27a", 1, "flame");
  g.fillStyle = "#d8b680";
  g.beginPath();
  g.ellipse(0, 0.02, 1.0, 0.12, 0, Math.PI, 0);
  g.fill();
}

return { PITS, pitR, pitAt, land, stream, streaks, winch };
