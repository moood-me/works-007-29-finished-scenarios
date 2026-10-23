// Mr McBain's barn, far across the field: old weathered boards gone grey-brown, a gambrel roof, the big gates in its
// gable end open on the dark inside (metres from its foot; 15 m wide, 11 m to the ridge).
g.fillStyle = '#6f5a4a';
g.beginPath();
g.moveTo(-7.5, 0);
g.lineTo(-7.5, -5.5);
g.lineTo(-5.6, -8.8);
g.lineTo(0, -11);
g.lineTo(5.6, -8.8);
g.lineTo(7.5, -5.5);
g.lineTo(7.5, 0);
g.closePath();
g.fill();
// the boards: thin vertical seams, some paler
for (let bx = -7.3; bx < 7.4; bx += 0.55) {
  g.fillStyle = e.rnd() < 0.3 ? 'rgba(160,140,120,0.35)' : 'rgba(60,48,40,0.35)';
  g.fillRect(bx, -10.5, 0.08, 10.5);
}
// the roof's edge
g.strokeStyle = '#4a3c33';
g.lineWidth = 0.35;
g.beginPath();
g.moveTo(-7.8, -5.3);
g.lineTo(-5.6, -9.0);
g.lineTo(0, -11.2);
g.lineTo(5.6, -9.0);
g.lineTo(7.8, -5.3);
g.stroke();
// the gates, open: the dark inside, the two leaves swung back against the front
g.fillStyle = '#2c2420';
g.fillRect(-2.6, -6, 5.2, 6);
g.fillStyle = '#7d6654';
g.fillRect(-5.2, -6, 2.4, 6);
g.fillRect(2.8, -6, 2.4, 6);
g.strokeStyle = 'rgba(50,40,34,0.6)';
g.lineWidth = 0.15;
for (const s of [-1, 1]) {
  g.beginPath();
  g.moveTo(s * 2.8, -6);
  g.lineTo(s * 5.2, 0);
  g.stroke();
}
// the hay-loft door up in the gable
g.fillStyle = '#3a2f29';
g.fillRect(-0.9, -9.4, 1.8, 1.8);
e.at(0, -3, 'gates');
