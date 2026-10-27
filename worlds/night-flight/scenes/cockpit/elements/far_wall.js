// The inside of the fuselage's far side, seen through the cockpits' openings: dark leather padding, the stringers'
// shadows, the instrument board before the front seat (its dials pale) — x and y as the fuselage's.
g.fillStyle = '#2f241c';
g.fillRect(-1.3, -1.44, 3.0, 0.84);
g.fillStyle = 'rgba(15,10,8,0.5)';
for (const y of [-1.3, -1.05]) g.fillRect(-1.3, y, 3.0, 0.03);
g.fillStyle = '#1e1813';
g.fillRect(-1.08, -1.42, 0.1, 0.5);
g.fillRect(0.5, -1.42, 0.1, 0.5);
