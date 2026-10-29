// The pin from Grandmother's dress to the dress (or the coat) of whoever is pinned to her (state `pin`: nastya,
// dreamer; none — no pin): where their hips are now, a little below, as they breathe
const pin = e.layer('pin'), who = e.state.pin;
if (who !== 'nastya' && who !== 'dreamer') {
  pin.alpha = 0;
  return;
}
const a = e.point('babushka#hips');
const b = e.point(who + '#hips');
if (!a || !b) {
  pin.alpha = 0;
  return;
}
pin.alpha = 1;
const ax = a[0], ay = a[1] + 0.07;
const dx = b[0] - ax, dy = b[1] + 0.05 - ay;
pin.x = ax;
pin.y = ay;
pin.rotate = Math.atan2(dy, dx);
pin.scaleX = Math.hypot(dx, dy);
