// The deer shifts from pose to pose now and then, stiffly, as paper does.
if (e.state.packed) return;
e.layer('deer').rotate = e.kit.paper.tick(e.anim, e.t * 0.3 + 3.1, 9) * 0.08;
