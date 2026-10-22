// The lamp at the end of the landing stage, where the boat is tied: a post, a small lantern on it
g.fillStyle = '#2d2a28';
g.fillRect(-0.05, -2.0, 0.1, 2.0);
g.fillRect(-0.12, -2.02, 0.24, 0.05);
g.fillStyle = '#ffd090';
g.fillRect(-0.09, -2.3, 0.18, 0.26);
g.fillStyle = '#2d2a28';
g.beginPath();
g.moveTo(-0.13, -2.3);
g.lineTo(0, -2.42);
g.lineTo(0.13, -2.3);
g.closePath();
g.fill();
e.light(0, -2.17, 0.3, '#ffc580', 0.9, 'flame');
