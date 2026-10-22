// The hearthstone before the fireplace, from above (0.9 m across, 2.4 m along the wall): grey slabs, sooty toward the
// fire.
g.fillStyle = '#4c4844';
g.fillRect(-0.45, -1.2, 0.9, 2.4);
g.strokeStyle = '#34312e';
g.lineWidth = 0.02;
for (let y = -1.2; y < 1.2; y += 0.6) g.strokeRect(-0.45, y, 0.9, 0.6);
g.fillStyle = 'rgba(20,16,14,0.45)';
g.fillRect(0.15, -0.7, 0.3, 1.4);
