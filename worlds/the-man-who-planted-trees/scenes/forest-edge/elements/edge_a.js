// An oak of the forest's near edge — its lowest, over the path down to the village (as oak_a: lib.js oakOf) — or, where
// the village has felled the lower edge (`stumps` "lower": fresh stumps; "lower_old": ten years on, old stumps and young
// oaks a man's height between them), its stump (lib.js: stump; its point `cut`)
const s = e.state.stumps;
if (e.state.year >= 20 && (s === "lower" || s === "lower_old")) e.lib.stump(g, e, { r: 0.3, kind: s === "lower" ? "fresh" : "regrown" });
else e.lib.oakOf(g, e, { h: 12.5, w: 3.4, lean: 0.3, wind: 0.1 }, { h: 4.2, w: 1.15, lean: 0.12, wind: 0.22 });
