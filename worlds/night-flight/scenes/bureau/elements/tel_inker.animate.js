// The reel turns slowly while the inker runs, a little unevenly as the clockwork pulls.
const m = e.mem;
m.a ??= 0;
m.a += e.dt * e.state.tape * (0.5 + 0.15 * e.anim.noise(e.t * 0.7, 2));
e.layer('reel').rotate = -m.a;
// (Stage 5) the drawn tape as long as `tape_pull` says, from the inker's mouth.
const pull = e.state.tape_pull ?? 0;
const tp = e.layer('pulled');
tp.scaleX = pull;
tp.alpha = pull > 0.01 ? 1 : 0;
