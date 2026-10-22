// The flames of the tree's candles (over the tree's painting, at e.lib.candles): a layer of small flames, flickering,
// shown as much as `candles` by its animate; the tree's light `glow` (the scene's light "tree") from among them.
e.layer('flames', { flicker: 0.35 }, c => {
  for (const [x, y] of e.lib.candles) {
    c.fillStyle = '#ffcf7a';
    c.beginPath();
    c.ellipse(x, y - 0.095, 0.014, 0.03, 0, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = '#fff6dc';
    c.beginPath();
    c.ellipse(x, y - 0.09, 0.006, 0.014, 0, 0, Math.PI * 2);
    c.fill();
  }
});
e.light(0, -1.3, 0.35, '#ffcf86', 0.4, 'glow');
