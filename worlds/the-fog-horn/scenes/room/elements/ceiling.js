// The ceiling, seen from below (the card laid face down, its foot at the back of the room, y −6.5 the end nearest the
// viewer): boards, and the round room's beams running out from an iron ring in its middle (at y −3.15) to the wall.
const CY = -3.15;
g.fillStyle = '#b6a893';
g.fillRect(-3.3, -6.5, 6.6, 6.55);
g.strokeStyle = '#a29481';
g.lineWidth = 0.015;
for (let y = -6.5; y < 0; y += 0.16) {
  g.beginPath();
  g.moveTo(-3.3, y);
  g.lineTo(3.3, y);
  g.stroke();
}
for (let i = 0; i < 30; i++) {
  g.fillStyle = 'rgba(150,134,112,0.3)';
  g.fillRect(-3.2 + e.rnd() * 6.4, -6.4 + e.rnd() * 6.3, 0.4 + e.rnd() * 0.8, 0.16);
}
// eight beams from the ring to the wall
g.fillStyle = '#5f4b3a';
for (let k = 0; k < 8; k++) {
  const a = (k / 8) * Math.PI * 2 + Math.PI / 8;
  g.save();
  g.translate(0, CY);
  g.rotate(a);
  g.fillRect(0, -0.07, 3.3, 0.14);
  g.restore();
}
// the iron ring the beams meet in
g.fillStyle = '#3a3533';
g.beginPath();
g.arc(0, CY, 0.24, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#4c4642';
g.beginPath();
g.arc(0, CY, 0.12, 0, Math.PI * 2);
g.fill();
// where the stove's pipe goes up through it: a sooted iron collar
g.fillStyle = 'rgba(70,60,52,0.5)';
g.beginPath();
g.ellipse(-2.39, -2.11, 0.28, 0.28, 0, 0, Math.PI * 2);
g.fill();
