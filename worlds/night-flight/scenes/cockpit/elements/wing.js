// The parasol wing over the front cockpit, a card laid face down: its underside seen from below, doped silver fabric,
// the ribs running from the leading edge (left) to the trailing edge, the aileron's line near the tip, the line's blue
// on its tip; the fuselage's shadow across it. y 0 at the far tip (11 m ahead), y −14 the near tip, behind the viewer.
g.fillStyle = '#b4b2aa';
g.fillRect(-1.15, -14.05, 2.3, 14.1);
g.strokeStyle = 'rgba(140,138,130,0.8)';
g.lineWidth = 0.025;
for (let y = -13.9; y < 0; y += 0.32) {
  g.beginPath();
  g.moveTo(-1.15, y);
  g.lineTo(1.15, y);
  g.stroke();
}
g.strokeStyle = 'rgba(90,90,86,0.7)';
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(0.6, -3.2);
g.lineTo(0.6, -0.2);
g.moveTo(0.6, -13.8);
g.lineTo(0.6, -10.8);
g.stroke();
g.fillStyle = '#2f4769';
g.fillRect(-1.15, -0.5, 2.3, 0.45);
g.fillStyle = 'rgba(40,40,50,0.25)';
g.fillRect(-1.15, -7.45, 2.3, 0.9);
