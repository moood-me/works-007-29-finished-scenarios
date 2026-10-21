// The stone bridge over the canal 45 m off, its side toward the viewer: x −12.5…12.5 across the canal (the canal's
// walls at ±10.85), its foot at the water (y 0; the streets 2.2 m over it, at −2.2): a low hump of pinkish granite
// with one wide arch the water shows through, an iron railing of thin bars over its deck, granite posts at its ends
const deck = (x) => -2.2 - 0.9 * (1 - (x / 12.5) ** 2);
g.beginPath();
g.moveTo(-12.5, 0);
for (let k = 0; k <= 50; k++) g.lineTo(-12.5 + k * 0.5, deck(-12.5 + k * 0.5));
g.lineTo(12.5, 0);
g.closePath();
g.moveTo(9.5, 0);
g.ellipse(0, 0, 9.5, 2.0, 0, 0, Math.PI, true);
g.closePath();
g.fillStyle = '#ab9c95';
g.fill('evenodd');
g.strokeStyle = e.lib.INK;
g.lineWidth = 0.04;
g.stroke();
// (the voussoirs round the arch)
g.beginPath();
for (let k = 1; k < 18; k++) {
  const a = Math.PI + (k / 18) * Math.PI;
  g.moveTo(9.5 * Math.cos(a), 2.0 * Math.sin(a));
  g.lineTo(10.1 * Math.cos(a), 2.45 * Math.sin(a));
}
g.strokeStyle = 'rgba(74,63,58,0.5)';
g.lineWidth = 0.03;
g.stroke();
// the railing: a top rail a metre over the deck, thin bars
g.beginPath();
for (let k = 0; k <= 147; k++) {
  const x = -11.8 + k * 0.16;
  g.moveTo(x, deck(x));
  g.lineTo(x, deck(x) - 0.95);
}
g.moveTo(-11.8, deck(-11.8) - 0.95);
for (let k = 1; k <= 59; k++) g.lineTo(-11.8 + k * 0.4, deck(-11.8 + k * 0.4) - 0.95);
g.strokeStyle = '#3c4140';
g.lineWidth = 0.03;
g.stroke();
// its granite posts
g.fillStyle = '#a69791';
g.strokeStyle = e.lib.INK;
for (const x of [-12.4, 11.9]) {
  g.fillRect(x, deck(x + 0.25) - 1.25, 0.5, 1.25);
  g.strokeRect(x, deck(x + 0.25) - 1.25, 0.5, 1.25);
}
