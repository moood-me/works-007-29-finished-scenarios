// The houses across the street (metres from their foot; the anchor across the door's line): a row of one-storey
// fronts washed pink, ochre and green, faded and streaked by the rain; a shuttered window, a door ajar on a dark room,
// the eaves of zinc and tile; a hitching rail. Seen only through the street door.
const fronts = [[-9, -4.2, '#c9a59a', 3.6], [-4.2, 0.4, '#cdb67c', 3.9], [0.4, 5, '#9bb3a0', 3.5], [5, 9, '#c9a59a', 3.7]];
for (const [x0, x1, c, h] of fronts) {
  g.fillStyle = c;
  g.fillRect(x0, -h, x1 - x0, h + 0.05);
  for (let i = 0; i < 12; i++) {
    const x = x0 + e.rnd() * (x1 - x0);
    const gr = g.createLinearGradient(0, -h, 0, -h + 1.5);
    gr.addColorStop(0, 'rgba(90,80,70,0.35)');
    gr.addColorStop(1, 'rgba(90,80,70,0)');
    g.fillStyle = gr;
    g.fillRect(x, -h, 0.2 + e.rnd() * 0.3, 1.5);
  }
  g.fillStyle = 'rgba(70,60,50,0.3)';
  g.fillRect(x0, -0.6, x1 - x0, 0.65);
  // the eave
  g.fillStyle = '#6e6a64';
  g.fillRect(x0 - 0.1, -h - 0.25, x1 - x0 + 0.2, 0.25);
  g.fillStyle = 'rgba(30,26,22,0.35)';
  g.fillRect(x0, -h, x1 - x0, 0.15);
}
// a door ajar on a dark room
g.fillStyle = '#2a2420';
g.fillRect(-2.6, -2.4, 1.1, 2.4);
g.fillStyle = '#5a6e7a';
g.fillRect(-2.6, -2.4, 0.4, 2.4);
// shuttered windows
for (const x of [-6.8, -0.6, 2.2]) {
  g.fillStyle = '#4e6a7a';
  g.fillRect(x, -2.5, 1.0, 1.3);
  g.strokeStyle = '#3e5664';
  g.lineWidth = 0.03;
  for (let y = -2.42; y < -1.25; y += 0.09) {
    g.beginPath();
    g.moveTo(x + 0.05, y);
    g.lineTo(x + 0.95, y);
    g.stroke();
  }
  g.fillStyle = '#3a3028';
  g.fillRect(x - 0.05, -1.22, 1.1, 0.06);
}
// a hitching rail before them
g.fillStyle = '#4a3a2c';
g.fillRect(-5, -1.0, 4.5, 0.08);
for (const x of [-4.9, -2.8, -0.6]) g.fillRect(x, -1.0, 0.1, 1.0);
