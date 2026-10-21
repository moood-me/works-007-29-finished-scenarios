// The left wall of the hut, from inside: hewn logs, the window's deep casing (its panes the element `window`), the
// bench along it under the window (the element `left_bench`). The card faces the room (facing 90): x runs away from the
// eye — x −2.37 at distance 0.48, x 2.37 at the back wall's corner.
// (the window's casing x 1.23…2.07, 0.82…1.72 m up)
const L = e.lib;
const C = L.C;
const rnd = () => e.rnd();
L.logs(g, -2.37, 2.37, -2.42, 0, 0.24, rnd);
// the casing: planed boards round the opening, the sill below it
g.fillStyle = C.board;
g.fillRect(1.23, -1.78, 0.84, 0.08);
g.fillRect(1.23, -1.78, 0.08, 0.98);
g.fillRect(1.99, -1.78, 0.08, 0.98);
g.fillStyle = C.boardDark;
g.fillRect(1.19, -0.84, 0.92, 0.06);
g.fillStyle = "rgba(60,44,30,0.4)";
g.fillRect(1.31, -1.7, 0.68, 0.04);
