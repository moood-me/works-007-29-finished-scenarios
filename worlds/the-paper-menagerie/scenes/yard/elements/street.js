// The street behind the yard, from above (metres; its middle at distance −31, y toward the start: distance d is
// y −31 − d): the grass verge under the front fence (d −1.5…−1.75), our sidewalk of concrete slabs (…−3.25), the curb,
// the asphalt with its dashed yellow middle line (…−10.4), the far curb and sidewalk (…−12), then the lawns across the
// street — Mark's front path (across +1) and his driveway (across −5.5) — on to the far distance.
const Y = d => -31 - d;
g.fillStyle = '#8cab6a';
g.fillRect(-200, -29.6, 400, 59.2);
for (let i = 0; i < 900; i++) {
  const x = -40 + e.rnd() * 80,
    y = Y(-12) + e.rnd() * 30;
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(108,138,80,0.5)' : 'rgba(160,184,112,0.5)';
  g.beginPath();
  g.ellipse(x, y, 0.1 + e.rnd() * 0.3, 0.04 + e.rnd() * 0.1, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// our sidewalk: pale concrete slabs, their joints
g.fillStyle = '#cbc6ba';
g.fillRect(-200, Y(-1.75), 400, 1.5);
g.fillStyle = 'rgba(120,114,104,0.45)';
for (let x = -200; x < 200; x += 1.5) g.fillRect(x, Y(-1.75), 0.03, 1.5);
// the curb and the asphalt
g.fillStyle = '#b5afa2';
g.fillRect(-200, Y(-3.25), 400, 0.15);
g.fillStyle = '#5f5f63';
g.fillRect(-200, Y(-3.4), 400, 7);
for (let i = 0; i < 500; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(80,80,84,0.6)' : 'rgba(110,110,112,0.5)';
  g.fillRect(-40 + e.rnd() * 80, Y(-3.5) + e.rnd() * 6.8, 0.15 + e.rnd() * 0.4, 0.04);
}
g.fillStyle = '#e2c04e';
for (let x = -200; x < 200; x += 6) g.fillRect(x, Y(-6.9) - 0.06, 3, 0.12);
// the far curb and sidewalk
g.fillStyle = '#b5afa2';
g.fillRect(-200, Y(-10.4), 400, 0.15);
g.fillStyle = '#cbc6ba';
g.fillRect(-200, Y(-10.55), 400, 1.45);
g.fillStyle = 'rgba(120,114,104,0.45)';
for (let x = -200; x < 200; x += 1.5) g.fillRect(x, Y(-10.55), 0.03, 1.45);
// Mark's path to his door and his driveway, and the neighbours' driveways
g.fillStyle = '#c4bdb0';
g.fillRect(0.5, Y(-12), 1.0, 8.2);
g.fillStyle = '#9a958c';
for (const x of [-5.5, 8, -22]) g.fillRect(x - 1.5, Y(-10.4), 3, 9.6);
// our side: the path from the gate to the sidewalk
g.fillStyle = '#c4bdb0';
g.fillRect(-0.9, Y(-1.5), 1.3, 0.3);
