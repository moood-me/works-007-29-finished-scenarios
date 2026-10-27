// The back wall (metres from its foot, across from the room's middle): the wainscot and the paint, the two tall
// windows cut through it (x −2.0…−0.6 and 0.6…2.0, sill 0.95, head 2.75) in deep painted casings, a radiator under
// each; between them a framed print of a sailing ship; right of them a world map pulled down on its roller.
g.save();
g.beginPath();
g.rect(-3.3, -3.22, 6.6, 3.24);
g.rect(-2.0, -2.75, 1.4, 1.8);
g.rect(0.6, -2.75, 1.4, 1.8);
g.clip('evenodd');
e.lib.wallPaint(g, -3.3, 3.3);
g.restore();
for (const x0 of [-2.0, 0.6]) {
  g.strokeStyle = '#ece6d4';
  g.lineWidth = 0.1;
  g.strokeRect(x0 - 0.05, -2.8, 1.5, 1.9);
  // the radiator
  g.fillStyle = '#c9c3b2';
  g.fillRect(x0 + 0.1, -0.78, 1.2, 0.58);
  g.fillStyle = '#aaa391';
  for (let x = x0 + 0.13; x < x0 + 1.28; x += 0.075) g.fillRect(x, -0.76, 0.02, 0.54);
  g.fillStyle = '#958e7d';
  g.fillRect(x0 + 0.1, -0.22, 1.2, 0.03);
}
// the print: a ship under sail on a grey-green sea, in a dark frame
g.fillStyle = '#4a3324';
g.fillRect(-0.32, -2.3, 0.64, 0.5);
g.fillStyle = '#d9d2bd';
g.fillRect(-0.28, -2.26, 0.56, 0.42);
g.fillStyle = '#93a39a';
g.fillRect(-0.24, -1.98, 0.48, 0.1);
g.fillStyle = '#5d4a3c';
g.fillRect(-0.1, -2.0, 0.2, 0.03);
g.fillStyle = '#f1ecdf';
g.beginPath();
g.moveTo(-0.02, -2.2);
g.lineTo(-0.02, -2.02);
g.lineTo(-0.1, -2.03);
g.closePath();
g.moveTo(0.02, -2.22);
g.lineTo(0.02, -2.02);
g.lineTo(0.11, -2.03);
g.closePath();
g.fill();
// the map on its roller: oceans pale blue, the continents in soft colours, no names
g.fillStyle = '#5b4636';
g.fillRect(2.18, -2.62, 1.0, 0.06);
g.fillStyle = '#bcd0d4';
g.fillRect(2.22, -2.56, 0.92, 0.64);
g.fillStyle = '#d6c58e';
g.beginPath();
g.ellipse(2.42, -2.36, 0.11, 0.09, 0.4, 0, Math.PI * 2);
g.ellipse(2.5, -2.12, 0.06, 0.12, 0.2, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#c99c8a';
g.beginPath();
g.ellipse(2.82, -2.38, 0.15, 0.07, 0, 0, Math.PI * 2);
g.ellipse(2.75, -2.16, 0.06, 0.1, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#a9bf8e';
g.beginPath();
g.ellipse(3.02, -2.06, 0.07, 0.05, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#5b4636';
g.fillRect(2.2, -1.93, 0.96, 0.03);
g.fillRect(2.66, -1.9, 0.04, 0.06);
