// The passage beyond the library's doors, its far wall seen through them: plaster over a low oak dado, a candle in a
// sconce lighting it, an ancestor's dim portrait.
g.fillStyle = '#9c8f7c';
g.fillRect(-1.6, -3.02, 3.2, 3.04);
g.fillStyle = e.lib.OAK;
g.fillRect(-1.6, -1.0, 3.2, 1.0);
g.fillStyle = e.lib.OAK_LIGHT;
g.fillRect(-1.6, -1.04, 3.2, 0.05);
g.fillStyle = e.lib.OAK_DARK;
g.fillRect(-1.6, -0.12, 3.2, 0.12);
// the portrait
g.fillStyle = '#5a4424';
g.fillRect(-0.95, -2.35, 0.62, 0.8);
g.fillStyle = '#2e2418';
g.fillRect(-0.9, -2.3, 0.52, 0.7);
g.fillStyle = '#b08a6a';
g.beginPath();
g.ellipse(-0.64, -2.0, 0.07, 0.09, 0, 0, Math.PI * 2);
g.fill();
// the sconce and its candle
g.fillStyle = '#8a6a32';
g.fillRect(0.38, -1.82, 0.12, 0.04);
g.fillRect(0.42, -1.95, 0.04, 0.14);
g.fillStyle = '#efe8d6';
g.fillRect(0.425, -2.1, 0.03, 0.15);
g.fillStyle = '#ffd890';
g.beginPath();
g.ellipse(0.44, -2.13, 0.015, 0.03, 0, 0, Math.PI * 2);
g.fill();
e.light(0.44, -2.13, 0.12, '#ffcf8a', 0.8, 'candle');
