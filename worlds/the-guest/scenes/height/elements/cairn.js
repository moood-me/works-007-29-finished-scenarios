// The cairn at the head of the spur, where the path leaves the top to go down toward Tingit (metres, from its foot):
// rough limestone stones piled to the height of a man's hip, wider at the foot, each a different grey, pale on its top
// and darker under it.
const stones = [];
let y = 0;
for (let row = 0; row < 6; row++) {
  const w = 0.9 - row * 0.12;
  const n = row < 2 ? 3 : row < 4 ? 2 : 1;
  const h = 0.17 - row * 0.012;
  let x = -w / 2;
  for (let k = 0; k < n; k++) {
    const sw = w / n;
    stones.push([x + (e.rnd() - 0.5) * 0.04, y, sw * (0.92 + e.rnd() * 0.12), h * (0.85 + e.rnd() * 0.3)]);
    x += sw;
  }
  y -= h * 0.92;
}
for (const [x, y0, w, h] of stones) {
  const j = () => (e.rnd() - 0.5) * 0.04;
  g.fillStyle = ['#a29b8d', '#b3ac9d', '#978f82', '#aaa192'][Math.floor(e.rnd() * 4)];
  g.beginPath();
  g.moveTo(x + j(), y0);
  g.lineTo(x + j(), y0 - h * 0.7);
  g.lineTo(x + w * 0.2 + j(), y0 - h);
  g.lineTo(x + w * 0.8 + j(), y0 - h + j());
  g.lineTo(x + w + j(), y0 - h * 0.6);
  g.lineTo(x + w + j(), y0);
  g.closePath();
  g.fill();
  g.fillStyle = 'rgba(214,208,194,0.7)';
  g.fillRect(x + w * 0.2, y0 - h, w * 0.55, 0.02);
  g.fillStyle = 'rgba(80,75,68,0.55)';
  g.fillRect(x, y0 - 0.015, w, 0.015);
}
