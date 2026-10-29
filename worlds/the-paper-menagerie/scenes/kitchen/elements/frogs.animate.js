// The frogs breathe, quick and shallow, as frogs do.
if (e.state.menagerie !== 'awake') return;
e.layer('body').scaleY = 1 + 0.05 * Math.max(0, Math.sin(e.t * 3.1));
