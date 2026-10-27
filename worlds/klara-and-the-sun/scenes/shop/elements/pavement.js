// The pavement from above (metres, its middle at distance 2; y toward the viewer, the far edge y −4.1 under the
// shop front): big pale stone slabs in courses along the street, a little uneven in tone, a narrow gutter of setts
// along the houses' feet.
g.fillStyle = '#b9b0a2';
g.fillRect(-15, -4.1, 30, 8.2);
const tones = ['#cfc7b9', '#c9c0b1', '#d5cdc0', '#c4bcae', '#d0c9bd'];
const H = 0.9;
for (let y = -3.8; y < 4.1; y += H) {
  let x = -15 - e.rnd() * 1.2;
  while (x < 15) {
    const w = 0.9 + e.rnd() * 0.6;
    g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    g.fillRect(x + 0.015, y + 0.015, w - 0.03, H - 0.03);
    x += w;
  }
}
g.fillStyle = '#a99f90';
g.fillRect(-15, -4.1, 30, 0.3);
for (let x = -15; x < 15; x += 0.2) {
  g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
  g.fillRect(x + 0.01, -4.08, 0.18, 0.12);
  g.fillRect(x + 0.11, -3.94, 0.18, 0.12);
}
