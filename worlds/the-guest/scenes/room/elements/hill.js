// The hill behind the school from above, draped on the relief (metres; x across, y toward the viewer from distance
// 300; the plane spans distance 10…590): snow over all of it, wind-ridged, grey limestone breaking through in streaks
// along the slope and in stones, a few tufts of dry grass; nearer the school the trodden snow round the back.
g.fillStyle = '#e5e9ef';
g.fillRect(-500, -290, 1000, 580);
// the wind's ridges: long faint bands across the slope
for (let i = 0; i < 160; i++) {
  const x = -500 + e.rnd() * 1000;
  const y = -290 + e.rnd() * 580;
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(190,200,214,0.45)' : 'rgba(250,251,253,0.5)';
  g.beginPath();
  g.ellipse(x, y, 6 + e.rnd() * 18, 0.6 + e.rnd() * 1.6, (e.rnd() - 0.5) * 0.3, 0, Math.PI * 2);
  g.fill();
}
// limestone breaking through in streaks along the slope, and stones
for (let i = 0; i < 70; i++) {
  const x = -480 + e.rnd() * 960;
  const y = -280 + e.rnd() * 540;
  g.fillStyle = e.rnd() < 0.6 ? 'rgba(150,146,138,0.75)' : 'rgba(120,112,100,0.7)';
  g.beginPath();
  g.ellipse(x, y, 2 + e.rnd() * 8, 0.4 + e.rnd() * 1.2, (e.rnd() - 0.5) * 0.4, 0, Math.PI * 2);
  g.fill();
}
for (let i = 0; i < 400; i++) {
  const x = -480 + e.rnd() * 960;
  const y = -240 + e.rnd() * 520;
  g.fillStyle = 'rgba(110,104,96,0.8)';
  g.beginPath();
  g.ellipse(x, y, 0.2 + e.rnd() * 0.7, 0.15 + e.rnd() * 0.4, 0, 0, Math.PI * 2);
  g.fill();
}
// tufts of dry grass
for (let i = 0; i < 300; i++) {
  g.fillStyle = 'rgba(176,150,100,0.7)';
  g.beginPath();
  g.arc(-480 + e.rnd() * 960, -200 + e.rnd() * 480, 0.15 + e.rnd() * 0.3, 0, Math.PI * 2);
  g.fill();
}
