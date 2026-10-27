// What Halloran's walls share: the paint — dark green glazed tiles to the rail at 1 m (cream grout), a chrome rail,
// a warm cream wall above and a brown cornice at the ceiling — over x0…x1 of a wall 3 m high (metres from the wall's
// foot, y up negative). The caller clips holes (a window) itself.
// And the houses across the street: their windows, [x, y, w, h, lit] in the row's metres (houses and their lit
// windows are painted by two elements from the same list).
function wallPaint(g, x0, x1) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -3.02, w, 3.04);
  g.clip();
  g.fillStyle = '#e8d9b6';
  g.fillRect(x0, -3.02, w, 3.04);
  g.fillStyle = '#2e5446';
  g.fillRect(x0, -1.0, w, 1.0);
  g.strokeStyle = '#4f7564';
  g.lineWidth = 0.008;
  g.beginPath();
  for (let y = -0.85; y < 0; y += 0.15) {
    g.moveTo(x0, y);
    g.lineTo(x1, y);
  }
  for (let x = Math.ceil(x0 / 0.15) * 0.15; x < x1; x += 0.15) {
    g.moveTo(x, -1.0);
    g.lineTo(x, -0.1);
  }
  g.stroke();
  g.fillStyle = '#bfc3bf';
  g.fillRect(x0, -1.03, w, 0.04);
  g.fillStyle = '#8e928e';
  g.fillRect(x0, -0.995, w, 0.01);
  g.fillStyle = '#5b3b2a';
  g.fillRect(x0, -3.02, w, 0.1);
  g.fillStyle = '#1f2421';
  g.fillRect(x0, -0.1, w, 0.12);
  g.restore();
}
const windows = [];
{
  let seed = 7;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  for (let h = 0; h < 7; h++) {
    const x0 = -14 + h * 4;
    for (let f = 1; f < 3; f++) {
      for (let k = 0; k < 3; k++) windows.push([x0 + 0.55 + k * 1.15, -2.2 - f * 2.9, 0.62, 1.25, rnd() < 0.38]);
    }
  }
}
return { wallPaint, windows };
