// Her letter, close (an insert, opened by `letter_close`): the sheet Laohu unfolded into, lying on Jack's knees — the
// back of the wrapping, her columns of ink, the old yellow tape across, the overlapped tear and its clear strip, the
// tiger's creases, her 爱 at the bottom (modules/paper: letter). The sheet is a layer: it trembles along its folds by
// `tremble` (the animate).
const A = e.aspect;
g.fillStyle = '#7a5e48';
g.fillRect((A - 7 / 3) / 2 - 0.2, -0.05, 7 / 3 + 0.4, 1.1);
g.fillStyle = 'rgba(60,44,32,0.35)';
for (let i = 0; i < 9; i++) g.fillRect((A - 7 / 3) / 2 - 0.2, i * 0.13, 7 / 3 + 0.4, 0.006);
e.layer('sheet', { pivot: [A / 2, 0.5] }, l => e.kit.paper.letter(l, A / 2, 0.5, 0.42, { tear: 'taped' }));
e.at(A / 2, 0.5);
