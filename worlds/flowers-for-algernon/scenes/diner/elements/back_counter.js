// The back counter behind Halloran, against the wall: a cabinet of brown-painted doors with chrome pulls, a steel
// edge to its top (the top itself is `back_counter_top`). Metres from its foot, x −1.5…1.5.
g.fillStyle = '#6e4a33';
g.fillRect(-1.5, -0.9, 3.0, 0.8);
g.fillStyle = '#1f1a17';
g.fillRect(-1.5, -0.1, 3.0, 0.1);
g.strokeStyle = '#563826';
g.lineWidth = 0.012;
for (let x = -1.5; x < 1.5; x += 0.5) g.strokeRect(x + 0.03, -0.86, 0.44, 0.72);
g.fillStyle = '#c4c7c3';
for (let x = -1.5; x < 1.5; x += 0.5) g.fillRect(x + 0.21, -0.82, 0.08, 0.02);
g.fillStyle = '#c9ccc8';
g.fillRect(-1.52, -0.96, 3.04, 0.06);
