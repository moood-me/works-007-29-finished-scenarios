// An evening in the kitchen: the three of them as they are (Mom folding at the table, her eyes on Jack; Jack leaning
// on the table over Laohu; Dad in from the hall, arms folded, watching her); then Jack looks up at his mother, and she
// at the tiger; then back. Nobody moves but a look; the paper animals breathe and stir.
return [
  {
    name: 'evening',
    run: async s => {
      s.set('lamp', 1);
      s.person('mom').look('jack');
      s.person('jack').look('laohu');
      s.person('dad').look('mom');
      await s.wait(8);
    },
  },
  {
    name: 'he looks up',
    run: async s => {
      s.person('jack').look('mom');
      await s.wait(1.2);
      s.person('mom').look('laohu');
      await s.wait(6);
    },
  },
  {
    name: 'back',
    run: async s => {
      s.person('mom').look('jack');
      await s.wait(0.8);
      s.person('jack').look('laohu');
      await s.wait(6);
    },
  },
];
