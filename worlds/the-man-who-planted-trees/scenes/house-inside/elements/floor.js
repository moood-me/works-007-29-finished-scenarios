// The floor from above (6 m by 4.8 m, y toward the viewer): big pale flags of stone, swept clean; a rag rug of faded
// stripes under the table
g.fillStyle = '#8c7f6c';
g.fillRect(-3.0, -2.4, 6.0, 4.8);
const tones = ['#b3a58e', '#ab9d86', '#b8ab94', '#a6987f', '#afa18a'];
for (let y = -2.4; y < 2.4;) {
  const h = 0.45 + e.rnd() * 0.3;
  for (let x = -3.0 - e.rnd() * 0.5; x < 3.0;) {
    const w = 0.5 + e.rnd() * 0.45;
    g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    g.beginPath();
    g.roundRect(x + 0.02, y + 0.02, w - 0.04, h - 0.04, 0.04);
    g.fill();
    x += w;
  }
  y += h;
}
// the rug under the table (across −1.4…1.0, 2.75…4.35 m away: y from −0.95 to 0.65)
const RUG = ['#7a5a48', '#8c7656', '#6a6250', '#9a6a50'];
for (let i = 0; i < 12; i++) {
  g.fillStyle = RUG[i % RUG.length];
  g.fillRect(-1.4, -0.95 + i * 0.1333, 2.4, 0.1333);
}
