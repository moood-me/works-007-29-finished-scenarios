// The ceiling seen from below, laid face down from the far wall (y 0) toward the viewer (y −13.4): smoky plaster
// between dark oak beams across the corridor, a beam along each side.
g.fillStyle = '#8a7a62';
g.fillRect(-2.05, -13.4, 4.1, 13.45);
g.fillStyle = '#2a1c12';
for (let y = -0.3; y > -13.4; y -= 1.1) g.fillRect(-2.05, y - 0.2, 4.1, 0.2);
g.fillRect(-2.05, -13.4, 0.18, 13.45);
g.fillRect(1.87, -13.4, 0.18, 13.45);
