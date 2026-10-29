// The clock's hands by `hour`; its pendulum swinging once a second each way while `clock_going`, dying away over a few
// seconds when it stops (and taking up again when it goes).
const h = e.state.hour ?? 0;
e.layer('minute').rotate = (h % 1) * Math.PI * 2;
e.layer('hour').rotate = ((h % 12) / 12) * Math.PI * 2;
const m = e.mem;
const going = e.state.clock_going ? 1 : 0;
m.amp ??= going;
m.ph ??= 0;
m.amp += (going - m.amp) * Math.min(1, e.dt * 0.7);
m.ph = (m.ph + e.dt * Math.PI) % (Math.PI * 2);
e.layer('pendulum').rotate = 0.09 * m.amp * Math.sin(m.ph);
