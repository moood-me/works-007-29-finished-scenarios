// The embankment's face where the square drops to the river (metres from the water, the square's edge at −0.9): rough
// river stones set in lime, black with the wet at the water, green slime and weed, a flight of worn steps going down
// to the water by the landing stage.
g.fillStyle = '#6e665a';
g.fillRect(-40, -0.92, 80, 0.94);
for (let i = 0; i < 900; i++) {
  const x = -40 + e.rnd() * 80;
  const y = -0.88 + e.rnd() * 0.82;
  g.fillStyle = e.rnd() < 0.35 ? '#857b6c' : e.rnd() < 0.5 ? '#5d564c' : '#77705f';
  g.beginPath();
  g.ellipse(x, y, 0.1 + e.rnd() * 0.14, 0.06 + e.rnd() * 0.07, e.rnd() - 0.5, 0, Math.PI * 2);
  g.fill();
}
const wet = g.createLinearGradient(0, 0, 0, -0.5);
wet.addColorStop(0, 'rgba(30,32,26,0.75)');
wet.addColorStop(0.5, 'rgba(56,72,44,0.35)');
wet.addColorStop(1, 'rgba(56,72,44,0)');
g.fillStyle = wet;
g.fillRect(-40, -0.5, 80, 0.52);
// the coping along the top
g.fillStyle = '#8e8676';
g.fillRect(-40, -0.92, 80, 0.08);
// the steps down by the landing stage
for (let k = 0; k < 5; k++) {
  g.fillStyle = k % 2 ? '#8a8272' : '#7c7466';
  g.fillRect(0.9 + k * 0.06, -0.9 + k * 0.18, 1.2, 0.18);
  g.fillStyle = 'rgba(40,36,30,0.4)';
  g.fillRect(0.9 + k * 0.06, -0.74 + k * 0.18, 1.2, 0.02);
}
