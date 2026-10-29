// Laohu moves as paper does (modules/paper: move): he breathes (asleep slower and shallower), his tail ticks, he
// leans with «Шов» (`laohu_seam`), turns at once (`laohu_dir`), shakes himself (`laohu_shake`), purrs as he is stroked
// (`laohu_purr`), and unfolds — the tail's fold first, then the others one by one (`laohu_unfold`).
const st = e.state;
e.kit.paper.move(e, {
  show: st.laohu_out,
  breath: st.laohu_asleep ? 0.45 : 1,
  purr: st.laohu_purr,
  seam: st.laohu_seam,
  dir: st.laohu_dir,
  held: null,
  shake: st.laohu_shake,
  unfold: st.laohu_unfold,
});
