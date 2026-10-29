// Laohu, the paper tiger (modules/paper: the same Laohu in every scene), where laohu_a, laohu_d, laohu_e put him (the
// quilt, the pillow, the shelf, the floor, a lap). By his keys: `laohu_out` false — not to be seen (in the box, torn,
// unfolded into her sheet); `laohu_tape` — taped together after Mark tore him; `laohu_fold` — folded again by her in
// hospital (one fold too many at the tail, crooked; the old tape yellowed under fresh); `laohu_ear` («Ухо»); `laohu_asleep`
// — the eyes two shut creases; `laohu_dust` — dusty from the attic. His head is his point; `laohu#back`, `laohu#paws`.
const st = e.state;
if (st.laohu_out) e.kit.paper.tiger(e, { tape: st.laohu_tape, fold: st.laohu_fold, ear: st.laohu_ear, asleep: st.laohu_asleep, dust: st.laohu_dust });
