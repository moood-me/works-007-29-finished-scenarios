// The valley floor beyond the far bank, to the foothills: barley stubble and dry grass, gold, in long strips; the dark
// rounds of oaks here and there (seen from above: across, and toward the viewer)
const A = e.anim;
g.fillStyle = '#c4a067';
g.fillRect(-2000, -575, 4000, 1150);
for (let i = 0; i < 40; i++) {
  const y = -575 + i * 28.75;
  g.fillStyle = i % 2 ? '#b8935c' : '#cfab72';
  g.fillRect(-2000, y, 4000, 10 + 12 * A.hash(i, 1));
}
for (let i = 0; i < 160; i++) {
  const x = -1900 + A.hash(i, 2) * 3800, y = -560 + A.hash(i, 3) * 1100, r = 4 + 6 * A.hash(i, 4);
  g.fillStyle = '#5e6140';
  g.beginPath();
  g.ellipse(x, y, r, r, 0, 0, Math.PI * 2);
  g.fill();
}
