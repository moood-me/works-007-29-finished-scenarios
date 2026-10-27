// A horse collar hung on its peg on the post (metres, its foot at the middle): the stuffed leather ring, the hames
// along it with their brass knobs, a strap hanging.
g.fillStyle = '#3e2b1d';
g.beginPath();
g.ellipse(0, -0.42, 0.24, 0.36, 0, 0, Math.PI * 2);
g.ellipse(0, -0.4, 0.13, 0.24, 0, 0, Math.PI * 2);
g.fill('evenodd');
g.strokeStyle = '#6b4a2e';
g.lineWidth = 0.04;
g.beginPath();
g.ellipse(0, -0.42, 0.2, 0.32, 0, 0, Math.PI * 2);
g.stroke();
g.fillStyle = '#b8954a';
for (const x of [-0.2, 0.2]) {
  g.beginPath();
  g.arc(x, -0.74, 0.03, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#2f2118';
g.fillRect(0.05, -0.1, 0.035, 0.15);
g.fillStyle = '#2b2622';
g.fillRect(-0.02, -0.8, 0.04, 0.04);
