// The land: Z.'s quay (level, 0) to its wall 3.5 m ahead, the Rhine's bed 3 m down beyond it, and L.'s bank rising
// 2.5 m over the water from 440 m. The water is a plane at −0.8; the land under it stays below.
if (distance < 3.5) return 0;
if (distance < 440) return -3 * anim.ease.smooth(anim.span(distance, 3.5, 3.9));
return -3 + 5.5 * anim.ease.smooth(anim.span(distance, 440, 446));
