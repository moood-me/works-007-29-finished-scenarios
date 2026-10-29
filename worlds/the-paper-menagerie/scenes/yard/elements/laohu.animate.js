// Laohu moves as paper does (modules/paper: move): breathing by `laohu_breath`, his tail ticking, leaning with «Шов»,
// turning at once (`laohu_dir`), in Jack's hands or the crook of his arm, or in Mark's hands (`laohu_held`), shaking
// himself (`laohu_shake`), purring (`laohu_purr`), standing up out of the folded sheet (`laohu_rise`).
const st = e.state, H = { hands: 'jack#hands', arm: 'jack#hand_l', mark: 'mark#hands' };
e.kit.paper.move(e, {
  show: st.laohu !== 'none',
  breath: st.laohu_breath,
  purr: st.laohu_purr,
  seam: st.laohu_seam,
  dir: st.laohu_dir,
  held: H[st.laohu_held] ?? null,
  shake: st.laohu_shake,
  rise: st.laohu_rise,
});
