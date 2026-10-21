// The rock: a long low back of stone from under the viewer's feet out to the tower (across 15, distance 40), rising
// at its far end to the tower's foot (1.6 m); its edge wavers; off it the land falls into the sea (its water at -1.2)
// down to a shallow bottom at -2.2, where the rocks in the water stand. Flat where the viewer stands.
const ax = 15;
const ad = 46;
const t = Math.min(1, Math.max(0, (across * ax + (distance + 6) * ad) / (ax * ax + ad * ad)));
const r = Math.hypot(across - ax * t, distance + 6 - ad * t);
const R = 6.6 + 2.4 * t + 1.2 * anim.noise(across * 0.21 + distance * 0.13, 3);
const top = 1.6 * anim.ease.smooth(anim.span(t, 0.55, 0.95)) + 0.3 * anim.noise(across * 0.45 - distance * 0.31, 7) * anim.span(r, 2, R - 1);
return Math.max(-2.2, top - 1.7 * Math.max(0, r - R));
