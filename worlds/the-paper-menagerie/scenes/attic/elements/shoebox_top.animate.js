// Shakes with the box (the same starts, worked out the same way).
if (e.state.box === 'shut') {
  let jolt = 0;
  if (e.state.stir) {
    const t = e.t * 0.6;
    const step = Math.floor(t);
    const u = e.anim.clamp((t - step - 0.78) / 0.22, 0, 1);
    jolt = Math.sin(u * Math.PI * 3) * (1 - u) * (e.anim.hash(step, 21) > 0.35 ? 1 : 0);
  }
  e.layer('top').rotate = 0.03 * jolt;
}
