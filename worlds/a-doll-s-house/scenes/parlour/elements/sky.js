// The sky over the street, seen only through the window (over the roofs across the street): a snowy winter sky in two
// hours painted once each — the grey-white day and the deep blue evening over a town's faint glow — cross-faded by
// `day` in its animate. Screen heights; the horizon at 0.55.
const X0 = -0.3;
const W = e.aspect + 0.6;
const Y0 = -0.35;
const H = 1.6;
e.layer('evening', {}, c => {
  const sky = c.createLinearGradient(0, Y0, 0, 0.75);
  sky.addColorStop(0, '#16203a');
  sky.addColorStop(0.55, '#2a3a60');
  sky.addColorStop(0.85, '#47577e');
  sky.addColorStop(1, '#6a6680');
  c.fillStyle = sky;
  c.fillRect(X0, Y0, W, H);
});
e.layer('day', {}, c => {
  const sky = c.createLinearGradient(0, Y0, 0, 0.75);
  sky.addColorStop(0, '#aeb6c2');
  sky.addColorStop(0.6, '#d3d7dc');
  sky.addColorStop(1, '#e6e6e4');
  c.fillStyle = sky;
  c.fillRect(X0, Y0, W, H);
});
