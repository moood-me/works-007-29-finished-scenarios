// The maple in the hospital garden, 11 m off, rooted 9 m below the ward's floor (metres from its foot): a dark trunk
// and branches, its crown — what the window shows of it — half bare, the rest of its leaves orange and gold in clumps
// (a layer that sways in the wind).
g.strokeStyle = '#3c3236';
g.lineCap = 'round';
const branch = (x, y, a, len, w) => {
  if (len < 0.4) return;
  const x2 = x + Math.sin(a) * len,
    y2 = y - Math.cos(a) * len;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x2, y2);
  g.stroke();
  branch(x2, y2, a - 0.45 + e.rnd() * 0.2, len * 0.72, w * 0.66);
  branch(x2, y2, a + 0.4 + e.rnd() * 0.2, len * 0.68, w * 0.62);
};
branch(0, 0, 0, 4.5, 0.45);
e.layer('crown', { pivot: [0, -6], wind: { strength: 0.25, gust: 0.4 } }, l => {
  for (let i = 0; i < 70; i++) {
    const a = e.rnd() * Math.PI * 2,
      r = Math.sqrt(e.rnd()) * 4.2,
      x = Math.cos(a) * r * 1.1,
      y = -8 + Math.sin(a) * r * 0.85;
    l.fillStyle = ['#d98a3a', '#c4622e', '#e2b04a', '#b95a34'][i % 4];
    l.globalAlpha = 0.85;
    l.beginPath();
    l.ellipse(x, y, 0.35 + e.rnd() * 0.5, 0.25 + e.rnd() * 0.35, e.rnd() * 3, 0, Math.PI * 2);
    l.fill();
  }
  l.globalAlpha = 1;
});
