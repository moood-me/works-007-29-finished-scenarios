const k = 1 - e.state.day;
e.mem.n ??= e.lib.litCount('left');
e.layer('lit').alpha = k;
for (let i = 0; i < e.mem.n; i++) e.glow(`w${i}`, k);
