// The yard's fence, 15 m off, across the whole view behind the yard: grey weathered planks on two rails, a cap of
// snow along its top, drifts heaped at its foot; toward the right the yard's gate — two closed leaves under a little
// roof of its own on two tall posts.
// (x −9…22 m: across −3…28; its foot at 0)
const L = e.lib;
const C = L.C;
const H = 2.1;
const GATE0 = 3;
const GATE1 = 6.4;

// the planks: one a little taller or shorter than the next, some darker
for (let x = -9; x < 22; x += 0.2) {
  if (x > GATE0 - 0.25 && x < GATE1 + 0.25) continue;
  const top = H - 0.12 + e.rnd() * 0.18;
  g.fillStyle = e.rnd() < 0.3 ? "#7f776d" : e.rnd() < 0.5 ? C.woodGrey : "#8d857a";
  g.beginPath();
  g.moveTo(x, 0);
  g.lineTo(x, -top + 0.06);
  g.lineTo(x + 0.095, -top);
  g.lineTo(x + 0.19, -top + 0.06);
  g.lineTo(x + 0.19, 0);
  g.closePath();
  g.fill();
  g.fillStyle = "rgba(60,52,44,0.35)";
  g.fillRect(x + 0.185, -top + 0.06, 0.015, top - 0.06);
}
g.fillStyle = "#6c645a";
g.fillRect(-9, -1.62, GATE0 - 0.25 + 9, 0.08);
g.fillRect(GATE1 + 0.25, -1.62, 22 - GATE1 - 0.25, 0.08);
g.fillRect(-9, -0.55, GATE0 - 0.25 + 9, 0.08);
g.fillRect(GATE1 + 0.25, -0.55, 22 - GATE1 - 0.25, 0.08);
// (snow on the planks' tops: a soft line)
L.snowCap(g, -9, GATE0 - 0.25, -H + 0.04, 0.12, 11);
L.snowCap(g, GATE1 + 0.25, 22, -H + 0.04, 0.12, 12);

// the gate: two posts, the leaves of boards with a cross brace, a little gable roof over them
g.fillStyle = C.woodDark;
g.fillRect(GATE0 - 0.25, -3.1, 0.25, 3.1);
g.fillRect(GATE1, -3.1, 0.25, 3.1);
const mid = (GATE0 + GATE1) / 2;
for (const [a, b] of [[GATE0, mid], [mid, GATE1]]) {
  g.fillStyle = "#857b70";
  g.fillRect(a + 0.02, -2.3, b - a - 0.04, 2.3);
  g.strokeStyle = "#6a6158";
  g.lineWidth = 0.02;
  for (let x = a + 0.17; x < b; x += 0.17) {
    g.beginPath();
    g.moveTo(x, -2.3);
    g.lineTo(x, 0);
    g.stroke();
  }
  g.fillStyle = "#6c645a";
  g.fillRect(a, -2.0, b - a, 0.1);
  g.fillRect(a, -0.4, b - a, 0.1);
  g.save();
  g.beginPath();
  g.rect(a, -2.0, b - a, 1.7);
  g.clip();
  g.strokeStyle = "#6c645a";
  g.lineWidth = 0.1;
  g.beginPath();
  g.moveTo(a, -0.35);
  g.lineTo(b, -1.95);
  g.stroke();
  g.restore();
}
g.fillStyle = C.woodDark;
g.beginPath();
g.moveTo(GATE0 - 0.6, -3.05);
g.lineTo(mid, -3.75);
g.lineTo(GATE1 + 0.6, -3.05);
g.lineTo(GATE1 + 0.6, -2.95);
g.lineTo(GATE0 - 0.6, -2.95);
g.closePath();
g.fill();
g.fillStyle = C.snow;
g.beginPath();
g.moveTo(GATE0 - 0.65, -3.0);
g.lineTo(mid, -3.85);
g.lineTo(GATE1 + 0.65, -3.0);
g.lineTo(GATE1 + 0.5, -3.1);
g.lineTo(mid, -3.7);
g.lineTo(GATE0 - 0.5, -3.1);
g.closePath();
g.fill();

// the drifts heaped against the fence's foot by the wind: soft white mounds, bluer in their hollows
for (let i = 0; i < 18; i++) {
  const x = -9 + i * 1.8 + e.rnd();
  const w = 1.6 + e.rnd() * 2.2;
  const h = 0.25 + e.rnd() * 0.45;
  g.fillStyle = C.snowShade;
  g.beginPath();
  g.ellipse(x, 0.02, w, h + 0.04, 0, Math.PI, 0);
  g.fill();
  g.fillStyle = C.snow;
  g.beginPath();
  g.ellipse(x - w * 0.08, 0.02, w * 0.92, h, 0, Math.PI, 0);
  g.fill();
}
