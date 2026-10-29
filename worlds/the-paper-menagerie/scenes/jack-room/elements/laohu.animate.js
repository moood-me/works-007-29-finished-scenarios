// Laohu breathes — the flanks swell a little, slowly, unevenly (asleep: slower, shallower) — and his tail ticks from
// pose to pose as paper moves. With the game's «Шов» (laohu_seam) he leans over to one side, the crooked seam
// giving under him, and rights himself a little now and then.
const st = e.state;
if (st.laohu_out) {
  const slow = st.laohu_asleep ? 0.55 : 1;
  const breath = Math.sin(e.t * 1.5 * slow + 0.6 * e.anim.noise(e.t * 0.2, 2));
  const tiger = e.layer('tiger');
  tiger.scaleY = 1 + 0.03 * slow * breath;
  tiger.scaleX = 1 + 0.012 * slow * breath;
  tiger.rotate = st.laohu_seam ? -0.12 + 0.04 * e.anim.noise(e.t * 0.3, 7) : 0;
  const t = e.t * 0.5 * slow;
  const step = Math.floor(t);
  const from = e.anim.hash(step, 5) - 0.5;
  const to = e.anim.hash(step + 1, 5) - 0.5;
  const u = e.anim.ease.inOut(e.anim.clamp((t - step - 0.75) / 0.25, 0, 1));
  e.layer('tail').rotate = (from + (to - from) * u) * 0.6 + tiger.rotate;
}
