// The skiff's mast, stepped through the forward thwart, the old sail furled round it — sacking patched with flour
// sacks, lashed with line —, the gaff's end over the bundle. Metres, the water's level at the anchor (the mast's foot
// is in the boat, under the gunwale).
const top = -4.4;
g.fillStyle = '#9b8058';
g.beginPath();
g.moveTo(-0.06, 0);
g.lineTo(-0.035, top);
g.lineTo(0.035, top);
g.lineTo(0.06, 0);
g.closePath();
g.fill();
// the sail furled round it: a long bundle, fat in its middle, of sacking patched in many greys and creams
const half = y => 0.1 + 0.11 * Math.sin(Math.PI * Math.min(1, Math.max(0, (-1.2 - y) / 2.9)));
const bundle = () => {
  g.beginPath();
  for (let i = 0; i <= 20; i++) {
    const y = -1.2 - (2.9 * i) / 20;
    g.lineTo(-half(y), y);
  }
  for (let i = 20; i >= 0; i--) {
    const y = -1.2 - (2.9 * i) / 20;
    g.lineTo(half(y) * 1.1, y);
  }
  g.closePath();
};
bundle();
g.fillStyle = '#cdc3ab';
g.fill();
g.save();
bundle();
g.clip();
const patches = ['#b9ae95', '#ddd4bf', '#aea38a', '#c7bca2', '#e2dac6'];
for (let i = 0; i < 7; i++) {
  const x = -0.22 + e.rnd() * 0.3;
  const y = -3.9 + e.rnd() * 2.5;
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
for (let y = -1.3; y > -4.0; y -= 0.23 + e.rnd() * 0.12) {
  g.beginPath();
  g.moveTo(-0.26, y);
  g.quadraticCurveTo(0, y - 0.1, 0.28, y - 0.3);
  g.stroke();
}
// the lashings: a few turns of line, bowed round the roll, unevenly apart
g.strokeStyle = '#5f4c38';
g.lineWidth = 0.028;
for (const y of [-1.45, -2.1, -2.9, -3.5, -3.95]) {
  g.beginPath();
  g.moveTo(-0.3, y);
  g.quadraticCurveTo(0, y + 0.07, 0.3, y - 0.02);
  g.stroke();
}
g.restore();
// the gaff's end over the bundle, and a halyard down the mast to the gunwale
g.strokeStyle = '#7d6748';
g.lineWidth = 0.045;
g.beginPath();
g.moveTo(-0.05, -4.15);
g.lineTo(0.32, -4.35);
g.stroke();
g.strokeStyle = 'rgba(70,58,44,0.8)';
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0.04, top);
g.lineTo(0.22, -0.6);
g.stroke();
