// His head hangs low and nods a very little about the throat as he stands and breathes, now and then lifting a touch:
// a slow drift that never repeats (the radians are small; −0.12 lowers it from the drawing's carriage).
const a = e.anim;
e.layer("head").rotate = -0.12 + 0.03 * a.drift(e.t * 0.2, 3) + 0.01 * Math.sin(e.t * 1.4);
