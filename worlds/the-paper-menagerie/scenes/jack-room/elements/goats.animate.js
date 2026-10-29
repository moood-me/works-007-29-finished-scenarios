// The goats walk as paper walks: now and then a short stiff hop, a tilt, settled again; never in step.
if (e.state.zoo) {
  for (let n = 0; n < 2; n++) {
    const t = e.t * 0.45 + n * 3.1;
    const step = Math.floor(t);
    const u = e.anim.clamp((t - step - 0.7) / 0.3, 0, 1);
    const hop = Math.sin(u * Math.PI);
    const l = e.layer(`goat${n}`);
    l.y = -0.03 * hop;
    l.rotate = (n ? 1 : -1) * 0.12 * hop;
  }
}
