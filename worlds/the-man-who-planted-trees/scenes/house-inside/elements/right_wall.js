// The right wall (4.8 m along the room, +x running toward the viewer: x = 3.0 − distance): whitewashed stone, and in it
// the hearth (about 4.3 m away): a stone surround, a black opening, an iron pot on its chain over the embers — the fire
// itself is `fire`; a stool of firewood stacked beside it
e.lib.lime(g, -2.42, 2.42, 2.52, 5);
// the surround and the mantel
g.fillStyle = '#b8ab94';
g.fillRect(-1.95, -1.35, 1.3, 1.35);
g.fillStyle = '#a3967e';
g.fillRect(-2.05, -1.45, 1.5, 0.12);
// the opening, black with soot
g.fillStyle = '#231b16';
g.beginPath();
g.moveTo(-1.8, 0);
g.lineTo(-1.8, -0.82);
g.quadraticCurveTo(-1.3, -1.02, -0.8, -0.82);
g.lineTo(-0.8, 0);
g.closePath();
g.fill();
// the pot on its chain
g.strokeStyle = '#1a1614';
g.lineWidth = 0.015;
g.beginPath();
g.moveTo(-1.3, -0.95);
g.lineTo(-1.3, -0.5);
g.stroke();
g.fillStyle = '#2a2624';
g.beginPath();
g.ellipse(-1.3, -0.38, 0.17, 0.13, 0, 0, Math.PI * 2);
g.fill();
// firewood stacked by the hearth
g.fillStyle = '#6a5038';
for (let i = 0; i < 5; i++) {
  g.beginPath();
  g.roundRect(-0.55 + (i % 2) * 0.06, -0.1 - i * 0.09, 0.42, 0.085, 0.04);
  g.fill();
}
