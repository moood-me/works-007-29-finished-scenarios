// The sky over the lane and the hill: a snowy winter sky in two hours painted once each — the deep blue of Christmas
// Eve's dusk, paler and a little rose over the hill, and the grey-white snowy day — cross-faded by `day` in its
// animate. Screen heights; the horizon at 0.55.
const X0 = -0.3;
const W = e.aspect + 0.6;
const Y0 = -0.35;
const H = 1.6;
e.layer('dusk', {}, c => {
  const sky = c.createLinearGradient(0, Y0, 0, 0.62);
  sky.addColorStop(0, '#18223e');
  sky.addColorStop(0.45, '#2c3b64');
  sky.addColorStop(0.75, '#56628e');
  sky.addColorStop(0.92, '#8a85a6');
  sky.addColorStop(1, '#a8919e');
  c.fillStyle = sky;
  c.fillRect(X0, Y0, W, H);
});
e.layer('day', {}, c => {
  const sky = c.createLinearGradient(0, Y0, 0, 0.62);
  sky.addColorStop(0, '#aab2bf');
  sky.addColorStop(0.6, '#cfd4da');
  sky.addColorStop(1, '#e4e5e4');
  c.fillStyle = sky;
  c.fillRect(X0, Y0, W, H);
});
