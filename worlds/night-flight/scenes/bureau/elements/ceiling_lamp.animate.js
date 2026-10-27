// The lamp sways on its cord: a slow pendulum pushed now and then by the draught from the open door — a degree or so.
const m = e.mem;
m.a ??= 0;
m.v ??= 0;
const push = 0.05 * e.anim.drift(e.t * 0.25, 4);
m.v += (-3.2 * m.a - 0.35 * m.v + push) * e.dt;
m.a += m.v * e.dt;
e.layer('lamp').rotate = m.a;
