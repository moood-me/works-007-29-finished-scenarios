// The box on the table being packed (metres from its foot on the oilcloth): open, its flaps up, a strip of fresh tape
// half across them (packed, `packed`). Its point `box` — where Dad's tape is.
if (!e.state.packed) return;
g.fillStyle = '#c49d6a';
g.fillRect(-0.24, -0.32, 0.48, 0.32);
g.fillStyle = '#a98352';
g.beginPath();
g.moveTo(-0.24, -0.32);
g.lineTo(-0.32, -0.46);
g.lineTo(-0.08, -0.46);
g.lineTo(-0.02, -0.32);
g.closePath();
g.fill();
g.beginPath();
g.moveTo(0.24, -0.32);
g.lineTo(0.31, -0.44);
g.lineTo(0.08, -0.44);
g.lineTo(0.02, -0.32);
g.closePath();
g.fill();
g.fillStyle = 'rgba(236,228,196,0.8)';
g.fillRect(-0.03, -0.32, 0.06, 0.18);
e.at(0, -0.3, 'box');
