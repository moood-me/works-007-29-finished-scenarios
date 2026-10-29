// An afternoon on the square (3.3): the translator on the bench with the letter open in her hands, looking up at Jack
// — the paper is warm —, Jack standing by her, his eyes on it; at the coach's open door the guide with her flag held
// up, calling her group, three of them waiting to get in. Then she reads, and he with her; then the guide calls and
// she looks over at the bus, and back up at Jack. Nobody moves but a look; the lindens stir.
return [
  {
    name: 'warm',
    run: async s => {
      s.person('translator').mood('surprised');
      s.person('translator').look('jack');
      s.person('jack').look('translator#letter');
      s.person('guide').look('translator');
      await s.wait(2);
      s.person('jack').look('translator');
      await s.wait(5);
    },
  },
  {
    name: 'she reads',
    run: async s => {
      s.person('translator').mood('thinking');
      s.person('translator').look('translator#letter');
      await s.wait(0.8);
      s.person('jack').look('translator#letter');
      await s.wait(5);
    },
  },
  {
    name: 'the guide calls',
    run: async s => {
      s.person('translator').mood('neutral');
      s.person('translator').look('guide');
      await s.wait(2);
      s.person('translator').look('jack');
      await s.wait(0.8);
      s.person('jack').look('translator');
      await s.wait(5);
    },
  },
];
