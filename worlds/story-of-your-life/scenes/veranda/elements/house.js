// The back of the house, from its foot (metres; x −4.4…5.0 — its left corner at across −2.0 —, the eave at 3.35 m):
// pale clapboards cut round the kitchen window (x −4.0…−2.7, 1.5…2.65 m up), the back door (x −0.5…0.4, from the
// deck at 0.5 m), the white trim of the corner and the eave, the concrete footing under the deck.
g.save();
g.beginPath();
g.rect(-4.4, -3.4, 9.4, 3.42);
g.rect(-4.0, -2.65, 1.3, 1.15);
g.clip('evenodd');
g.fillStyle = '#c9cfc9';
g.fillRect(-4.4, -3.4, 9.4, 3.42);
g.strokeStyle = 'rgba(96,104,100,0.45)';
g.lineWidth = 0.014;
for (let y = -0.5; y > -3.25; y -= 0.15) {
  g.beginPath();
  g.moveTo(-4.4, y);
  g.lineTo(5.0, y);
  g.stroke();
}
g.restore();
g.fillStyle = '#8f8c84';
g.fillRect(-4.4, -0.5, 9.4, 0.52);
g.fillStyle = '#efede6';
g.fillRect(-4.4, -3.4, 0.14, 2.9);
g.fillRect(-4.4, -3.4, 9.4, 0.16);
g.fillStyle = 'rgba(40,44,60,0.35)';
g.fillRect(-4.26, -3.24, 9.26, 0.1);
// the back door: its casing, the panelled door, the four-pane glass (painted by `door_glass`), the knob, the sill
g.fillStyle = '#efede6';
g.fillRect(-0.6, -2.7, 1.1, 2.2);
g.fillStyle = '#6d4f3c';
g.fillRect(-0.5, -2.6, 0.9, 2.1);
g.strokeStyle = 'rgba(50,34,24,0.55)';
g.lineWidth = 0.02;
g.strokeRect(-0.4, -1.4, 0.7, 0.75);
g.fillStyle = '#c9a65a';
g.beginPath();
g.arc(0.28, -1.5, 0.03, 0, Math.PI * 2);
g.fill();
