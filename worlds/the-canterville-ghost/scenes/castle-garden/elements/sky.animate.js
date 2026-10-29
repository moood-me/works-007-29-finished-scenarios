// the night comes in over the day sky; the clouds cover the moon as `clouds` says, sliding off it as they thin, and
// drift a very little
const n = e.state.night ?? 0;
const k = e.state.clouds ?? 0;
e.layer('night').alpha = n;
e.layer('moon').alpha = n;
e.glow('glow', n * (1 - 0.85 * k));
const clouds = e.layer('clouds');
clouds.alpha = n * k;
clouds.x = (1 - k) * 0.18 + 0.01 * e.anim.noise(e.t * 0.02, 3);
