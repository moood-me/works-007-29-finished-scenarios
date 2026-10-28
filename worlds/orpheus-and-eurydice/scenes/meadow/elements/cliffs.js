// The walls of the underworld round the far edge of the meadow, 280 m off, side-on (x across, y up negative, metres):
// rock rising sheer at both sides into the haze of the vault, lower left of the middle, its rim broken into crags and
// notches, its face into great slabs. On the right, where the stream goes, the stair: pale stone steps cut into the
// rock, climbing in long flights from the foot of the wall up into the dark, and at its top, very far up, a small round
// of pale light — the way out. Painted in the rock's own greys; the haze makes it a lilac silhouette.
const L = -900, R = 900;
// the rock's rim: high at both sides, low in the middle, broken into crags and notches
const rim = x => {
  const u = x / R, base = -42 - 128 * Math.min(1, Math.max(0, (Math.abs(u + 0.15) - 0.05) / 0.3)) ** 1.3;
  return base * (1 + 0.12 * Math.sin(x * 0.045) + 0.07 * Math.sin(x * 0.13 + 1.7)) - 6 * (e.anim.hash(Math.round(x / 14), 26) - 0.5);
};
g.fillStyle = '#3c3a4c';
g.beginPath();
g.moveTo(L, 1);
for (let x = L; x <= R; x += 14) g.lineTo(x, Math.max(-171, rim(x)));
g.lineTo(R, 1);
g.closePath();
g.fill();
// slabs and clefts in its face: darker strokes running down, only on the rock
g.save();
g.clip();
g.strokeStyle = 'rgba(30,28,40,0.6)';
g.lineCap = 'round';
for (let i = 0; i < 90; i++) {
  const x = L + 20 + (R - L - 40) * e.anim.hash(i, 21), top = -10 - 160 * e.anim.hash(i, 22), len = Math.min(20 + 60 * e.anim.hash(i, 23), -top - 2);
  g.lineWidth = 1 + 3 * e.anim.hash(i, 24);
  g.beginPath();
  g.moveTo(x, top);
  g.lineTo(x + (e.anim.hash(i, 25) - 0.5) * 18, top + len);
  g.stroke();
}
g.restore();
// the stair: flights going up the rock in a zigzag, each a pale band of steps with its dark risers
const flights = [[118, 0, 150, -22], [150, -22, 122, -44], [122, -44, 148, -66], [148, -66, 126, -86], [126, -86, 140, -104]];
for (const [x0, y0, x1, y1] of flights) {
  const n = 18;
  for (let k = 0; k < n; k++) {
    const u = k / n, x = x0 + (x1 - x0) * u, y = y0 + (y1 - y0) * u;
    g.fillStyle = '#b4b0c2';
    g.fillRect(x - 4, y - 1.2, 8, 0.8);
    g.fillStyle = '#2c2a38';
    g.fillRect(x - 4, y - 0.4, 8, 0.5);
  }
}
// the round of light at the top
g.fillStyle = '#efe8d6';
g.beginPath();
g.arc(140, -108, 3.2, 0, Math.PI * 2);
g.fill();
e.light(140, -108, 7, '#fff1d4', 1.1, 'opening');
e.at(140, -108, 'opening');
e.at(118, -1, 'stair');
