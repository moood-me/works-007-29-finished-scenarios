// A night on the gallery: the clear night first — the moon, the white wall of the fog far off, Nora's window across
// the water, one long; the lantern lit in Johnny's hand; then the fog comes up to the rock, the beam a way of light
// through it — and he rises out of the sea, his eyes shining as the beam comes round; the two men look at him.
return [
  {
    name: 'clear night',
    run: async s => {
      s.set('fog', 0);
      s.set('beast', 0);
      s.set('nora', 0);
      s.set('lantern', 0);
      s.set('johnny_with', ['lantern']);
      s.set('johnny_look', 'far_shore#window');
      s.set('johnny_mood', 'thinking');
      s.set('mcdunn_look', 'johnny');
      await s.wait(6);
    },
  },
  {
    name: 'her window',
    run: async s => {
      await s.move('nora', 1, { over: 0.4 });
      await s.wait(3);
      await s.move('nora', 0, { over: 0.4 });
      await s.wait(1.5);
      await s.move('nora', 1, { over: 0.4 });
      await s.wait(3);
    },
  },
  {
    name: 'his lantern',
    run: async s => {
      s.set('johnny_with', ['lantern_lit']);
      await s.move('lantern', 1, { over: 0.5 });
      await s.wait(5);
    },
  },
  {
    name: 'the fog',
    run: async s => {
      s.move('nora', 0, { over: 4 });
      await s.move('fog', 1, { over: 12 });
      await s.wait(3);
    },
  },
  {
    name: 'him',
    run: async s => {
      await s.move('beast', 1, { over: 12, ease: 'inOut' });
      s.set('mcdunn_look', 'beast#head');
      s.set('johnny_look', 'beast#head');
      s.set('johnny_mood', 'afraid');
      await s.wait(15);
    },
  },
];
