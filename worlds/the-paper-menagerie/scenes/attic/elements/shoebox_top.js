// The shoe box's lid from above: blue, its white band, a soft grey fur of dust (a finger has not touched it in years).
if (e.state.box === 'shut') {
  e.layer('top', { pivot: [0, 0] }, l => {
    l.fillStyle = '#3f5a86';
    l.fillRect(-0.178, -0.105, 0.356, 0.21);
    l.fillStyle = '#f2efe6';
    l.fillRect(-0.06, -0.105, 0.02, 0.21);
    e.lib.dust(l, -0.2, -0.12, 0.4, 0.24, 0.45);
  });
}
