// What is seen through the open panel (the wall of the staircase landing across from it, 2.2 m along): the hall's oak
// panelling, warm in the light of the candles left on the landing, the dark rail of the stair's banister going down.
g.fillStyle = '#4a3020';
g.fillRect(-1.0, -2.2, 2.2, 2.22);
g.strokeStyle = '#33221a';
g.lineWidth = 0.03;
for (let x = -0.95; x < 1.15; x += 0.42) g.strokeRect(x, -1.95, 0.36, 1.0);
for (let x = -0.95; x < 1.15; x += 0.42) g.strokeRect(x, -0.85, 0.36, 0.7);
// the banister: its rail sloping down, its turned balusters
g.fillStyle = '#24170f';
g.save();
g.translate(-1.0, -1.0);
g.rotate(0.32);
g.fillRect(0, 0, 2.6, 0.07);
g.restore();
for (let x = -0.9; x < 1.2; x += 0.16) {
  const top = -1.0 + (x + 1.0) * 0.33;
  g.fillRect(x, top, 0.03, -top);
}
const warm = g.createRadialGradient(0.2, -1.4, 0.1, 0.2, -1.4, 1.4);
warm.addColorStop(0, 'rgba(255,190,110,0.28)');
warm.addColorStop(1, 'rgba(255,190,110,0)');
g.fillStyle = warm;
g.fillRect(-1.0, -2.2, 2.2, 2.22);
