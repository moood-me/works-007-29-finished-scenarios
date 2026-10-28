// The second hand: a tick each second, settling with a small bounce.
const s = Math.floor(e.t);
const u = e.t - s;
const settle = u < 0.12 ? 1 - Math.cos((u / 0.12) * Math.PI * 1.5) * Math.exp(-u * 30) * 0.15 : 1;
e.layer('second').rotate = ((s - 1 + Math.min(1, settle)) / 60) * Math.PI * 2;
