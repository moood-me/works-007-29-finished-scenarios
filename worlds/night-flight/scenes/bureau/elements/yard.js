// The hangar across the field, 75 m off, seen through the window: its corrugated front dark against the sky, the
// great gate open and lit — the European mail's plane in it under the lamps, being made ready; the edge lamps of the
// field in a row before it; a floodlight mast unlit. The gate's light `gate`.
const R = 10;
const top = x => -7.2 - 2.2 * (1 - (x / R) ** 2);
g.fillStyle = '#4a5160';
g.beginPath();
g.moveTo(-R, 0);
for (let x = -R; x <= R + 0.01; x += 0.5) g.lineTo(x, top(x));
g.lineTo(R, 0);
g.closePath();
g.fill();
// the gate's lit inside: warm, brightest under the lamps
const inside = g.createLinearGradient(0, -6.4, 0, 0);
inside.addColorStop(0, '#e9b878');
inside.addColorStop(1, '#c08a52');
g.fillStyle = inside;
g.fillRect(-6, -6.3, 12, 6.3);
// the biplane in it, side on, nose to the left: fuselage, wings, the wheels
g.fillStyle = '#e4e1d8';
g.beginPath();
g.moveTo(-4.6, -2.0);
g.lineTo(3.6, -2.3);
g.lineTo(4.6, -2.9);
g.lineTo(4.9, -2.1);
g.lineTo(3.4, -1.5);
g.lineTo(-4.4, -1.3);
g.closePath();
g.fill();
g.fillStyle = '#d6d2c6';
g.fillRect(-3.4, -3.75, 4.4, 0.16);
g.fillRect(-3.2, -2.05, 4.0, 0.14);
g.strokeStyle = '#6b6a66';
g.lineWidth = 0.08;
for (const x of [-2.6, 0.2]) {
  g.beginPath();
  g.moveTo(x, -3.6);
  g.lineTo(x + 0.3, -2.0);
  g.stroke();
}
g.fillStyle = '#3c3a38';
for (const x of [-2.2, -0.9]) {
  g.beginPath();
  g.arc(x, -0.45, 0.45, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#5a4a3c';
g.fillRect(-5.1, -2.6, 0.18, 1.4);
// two mechanics at the engine, small and dark against the light
g.fillStyle = '#3b3f48';
for (const [x, h] of [[-5.6, 1.7], [-3.9, 1.65]]) {
  g.fillRect(x - 0.2, -h + 0.25, 0.4, h - 0.25);
  g.beginPath();
  g.arc(x, -h + 0.12, 0.15, 0, Math.PI * 2);
  g.fill();
}
// the lamps hanging in the gate
for (const x of [-3, 0, 3]) {
  g.fillStyle = '#fff2d0';
  g.beginPath();
  g.arc(x, -5.6, 0.25, 0, Math.PI * 2);
  g.fill();
}
e.light(0, -5.0, 3.5, '#ffd49a', 1, 'gate');
// an unlit floodlight mast to the left of the hangar
g.strokeStyle = '#3a404c';
g.lineWidth = 0.18;
g.beginPath();
g.moveTo(-17.6, 0);
g.lineTo(-17.1, -11.5);
g.moveTo(-16.4, 0);
g.lineTo(-16.9, -11.5);
g.stroke();
g.fillStyle = '#3a404c';
g.fillRect(-18, -12.2, 2, 0.8);
// the edge lamps of the field, a row of small warm points running off to the right
for (let k = 0; k < 7; k++) {
  const x = -24 + k * 7.5;
  g.fillStyle = '#ffd9a0';
  g.beginPath();
  g.arc(x, -0.4, 0.12, 0, Math.PI * 2);
  g.fill();
  e.light(x, -0.4, 0.5, '#ffcf8a', 0.5, `edge${k}`);
}
