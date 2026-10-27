// On the sill: a spider plant in a yellow pot, a green bottle of washing-up liquid, a glass with a toothbrush-like
// bottle brush in it.
g.fillStyle = '#d3a73c';
g.beginPath();
g.moveTo(-0.55, -0.13);
g.lineTo(-0.37, -0.13);
g.lineTo(-0.39, 0);
g.lineTo(-0.53, 0);
g.closePath();
g.fill();
g.strokeStyle = '#6f8e4c';
g.lineWidth = 0.012;
g.lineCap = 'round';
for (let k = 0; k < 11; k++) {
  const a = -Math.PI / 2 + (k / 10 - 0.5) * 2.6, l = 0.12 + 0.1 * e.rnd();
  g.beginPath();
  g.moveTo(-0.46, -0.13);
  g.quadraticCurveTo(-0.46 + Math.cos(a) * l * 0.6, -0.13 + Math.sin(a) * l, -0.46 + Math.cos(a) * l, -0.13 + Math.sin(a) * l * 0.55 + 0.04);
  g.stroke();
}
g.fillStyle = '#5c9a62';
g.beginPath();
g.roundRect(0.38, -0.2, 0.06, 0.2, 0.015);
g.fill();
g.fillStyle = '#e8e4d8';
g.fillRect(0.395, -0.24, 0.03, 0.04);
g.fillStyle = 'rgba(214, 226, 230, 0.75)';
g.fillRect(0.5, -0.1, 0.06, 0.1);
g.strokeStyle = '#8a6a48';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(0.53, -0.05);
g.lineTo(0.55, -0.2);
g.stroke();
