// The attic on the day the house is emptied: the dusty light from the little window lies across the floor and on the
// shoe box; the box starts, the lid lifts and settles; Jack comes up into the open hatch and looks at it; then up at
// the window's light; then the box is gone, taken down.
return [
  {
    name: 'the box',
    run: async s => {
      s.set('box', 'shut');
      s.set('stir', true);
      s.person('jack').here(false);
      await s.wait(6);
    },
  },
  {
    name: 'Jack at the hatch',
    run: async s => {
      s.person('jack').here(true);
      s.person('jack').look('shoebox#box');
      s.person('jack').mood('surprised');
      await s.wait(6);
    },
  },
  {
    name: 'the light',
    run: async s => {
      s.set('stir', false);
      s.person('jack').look('window#pane');
      s.person('jack').mood('sad');
      await s.wait(5);
    },
  },
  {
    name: 'taken down',
    run: async s => {
      s.set('box', 'gone');
      s.person('jack').look('floor#hatch');
      await s.wait(4);
    },
  },
];
