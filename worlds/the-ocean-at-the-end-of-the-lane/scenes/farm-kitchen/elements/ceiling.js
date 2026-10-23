// The ceiling seen from below (laid face down from the top of the back wall: y 0 there, −6.8 at the front): yellowed
// plaster between dark oak joists running across the room, and one great beam along it.
g.fillStyle = '#d8ccb2';
g.fillRect(-3.45, -6.8, 6.9, 6.82);
const smoke = g.createLinearGradient(2.0, 0, 3.45, 0);
smoke.addColorStop(0, 'rgba(110, 90, 70, 0)');
smoke.addColorStop(1, 'rgba(110, 90, 70, 0.4)');
g.fillStyle = smoke;
g.fillRect(2.0, -6.8, 1.45, 6.82);
g.fillStyle = '#4d3524';
for (let y = -0.55; y > -6.8; y -= 0.62) g.fillRect(-3.45, y - 0.06, 6.9, 0.12);
g.fillStyle = '#3e2a1c';
g.fillRect(-0.85, -6.8, 0.26, 6.82);
