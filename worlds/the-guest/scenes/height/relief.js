// The height: a bare limestone hill an hour east of the school. Its top, where the viewer and the two stand, is near
// level, a little uneven, rounding down ahead and to the left. Just past the two the land falls away: ahead (south) past distance
// 9.5, to the stony tableland 380 m below that runs on to the horizon; to the left (east) past across −3.5, steeply, into
// the valley 650 m below, where Tingit stands (across −900, distance 2250).
const t = -across - 3.5 - 1.5 * anim.noise(distance * 0.05, 1);
const east = t > 0 ? 650 * (1 - Math.exp(-(t * t) / (t + 10) / 300)) : 0;
const u = distance - 9.5 - 2 * anim.noise(across * 0.04, 2);
const south = u > 0 ? 380 * (1 - Math.exp(-(u * u) / (u + 12) / 350)) : 0;
const r2 = across * across + distance * distance;
const bumps = 0.12 * anim.noise(across * 0.11 + distance * 0.06, 3) * (r2 / (r2 + 60));
const f = anim.span(distance, 3, 11);
const l = anim.span(-across, 0, 4);
const lean = -1.4 * f * f * (3 - 2 * f) - 0.8 * l * l * (3 - 2 * l);
const roll = 30 * anim.noise(across * 0.0013 + distance * 0.0009, 8) * anim.span(Math.abs(across) + distance, 300, 1500);
return lean + bumps + roll - Math.max(east, south);
