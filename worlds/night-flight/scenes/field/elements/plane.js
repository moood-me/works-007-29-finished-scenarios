// The Chilean mail plane, just landed, its engine stopped: a parasol-winged monoplane seen from its left side, nose
// to the left — doped fabric in pale silver, a dark blue band along its flank, the metal cowling of its engine, a big
// two-bladed wooden propeller standing still, two open cockpits one behind the other with their small windscreens,
// the wing high over them on its struts, spoked wheels on chocks, the tail on its skid; a muted red band on the rudder.
// Metres from its anchor (the middle of its length on the ground), y up negative.
// the far side's struts and wheel, behind the fuselage
g.strokeStyle = '#6d7174';
g.lineWidth = 0.07;
g.beginPath();
g.moveTo(-2.8, -1.25);
g.lineTo(-3.4, -3.55);
g.moveTo(-1.2, -1.4);
g.lineTo(-2.0, -3.55);
g.stroke();
// the fuselage
g.fillStyle = '#c8c8bf';
g.beginPath();
g.moveTo(-4.3, -2.42);
g.bezierCurveTo(-2.5, -2.58, 0.5, -2.6, 4.8, -2.18);
g.lineTo(5.35, -2.08);
g.lineTo(5.35, -1.9);
g.bezierCurveTo(3, -1.55, 0.6, -1.3, -2.6, -1.18);
g.lineTo(-4.3, -1.22);
g.closePath();
g.fill();
// the blue band along it
g.fillStyle = '#2f4769';
g.beginPath();
g.moveTo(-4.3, -1.95);
g.bezierCurveTo(-2, -2.02, 1.5, -1.95, 5.3, -2.0);
g.lineTo(5.3, -1.92);
g.bezierCurveTo(1.5, -1.72, -2, -1.7, -4.3, -1.7);
g.closePath();
g.fill();
// the engine cowling and its exhaust stubs
g.fillStyle = '#8c9194';
g.beginPath();
g.moveTo(-4.3, -2.42);
g.lineTo(-5.55, -2.3);
g.quadraticCurveTo(-5.85, -1.85, -5.55, -1.38);
g.lineTo(-4.3, -1.22);
g.closePath();
g.fill();
g.strokeStyle = '#6a6e70';
g.lineWidth = 0.03;
for (const x of [-5.2, -4.85, -4.5]) {
  g.beginPath();
  g.moveTo(x, -2.36);
  g.lineTo(x, -1.3);
  g.stroke();
}
g.fillStyle = '#4b4c4e';
for (const x of [-5.05, -4.75, -4.45]) g.fillRect(x, -1.32, 0.12, 0.22);
// fabric ribs showing through the dope
g.strokeStyle = 'rgba(160,160,150,0.7)';
g.lineWidth = 0.025;
for (let x = -3.6; x < 5; x += 0.55) {
  g.beginPath();
  g.moveTo(x, -2.5 + 0.03 * x);
  g.lineTo(x, -1.25 - 0.07 * Math.max(0, x));
  g.stroke();
}
// the two open cockpits: leather rims, small windscreens
for (const x of [-1.6, 0.2]) {
  g.fillStyle = '#2b2522';
  g.beginPath();
  g.ellipse(x + 0.35, -2.58, 0.48, 0.1, 0, Math.PI, 0);
  g.fill();
  g.fillStyle = '#6b4a32';
  g.fillRect(x - 0.13, -2.6, 0.96, 0.05);
  g.fillStyle = 'rgba(206,222,230,0.7)';
  g.beginPath();
  g.moveTo(x - 0.15, -2.6);
  g.lineTo(x - 0.05, -2.9);
  g.lineTo(x + 0.12, -2.9);
  g.lineTo(x + 0.08, -2.6);
  g.closePath();
  g.fill();
}
// the tail: fin and rudder, the stabiliser
g.fillStyle = '#c8c8bf';
g.beginPath();
g.moveTo(4.2, -2.2);
g.quadraticCurveTo(4.7, -3.2, 5.3, -3.35);
g.quadraticCurveTo(5.75, -3.2, 5.7, -2.6);
g.lineTo(5.55, -1.9);
g.lineTo(5.35, -2.08);
g.closePath();
g.fill();
g.fillStyle = '#9a4a40';
g.beginPath();
g.moveTo(5.35, -3.3);
g.quadraticCurveTo(5.75, -3.2, 5.7, -2.6);
g.lineTo(5.6, -2.15);
g.lineTo(5.35, -2.1);
g.closePath();
g.fill();
g.strokeStyle = '#7c7d76';
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(5.35, -3.33);
g.lineTo(5.35, -2.08);
g.stroke();
g.fillStyle = '#b8b8ae';
g.beginPath();
g.moveTo(3.7, -2.12);
g.lineTo(5.6, -2.2);
g.lineTo(5.65, -2.07);
g.lineTo(3.8, -2.04);
g.closePath();
g.fill();
// the tail skid
g.strokeStyle = '#4b4c4e';
g.lineWidth = 0.06;
g.beginPath();
g.moveTo(4.9, -1.95);
g.lineTo(5.1, -0.02);
g.stroke();
// the wing, high over the cockpits: its section seen end-on as a long thin aerofoil, and its near tip's edge
g.fillStyle = '#d4d4cb';
g.beginPath();
g.moveTo(-4.35, -3.62);
g.quadraticCurveTo(-4.4, -3.9, -3.6, -3.92);
g.bezierCurveTo(-2.4, -3.95, -1.4, -3.85, -0.9, -3.7);
g.lineTo(-0.9, -3.64);
g.bezierCurveTo(-2, -3.55, -3.6, -3.52, -4.35, -3.62);
g.closePath();
g.fill();
// cabane struts from the fuselage to the wing, and the near wing struts from below
g.strokeStyle = '#7b7f82';
g.lineWidth = 0.08;
g.beginPath();
g.moveTo(-3.3, -2.48);
g.lineTo(-3.1, -3.55);
g.moveTo(-2.2, -2.55);
g.lineTo(-1.9, -3.6);
g.moveTo(-2.6, -1.25);
g.lineTo(-3.6, -3.55);
g.moveTo(-1.0, -1.38);
g.lineTo(-1.6, -3.6);
g.stroke();
// the landing gear: V struts to the axle
g.lineWidth = 0.09;
g.strokeStyle = '#55595c';
g.beginPath();
g.moveTo(-3.6, -1.22);
g.lineTo(-3.15, -0.5);
g.moveTo(-2.4, -1.2);
g.lineTo(-3.15, -0.5);
g.stroke();
// the near wheel: tyre, spokes, hub
g.fillStyle = '#2a2b2d';
g.beginPath();
g.arc(-3.15, -0.48, 0.48, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#9ea2a4';
g.beginPath();
g.arc(-3.15, -0.48, 0.34, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#6b6f71';
g.lineWidth = 0.025;
for (let k = 0; k < 10; k++) {
  const a = (k / 10) * Math.PI * 2;
  g.beginPath();
  g.moveTo(-3.15, -0.48);
  g.lineTo(-3.15 + 0.33 * Math.cos(a), -0.48 + 0.33 * Math.sin(a));
  g.stroke();
}
g.fillStyle = '#3f4244';
g.beginPath();
g.arc(-3.15, -0.48, 0.07, 0, Math.PI * 2);
g.fill();
// the chocks before and behind it
g.fillStyle = '#6a5038';
for (const s of [-1, 1]) {
  g.beginPath();
  g.moveTo(-3.15 + s * 0.42, 0);
  g.lineTo(-3.15 + s * 0.85, 0);
  g.lineTo(-3.15 + s * 0.42, -0.32);
  g.closePath();
  g.fill();
}
// the propeller standing still: its hub and two long wooden blades, up and down
g.fillStyle = '#5c6062';
g.beginPath();
g.ellipse(-5.86, -1.85, 0.12, 0.2, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#8f5f3b';
for (const s of [-1, 1]) {
  g.beginPath();
  g.moveTo(-5.9, -1.85);
  g.bezierCurveTo(-6.02, -1.85 + s * 0.5, -6.0, -1.85 + s * 1.1, -5.94, -1.85 + s * 1.38);
  g.quadraticCurveTo(-5.88, -1.85 + s * 1.45, -5.83, -1.85 + s * 1.36);
  g.bezierCurveTo(-5.8, -1.85 + s * 1.0, -5.8, -1.85 + s * 0.5, -5.85, -1.85);
  g.closePath();
  g.fill();
}
e.at(-0.9, -2.6, 'cockpit');
e.at(-3.15, -0.5, 'wheel');
