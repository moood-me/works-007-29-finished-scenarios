// An afternoon on the square (3.3): the translator on the bench with the letter open in her hands, Jack standing by
// her, his eyes on it; at the coach's open door the guide with her flag held up, calling her group, three of them
// waiting to get in. Then she looks up at Jack — the paper is warm —, and he at her; then the guide calls and she looks
// over at the bus, and back to the letter, and so does he. Nobody moves but a look; the lindens stir.
return [
  {
    name: 'the letter',
    run: async s => {
      s.person('translator').look('translator#letter');
      s.person('jack').look('translator#letter');
      s.person('guide').look('translator');
      await s.wait(8);
    },
  },
  {
    name: 'warm',
    run: async s => {
      s.person('translator').mood('surprised');
      s.person('translator').look('jack');
      await s.wait(1.2);
      s.person('jack').look('translator');
      await s.wait(6);
    },
  },
  {
    name: 'the guide calls',
    run: async s => {
      s.person('translator').mood('neutral');
      s.person('translator').look('guide');
      await s.wait(1.5);
      s.person('translator').look('translator#letter');
      s.person('translator').mood('thinking');
      await s.wait(0.8);
      s.person('jack').look('translator#letter');
      await s.wait(6);
    },
  },
];
