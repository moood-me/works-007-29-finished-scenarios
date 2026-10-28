// the night comes in over the evening sky; the moon's glow with it
const n = e.state.night;
e.layer("night").alpha = n;
e.glow("moonglow", n);
