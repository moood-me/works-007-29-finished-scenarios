// The little stair window's day (x −0.3…0.3, y −1.0 … 0): a pale sky, a birch's twigs
g.fillStyle = '#eef0ee';
g.fillRect(-0.3, -1.0, 0.6, 1.0);
g.beginPath();
g.moveTo(-0.3, -0.2);
g.quadraticCurveTo(-0.05, -0.35, 0.3, -0.62);
g.moveTo(-0.1, -0.3);
g.lineTo(-0.02, -0.55);
g.strokeStyle = 'rgba(110,100,90,0.6)';
g.lineWidth = 0.008;
g.stroke();
