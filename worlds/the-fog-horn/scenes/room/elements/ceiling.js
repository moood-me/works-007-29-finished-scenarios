// The ceiling, seen from below (the card laid face down, its foot at the back of the room, y −6.5 the end nearest the
// viewer): boards running back, and three heavy beams across the room.
g.fillStyle = '#b6a893';
g.fillRect(-3.3, -6.5, 6.6, 6.55);
g.strokeStyle = '#a49683';
g.lineWidth = 0.012;
for (let x = -3.3; x < 3.3; x += 0.15) {
  g.beginPath();
  g.moveTo(x, -6.5);
  g.lineTo(x, 0.05);
  g.stroke();
}
for (let i = 0; i < 30; i++) {
  g.fillStyle = 'rgba(150,134,112,0.25)';
  g.fillRect(-3.2 + Math.floor(e.rnd() * 42) * 0.15, -6.4 + e.rnd() * 5, 0.15, 0.4 + e.rnd() * 0.8);
}
g.fillStyle = '#5f4b3a';
for (const y of [-1.1, -2.9, -4.7]) g.fillRect(-3.3, y - 0.09, 6.6, 0.18);
g.fillStyle = 'rgba(40,30,22,0.25)';
for (const y of [-1.1, -2.9, -4.7]) g.fillRect(-3.3, y + 0.06, 6.6, 0.03);
// where the stove's pipe goes up through it: a sooted collar
g.fillStyle = 'rgba(70,60,52,0.5)';
g.beginPath();
g.ellipse(-2.39, -2.11, 0.22, 0.22, 0, 0, Math.PI * 2);
g.fill();
