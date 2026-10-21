// breathing, and the head turning a little now and then
e.layer("body").scaleY = 1 + 0.02 * Math.sin(e.t * 1.6);
e.layer("head").rotate = 0.06 * e.anim.noise(e.t * 0.25, 4) + 0.01 * Math.sin(e.t * 1.6);
