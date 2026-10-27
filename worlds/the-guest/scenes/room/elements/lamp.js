// The oil lamp on the table (metres from the table top): a brass foot, a glass well with the oil in it, the burner, the
// tall glass chimney and the flame in it — its glow `flame` is the light `lamp`.
const on = e.state.lamp;
g.fillStyle = '#9c7a3e';
g.beginPath();
g.ellipse(0, -0.01, 0.07, 0.015, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(-0.015, -0.12, 0.03, 0.11);
g.fillStyle = 'rgba(190,200,190,0.55)';
g.beginPath();
g.ellipse(0, -0.17, 0.06, 0.055, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(170,130,60,0.6)';
g.beginPath();
g.ellipse(0, -0.15, 0.05, 0.03, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#8a6a34';
g.fillRect(-0.035, -0.24, 0.07, 0.03);
// the chimney
g.fillStyle = 'rgba(236,236,226,0.35)';
g.beginPath();
g.moveTo(-0.03, -0.24);
g.quadraticCurveTo(-0.055, -0.29, -0.025, -0.34);
g.lineTo(-0.02, -0.46);
g.lineTo(0.02, -0.46);
g.lineTo(0.025, -0.34);
g.quadraticCurveTo(0.055, -0.29, 0.03, -0.24);
g.closePath();
g.fill();
// the flame
e.layer('flame', { flicker: 0.15, blend: 'add' }, c => {
  const r = c.createRadialGradient(0, -0.29, 0, 0, -0.29, 0.03);
  r.addColorStop(0, `rgba(255,240,200,${on})`);
  r.addColorStop(0.6, `rgba(255,180,80,${0.8 * on})`);
  r.addColorStop(1, 'rgba(255,140,40,0)');
  c.fillStyle = r;
  c.beginPath();
  c.ellipse(0, -0.29, 0.016, 0.035, 0, 0, Math.PI * 2);
  c.fill();
});
e.light(0, -0.29, 0.14, '#ffc070', on, 'flame');
