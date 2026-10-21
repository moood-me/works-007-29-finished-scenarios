// Vasily breathes out in the cold every three seconds or so: a small puff of steam before the face (a burst of the
// particles), the breaths a little uneven, out of step with the other's.
const m = e.mem;
m.wait ??= 0.6;
m.wait -= e.dt;
if (m.wait <= 0) {
  e.burst(10);
  m.wait = 3.4 + 0.9 * (0.5 + 0.5 * e.anim.drift(e.t * 0.3, 9));
}
