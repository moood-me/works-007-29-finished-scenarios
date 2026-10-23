// The Eighteen Peaks across the bay, thirty kilometres off: blue-grey rock under snow that burns white-gold in the
// morning sun — painted in day colours; the sun behind the viewer lights them, the haze makes them far.
const A = e.anim;
const peaks = [];
for (let i = 0; i < 18; i++) peaks.push([-27000 + i * 3150 + (A.hash(i, 1) - 0.5) * 1400, 1900 + 1700 * A.hash(i, 2), 1500 + 900 * A.hash(i, 3)]);
const ridge = x => {
  let h = 500 + 120 * Math.sin(x / 1700 + 0.6);
  for (const [px, ph, pw] of peaks) {
    const u = Math.abs(x - px) / pw;
    if (u < 1.6) h = Math.max(h, ph * (1 - u * 0.62) + 70 * Math.sin(x / 140 + px));
  }
  return h;
};
const body = new Path2D();
body.moveTo(-42000, 60);
for (let x = -42000; x <= 42000; x += 70) body.lineTo(x, -ridge(x));
body.lineTo(42000, 60);
body.closePath();
g.fillStyle = '#7f8ea6';
g.fill(body);
g.save();
g.clip(body);
// the snow: down from each crest to a ragged line, deeper in the gullies
g.fillStyle = '#f3f1ec';
for (const [px, ph, pw] of peaks) {
  const line = ph * (0.58 + 0.1 * A.hash(px, 4));
  g.beginPath();
  g.moveTo(px - pw * 1.6, -line);
  for (let x = px - pw * 1.6; x <= px + pw * 1.6; x += 60) {
    g.lineTo(x, -line + 180 * Math.sin(x / 90) * Math.sin(x / 37) + 120 * A.hash(Math.round(x / 60), 5));
  }
  g.lineTo(px + pw * 1.6, -ph * 1.2);
  g.lineTo(px - pw * 1.6, -ph * 1.2);
  g.closePath();
  g.fill();
}
// the shaded side of each peak, away from the sun on the left
g.fillStyle = 'rgba(70, 84, 112, 0.28)';
for (const [px, ph, pw] of peaks) {
  g.beginPath();
  g.moveTo(px, -ph - 80);
  g.lineTo(px + pw * 1.7, 0);
  g.lineTo(px + pw * 0.2, 0);
  g.closePath();
  g.fill();
}
g.restore();
// the far shore at their foot: a dark green band
g.fillStyle = '#5c7360';
g.fillRect(-42000, -160, 84000, 220);
