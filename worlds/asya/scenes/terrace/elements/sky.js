// The evening sky over the valley, the sun low behind the viewer: clear blue above, going warm and pale toward the
// hills, a rosy band low over them; fair-weather clouds lit from the front. Toward the frame's sides it is paper and
// graphite (the `paper` layer, over the clouds, which drift).
const L = e.lib;
const A = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
sky.addColorStop(0, "#5d8bb6");
sky.addColorStop(0.24, "#7fa5c8");
sky.addColorStop(0.36, "#a9c2d6");
sky.addColorStop(0.42, "#d3d8d6");
sky.addColorStop(0.455, "#ecdcc8");
sky.addColorStop(0.47, "#f3d8bc");
sky.addColorStop(0.6, "#e8d4b6");
sky.addColorStop(1, "#dccab0");
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
// the rosy band over the hills (the earth's shadow's edge, opposite the sun)
const belt = g.createLinearGradient(0, 0.26, 0, 0.4);
belt.addColorStop(0, "rgba(236, 196, 190, 0)");
belt.addColorStop(0.55, "rgba(236, 196, 190, 0.45)");
belt.addColorStop(1, "rgba(236, 196, 190, 0)");
g.fillStyle = belt;
g.fillRect(-0.3, 0.26, A + 0.6, 0.14);

// the clouds: soft heaps low over the hills and a few thin streaks higher, lit from the front (cream), their undersides
// a cool grey; they drift slowly to the right
const heaps = [
  [0.18, 0.31, 0.16], [0.62, 0.27, 0.12], [1.02, 0.33, 0.09], [1.38, 0.24, 0.17], [1.84, 0.3, 0.11],
];
e.layer("clouds", { drift: [0.0016, 0], box: [-0.3, 0.02, A + 0.3, 0.38] }, (c) => {
  c.filter = "blur(0.004px)";
  for (let h = 0; h < heaps.length; h++) {
    const [cx, cy, w] = heaps[h];
    for (let i = 0; i < 14; i++) {
      const u = (i / 13 - 0.5) * 2;
      const x = cx + u * w * 0.9;
      const r = w * (0.16 + 0.22 * (1 - u * u)) * (0.75 + 0.5 * L.rnd(i + h * 20, 2));
      const y = cy - r * 0.55 - 0.02 * L.rnd(i + h * 20, 4);
      c.fillStyle = "#c7cbd4";
      c.beginPath();
      c.ellipse(x, y + r * 0.22, r, r * 0.62, 0, 0, Math.PI * 2);
      c.fill();
      c.fillStyle = "#fbf3e6";
      c.beginPath();
      c.ellipse(x - r * 0.05, y, r * 0.92, r * 0.58, 0, 0, Math.PI * 2);
      c.fill();
    }
    c.fillStyle = "#c9ccd2";
    c.fillRect(cx - w, cy - 0.004, w * 2, 0.008);
  }
  for (let i = 0; i < 6; i++) {
    const x = -0.2 + ((A + 0.4) * i) / 6 + 0.1 * L.rnd(i, 9);
    const y = 0.06 + 0.12 * L.rnd(i, 11);
    c.fillStyle = "rgba(250, 243, 232, 0.55)";
    c.beginPath();
    c.ellipse(x, y, 0.16 + 0.1 * L.rnd(i, 13), 0.006, -0.02, 0, Math.PI * 2);
    c.fill();
  }
});

// the paper at the sides: the sky's colour goes over to the paper toward the frame's edges, and graphite hatching on it
e.layer("paper", {}, (p) => {
  const mid = A / 2;
  for (const side of [-1, 1]) {
    const x0 = mid + side * 0.5;
    const x1 = mid + side * (A / 2 + 0.3);
    const grd = p.createLinearGradient(x0, 0, x1, 0);
    for (let i = 0; i <= 12; i++) {
      const x = x0 + ((x1 - x0) * i) / 12;
      grd.addColorStop(i / 12, L.paper(L.edge(x - mid)));
    }
    p.fillStyle = grd;
    p.fillRect(Math.min(x0, x1), -0.35, Math.abs(x1 - x0), 1.6);
  }
  L.hatch(p, [-0.3, -0.35, A + 0.3, 0.55], -A / 2, 1);
  // the hills' pencilled line carried on over the paper
  p.strokeStyle = L.graphite(0.5);
  p.lineWidth = 0.0012;
  for (const side of [-1, 1]) {
    p.beginPath();
    for (let i = 0; i <= 30; i++) {
      const sx = side * (0.6 + (0.9 * i) / 30);
      const y = 0.345 + 0.02 * e.anim.noise(sx * 7, 3) - 0.025 * Math.max(0, side) * (i / 30);
      if (i === 0) p.moveTo(A / 2 + sx, y);
      else p.lineTo(A / 2 + sx, y);
    }
    p.stroke();
  }
});
