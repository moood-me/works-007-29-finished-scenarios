// The lantern room's roof (a form turned on a lathe): a low dome of iron sheets painted dark, their seams running up
// to the vent, a lip at the eaves. The painting is the dome unrolled: x round it, y from its top (the vent) down to the
// eaves (2.2 m of profile).
g.fillStyle = '#3a3f46';
g.fillRect(-5.66, -2.2, 11.32, 2.2);
g.fillStyle = '#323740';
for (let x = -5.66; x < 5.66; x += 0.71) g.fillRect(x, -2.2, 0.035, 2.2);
g.fillStyle = '#464c54';
g.fillRect(-5.66, -0.14, 11.32, 0.14);
g.fillStyle = 'rgba(120,96,80,0.25)';
for (let i = 0; i < 12; i++) g.fillRect(-5.66 + e.rnd() * 11.3, -1.9 + e.rnd() * 1.4, 0.05 + e.rnd() * 0.1, 0.3 + e.rnd() * 0.5);
e.form(e.kit.revolve([[0.15, 1.3], [0.7, 1.1], [1.3, 0.62], [1.8, 0.06], [1.8, 0]]), { closed: 'u' });
