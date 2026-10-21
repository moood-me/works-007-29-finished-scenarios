// This bank of the valley, curving out on the right 600 m off: the vineyard slope the house stands on, going down to
// the river in terraces — dry-stone walls, the vines in rows, a path zigzagging down, a little chapel, a crown of
// woods on top. Seen from in front, the evening sun on it. Its far right is a pencil drawing.
const L = e.lib;
const N = e.anim.noise;
const ACROSS = 430;
const D = 640;
// the slope's top line: from the water at the left (x −430) up to the woods on the right
const topAt = (x) => {
  const u = L.smooth(-430, 380, x);
  return 2 - 235 * Math.pow(u, 0.85) - 10 * N(x / 60, 4) * u;
};
g.fillStyle = "#9db06f";
g.beginPath();
g.moveTo(-440, 2);
for (let x = -440; x <= 520; x += 8) g.lineTo(x, topAt(x));
g.lineTo(520, 2);
g.fill();
// the terraces: a dry-stone wall every so many metres up, the vines in rows between them
for (let y = -4, i = 0; y > -240; y -= 9 + 3 * L.rnd(i, 3), i++) {
  // where this terrace begins (the slope's line at this height) and runs to the right
  let x0 = -430;
  while (x0 < 520 && topAt(x0) > y - 2) x0 += 4;
  if (x0 >= 520) break;
  g.fillStyle = ["#aebc78", "#a3b56f", "#b8c27f"][i % 3];
  g.fillRect(x0, y - 8, 520 - x0, 8);
  // the vines' rows along the terrace, a darker green line each
  g.fillStyle = "rgba(96, 120, 70, 0.55)";
  g.fillRect(x0, y - 6.4, 520 - x0, 1.2);
  g.fillRect(x0, y - 3.6, 520 - x0, 1.2);
  g.fillStyle = "#d8cdb2";
  g.fillRect(x0, y - 1.3, 520 - x0, 1.3);
}
// the path zigzagging down
g.strokeStyle = "#e3d6b8";
g.lineWidth = 1.6;
g.beginPath();
g.moveTo(40, topAt(40) + 4);
for (let i = 0; i < 9; i++) g.lineTo(i % 2 ? 40 : 120 - 6 * i, topAt(40) + 4 + ((-topAt(40) - 6) * (i + 1)) / 9);
g.stroke();
// the chapel among the vines
g.fillStyle = "#f2ece0";
g.fillRect(150, -96, 12, 9);
g.fillStyle = "#6f7c8a";
g.beginPath();
g.moveTo(149, -96);
g.lineTo(156, -101);
g.lineTo(163, -96);
g.fill();
g.fillRect(150.5, -106, 3, 7);
// woods on the top
g.fillStyle = "#6f8a58";
for (let i = 0; i < 40; i++) {
  const x = -100 + 620 * L.rnd(i, 51);
  const t = topAt(x);
  g.beginPath();
  g.ellipse(x, t + 3, 8 + 10 * L.rnd(i, 53), 6 + 6 * L.rnd(i, 55), 0, 0, Math.PI * 2);
  g.fill();
}
// the road along the water at its foot
g.fillStyle = "#cdbf9f";
g.fillRect(-430, -3, 950, 3);
L.unfinish(g, [-440, -262, 640, 4], ACROSS, D);
