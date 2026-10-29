// The hut's gable end (`hut`): the same dry-laid stone up to the roof's point, 2.9 m
if (!e.state.hut) return;
const hole = () => false;
g.fillStyle = "#958470";
g.beginPath();
g.moveTo(-1.3, 0);
g.lineTo(-1.3, -1.9);
g.lineTo(0, -2.9);
g.lineTo(1.3, -1.9);
g.lineTo(1.3, 0);
g.closePath();
g.fill();
const STONE = ["#bfae90", "#b5a385", "#c6b697", "#ad9b7e", "#bba98a"];
const courses = (left, right, top, half) => {
  let y = 0;
  while (y > top) {
    const h = 0.18 + e.rnd() * 0.1, t = Math.max(top, y - h), hw = half(t);
    let x = left - e.rnd() * 0.3;
    while (x < right) {
      const wd = 0.3 + e.rnd() * 0.35, x0 = Math.max(x + 0.025, -hw), x1 = Math.min(x + wd - 0.025, hw);
      if (x1 - x0 > 0.08 && !hole(x0, t, x1, y)) {
        g.fillStyle = STONE[Math.floor(e.rnd() * STONE.length)];
        g.beginPath();
        g.roundRect(x0, t + 0.025, x1 - x0, y - t - 0.045, 0.04);
        g.fill();
      }
      x += wd;
    }
    y = t;
  }
};
courses(-1.3, 1.3, -2.9, (t) => (t > -1.9 ? 1.3 : 1.3 * (2.9 + t)));
