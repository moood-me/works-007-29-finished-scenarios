// The plateau: flat where the viewer and the school stand; to the left its edge — a ragged lip running off nearly
// straight ahead (across −4.2 at distance 6, −8.7 at 36, give or take the noise) — and past it the land falling away,
// softly at the lip, then steeply, down to the plain 190 m below; behind the school, on the right, the plateau rising
// slowly into a long snowy hill (60 m at most). Near the viewer, left of the school, the snow lies in low wind-drifts.
const t = -across - 4.2 - 0.15 * (distance - 6) + 1.2 * anim.noise(distance * 0.09, 3) + 0.5 * anim.noise(distance * 0.4, 4);
const s = t > 0 ? (t * t) / (t + 25) : 0;
const fall = 190 * (1 - Math.exp(-s / 110));
const side = Math.min(1, Math.max(0, (across + 12) / 24));
const rise = 60 * (1 - Math.exp(-(Math.max(0, distance - 22) * side * 0.12) / 60));
const roll = 0.5 * anim.noise(across * 0.05 + distance * 0.03, 2) * anim.span(distance, 8, 30);
const near = anim.span(distance, 1.2, 3) * Math.max(1 - anim.span(distance, 3.2, 4.4), 1 - anim.span(across, -4, -2)) * (1 - anim.span(distance, 30, 40));
const drifts = near * (0.09 * anim.noise(distance * 0.45 + across * 0.08, 7) + 0.05 * anim.noise(across * 0.3 - distance * 0.2, 9));
return rise + roll + drifts - fall;
