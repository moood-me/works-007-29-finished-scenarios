// The hangar's roof seen from inside, laid face down (its foot at the back wall, y up toward the gates): planks
// running back, and the steel trusses across them every three metres.
g.fillStyle = '#6f6556';
g.fillRect(-10.4, -14.05, 20.8, 14.1);
g.fillStyle = 'rgba(92,84,72,0.6)';
for (let x = -10.2; x < 10.4; x += 0.4) g.fillRect(x, -14.05, 0.04, 14.1);
g.fillStyle = '#3f4245';
for (let y = -1.5; y > -14; y -= 3) g.fillRect(-10.4, y, 20.8, 0.18);
