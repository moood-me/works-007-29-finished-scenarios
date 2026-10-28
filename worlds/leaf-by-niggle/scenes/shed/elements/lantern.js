// The lantern hanging on its cord from the middle beam (the cord from y −4.2; the lantern 2.4…2.75 up): a tin top, a
// glass chimney, a small flame — its light is the scene's light "lamp". It sways a little on its cord (animate).
e.layer('lantern', { pivot: [0, -4.2] }, l => {
  l.strokeStyle = '#2f2a26';
  l.lineWidth = 0.012;
  l.beginPath();
  l.moveTo(0, -4.2);
  l.lineTo(0, -2.82);
  l.stroke();
  l.fillStyle = '#3d3630';
  l.beginPath();
  l.moveTo(-0.1, -2.72);
  l.lineTo(0, -2.84);
  l.lineTo(0.1, -2.72);
  l.closePath();
  l.fill();
  l.fillStyle = 'rgba(250,236,200,0.55)';
  l.beginPath();
  l.ellipse(0, -2.6, 0.075, 0.12, 0, 0, Math.PI * 2);
  l.fill();
  l.strokeStyle = '#3d3630';
  l.lineWidth = 0.014;
  l.beginPath();
  l.moveTo(-0.08, -2.72);
  l.lineTo(-0.08, -2.46);
  l.moveTo(0.08, -2.72);
  l.lineTo(0.08, -2.46);
  l.stroke();
  l.fillStyle = '#3d3630';
  l.fillRect(-0.1, -2.47, 0.2, 0.04);
  l.fillStyle = '#ffd27a';
  l.beginPath();
  l.ellipse(0, -2.57, 0.018, 0.035, 0, 0, Math.PI * 2);
  l.fill();
  e.light(0, -2.58, 0.18, '#ffcf80', 1, 'flame');
});
