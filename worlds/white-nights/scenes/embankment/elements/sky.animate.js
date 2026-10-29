// The nights' skies (sky.js's layers) shown as much as their keys; the afterglow dimmed under the fourth night's cloud
// and gone by day, warmer in the evening and on the third night
const s = e.state;
for (const k of ['dusk', 'lilac', 'rose', 'overcast', 'day']) e.layer(k).alpha = s[k] ?? 0;
const k = Math.max(0, 1 - (s.day ?? 0) - 0.85 * (s.overcast ?? 0));
e.glow('afterglow', k * (1 + 0.6 * (s.rose ?? 0) + 0.5 * (s.dusk ?? 0)));
