// the lantern swings a little on its hook, as the night air moves it
const m = e.mem;
m.a ??= 0;
m.v ??= 0;
m.v += (-7 * m.a - 0.5 * m.v + 0.05 * e.anim.noise(e.t * 0.35, 7)) * e.dt;
m.a += m.v * e.dt;
e.layer("lamp").rotate = m.a;
