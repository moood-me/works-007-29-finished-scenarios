// The candle stub on the flat stone, lit: a short pale stub in a puddle of wax, its flame a layer (its light
// `candle_light` is this e.light; animate shows the flame by the state's `candle`)
g.fillStyle = '#d9cfb8';
g.beginPath();
g.ellipse(0, -0.005, 0.045, 0.012, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#e8dfc8';
g.fillRect(-0.017, -0.075, 0.034, 0.072);
g.fillStyle = '#c9bea6';
g.fillRect(0.006, -0.075, 0.011, 0.072);
g.strokeStyle = '#2a2420';
g.lineWidth = 0.004;
g.beginPath();
g.moveTo(0, -0.075);
g.lineTo(0.002, -0.088);
g.stroke();
e.layer('flame', { pivot: [0, -0.08], flicker: 0.3, blend: 'add' }, g => {
  const grd = g.createRadialGradient(0, -0.105, 0, 0, -0.105, 0.03);
  grd.addColorStop(0, 'rgba(255,250,225,1)');
  grd.addColorStop(0.5, 'rgba(255,200,110,0.8)');
  grd.addColorStop(1, 'rgba(255,160,70,0)');
  g.fillStyle = grd;
  g.beginPath();
  g.moveTo(0, -0.145);
  g.quadraticCurveTo(0.022, -0.1, 0, -0.08);
  g.quadraticCurveTo(-0.022, -0.1, 0, -0.145);
  g.fill();
  e.light(0, -0.105, 0.08, '#ffc070', 1, 'flame');
});
e.at(0, -0.11, 'flame');
