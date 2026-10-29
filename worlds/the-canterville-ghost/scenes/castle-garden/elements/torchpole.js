// A funeral torch on its pole stuck in the ground by the coffin (2.2 m), there while `funeral` is: a plain dark pole,
// an iron basket at its top packed with pitch-soaked tow — where the fire burns (its point and its light
// `torchpole#flame`; the fire is the scene's particles, lit by `torches`).
if (!e.state.funeral) return;
g.fillStyle = '#3a2c22';
g.fillRect(-0.03, -2.0, 0.06, 2.05);
g.strokeStyle = '#26262b';
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(-0.09, -2.22);
g.lineTo(-0.05, -1.98);
g.lineTo(0.05, -1.98);
g.lineTo(0.09, -2.22);
g.stroke();
g.fillStyle = '#2a201a';
g.beginPath();
g.ellipse(0, -2.12, 0.07, 0.09, 0, 0, Math.PI * 2);
g.fill();
e.light(0, -2.22, 0.3, '#ffb060', 1.0, 'flame');
e.at(0, -2.22, 'flame');
