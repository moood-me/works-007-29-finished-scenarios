// the lantern sways on its hook: a damped swing pushed by the wind's slow gusts
const m = e.mem;
m.a ??= 0;
m.v ??= 0;
m.v += (-12 * m.a - 0.8 * m.v + 0.35 * e.anim.noise(e.t * 0.6, 7)) * e.dt;
m.a += m.v * e.dt;
e.layer("lantern").rotate = m.a;
