// The horse breathes out every three seconds or so: a puff of steam from his nostrils (a burst of the particles),
// the breaths a little uneven.
const m = e.mem;
m.wait ??= 1.2;
m.wait -= e.dt;
if (m.wait <= 0) {
  e.burst(16);
  m.wait = 2.8 + 0.8 * (0.5 + 0.5 * e.anim.drift(e.t * 0.3, 7));
}
