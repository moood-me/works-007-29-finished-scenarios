// What is seen through the doorway, 13.5 m ahead: the meadow under the earth — its pale lilac haze, the dark grass at
// the foot, a few pale asphodels standing in it. It glows (the element "glows"): it is the light the meadow gives,
// coming into the hall through the door.
const air = g.createLinearGradient(0, -3.2, 0, 0);
air.addColorStop(0, '#7d79a6');
air.addColorStop(0.7, '#b4b0d6');
air.addColorStop(1, '#a3a0c6');
g.fillStyle = air;
g.fillRect(-2, -3.2, 4, 3.25);
g.fillStyle = '#4a5a58';
g.fillRect(-2, -0.25, 4, 0.3);
g.fillStyle = '#e6e3f4';
for (let i = 0; i < 9; i++) {
  const x = -1.8 + 3.6 * e.anim.hash(i, 3), h = 0.3 + 0.35 * e.anim.hash(i, 4);
  g.fillRect(x, -0.2 - h, 0.012, h);
  for (let k = 0; k < 5; k++) {
    g.beginPath();
    g.arc(x + (e.anim.hash(i * 5 + k, 5) - 0.5) * 0.05, -0.2 - h + k * 0.04, 0.02, 0, Math.PI * 2);
    g.fill();
  }
}
