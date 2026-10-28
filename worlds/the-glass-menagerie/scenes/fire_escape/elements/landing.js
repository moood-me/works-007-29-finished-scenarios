// The landing from above (metres; its middle at across 1.5, the wall its far edge, y toward the viewer): black iron
// slats running along it with the dark of the alley between them, a frame round its edge, and before the door a
// worn rag mat.
g.fillStyle = '#121216';
g.fillRect(-2.1, -0.68, 4.2, 1.36);
g.fillStyle = '#3a3739';
for (let y = -0.62; y < 0.62; y += 0.075) g.fillRect(-2.06, y, 4.12, 0.05);
g.fillStyle = '#2b292c';
g.fillRect(-2.1, -0.68, 4.2, 0.05);
g.fillRect(-2.1, 0.63, 4.2, 0.05);
g.fillRect(-2.1, -0.68, 0.05, 1.36);
g.fillRect(2.05, -0.68, 0.05, 1.36);
// rust and wear: paler where feet go, a little rust at the joints
for (let i = 0; i < 40; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(120,70,48,0.3)' : 'rgba(110,104,100,0.25)';
  g.fillRect(-2.05 + e.rnd() * 4.1, -0.62 + Math.floor(e.rnd() * 16) * 0.075, 0.1 + e.rnd() * 0.3, 0.05);
}
// the mat before the door
g.fillStyle = '#6a4a3e';
g.fillRect(0.88, -0.64, 0.7, 0.36);
g.fillStyle = 'rgba(160,120,96,0.45)';
for (let x = 0.92; x < 1.56; x += 0.06) g.fillRect(x, -0.62, 0.025, 0.32);
