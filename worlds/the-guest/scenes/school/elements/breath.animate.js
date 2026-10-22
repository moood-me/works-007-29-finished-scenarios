// the horse breathes out every three seconds or so, unevenly
const m = e.mem;
m.next ??= 1;
if (e.t >= m.next) {
  e.burst(14);
  m.next = e.t + 2.6 + 1.2 * e.anim.hash(Math.floor(e.t), 4);
}
