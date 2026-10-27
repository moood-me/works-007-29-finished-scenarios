// The Helmers' house, its street front (10.4 m wide): the doll's house of the parlour and the ballroom seen from
// outside, shut — its plaster the cabinet's bottle-green with cream stucco and a gilt fillet. The ground floor
// rusticated, the front door in the middle (two steps, a fanlight, a wreath; the lantern on its bracket — light
// `door`); over it the Helmers' floor (`parlour`: the window with the tree in it) with a little balcony; the
// Stenborgs' floor over that; the cornice and the snow on the roof. The windows lit in the evening are the layer `lit`
// (and its glows), shown as the day goes by its animate. Metres, the foot at the pavement.
const { casement, lamplight, SNOW } = e.lib;
const GREEN = '#40604f';
const GREEN_DARK = '#35503f';
const STUCCO = '#e3d9c4';
const GILT = '#b8954f';
const CURTAIN = '#9c3b2e';
const XS = [-4.1, -2.45, 2.45, 4.1];
const UPPER = [-4.1, -2.45, 0, 2.45, 4.1];
const W = 0.95;

// the walls: the rusticated ground floor, the two floors over it
g.fillStyle = GREEN_DARK;
g.fillRect(-5.2, -3.7, 10.4, 3.7);
g.fillStyle = 'rgba(30,44,36,0.55)';
for (let y = -0.95; y > -3.6; y -= 0.38) g.fillRect(-5.2, y, 10.4, 0.035);
g.fillStyle = GREEN;
g.fillRect(-5.2, -10.7, 10.4, 7.0);
// the plinth of granite
g.fillStyle = '#8d8a84';
g.fillRect(-5.2, -0.6, 10.4, 0.6);
g.fillStyle = '#7a7771';
g.fillRect(-5.2, -0.62, 10.4, 0.05);
// the quoins at the corners
g.fillStyle = STUCCO;
for (let y = -0.6, i = 0; y > -10.7; y -= 0.45, i++) {
  const w = i % 2 ? 0.32 : 0.46;
  g.fillRect(-5.2, y - 0.4, w, 0.4);
  g.fillRect(5.2 - w, y - 0.4, w, 0.4);
}

// the band over the ground floor, the cornice between the Helmers' floor and the Stenborgs', snow on each
for (const [y, h] of [[-3.7, 0.24], [-7.15, 0.32]]) {
  g.fillStyle = STUCCO;
  g.fillRect(-5.3, y - h, 10.6, h);
  g.fillStyle = GILT;
  g.fillRect(-5.3, y - 0.05, 10.6, 0.025);
  g.fillStyle = SNOW;
  g.fillRect(-5.32, y - h - 0.07, 10.64, 0.07);
}
g.fillStyle = 'rgba(160,150,128,0.8)';
for (let x = -5.2; x < 5.2; x += 0.22) g.fillRect(x, -7.36, 0.11, 0.1);

// the windows: the ground floor's (dark — the landlord's office, shut for the holiday), the Helmers', the Stenborgs'
for (const x of XS) casement(g, x, -1.25, W, 1.95, STUCCO, false);
for (const x of UPPER) casement(g, x, -4.35, W, 2.15, STUCCO, true);
for (const x of UPPER) casement(g, x, -7.85, 0.9, 1.9, STUCCO, false);

// the balcony over the door: a stone slab on brackets, an iron railing, snow on it
g.fillStyle = STUCCO;
g.fillRect(-0.95, -4.12, 1.9, 0.16);
for (const x of [-0.7, 0.7]) {
  g.beginPath();
  g.moveTo(x - 0.1, -3.96);
  g.lineTo(x + 0.1, -3.96);
  g.lineTo(x, -3.72);
  g.closePath();
  g.fill();
}
g.strokeStyle = '#24282a';
g.lineWidth = 0.03;
g.strokeRect(-0.9, -4.85, 1.8, 0.73);
for (let x = -0.78; x < 0.9; x += 0.12) {
  g.beginPath();
  g.moveTo(x, -4.83);
  g.lineTo(x, -4.14);
  g.stroke();
}
g.fillStyle = SNOW;
g.fillRect(-0.97, -4.92, 1.94, 0.07);
g.fillRect(-0.97, -4.18, 1.94, 0.06);

// the front door: two granite steps, the stucco portal, the door's two leaves of varnished oak, the fanlight
g.fillStyle = '#9a968e';
g.fillRect(-1.0, -0.16, 2.0, 0.16);
g.fillRect(-0.85, -0.32, 1.7, 0.16);
g.fillStyle = SNOW;
g.fillRect(-1.0, -0.19, 0.4, 0.04);
g.fillRect(0.62, -0.19, 0.38, 0.04);
g.fillRect(-0.85, -0.35, 1.7, 0.04);
g.fillStyle = STUCCO;
g.fillRect(-0.95, -3.45, 1.9, 3.13);
g.fillStyle = '#4a3326';
g.fillRect(-0.62, -2.62, 1.24, 2.3);
g.strokeStyle = '#3a271c';
g.lineWidth = 0.025;
for (const x of [-0.56, 0.04]) {
  g.strokeRect(x, -2.5, 0.52, 0.95);
  g.strokeRect(x, -1.45, 0.52, 1.0);
}
g.fillStyle = '#2a1d15';
g.fillRect(-0.012, -2.62, 0.024, 2.3);
g.fillStyle = '#c9a457';
for (const x of [-0.09, 0.09]) {
  g.beginPath();
  g.arc(x, -1.5, 0.03, 0, Math.PI * 2);
  g.fill();
}
// the fanlight: a half-round of glass over the door, its bars like a fan (dark by day: lit in `lit`)
g.fillStyle = '#3d4555';
g.beginPath();
g.arc(0, -2.66, 0.62, Math.PI, 0);
g.closePath();
g.fill();
g.strokeStyle = '#ece6da';
g.lineWidth = 0.04;
for (let a = Math.PI; a <= 2 * Math.PI + 0.01; a += Math.PI / 5) {
  g.beginPath();
  g.moveTo(0, -2.66);
  g.lineTo(Math.cos(a) * 0.6, -2.66 + Math.sin(a) * 0.6);
  g.stroke();
}
// the Christmas wreath on the door, a red bow under it
g.strokeStyle = '#2d4a33';
g.lineWidth = 0.09;
g.beginPath();
g.arc(0, -2.0, 0.2, 0, Math.PI * 2);
g.stroke();
g.fillStyle = '#b3332b';
for (const s of [-1, 1]) {
  g.beginPath();
  g.moveTo(0, -1.8);
  g.lineTo(s * 0.12, -1.86);
  g.lineTo(s * 0.12, -1.74);
  g.closePath();
  g.fill();
  g.fillRect(s > 0 ? 0.01 : -0.05, -1.8, 0.04, 0.2);
}
for (const [x, y] of [[-0.14, -2.1], [0.12, -2.14], [0.17, -1.95], [-0.18, -1.92], [0.02, -2.2]]) {
  g.beginPath();
  g.arc(x, y, 0.028, 0, Math.PI * 2);
  g.fill();
}

// the lantern on its iron bracket right of the door (its glass lit in `lit`)
g.strokeStyle = '#24282a';
g.lineWidth = 0.04;
g.beginPath();
g.moveTo(1.0, -2.9);
g.lineTo(1.35, -2.9);
g.lineTo(1.35, -2.82);
g.moveTo(1.0, -2.6);
g.quadraticCurveTo(1.25, -2.62, 1.3, -2.85);
g.stroke();
g.fillStyle = '#24282a';
g.beginPath();
g.moveTo(1.21, -2.82);
g.lineTo(1.49, -2.82);
g.lineTo(1.35, -2.96);
g.closePath();
g.fill();
g.fillRect(1.23, -2.42, 0.24, 0.05);
g.fillStyle = '#d8d3c4';
g.fillRect(1.25, -2.8, 0.2, 0.38);
g.fillStyle = SNOW;
g.fillRect(1.22, -2.99, 0.26, 0.04);

// the cornice under the roof: brackets, a gilt fillet, then the snow on the eaves
g.fillStyle = STUCCO;
g.fillRect(-5.35, -11.0, 10.7, 0.32);
g.fillStyle = '#cfc3a9';
for (let x = -5.1; x < 5.2; x += 0.5) g.fillRect(x, -10.7, 0.14, 0.2);
g.fillStyle = GILT;
g.fillRect(-5.35, -10.72, 10.7, 0.025);
g.fillStyle = SNOW;
g.beginPath();
g.moveTo(-5.4, -11.0);
g.lineTo(5.4, -11.0);
g.lineTo(5.3, -11.25);
g.lineTo(-5.3, -11.25);
g.closePath();
g.fill();

// the Helmers' windows (their lamps), the parlour's with the tree inside, a Stenborg window lit, the fanlight and
// the lantern over the door — lit as the evening comes
e.layer('lit', {}, c => {
  for (const x of UPPER) lamplight(c, e, x, -4.35, W, 2.15, CURTAIN, `h${UPPER.indexOf(x)}`);
  // the parlour: the tree's dark green against the lamplight, its candles
  c.fillStyle = '#2f4a35';
  c.beginPath();
  c.moveTo(-2.45, -6.15);
  c.lineTo(-2.08, -4.42);
  c.lineTo(-2.82, -4.42);
  c.closePath();
  c.fill();
  c.fillStyle = '#fff1c4';
  for (const [dx, dy] of [[0, -6.0], [-0.1, -5.6], [0.12, -5.4], [-0.2, -5.0], [0.18, -4.8], [0.02, -5.15], [-0.06, -4.62]]) {
    c.beginPath();
    c.arc(-2.45 + dx, dy, 0.025, 0, Math.PI * 2);
    c.fill();
  }
  lamplight(c, e, 2.45, -7.85, 0.9, 1.9, '#5b6a4e', 'st', 0.7);
  c.fillStyle = '#f0bf72';
  c.beginPath();
  c.arc(0, -2.66, 0.58, Math.PI, 0);
  c.closePath();
  c.fill();
  c.strokeStyle = '#ece6da';
  c.lineWidth = 0.04;
  for (let a = Math.PI; a <= 2 * Math.PI + 0.01; a += Math.PI / 5) {
    c.beginPath();
    c.moveTo(0, -2.66);
    c.lineTo(Math.cos(a) * 0.6, -2.66 + Math.sin(a) * 0.6);
    c.stroke();
  }
  c.fillStyle = '#ffd47e';
  c.fillRect(1.25, -2.8, 0.2, 0.38);
  c.fillStyle = '#24282a';
  c.fillRect(1.34, -2.8, 0.02, 0.38);
  e.light(1.35, -2.61, 0.3, '#ffcf8a', 1, 'door');
});
e.at(-2.45, -5.4, 'parlour');
e.at(0, -1.5, 'door_front');
