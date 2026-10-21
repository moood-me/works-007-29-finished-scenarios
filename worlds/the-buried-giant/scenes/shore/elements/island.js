// The island out in the sea: a long low land with one rounded hill and a fringe of trees, lilac-grey with distance
const r = e.lib.rnd(21);
g.fillStyle = '#8a8296';
g.beginPath();
g.moveTo(-230, 2);
const top = x => {
  const hill = 44 * Math.exp(-Math.pow((x + 30) / 70, 2)), shoulder = 18 * Math.exp(-Math.pow((x - 90) / 80, 2));
  const ends = Math.min(1, (x + 230) / 60) * Math.min(1, (230 - x) / 50);
  return -(8 + hill + shoulder) * ends;
};
for (let x = -230; x <= 230; x += 5) g.lineTo(x, top(x));
g.lineTo(230, 2);
g.closePath();
g.fill();
// the trees along its back, a shade darker
g.fillStyle = '#7b748a';
for (let i = 0; i < 70; i++) {
  const x = -190 + r() * 380, y = top(x), s = 3 + r() * 4;
  g.beginPath();
  g.ellipse(x, y + s * 0.4, s * 0.8, s * 1.2, 0, 0, Math.PI * 2);
  g.fill();
}
// a pale line of shore at its foot
g.fillStyle = '#b4a8ae';
g.fillRect(-215, -1.5, 430, 2);
