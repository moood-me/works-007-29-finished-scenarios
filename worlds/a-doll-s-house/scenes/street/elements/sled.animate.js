// the rope from the sled's front to Ivar's right hand: turned and stretched to it each frame
const [x, y] = e.point('ivar#hand_r');
const dx = x + 0.56;
const dy = y + 0.3;
const rope = e.layer('rope');
rope.rotate = Math.atan2(dy, dx);
rope.scaleX = Math.hypot(dx, dy);
