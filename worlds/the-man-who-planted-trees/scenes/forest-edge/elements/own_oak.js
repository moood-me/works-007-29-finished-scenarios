// The Traveller's own oak (`own_oak`: he took the rod and planted one himself by the stone, 1.4) — a little crooked,
// alive: six years old in the second chapter (lib.js: youngOak), grown and still leaning in the third (lib.js: oak);
// its trunk's point `bark`
if (!e.state.own_oak || e.state.year < 6) return;
if (e.state.year >= 20) {
  e.lib.oak(g, e, { h: 8.4, w: 2.5, lean: 1.0, wind: 0.12 });
  e.at(0.3, -1.4, "bark");
} else {
  e.lib.youngOak(g, e, { h: 3.0, w: 1.0, lean: 0.55, wind: 0.3 });
  e.at(0.1, -1.1, "bark");
}
