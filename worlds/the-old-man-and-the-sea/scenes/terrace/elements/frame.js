// The Terrace's front over the water, seen from inside: the posts that carry the roof, the rail between them at the
// deck's edge, and over them the eave beam with the thatch's ragged ends hanging under it. Metres, the middle of the
// deck's edge at the anchor (1 m right); the eave at 3.1.
// the posts: rough round trunks, the bark worn off
const POSTS = [-5.2, 1.6, 7.4];
for (const x of POSTS) {
  g.fillStyle = '#6a5640';
  g.fillRect(x - 0.11, -3.15, 0.22, 3.2);
  g.fillStyle = '#806a50';
  g.fillRect(x - 0.11, -3.15, 0.07, 3.2);
  g.strokeStyle = 'rgba(50,40,30,0.4)';
  g.lineWidth = 0.015;
  for (let y = -3; y < 0; y += 0.35 + 0.3 * e.rnd()) {
    g.beginPath();
    g.moveTo(x - 0.1, y);
    g.lineTo(x + 0.1, y + 0.03);
    g.stroke();
  }
}
// the rail: a top rail and a lower one, short posts between, all of the same grey wood
for (let x = -11; x <= 11; x += 1.15) {
  if (POSTS.some(p => Math.abs(p - x) < 0.4)) continue;
  g.fillStyle = '#7a6650';
  g.fillRect(x - 0.05, -0.95, 0.1, 0.96);
}
g.fillStyle = '#86725a';
g.fillRect(-11, -1, 22, 0.09);
g.fillStyle = '#6f5c47';
g.fillRect(-11, -0.52, 22, 0.06);
// the deck's edge board
g.fillStyle = '#5f4d3a';
g.fillRect(-11, -0.08, 22, 0.1);
// a coil of line and a net hung over the rail by the middle post
g.strokeStyle = '#b9a986';
g.lineWidth = 0.025;
for (let k = 0; k < 6; k++) {
  g.beginPath();
  g.ellipse(2.4, -0.62, 0.22 - k * 0.012, 0.3 - k * 0.012, 0, 0, Math.PI * 2);
  g.stroke();
}
g.strokeStyle = 'rgba(120,110,90,0.75)';
g.lineWidth = 0.012;
for (let x = -3.6; x <= -2.4; x += 0.08) {
  g.beginPath();
  g.moveTo(x, -1);
  g.quadraticCurveTo(x + 0.04, -0.6, x + 0.02 * Math.sin(x * 9), -0.3 - 0.1 * Math.sin(x * 3));
  g.stroke();
}
// the eave beam, and the thatch's ends hanging ragged under it
g.fillStyle = '#4f3e2e';
g.fillRect(-11, -3.2, 22, 0.2);
g.fillStyle = '#7f6a4b';
g.beginPath();
g.moveTo(-11, -3.05);
for (let x = -11; x <= 11; x += 0.06) g.lineTo(x, -2.75 - 0.12 * e.rnd() - 0.05 * Math.sin(x * 2.3));
g.lineTo(11, -3.05);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(150,128,90,0.6)';
g.lineWidth = 0.015;
for (let i = 0; i < 400; i++) {
  const x = -11 + e.rnd() * 22;
  g.beginPath();
  g.moveTo(x, -3.05);
  g.lineTo(x + 0.03 * (e.rnd() - 0.5), -2.78 - 0.1 * e.rnd());
  g.stroke();
}
