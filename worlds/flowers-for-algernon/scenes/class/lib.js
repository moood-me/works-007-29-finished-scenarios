// What the classroom's walls share: the paint — a wainscot of varnished boards to the chair rail at 1.1 m, a pale
// sage-cream wall above, a picture rail at 2.65 and a brown cornice at the ceiling (3.2) — over x0…x1 of a wall's
// foot (metres, y up negative). The caller clips holes (a window, a door) itself.
// And the houses beyond the schoolyard: their windows, [x, y, w, h, lit] in the row's metres (the houses and their
// lit windows are painted by two elements from the same list).
function wallPaint(g, x0, x1) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -3.22, w, 3.24);
  g.clip();
  g.fillStyle = '#d8d5bd';
  g.fillRect(x0, -3.22, w, 3.24);
  g.fillStyle = '#8a5f3c';
  g.fillRect(x0, -1.1, w, 1.1);
  g.strokeStyle = '#6f4a2e';
  g.lineWidth = 0.012;
  g.beginPath();
  for (let x = Math.ceil(x0 / 0.12) * 0.12; x < x1; x += 0.12) {
    g.moveTo(x, -1.06);
    g.lineTo(x, -0.12);
  }
  g.stroke();
  g.fillStyle = '#6a452b';
  g.fillRect(x0, -1.14, w, 0.06);
  g.fillStyle = '#a07450';
  g.fillRect(x0, -1.15, w, 0.015);
  g.fillStyle = '#4e3220';
  g.fillRect(x0, -0.12, w, 0.14);
  g.fillStyle = '#7b5536';
  g.fillRect(x0, -2.68, w, 0.035);
  g.fillStyle = '#6a4a33';
  g.fillRect(x0, -3.22, w, 0.12);
  g.restore();
}
const windows = [];
{
  let seed = 11;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  for (let h = 0; h < 8; h++) {
    const x0 = -18 + h * 4.5;
    const floors = 2 + (h % 3 === 1 ? 1 : 0);
    for (let f = 0; f < floors; f++) {
      for (let k = 0; k < 2; k++) windows.push([x0 + 0.9 + k * 1.8, -1.9 - f * 2.8, 0.7, 1.3, rnd() < 0.45]);
    }
  }
}
return { wallPaint, windows };
