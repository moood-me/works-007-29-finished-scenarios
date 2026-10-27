// The bureau's back wall, seen from the room: pale distemper above, dark green paint below a dado rail, a skirting;
// the window on the field cut out (x 0.8…2.8, its sill 1.05 m up, its head 2.55 m); on the left the door of Rivière's
// office — dark varnished wood, its upper half frosted glass lit from within (`office`, its glow `office`); the
// telegraph wires come in high on the right and run along the wall to the table.
g.fillStyle = '#c4bea6';
g.beginPath();
g.rect(-3, -3.35, 6, 3.4);
g.rect(0.8, -2.55, 2, 1.5);
g.fill('evenodd');
// the dado: dark green below 1.1 m, its rail
g.fillStyle = '#4c5d4c';
g.fillRect(-3, -1.1, 3.8, 1.1);
g.fillRect(2.8, -1.1, 0.2, 1.1);
g.fillRect(0.8, -1.05, 2, 1.05);
g.fillStyle = '#3a4739';
g.fillRect(-3, -1.14, 6, 0.06);
g.fillStyle = '#2e2620';
g.fillRect(-3, -0.14, 6, 0.14);
// stains of years of tobacco and lamp smoke high on the wall
const smoke = g.createLinearGradient(0, -3.35, 0, -2.1);
smoke.addColorStop(0, 'rgba(120,104,78,0.35)');
smoke.addColorStop(1, 'rgba(120,104,78,0)');
g.fillStyle = smoke;
g.fillRect(-3, -3.35, 3.8, 1.25);
g.fillRect(2.8, -3.35, 0.2, 1.25);
g.fillRect(0.8, -3.35, 2, 0.8);
// Rivière's door: frame, two panels below, the frosted glass above (drawn 0.45 m to the right of x −3.25)
g.save();
g.translate(0.45, 0);
g.fillStyle = '#3d2b1f';
g.fillRect(-3.25, -2.25, 1.05, 2.25);
g.fillStyle = '#4e3828';
g.fillRect(-3.17, -2.17, 0.89, 2.1);
g.fillStyle = '#5a412f';
g.fillRect(-3.08, -0.95, 0.31, 0.8);
g.fillRect(-2.68, -0.95, 0.31, 0.8);
const lit = e.state.office;
g.fillStyle = lit ? '#f0d6a4' : '#5c6066';
g.fillRect(-3.08, -2.08, 0.71, 0.95);
if (lit) {
  const gl = g.createRadialGradient(-2.72, -1.6, 0.05, -2.72, -1.6, 0.6);
  gl.addColorStop(0, 'rgba(255,240,205,0.9)');
  gl.addColorStop(1, 'rgba(255,240,205,0)');
  g.fillStyle = gl;
  g.fillRect(-3.08, -2.08, 0.71, 0.95);
  e.light(-2.72 + 0.45, -1.6, 0.5, '#ffd6a0', 0.5, 'office');
}
g.fillStyle = '#b89a5a';
g.beginPath();
g.arc(-2.38, -1.0, 0.035, 0, Math.PI * 2);
g.fill();
// a small enamel plate on the door, no words: a white oblong
g.fillStyle = '#e8e4da';
g.fillRect(-2.86, -2.0, 0.28, 0.08);
g.restore();
// the telegraph wires: in at the top right, along under the ceiling, down the wall to the table
g.strokeStyle = '#2a2622';
g.lineWidth = 0.015;
for (const dy of [0, 0.04]) {
  g.beginPath();
  g.moveTo(3, -3.15 - dy);
  g.lineTo(2.9, -3.15 - dy);
  g.lineTo(2.9, -2.65);
  g.stroke();
}
g.fillStyle = '#e6e1d4';
for (const y of [-3.15, -2.85]) g.fillRect(2.87, y - 0.02, 0.06, 0.04);
