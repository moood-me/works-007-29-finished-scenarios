// the dog breathes (a breath in ~2.4 s) and its head shivers a little with the growl
const b = Math.sin(e.t * 2.6), body = e.layer('body'), head = e.layer('head');
body.scaleY = 1 + 0.025 * b;
head.y = -0.006 * b;
head.rotate = 0.012 * e.anim.noise(e.t * 7, 31) + 0.02 * Math.sin(e.t * 0.5);
