// The land: the yard level round the house (to 16 m ahead), then the meadow rising gently toward the forest and the
// hills — 14 m higher 200 m off, a little rolling across.
const u = anim.span(distance, 16, 200);
return 14 * u * u * (3 - 2 * u) + 3 * u * Math.sin(across * 0.035);
