// the lighthouse lamp turning: a flash every seven seconds, a low glow between
const turn = (e.t / 7) * 2 * Math.PI;
e.glow('lamp', 0.3 + 0.7 * Math.max(0, Math.cos(turn)) ** 10);
