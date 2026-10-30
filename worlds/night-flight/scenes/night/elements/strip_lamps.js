// A lamp of the field's edge and its landing strip: a short post, a small glass globe on it, lit all night (its glow,
// `glass`). Copies: along the field's near edge and in the strip's two rows to the far end.
g.fillStyle = '#4e5257';
g.fillRect(-0.03, -0.55, 0.06, 0.56);
g.fillStyle = '#fff1cf';
g.beginPath();
g.arc(0, -0.62, 0.07, 0, Math.PI * 2);
g.fill();
e.light(0, -0.62, 0.3, '#ffe6b0', 0.9, 'glass');
