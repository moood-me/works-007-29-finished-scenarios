// A candle sconce on the wall, from before (its foot 1.7 m up): a brass back plate, a curved arm, a drip pan, a white
// candle; its flame (layer `flame`, shown as `sconces` says — its animate) and its light (sconce#flame, the light
// sconces). The same sconce stands in six places.
g.fillStyle = '#7a5e2a';
g.beginPath();
g.ellipse(0, -0.26, 0.06, 0.12, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#8c6a30';
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(0, -0.18);
g.quadraticCurveTo(0, -0.06, 0.0, -0.06);
g.stroke();
g.fillStyle = '#9a7a3a';
g.beginPath();
g.ellipse(0, -0.07, 0.07, 0.018, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#e8e2d2';
g.fillRect(-0.016, -0.24, 0.032, 0.17);
e.layer('flame', {}, l => {
  l.fillStyle = '#ffe0a0';
  l.beginPath();
  l.ellipse(0, -0.275, 0.014, 0.03, 0, 0, Math.PI * 2);
  l.fill();
});
e.light(0, -0.28, 0.12, '#ffcf8a', 1.0, 'flame');
