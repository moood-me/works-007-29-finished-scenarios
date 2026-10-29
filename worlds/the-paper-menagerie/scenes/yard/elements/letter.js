// Her letter, close (an insert, opened by `letter_close`): the sheet on Jack's knees in the dusk — the back of the
// wrapping, her columns of ink, the old yellow tape across, the tear as the square left it (`tear`), the tiger's
// creases, her 爱 at the bottom and his under it, as he drew it (`hanzi`, `hanzi_crooked`) (modules/paper: letter). The
// sheet is a layer: it trembles along its folds by `tremble` (the animate).
const A = e.aspect, st = e.state;
g.fillStyle = '#6e6a7c';
g.fillRect((A - 7 / 3) / 2 - 0.2, -0.05, 7 / 3 + 0.4, 1.1);
g.fillStyle = 'rgba(40,36,52,0.35)';
for (let i = 0; i < 6; i++) g.fillRect((A - 7 / 3) / 2 - 0.2, i * 0.2 + 0.1, 7 / 3 + 0.4, 0.01);
e.layer('sheet', { pivot: [A / 2, 0.5] }, l =>
  e.kit.paper.letter(l, A / 2, 0.5, 0.42, { tear: st.tear ?? 'taped', hanzi: st.hanzi ?? 0, crooked: st.hanzi_crooked }),
);
e.at(A / 2 - 0.26, 0.84, 'sign');
e.at(A / 2, 0.5);
