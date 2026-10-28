// The lamp hanging over the room on its cord from the ceiling (3.3 m up): a white enamel shade, dark green outside, the
// bulb under it (`bulb`, by `lamps`). All of it the layer `lamp`, swaying a little on its cord in the draught from the
// open door (animate).
const top = -3.3;
e.layer('lamp', { pivot: [0, top] }, c => {
  c.strokeStyle = '#2a2622';
  c.lineWidth = 0.012;
  c.beginPath();
  c.moveTo(0, top);
  c.lineTo(0, -2.84);
  c.stroke();
  c.fillStyle = '#36483c';
  c.beginPath();
  c.moveTo(-0.05, -2.86);
  c.lineTo(0.05, -2.86);
  c.lineTo(0.33, -2.64);
  c.lineTo(-0.33, -2.64);
  c.closePath();
  c.fill();
  c.fillStyle = '#e9e5da';
  c.fillRect(-0.34, -2.645, 0.68, 0.018);
  if (e.state.lamps) {
    c.fillStyle = '#fff4d8';
    c.beginPath();
    c.ellipse(0, -2.63, 0.07, 0.04, 0, 0, Math.PI * 2);
    c.fill();
    e.light(0, -2.6, 0.35, '#ffd49a', 1, 'bulb');
  }
});
