// The small waves at the water's edge: two thin lines of foam along the shore (the plane's centre is 12 m ahead: a
// place `d` ahead is at y = 12 − d) — a layer that animate runs up the shingle and back
e.layer('foam', {}, g => {
  const L = e.lib;
  const line = (off, w, color) => {
    g.strokeStyle = color;
    g.lineWidth = w;
    g.lineCap = 'round';
    g.beginPath();
    for (let a = -11; a <= 30; a += 0.5) {
      const d = L.shoreAt(a) + off + 0.12 * Math.sin(a * 1.7) + 0.08 * Math.sin(a * 4.1), x = a, y = 12 - d;
      if (a === -11) g.moveTo(x, y);
      else g.lineTo(x, y);
    }
    g.stroke();
  };
  line(0.05, 0.16, 'rgba(244,240,232,0.85)');
  line(0.55, 0.08, 'rgba(236,232,226,0.5)');
  line(1.3, 0.05, 'rgba(230,228,224,0.35)');
});
