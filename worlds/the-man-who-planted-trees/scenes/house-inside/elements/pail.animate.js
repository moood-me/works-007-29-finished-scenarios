// the acorns in it while they soak; slid toward the Traveller as he pushes it over
const x = -0.42 * (e.state.pail_push ?? 0);
e.layer('pail').x = x;
const full = e.layer('full');
full.x = x;
full.alpha = e.state.acorns === 'pail' ? 1 : 0;
