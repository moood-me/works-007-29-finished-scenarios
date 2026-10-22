// Christmas Eve in the parlour: a snowy afternoon going to dusk, the lamp lit, the tree's candles, the stove; Nora
// glances at the hall — at the man standing there by the letter box — and back to her husband.
return [
  {
    name: 'afternoon',
    run: async s => {
      s.set('day', 1);
      s.set('lamp', 0);
      s.set('candles', 0);
      s.set('nora_look', 'torvald');
      await s.wait(4);
    },
  },
  { name: 'dusk', run: async s => { await s.move('day', 0, { over: 8 }); } },
  { name: 'the lamp', run: async s => { await s.move('lamp', 1, { over: 1.5 }); await s.wait(1.5); } },
  { name: 'the tree', run: async s => { await s.move('candles', 1, { over: 3 }); await s.wait(3); } },
  {
    name: 'the hall',
    run: async s => {
      s.person('nora').look('krogstad');
      await s.wait(3);
      s.person('nora').look('torvald');
      await s.wait(4);
    },
  },
];
