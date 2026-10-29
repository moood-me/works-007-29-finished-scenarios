// The back of the letter, close (an insert, opened by `letter_close`, seen through its iris on the left of the frame
// while the translator stays in view on the right): the sheet in her hands in the afternoon light over the camel of her
// coat — the back of the wrapping, her columns of ink, the old yellow tape across, the overlapped tear and its clear
// strip as M7 leaves it (`tear`), the tiger's creases, her 爱 at the bottom (modules/paper: letter).
const A = e.aspect, cx = 0.62;
g.fillStyle = '#b9935f';
g.fillRect((A - 7 / 3) / 2 - 0.2, -0.05, 7 / 3 + 0.4, 1.1);
g.fillStyle = 'rgba(120,88,48,0.3)';
for (let i = 0; i < 7; i++) g.fillRect((A - 7 / 3) / 2 - 0.2 + i * 0.45, -0.05, 0.02, 1.1);
e.kit.paper.letter(g, cx, 0.5, 0.36, { tear: e.state.tear ?? 'taped' });
e.at(cx, 0.5);
