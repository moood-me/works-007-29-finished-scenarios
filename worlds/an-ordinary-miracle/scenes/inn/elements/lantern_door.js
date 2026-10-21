// A lantern on a short chain under the gallery's beam by the door (its foot 1.85 m up): the same black iron cage,
// its panes glowing; the draught from the open door swings it (animate), its light (`flame` — the scene's
// `door_lamp`) going with it.
e.layer('lamp', { pivot: [0, -0.6], box: [-0.2, -0.62, 0.2, 0.05] }, (g) => {
  g.strokeStyle = '#2a2624';
  g.lineWidth = 0.014;
  g.beginPath();
  g.moveTo(0, -0.6);
  g.lineTo(0, -0.46);
  g.stroke();
  const gl = g.createRadialGradient(0, -0.2, 0, 0, -0.2, 0.16);
  gl.addColorStop(0, '#fff2c8');
  gl.addColorStop(0.5, '#ffd27a');
  gl.addColorStop(1, '#e8a04a');
  g.fillStyle = gl;
  g.fillRect(-0.09, -0.34, 0.18, 0.28);
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
  e.light(0, -0.2, 0.22, '#ffcf8a', 1.0, 'flame');
});
