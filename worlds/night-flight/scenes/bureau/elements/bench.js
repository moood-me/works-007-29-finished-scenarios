// The bench by the telegraph, under the window: a plain board seat on square legs worn pale at the edge; on it the
// pilot's gloves and his leather map case left where he got up.
g.fillStyle = '#5e4330';
g.fillRect(-0.95, -0.47, 1.9, 0.06);
g.fillStyle = '#4c3626';
g.fillRect(-0.95, -0.41, 1.9, 0.03);
for (const x of [-0.85, 0.79]) g.fillRect(x, -0.41, 0.06, 0.41);
g.fillRect(-0.85, -0.16, 1.7, 0.04);
g.fillStyle = '#7a6a54';
g.fillRect(-0.95, -0.475, 1.9, 0.01);
// the map case: a flat leather satchel leaning on the wall
g.fillStyle = '#6b4a32';
g.fillRect(0.2, -0.82, 0.42, 0.35);
g.fillStyle = '#4e3524';
g.fillRect(0.2, -0.82, 0.42, 0.08);
g.fillRect(0.38, -0.76, 0.06, 0.05);
// the gloves, a pair laid one on the other
g.fillStyle = '#4a3324';
g.beginPath();
g.ellipse(-0.35, -0.5, 0.13, 0.035, 0.1, 0, Math.PI * 2);
g.fill();
g.beginPath();
g.ellipse(-0.22, -0.52, 0.12, 0.03, -0.15, 0, Math.PI * 2);
g.fill();
