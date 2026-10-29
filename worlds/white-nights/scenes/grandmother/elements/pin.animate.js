// The pin from Grandmother's dress to the dress of the one pinned to her (state `pin`: pinned, taut — Nastenka; him —
// the Dreamer's coat; off — no pin): where their hips are now, a little below, as they breathe; its point (the element's own, `pin`) the
// line's middle (a mini-game's mark)
const pin = e.layer('pin'), p = e.state.pin;
const who = p === 'pinned' || p === 'taut' ? 'nastya' : p === 'him' ? 'dreamer' : null;
const a = who && e.point('babushka#hips'), b = who && e.point(who + '#hips');
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
e.at(ax + dx * 0.5, ay + dy * 0.5);
