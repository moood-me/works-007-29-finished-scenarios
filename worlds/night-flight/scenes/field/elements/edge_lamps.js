// A lamp at the field's edge: a short post, a small glass globe on it (the layer `lit`, its glow with `floods` —
// the edge lamps go on and off with the floodlights).
g.fillStyle = '#4e5257';
g.fillRect(-0.03, -0.55, 0.06, 0.56);
g.fillStyle = '#9aa0a6';
g.beginPath();
g.arc(0, -0.62, 0.07, 0, Math.PI * 2);
g.fill();
e.layer('lit', {}, c => {
  c.fillStyle = '#fff1cf';
  c.beginPath();
  c.arc(0, -0.62, 0.065, 0, Math.PI * 2);
  c.fill();
});
e.light(0, -0.62, 0.22, '#ffe6b0', 0.8, 'glass');
