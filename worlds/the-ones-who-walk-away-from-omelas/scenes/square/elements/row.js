// The houses along the square's right side, seen along their fronts (x −8, 21 m ahead, … x 8, 5 m ahead): three tall
// houses wall to wall, their plaster painted sand, rose and pale blue; green shutters, red geraniums in the
// window boxes, arched doors, a terracotta cornice under each roof; a long striped cloth hung from a balcony stirs in
// the wind (layer `cloth`). The window nearest the viewer on the second floor stands open (point "row#window").
const A = e.anim;
const houses = [[-8, 5.6, 12.2, '#e9d2b0'], [-2.4, 5, 11, '#e6b9ab'], [2.6, 5.4, 12.6, '#bfd0d8']];
for (const [x0, w, h, wall] of houses) {
  g.fillStyle = wall;
  g.fillRect(x0, -h, w, h);
  g.fillStyle = '#b8603f';
  g.fillRect(x0 - 0.05, -h - 0.45, w + 0.1, 0.5);
  g.fillStyle = '#9b4d34';
  g.fillRect(x0 - 0.05, -h + 0.05, w + 0.1, 0.12);
  // two floors of windows with shutters and flower boxes
  for (const fy of [-h + 1.6, -h + 4.8]) {
    const n = Math.floor((w - 0.6) / 1.6);
    for (let k = 0; k < n; k++) {
      const wx = x0 + 0.6 + k * 1.6 + (w - 0.6 - n * 1.6) / 2;
      const open = x0 === 2.6 && k === n - 1 && fy === -h + 4.8;
      g.fillStyle = open ? '#4a4540' : '#646a70';
      g.fillRect(wx, fy, 0.85, 1.7);
      g.fillStyle = '#5f7f5a';
      if (open) {
        g.fillRect(wx - 0.26, fy, 0.22, 1.7);
        g.fillRect(wx + 0.89, fy, 0.22, 1.7);
        e.at(wx + 0.42, fy + 0.85, 'window');
      } else {
        g.fillRect(wx - 0.3, fy, 0.28, 1.7);
        g.fillRect(wx + 0.87, fy, 0.28, 1.7);
      }
      g.fillStyle = '#7d5b40';
      g.fillRect(wx - 0.1, fy + 1.7, 1.05, 0.22);
      for (let f = 0; f < 4; f++) {
        g.fillStyle = f % 2 ? '#c84a3e' : '#e0675a';
        g.beginPath();
        g.arc(wx + 0.06 + f * 0.24, fy + 1.66, 0.12, 0, Math.PI * 2);
        g.fill();
      }
    }
  }
  // the ground floor: an arched door and a shop window
  g.fillStyle = '#6a5442';
  g.beginPath();
  g.moveTo(x0 + 1, 0);
  g.lineTo(x0 + 1, -2.2);
  g.arc(x0 + 1.65, -2.2, 0.65, Math.PI, 0);
  g.lineTo(x0 + 2.3, 0);
  g.closePath();
  g.fill();
  g.fillStyle = '#646a70';
  g.fillRect(x0 + 3, -2.6, w - 3.6, 1.8);
  g.fillStyle = '#d8cdb7';
  g.fillRect(x0, -0.5, w, 0.5);
}
// a balcony on the blue house, a long striped cloth hung from it, stirring
g.fillStyle = '#6a6660';
g.fillRect(3, -8.2, 4.6, 0.18);
for (let x = 3.1; x < 7.6; x += 0.3) g.fillRect(x, -9.2, 0.05, 1.0);
g.fillRect(3, -9.25, 4.6, 0.08);
e.layer('cloth', { pivot: [5.3, -8.2], wind: { strength: 0.5, gust: 0.6 } }, g => {
  for (let i = 0; i < 5; i++) {
    g.fillStyle = i % 2 ? '#f3efe6' : '#d9776a';
    g.fillRect(4.6 + i * 0.28, -8.2, 0.28, 4.6);
  }
});
