// The ground of the station, seen from above (x across, y toward the eye; its middle 10 m left and 35 m ahead, so a
// point (across, d) is at x across + 10, y 35 − d; it reaches from under the eye to 70 m ahead). The line runs through
// it aslant — from behind the eye's left (where the train will come from) away to the far left, into the fog (the lib's
// LINE: its direction, its point P0): painted along it (x along the line, y to its right), from the far side in —
// the weeds and sand beyond, the siding, the main track's ballast and sleepers and its two rails, the kerb of old
// sleepers laid end to end along the platform's edge, and the platform itself on the right: packed sand and fine
// cinders, swept, the tread worn pale along it and a path across it to the station house's door, dark cinders and
// dropped straws. Nothing written anywhere.
const L = e.lib, K = L.LINE;
g.fillStyle = "#c8b28a";
g.fillRect(-50, -35, 100, 70);
g.save();
g.translate(K.p0[0] + 10, 35 - K.p0[1]);
g.rotate(Math.atan2(-K.u[1], K.u[0]));
// (x along the line from 12 m behind P0 to 90 m on; y to its right)
const X0 = -12, X1 = 90, W = X1 - X0;
// beyond the siding: weeds and sand
g.fillStyle = "#b9b083";
g.fillRect(X0, -40, W, 34);
L.strokes(g, 71, X0, -14, W, 8, ["#a3a372", "#c7bc8d", "#93966a"], 600, 0.8, 0.12, 0, 0.4);
g.fillStyle = "#bfb491";
g.fillRect(X0, -6.2, W, 2.8);
// each track: ballast, sleepers every 0.55 m, the ballast darker under the rails, the rails
const track = (mid, seed, rails) => {
  g.fillStyle = "#968e80";
  g.fillRect(X0, mid - 1.75, W, 3.5);
  L.strokes(g, seed, X0, mid - 1.75, 42, 3.5, ["#8e897f", "#bab3a3", "#7d776c", "#c9bfa8"], 700, 0.22, 0.08, 0, 0.5);
  for (let i = 0, x = X0; x < X1; i++, x += 0.55) {
    g.fillStyle = ["#5d5248", "#665a4e", "#574d44", "#6c6052"][Math.floor(L.rnd(i, seed + 1) * 4)];
    g.fillRect(x + 0.06 * (L.rnd(i, seed + 2) - 0.5), mid - 1.35, 0.24, 2.7);
  }
  for (const r of [mid - 0.76, mid + 0.76]) {
    g.fillStyle = "rgba(128,70,42,0.42)";
    g.fillRect(X0, r - 0.14, W, 0.28);
    g.fillStyle = rails;
    g.fillRect(X0, r - 0.05, W, 0.1);
    g.fillStyle = "#d3cec4";
    g.fillRect(X0, r - 0.035, W, 0.05);
  }
};
track(-4.6, 81, "#8a4a2c");
track(0, 91, "#96512e");
// the kerb: old sleepers end to end along the platform's edge, 2 m to the right of the line
for (let i = 0, x = X0; x < X1; i++, x += 2.7) {
  g.fillStyle = ["#7b6f60", "#857867", "#71665a"][i % 3];
  g.fillRect(x, 1.95, 2.68, 0.26);
  g.fillStyle = "rgba(48,40,32,0.6)";
  g.fillRect(x + 2.66, 1.95, 0.03, 0.26);
}
// the platform: the tread along it, cinders, straws (the brush, as on the ballast, only up to 30 m along: farther it is seen small, in the fog)
g.globalAlpha = 0.35;
g.fillStyle = "#e2d4b2";
g.fillRect(X0, 2.6, W, 1.8);
g.globalAlpha = 1;
L.strokes(g, 101, X0, 2.2, 42, 14, ["#b4a07a", "#d6c7a2", "#a5916c", "#dccdaa"], 1600, 0.35, 0.06, 0, 0.4);
L.strokes(g, 103, X0, 2.6, W, 1.8, ["#e4dbc4", "#c2b493"], 700, 0.6, 0.05, 0, 0.35);
for (let i = 0; i < 200; i++) {
  const x = X0 + 30 * L.rnd(i, 105), yy = 2.3 + 8 * L.rnd(i, 106);
  g.fillStyle = L.rnd(i, 107) < 0.7 ? "#6f655a" : "#d9c27e";
  g.fillRect(x, yy, 0.02 + 0.03 * L.rnd(i, 108), 0.012 + 0.012 * L.rnd(i, 109));
}
// the path across the platform to the house's door (L.HOUSE: its door `along` the line, its front 6.5 m to the right)
g.globalAlpha = 0.3;
g.fillStyle = "#e0d6bd";
g.beginPath();
g.ellipse(L.HOUSE.door, 4.3, 1.1, 2.3, 0, 0, Math.PI * 2);
g.fill();
g.globalAlpha = 1;
g.restore();
L.paper(g, -50, -35, 100, 70, 0.8);
