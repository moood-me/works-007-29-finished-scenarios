// The dusk comes over the morning sky by `dusk`; the morning's clouds go as it comes.
const d = e.anim.clamp(e.state.dusk ?? 0, 0, 1);
e.layer('dusk').alpha = d;
e.layer('clouds').alpha = 1 - d;
