// The shark swims to and fro along the basin, slowing at each end as it turns — the fin dipping a little at the turn.
const k = Math.sin(e.t * 0.55);
const fin = e.layer('fin');
fin.x = 0.13 * k;
fin.scaleX = Math.cos(e.t * 0.55) >= 0 ? 1 : -1;
fin.y = 0.01 * (1 - Math.abs(Math.cos(e.t * 0.55)));
