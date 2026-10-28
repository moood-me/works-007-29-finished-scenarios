// The deck's side railing along its right edge, from the deck (metres; x −1.9 at the house … 1.9 at the deck's
// front, the top rail at 0.95 m): white posts, top and bottom rails, square balusters.
g.fillStyle = '#e8e4da';
g.fillRect(-1.9, -0.95, 3.8, 0.1);
g.fillRect(-1.9, -0.14, 3.8, 0.06);
for (let x = -1.78; x < 1.82; x += 0.13) g.fillRect(x, -0.86, 0.035, 0.73);
for (const x of [-1.9, -0.05, 1.81]) g.fillRect(x, -1.0, 0.09, 1.0);
g.fillStyle = 'rgba(120,118,112,0.35)';
g.fillRect(-1.9, -0.86, 3.8, 0.012);
