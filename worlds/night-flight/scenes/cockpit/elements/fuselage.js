// Fabien's plane seen from its right side, nose to the left, in flight: the line's livery — doped fabric in pale
// silver, the dark blue band along the flank (as on the Chilean mail at the field) — the engine's metal cowling, its
// exhaust stubs glowing (`#exhaust`), the propeller a blur (`prop`, a layer); two open cockpits one behind the other,
// their leather-rolled rims, small windscreens; the parasol wing's cabane struts going up to it; the fixed landing gear
// and its spoked wheel below; the tail with the rudder's muted red band. Metres from its anchor on the ground, y up
// negative: its belly at 0.62 m, the cockpit rims at 1.5 m.
const TOP = -1.5;
// the fuselage: the top line level along the cockpits, falling to the tail; the belly rising to it
g.fillStyle = '#c3c3bb';
g.beginPath();
g.moveTo(-2.25, -1.46);
g.lineTo(3.0, TOP);
g.bezierCurveTo(4.0, -1.48, 5.0, -1.4, 5.9, -1.33);
g.lineTo(5.9, -1.16);
g.bezierCurveTo(4.6, -1.0, 2.0, -0.7, -0.6, -0.62);
g.lineTo(-2.25, -0.64);
g.closePath();
g.fill();
// the shading along the belly — the fabric's curve turning under
g.fillStyle = 'rgba(70,72,82,0.28)';
g.beginPath();
g.moveTo(-2.25, -0.82);
g.bezierCurveTo(-0.6, -0.8, 2.0, -0.86, 5.9, -1.22);
g.lineTo(5.9, -1.16);
g.bezierCurveTo(4.6, -1.0, 2.0, -0.7, -0.6, -0.62);
g.lineTo(-2.25, -0.64);
g.closePath();
g.fill();
// the blue band
g.fillStyle = '#2f4769';
g.beginPath();
g.moveTo(-2.25, -1.2);
g.bezierCurveTo(0, -1.22, 3, -1.2, 5.85, -1.3);
g.lineTo(5.85, -1.24);
g.bezierCurveTo(3, -1.08, 0, -1.08, -2.25, -1.08);
g.closePath();
g.fill();
// the fabric's ribs showing through the dope
g.strokeStyle = 'rgba(150,150,142,0.6)';
g.lineWidth = 0.018;
for (let x = -1.8; x < 5.6; x += 0.5) {
  g.beginPath();
  g.moveTo(x, TOP + 0.03 + Math.max(0, x - 3) * 0.06);
  g.lineTo(x, -0.66 - Math.max(0, x - 0.4) * 0.1);
  g.stroke();
}
// the two cockpits: their leather-rolled rims along the top edge
for (const x of [-0.55, 1.05]) {
  g.fillStyle = '#5a3f2b';
  g.fillRect(x - 0.46, TOP - 0.035, 0.92, 0.05);
}
// the windscreens before them: small panes in their frames
for (const x of [-1.08, 0.52]) {
  const pane = g.createLinearGradient(0, TOP - 0.3, 0, TOP);
  pane.addColorStop(0, 'rgba(226,190,190,0.55)');
  pane.addColorStop(1, 'rgba(170,180,206,0.35)');
  g.fillStyle = pane;
  g.beginPath();
  g.moveTo(x - 0.06, TOP - 0.02);
  g.lineTo(x + 0.04, TOP - 0.3);
  g.lineTo(x + 0.2, TOP - 0.3);
  g.lineTo(x + 0.17, TOP - 0.02);
  g.closePath();
  g.fill();
  g.strokeStyle = '#3c3f42';
  g.lineWidth = 0.022;
  g.stroke();
}
// the engine's cowling, metal, its louvres and the exhaust stubs
g.fillStyle = '#8b9093';
g.beginPath();
g.moveTo(-2.25, -1.46);
g.lineTo(-3.05, -1.36);
g.quadraticCurveTo(-3.32, -1.05, -3.05, -0.74);
g.lineTo(-2.25, -0.64);
g.closePath();
g.fill();
g.strokeStyle = '#686c6f';
g.lineWidth = 0.022;
for (const x of [-2.85, -2.6, -2.4]) {
  g.beginPath();
  g.moveTo(x, -1.4);
  g.lineTo(x, -0.7);
  g.stroke();
}
g.fillStyle = '#3d3a37';
for (const x of [-2.75, -2.5]) g.fillRect(x, -0.76, 0.1, 0.16);
e.light(-2.6, -0.62, 0.12, '#ff9a50', 0.8, 'exhaust');
// the spinner
g.fillStyle = '#5c6062';
g.beginPath();
g.ellipse(-3.3, -1.05, 0.08, 0.16, 0, 0, Math.PI * 2);
g.fill();
// the propeller turning: seen from the side, its blades a thin blur up and down from the hub
e.layer('prop', { flicker: 0.5, box: [-3.5, -2.35, -3.2, 0.25] }, c => {
  const blur = c.createLinearGradient(0, -2.3, 0, 0.2);
  blur.addColorStop(0, 'rgba(120,96,70,0)');
  blur.addColorStop(0.12, 'rgba(130,100,72,0.3)');
  blur.addColorStop(0.5, 'rgba(110,86,62,0.45)');
  blur.addColorStop(0.88, 'rgba(130,100,72,0.3)');
  blur.addColorStop(1, 'rgba(120,96,70,0)');
  c.fillStyle = blur;
  c.beginPath();
  c.ellipse(-3.36, -1.05, 0.07, 1.25, 0, 0, Math.PI * 2);
  c.fill();
});
// the cabane struts up to the wing over the front cockpit
g.strokeStyle = '#6f7376';
g.lineWidth = 0.06;
g.beginPath();
g.moveTo(-2.0, TOP + 0.02);
g.lineTo(-2.85, -2.75);
g.moveTo(-1.35, TOP + 0.02);
g.lineTo(-1.7, -2.75);
g.stroke();
// the landing gear: V struts down to the axle, the near wheel, spoked
g.strokeStyle = '#55595c';
g.lineWidth = 0.07;
g.beginPath();
g.moveTo(-2.05, -0.64);
g.lineTo(-1.6, -0.3);
g.moveTo(-1.05, -0.63);
g.lineTo(-1.6, -0.3);
g.stroke();
g.fillStyle = '#2a2b2d';
g.beginPath();
g.arc(-1.6, -0.3, 0.3, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#9ea2a4';
g.beginPath();
g.arc(-1.6, -0.3, 0.2, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#6b6f71';
g.lineWidth = 0.018;
for (let k = 0; k < 10; k++) {
  const a = (k / 10) * Math.PI * 2;
  g.beginPath();
  g.moveTo(-1.6, -0.3);
  g.lineTo(-1.6 + 0.2 * Math.cos(a), -0.3 + 0.2 * Math.sin(a));
  g.stroke();
}
// the tail: fin and rudder with its red band, the skid under it
g.fillStyle = '#c3c3bb';
g.beginPath();
g.moveTo(4.9, -1.42);
g.quadraticCurveTo(5.3, -2.3, 5.85, -2.42);
g.quadraticCurveTo(6.3, -2.3, 6.25, -1.75);
g.lineTo(6.1, -1.15);
g.lineTo(5.9, -1.2);
g.closePath();
g.fill();
g.fillStyle = '#9a4a40';
g.beginPath();
g.moveTo(5.9, -2.38);
g.quadraticCurveTo(6.3, -2.3, 6.25, -1.75);
g.lineTo(6.15, -1.2);
g.lineTo(5.9, -1.22);
g.closePath();
g.fill();
g.strokeStyle = '#4b4c4e';
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(5.5, -1.1);
g.lineTo(5.7, -0.75);
g.stroke();
e.at(-0.55, TOP, 'cockpit');
e.at(1.05, TOP, 'rear_cockpit');
