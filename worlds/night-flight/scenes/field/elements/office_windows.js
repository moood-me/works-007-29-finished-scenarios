// The office's lit glass: three of the bureau's windows below (the night shift at the telegraph), always lit; the big
// window of Rivière's office upstairs (the layer `office`, by the key `office`) — its light `office`; the red lamp on
// top of the radio mast; Madame Fabien's silhouette dark in Rivière's window (the layer `madame`, by `madame_window`).
const pane = (c, x, y, w, h, col) => {
  c.fillStyle = col;
  c.fillRect(x, y, w / 2 - 0.04, h * 0.35);
  c.fillRect(x + w / 2 + 0.04, y, w / 2 - 0.04, h * 0.35);
  c.fillRect(x, y + h * 0.35 + 0.06, w / 2 - 0.04, h * 0.65 - 0.06);
  c.fillRect(x + w / 2 + 0.04, y + h * 0.35 + 0.06, w / 2 - 0.04, h * 0.65 - 0.06);
};
for (const x of [-3.6, -0.7, 2.2]) pane(g, x, -3.3, 1.5, 2.1, '#f3cf92');
e.light(0.8, -2.2, 1.2, '#ffd29a', 0.6, 'bureau');
e.layer('office', {}, c => pane(c, 0.6, -7.3, 3.2, 2.4, '#ffdca4'));
e.light(2.2, -6.1, 1.4, '#ffd6a0', 1, 'office');
// her silhouette in the lit window: a slight dark figure standing, the bun of her hair, the coat held round her
e.layer('madame', {}, c => {
  c.fillStyle = '#2a2430';
  c.beginPath();
  c.moveTo(2.55, -4.9);
  c.lineTo(2.62, -5.9);
  c.quadraticCurveTo(2.8, -6.15, 2.98, -5.9);
  c.lineTo(3.05, -4.9);
  c.closePath();
  c.fill();
  c.beginPath();
  c.arc(2.8, -6.28, 0.15, 0, Math.PI * 2);
  c.fill();
  c.beginPath();
  c.arc(2.86, -6.4, 0.08, 0, Math.PI * 2);
  c.fill();
});
e.at(2.8, -6.0, 'madame');
g.fillStyle = '#ff6a50';
g.beginPath();
g.arc(-5, -13.05, 0.12, 0, Math.PI * 2);
g.fill();
e.light(-5, -13.05, 0.25, '#ff5a40', 0.7, 'mast');
