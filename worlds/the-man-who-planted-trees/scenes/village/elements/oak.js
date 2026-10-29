// One of Elzéard's oaks on the slope over the village, as tall as `time` has grown them (lib.js: oak, OAK_H): none
// in the prologue, over a man's head in the second chapter, grown in the third, ten years more in the epilogue; the
// crown swaying a little
const L = e.lib, h = L.OAK_H[L.T(e)];
if (h > 0) L.oak(g, e, { h, w: h * 0.29, lean: 0.25, wind: h > 5 ? 0.08 : 0.15, young: h < 5 });
