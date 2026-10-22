// A wing chair in old oxblood leather by the fire, from before (1.1 m wide, 1.2 m high), turned toward the hearth:
// its wings, its rolled arms, the seat cushion, short turned legs.
g.fillStyle = '#4a1a16';
g.beginPath();
g.moveTo(-0.42, -0.45);
g.lineTo(-0.42, -1.05);
g.quadraticCurveTo(-0.42, -1.2, -0.25, -1.2);
g.lineTo(0.25, -1.2);
g.quadraticCurveTo(0.42, -1.2, 0.42, -1.05);
g.lineTo(0.42, -0.45);
g.closePath();
g.fill();
// the wings
g.fillStyle = '#5a201b';
for (const s of [-1, 1]) {
  g.beginPath();
  g.moveTo(s * 0.42, -1.1);
  g.quadraticCurveTo(s * 0.56, -1.05, s * 0.54, -0.75);
  g.lineTo(s * 0.52, -0.5);
  g.lineTo(s * 0.4, -0.5);
  g.closePath();
  g.fill();
}
// the arms, the seat
g.fillStyle = '#62241e';
g.fillRect(-0.55, -0.66, 0.2, 0.36);
g.fillRect(0.35, -0.66, 0.2, 0.36);
g.fillStyle = '#6a2a22';
g.fillRect(-0.36, -0.48, 0.72, 0.16);
g.fillStyle = '#3a1410';
g.fillRect(-0.55, -0.32, 1.1, 0.18);
// buttons in the leather
g.fillStyle = '#2e0f0c';
for (let y = -1.08; y < -0.55; y += 0.12) for (let x = -0.3; x <= 0.31; x += 0.15) {
  g.beginPath();
  g.arc(x + (Math.round(y * 8) % 2 ? 0.075 : 0), y, 0.012, 0, Math.PI * 2);
  g.fill();
}
// the legs
g.fillStyle = '#2a170e';
for (const x of [-0.48, 0.48]) g.fillRect(x - 0.03, -0.14, 0.06, 0.14);
