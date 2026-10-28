const m = e.mem;
m.a ??= 0;
m.v ??= 0;
m.v += (-4 * m.a - 0.5 * m.v + 0.004 * e.anim.drift(e.t * 0.3, 7)) * e.dt;
m.a += m.v * e.dt;
e.layer('lantern').rotate = m.a;
