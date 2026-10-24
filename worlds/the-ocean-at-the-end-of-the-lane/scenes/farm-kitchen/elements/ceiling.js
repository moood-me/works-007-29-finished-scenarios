// The ceiling seen from below (laid face down from the top of the back wall: y 0 there, -5.5 at the front): yellowed
// plaster between dark oak joists running across the room, one great beam along it, smoke-darkened over the range.
g.fillStyle = '#ddd1b6';
g.fillRect(-2.95, -5.5, 5.9, 5.52);
const smoke = g.createRadialGradient(1.85, -0.2, 0, 1.85, -0.2, 1.6);
smoke.addColorStop(0, 'rgba(110, 90, 70, 0.45)');
smoke.addColorStop(1, 'rgba(110, 90, 70, 0)');
g.fillStyle = smoke;
g.fillRect(0.25, -1.8, 2.7, 1.82);
g.fillStyle = '#4d3524';
for (let y = -0.5; y > -5.5; y -= 0.62) g.fillRect(-2.95, y - 0.06, 5.9, 0.12);
g.fillStyle = '#3e2a1c';
g.fillRect(-0.68, -5.5, 0.26, 5.52);
