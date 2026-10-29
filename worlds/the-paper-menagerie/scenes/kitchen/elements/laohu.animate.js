// Laohu breathes by `laohu_breath` (0 paper, 1 alive) and moves as paper does (modules/paper: move): his tail ticks,
// he leans with «Шов», turns at once (`laohu_dir`), sits in Jack's or Mom's hands (`laohu_held`), shakes himself
// (`laohu_shake`), and the tape is laid along his tear (`tape_laid`).
const st = e.state;
e.kit.paper.move(e, {
  show: !st.packed && st.laohu !== 'none',
  breath: st.laohu_breath,
  seam: st.laohu_seam && st.laohu !== 'torn',
  dir: st.laohu_dir,
  held: st.laohu_held === 'none' ? null : `${st.laohu_held}#hands`,
  shake: st.laohu_shake,
  torn: st.laohu === 'torn',
  tape: st.tape_laid,
});
