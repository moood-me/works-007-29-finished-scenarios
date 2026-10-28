// Christmas Eve at dusk in the street before the Helmers' house: Nora with her arms full of parcels, smiling out; she
// looks up at her own lit windows (the tree in the parlour's) and back; the porter looks up from the coin in his palm
// to her; the children and Anne-Marie by the lane; then the snowy day of the 26th, when the children go to the hill,
// and the dusk again.
return [
  { name: 'dusk', run: async s => { await s.wait(4); } },
  {
    name: 'her windows',
    run: async s => {
      const nora = s.person('nora');
      nora.look('house#parlour');
      nora.mood('thinking');
      await s.wait(3);
      nora.look([0, 1.0, 1.7]);
      nora.mood('smile');
      await s.wait(2);
    },
  },
  {
    name: 'the coin',
    run: async s => {
      const porter = s.person('porter');
      porter.look('nora');
      porter.mood('surprised');
      await s.wait(1.5);
      porter.mood('laugh');
      await s.wait(2);
      porter.look('porter#hand_r');
      porter.mood('smile');
      await s.wait(1.5);
    },
  },
  {
    name: 'the children',
    run: async s => {
      s.person('bob').look('nora');
      s.person('ivar').look('bob');
      s.person('emmy').look('anne_marie');
      await s.wait(3);
      s.person('bob').look('ivar');
      s.person('ivar').look('nora');
      s.person('emmy').look('nora');
      await s.wait(2);
    },
  },
  { name: 'a snowy day', run: async s => { await s.move('day', 1, { over: 6 }); await s.wait(3); } },
  { name: 'dusk again', run: async s => { await s.move('day', 0, { over: 6 }); await s.wait(2); } },
];
