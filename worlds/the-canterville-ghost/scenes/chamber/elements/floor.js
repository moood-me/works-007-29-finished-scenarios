// The chamber's floor from above (6 m by 4.7 m, y toward the viewer): big worn flags of stone, grey with the dust of
// three hundred years, a little old straw rotted to brown along the far wall.
g.fillStyle = '#3a3733';
g.fillRect(-3.0, -2.35, 6.0, 4.7);
const tones = ['#55504a', '#4e4a45', '#5b5650', '#4a4642', '#58534c'];
for (let y = -2.35; y < 2.35; ) {
  const h = 0.5 + e.rnd() * 0.35;
  for (let x = -3.0 - e.rnd() * 0.5; x < 3.0; ) {
    const w = 0.5 + e.rnd() * 0.5;
    g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    g.fillRect(x + 0.02, y + 0.02, w - 0.04, h - 0.04);
    x += w;
  }
  y += h;
}
// dust, thick in the corners and along the walls
const dust = g.createLinearGradient(0, -2.35, 0, -1.4);
dust.addColorStop(0, 'rgba(104,98,88,0.5)');
dust.addColorStop(1, 'rgba(104,98,88,0)');
g.fillStyle = dust;
g.fillRect(-3.0, -2.35, 6.0, 0.95);
// old straw along the far wall
g.strokeStyle = '#6e5a3a';
g.lineWidth = 0.012;
for (let i = 0; i < 160; i++) {
  const x = -2.9 + e.rnd() * 5.8;
  const y = -2.32 + e.rnd() * e.rnd() * 0.6;
  const a = e.rnd() * Math.PI;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + Math.cos(a) * 0.12, y + Math.sin(a) * 0.05);
  g.stroke();
}
