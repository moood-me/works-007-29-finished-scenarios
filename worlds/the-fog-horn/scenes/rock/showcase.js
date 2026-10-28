// The evening on the rock: a pause in the pearl-grey light, the night coming (the lamp's beam over the water growing),
// Nora's window on the far shore — one long — and the lantern in Johnny's hand lit.
return [
  {
    name: 'evening',
    run: async s => {
      s.set('night', 0);
      s.set('nora', 0);
      s.set('lantern', 0);
      s.set('johnny_with', ['lantern']);
      await s.wait(6);
    },
  },
  { name: 'night', run: async s => { await s.move('night', 1, { over: 12 }); } },
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
      await s.wait(10);
    },
  },
];
