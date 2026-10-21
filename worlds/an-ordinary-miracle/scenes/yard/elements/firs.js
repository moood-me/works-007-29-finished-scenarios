// A fir at the forest's edge: the wood rises behind the house on the left and on the slope to the right, leaving the
// middle open to the road and the mountains. One painting, many copies (the scene's list): sizes, flips, tints.
e.layer('tree', { pivot: [0, 0], wind: { strength: 0.12, gust: 0.4, scale: 30 }, box: [-3, -10.3, 3, 0.2] }, (g) => {
  e.lib.fir(g, 3, 10, '#2f5a3e', '#6f8f4f');
});
