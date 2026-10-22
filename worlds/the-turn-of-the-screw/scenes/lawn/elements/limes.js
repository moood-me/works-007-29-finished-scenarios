// A lime of the avenue: a straight grey trunk, the crown a tall oval of leaf — a solid mass of the darker green, its
// clumps of a few close greens over it, smaller toward the edge (metres: x across from the trunk, y up from the
// ground); the crown stirs in the evening air.
g.fillStyle = '#625749';
g.beginPath();
g.moveTo(-0.32, 0);
g.lineTo(-0.2, -7);
g.lineTo(0.2, -7);
g.lineTo(0.34, 0);
g.closePath();
g.fill();
g.strokeStyle = '#625749';
g.lineCap = 'round';
for (const [x2, y2] of [[-1.6, -9.5], [1.4, -10], [-0.6, -12], [0.8, -12.5]]) {
  g.lineWidth = 0.14;
  g.beginPath();
  g.moveTo(0, -6.5);
  g.lineTo(x2, y2);
  g.stroke();
}
e.layer('crown', { pivot: [0, -6.5], wind: { strength: 0.18, gust: 0.5 }, box: [-5, -18, 5, -4.5] }, c => {
  // the mass: lobes round the oval's edge, filled as one
  c.fillStyle = '#41592c';
  c.beginPath();
  c.ellipse(0, -11.6, 3.5, 5.4, 0, 0, Math.PI * 2);
  c.fill();
  for (let i = 0; i < 26; i++) {
    const a = (i / 26) * Math.PI * 2 + e.rnd() * 0.2;
    c.beginPath();
    c.arc(Math.cos(a) * 3.3, -11.6 + Math.sin(a) * 5.2, 0.7 + e.rnd() * 0.5, 0, Math.PI * 2);
    c.fill();
  }
  // the clumps of leaf over it, lighter toward the top, where more of the sky's light falls
  for (let i = 0; i < 320; i++) {
    const a = e.rnd() * Math.PI * 2;
    const r = Math.sqrt(e.rnd());
    const x = Math.cos(a) * r * 3.6;
    const y = -11.6 + Math.sin(a) * r * 5.5;
    const up = (-y - 6) / 12;
    const tones = up > 0.55 ? ['#5a7a3a', '#4f6d33', '#64843f'] : ['#4a6630', '#41592c', '#53723a'];
    c.fillStyle = tones[Math.floor(e.rnd() * 3)];
    c.beginPath();
    c.ellipse(x, y, 0.32 + e.rnd() * 0.36, 0.24 + e.rnd() * 0.26, e.rnd() * 3, 0, Math.PI * 2);
    c.fill();
  }
});
