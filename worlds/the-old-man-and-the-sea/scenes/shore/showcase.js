// The beach in the late afternoon: the old man back with his empty skiff, the boy beside him, the boy's father by the
// lucky boat; the light going to the blue dusk, the lamps coming on in the boy's door and across the bay; and back.
return [
  {
    name: 'afternoon',
    run: async s => {
      s.set('dusk', 0);
      await s.wait(8);
    },
  },
  { name: 'dusk', run: async s => { await s.move('dusk', 1, { over: 14 }); await s.wait(5); } },
  { name: 'afternoon again', run: async s => { await s.move('dusk', 0, { over: 6 }); } },
];
