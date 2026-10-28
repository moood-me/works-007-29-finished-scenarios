// A house of the lower city: pale painted walls (each copy's tint gives its colour), a red tiled roof, small dark
// windows, a door
g.fillStyle = '#f2ece2';
g.fillRect(-4.5, -6.2, 9, 6.2);
g.fillStyle = '#b8563e';
g.beginPath();
g.moveTo(-5.1, -6);
g.lineTo(0, -9);
g.lineTo(5.1, -6);
g.closePath();
g.fill();
g.fillStyle = '#9a4532';
g.fillRect(-5.1, -6.2, 10.2, 0.4);
g.fillStyle = '#5a5248';
for (const x of [-3, -0.5, 2]) {
  g.fillRect(x, -5, 1, 1.3);
  g.fillRect(x, -2.6, 1, 1.3);
}
g.fillStyle = '#6e5440';
g.fillRect(3.2, -2.4, 0.9, 2.4);
