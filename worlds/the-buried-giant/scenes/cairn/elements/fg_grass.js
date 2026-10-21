// Tall grass close before the viewer, lower right, swaying
e.layer('blades', { pivot: [0, 0], wind: { strength: 0.7, gust: 0.5 } }, g => {
  e.lib.blades(g, 1.05, 60, ['#8f8d66', '#a3a07a', '#77795a', '#b5ae86'], e.lib.rnd(81), 0.9);
});
