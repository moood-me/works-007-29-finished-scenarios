// The window of the room under the lamp (the keepers' room): grey glass by day, warm when its lamp is lit at night —
// the two layers cross-faded by its animate.
const pane = (c, color) => {
  c.fillStyle = color;
  c.fillRect(-0.42, -1.0, 0.84, 1.0);
  c.fillStyle = '#8f8c86';
  c.fillRect(-0.03, -1.0, 0.06, 1.0);
  c.fillRect(-0.42, -0.53, 0.84, 0.06);
};
e.layer('dark', {}, c => pane(c, '#59626b'));
e.layer('lit', {}, c => {
  pane(c, '#ffd08a');
  e.light(0, -0.5, 0.6, '#ffc070', 0.7, 'win');
});
