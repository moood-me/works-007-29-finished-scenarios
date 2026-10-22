// Christmas Eve in the parlour: a snowy afternoon going to dusk, the lamp lit, the tree's candles; Nora glances at
// her husband and back out, smiling — Krogstad in the hall by the letter box looking at her all the while.
return [
  {
    name: 'afternoon',
    run: async s => {
      s.set('day', 1);
      s.set('lamp', 0);
      s.set('candles', 0);
      s.set('nora_look', null);
      await s.wait(4);
    },
  },
  { name: 'dusk', run: async s => { await s.move('day', 0, { over: 8 }); } },
  { name: 'the lamp', run: async s => { await s.move('lamp', 1, { over: 1.5 }); await s.wait(1.5); } },
  { name: 'the tree', run: async s => { await s.move('candles', 1, { over: 3 }); await s.wait(3); } },
  {
    name: 'her glance',
    run: async s => {
      s.person('nora').look('torvald');
      await s.wait(2.5);
      s.person('nora').look(null);
      await s.wait(4);
    },
  },
];
