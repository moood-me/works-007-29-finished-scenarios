// The bare plateau outside, seen through the door and the window: dry dun earth, sparse grass. Seen from above, y
// toward the viewer (800 m by 320 m)
g.fillStyle = '#8f8068';
g.fillRect(-400, -160, 800, 320);
const tones = ['#9a8a70', '#857660', '#a39377'];
for (let i = 0; i < 900; i++) {
  g.fillStyle = tones[i % 3];
  const x = -400 + e.rnd() * 800, y = -160 + e.rnd() * 320, w = 0.6 + e.rnd() * 3;
  g.fillRect(x, y, w, w * 0.4);
}
