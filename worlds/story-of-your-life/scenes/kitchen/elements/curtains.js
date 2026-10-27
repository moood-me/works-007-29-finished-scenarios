// Two café curtains on a rod across the window's top (x −0.84…0.84, from the rod at 1.12 m above the sill down to
// 0.62 m): pale linen, gathered, each its own layer stirring in the draught from the open top sash.
g.fillStyle = '#9c8a6c';
g.fillRect(-0.84, -1.14, 1.68, 0.02);
const panel = (x0, x1) => {
  e.layer(x0 < 0 ? 'left' : 'right', { pivot: [(x0 + x1) / 2, -1.12], wind: { strength: 0.08, gust: 0.5 }, box: [x0 - 0.05, -1.14, x1 + 0.05, -0.5] }, c => {
    c.fillStyle = '#efe4c8';
    c.beginPath();
    c.moveTo(x0, -1.12);
    c.lineTo(x1, -1.12);
    c.quadraticCurveTo(x1 + 0.01, -0.85, x1 - 0.02, -0.56);
    c.lineTo(x0 + 0.02, -0.56);
    c.quadraticCurveTo(x0 - 0.01, -0.85, x0, -1.12);
    c.closePath();
    c.fill();
    c.strokeStyle = 'rgba(160,140,100,0.35)';
    c.lineWidth = 0.008;
    for (let x = x0 + 0.04; x < x1 - 0.02; x += 0.05) {
      c.beginPath();
      c.moveTo(x, -1.11);
      c.quadraticCurveTo(x + 0.01, -0.85, x, -0.57);
      c.stroke();
    }
  });
};
panel(-0.8, -0.42);
panel(0.42, 0.8);
