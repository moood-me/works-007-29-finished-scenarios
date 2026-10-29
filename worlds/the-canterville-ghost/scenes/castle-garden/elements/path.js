// The garden path from above (18 m long, 1 m wide): gravel along the foot of the lawn, from the left out of the
// shrubbery to the avenue, its edges cut clean in the turf.
g.fillStyle = '#c4b08a';
g.fillRect(-9, -0.5, 18, 1);
for (let i = 0; i < 900; i++) {
  g.fillStyle = ['#b8a47e', '#d2c29c', '#ad9a74'][Math.floor(e.rnd() * 3)];
  g.fillRect(-9 + e.rnd() * 18, -0.5 + e.rnd() * 1, 0.04 + e.rnd() * 0.05, 0.04 + e.rnd() * 0.05);
}
g.fillStyle = 'rgba(90,110,60,0.5)';
g.fillRect(-9, -0.52, 18, 0.04);
g.fillRect(-9, 0.48, 18, 0.04);
