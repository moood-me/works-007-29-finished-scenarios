// The hall's ceiling seen from below, laid face down from the far wall (y 0) toward the viewer (y −8): great dark oak
// beams across on smoky plaster, a beam along the middle, a boss at each crossing, the chandelier's hook.
g.fillStyle = '#8a7a62';
g.fillRect(-5.62, -8.0, 11.24, 8.02);
g.fillStyle = '#2e1f14';
for (let y = -0.3; y > -8.0; y -= 1.3) g.fillRect(-5.62, y - 0.3, 11.24, 0.3);
g.fillRect(-0.18, -8.0, 0.36, 8.02);
g.fillStyle = '#3e2a1a';
for (let y = -0.3; y > -8.0; y -= 1.3) {
  g.beginPath();
  g.arc(0, y - 0.15, 0.24, 0, Math.PI * 2);
  g.fill();
}
