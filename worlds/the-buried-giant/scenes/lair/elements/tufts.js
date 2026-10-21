// Tufts of dry mountain grass (copies), swaying in the wind off the pit — tall ones in the near corners frame the
// picture
e.layer('blades', { pivot: [0, 0], wind: { strength: 0.5, gust: 0.5 } }, g =>
  e.lib.blades(g, 0.55, 26, ['#958d68', '#a9a07a', '#7c7958', '#b6ab86'], e.lib.rnd(53), 0.45));
