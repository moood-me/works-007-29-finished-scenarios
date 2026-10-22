// lay the rope from Balducci's hand to the Arab's wrists: from the left end to the right (so it always sags down)
const a = e.point('balducci#hand_r');
const b = e.point('arab#bonds');
if (!a || !b) return;
const left = a[0] <= b[0] ? a : b;
const right = a[0] <= b[0] ? b : a;
const dx = right[0] - left[0];
const dy = right[1] - left[1];
const rope = e.layer('rope');
rope.x = left[0];
rope.y = left[1];
rope.rotate = Math.atan2(dy, dx);
rope.scale = Math.hypot(dx, dy) / 2;
e.warn(`rope ${a.map(v => v.toFixed(2))} ${b.map(v => v.toFixed(2))}`);
