// The far shore, two miles of water off (here 900 m): a low line of hills, a strip of a village at the water — and
// Nora's house, its window the glow `window` (her ten o'clock light); the lamp on the harbour's post, `post`. Metres;
// the foot at the water; the village at x 0…115, her house at 127.
const top = x => 15 + 11 * Math.sin(x * 0.011 + 1.3) + 8 * Math.sin(x * 0.027 + 0.4) + 4 * Math.sin(x * 0.061);
const fall = x => Math.min(1, Math.max(0, (470 - x) / 140));
g.fillStyle = '#7b8595';
g.beginPath();
g.moveTo(-520, 0.5);
for (let x = -520; x <= 520; x += 8) g.lineTo(x, -top(x) * fall(x) - 1);
g.lineTo(520, 0.5);
g.closePath();
g.fill();
// a lower, nearer ridge along the water
g.fillStyle = '#6f7888';
g.beginPath();
g.moveTo(-520, 0.5);
for (let x = -520; x <= 360; x += 8) g.lineTo(x, -(3 + 2.2 * Math.sin(x * 0.04) + 1.2 * Math.sin(x * 0.13)) * fall(x + 80));
g.lineTo(360, 0.5);
g.closePath();
g.fill();
// the village: small pale houses with dark roofs, Nora's (at x 127) a little apart, nearer the water
const house = (x, w, h) => {
  g.fillStyle = '#c9c3b9';
  g.fillRect(x - w / 2, -h, w, h);
  g.fillStyle = '#545056';
  g.beginPath();
  g.moveTo(x - w / 2 - 0.6, -h);
  g.lineTo(x, -h - w * 0.45);
  g.lineTo(x + w / 2 + 0.6, -h);
  g.closePath();
  g.fill();
};
for (let i = 0; i < 16; i++) house(-10 + i * 7.5 + e.rnd() * 4, 5 + e.rnd() * 3, 3.5 + e.rnd() * 2.5);
house(127, 7, 4.5);
g.fillStyle = '#3d3a3e';
g.fillRect(125.8, -3.1, 2.4, 1.8);
e.light(127, -2.2, 25, '#ffc77e', 2.5, 'window');
e.at(127, -2.2, 'window');
// the harbour's lamp on its post at the pier
g.fillStyle = '#4a4648';
g.fillRect(99.7, -6, 0.6, 6);
e.light(100, -6.3, 4, '#ffd9a0', 0.8, 'post');
