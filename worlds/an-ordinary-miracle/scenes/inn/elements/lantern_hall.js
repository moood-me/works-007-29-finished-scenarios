// A lantern hanging on a long chain from the ceiling over the middle of the hall (its foot 2.0 m up, the hook at
// 4.5 m): a black iron cage with a pointed cap and a ring, four panes glowing with the candle inside; the layer `lamp`
// swings a little on its hook (animate), its light (`flame` — the scene's `lantern`) going with it.
e.layer('lamp', { pivot: [0, -2.5], box: [-0.2, -2.55, 0.2, 0.05] }, (g) => {
  g.strokeStyle = '#2a2624';
  g.lineWidth = 0.014;
  g.beginPath();
  g.moveTo(0, -2.5);
  g.lineTo(0, -0.46);
  g.stroke();
  // the glass, warm with the candle
  const gl = g.createRadialGradient(0, -0.2, 0, 0, -0.2, 0.16);
  gl.addColorStop(0, '#fff2c8');
  gl.addColorStop(0.5, '#ffd27a');
  gl.addColorStop(1, '#e8a04a');
  g.fillStyle = gl;
  g.fillRect(-0.09, -0.34, 0.18, 0.28);
  // the cage
  g.fillStyle = '#26221f';
  g.fillRect(-0.11, -0.06, 0.22, 0.05);
  g.fillRect(-0.11, -0.37, 0.22, 0.04);
  for (const x of [-0.11, -0.012, 0.09]) g.fillRect(x, -0.36, 0.022, 0.32);
  g.beginPath();
  g.moveTo(-0.13, -0.37);
  g.lineTo(0, -0.47);
  g.lineTo(0.13, -0.37);
  g.closePath();
  g.fill();
  g.beginPath();
  g.arc(0, -0.48, 0.025, 0, Math.PI * 2);
  g.fill();
  g.fillRect(-0.05, -0.01, 0.1, 0.02);
  e.light(0, -0.2, 0.22, '#ffcf8a', 1.0, 'flame');
});
