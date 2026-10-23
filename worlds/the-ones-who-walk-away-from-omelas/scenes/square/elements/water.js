// The water in the basin, seen from above: a disc 1.45 m round, green-blue over the pale stone of its floor; a mirror
// broken by small ripples where the fountain's water falls
const g2 = g.createRadialGradient(0, 0, 0.2, 0, 0, 1.45);
g2.addColorStop(0, '#87b3b6');
g2.addColorStop(1, '#6f9ea6');
g.fillStyle = g2;
g.beginPath();
g.arc(0, 0, 1.45, 0, Math.PI * 2);
g.fill();
