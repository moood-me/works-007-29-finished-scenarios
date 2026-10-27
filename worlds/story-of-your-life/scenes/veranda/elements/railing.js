// The deck's front railing, from the deck (metres; x −3.9…3.9, the top rail at 0.95 m): white posts, top and bottom
// rails, square balusters; open in the middle (x −0.6…0.6) where the steps go down.
g.fillStyle = '#e8e4da';
for (const [x0, x1] of [[-3.9, -0.6], [0.6, 3.9]]) {
  g.fillRect(x0, -0.95, x1 - x0, 0.1);
  g.fillRect(x0, -0.14, x1 - x0, 0.06);
  for (let x = x0 + 0.12; x < x1 - 0.1; x += 0.13) g.fillRect(x, -0.86, 0.035, 0.73);
  for (const x of [x0, x1 - 0.09]) g.fillRect(x, -1.0, 0.09, 1.0);
  g.fillStyle = 'rgba(120,118,112,0.35)';
  g.fillRect(x0, -0.86, x1 - x0, 0.012);
  g.fillStyle = '#e8e4da';
}
