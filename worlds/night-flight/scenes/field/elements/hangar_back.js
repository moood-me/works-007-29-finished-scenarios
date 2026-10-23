// The hangar's back wall, inside: dark-stained boards under the arch; along it the racks — a spare propeller hung on
// two pegs, a wheel, a board of tools, shelves of tins, coils of cable; a calendar's pale square by the door to the
// stores. Seen through the open gates past the plane.
const R = 10.2;
const top = x => -7.4 - 2.3 * (1 - (x / R) ** 2);
g.fillStyle = '#8a7a64';
g.beginPath();
g.moveTo(-R, 0);
for (let x = -R; x <= R + 0.01; x += 0.5) g.lineTo(x, top(x));
g.lineTo(R, 0);
g.closePath();
g.fill();
g.fillStyle = 'rgba(110,96,78,0.6)';
for (let x = -R + 0.3; x < R; x += 0.6) g.fillRect(x, top(x), 0.05, -top(x));
// the spare propeller, hung level on the wall
g.fillStyle = '#9b6b43';
g.beginPath();
g.ellipse(-3.2, -4.6, 1.35, 0.11, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#5a5f63';
g.beginPath();
g.arc(-3.2, -4.6, 0.12, 0, Math.PI * 2);
g.fill();
// a spare wheel
g.fillStyle = '#2f3134';
g.beginPath();
g.arc(1.6, -3.9, 0.42, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#8d9295';
g.beginPath();
g.arc(1.6, -3.9, 0.16, 0, Math.PI * 2);
g.fill();
// the tool board: its outline and the tools' shapes on it
g.fillStyle = '#b9ad94';
g.fillRect(3.2, -3.4, 2.6, 1.5);
g.fillStyle = '#4b4e52';
for (let i = 0; i < 9; i++) g.fillRect(3.4 + i * 0.27, -3.2, 0.06, 0.5 + 0.5 * e.rnd());
// shelves of tins and boxes
g.fillStyle = '#5e5040';
for (const y of [-1.2, -2.2]) g.fillRect(-9, y, 4.2, 0.08);
for (let i = 0; i < 14; i++) {
  const y = i < 7 ? -1.2 : -2.2;
  const w = 0.25 + 0.3 * e.rnd();
  const h = 0.25 + 0.35 * e.rnd();
  g.fillStyle = ['#7d6b55', '#9b8c6f', '#5f6a62', '#8a4f3c'][Math.floor(e.rnd() * 4)];
  g.fillRect(-8.9 + (i % 7) * 0.58, y - h, w, h);
}
// coils of cable hung on a peg
g.strokeStyle = '#3b3632';
g.lineWidth = 0.06;
for (const r of [0.3, 0.26, 0.22]) {
  g.beginPath();
  g.ellipse(7.2, -3.3, r, r * 1.1, 0, 0, Math.PI * 2);
  g.stroke();
}
// the door to the stores, and a pale calendar beside it
g.fillStyle = '#5a4b3b';
g.fillRect(8.1, -2.4, 1.1, 2.4);
g.fillStyle = '#e4dccb';
g.fillRect(6.9, -2.2, 0.4, 0.55);
