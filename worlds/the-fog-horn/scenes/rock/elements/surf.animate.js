// a wave breaking on the rock now and then: a burst every 3.5–7 s, irregular
const m = e.mem;
m.next ??= 2;
if (e.t >= m.next) {
  e.burst(30 + Math.floor(e.anim.hash(m.next, 5) * 30));
  m.next = e.t + 3.5 + 3.5 * e.anim.hash(m.next, 9);
}
