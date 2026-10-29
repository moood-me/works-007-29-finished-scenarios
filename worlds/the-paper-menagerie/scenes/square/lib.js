// What the square's two sides share: a row of narrow old houses facing the square over x0…x1 (metres along the row,
// y up negative) — pastel stucco, three storeys under red-brown and grey roofs, white window surrounds, at the ground
// a shop in each with a striped awning. `rnd` is the painting's own seeded random.
function row(g, x0, x1, rnd) {
  const walls = ['#e9cfc0', '#dfe2c9', '#e8dcb2', '#cfdbe0', '#ecd6d2', '#dcd2e4'],
    roofs = ['#a5644f', '#8d8b92', '#b07258'],
    awnings = [
      ['#c9473c', '#f3ece0'],
      ['#3f7b6e', '#f3ece0'],
      ['#3e5d8f', '#f3ece0'],
      ['#c99a3a', '#f3ece0'],
    ];
  g.save();
  g.beginPath();
  g.rect(x0, -13, x1 - x0, 13.05);
  g.clip();
  let x = x0,
    i = 0;
  while (x < x1) {
    const w = 4.2 + rnd() * 1.6,
      h = 8.2 + rnd() * 2.2;
    g.fillStyle = walls[i % walls.length];
    g.fillRect(x, -h, w, h);
    g.fillStyle = roofs[i % roofs.length];
    g.beginPath();
    g.moveTo(x - 0.15, -h);
    g.lineTo(x + w / 2, -h - 1.6 - rnd() * 0.8);
    g.lineTo(x + w + 0.15, -h);
    g.closePath();
    g.fill();
    // the upper windows
    for (let fl = 0; fl < 2; fl++) {
      const y = -4.2 - fl * 2.6;
      for (let k = 0; k < 2; k++) {
        const cx = x + w * (0.3 + k * 0.4);
        g.fillStyle = '#f6f1e6';
        g.fillRect(cx - 0.55, y - 1.7, 1.1, 1.8);
        g.fillStyle = '#60687a';
        g.fillRect(cx - 0.45, y - 1.6, 0.9, 1.6);
        g.fillStyle = '#f6f1e6';
        g.fillRect(cx - 0.03, y - 1.6, 0.06, 1.6);
      }
    }
    // the shop: its window, door and striped awning
    g.fillStyle = '#5c6474';
    g.fillRect(x + 0.4, -2.6, w - 1.6, 2.2);
    g.fillStyle = '#6e4e3a';
    g.fillRect(x + w - 1.05, -2.5, 0.75, 2.5);
    const [a, b] = awnings[i % awnings.length];
    for (let s = 0; s < 8; s++) {
      g.fillStyle = s % 2 ? b : a;
      g.beginPath();
      g.moveTo(x + 0.2 + (s * (w - 0.4)) / 8, -3.2);
      g.lineTo(x + 0.2 + ((s + 1) * (w - 0.4)) / 8, -3.2);
      g.lineTo(x + 0.1 + ((s + 1) * (w - 0.2)) / 8, -2.75);
      g.lineTo(x + 0.1 + (s * (w - 0.2)) / 8, -2.75);
      g.closePath();
      g.fill();
    }
    x += w;
    i++;
  }
  g.restore();
}
return { row };
