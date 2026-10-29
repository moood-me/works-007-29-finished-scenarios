// Woken, each crane on the curtains lifts and settles now and then on its own — a quick hop up, held, down again, as
// paper moves: never in step.
if (e.state.menagerie !== 'awake') return;
for (let i = 0; i < 4; i++) {
  const t = e.t * 0.3 + i * 2.7;
  const u = t - Math.floor(t);
  const hop = e.anim.hash(Math.floor(t), i + 3) < 0.5 ? 0 : Math.sin(Math.PI * e.anim.clamp((u - 0.7) / 0.3, 0, 1));
  e.layer(`crane${i}`).y = -0.03 * hop;
}
