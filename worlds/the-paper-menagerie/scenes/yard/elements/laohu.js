// Laohu, the paper tiger (modules/paper: the same Laohu in every scene), where laohu_a, laohu_d, laohu_e put him (the
// porch, the steps, the grass, the gate), or in someone's hands (`laohu_held`). By `laohu`: none — not here; alive — as
// in chapter 1 (whole, untaped); taped — the clear strip across his flank (after 1.5, and the tiger folded back from
// her letter at the end). `laohu_ear`, `laohu_seam` — the game's «Ухо» and «Шов». His head is his point;
// `laohu#back`, `laohu#paws`.
const st = e.state;
if (st.laohu === 'none') return;
e.kit.paper.tiger(e, { tape: st.laohu === 'taped', ear: st.laohu_ear });
