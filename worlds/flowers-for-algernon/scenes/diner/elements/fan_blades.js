// The ceiling fan's blades, laid face down under its motor (the card's middle at y −0.65): four dark wooden blades
// round a brass hub — a layer that turns slowly.
e.layer('blades', { pivot: [0, -0.65] }, c => {
  c.fillStyle = '#5a3d2a';
  for (let k = 0; k < 4; k++) {
    c.save();
    c.translate(0, -0.65);
    c.rotate((k * Math.PI) / 2);
    c.beginPath();
    c.moveTo(0.08, -0.04);
    c.lineTo(0.62, -0.075);
    c.quadraticCurveTo(0.66, 0, 0.62, 0.075);
    c.lineTo(0.08, 0.04);
    c.fill();
    c.restore();
  }
  c.fillStyle = '#9c7c3c';
  c.beginPath();
  c.arc(0, -0.65, 0.09, 0, Math.PI * 2);
  c.fill();
});
