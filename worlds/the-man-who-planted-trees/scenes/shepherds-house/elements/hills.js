// Low rolling hills where the plateau ends, a kilometre and a half off: dusty olive-brown, a rounded line
g.fillStyle = "#7f725f";
g.beginPath();
g.moveTo(-4000, 5);
for (let x = -4000; x <= 4000; x += 40) {
  const n = e.anim.noise(x / 700, 5) * 0.7 + e.anim.noise(x / 180, 6) * 0.3;
  g.lineTo(x, -(14 + 46 * Math.max(0, n)));
}
g.lineTo(4000, 5);
g.closePath();
g.fill();
