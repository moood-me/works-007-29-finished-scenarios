// An oak of the forest's near edge — its lowest, over the path down to the village (as oak_b: lib.js oakOf) — or, where
// the village has felled the lower edge (`stumps` "lower": fresh stumps; "lower_old": ten years on, old stumps and young
// oaks a man's height between them), its stump (lib.js: stump; its point `cut`)
const s = e.state.stumps;
if (e.state.year >= 20 && (s === "lower" || s === "lower_old")) e.lib.stump(g, e, { r: 0.3, kind: s === "lower" ? "fresh" : "regrown" });
else e.lib.oakOf(g, e, { h: 11, w: 4.2, lean: -0.4, wind: 0.1 }, { h: 3.6, w: 1.45, lean: -0.1, wind: 0.25 });
