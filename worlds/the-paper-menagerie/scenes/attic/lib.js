// What the attic shares: its unpainted pine boards (over x0…x1, y0…y1 of a sheet, the boards running along y), grey
// with dust and age, knots and nail heads; and a shade laid over whatever was just painted, source-atop.
function boards(g, x0, x1, y0, y1, w, seed) {
  g.fillStyle = '#a58466';
  g.fillRect(x0, y0, x1 - x0, y1 - y0);
  let i = 0;
  for (let x = x0; x < x1; x += w, i++) {
    const h = anim.hash(i, seed);
    g.fillStyle = `rgba(${h < 0.5 ? '90,64,44' : '214,186,150'},${0.08 + 0.12 * anim.hash(i, seed + 1)})`;
    g.fillRect(x, y0, w, y1 - y0);
    g.fillStyle = 'rgba(60,42,30,0.45)';
    g.fillRect(x, y0, 0.008, y1 - y0);
    g.fillStyle = 'rgba(70,50,36,0.5)';
    const k = y0 + anim.hash(i, seed + 2) * (y1 - y0);
    g.beginPath();
    g.ellipse(x + w * 0.5, k, 0.018, 0.03, 0, 0, Math.PI * 2);
    g.fill();
  }
}
function dust(g, x, y, w, h, a) {
  g.save();
  g.globalCompositeOperation = 'source-atop';
  g.fillStyle = `rgba(176,166,150,${a})`;
  g.fillRect(x, y, w, h);
  g.restore();
}
return { boards, dust };
