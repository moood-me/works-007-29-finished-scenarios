// Mark's plastic knight when it is out of his hands (`knight_at`: puddle — knocked off the step into last night's
// puddle, lying on its side; grass — put down on the grass), where knight_a, knight_d put it: a little silver figure, a
// blue shield, its sword gone grey. In his hands it is the cast's part `knight` (his look's own).
const at = e.state.knight_at;
if (at !== 'puddle' && at !== 'grass') return;
g.save();
g.rotate(at === 'puddle' ? -1.35 : -1.5);
g.fillStyle = '#bcc0c8';
g.fillRect(-0.025, -0.13, 0.05, 0.09);
g.beginPath();
g.arc(0, -0.15, 0.022, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#3d3f46';
g.fillRect(-0.014, -0.155, 0.028, 0.008);
g.fillStyle = '#bcc0c8';
g.fillRect(-0.022, -0.04, 0.016, 0.04);
g.fillRect(0.006, -0.04, 0.016, 0.04);
g.fillStyle = '#2f5fa8';
g.fillRect(-0.04, -0.12, 0.022, 0.05);
g.fillStyle = '#8c9198';
g.fillRect(0.028, -0.2, 0.008, 0.14);
g.restore();
e.at(-0.08, -0.02, 'knight');
