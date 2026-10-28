// The lit windows of Valdrada (a third of them, lib.js): warm, glowing by themselves, each a small light of its own —
// they shine in the lake below the city as in the city
g.fillStyle = '#ffd795';
for (const wd of e.lib.windows) {
  if (!wd.lit) continue;
  g.fillRect(wd.x, wd.y, wd.w, wd.h);
  e.light(wd.x + wd.w / 2, wd.y + wd.h / 2, 1.6, '#ffcf88', 0.7);
}
