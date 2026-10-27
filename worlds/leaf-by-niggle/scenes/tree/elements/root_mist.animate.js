// the mist breathes along the roots and fades as `mist` goes
const m = e.layer('mist');
m.alpha = e.state.mist ?? 1;
m.x = e.anim.drift(e.t * 0.03, 7) * 0.4;
