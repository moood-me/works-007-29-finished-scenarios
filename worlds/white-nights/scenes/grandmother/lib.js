// «Grandmother's Room» — what its paintings share, in the world's look (the embankment's): a wash of colour and a fine
// sepia ink line round every shape, all in daylight colours (the scene's light is the engine's: notes.md).
const { hash } = anim;
const INK = '#4a3f3a';

// Old wallpaper on a wall x0…x1 (metres), from the ceiling at -top down to the floor at 0: a warm cream ground,
// paler stripes, small four-petalled flowers with two leaves between them (one path each), a frieze under the ceiling, a brown skirting
function wallpaper(g, x0, x1, top, seed) {
  const w = x1 - x0;
  g.fillStyle = '#dcc9ad';
  g.fillRect(x0, -top, w, top);
  g.fillStyle = 'rgba(250,242,226,0.45)';
  for (let x = x0 + 0.04; x < x1; x += 0.34) g.fillRect(x, -top, 0.1, top);
  g.beginPath();
  let row = 0;
  for (let y = -top + 0.42; y < -0.25; y += 0.24, row++) {
    for (let x = x0 + 0.26; x < x1; x += 0.34) {
      const jx = (hash(row * 97 + Math.round(x * 10), seed) - 0.5) * 0.02;
      for (const [dx, dy] of [[0, -0.016], [0.015, 0], [0, 0.016], [-0.015, 0]]) {
        g.moveTo(x + jx + dx + 0.011, y + dy);
        g.arc(x + jx + dx, y + dy, 0.011, 0, Math.PI * 2);
      }
    }
  }
  g.fillStyle = 'rgba(160,104,96,0.5)';
  g.fill();
  g.beginPath();
  row = 0;
  for (let y = -top + 0.42; y < -0.25; y += 0.24, row++) {
    for (let x = x0 + 0.26; x < x1; x += 0.34) {
      g.moveTo(x - 0.02, y + 0.05);
      g.quadraticCurveTo(x - 0.03, y + 0.02, x - 0.01, y + 0.02);
      g.moveTo(x + 0.02, y + 0.05);
      g.quadraticCurveTo(x + 0.03, y + 0.02, x + 0.01, y + 0.02);
    }
  }
  g.strokeStyle = 'rgba(112,128,96,0.6)';
  g.lineWidth = 0.012;
  g.stroke();
  // the frieze and the skirting
  g.fillStyle = '#c7ad8c';
  g.fillRect(x0, -top, w, 0.16);
  g.fillStyle = '#7d5d45';
  g.fillRect(x0, -0.14, w, 0.14);
  g.beginPath();
  g.moveTo(x0, -top + 0.16);
  g.lineTo(x1, -top + 0.16);
  g.moveTo(x0, -0.14);
  g.lineTo(x1, -0.14);
  g.strokeStyle = INK;
  g.lineWidth = 0.01;
  g.stroke();
}

// A cut through a painting (an opening in a wall): what is painted there is taken away
function cut(g, x, y, w, h) {
  g.save();
  g.globalCompositeOperation = 'destination-out';
  g.fillStyle = '#000';
  g.fillRect(x, y, w, h);
  g.restore();
}

// A rectangle filled and outlined in ink
function box(g, x, y, w, h, fill, line = 0.01) {
  g.fillStyle = fill;
  g.fillRect(x, y, w, h);
  g.strokeStyle = INK;
  g.lineWidth = line;
  g.strokeRect(x, y, w, h);
}

return { INK, wallpaper, cut, box };
