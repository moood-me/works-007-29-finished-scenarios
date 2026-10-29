// The corridor's far wall (facing the ward's door; x runs back toward the eye: distance 7.5 − x): the two-tone paint,
// the hand-rail, the doors of other wards (at distance 2.4 and 10.5), a tall window onto the dusk town between them
// (distance 7.4…8.6), and a framed print of a lake. The payphone hangs on it at distance 5.4 (its own element).
e.lib.wall(g, -10.6, 10.6);
g.fillStyle = '#b48a5e';
g.fillRect(-10.6, -0.95, 21.2, 0.05);
const door = x => {
  g.fillStyle = '#e8e6dc';
  g.fillRect(x - 0.52, -2.18, 1.04, 2.18);
  g.fillStyle = '#d9cfb6';
  g.fillRect(x - 0.45, -2.1, 0.9, 2.1);
  g.fillStyle = '#b8b9b6';
  g.fillRect(x - 0.42, -0.32, 0.84, 0.28);
  g.fillStyle = '#d8e2dc';
  g.fillRect(x - 0.2, -1.55, 0.4, 0.8);
};
door(5.1);
door(-3.0);
// the window: its frame, the dusk town beyond (painted: deep blue going pink low, a few lit windows)
const w = [-1.1, 0.1];
g.fillStyle = '#eef0e8';
g.fillRect(w[0] - 0.08, -2.3, w[1] - w[0] + 0.16, 1.5);
const sky = g.createLinearGradient(0, -2.22, 0, -0.9);
sky.addColorStop(0, '#5a64a0');
sky.addColorStop(0.6, '#b496b8');
sky.addColorStop(1, '#eab4a6');
g.fillStyle = sky;
g.fillRect(w[0], -2.22, w[1] - w[0], 1.34);
g.fillStyle = '#5d5a72';
for (let i = 0; i < 6; i++) g.fillRect(w[0] + i * 0.2, -1.1 - e.rnd() * 0.3, 0.17, 0.3);
g.fillStyle = '#f2d39a';
for (let i = 0; i < 9; i++) g.fillRect(w[0] + 0.03 + e.rnd() * 1.1, -1.05 - e.rnd() * 0.25, 0.02, 0.025);
g.fillStyle = '#eef0e8';
g.fillRect((w[0] + w[1]) / 2 - 0.02, -2.22, 0.04, 1.34);
// the print
g.fillStyle = '#c9b48a';
g.fillRect(2.6, -1.95, 0.8, 0.6);
g.fillStyle = '#8fb0c0';
g.fillRect(2.66, -1.89, 0.68, 0.48);
g.fillStyle = '#6f8f6a';
g.fillRect(2.66, -1.6, 0.68, 0.19);
