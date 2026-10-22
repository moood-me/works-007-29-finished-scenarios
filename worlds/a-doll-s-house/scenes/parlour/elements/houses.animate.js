const d = e.state.day;
e.layer('panes').alpha = d;
for (let i = 0; i < 8; i++) e.glow(`w${i}`, 1 - d);
