// The window seat's top from above (2.9 m by 0.42 m, y toward the viewer): the green cushion; on it, by the state, her
// paint-box open (`paints`), her study of the almond (`sketch`, clean or with a blot, once `sketch_on`), her drawing of
// her father (`drawing` "sill").
g.fillStyle = '#4c5e44';
g.fillRect(-1.45, -0.21, 2.9, 0.42);
g.strokeStyle = '#3c4c36';
g.lineWidth = 0.01;
g.strokeRect(-1.42, -0.18, 2.84, 0.36);
const st = e.state;
if (st.paints) {
  // the box, its lid up against the glass, the cakes of colour (the reds' pans empty), a brush
  g.fillStyle = '#5a3a22';
  g.fillRect(-0.35, -0.12, 0.32, 0.2);
  g.fillStyle = '#3a2416';
  g.fillRect(-0.35, -0.2, 0.32, 0.08);
  const cakes = ['#b8282a', '#d85a2a', '#e0b030', '#3c8a3c', '#2a5aa8', '#7a3a8a', '#7a4a2a', '#2a2a2a'];
  cakes.forEach((c, i) => {
    g.fillStyle = i < 2 ? '#d8d0c0' : c;
    g.fillRect(-0.33 + (i % 4) * 0.075, -0.1 + Math.floor(i / 4) * 0.085, 0.06, 0.07);
  });
  g.fillStyle = '#6a4a2a';
  g.fillRect(-0.02, -0.05, 0.2, 0.012);
}
if (st.sketch && st.sketch !== 'none' && st.sketch_on !== false) {
  // the sheet: the dry almond in pencil and a wash of green
  g.fillStyle = '#f2ecdc';
  g.fillRect(0.12, -0.15, 0.3, 0.22);
  g.strokeStyle = '#5a4a3a';
  g.lineWidth = 0.006;
  g.beginPath();
  g.moveTo(0.27, 0.05);
  g.lineTo(0.27, -0.04);
  g.lineTo(0.22, -0.1);
  g.moveTo(0.27, -0.04);
  g.lineTo(0.33, -0.11);
  g.stroke();
  g.fillStyle = 'rgba(110,150,90,0.35)';
  g.fillRect(0.14, 0.02, 0.26, 0.04);
  if (st.sketch === 'blot') {
    g.fillStyle = '#2a2a3a';
    g.beginPath();
    g.ellipse(0.31, -0.06, 0.03, 0.022, 0.4, 0, Math.PI * 2);
    g.fill();
  }
}
if (st.drawing === 'sill') {
  g.fillStyle = '#f4efe2';
  g.fillRect(0.75, -0.14, 0.2, 0.26);
  g.strokeStyle = '#3a3430';
  g.lineWidth = 0.005;
  g.beginPath();
  g.ellipse(0.85, -0.03, 0.05, 0.065, 0, 0, Math.PI * 2);
  g.stroke();
}
