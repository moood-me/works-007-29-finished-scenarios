// The far hills of Derbyshire: two long ridges in blue-grey and grey-green washes, the nearer one with a faint pen line
const L = e.lib, px = L.px(e), r = L.rand(3), n = e.anim.noise;
const far = x => -118 - 26 * n(x * 0.0012, 1) - 10 * n(x * 0.005, 2);
const near = x => -78 - 22 * n(x * 0.0016, 3) - 7 * n(x * 0.007, 4);
L.wash(g, L.ridge(-1800, 1800, 6, 24, far), '#b8c6c8', [-1800, -150, 1800, 0], r, 4);
const p = L.ridge(-1800, 1800, 6, 18, near);
L.wash(g, p, '#a3b4a4', [-1800, -110, 1800, 0], r, 5);
L.pen(g, L.ridgeLine(-1800, 1800, 18, near), 1.1 * px, 0.25);
