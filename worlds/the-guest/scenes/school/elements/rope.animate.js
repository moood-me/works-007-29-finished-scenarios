// lay the rope from Balducci's hand to the Arab's wrists: from the left end to the right (so it always sags down);
// e.point gives one reused array — each end is read off before the other is asked
const a = e.point('balducci#hand_r');
if (!a) return;
const ax = a[0];
const ay = a[1];
const b = e.point('arab#bonds');
if (!b) return;
const bx = b[0];
const by = b[1];
const lx = ax <= bx ? ax : bx;
const ly = ax <= bx ? ay : by;
const dx = Math.abs(bx - ax);
const dy = (ax <= bx ? by : ay) - ly;
const rope = e.layer('rope');
rope.x = lx;
rope.y = ly;
rope.rotate = Math.atan2(dy, dx);
rope.scale = Math.hypot(dx, dy) / 2;
