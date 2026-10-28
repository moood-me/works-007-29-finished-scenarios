// The floor of the shop window from above (metres, its middle; y toward the viewer, the glass at y 0.72): pale
// painted boards running along the window, a low ivory step at its back down into the shop.
g.fillStyle = '#e4dccb';
g.fillRect(-2.0, -0.72, 4.0, 1.44);
const tones = ['#e8e0d0', '#e1d8c6', '#ebe4d6', '#ddd4c2'];
for (let y = -0.72; y < 0.72; y += 0.12) {
  let x = -2.0 - e.rnd() * 1.0;
  while (x < 2.0) {
    const len = 0.9 + e.rnd() * 1.3;
    g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    g.fillRect(x + 0.004, y + 0.004, len - 0.008, 0.112);
    x += len;
  }
}
g.fillStyle = '#d2c8b4';
g.fillRect(-2.0, -0.72, 4.0, 0.05);
