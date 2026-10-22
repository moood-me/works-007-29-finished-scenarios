// A Friday at dawn in October: the rain on the roof, the fire under the pot; the colonel, in his black suit with the
// umbrella, and his wife on the edge of the bed both look at the rooster. Then she looks up at him, and he past us, at
// nothing; and back to the rooster.
return [
  {
    name: 'dawn',
    run: async s => {
      s.set('fire', 1);
      s.set('rain', 1);
      s.person('colonel').look('rooster#head');
      s.person('wife').look('rooster#head');
      await s.wait(8);
    },
  },
  {
    name: 'her look',
    run: async s => {
      s.person('wife').look('colonel');
      await s.wait(1.5);
      s.person('colonel').look([0.7, 0, 1.55]);
      await s.wait(6);
    },
  },
  {
    name: 'back',
    run: async s => {
      s.person('colonel').look('rooster#head');
      await s.wait(1);
      s.person('wife').look('rooster#head');
      await s.wait(6);
    },
  },
];
