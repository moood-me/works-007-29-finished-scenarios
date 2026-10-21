// The pin from Grandmother's dress to Nastenka's: where their hips are now, a little below, as they breathe
const a = e.point('babushka#hips');
if (!a) return;
const ax = a[0], ay = a[1] + 0.07;
const b = e.point('nastya#hips');
if (!b) return;
const dx = b[0] - ax, dy = b[1] + 0.05 - ay;
const pin = e.layer('pin');
pin.x = ax;
pin.y = ay;
pin.rotate = Math.atan2(dy, dx);
pin.scaleX = Math.hypot(dx, dy);
