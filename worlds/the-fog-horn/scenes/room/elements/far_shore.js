// The far shore, two miles of water off (here 900 m), its end seen in the window's left half: a low line of hills
// running out into the sea, a village at the water — and Nora's house, its window the glow `window` (her ten o'clock
// light); the lamp on the harbour's post, `post`. Metres; the foot at the water; the land ends at x 75, her house at
// x 34 (across −6).
const top = x => 15 + 9 * Math.sin(x * 0.011 + 1.3) + 6 * Math.sin(x * 0.027 + 0.4) + 3 * Math.sin(x * 0.061);
const fall = x => Math.min(1, Math.max(0, (75 - x) / 110));
g.fillStyle = '#7b8595';
g.beginPath();
g.moveTo(-520, 0.5);
for (let x = -520; x <= 76; x += 4) g.lineTo(x, -top(x) * fall(x) - 0.6);
g.lineTo(76, 0.5);
g.closePath();
g.fill();
// a lower, nearer ridge along the water
g.fillStyle = '#6f7888';
g.beginPath();
g.moveTo(-520, 0.5);
for (let x = -520; x <= 70; x += 4) g.lineTo(x, -(3 + 1.6 * Math.sin(x * 0.04) + 1 * Math.sin(x * 0.13)) * fall(x + 20));
g.lineTo(70, 0.5);
g.closePath();
g.fill();
// the village: small pale houses with dark roofs, Nora's a little apart, nearer the end of the land
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
for (let i = 0; i < 12; i++) house(-90 + i * 8 + e.rnd() * 4, 5 + e.rnd() * 3, 3.5 + e.rnd() * 2.5);
house(34, 7, 4.5);
g.fillStyle = '#3d3a3e';
g.fillRect(32.8, -3.1, 2.4, 1.8);
e.light(34, -2.2, 14, '#ffc77e', 2.5, 'window');
e.at(34, -2.2, 'window');
// the harbour's lamp on its post at the pier
g.fillStyle = '#4a4648';
g.fillRect(15.7, -6, 0.6, 6);
e.light(16, -6.3, 4, '#ffd9a0', 0.8, 'post');
