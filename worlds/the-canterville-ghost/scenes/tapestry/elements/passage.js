// The dark beyond the wall that parts: the far end of a narrow way in the thickness of the house (1.2 m wide), rough
// old stone going down into blackness — steps worn hollow, nothing more. Its sides and its floor are `passage_side`
// and `passage_floor`. Painted near-black: only his light, or a candle, shows it.
g.fillStyle = '#16130f';
g.fillRect(-0.62, -2.95, 1.24, 2.97);
g.fillStyle = '#1e1a15';
for (let y = -2.8, row = 0; y < 0; y += 0.32, row++) {
  for (let x = -0.62 + (row % 2) * 0.2; x < 0.6; x += 0.42) g.fillRect(x + 0.02, y + 0.02, 0.38, 0.28);
}
// the steps going down and away, fading to nothing
for (let i = 0; i < 6; i++) {
  g.fillStyle = 'rgba(40,34,28,' + (0.7 - i * 0.11) + ')';
  g.fillRect(-0.55 + i * 0.03, -0.12 - i * 0.16, 1.1 - i * 0.06, 0.05);
}
const dark = g.createLinearGradient(0, -2.95, 0, 0);
dark.addColorStop(0, 'rgba(6,5,4,0.9)');
dark.addColorStop(0.6, 'rgba(6,5,4,0.6)');
dark.addColorStop(1, 'rgba(6,5,4,0.2)');
g.fillStyle = dark;
g.fillRect(-0.62, -2.95, 1.24, 2.97);
