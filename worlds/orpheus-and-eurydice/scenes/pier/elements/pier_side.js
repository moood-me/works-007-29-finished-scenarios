// The pier's near side, seen across the water (x along the pier, −8 … 8 as its deck; y down, the deck's top at −0.55
// over the lake's bed, the water at −0.05): the edge beam under the deck's planks and the posts going down into the
// water every 1.6 m, darker and wet where the water reaches them; the water hides their feet.
g.fillStyle = '#665746';
g.fillRect(-8, -0.56, 16, 0.15);
g.fillStyle = 'rgba(40,32,26,0.45)';
g.fillRect(-8, -0.43, 16, 0.025);
for (let x = -7.9; x <= 8; x += 1.6) {
  const px = Math.min(x, 7.86);
  g.fillStyle = '#584a3c';
  g.fillRect(px - 0.07, -0.6, 0.14, 0.7);
  g.fillStyle = '#3a3129';
  g.fillRect(px - 0.07, -0.16, 0.14, 0.26);
  g.fillStyle = 'rgba(30,24,20,0.5)';
  g.fillRect(px + 0.035, -0.6, 0.035, 0.7);
}
