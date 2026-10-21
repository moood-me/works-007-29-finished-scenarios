// What the room's wall pieces share: the whitewashed stone of the tower's inside, painted dark sea-green to the height
// of a hand (the dado), in metres from the foot of a piece x0…x1 wide and 2.92 high (nothing past it).
function wall(g, e, x0, x1) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -2.92, w, 2.94);
  g.clip();
  g.fillStyle = '#dcd4c6';
  g.fillRect(x0, -2.92, w, 2.94);
  // the whitewash uneven over the stone: soft paler and greyer patches, a faint course line here and there
  for (let i = 0; i < 7; i++) {
    g.fillStyle = e.rnd() < 0.5 ? 'rgba(200,190,174,0.3)' : 'rgba(236,231,222,0.45)';
    g.beginPath();
    g.ellipse(x0 + e.rnd() * w, -2.7 + e.rnd() * 1.5, 0.1 + e.rnd() * 0.25, 0.04 + e.rnd() * 0.08, 0, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = 'rgba(196,186,170,0.35)';
  for (let i = 0; i < 3; i++) g.fillRect(x0 + e.rnd() * w * 0.5, -2.6 + i * 0.5 + e.rnd() * 0.2, 0.2 + e.rnd() * 0.5, 0.015);
  // the dado: sea-green paint to 1.05 m, a darker line at its top, the scuffed foot
  g.fillStyle = '#5f6d6a';
  g.fillRect(x0, -1.05, w, 1.07);
  g.fillStyle = '#4b5754';
  g.fillRect(x0, -1.08, w, 0.04);
  g.fillStyle = '#48504d';
  g.fillRect(x0, -0.09, w, 0.11);
  for (let i = 0; i < 5; i++) {
    g.fillStyle = 'rgba(120,132,128,0.45)';
    g.fillRect(x0 + e.rnd() * w, -0.95 + e.rnd() * 0.8, 0.04 + e.rnd() * 0.12, 0.015);
  }
  g.restore();
}
return { wall };
