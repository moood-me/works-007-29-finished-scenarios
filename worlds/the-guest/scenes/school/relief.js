// The plateau: flat where the viewer and the school stand; to the left its edge (a line running off to the left as it
// goes away: across −3 at distance 6, −13.5 at 36) and past it the land falling away — softly at the lip, then steeply,
// down to the plain 190 m below; behind the school, on the right, the plateau rising slowly into a long snowy hill (60 m at most).
const t = -across - 3 - 0.35 * (distance - 6);
const s = t > 0 ? (t * t) / (t + 25) : 0;
const fall = 190 * (1 - Math.exp(-s / 110));
const side = Math.min(1, Math.max(0, (across + 12) / 24));
const rise = 60 * (1 - Math.exp(-(Math.max(0, distance - 22) * side * 0.12) / 60));
const roll = 0.5 * anim.noise(across * 0.05 + distance * 0.03, 2) * anim.span(distance, 8, 30);
return rise + roll - fall;
