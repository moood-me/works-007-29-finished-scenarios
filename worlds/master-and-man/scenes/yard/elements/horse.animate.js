// The horse's head nods a little about his throat as he stands and breathes, now and then lifting it a touch: a
// slow drift that never repeats (the radians are small — he stands tied).
const a = e.anim;
e.layer("head").rotate = 0.035 * a.drift(e.t * 0.22, 3) + 0.012 * Math.sin(e.t * 1.6);
