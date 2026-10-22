// A Friday at dawn in October: the rain on the roof, the fire under the pot; the colonel, in his black suit with the
// umbrella, looks at his wife; she, on the edge of the bed, looks at the rooster. Then their eyes meet, and he turns to
// the rooster; and back.
return [
  {
    name: 'dawn',
    run: async s => {
      s.set('fire', 1);
      s.set('rain', 1);
      s.person('colonel').look('wife');
      s.person('wife').look('rooster#head');
      await s.wait(8);
    },
  },
  {
    name: 'the rooster',
    run: async s => {
      s.person('wife').look('colonel');
      await s.wait(1.5);
      s.person('colonel').look('rooster#head');
      await s.wait(6);
    },
  },
  {
    name: 'back',
    run: async s => {
      s.person('colonel').look('wife');
      await s.wait(1);
      s.person('wife').look('rooster#head');
      await s.wait(6);
    },
  },
];
