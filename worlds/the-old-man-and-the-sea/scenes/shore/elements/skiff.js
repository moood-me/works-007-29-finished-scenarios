// The old man's skiff, drawn up on the sand, seen from its side (a card turned to the bay, the bow toward the
// water): its hull sun-bleached white over a faded blue strake, the mast stepped, the sail furled round it — patched
// with flour sacks, lashed with line —, the oars laid across the thwarts. Metres, the keel's middle at the anchor.
const { sheer } = e.lib.skiff(g, 5, '#d3d2c6', '#55788f', '#7c5d48');
// the oars, laid along the boat, their looms over the stern
g.strokeStyle = '#8a7255';
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(-2.9, -0.98);
g.lineTo(1.4, sheer(1.4) - 0.1);
g.moveTo(-2.7, -1.06);
g.lineTo(1.7, sheer(1.7) - 0.06);
g.stroke();
g.fillStyle = '#8a7255';
g.beginPath();
g.ellipse(1.55, sheer(1.55) - 0.09, 0.32, 0.06, -0.06, 0, Math.PI * 2);
g.fill();
// the mast
const MX = 1.05;
const top = -4.55;
g.fillStyle = '#9b8058';
g.beginPath();
g.moveTo(MX - 0.06, sheer(MX) + 0.05);
g.lineTo(MX - 0.035, top);
g.lineTo(MX + 0.035, top);
g.lineTo(MX + 0.06, sheer(MX) + 0.05);
g.closePath();
g.fill();
// the sail furled round it: a long bundle, fat in its middle, of sacking patched in many greys and creams
const half = y => 0.1 + 0.11 * Math.sin(Math.PI * Math.min(1, Math.max(0, (-1.2 - y) / 2.95)));
const bundle = () => {
  g.beginPath();
  for (let i = 0; i <= 20; i++) {
    const y = -1.2 - (2.95 * i) / 20;
    g.lineTo(MX - half(y), y);
  }
  for (let i = 20; i >= 0; i--) {
    const y = -1.2 - (2.95 * i) / 20;
    g.lineTo(MX + half(y) * 1.1, y);
  }
  g.closePath();
};
bundle();
g.fillStyle = '#cdc3ab';
g.fill();
g.save();
bundle();
g.clip();
// round as a roll: shaded on its left, lit on its right where the low sun comes from
const roll = g.createLinearGradient(MX - 0.23, 0, MX + 0.25, 0);
roll.addColorStop(0, 'rgba(84,72,62,0.42)');
roll.addColorStop(0.35, 'rgba(84,72,62,0.08)');
roll.addColorStop(0.7, 'rgba(255,246,226,0.22)');
roll.addColorStop(1, 'rgba(120,104,86,0.18)');
g.fillStyle = roll;
g.fillRect(MX - 0.3, -4.3, 0.6, 3.2);
// a few sacking patches, sewn on askew, the colour of old flour sacks
const patches = ['#b9ae95', '#ddd4bf', '#aea38a', '#c7bca2', '#e2dac6'];
for (let i = 0; i < 7; i++) {
  const x = MX - 0.22 + e.rnd() * 0.3;
  const y = -4 + e.rnd() * 2.6;
  const w = 0.12 + e.rnd() * 0.1;
  const h = 0.16 + e.rnd() * 0.2;
  const k = (e.rnd() - 0.5) * 0.08;
  g.fillStyle = patches[i % patches.length];
  g.beginPath();
  g.moveTo(x, y + k);
  g.lineTo(x + w, y - k);
  g.lineTo(x + w + k, y + h);
  g.lineTo(x - k, y + h + k);
  g.closePath();
  g.fill();
}
// the cloth wound round the mast: long soft folds slanting up the roll
g.strokeStyle = 'rgba(96,82,68,0.28)';
g.lineWidth = 0.022;
for (let y = -1.3; y > -4.2; y -= 0.23 + e.rnd() * 0.12) {
  g.beginPath();
  g.moveTo(MX - 0.26, y);
  g.quadraticCurveTo(MX, y - 0.1, MX + 0.28, y - 0.3);
  g.stroke();
}
// the lashings: a few turns of line, bowed round the roll, unevenly apart
g.strokeStyle = '#5f4c38';
g.lineWidth = 0.028;
for (const y of [-1.5, -2.15, -2.95, -3.55, -4.0]) {
  g.beginPath();
  g.moveTo(MX - 0.3, y);
  g.quadraticCurveTo(MX, y + 0.07, MX + 0.3, y - 0.02);
  g.stroke();
}
g.restore();
// the gaff's end over the bundle, and a halyard down the mast
g.strokeStyle = '#7d6748';
g.lineWidth = 0.045;
g.beginPath();
g.moveTo(MX - 0.05, -4.3);
g.lineTo(MX + 0.32, -4.5);
g.stroke();
g.strokeStyle = 'rgba(70,58,44,0.8)';
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(MX + 0.04, top);
g.lineTo(MX + 0.2, sheer(MX + 0.2));
g.stroke();
