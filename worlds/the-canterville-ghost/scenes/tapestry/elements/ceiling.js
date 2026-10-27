// The ceiling seen from below, laid face down from the far wall (y 0) toward the viewer (y −4.6): smoky plaster
// between dark oak beams running across the room.
g.fillStyle = '#9a8a72';
g.fillRect(-3.25, -4.6, 6.5, 4.65);
g.fillStyle = '#2a1c12';
for (let y = -0.3; y > -4.6; y -= 1.1) g.fillRect(-3.25, y - 0.24, 6.5, 0.24);
