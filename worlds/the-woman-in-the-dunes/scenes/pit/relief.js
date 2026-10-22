// The pit: a flat floor (the viewer on it), its steep walls rising from pitR 1 to the lip at 1.3 — six metres and a
// little over —, a low crest at the lip and the dunes falling away beyond it; sand drifted high against the house's
// left end; a gentle dish toward the walls.
const r = lib.pitR(across, distance);
const s = anim.ease.smooth;
const wall = 6.2 * s(anim.span(r, 1, 1.3));
const lip = 0.45 * anim.span(r, 1.3, 1.42) - 0.9 * anim.span(r, 1.5, 2.3);
const dish = 0.3 * anim.span(r, 0.8, 1);
const dx = across + 6.1;
const dz = distance - 6.9;
const drift = 1.3 * Math.max(0, 1 - (dx * dx + dz * dz) / 5);
const swell = 0.3 * Math.sin(across * 0.5 + distance * 0.3) * anim.span(r, 1.45, 1.8);
return wall + lip + dish + drift + swell;
