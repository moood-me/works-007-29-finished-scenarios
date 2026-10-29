// The houses across the street, seen from the yard (the card faces the yard: its x to the right of one looking from
// the street eye, world across −x): Mark's (x −1 — world across +1) white clapboard, two storeys, sky-blue shutters, a
// red front door up two steps, a small porch roof; and the neighbours' either side — a grey-green one-storey, a brick
// one, a cream one —, lawns and bushes between, a garage door at each driveway.
const clap = (x, w, h, wall, line) => {
  g.fillStyle = wall;
  g.fillRect(x, -h, w, h);
  g.fillStyle = line;
  for (let y = -h + 0.18; y < -0.3; y += 0.18) g.fillRect(x, y, w, 0.015);
};
const roof = (x, w, h, rise, col) => {
  g.fillStyle = col;
  g.beginPath();
  g.moveTo(x - 0.4, -h);
  g.lineTo(x + w / 2, -h - rise);
  g.lineTo(x + w + 0.4, -h);
  g.closePath();
  g.fill();
};
const win = (cx, y, w, h, shutter, lit) => {
  g.fillStyle = '#f4f2ea';
  g.fillRect(cx - w / 2 - 0.06, y - 0.06, w + 0.12, h + 0.12);
  g.fillStyle = lit ?? '#6f7c8c';
  g.fillRect(cx - w / 2, y, w, h);
  g.fillStyle = '#f4f2ea';
  g.fillRect(cx - 0.02, y, 0.04, h);
  g.fillRect(cx - w / 2, y + h / 2 - 0.02, w, 0.04);
  if (shutter) {
    g.fillStyle = shutter;
    g.fillRect(cx - w / 2 - 0.36, y - 0.04, 0.26, h + 0.08);
    g.fillRect(cx + w / 2 + 0.1, y - 0.04, 0.26, h + 0.08);
  }
};
const bush = (x, r, col) => {
  g.fillStyle = col;
  g.beginPath();
  g.ellipse(x, -r * 0.7, r, r * 0.75, 0, 0, Math.PI * 2);
  g.fill();
};
// a garage door (the driveway's end): x its middle
const garage = (x, h) => {
  g.fillStyle = '#e9e6dc';
  g.fillRect(x - 1.5, -h, 3, h);
  g.fillStyle = 'rgba(120,118,110,0.35)';
  for (let y = -h + 0.45; y < 0; y += 0.45) g.fillRect(x - 1.5, y, 3, 0.03);
};
// Mark's house (x −4.8 … 2.8: the driveway at world −5.5 is x 5.5, to its right)
clap(-4.8, 7.6, 5.6, '#f1efe8', 'rgba(150,150,140,0.35)');
roof(-4.8, 7.6, 5.6, 2.2, '#6c6e78');
for (const cx of [-3.2, -0.2, 1.8]) win(cx, -4.9, 0.9, 1.1, '#7fa6c9');
win(-3.2, -2.3, 1.1, 1.3, '#7fa6c9');
win(1.8, -2.3, 1.1, 1.3, '#7fa6c9');
g.fillStyle = '#b8403a';
g.fillRect(-0.6, -2.5, 0.95, 2.1);
g.fillStyle = '#d9c36a';
g.fillRect(0.2, -1.5, 0.05, 0.05);
g.fillStyle = '#d8d4c8';
g.fillRect(-1.0, -0.4, 1.8, 0.4);
g.fillRect(-1.2, -0.2, 2.2, 0.2);
g.fillStyle = '#6c6e78';
g.fillRect(-1.3, -2.85, 2.4, 0.18);
garage(5.5, 2.4);
clap(4.0, 3.2, 2.9, '#ece9de', 'rgba(150,150,140,0.3)');
roof(4.0, 3.2, 2.9, 1.0, '#6c6e78');
bush(-4.2, 0.7, '#5f8a52');
bush(2.4, 0.6, '#6a9458');
e.at(-0.13, -1.4, 'mark_door');
e.at(1.8, -4.35, 'mark_window');
// the neighbours on the left (world across +)
clap(-19, 9, 3.6, '#a9b8a6', 'rgba(90,110,90,0.3)');
roof(-19, 9, 3.6, 1.8, '#7a5a4c');
for (const cx of [-17, -14, -11.5]) win(cx, -2.6, 1.0, 1.2, '#f2f0e6');
garage(-8, 2.4);
bush(-9.8, 0.8, '#5c8650');
g.fillStyle = '#b06a52';
g.fillRect(-36, -5.2, 10, 5.2);
roof(-36, 10, 5.2, 2.0, '#5a5560');
for (const cx of [-34, -31, -28]) {
  win(cx, -4.6, 0.9, 1.1);
  win(cx, -2.2, 0.9, 1.2);
}
// the neighbours on the right (world across −)
clap(10, 9, 3.8, '#efe3c4', 'rgba(150,130,100,0.3)');
roof(10, 9, 3.8, 1.9, '#8a5f4e');
for (const cx of [12, 15, 17.5]) win(cx, -2.7, 1.0, 1.2, '#c9a37a');
garage(22, 2.4);
bush(19.5, 0.7, '#5f8a52');
clap(26, 10, 5.4, '#d7dde4', 'rgba(110,120,130,0.3)');
roof(26, 10, 5.4, 2.2, '#5d6070');
for (const cx of [28, 31, 34]) {
  win(cx, -4.7, 0.9, 1.1, '#5d6c80');
  win(cx, -2.3, 0.9, 1.2, '#5d6c80');
}
