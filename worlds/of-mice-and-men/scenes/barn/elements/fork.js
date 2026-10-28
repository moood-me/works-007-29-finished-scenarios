// The Jackson fork hanging over the hay from its pulley up under the ridge (metres, the tips of its tines at the
// foot, 2.45 m up; the pulley 5.2 m above them): the rope down, the iron frame, four long curved tines. It hangs
// still but for a slow turn and sway (the layer `fork`, from the pulley: fork.animate.js).
e.layer('fork', { pivot: [0, -5.2] }, g => {
  g.strokeStyle = '#9c8a68';
  g.lineWidth = 0.022;
  g.beginPath();
  g.moveTo(0, -5.2);
  g.lineTo(0, -1.05);
  g.stroke();
  g.fillStyle = '#3a3532';
  g.beginPath();
  g.arc(0, -5.2, 0.09, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#34302d';
  g.fillRect(-0.36, -1.08, 0.72, 0.06);
  g.fillRect(-0.03, -1.12, 0.06, 0.1);
  g.strokeStyle = '#3d3936';
  g.lineWidth = 0.028;
  for (const x of [-0.33, -0.11, 0.11, 0.33]) {
    g.beginPath();
    g.moveTo(x, -1.04);
    g.quadraticCurveTo(x * 1.05, -0.4, x * 0.6 + 0.08, 0);
    g.stroke();
  }
});
