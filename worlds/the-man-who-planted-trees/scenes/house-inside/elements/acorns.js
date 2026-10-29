// The acorns on the table (from above, as the table top): the heap he pours out (its layer shrinks as the tens are
// counted out of it), the cracked ones put aside by the Traveller's place, and the ten little heaps of ten in a row
// along the near edge — each a layer, shown and scaled by `acorns`, `tens`, `counted` (animate): nothing is painted
// again as they are counted
const r = 0.012;
e.layer('heap', { pivot: [0.05, -0.05] }, (g) => {
  for (const [x, y, a] of e.lib.heap(110, 0.05, -0.05, 0.2, 0.13, 3)) e.lib.acorn(g, x, y, r, a, false);
  for (const [x, y, a] of e.lib.heap(60, 0.05, -0.05, 0.1, 0.07, 4)) e.lib.acorn(g, x, y, r, a, false);
});
e.layer('cracked', {}, (g) => {
  for (const [x, y, a] of e.lib.heap(10, -0.36, 0.06, 0.05, 0.035, 5)) e.lib.acorn(g, x, y, r, a, true);
});
for (let k = 0; k < 10; k++) {
  const cx = -0.5 + k * 0.105, cy = 0.2;
  e.layer(`ten${k}`, {}, (g) => {
    for (const [x, y, a] of e.lib.heap(10, cx, cy, 0.03, 0.025, 10 + k)) e.lib.acorn(g, x, y, r, a, false);
  });
}
