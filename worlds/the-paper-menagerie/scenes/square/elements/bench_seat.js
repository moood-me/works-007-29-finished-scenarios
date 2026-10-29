// The bench's seat from above (metres, y toward the viewer): four green-painted slats with gaps between them, worn
// paler where people sit.
for (let i = 0; i < 4; i++) {
  const y = -0.2 + i * 0.105;
  g.fillStyle = '#5f8a62';
  g.fillRect(-0.9, y, 1.8, 0.085);
  g.fillStyle = 'rgba(230,226,200,0.25)';
  g.fillRect(-0.5, y + 0.01, 1.0, 0.06);
}
