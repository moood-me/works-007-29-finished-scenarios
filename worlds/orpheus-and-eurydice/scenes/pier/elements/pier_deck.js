// The pier's deck from above (x along the pier, −8 at the shore end off the left of the view … 8 at its end out in
// the lake; y toward the viewer, its near edge at 0.85): weathered planks laid across it, each its own grey-brown, the
// gaps between them dark, a nail head at each end of a plank.
g.fillStyle = '#2c2621';
g.fillRect(-8, -0.85, 16, 1.7);
for (let i = 0, x = -8; x < 8; i++) {
  const w = 0.17 + 0.03 * e.anim.hash(i, 81), t = e.anim.hash(i, 82);
  g.fillStyle = t > 0.66 ? '#8d8070' : t > 0.33 ? '#83755f' : '#7a6d5c';
  g.fillRect(x + 0.012, -0.85, Math.min(w, 8 - x) - 0.024, 1.7);
  g.fillStyle = 'rgba(60,50,40,0.35)';
  g.fillRect(x + 0.04, -0.85 + 1.7 * e.anim.hash(i, 83), w * 0.5, 0.008);
  g.fillStyle = '#3a332c';
  for (const y of [-0.72, 0.72]) {
    g.beginPath();
    g.arc(x + w / 2, y, 0.012, 0, Math.PI * 2);
    g.fill();
  }
  x += w;
}
// the pier's end: a darker beam across it
g.fillStyle = '#5e5245';
g.fillRect(7.84, -0.85, 0.16, 1.7);
