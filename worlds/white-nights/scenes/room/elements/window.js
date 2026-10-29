// The window onto the courtyard, in the left wall round its opening (x −0.45…0.45, 0.8…2.0 m up; x runs into the
// room's depth): a plain frame of old grey-white paint, flaked here and there to the grey wood. Its two casement leaves
// are elements of their own (`leaf_near`, `leaf_far`), shut all the game but the finale «Окно»; the point `latch` is
// where they meet — what the game presses to open it
const INK = e.lib.INK, paint = '#d2cbb7';
g.fillStyle = paint;
g.beginPath();
g.rect(-0.55, -2.1, 1.1, 1.32);
g.rect(-0.45, -2.0, 0.9, 1.2);
g.fill('evenodd');
g.strokeStyle = INK;
g.lineWidth = 0.01;
g.stroke();
// (where the paint has flaked off the frame: the grey wood)
g.fillStyle = 'rgba(140,128,112,0.6)';
for (const [x, y, w] of [[-0.52, -1.3, 0.05], [0.47, -1.75, 0.04], [-0.2, -2.07, 0.12], [0.2, -0.85, 0.08]]) g.fillRect(x, y, w, 0.025);
e.at(0, -1.4, 'latch');
