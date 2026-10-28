// The ballroom's floor from above (7 m by 5.85 m, its middle the room's, y toward the viewer): waxed parquet laid in
// a herringbone of honey and amber oak, a dark border round the walls; polished, it mirrors the room a little
// ("reflect").
g.fillStyle = '#6b4a2c';
g.fillRect(-3.55, -2.93, 7.1, 5.86);
const tones = ['#b58a55', '#a77d4a', '#bf955f', '#9f7444'];
const L = 0.6;
const W = 0.15;
g.save();
g.beginPath();
g.rect(-3.3, -2.68, 6.6, 5.36);
g.clip();
for (let col = -5; col <= 5; col++) {
  const x = col * L * 0.7071 * 2;
  for (let y = -3.2; y < 3.2; y += W * 1.4142) {
    for (const s of [-1, 1]) {
      g.save();
      g.translate(x + s * L * 0.3536, y);
      g.rotate(s * Math.PI / 4);
      g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
      g.fillRect(-L / 2 + 0.004, -W / 2 + 0.004, L - 0.008, W - 0.008);
      g.restore();
    }
  }
}
g.restore();
g.strokeStyle = '#4e3520';
g.lineWidth = 0.04;
g.strokeRect(-3.3, -2.68, 6.6, 5.36);
