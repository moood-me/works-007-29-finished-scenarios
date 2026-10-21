// Praskovya breathes out in the cold every three or four seconds: a small puff of steam before the face (a burst of
// the particles), the breaths a little uneven, out of step with the others'.
const m = e.mem;
m.wait ??= 2.0;
m.wait -= e.dt;
if (m.wait <= 0) {
  e.burst(8);
  m.wait = 3.9 + 0.9 * (0.5 + 0.5 * e.anim.drift(e.t * 0.3, 11));
}
