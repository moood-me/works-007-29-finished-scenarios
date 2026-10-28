// An elm in the schoolyard in its first leaves: a dark trunk forking into branches, and clumps of small young leaves,
// greener at the tips, each clump a layer stirring in the evening wind. Metres from its foot.
g.strokeStyle = '#3b3530';
g.lineCap = 'round';
const limbs = [[0, 0, 0, -3.2, 0.34], [0, -3.2, -1.6, -6.2, 0.2], [0, -3.2, 1.4, -6.6, 0.2], [0, -3.2, 0.1, -7.6, 0.18],
  [-1.6, -6.2, -2.8, -7.6, 0.1], [1.4, -6.6, 2.6, -7.8, 0.1], [0.1, -7.6, -0.6, -9.2, 0.08], [0.1, -7.6, 0.9, -9.0, 0.08]];
for (const [x0, y0, x1, y1, w] of limbs) {
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(x0, y0);
  g.lineTo(x1, y1);
  g.stroke();
}
const clumps = [[-2.6, -7.8], [-1.5, -6.6], [1.4, -6.9], [2.5, -8.0], [-0.5, -9.2], [0.8, -9.0], [0.1, -8.0], [-1.0, -8.4], [1.8, -8.6]];
clumps.forEach(([cx, cy], k) => {
  e.layer(`leaves${k}`, { pivot: [cx * 0.6, cy + 1.2], wind: { strength: 0.35, gust: 0.4 } }, c => {
    for (let i = 0; i < 46; i++) {
      const a = e.rnd() * Math.PI * 2, r = Math.sqrt(e.rnd()) * 0.95;
      const x = cx + Math.cos(a) * r * 1.2, y = cy + Math.sin(a) * r * 0.8;
      c.fillStyle = y > cy + 0.2 ? '#4f6a36' : e.rnd() < 0.5 ? '#7c9a4a' : '#93ad58';
      c.beginPath();
      c.ellipse(x, y, 0.13, 0.09, e.rnd() * 3, 0, Math.PI * 2);
      c.fill();
    }
  });
});
