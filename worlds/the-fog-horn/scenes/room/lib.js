// What the room's wall pieces share: the whitewashed stone of the tower's inside, painted dark sea-green to the height
// of a hand (the dado), in metres from the foot of a piece x0…x1 wide and 2.92 high.
function wall(g, e, x0, x1) {
  const w = x1 - x0;
  g.fillStyle = '#dcd4c6';
  g.fillRect(x0, -2.92, w, 2.94);
  // the stone's courses under the whitewash, faint
  g.strokeStyle = '#d0c7b7';
  g.lineWidth = 0.02;
  for (let k = 0, y = -2.75; y < -1.1; y += 0.34, k++) {
    g.beginPath();
    g.moveTo(x0, y);
    g.lineTo(x1, y);
    g.stroke();
    for (let x = x0 + (k % 2) * 0.27 + 0.1; x < x1; x += 0.54) {
      g.beginPath();
      g.moveTo(x, y);
      g.lineTo(x, y + 0.34);
      g.stroke();
    }
  }
  // the whitewash worn here and there
  for (let i = 0; i < 6; i++) {
    g.fillStyle = e.rnd() < 0.5 ? 'rgba(196,186,170,0.35)' : 'rgba(238,233,224,0.5)';
    g.beginPath();
    g.ellipse(x0 + e.rnd() * w, -2.7 + e.rnd() * 1.5, 0.08 + e.rnd() * 0.18, 0.05 + e.rnd() * 0.1, 0, 0, Math.PI * 2);
    g.fill();
  }
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
}
return { wall };
