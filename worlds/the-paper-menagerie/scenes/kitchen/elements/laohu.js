// Laohu, the paper tiger (modules/paper: the same Laohu in every scene), where laohu_a, laohu_d, laohu_e put him (the
// oilcloth by default), or sitting in someone's hands (`laohu_held`). By `laohu`: none — not here (nor while the
// kitchen is packed); paper — just folded, still paper; alive — awake; torn — the two halves laid together by the old
// lines, the tear down his middle (her tape grown along it by `tape_laid`); taped — whole again, the clear strip across
// his flank. `laohu_ear`, `laohu_seam` — the game's «Ухо» and «Шов». His head is his point; `laohu#back`, `laohu#paws`.
const st = e.state;
if (st.packed || st.laohu === 'none') return;
e.kit.paper.tiger(e, { tape: st.laohu === 'taped', torn: st.laohu === 'torn', ear: st.laohu_ear });
