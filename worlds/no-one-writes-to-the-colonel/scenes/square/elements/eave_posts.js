// The two posts that hold the eave's outer edge (metres from their feet), rough-squared and grey, and the beam along
// the top they carry.
g.fillStyle = '#6a5a4a';
for (const x of [-3.6, 3.55]) {
  g.fillRect(x - 0.06, -2.88, 0.12, 2.9);
  g.fillStyle = 'rgba(40,32,26,0.35)';
  g.fillRect(x + 0.02, -2.88, 0.04, 2.9);
  g.fillStyle = '#6a5a4a';
}
g.fillStyle = '#5c4a3a';
g.fillRect(-3.75, -2.96, 7.5, 0.1);
