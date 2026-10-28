// The ferry's lantern: a wooden post at the landing's right edge, an iron arm out over the water, and the lantern
// hanging from it — a tin frame, four panes, a flame (its light, `flame`, lights the two of them and lies on the water).
// It hangs in a layer swung a little by the night air (animate).
g.fillStyle = "#5b4d3f";
g.fillRect(-0.06, -2.25, 0.12, 2.27);
g.fillStyle = "#6c5d4c";
g.fillRect(-0.06, -2.25, 0.04, 2.27);
g.strokeStyle = "#3a3632";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(0, -2.18);
g.lineTo(0.5, -2.18);
g.moveTo(0, -1.92);
g.lineTo(0.3, -2.18);
g.stroke();
e.layer("lamp", { pivot: [0.45, -2.18] }, (c) => {
  c.strokeStyle = "#3a3632";
  c.lineWidth = 0.012;
  c.beginPath();
  c.moveTo(0.45, -2.18);
  c.lineTo(0.45, -2.08);
  c.stroke();
  // the roof and the base
  c.fillStyle = "#4a4640";
  c.beginPath();
  c.moveTo(0.36, -2.0);
  c.lineTo(0.45, -2.08);
  c.lineTo(0.54, -2.0);
  c.fill();
  c.fillRect(0.37, -1.78, 0.16, 0.03);
  // the panes, lit from within
  c.fillStyle = "#ffe2a8";
  c.fillRect(0.38, -2.0, 0.14, 0.22);
  c.fillStyle = "#fff4d8";
  c.beginPath();
  c.ellipse(0.45, -1.87, 0.022, 0.04, 0, 0, Math.PI * 2);
  c.fill();
  c.strokeStyle = "#4a4640";
  c.lineWidth = 0.012;
  c.strokeRect(0.38, -2.0, 0.14, 0.22);
  c.beginPath();
  c.moveTo(0.45, -2.0);
  c.lineTo(0.45, -1.78);
  c.stroke();
  e.light(0.45, -1.88, 0.16, "#ffc46e", 1.2, "flame");
});
e.at(0.45, -1.9, "lamp");
