// The land: the crest where the viewer and the men stand and the spur the ruin stands on (level, 0) — the crest to
// 0.35 m right of the line of sight up to the low wall 6.4 m ahead, the spur behind it widening to the right to 16.4 m —;
// beyond their edges the cliff falls 110 m to the valley's floor, the Rhine's bed 3 m lower from 420 m, the far bank
// rising 6 m over the water from 1.28 km. Sheer edges: the cliff's faces are cards.
const edge = distance < 6.4 ? 0.35 : 1.4 + 0.4 * (distance - 6.4);
const off = Math.max(anim.span(across, edge, edge + 0.6), anim.span(distance, 16.4, 17));
const floor = -110 - 3 * anim.span(distance, 415, 425) + 9 * anim.span(distance, 1280, 1300);
return floor * anim.ease.smooth(off);
