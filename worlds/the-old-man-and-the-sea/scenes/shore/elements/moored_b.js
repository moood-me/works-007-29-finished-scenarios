// A skiff riding at anchor in the bay: its hull a layer rocking on the swell about its waterline (its animate).
e.layer('hull', { pivot: [0, -0.3] }, g => {
  e.lib.skiff(g, 4.6, '#d6d3c7', '#5d7d92', '#6b5544');
});
