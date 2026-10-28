// Each jackdaw wheels in its own slow loop round where it was painted, rising and falling, its wings beating in short
// bursts and gliding between.
const birds = e.lib.JACKDAWS;
for (let k = 0; k < birds.length; k++) {
  const [, , r, w, p] = birds[k];
  const a = e.t * w + p;
  const b = e.layer(`b${k}`);
  b.x = Math.cos(a) * r;
  b.y = Math.sin(a) * r * 0.35 + e.anim.noise(e.t * 0.3, k) * 0.8;
  const beat = e.anim.noise(e.t * 0.5, k + 20) > 0 ? Math.sin(e.t * 14 + p * 3) : 0.25;
  b.scaleY = 0.35 + 0.65 * Math.abs(beat);
}
