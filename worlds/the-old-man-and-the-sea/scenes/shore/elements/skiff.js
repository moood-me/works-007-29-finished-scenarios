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
g.fillStyle = '#cfc6b0';
g.fill();
g.save();
bundle();
g.clip();
const patches = ['#bdb39b', '#d9d2bf', '#b2a88e', '#c6bea6', '#a99f86', '#ddd6c4'];
for (let i = 0; i < 18; i++) {
  g.fillStyle = patches[Math.floor(e.rnd() * patches.length)];
  g.fillRect(MX - 0.3 + e.rnd() * 0.4, -4.2 + e.rnd() * 2.9, 0.12 + e.rnd() * 0.2, 0.15 + e.rnd() * 0.3);
}
// its folds, dark down the shaded left
g.fillStyle = 'rgba(90,80,70,0.22)';
g.fillRect(MX - 0.3, -4.3, 0.16, 3.2);
// the lashings
g.strokeStyle = '#6a5640';
g.lineWidth = 0.025;
for (let y = -1.45; y > -4.1; y -= 0.42) {
  g.beginPath();
  g.moveTo(MX - 0.3, y + 0.05);
  g.lineTo(MX + 0.3, y - 0.05);
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
