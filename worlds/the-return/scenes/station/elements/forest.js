// The far forest along the horizon, a band of pines with uneven tops — in this fog only a grey ghost of it shows.
const N = e.anim.noise;
g.fillStyle = "#86907e";
g.beginPath();
g.moveTo(-2400, 2);
for (let x = -2400; x <= 2400; x += 8) g.lineTo(x, -12 - 6 * N(x * 0.005, 3) - 2.5 * Math.abs(N(x * 0.12, 5)));
g.lineTo(2400, 2);
g.closePath();
g.fill();
