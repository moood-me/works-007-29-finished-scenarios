// The minute hand from twenty past, the second hand round once a minute, ticking: a small step each second that
// settles with a tremor.
const s = e.t;
const whole = Math.floor(s);
const tick = Math.min(1, (s - whole) * 9);
const settle = whole + 1 - Math.pow(1 - tick, 3) + 0.04 * Math.sin(tick * Math.PI) * (1 - tick);
e.layer('second').rotate = (settle / 60) * Math.PI * 2;
e.layer('minute').rotate = ((20 + s / 60) / 60) * Math.PI * 2;
