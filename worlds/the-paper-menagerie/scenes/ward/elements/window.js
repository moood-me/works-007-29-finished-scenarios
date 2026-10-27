// The tall ward window: a white-painted frame, two side-hung casements and a transom over them, the glass clear (the
// maple, the town and the dusk beyond), a thin cotton curtain drawn to the left, the deep sill. (Its face is the
// opening x −0.75…0.75, from its foot at 0.85 m up 1.4 m.)
g.fillStyle = '#f1f1ea';
g.fillRect(-0.79, -1.44, 1.58, 0.07);
g.fillRect(-0.79, -0.07, 1.58, 0.07);
g.fillRect(-0.79, -1.44, 0.07, 1.44);
g.fillRect(0.72, -1.44, 0.07, 1.44);
g.fillRect(-0.025, -1.1, 0.05, 1.1);
g.fillRect(-0.75, -1.12, 1.5, 0.05);
g.fillStyle = '#e4e4dc';
for (const cx of [-0.375, 0.375]) g.fillRect(cx - 0.012, -1.07, 0.024, 1.0);
// the handles
g.fillStyle = '#b8b8b0';
g.fillRect(-0.06, -0.62, 0.02, 0.1);
g.fillRect(0.04, -0.62, 0.02, 0.1);
// the sill
g.fillStyle = '#f4f4ee';
g.fillRect(-0.84, -0.02, 1.68, 0.06);
// the curtain drawn to the left, a thin cotton with a faded leaf print, gathered
g.fillStyle = 'rgba(236,232,214,0.92)';
g.beginPath();
g.moveTo(-0.79, -1.42);
g.lineTo(-0.5, -1.42);
g.bezierCurveTo(-0.46, -1.0, -0.56, -0.5, -0.52, -0.05);
g.lineTo(-0.79, -0.05);
g.closePath();
g.fill();
g.fillStyle = 'rgba(176,186,150,0.5)';
for (let i = 0; i < 26; i++) {
  g.beginPath();
  g.ellipse(-0.76 + e.rnd() * 0.22, -1.38 + e.rnd() * 1.3, 0.012, 0.006, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = 'rgba(190,180,160,0.4)';
for (let x = -0.77; x < -0.52; x += 0.045) g.fillRect(x, -1.4, 0.006, 1.34);
e.at(0.2, -0.7, 'pane');
