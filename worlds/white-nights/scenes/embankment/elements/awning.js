// The awning over the porch, its underside: sheet iron painted grey-green on a light frame, laid flat out from the
// wall 1.6 m (the card leans forward flat: its painting's height runs out from the wall), x −1.5…1.5 along the house
g.fillStyle = '#87918d';
g.fillRect(-1.5, -1.6, 3.0, 1.6);
g.beginPath();
for (let x = -1.5; x <= 1.5 + 1e-6; x += 0.375) {
  g.moveTo(x, -1.6);
  g.lineTo(x, 0);
}
g.moveTo(-1.5, -0.8);
g.lineTo(1.5, -0.8);
g.strokeStyle = 'rgba(60,58,56,0.55)';
g.lineWidth = 0.025;
g.stroke();
g.strokeStyle = e.lib.INK;
g.lineWidth = 0.03;
g.strokeRect(-1.5, -1.6, 3.0, 1.6);
