// The post office's room as seen through the wicket (metres from the floor; its back wall 1.4 m in): a dim wall of
// ochre gone brown, a cabinet of pigeonholes with a few letters in them, a calendar, and the small kerosene lamp
// burning on the cabinet's top at midday.
g.fillStyle = '#8a7a5e';
g.fillRect(-3.6, -2.95, 7.2, 2.97);
for (let i = 0; i < 40; i++) {
  g.fillStyle = 'rgba(60,50,38,0.2)';
  g.fillRect(-3.6 + e.rnd() * 7.2, -2.9 + e.rnd() * 2.9, 0.2 + e.rnd() * 0.6, 0.05 + e.rnd() * 0.2);
}
// the pigeonholes
g.fillStyle = '#4e3a2a';
g.fillRect(0.0, -2.3, 2.0, 1.3);
g.fillStyle = '#2e241c';
for (let r = 0; r < 5; r++) {
  for (let c = 0; c < 8; c++) {
    const x = 0.06 + c * 0.24;
    const y = -2.24 + r * 0.25;
    g.fillStyle = '#2e241c';
    g.fillRect(x, y, 0.2, 0.2);
    if (e.rnd() < 0.3) {
      g.fillStyle = e.rnd() < 0.5 ? '#e2dac4' : '#cfc2a0';
      g.fillRect(x + 0.02, y + 0.08, 0.16, 0.1);
    }
  }
}
// a calendar
g.fillStyle = '#d6cbb0';
g.fillRect(-0.6, -2.1, 0.3, 0.42);
g.fillStyle = '#7a3a2e';
g.fillRect(-0.6, -2.1, 0.3, 0.14);
// the lamp on the cabinet: its tin foot, its glass chimney, its flame
g.fillStyle = '#6a6a62';
g.fillRect(1.52, -2.42, 0.16, 0.12);
g.fillStyle = 'rgba(236,226,200,0.7)';
g.fillRect(1.56, -2.62, 0.08, 0.2);
e.light(1.6, -2.5, 0.09, '#ffc070', 1.2, 'lamp');
