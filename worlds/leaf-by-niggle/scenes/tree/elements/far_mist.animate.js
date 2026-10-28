// the mist breathes along a little and fades as `mist` goes
const m = e.layer('mist');
m.alpha = e.state.mist ?? 1;
m.x = e.anim.drift(e.t * 0.02, 3) * 1.5;
