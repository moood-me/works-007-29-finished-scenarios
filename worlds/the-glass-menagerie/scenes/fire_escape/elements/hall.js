// The dance hall's top storey across the alley, behind the viewer (seen only mirrored in the Wingfields' window):
// dark brick, its tall windows lit amber with the dancing inside, a cornice. Metres from the roof of the hall's lower
// wing, where the viewer's side of the alley is.
g.fillStyle = '#3e3034';
g.fillRect(-7, -2.2, 14, 2.2);
g.fillStyle = '#4f4044';
g.fillRect(-7, -2.2, 14, 0.18);
for (let i = 0; i < 6; i++) {
  const x = -6.2 + i * 2.3;
  g.fillStyle = '#2b2228';
  g.fillRect(x - 0.05, -1.75, 1.0, 1.55);
  g.fillStyle = i === 1 || i === 4 ? '#e2a865' : '#d39a5e';
  g.fillRect(x, -1.7, 0.9, 1.45);
  g.fillStyle = '#3a2c30';
  g.fillRect(x + 0.43, -1.7, 0.04, 1.45);
}
