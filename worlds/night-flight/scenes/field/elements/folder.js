// (Stage 5) The board's paper close in Robineau's open folder — an insert opened by `folder_open` (4.1, `folder`): the
// grey-green board of the folder, the report under it, on top the board's letter «On suspending the night flights»,
// typed, stamped. Stage heights; the light of the hangar's lamps painted into it.
const W = e.aspect;
const cx = W / 2;
// the open folder: its two boards
g.fillStyle = '#1c2026';
g.fillRect(cx - 1.3, -0.1, 2.6, 1.2);
g.fillStyle = '#5f6a5a';
g.fillRect(cx - 0.72, 0.02, 0.7, 0.96);
g.fillRect(cx + 0.02, 0.02, 0.7, 0.96);
g.fillStyle = 'rgba(0,0,0,0.25)';
g.fillRect(cx - 0.02, 0.02, 0.04, 0.96);
// under it, the edge of the report; on the right board the letter
g.fillStyle = '#e3dccb';
g.fillRect(cx - 0.62, 0.1, 0.56, 0.8);
g.fillStyle = 'rgba(40,36,30,0.35)';
for (let i = 0; i < 12; i++) g.fillRect(cx - 0.57, 0.18 + i * 0.055, 0.42 + 0.04 * Math.sin(i * 2.1), 0.006);
g.fillStyle = '#efe9da';
g.fillRect(cx + 0.06, 0.05, 0.64, 0.9);
// (text set left-aligned only: a centred line is placed by its measured width)
const centred = (t, x, y) => g.fillText(t, x - g.measureText(t).width / 2, y);
g.fillStyle = '#26221e';
g.textAlign = 'left';
g.font = '0.022px serif';
g.fillText(tr('The Board of the Line'), cx + 0.11, 0.12);
g.fillText(tr('To the Director of the Southern Line'), cx + 0.11, 0.155);
g.font = 'bold 0.036px serif';
centred(tr('On suspending'), cx + 0.38, 0.26);
centred(tr('the night flights'), cx + 0.38, 0.305);
g.font = '0.026px serif';
const body = [tr('In view of the losses'), tr('of last winter, the Board'), tr('asks the Director to consider'), tr('whether the night service'), tr('should not be suspended'), tr('until the spring.')];
body.forEach((t, i) => g.fillText(t, cx + 0.11, 0.39 + i * 0.05));
// the stamp, in violet ink, aslant
g.save();
g.translate(cx + 0.5, 0.8);
g.rotate(-0.2);
g.strokeStyle = 'rgba(96,60,140,0.75)';
g.lineWidth = 0.004;
g.strokeRect(-0.11, -0.035, 0.22, 0.07);
g.fillStyle = 'rgba(96,60,140,0.75)';
g.font = 'bold 0.03px sans-serif';
centred(tr('URGENT'), 0, 0.011);
g.restore();
e.at(cx + 0.38, 0.3, 'paper');
