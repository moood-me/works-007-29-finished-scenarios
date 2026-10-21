// The sea from the shingle to the horizon, under its mirror: green-grey near, going to the evening's rose far off;
// thin streaks of swell, short and dense far away, long and sparse near (the plane's centre is 1500 m ahead: its far
// edge y −1500, the shore y 1500)
const grd = g.createLinearGradient(0, 1500, 0, -1500);
grd.addColorStop(0, '#6f8584');
grd.addColorStop(0.004, '#7a8c8a');
grd.addColorStop(0.02, '#93999b');
grd.addColorStop(0.15, '#b7a9ac');
grd.addColorStop(1, '#d6bcae');
g.fillStyle = grd;
g.fillRect(-3000, -1500, 6000, 3000);
const r = e.lib.rnd(71);
for (let i = 0; i < 240; i++) {
  const d = 8 + Math.pow(r(), 2.2) * 900, y = 1500 - d, len = 1.5 + d * 0.25 * (0.5 + r()), a = (r() - 0.5) * (40 + d * 1.6);
  g.strokeStyle = r() < 0.5 ? 'rgba(220,214,206,0.35)' : 'rgba(90,108,110,0.3)';
  g.lineWidth = 0.04 + d * 0.004;
  g.beginPath();
  g.moveTo(a - len / 2, y);
  g.lineTo(a + len / 2, y);
  g.stroke();
}
