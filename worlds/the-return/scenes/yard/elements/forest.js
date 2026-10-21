// The far forest, the edge of the world: a band of pines along the horizon, their tops uneven (the haze pales it to
// blue-grey).
const N = e.anim.noise;
g.fillStyle = "#7c8670";
g.beginPath();
g.moveTo(-3200, 2);
for (let x = -3200; x <= 3200; x += 9) g.lineTo(x, -15 - 7 * N(x * 0.004, 3) - 3 * Math.abs(N(x * 0.11, 5)));
g.lineTo(3200, 2);
g.closePath();
g.fill();
g.fillStyle = "#8a9179";
g.fillRect(-3200, -4, 6400, 6);
