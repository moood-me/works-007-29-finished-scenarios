// The old castle's high wall on the spur, 11 m ahead on the left, its face toward us: on its right the stump of the
// tower (10 m, its top broken), on its left the curtain wall, ragged, with a tall pointed window open to the sky; worn
// sandstone in courses, put-log holes, weather streaks; ivy over its lower part, grass and small bushes on its broken
// tops (their own layers, in the wind). Its left is a pencil drawing.
const L = e.lib;
const N = e.anim.noise;
const ACROSS = -4.4;
const D = 11;
const box = [-6.4, -10.6, 3.6, 0.05];
// the silhouette: the curtain wall's ragged top rising from the left, the tower's broken top on the right
const outline = [[-6.4, 0.05], [-6.4, -4.6], [-5.8, -5.0], [-5.3, -4.8], [-4.7, -5.6], [-4.0, -5.9], [-3.4, -6.6],
  [-2.6, -6.8], [-1.9, -6.6], [-1.2, -7.0], [-0.4, -6.9], [0.2, -7.2], [0.8, -7.4], [0.8, -9.3], [1.3, -9.7],
  [1.8, -9.4], [2.3, -9.9], [2.9, -9.5], [3.3, -9.0], [3.6, -8.6], [3.6, 0.05]];
const sil = new Path2D();
outline.forEach(([x, y], i) => (i ? sil.lineTo(x, y) : sil.moveTo(x, y)));
sil.closePath();
g.fillStyle = "#b6a68c";
g.fill(sil);
g.save();
g.clip(sil);
// the stones in courses, each its own warm grey
const tones = ["#c3b398", "#b9a88c", "#ccbda2", "#ae9e84", "#c7b79a", "#bfae92"];
let n = 0;
for (let y = 0; y > -10.4; y -= 0.34) {
  for (let x = -6.4 + 0.3 * L.rnd(n, 111); x < 3.6; n++) {
    const w = 0.4 + 0.45 * L.rnd(n, 113);
    g.fillStyle = tones[n % tones.length];
    g.fillRect(x + 0.025, y - 0.315, w - 0.05, 0.29);
    x += w;
  }
}
// the tower's curve: its sides a shade deeper (a painted roundness; the light is the scene's)
const round = g.createLinearGradient(0.8, 0, 3.6, 0);
round.addColorStop(0, "rgba(110, 96, 84, 0.3)");
round.addColorStop(0.35, "rgba(110, 96, 84, 0)");
round.addColorStop(0.7, "rgba(110, 96, 84, 0)");
round.addColorStop(1, "rgba(110, 96, 84, 0.24)");
g.fillStyle = round;
g.fillRect(0.8, -10.4, 2.8, 10.45);
// weather streaks down from the tops, put-log holes, the tower's arrow slits
for (let i = 0; i < 24; i++) {
  const x = -6.3 + 9.8 * L.rnd(i, 115);
  g.fillStyle = `rgba(96, 88, 78, ${0.08 + 0.1 * L.rnd(i, 117)})`;
  g.fillRect(x, -10.4, 0.08 + 0.2 * L.rnd(i, 119), 4 + 5 * L.rnd(i, 121));
}
g.fillStyle = "#5e544a";
for (let i = 0; i < 9; i++) g.fillRect(-5.6 + 0.62 * i, -4.1 + 0.06 * L.rnd(i, 123), 0.13, 0.13);
for (const [x, y] of [[2.1, -7.0], [1.8, -3.6]]) {
  g.fillRect(x, y, 0.12, 0.85);
  g.fillRect(x - 0.12, y + 0.3, 0.36, 0.1);
}
g.restore();
// the tall pointed window, open to the sky: cut out of the wall, its jambs and arch drawn round it
const win = new Path2D();
win.moveTo(-1.4, -2.9);
win.lineTo(-1.4, -4.9);
win.quadraticCurveTo(-1.4, -5.9, -0.8, -6.25);
win.quadraticCurveTo(-0.2, -5.9, -0.2, -4.9);
win.lineTo(-0.2, -2.9);
win.closePath();
g.strokeStyle = "#d8cab0";
g.lineWidth = 0.16;
g.stroke(win);
g.save();
g.globalCompositeOperation = "destination-out";
g.fill(win);
g.restore();
g.fillStyle = "#9c8e78";
g.fillRect(-1.55, -2.9, 1.5, 0.14);
L.unfinish(g, box, ACROSS, D);
// ivy over the wall's foot and up the tower's left: dark glossy leaves in clumps, stirring a little
e.layer("ivy", { wind: 0.12, pivot: [-1, -5] }, (c) => {
  for (let i = 0; i < 280; i++) {
    const u = L.rnd(i, 125);
    const x = -6.3 + 7.6 * u + 0.4 * N(i, 3);
    const top = -2.4 - 4.2 * u * u;
    const y = top * L.rnd(i, 127) ** 0.7;
    if (x > -1.55 && x < -0.05 && y < -2.8) continue;
    c.fillStyle = ["#4f6f3e", "#5d7d47", "#46663a", "#6a8a50"][i % 4];
    L.leaf(c, x, y, 0.16 + 0.1 * L.rnd(i, 129), -0.6 + 1.2 * L.rnd(i, 131));
    c.fill();
  }
  L.unfinish(c, [-6.4, -7, 1.6, 0.05], ACROSS, D);
});
// the top of the outline over x (the wall's or the tower's broken edge)
const topAt = (x) => {
  for (let i = 1; i < outline.length; i++) {
    const [ax, ay] = outline[i - 1];
    const [bx, by] = outline[i];
    if (ax !== bx && x >= Math.min(ax, bx) && x <= Math.max(ax, bx)) return ay + ((by - ay) * (x - ax)) / (bx - ax);
  }
  return -7;
};
// grass and small bushes on the broken tops, each stretch its own layer in the wind
const stretches = [[-6.2, -3.0], [-3.0, 0.7], [0.9, 3.5]];
stretches.forEach(([x0, x1], k) => {
  const mid = (x0 + x1) / 2;
  e.layer(`tufts${k}`, { wind: 0.4, pivot: [mid, topAt(mid)] }, (c) => {
    for (let i = 0; i < 40; i++) {
      const x = x0 + (x1 - x0) * L.rnd(i + k * 50, 133);
      const y = topAt(x) + 0.05;
      const h = 0.18 + 0.35 * L.rnd(i + k * 50, 135);
      c.strokeStyle = ["#86a05a", "#9cad62", "#7a9450"][i % 3];
      c.lineWidth = 0.035;
      c.beginPath();
      c.moveTo(x, y);
      c.quadraticCurveTo(x + 0.08, y - h * 0.6, x + 0.16 * (L.rnd(i, 137) - 0.3), y - h);
      c.stroke();
    }
    for (let i = 0; i < 4; i++) {
      const x = x0 + (x1 - x0) * L.rnd(i + k * 9, 139);
      c.fillStyle = "#62804a";
      c.beginPath();
      c.ellipse(x, topAt(x) - 0.2, 0.3 + 0.2 * L.rnd(i, 141), 0.24, 0, 0, Math.PI * 2);
      c.fill();
    }
    L.unfinish(c, [x0 - 0.6, -10.6, x1 + 0.6, -4], ACROSS, D);
  });
});
