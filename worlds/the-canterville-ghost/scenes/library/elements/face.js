// The old face in the window's glass, behind the family (`face`): Sir Simon's — gaunt, grey-green, a long beard, the
// eyes two red coals — as faint as a reflection, looking down at the floor where the stain was. One layer; the animate
// shows it by the key.
e.layer('face', {}, f => {
  f.fillStyle = 'rgba(190,225,210,0.55)';
  f.beginPath();
  f.ellipse(0, -2.2, 0.2, 0.27, 0, 0, Math.PI * 2);
  f.fill();
  f.fillStyle = 'rgba(200,232,218,0.45)';
  f.beginPath();
  f.moveTo(-0.16, -2.05);
  f.quadraticCurveTo(0, -1.5, 0.16, -2.05);
  f.closePath();
  f.fill();
  f.fillStyle = 'rgba(20,30,28,0.8)';
  for (const s of [-1, 1]) {
    f.beginPath();
    f.ellipse(s * 0.075, -2.24, 0.05, 0.035, 0, 0, Math.PI * 2);
    f.fill();
  }
  f.fillStyle = '#ff5a2a';
  for (const s of [-1, 1]) {
    f.beginPath();
    f.arc(s * 0.075, -2.235, 0.018, 0, Math.PI * 2);
    f.fill();
  }
  f.strokeStyle = 'rgba(40,60,56,0.7)';
  f.lineWidth = 0.012;
  f.beginPath();
  f.moveTo(-0.12, -2.33);
  f.lineTo(-0.03, -2.3);
  f.moveTo(0.12, -2.33);
  f.lineTo(0.03, -2.3);
  f.moveTo(-0.05, -2.08);
  f.quadraticCurveTo(0, -2.11, 0.05, -2.08);
  f.stroke();
  e.light(0, -2.235, 0.09, '#ff6a3a', 0.6, 'eyes');
});
