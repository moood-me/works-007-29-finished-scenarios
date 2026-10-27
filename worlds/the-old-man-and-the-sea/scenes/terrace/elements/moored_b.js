// Another skiff at anchor, farther out: its hull a layer rocking on the swell about its waterline (its animate).
e.layer('hull', { pivot: [0, -0.3] }, g => {
  e.lib.skiff(g, 4.4, '#7d97a6', '#d7d0c0', '#5e4c3d');
});
