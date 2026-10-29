// The corridor's end: double doors to the lifts with round windows, a green exit sign over them (a pictogram, no
// words), the two-tone paint either side.
e.lib.wall(g, -1.45, 1.45);
g.fillStyle = '#e8e6dc';
g.fillRect(-0.85, -2.2, 1.7, 2.2);
for (const s of [-1, 1]) {
  g.fillStyle = '#cfd6d2';
  g.fillRect(s < 0 ? -0.8 : 0.02, -2.12, 0.78, 2.12);
  g.fillStyle = '#dfe9f0';
  g.beginPath();
  g.arc(s * 0.4, -1.55, 0.13, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#3f9a5a';
g.fillRect(-0.22, -2.48, 0.44, 0.18);
g.fillStyle = '#f2f6ee';
g.fillRect(-0.14, -2.44, 0.06, 0.1);
g.fillRect(-0.05, -2.42, 0.16, 0.03);
