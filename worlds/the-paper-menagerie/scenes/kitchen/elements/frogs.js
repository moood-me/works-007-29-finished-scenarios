// A paper frog (metres from its feet; each copy one frog — on the table among the boxes, on the floor), folded from
// green wrapping paper, squat, its back legs folded under it, ready to jump: there when the whole house wakes
// (`menagerie` "awake", 3.2). Its body a layer animate swells with breath.
if (e.state.menagerie !== 'awake') return;
e.layer('body', { pivot: [0, 0] }, l => {
  l.fillStyle = '#86b874';
  l.beginPath();
  l.moveTo(-0.07, 0);
  l.lineTo(-0.05, -0.045);
  l.lineTo(0.0, -0.06);
  l.lineTo(0.05, -0.045);
  l.lineTo(0.07, 0);
  l.closePath();
  l.fill();
  l.fillStyle = '#6a9a5c';
  l.beginPath();
  l.moveTo(-0.07, 0);
  l.lineTo(-0.05, -0.045);
  l.lineTo(-0.02, 0);
  l.closePath();
  l.moveTo(0.07, 0);
  l.lineTo(0.05, -0.045);
  l.lineTo(0.02, 0);
  l.closePath();
  l.fill();
  l.fillStyle = '#eef3e6';
  l.beginPath();
  l.arc(-0.018, -0.058, 0.009, 0, Math.PI * 2);
  l.arc(0.018, -0.058, 0.009, 0, Math.PI * 2);
  l.fill();
  l.fillStyle = '#2a2624';
  l.fillRect(-0.021, -0.061, 0.006, 0.006);
  l.fillRect(0.015, -0.061, 0.006, 0.006);
});
e.at(0, -0.04);
