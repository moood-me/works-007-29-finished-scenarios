// the village's windows and the Terrace's lamps come on with the dusk, not all at once
const d = e.state.dusk;
for (let i = 0; i < 12; i++) e.glow(`w${i}`, e.anim.clamp((d - 0.25 - 0.05 * i) * 3, 0, 1));
e.glow('terrace1', e.anim.clamp((d - 0.2) * 3, 0, 1));
e.glow('terrace2', e.anim.clamp((d - 0.3) * 3, 0, 1));
