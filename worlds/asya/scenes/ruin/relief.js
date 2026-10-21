// The land: the crest where the viewer and the men stand (level, 0) — to 1.5 m right of the line of sight (the low
// wall's right end) up to the wall 5 m ahead — and the spur behind it the ruin stands on, under the wall to its right
// end (1.55 m) and from there going back a little to the left, to 16.4 m; beyond their edges the cliff falls 110 m to
// the valley's floor, the Rhine's bed 3 m lower from 420 m, the far bank rising 9 m from 1.28 km. Its edges are sheer;
// the cliff's faces turn away from the viewer, unseen.
const edge = distance < 5 ? 1.5 : distance < 6.4 ? 1.55 : 1.55 - 0.05 * (distance - 6.4);
const off = Math.max(anim.span(across, edge, edge + 0.6), anim.span(distance, 16.4, 17));
const floor = -110 - 3 * anim.span(distance, 415, 425) + 9 * anim.span(distance, 1280, 1300);
return floor * anim.ease.smooth(off);
