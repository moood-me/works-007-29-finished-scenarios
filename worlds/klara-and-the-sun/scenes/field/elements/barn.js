// Mr McBain's barn across the field: old weathered boards gone grey-brown, a gambrel roof, the big gates of both its
// gable ends open — through them the dark inside, its floor, and beyond the far gates the sky and the land past it (left
// unpainted: seen through). Metres from its foot; 15 m wide, 11 m to the ridge, 20 m deep (the far gates drawn as the
// eye sees them from 100 m: smaller and a little higher).
const outline = new Path2D();
outline.moveTo(-7.5, 0);
outline.lineTo(-7.5, -5.5);
outline.lineTo(-5.6, -8.8);
outline.lineTo(0, -11);
outline.lineTo(5.6, -8.8);
outline.lineTo(7.5, -5.5);
outline.lineTo(7.5, 0);
outline.closePath();
g.fillStyle = '#76604f';
g.fill(outline);
// the boards: thin vertical seams, some paler
for (let bx = -7.3; bx < 7.4; bx += 0.55) {
  g.fillStyle = e.rnd() < 0.3 ? 'rgba(160,140,120,0.35)' : 'rgba(60,48,40,0.35)';
  g.fillRect(bx, -10.6, 0.08, 10.6);
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
// the gates' leaves, swung back flat against the front either side
g.fillStyle = '#857060';
g.fillRect(-5.2, -6, 2.5, 6);
g.fillRect(2.7, -6, 2.5, 6);
g.strokeStyle = 'rgba(50,40,34,0.6)';
g.lineWidth = 0.15;
for (const s of [-1, 1]) {
  g.beginPath();
  g.moveTo(s * 2.7, -6);
  g.lineTo(s * 5.2, 0);
  g.stroke();
}
// inside: the side walls in the dark, the floor of beaten earth and old straw running back to the far gates
g.fillStyle = '#2e2520';
g.fillRect(-2.6, -6, 5.2, 6);
g.fillStyle = '#5c4a38';
g.beginPath();
g.moveTo(-2.6, 0);
g.lineTo(2.6, 0);
g.lineTo(2.17, -0.28);
g.lineTo(-2.17, -0.28);
g.closePath();
g.fill();
g.fillStyle = '#3a2f28';
g.beginPath();
g.moveTo(-2.6, -6);
g.lineTo(2.6, -6);
g.lineTo(2.17, -5.28);
g.lineTo(-2.17, -5.28);
g.closePath();
g.fill();
// the far gates open: nothing painted there — the sky and the land beyond show through
g.save();
g.globalCompositeOperation = 'destination-out';
g.fillRect(-2.17, -5.28, 4.34, 5.0);
g.restore();
// the hay-loft door up in the gable
g.fillStyle = '#3a2f29';
g.fillRect(-0.9, -9.4, 1.8, 1.8);
e.at(0, -3, 'gates');
