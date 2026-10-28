// the old dog's slow breath: the flank swelling a little and settling, its pace never quite even
const m = e.mem;
m.p = (m.p ?? 0) + e.dt * (1.6 + 0.3 * e.anim.drift(e.t * 0.1, 3));
e.layer('flank').scaleY = 1 + 0.035 * (0.5 + 0.5 * Math.sin(m.p));
