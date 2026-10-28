// Nikita breathes out in the cold every three or four seconds: a small puff of steam before the face (a burst of
// the particles), the breaths a little uneven, out of step with the others'.
const m = e.mem;
m.wait ??= 1.5;
m.wait -= e.dt;
if (m.wait <= 0) {
  e.burst(10);
  m.wait = 3.2 + 0.9 * (0.5 + 0.5 * e.anim.drift(e.t * 0.3, 13));
}
