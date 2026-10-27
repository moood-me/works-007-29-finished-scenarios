const k = 1 - e.state.day;
e.layer('lit').alpha = k;
for (let i = 0; i < 5; i++) e.glow(`h${i}`, k);
e.glow('st', k);
e.glow('door', k);
