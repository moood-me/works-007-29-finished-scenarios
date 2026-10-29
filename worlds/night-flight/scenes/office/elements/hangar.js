// The hangar across the apron, 70 m off and 4.5 m below the window: its arched corrugated front, the great gate open
// and lit warm inside (three lamps hanging, a spare engine, the tool board), the gate's light `gate`; to its right the
// mechanics' workbench under a lamp on a post (`bench`). Small figures by the keys: Roblet (`yard_roblet`: by the
// gate in the rain, or stooping in its light over the chocks), Robineau (`yard_robineau`: by the wall left of the
// gate, without his coat, his folder to his chest). Metres; x along the front, y up negative.
const R = 10;
const top = x => -7.0 - 2.4 * (1 - (x / R) ** 2);
// the front, its corrugations
g.fillStyle = '#4d5363';
g.beginPath();
g.moveTo(-R, 0);
for (let x = -R; x <= R + 0.01; x += 0.5) g.lineTo(x, top(x));
g.lineTo(R, 0);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(30,34,44,0.45)';
g.lineWidth = 0.06;
for (let x = -R + 0.3; x < R; x += 0.6) {
  g.beginPath();
  g.moveTo(x, top(x) + 0.1);
  g.lineTo(x, 0);
  g.stroke();
}
// the gate's lit inside: warm, brightest under the lamps
const inside = g.createLinearGradient(0, -6.3, 0, 0);
inside.addColorStop(0, '#e7b676');
inside.addColorStop(1, '#bd8650');
g.fillStyle = inside;
g.fillRect(-6.2, -6.3, 12.4, 6.3);
// the back of the hangar seen through it: the tool board, a spare engine on its stand, a ladder
g.fillStyle = '#8a6440';
g.fillRect(-4.8, -4.2, 3.2, 1.6);
g.fillStyle = '#5a4430';
for (let k = 0; k < 9; k++) g.fillRect(-4.6 + k * 0.33, -4.0, 0.06, 0.5 + 0.3 * (k % 2));
g.fillStyle = '#4a4a48';
g.beginPath();
g.ellipse(2.6, -1.5, 1.0, 0.8, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(2.0, -0.8, 0.12, 0.8);
g.fillRect(3.1, -0.8, 0.12, 0.8);
g.strokeStyle = '#6a5038';
g.lineWidth = 0.1;
g.beginPath();
g.moveTo(4.6, 0);
g.lineTo(5.2, -4.4);
g.moveTo(5.3, 0);
g.lineTo(5.9, -4.4);
g.stroke();
// the lamps hanging in the gate
for (const x of [-3, 0, 3]) {
  g.fillStyle = '#fff2d0';
  g.beginPath();
  g.arc(x, -5.6, 0.25, 0, Math.PI * 2);
  g.fill();
}
e.light(0, -5.0, 3.5, '#ffd49a', 1, 'gate');
// the gate's leaves pushed aside, dark
g.fillStyle = '#3b404d';
g.fillRect(-7.6, -6.4, 1.3, 6.4);
g.fillRect(6.3, -6.4, 1.3, 6.4);
// the workbench to the right of the hangar, under its lamp on a post
g.fillStyle = '#4a3a2c';
g.fillRect(11.0, -1.0, 2.4, 0.14);
g.fillRect(11.1, -0.86, 0.12, 0.86);
g.fillRect(13.2, -0.86, 0.12, 0.86);
g.fillStyle = '#3a3e42';
g.fillRect(14.0, -3.2, 0.12, 3.2);
g.fillRect(13.3, -3.2, 0.8, 0.1);
g.fillStyle = '#ffe2b0';
g.beginPath();
g.arc(13.4, -3.0, 0.16, 0, Math.PI * 2);
g.fill();
e.light(13.4, -2.9, 0.8, '#ffcf8f', 1, 'bench');
// a small figure: a body of plain shapes, the head, the legs (h its height, lean forward, col the clothes)
const figure = (x, h, lean, col, head, extra) => {
  g.save();
  g.translate(x, 0);
  g.fillStyle = col.legs;
  g.fillRect(-0.16, -h * 0.47, 0.12, h * 0.47);
  g.fillRect(0.04, -h * 0.47, 0.12, h * 0.47);
  g.translate(0, -h * 0.47);
  g.rotate(lean);
  g.fillStyle = col.body;
  g.beginPath();
  g.moveTo(-0.24, 0);
  g.lineTo(-0.26, -h * 0.38);
  g.lineTo(0.26, -h * 0.38);
  g.lineTo(0.24, 0);
  g.closePath();
  g.fill();
  g.fillStyle = head;
  g.beginPath();
  g.arc(0, -h * 0.45, 0.12, 0, Math.PI * 2);
  g.fill();
  if (extra) extra(h);
  g.restore();
};
const SKIN = '#c79a7a';
if (e.state.yard_robineau) {
  // Robineau by the wall left of the gate, no coat, his folder to his chest
  figure(-8.6, 1.62, 0, { body: '#6e5a45', legs: '#5a4a3a' }, SKIN, h => {
    g.fillStyle = '#d8d2c0';
    g.fillRect(-0.15, -h * 0.33, 0.3, 0.22);
    g.fillStyle = '#2a211c';
    g.beginPath();
    g.arc(0, -h * 0.48, 0.1, Math.PI, 0);
    g.fill();
  });
}
if (e.state.yard_roblet === 'hangar') {
  // Roblet by the gate, in the rain, his cap on
  figure(8.0, 1.66, 0, { body: '#4c6f93', legs: '#3d5470' }, SKIN, h => {
    g.fillStyle = '#9c805a';
    g.fillRect(-0.14, -h * 0.52, 0.28, 0.08);
  });
} else if (e.state.yard_roblet === 'chocks') {
  // Roblet stooping in the gate's light over the chocks, gathering them up
  figure(-1.4, 1.66, 0.6, { body: '#4c6f93', legs: '#3d5470' }, '#b9b4ab', null);
  g.fillStyle = '#6a5038';
  g.beginPath();
  g.moveTo(-0.4, 0);
  g.lineTo(0.1, 0);
  g.lineTo(-0.4, -0.3);
  g.closePath();
  g.fill();
}
