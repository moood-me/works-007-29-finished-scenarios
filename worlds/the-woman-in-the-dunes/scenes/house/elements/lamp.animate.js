// the lamp stirs on its hook, very little, never in a cycle
e.layer("lamp").rotate = 0.012 * e.anim.noise(e.t * 0.22, 7);
