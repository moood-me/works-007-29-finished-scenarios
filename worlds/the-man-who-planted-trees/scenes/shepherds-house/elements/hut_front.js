// The hut beyond the ridge (`hut`: the epilogue on the Name — where he went when they came to look): a low dry-stone
// hut, its front 3.4 m wide and 1.9 m to the eave, the dark doorway open, one small square window. Its point `door`
if (!e.state.hut) return;
const hole = (x0, y0, x1, y1) => (x0 < 0.45 && x1 > -0.45 && y0 < 0 && y1 > -1.75) || (x0 < 1.25 && x1 > 0.85 && y0 < -0.95 && y1 > -1.4);
g.fillStyle = "#958470";
g.fillRect(-1.7, -1.9, 3.4, 1.9);
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
courses(-1.7, 1.7, -1.9, () => 1.7);
g.fillStyle = "#2a231e";
g.fillRect(-0.42, -1.72, 0.84, 1.72);
g.fillRect(0.87, -1.38, 0.36, 0.4);
g.fillStyle = "#c9b99b";
g.fillRect(-0.58, -1.92, 1.16, 0.2);
e.at(0, -0.9, "door");
