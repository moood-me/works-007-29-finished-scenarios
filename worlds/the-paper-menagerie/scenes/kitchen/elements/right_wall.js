// The right wall (its face toward the room; x runs from the back of the room, −1.7, to the front, +1.7): the
// wallpaper, the white panelled door to the hall (x −0.95…−0.05, shut) in its casing, a coat hook with Dad's cap.
e.lib.wallpaper(g, -1.77, 1.77);
g.fillStyle = '#efe9dd';
g.fillRect(-1.03, -2.13, 1.06, 2.13);
g.fillStyle = '#f6f1e7';
g.fillRect(-0.95, -2.05, 0.9, 2.05);
g.strokeStyle = '#ddd3c2';
g.lineWidth = 0.014;
for (const [y0, h] of [
  [-1.95, 0.8],
  [-1.0, 0.85],
]) {
  g.strokeRect(-0.86, y0, 0.32, h);
  g.strokeRect(-0.46, y0, 0.32, h);
}
g.fillStyle = '#b9965a';
g.beginPath();
g.arc(-0.14, -1.0, 0.025, 0, Math.PI * 2);
g.fill();
// the hook with Dad's cap
g.fillStyle = '#6a5543';
g.fillRect(0.35, -1.7, 0.03, 0.06);
g.fillStyle = '#4c5466';
g.beginPath();
g.ellipse(0.37, -1.6, 0.11, 0.06, 0, 0, Math.PI * 2);
g.fill();
e.at(-0.5, -1.2, 'door');
