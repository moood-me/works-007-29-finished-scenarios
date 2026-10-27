// The low stone wall of the farmyard between the meadow and the house (14.5 m off, 0.9 m high), a gap in it before
// the back door, a water butt behind it on the right.
g.fillStyle = '#8f8a7c';
g.fillRect(-6.0, -0.9, 4.3, 0.9);
g.fillRect(0.0, -0.9, 7.5, 0.9);
g.fillStyle = 'rgba(70, 66, 58, 0.45)';
for (let x = -6.0; x < 7.5; x += 0.42) if (x < -1.7 || x > 0) g.fillRect(x, -0.9, 0.02, 0.9);
g.fillStyle = '#7d786b';
g.fillRect(-6.0, -0.98, 4.3, 0.1);
g.fillRect(0.0, -0.98, 7.5, 0.1);
for (const x of [-1.8, -0.1]) {
  g.fillStyle = '#6f6a5f';
  g.fillRect(x, -1.1, 0.2, 1.1);
}
g.fillStyle = '#5b4a38';
g.fillRect(2.6, -1.25, 0.7, 0.35);
