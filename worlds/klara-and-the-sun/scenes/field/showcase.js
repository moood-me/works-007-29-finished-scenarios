// Sunset at the gate into the field: Rick at the gate with his bird, turning it in his hands; Klara come out to him.
// He looks up at her; she looks away across the field to the barn as the Sun goes down toward it; he looks at the
// barn too, then back to his bird, and she back to him.
return [
  {
    name: 'at the gate',
    run: async s => {
      s.set('sun_low', 0);
      s.person('rick').look('rick#bird');
      s.person('rick').mood('neutral');
      s.person('klara').look('rick');
      s.person('klara').mood('neutral');
      await s.wait(7);
    },
  },
  {
    name: 'he looks up',
    run: async s => {
      s.person('rick').look('klara');
      s.person('rick').mood('thinking');
      await s.wait(5);
    },
  },
  {
    name: 'the barn',
    run: async s => {
      s.person('klara').look('barn#gates');
      const down = s.move('sun_low', 1, { over: 14 });
      await s.wait(2.5);
      s.person('rick').look('barn#gates');
      await down;
    },
  },
  {
    name: 'the bird',
    run: async s => {
      s.person('rick').look('rick#bird');
      s.person('rick').mood('neutral');
      await s.wait(2);
      s.person('klara').look('rick');
      await s.wait(5);
    },
  },
];
