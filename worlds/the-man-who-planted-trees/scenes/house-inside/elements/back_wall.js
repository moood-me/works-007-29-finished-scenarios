// The back wall (6 m wide, 2.5 m high): whitewashed stone, and in it the one window (x 0.8…1.7, 1.05…2.0 m up) cut
// through — the casement in it is `window`, its reveal `reveal`, `sill`; left of it a plank shelf with a jug and two
// bowls
e.lib.lime(g, -3.05, 3.05, 2.52, 1);
g.globalCompositeOperation = 'destination-out';
g.fillRect(0.8, -2.0, 0.9, 0.95);
g.globalCompositeOperation = 'source-over';
// the shelf
g.fillStyle = '#6a5038';
g.fillRect(-2.3, -1.62, 1.3, 0.05);
g.fillStyle = '#4c3a2a';
g.fillRect(-2.2, -1.57, 0.04, 0.12);
g.fillRect(-1.14, -1.57, 0.04, 0.12);
// a jug and two bowls on it
g.fillStyle = '#a8784e';
g.beginPath();
g.moveTo(-2.05, -1.62);
g.quadraticCurveTo(-2.16, -1.75, -2.08, -1.86);
g.lineTo(-1.92, -1.86);
g.quadraticCurveTo(-1.84, -1.75, -1.95, -1.62);
g.closePath();
g.fill();
g.fillStyle = '#c9bca2';
g.fillRect(-1.75, -1.7, 0.22, 0.08);
g.fillRect(-1.48, -1.69, 0.2, 0.07);
