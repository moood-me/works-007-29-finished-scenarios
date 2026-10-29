// The oaks of the near edge by the hives, the first the village cuts when no one says whose the wood is (as oak_b:
// lib.js oakOf), or their stumps (lib.js: stump; the point `cut`) — `stumps` "begun" and "lower" fresh; "begun_old" ten
// years on, old and grown about with undergrowth; "lower_old" old, with young oaks a man's height beside them
const s = e.state.stumps;
const kind = { begun: "fresh", lower: "fresh", begun_old: "old", lower_old: "regrown" }[s];
if (e.state.year >= 20 && kind) e.lib.stump(g, e, { r: 0.32, kind });
else e.lib.oakOf(g, e, { h: 11, w: 4.2, lean: -0.4, wind: 0.1 }, { h: 3.6, w: 1.45, lean: -0.1, wind: 0.25 });
