// The box starts now and then while `stir` is on: held still, then a quick small shake — the lid lifting and settling
// (Laohu scratching inside, the animals waking).
const k = e.state.box;
if (k === 'shut' || k === 'empty' || k === 'opened') {
  let jolt = 0;
  if (e.state.stir) {
    const t = e.t * 0.6;
    const step = Math.floor(t);
    const u = e.anim.clamp((t - step - 0.78) / 0.22, 0, 1);
    jolt = Math.sin(u * Math.PI * 3) * (1 - u) * (e.anim.hash(step, 21) > 0.35 ? 1 : 0);
  }
  e.layer('box').rotate = 0.03 * jolt;
  if (k === 'shut') {
    const lid = e.layer('lid');
    lid.rotate = 0.05 * jolt;
    lid.y = -0.012 * Math.abs(jolt);
  }
}
