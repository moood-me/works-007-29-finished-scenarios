// A Friday at dawn in October: the rain on the roof, the fire under the pot; the colonel, in his black suit with the
// umbrella, looks past us at nothing; his wife on the edge of the bed looks at the rooster. Then he looks down at the
// rooster too, and she up at him; and back.
return [
  {
    name: 'dawn',
    run: async s => {
      s.set('fire', 1);
      s.set('rain', 1);
      s.person('colonel').look([0.7, 0, 1.55]);
      s.person('wife').look('rooster#head');
      await s.wait(8);
    },
  },
  {
    name: 'the rooster',
    run: async s => {
      s.person('colonel').look('rooster#head');
      await s.wait(1.5);
      s.person('wife').look('colonel');
      await s.wait(6);
    },
  },
  {
    name: 'back',
    run: async s => {
      s.person('colonel').look([0.7, 0, 1.55]);
      await s.wait(1);
      s.person('wife').look('rooster#head');
      await s.wait(6);
    },
  },
];
