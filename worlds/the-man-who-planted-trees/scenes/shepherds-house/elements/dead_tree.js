// A dead tree far out on the plateau: a bare grey trunk and a few broken limbs — the only tree in sight
g.strokeStyle = "#5e5348";
g.lineCap = "round";
const limb = (x0, y0, x1, y1, w) => {
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(x0, y0);
  g.quadraticCurveTo((x0 + x1) / 2 + 0.3, (y0 + y1) / 2, x1, y1);
  g.stroke();
};
limb(0, 0, 0.3, -4.2, 0.42);
limb(0.3, -4.2, -0.2, -6.6, 0.22);
limb(0.2, -3.2, 2.4, -5.0, 0.16);
limb(2.4, -5.0, 3.1, -5.2, 0.08);
limb(0.1, -2.4, -2.2, -3.9, 0.15);
limb(-1.5, -3.5, -1.9, -4.8, 0.08);
limb(-0.1, -5.6, 1.2, -6.9, 0.09);
