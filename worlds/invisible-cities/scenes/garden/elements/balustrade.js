// The balustrade along the terrace's edge over the water: a plinth, turned balusters, a broad top rail, square piers
// now and then — and an opening where the twelve steps go down to the water, between two piers with stone balls.
// Painted from x −9 to the house's corner at 3; the opening from −3.45 to −1.75.
const TOP = -0.95;
const stone = '#b9af9c';
const shade = '#a3998a';
const runs = [[-9, -3.45], [-1.75, 3]];
const pier = (x, tall) => {
  const h = tall ? 1.15 : 1.02;
  g.fillStyle = stone;
  g.fillRect(x - 0.16, -h, 0.32, h);
  g.fillStyle = shade;
  g.fillRect(x - 0.19, -h - 0.06, 0.38, 0.08);
  if (tall) {
    g.fillStyle = stone;
    g.beginPath();
    g.arc(x, -h - 0.17, 0.13, 0, Math.PI * 2);
    g.fill();
    g.fillRect(x - 0.06, -h - 0.08, 0.12, 0.06);
  }
};
const baluster = (x) => {
  g.beginPath();
  g.moveTo(x - 0.035, -0.12);
  g.bezierCurveTo(x - 0.075, -0.2, x - 0.075, -0.42, x - 0.03, -0.55);
  g.lineTo(x - 0.03, -0.72);
  g.lineTo(x - 0.05, -0.8);
  g.lineTo(x + 0.05, -0.8);
  g.lineTo(x + 0.03, -0.72);
  g.lineTo(x + 0.03, -0.55);
  g.bezierCurveTo(x + 0.075, -0.42, x + 0.075, -0.2, x + 0.035, -0.12);
  g.closePath();
  g.fill();
};
for (const [a, b] of runs) {
  g.fillStyle = shade;
  g.fillRect(a, -0.13, b - a, 0.13);
  g.fillStyle = stone;
  for (let x = a + 0.2; x < b - 0.1; x += 0.27) baluster(x);
  g.fillRect(a, TOP, b - a, 0.15);
  g.fillStyle = shade;
  g.fillRect(a, TOP + 0.15, b - a, 0.03);
}
for (const x of [-6.6, 0.7]) pier(x, false);
pier(-3.45, true);
pier(-1.75, true);
e.at(-2.6, -0.6, 'steps');
