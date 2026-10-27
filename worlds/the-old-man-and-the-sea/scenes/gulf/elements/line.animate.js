// The line laid from the old man's hands to the water each frame (to the fish's mouth as the fish comes up), trembling
// a little as it does under the pull; the ring where it cuts the water breathes with the swell. (e.point gives the same
// array each time: each point is copied before the next is asked.)
const at = ref => {
  const p = e.point(ref);
  return p ? [p[0], p[1]] : null;
};
const hands = at('santiago#hands');
const water = at({ on: 'boat', at: [0.35, -2.06, 0] });
const mouth = at('fish#mouth');
if (!hands || !water) return;
const f = e.anim.ease.smooth(e.anim.span(e.state.fish, 0.4, 1));
const end = mouth ? [water[0] + (mouth[0] - water[0]) * f, water[1] + (mouth[1] - water[1]) * f] : water;
const dx = end[0] - hands[0];
const dy = end[1] - hands[1];
const line = e.layer('line');
line.x = hands[0];
line.y = hands[1];
line.rotate = Math.atan2(dy, dx) + 0.002 * e.anim.noise(e.t * 7, 3);
line.scaleX = Math.hypot(dx, dy);
const ring = e.layer('ring');
ring.x = water[0];
ring.y = water[1];
ring.scale = 1 + 0.25 * Math.sin(e.t * 1.7);
ring.alpha = 1 - f;
