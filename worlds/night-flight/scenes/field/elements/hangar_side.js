// The hangar's near side, outside: the same corrugated iron as its front, under the eave.
g.fillStyle = '#aeb3a5';
g.fillRect(-7, -7.45, 14, 7.45);
g.fillStyle = 'rgba(150,156,146,0.5)';
for (let x = -6.88; x < 7; x += 0.24) g.fillRect(x, -7.45, 0.07, 7.45);
g.fillStyle = '#5c6062';
g.fillRect(-7, -7.6, 14, 0.18);
const foot = g.createLinearGradient(0, -1.6, 0, 0);
foot.addColorStop(0, 'rgba(120,100,80,0)');
foot.addColorStop(1, 'rgba(110,92,74,0.55)');
g.fillStyle = foot;
g.fillRect(-7, -1.6, 14, 1.6);
