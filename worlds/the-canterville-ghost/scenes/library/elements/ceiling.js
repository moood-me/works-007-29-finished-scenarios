// The ceiling seen from below, laid face down from the far wall (y 0) toward the viewer (y −7.1): dark oak beams
// across the room on a smoky plaster, a moulded boss at each crossing with the beam along the middle.
g.fillStyle = '#8a7a62';
g.fillRect(-4.05, -7.1, 8.1, 7.15);
g.fillStyle = '#2a1c12';
for (let y = -0.2; y > -7.1; y -= 0.9) g.fillRect(-4.05, y - 0.22, 8.1, 0.22);
g.fillRect(-0.15, -7.1, 0.3, 7.15);
g.fillStyle = '#3b2819';
for (let y = -0.2; y > -7.1; y -= 0.9) {
  g.beginPath();
  g.arc(0, y - 0.11, 0.2, 0, Math.PI * 2);
  g.fill();
}
