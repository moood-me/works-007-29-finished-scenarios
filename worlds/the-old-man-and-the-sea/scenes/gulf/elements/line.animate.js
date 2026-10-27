// The line laid from the old man's hands to the water each frame (to the fish's mouth as the fish comes up), trembling
// a little as it does under the pull; the ring where it cuts the water breathes with the swell.
const hands = e.point('santiago#hands');
const water = e.point({ on: 'boat', at: [0.35, -2.06, 0] });
const mouth = e.point('fish#mouth');
if (!e.mem.said) {
  e.mem.said = true;
  e.warn(`debug hands ${JSON.stringify(hands)} water ${JSON.stringify(water)} mouth ${JSON.stringify(mouth)}`);
}
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
