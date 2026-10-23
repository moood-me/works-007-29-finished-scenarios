// The bay below the city, seen from above: deep blue out to sea, lighter and greener toward the shore, long faint
// streaks of the swell
const A = e.anim, w = 80000, d = 29400;
const sea = g.createLinearGradient(0, -d / 2, 0, d / 2);
sea.addColorStop(0, '#5b7fa6');
sea.addColorStop(0.75, '#4f7fa3');
sea.addColorStop(1, '#5f9aa8');
g.fillStyle = sea;
g.fillRect(-w / 2, -d / 2, w, d);
g.strokeStyle = '#7ea6c4';
g.lineCap = 'round';
for (let i = 0; i < 400; i++) {
  const y = d / 2 - Math.pow(A.hash(i, 1), 2.2) * d, x = (A.hash(i, 2) - 0.5) * w * 0.6, len = 40 + 900 * A.hash(i, 3) * (1 - y / d);
  g.lineWidth = 3 + 10 * A.hash(i, 4);
  g.beginPath();
  g.moveTo(x - len, y);
  g.lineTo(x + len, y);
  g.stroke();
}
