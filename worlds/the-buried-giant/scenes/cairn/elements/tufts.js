// A tuft of dry pass grass, its blades swaying in the wind (copies all over the slope)
e.layer('blades', { pivot: [0, 0], wind: { strength: 0.55, gust: 0.4 } }, g => {
  e.lib.blades(g, 0.5, 26, ['#9d9a72', '#8a8a62', '#b2ab82', '#7c805a'], e.lib.rnd(51), 0.35);
});
