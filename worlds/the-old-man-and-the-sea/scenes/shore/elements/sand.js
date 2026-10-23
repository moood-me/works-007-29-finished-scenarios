// The beach and the village's slope from above, metres (draped on the land): dry pale sand, darker and wet along the
// water's edge, weed and driftwood left by the tide, the keel's furrow where the old man's skiff was drawn up, the
// footprints of the morning; up the slope on the left the sand gives way to dry grass and scrub, and the pale road
// climbs it to the village. The plane's centre is at across -50, distance 89: across = x - 50, distance = 89 - y.
const { shore, land, WATER } = e.lib;
const X = a => a + 50;
const Y = d => 89 - d;
g.fillStyle = '#dcc7a2';
g.fillRect(-80, -91, 160, 182);
// the slope under its dry grass: olive where the land stands well over the beach's own fall, sand toward the beach
for (let a = -130; a < -4; a += 3) {
  for (let d = -2; d < 180; d += 3) {
    const h = land(a + 1.5, d + 1.5) - (WATER + Math.min(20, shore(a + 1.5) - d - 1.5) * (0.5 / 13));
    if (h < 0.3) continue;
    g.globalAlpha = Math.min(0.85, (h - 0.3) / 2.5);
    g.fillStyle = '#a49a68';
    g.fillRect(X(a) - 0.2, Y(d + 3) - 0.2, 3.4, 3.4);
  }
}
g.globalAlpha = 1;
// the slope's dry grass and scrub, where the land stands well over the water; sand showing through
for (let i = 0; i < 1600; i++) {
  const a = -130 + e.rnd() * 125;
  const d = -2 + e.rnd() * 180;
  const h = land(a, d) - (WATER + Math.min(20, shore(a) - d) * (0.5 / 13));
  if (h < 0.25 + e.rnd() * 0.6) continue;
  g.fillStyle = e.rnd() < 0.5 ? '#9d9563' : e.rnd() < 0.5 ? '#7f8250' : '#b3a675';
  g.beginPath();
  g.ellipse(X(a), Y(d), (0.3 + e.rnd() * 0.9) * (1 + d / 25), (0.2 + e.rnd() * 0.5) * (1 + d / 25), e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// the wet sand along the edge (and under the water, the bottom)
for (let a = -130; a < 30; a += 0.5) {
  const s = shore(a + 0.25);
  if (s > 180) continue;
  const grad = g.createLinearGradient(0, Y(s - 3.2), 0, Y(s));
  grad.addColorStop(0, 'rgba(176,152,118,0)');
  grad.addColorStop(0.55, 'rgba(176,152,118,0.75)');
  grad.addColorStop(1, '#a88f6c');
  g.fillStyle = grad;
  g.fillRect(X(a), Y(s), 0.55, 3.2);
  g.fillStyle = '#b8a07a';
  g.fillRect(X(a), Y(s + 30), 0.55, 30);
}
// the tide's line: weed and bits of wood a little above the edge
for (let i = 0; i < 260; i++) {
  const a = -40 + e.rnd() * 70;
  const d = shore(a) - 2.6 - e.rnd() * 1.2;
  g.fillStyle = e.rnd() < 0.6 ? '#5b5236' : '#8a7354';
  g.fillRect(X(a), Y(d), 0.08 + e.rnd() * 0.35, 0.03 + e.rnd() * 0.05);
}
// the road: from the beach up the slope to the village
g.strokeStyle = 'rgba(232,218,190,0.85)';
g.lineCap = 'round';
g.lineWidth = 1.6;
g.beginPath();
g.moveTo(X(-4), Y(6));
g.bezierCurveTo(X(-9), Y(8), X(-11), Y(11), X(-15), Y(12));
g.bezierCurveTo(X(-20), Y(13), X(-26), Y(18), X(-32), Y(22));
g.stroke();
// the keel's furrow from the water up to the skiff, and the two feet's tracks beside it
g.strokeStyle = 'rgba(150,128,96,0.6)';
g.lineWidth = 0.14;
g.beginPath();
g.moveTo(X(4.1), Y(10.8));
g.lineTo(X(5.3), Y(12.4));
g.stroke();
// footprints, many, crossing the beach
for (let i = 0; i < 520; i++) {
  const a = -14 + e.rnd() * 24;
  const d = 1 + e.rnd() * (shore(a) - 2);
  g.fillStyle = 'rgba(160,138,104,0.45)';
  g.beginPath();
  g.ellipse(X(a), Y(d), 0.06, 0.12, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// the grain of the sand: small light and dark specks near the viewer
for (let i = 0; i < 900; i++) {
  const a = -14 + e.rnd() * 26;
  const d = -2 + e.rnd() * 14;
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(240,228,204,0.5)' : 'rgba(170,148,112,0.35)';
  g.fillRect(X(a), Y(d), 0.04 + e.rnd() * 0.08, 0.04 + e.rnd() * 0.08);
}
