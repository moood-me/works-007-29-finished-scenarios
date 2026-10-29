// The grounds outside the front from above (70 m by 64 m, y toward the viewer; the house's front at y 32, the anchor
// at 40 m), 0.5 m below the hall's floor: the gravel sweep before the porch where the carriages are brought, the lawn
// mown in stripes, and to the right the pond — still dark water with a rim of reeds — where Washington's lantern
// stands that evening (`lantern`).
g.fillStyle = '#5f7a44';
g.fillRect(-35, -32, 70, 64);
for (let x = -35; x < 35; x += 3) {
  g.fillStyle = Math.round(x / 3) % 2 ? '#668248' : '#5a7540';
  g.fillRect(x, -32, 3, 54);
}
// the gravel sweep before the house
g.fillStyle = '#b8ab8e';
g.beginPath();
g.moveTo(-35, 32);
g.lineTo(-35, 21);
g.quadraticCurveTo(-8, 16, 4, 17);
g.quadraticCurveTo(16, 18, 35, 22);
g.lineTo(35, 32);
g.closePath();
g.fill();
g.fillStyle = '#a89c80';
for (let i = 0; i < 400; i++) g.fillRect(-35 + e.rnd() * 70, 18 + e.rnd() * 14, 0.15, 0.15);
// the pond
g.fillStyle = '#4a6a3c';
g.beginPath();
g.ellipse(7, 10, 8.2, 5.4, 0.15, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#2c3c4c';
g.beginPath();
g.ellipse(7, 10, 7.2, 4.6, 0.15, 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(160,184,206,0.35)';
g.beginPath();
g.ellipse(6, 9, 4.5, 2.2, 0.15, 0, Math.PI * 2);
g.fill();
