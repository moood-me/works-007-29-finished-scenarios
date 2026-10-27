// Café curtains inside the kitchen window, on a rod across its top (metres; from the rod 1.12 m above the sill down
// to 0.62 m): pale linen, gathered, the lamp's light through them; each its own layer, stirring in the draught.
g.fillStyle = '#8a7a60';
g.fillRect(-0.66, -1.17, 1.32, 0.02);
const panel = (x0, x1) => {
  e.layer(x0 < 0 ? 'left' : 'right', { pivot: [(x0 + x1) / 2, -1.16], wind: { strength: 0.05, gust: 0.5 }, box: [x0 - 0.05, -1.18, x1 + 0.05, -0.5] }, c => {
    c.fillStyle = '#efe4c8';
    c.beginPath();
    c.moveTo(x0, -1.16);
    c.lineTo(x1, -1.16);
    c.quadraticCurveTo(x1 + 0.01, -0.88, x1 - 0.02, -0.6);
    c.lineTo(x0 + 0.02, -0.6);
    c.quadraticCurveTo(x0 - 0.01, -0.88, x0, -1.16);
    c.closePath();
    c.fill();
    c.strokeStyle = 'rgba(160,140,100,0.35)';
    c.lineWidth = 0.008;
    for (let x = x0 + 0.04; x < x1 - 0.02; x += 0.05) {
      c.beginPath();
      c.moveTo(x, -1.15);
      c.quadraticCurveTo(x + 0.01, -0.88, x, -0.61);
      c.stroke();
    }
  });
};
panel(-0.63, -0.33);
panel(0.33, 0.63);
