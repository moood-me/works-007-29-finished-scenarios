// the village's windows come on with the dusk, not all at once
const d = e.state.dusk;
for (let i = 0; i < 16; i++) e.glow(`w${i}`, e.anim.clamp((d - 0.2 - 0.04 * i) * 3, 0, 1));
