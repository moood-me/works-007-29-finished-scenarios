// the flame stretches and leans a very little, never in a cycle the eye can see
const n = e.anim.noise(e.t * 0.9, 3);
e.layer("tongue").scaleY = 1 + 0.08 * n;
e.layer("tongue").rotate = 0.04 * e.anim.drift(e.t * 0.5, 5);
