const k = 1 - e.state.day;
e.layer('lit').alpha = k;
for (let i = 0; i < 8; i++) e.glow(`w${i}`, k);
