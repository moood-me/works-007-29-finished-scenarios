// A skiff riding at anchor off the Terrace, its mast stepped and the sail furled on it: its hull a layer rocking on
// the swell about its waterline (its animate).
e.layer('hull', { pivot: [0, -0.3] }, g => {
  e.lib.skiff(g, 4.6, '#d6d3c7', '#5d7d92', '#6b5544');
  g.fillStyle = '#6a5a48';
  g.fillRect(0.6, -4.2, 0.08, 3.4);
  g.fillStyle = '#d8ccb0';
  g.fillRect(0.55, -3.9, 0.2, 2.9);
});
