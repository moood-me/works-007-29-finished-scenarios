// An evening in the ward, on a good day: the three of them as they are (Mom on the bed's edge, her eyes on the suit bag
// Jack holds up for her; Jack watching her face; Dad by the window with his phrasebook); then she looks up from the bag
// to her son, and Dad up from his book to her; then she turns to the window, Jack's eyes go to the tiger, Dad back to
// his page. Nobody moves but a look; the maple's leaves fall past the window, the town's lights come on.
return [
  {
    name: 'the suit',
    run: async s => {
      s.set('lamp', 1);
      s.person('mom').look('jack#bag');
      s.person('jack').look('mom');
      s.person('dad').look('dad#book');
      await s.wait(8);
    },
  },
  {
    name: 'she looks at him',
    run: async s => {
      s.person('mom').look('jack');
      await s.wait(1.4);
      s.person('dad').look('mom');
      await s.wait(6);
    },
  },
  {
    name: 'the window',
    run: async s => {
      s.person('mom').look('window#pane');
      await s.wait(1.0);
      s.person('jack').look('laohu');
      await s.wait(0.8);
      s.person('dad').look('dad#book');
      await s.wait(6);
    },
  },
];
