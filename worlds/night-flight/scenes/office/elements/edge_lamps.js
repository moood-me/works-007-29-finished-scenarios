// One of the lamps along the field's edge: a short post, a warm glass globe; its glow by the floodlights' key (animate).
g.fillStyle = '#3a3e44';
g.fillRect(-0.03, -0.5, 0.06, 0.5);
g.fillStyle = '#ffd9a0';
g.beginPath();
g.arc(0, -0.55, 0.08, 0, Math.PI * 2);
g.fill();
e.light(0, -0.55, 0.6, '#ffcf8a', 0.7);
