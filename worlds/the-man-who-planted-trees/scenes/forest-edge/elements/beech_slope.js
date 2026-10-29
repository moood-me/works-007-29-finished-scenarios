// One of the Traveller's beeches on his Slope across the stream from the forest (`beeches` "slope": he stayed and
// plants here every day — from the third chapter): young, a man's height and more, in the third chapter; grown above
// his head, its crown swaying, in the epilogue (lib.js: beech). Its trunk's point `bark`
if (e.state.beeches !== "slope" || e.state.year < 20) return;
const grown = e.state.year >= 30;
e.lib.beech(g, e, { h: grown ? 6 : 2.9, w: grown ? 1.9 : 1.05, wind: grown ? 0.12 : 0.22 });
e.at(0, -1.1, "bark");
