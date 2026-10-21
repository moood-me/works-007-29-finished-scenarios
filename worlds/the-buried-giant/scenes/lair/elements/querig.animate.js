// Her slow breath: the flank rising and falling (a long breath in, a longer one out), the head lifting a little with
// it; nothing while `breath` is 0. The lid opened by `querig_eye`, lifting from its top
const b = e.state.breath, ph = (e.t / 6.5) % 1, s = ph < 0.4 ? 0.5 - 0.5 * Math.cos((ph / 0.4) * Math.PI) : 0.5 + 0.5 * Math.cos(((ph - 0.4) / 0.6) * Math.PI);
e.layer('body').scaleY = 1 + 0.022 * s * b;
const lift = -0.03 * s * b;
e.layer('head').y = lift;
e.layer('eye').y = lift;
e.layer('lid').y = lift;
e.layer('lid').scaleY = 1 - 0.9 * e.state.querig_eye;
