// The leaf of Rivière's office door, hinged on its left (x 0 → 0.89): dark varnished wood, two panels below, the
// frosted glass above lit from within (`office`, its glow `office` — the light office_glass), a brass knob, a small
// white enamel plate without words. It turns on its hinge by `office_door` (180 shut … 98 open into the office).
g.fillStyle = '#4e3828';
g.fillRect(0, -2.17, 0.89, 2.17);
g.fillStyle = '#5a412f';
g.fillRect(0.09, -0.95, 0.31, 0.8);
g.fillRect(0.49, -0.95, 0.31, 0.8);
const lit = e.state.office;
g.fillStyle = lit ? '#f0d6a4' : '#5c6066';
g.fillRect(0.09, -2.08, 0.71, 0.95);
if (lit) {
  const gl = g.createRadialGradient(0.45, -1.6, 0.05, 0.45, -1.6, 0.6);
  gl.addColorStop(0, 'rgba(255,240,205,0.9)');
  gl.addColorStop(1, 'rgba(255,240,205,0)');
  g.fillStyle = gl;
  g.fillRect(0.09, -2.08, 0.71, 0.95);
  e.light(0.45, -1.6, 0.5, '#ffd6a0', 0.5, 'office');
}
g.fillStyle = '#b89a5a';
g.beginPath();
g.arc(0.79, -1.0, 0.035, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#e8e4da';
g.fillRect(0.31, -2.0, 0.28, 0.08);
e.at(0.45, -1.0, 'door');
