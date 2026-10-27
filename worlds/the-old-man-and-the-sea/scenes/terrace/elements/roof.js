// The underside of the Terrace's roof, seen from below: palm thatch laid in bundles across the rafters — round poles
// running from the eave over the water back over the viewer's head — and two beams across them that the lamps hang
// from. Metres, as the card stands before it is laid flat (tilt −90): x across, y 0 at the eave over the front edge,
// −11 behind the viewer; the beams at y −4.4 (5.3 m ahead) and −6.3 (3.4 m ahead).
const W = 12;
g.fillStyle = '#7a6749';
g.fillRect(-W, -11, 2 * W, 11.3);
// the thatch: layer on layer of palm leaves lying across, each bundle a band of strokes, lighter at its lower edge
for (let y = -11; y < 0.3; y += 0.22) {
  g.fillStyle = e.rnd() < 0.5 ? '#86714f' : '#715e43';
  g.fillRect(-W, y, 2 * W, 0.22);
  g.strokeStyle = 'rgba(160,138,96,0.5)';
  g.lineWidth = 0.02;
  for (let i = 0; i < 40; i++) {
    const x = -W + e.rnd() * 2 * W;
    const l = 0.4 + e.rnd() * 1.2;
    g.beginPath();
    g.moveTo(x, y + 0.19);
    g.lineTo(x + l, y + 0.14 + 0.06 * e.rnd());
    g.stroke();
  }
}
// the rafters: round poles, lit along one side
for (let x = -W + 0.4; x < W; x += 1.25) {
  g.fillStyle = '#5c4935';
  g.fillRect(x - 0.06, -11, 0.12, 11.3);
  g.fillStyle = '#7c6549';
  g.fillRect(x - 0.06, -11, 0.04, 11.3);
}
// the beams across them
for (const y of [-4.4, -6.3]) {
  g.fillStyle = '#4f3e2e';
  g.fillRect(-W, y - 0.09, 2 * W, 0.18);
  g.fillStyle = '#6c5640';
  g.fillRect(-W, y - 0.09, 2 * W, 0.05);
}
