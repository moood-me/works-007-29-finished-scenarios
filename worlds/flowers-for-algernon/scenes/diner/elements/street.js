// The street outside the window, from above (metres; the middle at distance 12.75, y toward the viewer — its near
// edge under the diner's front, its far edge at the houses): the sidewalk before the diner in big pale slabs, the
// curb, the road's dark asphalt with a tram line's two rails, the far sidewalk under the houses.
g.fillStyle = '#34353a';
g.fillRect(-30, -6.55, 60, 13.1);
g.fillStyle = '#6f6b64';
g.fillRect(-30, 4.1, 60, 2.45);
g.fillStyle = '#5f5b55';
g.fillRect(-30, -6.55, 60, 1.35);
g.strokeStyle = '#5c5852';
g.lineWidth = 0.02;
g.beginPath();
for (let x = -30; x <= 30; x += 1.2) {
  g.moveTo(x, 4.1);
  g.lineTo(x, 6.55);
}
g.moveTo(-30, 5.3);
g.lineTo(30, 5.3);
g.stroke();
g.fillStyle = '#8a857d';
g.fillRect(-30, 3.98, 60, 0.14);
g.fillStyle = '#7d7a76';
g.fillRect(-30, -1.0, 60, 0.07);
g.fillRect(-30, 0.45, 60, 0.07);
