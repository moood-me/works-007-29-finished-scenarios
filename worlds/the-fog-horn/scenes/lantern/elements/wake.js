// The water about him, seen from above (metres, its middle at the foot of his neck): pale rings spreading on the sea
// round the neck and a wash of foam along his back — one layer, `ring`, breathed and faded by its animate.
e.layer('ring', { pivot: [0, 0] }, g => {
  g.strokeStyle = 'rgba(226,232,238,0.42)';
  for (const [r, w] of [[2.3, 0.22], [3.4, 0.16], [4.8, 0.12], [6.4, 0.08]]) {
    g.lineWidth = w;
    g.beginPath();
    g.arc(0, 0, r, 0, Math.PI * 2);
    g.stroke();
  }
  g.fillStyle = 'rgba(230,236,240,0.3)';
  for (let i = 0; i < 14; i++) {
    g.beginPath();
    g.ellipse(2 + e.rnd() * 11, -0.6 + e.rnd() * 1.6, 0.4 + e.rnd() * 0.9, 0.15 + e.rnd() * 0.3, 0, 0, Math.PI * 2);
    g.fill();
  }
});
