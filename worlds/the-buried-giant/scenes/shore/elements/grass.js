// Tufts of tall coarse grass on the bank, swaying in the wind off the sea
e.layer('blades', { pivot: [0, 0], wind: { strength: 0.45, gust: 0.5 } }, g =>
  e.lib.blades(g, 0.6, 26, ['#8d8a5c', '#a3a06e', '#767a50', '#b2aa7a'], e.lib.rnd(111), 0.45));
