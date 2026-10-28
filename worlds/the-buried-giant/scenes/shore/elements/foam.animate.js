// the water laps up the shingle and draws back, never quite in a rhythm
const k = 0.5 + 0.5 * Math.sin(e.t * 0.9 + 0.8 * e.anim.noise(e.t * 0.15, 3));
const f = e.layer('foam');
f.y = -0.35 * k;
f.alpha = 0.55 + 0.45 * (1 - k);
