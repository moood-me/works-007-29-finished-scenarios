// The yard beyond the shed from above (its middle at distance 18, y toward us): autumn grass going to seed, a trodden
// path from the shed's door to the fence, bare earth of the old potato bed by the shed.
g.fillStyle = '#8c9258';
g.fillRect(-20, -12, 40, 24);
for (let i = 0; i < 260; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(120,128,70,0.35)' : 'rgba(176,164,96,0.3)';
  g.beginPath();
  g.ellipse(-20 + e.rnd() * 40, -12 + e.rnd() * 24, 0.3 + e.rnd() * 1.2, 0.2 + e.rnd() * 0.6, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// the old potato bed, bare by the shed
g.fillStyle = '#7d6a50';
g.fillRect(-4, 9.2, 9, 2.8);
// the path: shed door (across 1.8) to the gate (across 3)
g.fillStyle = '#a8946e';
g.beginPath();
g.moveTo(1.2, 12);
g.quadraticCurveTo(2.0, 6, 2.6, 3.6);
g.lineTo(3.4, 3.6);
g.quadraticCurveTo(2.9, 6, 2.4, 12);
g.closePath();
g.fill();
