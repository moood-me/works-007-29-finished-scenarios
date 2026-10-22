// The rooster is never quite still: his head jerks from one look to the next and holds, his tail stirs.
const m = e.mem;
const want = Math.round(e.anim.noise(e.t * 0.35, 3) * 2.5) * 0.12;
m.a ??= want;
m.v ??= 0;
m.v += (60 * (want - m.a) - 11 * m.v) * e.dt;
m.a += m.v * e.dt;
e.layer('head').rotate = m.a;
e.layer('tail').rotate = 0.03 * e.anim.noise(e.t * 0.5, 11);
e.at(-0.08, -0.58, 'head');
