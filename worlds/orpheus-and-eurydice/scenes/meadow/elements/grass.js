// Tufts of the meadow's dark grass close before the viewer (copies): long narrow blades curving over, cold green going
// grey-blue, each blade a wind layer bending about its foot.
for (let i = 0; i < 9; i++) {
  const x = (e.anim.hash(i, 1) - 0.5) * 0.35, h = 0.22 + 0.25 * e.anim.hash(i, 2), lean = (e.anim.hash(i, 3) - 0.5) * 0.8;
  e.layer(`b${i}`, { pivot: [x, 0], wind: { strength: 0.3, gust: 0.35 }, box: [-0.5, -0.55, 0.5, 0.05] }, g => {
    g.fillStyle = e.anim.hash(i, 4) > 0.5 ? '#3c5249' : '#2f433d';
    g.beginPath();
    g.moveTo(x - 0.01, 0);
    g.quadraticCurveTo(x + lean * h * 0.4, -h * 0.75, x + lean * h, -h);
    g.quadraticCurveTo(x + lean * h * 0.4 + 0.008, -h * 0.65, x + 0.01, 0);
    g.closePath();
    g.fill();
  });
}
