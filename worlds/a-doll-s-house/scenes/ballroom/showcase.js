// The night of the ball, upstairs at the Stenborgs': the room before the dance — Nora in her costume with the
// tambourine up, smiling out; she glances at her husband, and for a moment, when no one looks, the smile goes; Rank,
// by the palm, looks down at his cigar and back at her. Then the candles, for a breath, sink and rise in a draught.
return [
  { name: 'the ball', run: async s => { await s.wait(4); } },
  {
    name: 'her glance',
    run: async s => {
      s.person('nora').look('torvald');
      await s.wait(2.5);
      s.person('nora').look(null);
      await s.wait(1.5);
    },
  },
  {
    name: 'under the smile',
    run: async s => {
      s.person('nora').mood('afraid');
      await s.wait(3);
      s.person('nora').mood('smile');
      await s.wait(1.5);
    },
  },
  {
    name: 'Rank',
    run: async s => {
      s.person('rank').look('rank#tip');
      await s.wait(3);
      s.person('rank').look('nora');
      await s.wait(2);
    },
  },
  {
    name: 'a draught',
    run: async s => {
      await s.move('candles', 0.75, { over: 1.2 });
      await s.move('candles', 1, { over: 2.5 });
      await s.wait(1.5);
    },
  },
];
