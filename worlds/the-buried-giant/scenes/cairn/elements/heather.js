// A low clump of heather, brown-purple, a little lighter at its top
const r = e.lib.rnd(61);
for (let i = 0; i < 22; i++) {
  g.fillStyle = ['#857377', '#927e7c', '#77696a', '#9d8a84'][Math.floor(r() * 4)];
  g.beginPath();
  g.ellipse((r() - 0.5) * 0.8, -0.12 - r() * 0.18, 0.1 + r() * 0.12, 0.07 + r() * 0.06, 0, 0, Math.PI * 2);
  g.fill();
}
