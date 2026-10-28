// The bell rung: it swings to and fro on its headstock, easing at each end of its swing, the clapper a moment behind
// it and a little farther, so it strikes at each end; `bell` (0 still … 1 rung full) how far it swings — the swing
// dies away when the ringing stops.
const m = e.mem;
m.k ??= e.state.bell;
m.k += (e.state.bell - m.k) * Math.min(1, e.dt * 0.6);
const w = (Math.PI * 2) / 2.8;
e.layer('bell').rotate = m.k * 0.55 * Math.sin(e.t * w);
e.layer('clapper').rotate = m.k * 0.66 * Math.sin(e.t * w - 0.35);
