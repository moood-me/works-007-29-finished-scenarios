// What the scene's paintings share: the ends of shoeboxes stacked flat, row on row — the warehouse is made of them.
// boxes(g, e, x0, x1, y0, y1): fills the rectangle (metres, y up negative) with box ends, each about 0.21 × 0.115 m,
// in the faded colours of cardboard and paper (cream, buff, brown, grey-green, a dull blue), a paper label on most,
// the joints between them dark; now and then a gap where a box has been taken out (dark, a box behind it).
const KINDS = ['#cdbf9f', '#b8a07a', '#93806a', '#c9bba6', '#9ea6a2', '#dcd1b9', '#ab9270', '#7f8c88', '#bfae8f', '#a7a9b4'];
function boxes(g, e, x0, x1, y0, y1) {
  g.save();
  g.beginPath();
  g.rect(x0, y0, x1 - x0, y1 - y0);
  g.clip();
  g.fillStyle = '#3a2f2a';
  g.fillRect(x0, y0, x1 - x0, y1 - y0);
  const H = 0.115;
  for (let y = y1 - H; y > y0 - H; y -= H) {
    let x = x0 - e.rnd() * 0.15;
    // a run of the same kind of box: a shelf is filled lot by lot
    let kind = KINDS[Math.floor(e.rnd() * KINDS.length)];
    while (x < x1) {
      const w = 0.19 + e.rnd() * 0.05;
      if (e.rnd() < 0.18) kind = KINDS[Math.floor(e.rnd() * KINDS.length)];
      if (e.rnd() < 0.04) {
        g.fillStyle = '#2a221f';
        g.fillRect(x + 0.006, y + 0.006, w - 0.012, H - 0.012);
        x += w;
        continue;
      }
      const out = (e.rnd() - 0.5) * 0.004;
      g.fillStyle = kind;
      g.fillRect(x + 0.005, y + 0.005 + out, w - 0.01, H - 0.01);
      // the lid's edge: a lighter strip along the top, a shade under it
      g.fillStyle = 'rgba(255,248,230,0.22)';
      g.fillRect(x + 0.005, y + 0.005 + out, w - 0.01, 0.022);
      g.fillStyle = 'rgba(40,28,20,0.22)';
      g.fillRect(x + 0.005, y + 0.027 + out, w - 0.01, 0.006);
      if (e.rnd() < 0.8) {
        g.fillStyle = e.rnd() < 0.85 ? '#f1ead8' : '#e8d9a6';
        g.fillRect(x + w * 0.3, y + 0.05 + out, w * 0.4, 0.04);
        g.fillStyle = 'rgba(60,50,45,0.55)';
        g.fillRect(x + w * 0.34, y + 0.062 + out, w * 0.25, 0.006);
        g.fillRect(x + w * 0.34, y + 0.075 + out, w * 0.16, 0.006);
      }
      x += w;
    }
  }
  g.restore();
}
return { boxes };
