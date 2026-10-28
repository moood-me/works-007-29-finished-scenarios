// A morning at the looking glass: Gary holds out a cup of coffee to Louise, she looks at him, the colonel watches her;
// then she turns her look to Flapper behind the glass, and Gary to the sign on it; then back.
return [
  {
    name: 'morning',
    run: async s => {
      s.person('louise').look('gary');
      s.person('gary').look('louise');
      s.person('weber').look('louise');
      await s.wait(8);
    },
  },
  {
    name: 'the glass',
    run: async s => {
      s.person('louise').look('flapper');
      await s.wait(0.8);
      s.person('gary').look('glass_sign#sign');
      await s.wait(0.6);
      s.person('weber').look('flapper');
      await s.wait(7);
    },
  },
  {
    name: 'back',
    run: async s => {
      s.person('louise').look('gary');
      await s.wait(0.5);
      s.person('gary').look('louise');
      s.person('weber').look('louise');
      await s.wait(6);
    },
  },
];
