// The room's ceiling, laid face down (x across, y toward the viewer from the back wall): white plaster, a milk-glass
// light in the middle, and over the bed a dozen of the stick-on stars children put up, pale yellow-green (peeled off
// once the room is emptied).
g.fillStyle = '#f1ede4';
g.fillRect(-1.78, -2.17, 3.56, 2.2);
g.fillStyle = 'rgba(160,150,140,0.1)';
g.fillRect(-1.78, -2.17, 3.56, 0.8);
g.fillStyle = '#e8e2d4';
g.beginPath();
g.arc(0.14, -1.0, 0.09, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#f7f4ec';
g.beginPath();
g.arc(0.14, -1.0, 0.065, 0, Math.PI * 2);
g.fill();
if (!e.state.packed) {
  g.fillStyle = '#e4ecb8';
  for (let i = 0; i < 12; i++) {
    const x = -1.65 + e.rnd() * 0.85,
      y = -1.6 + e.rnd() * 1.4,
      r = 0.02 + e.rnd() * 0.015;
    g.beginPath();
    for (let k = 0; k < 10; k++) {
      const a = -Math.PI / 2 + (k * Math.PI) / 5,
        rr = k % 2 ? r * 0.42 : r;
      g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
    }
    g.closePath();
    g.fill();
  }
}
