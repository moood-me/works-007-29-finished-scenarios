// The Traveller's row of beeches on the Road (`beeches` "row"): one planted a year, each time he comes — along the
// path's right side from the wood toward the people, the oldest by the wood (lib.js: rowPlace, beechHeight). As many
// as `beech_row` says (13 in the third chapter as he comes, 14 once he plants the year's; past fourteen a second row
// beside the first), each as tall as its years. Each tree a part standing at its own place; too small and still for
// the wind to show. Where the next one goes is the unseen `beech_next` (the script puts it there)
if (e.state.beeches !== "row") return;
const n = Math.max(0, Math.min(28, Math.round(e.state.beech_row || 0))), [a0, d0] = [e.spot.across, e.spot.distance];
for (let k = 0; k < n; k++) {
  const [a, d] = e.lib.rowPlace(k), h = e.lib.beechHeight(n - k), w = h < 1.2 ? 0.2 : h * 0.3;
  e.part(a - a0, d - d0, (g) => e.lib.beech(g, e, { h, w, wind: 0 }), [-w - 0.3, -h - 0.3, w + 0.3, 0.1]);
}
