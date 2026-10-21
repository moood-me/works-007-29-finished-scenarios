// The cobweb in a corner under the ceiling — "I'll take it down, sir", for eight years: a card across the corner, the
// web hung from the corner (x 0, y −0.85) — threads fanning down from it to a sagging edge, rings across them, a grey
// dusty hammock in its middle, one loose thread hanging — a layer that stirs in the draught from the door
const R = 0.4, H = 0.85;
e.layer('web', { pivot: [0, -H], wind: { strength: 0.12, gust: 0.6 } }, w => {
  const ends = [];
  for (let k = 0; k <= 7; k++) {
    const u = k / 7, x = -R + 2 * R * u;
    ends.push([x, -H + 0.12 + 0.5 * Math.sin(Math.PI * u) * (0.8 + 0.3 * e.anim.hash(k, 71))]);
  }
  w.fillStyle = 'rgba(214,212,204,0.22)';
  w.beginPath();
  w.moveTo(0, -H);
  for (const [x, y] of ends) w.lineTo(x * 0.55, -H + (y + H) * 0.55);
  w.closePath();
  w.fill();
  w.beginPath();
  for (const [x, y] of ends) {
    w.moveTo(0, -H);
    w.lineTo(x, y);
  }
  for (const f of [0.25, 0.42, 0.6, 0.78, 0.95]) {
    ends.forEach(([x, y], k) => {
      const px = x * f, py = -H + (y + H) * f;
      if (k === 0) w.moveTo(px, py);
      else {
        const [qx, qy] = ends[k - 1];
        w.quadraticCurveTo(((qx + x) / 2) * f * 0.92, -H + (((qy + y) / 2 + H) * f) * 1.04, px, py);
      }
    });
  }
  w.moveTo(0.1, -H + 0.38);
  w.quadraticCurveTo(0.13, -H + 0.6, 0.12, -H + 0.78);
  w.strokeStyle = 'rgba(236,234,226,0.8)';
  w.lineWidth = 0.006;
  w.stroke();
});
