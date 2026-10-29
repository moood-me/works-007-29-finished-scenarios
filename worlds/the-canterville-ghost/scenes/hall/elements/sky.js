// The sky outside, seen through the front door's fanlight and the window: by night (the painting) deep blue going
// black overhead, paler low down, a scatter of small stars; by day (the layer `day`, brought in by the key `day` in
// sky.animate.js) a fresh blue paling to a warm haze over the park.
const X0 = -0.3;
const W = e.aspect + 0.6;
const night = g.createLinearGradient(0, -0.35, 0, 1.25);
night.addColorStop(0, '#05080f');
night.addColorStop(0.3, '#0e1729');
night.addColorStop(0.5, '#25335a');
night.addColorStop(0.62, '#3a4c74');
night.addColorStop(1, '#2c3a5a');
g.fillStyle = night;
g.fillRect(X0, -0.35, W, 1.6);
for (let i = 0; i < 220; i++) {
  const x = X0 + e.rnd() * W;
  const y = -0.35 + e.rnd() * 0.85;
  g.fillStyle = `rgba(226,234,255,${(0.3 + e.rnd() * 0.6).toFixed(2)})`;
  g.beginPath();
  g.arc(x, y, 0.0012 + e.rnd() * 0.002, 0, Math.PI * 2);
  g.fill();
}
e.layer('day', {}, c => {
  const day = c.createLinearGradient(0, -0.35, 0, 1.25);
  day.addColorStop(0, '#5f8fc2');
  day.addColorStop(0.3, '#86aed6');
  day.addColorStop(0.5, '#c4d6e4');
  day.addColorStop(0.6, '#ece6d4');
  day.addColorStop(1, '#ddd6c2');
  c.fillStyle = day;
  c.fillRect(X0, -0.35, W, 1.6);
});
