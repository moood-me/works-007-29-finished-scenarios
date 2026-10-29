// One of Elzéard's beeches at the slope's far edge, planted after the maples died (2.6: «Теперь буки»): a sapling knee
// high in the second chapter, a young beech twice a man's height in the third (lib.js: beech); none in the first
const y = e.state.year;
if (y >= 20) e.lib.beech(g, e, { h: 5.2, w: 1.7, wind: 0.18 });
else if (y >= 6) e.lib.beech(g, e, { h: 0.55, w: 0.2, wind: 0 });
