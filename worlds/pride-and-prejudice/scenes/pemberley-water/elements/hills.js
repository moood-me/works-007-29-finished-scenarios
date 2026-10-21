// The far hills of Derbyshire: two long ridges in blue-grey and grey-green washes, the nearer one with a faint pen line —
// high enough to rise over the woods' crowns as a range of their own, and deep enough in colour that the air at 900 m
// leaves them a soft blue-grey against the sky, never a pale sliver between the crowns
const L = e.kit.brush, px = L.px(e), r = L.rand(3), n = e.anim.noise;
const far = x => -168 - 30 * n(x * 0.0012, 1) - 12 * n(x * 0.005, 2);
const near = x => -128 - 24 * n(x * 0.0016, 3) - 8 * n(x * 0.007, 4);
L.wash(g, L.ridge(-1800, 1800, 6, 24, far), '#7d93a6', [-1800, -210, 1800, 0], r, 4);
const p = L.ridge(-1800, 1800, 6, 18, near);
L.wash(g, p, '#7a9184', [-1800, -160, 1800, 0], r, 5);
L.pen(g, L.ridgeLine(-1800, 1800, 18, near), 2.09 * px, 0.55);
