// the fork turning a little on its rope and swaying, slowly, never quite in a cycle
const t = e.t;
e.layer('fork').rotate = 0.012 * e.anim.drift(t * 0.12, 5);
e.layer('fork').scaleX = 0.92 + 0.08 * Math.cos(0.6 * e.anim.drift(t * 0.05, 9) * Math.PI);
