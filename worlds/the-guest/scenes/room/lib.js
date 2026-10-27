// What the school's inside walls share.
// whitewash(g, e, x0, x1, h): a wall over x0…x1, h metres high (metres from its foot, up negative) — lime laid thick
// over rough stone, a little uneven, gone grey where hands and backs rub it; an ochre band to 0.9 m with a darker line
// along its top; scuffed at the foot. The caller cuts its openings itself (destination-out).
function whitewash(g, e, x0, x1, h) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -h - 0.02, w, h + 0.04);
  g.clip();
  g.fillStyle = '#ebe6da';
  g.fillRect(x0, -h - 0.02, w, h + 0.04);
  // the lime laid unevenly over the stones: broad paler and greyer dabs
  for (let i = 0; i < w * 10; i++) {
    g.fillStyle = e.rnd() < 0.5 ? 'rgba(214,206,190,0.35)' : 'rgba(250,247,240,0.45)';
    g.beginPath();
    g.ellipse(x0 + e.rnd() * w, -h + e.rnd() * h, 0.15 + e.rnd() * 0.35, 0.06 + e.rnd() * 0.12, e.rnd() - 0.5, 0, Math.PI * 2);
    g.fill();
  }
  // the ochre band and its line
  g.fillStyle = '#c4ac82';
  g.fillRect(x0, -0.9, w, 0.92);
  for (let i = 0; i < w * 5; i++) {
    g.fillStyle = e.rnd() < 0.5 ? 'rgba(170,148,108,0.35)' : 'rgba(214,196,160,0.35)';
    g.fillRect(x0 + e.rnd() * w, -0.88 + e.rnd() * 0.8, 0.1 + e.rnd() * 0.4, 0.03 + e.rnd() * 0.08);
  }
  g.fillStyle = '#8d7756';
  g.fillRect(x0, -0.92, w, 0.03);
  // scuffs at the foot
  const foot = g.createLinearGradient(0, 0, 0, -0.3);
  foot.addColorStop(0, 'rgba(90,76,58,0.4)');
  foot.addColorStop(1, 'rgba(90,76,58,0)');
  g.fillStyle = foot;
  g.fillRect(x0, -0.3, w, 0.32);
  g.restore();
}
// hole(g, x0, y0, x1, y1): cut an opening out of what was painted (a window's, a door's)
function hole(g, x0, y0, x1, y1) {
  g.save();
  g.globalCompositeOperation = 'destination-out';
  g.fillStyle = '#000';
  g.fillRect(x0, y0, x1 - x0, y1 - y0);
  g.restore();
}
// casement(g, e, w, h): a window's frame over an opening w wide, h high (its sill at y 0): the deep whitewashed reveal,
// two casements of painted wood, three panes each, the panes empty (the glass shows nothing by day)
function casement(g, e, w, h) {
  const x0 = -w / 2;
  const wood = '#6f8d95';
  const dark = '#56717a';
  // the reveal: the wall's thickness seen at the opening's sides and top
  g.fillStyle = '#d9d2c3';
  g.fillRect(x0 - 0.05, -h - 0.05, 0.08, h + 0.05);
  g.fillRect(-x0 - 0.03, -h - 0.05, 0.08, h + 0.05);
  g.fillRect(x0 - 0.05, -h - 0.05, w + 0.1, 0.07);
  // the sill
  g.fillStyle = '#cfc6b3';
  g.fillRect(x0 - 0.08, -0.02, w + 0.16, 0.08);
  // the frame and the two casements
  g.fillStyle = wood;
  g.fillRect(x0, -h, 0.06, h);
  g.fillRect(-x0 - 0.06, -h, 0.06, h);
  g.fillRect(x0, -h, w, 0.06);
  g.fillRect(x0, -0.06, w, 0.06);
  g.fillRect(-0.035, -h, 0.07, h);
  g.fillStyle = dark;
  g.fillRect(-0.004, -h, 0.008, h);
  // the glazing bars: three panes a casement
  for (let k = 1; k < 3; k++) {
    const y = -0.06 - k * (h - 0.12) / 3;
    g.fillStyle = wood;
    g.fillRect(x0, y - 0.015, w, 0.03);
  }
  // the latch
  g.fillStyle = '#2f2d2a';
  g.fillRect(-0.06, -h * 0.5 - 0.02, 0.12, 0.03);
}
return { whitewash, hole, casement };
