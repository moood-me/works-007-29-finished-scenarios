// The fridge's left side (x -0.325 at the front ... 0.325 at the wall): plain cream enamel, rounded at the top front.
g.fillStyle = '#e2dbc5';
g.beginPath();
g.roundRect(-0.325, -1.45, 0.65, 1.45, [0.08, 0.02, 0, 0]);
g.fill();
g.fillStyle = '#2f2c2a';
g.fillRect(-0.325, -0.06, 0.65, 0.06);
