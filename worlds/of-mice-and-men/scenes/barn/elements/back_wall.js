// The back wall, facing the room (metres from its foot at the middle; x −4.95…4.95): the same grey boards up into the
// gable (the ridge at 7.6 m); the big double doors to the river, shut (x −1.4…1.4, 3.3 m high), their boards
// diagonal-braced, the iron track and its rollers over them; high in the gable the small loft door, shut
// (x −0.65…0.65, 5.2…6.6 m). The daylight round both is `door_light`.
g.save();
g.beginPath();
g.moveTo(-4.95, 0.02);
g.lineTo(-4.95, -4.8);
g.lineTo(0, -7.65);
g.lineTo(4.95, -4.8);
g.lineTo(4.95, 0.02);
g.closePath();
g.clip();
e.lib.planks(g, -4.95, -7.65, 4.95, 0.02, 0.27, '#988670', 3);
g.restore();
g.fillStyle = 'rgba(60,45,30,0.25)';
g.fillRect(-4.95, -0.25, 9.9, 0.27);
// the doors
for (const [x0, x1, s] of [[-1.4, 0, 17], [0, 1.4, 29]]) {
  e.lib.planks(g, x0, -3.3, x1, 0, 0.2, '#8f7a60', s);
  g.fillStyle = '#7a654c';
  g.fillRect(x0, -3.3, 1.4, 0.16);
  g.fillRect(x0, -1.75, 1.4, 0.14);
  g.fillRect(x0, -0.2, 1.4, 0.16);
  g.beginPath();
  g.moveTo(x0 + 0.05, -0.2);
  g.lineTo(x0 + 0.2, -0.2);
  g.lineTo(x1 - 0.05, -1.61);
  g.lineTo(x1 - 0.2, -1.61);
  g.closePath();
  g.fill();
  g.beginPath();
  g.moveTo(x0 + 0.05, -1.75);
  g.lineTo(x0 + 0.2, -1.75);
  g.lineTo(x1 - 0.05, -3.14);
  g.lineTo(x1 - 0.2, -3.14);
  g.closePath();
  g.fill();
}
g.fillStyle = '#3a3532';
g.fillRect(-1.7, -3.52, 3.4, 0.08);
for (const x of [-1.1, 0.3]) {
  g.beginPath();
  g.arc(x, -3.42, 0.07, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#4b3a2a';
g.fillRect(-0.12, -1.2, 0.08, 0.2);
// the loft door
e.lib.planks(g, -0.65, -6.6, 0.65, -5.2, 0.22, '#8a765d', 37);
g.fillStyle = '#76624a';
g.fillRect(-0.75, -6.7, 1.5, 0.1);
g.fillRect(-0.75, -5.2, 1.5, 0.1);
// the pulley's beam out over the loft door
g.fillStyle = '#5e4c3a';
g.fillRect(-0.12, -7.1, 0.24, 0.2);
