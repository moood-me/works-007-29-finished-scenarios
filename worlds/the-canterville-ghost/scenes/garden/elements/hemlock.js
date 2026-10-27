// Hemlock (about 1.4 m): a tall hollow stem, purple-flecked, with a few feathery leaves low down, and at its top the
// great white stars of its flowers — flat umbels of tiny florets on rays — pale in the moon, nodding in the wind.
e.layer('plant', { pivot: [0, 0], wind: { strength: 0.25, gust: 0.3 } }, c => {
  c.lineCap = 'round';
  c.strokeStyle = '#4f5e3c';
  c.lineWidth = 0.02;
  c.beginPath();
  c.moveTo(0, 0);
  c.quadraticCurveTo(0.04, -0.7, 0.02, -1.25);
  c.stroke();
  c.fillStyle = '#5f2e3a';
  for (let y = -0.1; y > -1.1; y -= 0.12) c.fillRect(0.01 + y * -0.01, y, 0.012, 0.03);
  // side stems to the lesser umbels
  const heads = [[0.02, -1.28, 0.2], [-0.22, -1.08, 0.13], [0.24, -1.0, 0.12], [-0.08, -0.86, 0.09]];
  c.strokeStyle = '#56653f';
  c.lineWidth = 0.012;
  for (const [x, y] of heads.slice(1)) {
    c.beginPath();
    c.moveTo(0.02, y + 0.3);
    c.quadraticCurveTo(x * 0.4, y + 0.1, x, y);
    c.stroke();
  }
  // feathery leaves low down
  c.fillStyle = '#48583a';
  for (let k = 0; k < 5; k++) {
    const y = -0.15 - k * 0.12;
    const s = k % 2 ? 1 : -1;
    for (let j = 0; j < 6; j++) {
      c.beginPath();
      c.ellipse(s * (0.06 + j * 0.05), y - j * 0.025, 0.03, 0.012, s * 0.4, 0, Math.PI * 2);
      c.fill();
    }
  }
  // the umbels: rays out from a point, each ending in a little cluster of white florets — a flat star
  for (const [x, y, r] of heads) {
    c.strokeStyle = '#7a8a5a';
    c.lineWidth = 0.004;
    for (let k = 0; k < 12; k++) {
      const a = Math.PI + (k / 11) * Math.PI;
      c.beginPath();
      c.moveTo(x, y + r * 0.35);
      c.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r * 0.25);
      c.stroke();
      c.fillStyle = k % 3 ? '#f2f2ea' : '#e4e6da';
      for (let j = 0; j < 6; j++) {
        c.beginPath();
        c.arc(x + Math.cos(a) * r + (e.rnd() - 0.5) * r * 0.25, y + Math.sin(a) * r * 0.25 + (e.rnd() - 0.6) * r * 0.2, 0.008 + r * 0.04, 0, Math.PI * 2);
        c.fill();
      }
    }
  }
});
