// The sign hung in the window, its tubes facing the street (seen from inside): a coffee cup on a saucer in rosy red
// neon, three wisps of steam over it in amber — the wisps a layer that flickers a little, as old neon does. Glows.
// Metres from its foot (the sign's chain at the top).
const tube = (c, path, colour, core) => {
  c.lineCap = 'round';
  c.lineJoin = 'round';
  c.strokeStyle = colour;
  c.lineWidth = 0.035;
  c.stroke(path);
  c.strokeStyle = core;
  c.lineWidth = 0.014;
  c.stroke(path);
};
g.strokeStyle = '#5a5c5c';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(-0.25, -0.9);
g.lineTo(-0.25, -0.55);
g.moveTo(0.25, -0.9);
g.lineTo(0.25, -0.55);
g.stroke();
const cup = new Path2D();
cup.moveTo(-0.24, -0.34);
cup.lineTo(0.2, -0.34);
cup.quadraticCurveTo(0.19, -0.08, -0.02, -0.06);
cup.quadraticCurveTo(-0.23, -0.08, -0.24, -0.34);
cup.moveTo(0.19, -0.29);
cup.bezierCurveTo(0.33, -0.3, 0.32, -0.14, 0.15, -0.15);
cup.moveTo(-0.34, -0.03);
cup.quadraticCurveTo(-0.02, 0.03, 0.3, -0.03);
tube(g, cup, '#ff4f63', '#ffd1d6');
e.layer('steam', { flicker: 0.35 }, c => {
  const steam = new Path2D();
  for (const x of [-0.12, -0.02, 0.08]) {
    steam.moveTo(x, -0.4);
    steam.bezierCurveTo(x + 0.06, -0.47, x - 0.06, -0.53, x, -0.62);
  }
  tube(c, steam, '#ffb347', '#fff0c8');
});
e.light(-0.02, -0.25, 0.45, '#ff5b6b', 0.7, 'tube');
