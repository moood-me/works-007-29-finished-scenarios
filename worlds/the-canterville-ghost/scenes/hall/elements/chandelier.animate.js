// The ring sways a hair on its chain; its six flames glow as much as the candles are lit (`candles`).
e.layer('hang').rotate = 0.008 * e.anim.drift(e.t * 0.25, 3);
const k = e.state.candles ?? 1;
for (let i = 0; i < 6; i++) e.glow(`f${i}`, k);
