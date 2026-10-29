// The shoe box the animals were put away in, its front (0.34 m wide, 0.13 high; standing where box_a, box_d, box_e put
// it — the floor, the stool under the hatch): white card going cream, a blue lid with a white band. By the key `box`:
// `shut` — the lid on; `empty` — the lid off, leaning against its side, nothing in it yet; `opened` — the lid off and
// the box dusty, years in the attic, and round it the animals that have walked out of it, dusty too: the two goats,
// the deer, the buffalo; `none` — not here. Its box and lid are layers: `stir` makes them start now and then (Laohu
// scratching inside, the animals waking).
const k = e.state.box;
if (k === 'shut' || k === 'empty' || k === 'opened') {
  const dusty = k === 'opened';
  e.layer('box', { pivot: [0, 0] }, l => {
    l.fillStyle = '#ece6d6';
    l.fillRect(-0.17, -0.13, 0.34, 0.13);
    l.fillStyle = 'rgba(160,150,130,0.35)';
    l.fillRect(-0.17, -0.02, 0.34, 0.02);
    l.fillStyle = '#5b78a8';
    l.fillRect(-0.13, -0.08, 0.1, 0.02);
    if (k !== 'shut') {
      // the lid leaning against the box's right side
      l.save();
      l.translate(0.18, 0);
      l.rotate(0.35);
      l.fillStyle = '#3f5a86';
      l.fillRect(0, -0.2, 0.035, 0.2);
      l.fillStyle = '#f2efe6';
      l.fillRect(0, -0.12, 0.035, 0.02);
      l.restore();
    }
    if (dusty) e.lib.dust(l, -0.2, -0.3, 0.5, 0.31);
  });
  if (k === 'shut') {
    e.layer('lid', { pivot: [0, -0.13] }, l => {
      l.fillStyle = '#3f5a86';
      l.fillRect(-0.178, -0.135, 0.356, 0.035);
      l.fillStyle = '#f2efe6';
      l.fillRect(-0.06, -0.135, 0.02, 0.035);
    });
  }
  if (dusty) {
    // the animals out of the box, dusty: goats to its left, the deer and the buffalo to its right
    e.lib.goat(g, -0.42, 1, '#9cc49a', '#7aa679', '#eef3e6');
    e.lib.goat(g, -0.24, -1, '#f2efe6', '#d9d6ce', '#6f8fbd');
    e.lib.deer(g, 0.3, -1);
    e.lib.buffalo(g, 0.5, -1);
    e.lib.dust(g, -0.6, -0.3, 1.2, 0.31);
    e.at(-0.33, -0.1, 'goats');
    e.at(0.3, -0.13, 'deer');
    e.at(0.5, -0.07, 'buffalo');
  }
  e.at(0, -0.08, 'box');
}
