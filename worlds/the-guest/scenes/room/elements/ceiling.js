// The ceiling seen from below (the card laid face down, its foot at the back wall, y −5.2 the end nearest the viewer):
// whitewashed reed between square beams of dark wood running across the room; the soot round the stovepipe's hole
// (across 0.75, half a metre from the back wall).
g.fillStyle = '#ddd6c7';
g.fillRect(-2.55, -5.25, 5.1, 5.3);
// the reeds under the lime, along the room
for (let x = -2.5; x < 2.5; x += 0.035) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(190,180,160,0.25)' : 'rgba(240,236,226,0.3)';
  g.fillRect(x, -5.25, 0.018, 5.3);
}
// the soot over the stove
const soot = g.createRadialGradient(0.75, -0.55, 0.05, 0.75, -0.55, 0.9);
soot.addColorStop(0, 'rgba(40,34,30,0.75)');
soot.addColorStop(1, 'rgba(40,34,30,0)');
g.fillStyle = soot;
g.fillRect(-0.3, -1.6, 2.1, 1.62);
// the beams
for (const y of [-0.45, -1.4, -2.35, -3.3, -4.25, -5.15]) {
  g.fillStyle = '#4b3a2c';
  g.fillRect(-2.55, y - 0.08, 5.1, 0.16);
  g.fillStyle = 'rgba(25,18,12,0.45)';
  g.fillRect(-2.55, y + 0.04, 5.1, 0.04);
}
// the pipe's hole: a tin collar
g.fillStyle = '#2a2826';
g.beginPath();
g.arc(0.75, -0.55, 0.09, 0, Math.PI * 2);
g.fill();
