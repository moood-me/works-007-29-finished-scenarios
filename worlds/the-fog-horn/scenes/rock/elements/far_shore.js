// The far shore, two miles of water off (here 900 m): a low line of hills, a strip of a village at the water — and
// Nora's house, its window the glow `window` (her ten o'clock light); the lamp on the harbour's post, `post`. Metres;
// the foot at the water.
const top = x => 9 + 7 * Math.sin(x * 0.011 + 1.3) + 5 * Math.sin(x * 0.027 + 0.4) + 3 * Math.sin(x * 0.061);
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
// the village: small pale houses with dark roofs, Nora's (at x -80) a little apart, nearer the water
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
for (let i = 0; i < 16; i++) house(-20 + i * 9 + e.rnd() * 5, 5 + e.rnd() * 3, 3.5 + e.rnd() * 2.5);
house(-80, 7, 4.5);
g.fillStyle = '#3d3a3e';
g.fillRect(-81.2, -3.1, 2.4, 1.8);
e.light(-80, -2.2, 7, '#ffc77e', 1.4, 'window');
e.at(-80, -2.2, 'window');
// the harbour's lamp on its post at the pier
g.fillStyle = '#4a4648';
g.fillRect(-36.3, -6, 0.6, 6);
e.light(-36, -6.3, 4, '#ffd9a0', 0.8, 'post');
