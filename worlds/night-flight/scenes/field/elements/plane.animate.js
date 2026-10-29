// The plane's pitch about its wheel, the propeller turning while the engine runs (the blur flickers as a blur does),
// the exhaust and the landing lamp.
const a = (e.state.plane_pitch * Math.PI) / 180;
const run = e.state.engine;
for (const name of ['body', 'blades', 'disc']) e.layer(name).rotate = a;
e.layer('blades').alpha = 1 - run;
e.layer('disc').alpha = run * (0.8 + 0.2 * Math.sin(e.t * 61));
e.glow('lamp', e.state.plane_lights);
e.glow('exhaust', run * (0.7 + 0.3 * e.anim.noise(e.t * 9, 3)));
