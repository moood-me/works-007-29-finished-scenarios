// The dance hall's building across the alley: dark brick, its top cornice level with the flat's window head, rows of
// windows — most dark, two warm with someone's lamp — and a fire escape zigzag of its own. Metres from its foot in
// the alley 9 m down; only its top two storeys are ever seen, through the window.
g.fillStyle = '#4b3a3c';
g.fillRect(-6, -11, 12, 11.02);
// brick courses, faint
g.fillStyle = 'rgba(30,22,24,0.35)';
for (let y = -10.9; y < 0; y += 0.16) g.fillRect(-6, y, 12, 0.012);
for (let i = 0; i < 160; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(110,70,64,0.25)' : 'rgba(40,30,32,0.25)';
  g.fillRect(-6 + e.rnd() * 12, -11 + e.rnd() * 11, 0.22, 0.07);
}
// the cornice
g.fillStyle = '#5c4a48';
g.fillRect(-6.1, -11.05, 12.2, 0.28);
g.fillStyle = '#2c2224';
g.fillRect(-6.1, -10.77, 12.2, 0.06);
// windows: three storeys of them, a lamp lit in two
const lit = ['3,1', '0,2'];
for (let f = 0; f < 3; f++) {
  for (let i = 0; i < 6; i++) {
    const x = -5.3 + i * 1.9;
    const y = -10.3 + f * 3;
    g.fillStyle = '#2f2a33';
    g.fillRect(x - 0.05, y - 0.05, 0.9, 1.6);
    g.fillStyle = lit.includes(`${i},${f}`) ? '#e9b56c' : '#262535';
    g.fillRect(x, y, 0.8, 1.5);
    g.fillStyle = '#3a2f30';
    g.fillRect(x - 0.02, y + 0.72, 0.84, 0.05);
    g.fillRect(x + 0.38, y, 0.04, 1.5);
  }
}
