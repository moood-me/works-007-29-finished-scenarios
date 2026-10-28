// one turn every 14 s; its across-the-view part (cos) is how long it is seen, coming toward the eye (sin < 0) it is
// brighter; faint by day, full by night
const a = (e.t * Math.PI * 2) / 14;
const c = Math.cos(a);
const toward = Math.sin(a) < 0 ? 1 : 0.55;
const k = e.state.lamp * (0.2 + 0.8 * e.state.night) * toward;
const r = e.layer('right');
const l = e.layer('left');
r.scaleX = Math.max(0.03, c);
r.alpha = k * Math.sqrt(Math.max(0, c));
l.scaleX = Math.max(0.03, -c);
l.alpha = k * Math.sqrt(Math.max(0, -c));
