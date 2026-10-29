// The right wall (its face toward the room; x runs from the back of the room, −1.7, to the front, +1.7): the
// wallpaper, the white panelled door to the hall (x −0.95…−0.05, shut) in its casing, a coat hook with Dad's cap.
// Points: `door`, `suit` (the suit bag, while it hangs there).
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
// the hook with Dad's cap (packed, `packed`: the cap gone); on it, while `suit_bag`, the bag with Jack's suit — long,
// dark, zipped, the shop's tag still on its sleeve
g.fillStyle = '#6a5543';
g.fillRect(0.35, -1.7, 0.03, 0.06);
if (!e.state.packed) {
  g.fillStyle = '#4c5466';
  g.beginPath();
  g.ellipse(0.37, -1.6, 0.11, 0.06, 0, 0, Math.PI * 2);
  g.fill();
}
if (e.state.suit_bag) {
  g.fillStyle = '#9aa0a6';
  g.fillRect(0.36, -1.66, 0.01, 0.08);
  g.fillStyle = '#3e4458';
  g.beginPath();
  g.moveTo(0.22, -1.56);
  g.quadraticCurveTo(0.365, -1.62, 0.51, -1.56);
  g.lineTo(0.53, -0.62);
  g.lineTo(0.2, -0.62);
  g.closePath();
  g.fill();
  g.fillStyle = '#9aa0a6';
  g.fillRect(0.36, -1.56, 0.008, 0.9);
  g.fillStyle = '#ede6cc';
  g.fillRect(0.44, -1.4, 0.04, 0.06);
  e.at(0.365, -1.1, 'suit');
}
e.at(-0.5, -1.2, 'door');
