// The night of the prologue: they dance slowly on the deck; she looks past him into the dark yard, he at her. He
// looks out over her shoulder into the yard and she at him; he looks back at her, grave, the question coming, and
// her look goes past him again; then each to the other, smiling.
return [
  {
    name: 'the dance',
    run: async s => {
      s.person('louise').look([-1.5, 1.0, 1.8]);
      s.person('louise').mood('thinking');
      s.person('gary').look('louise');
      s.person('gary').mood('smile');
      await s.wait(8);
    },
  },
  {
    name: 'over her shoulder',
    run: async s => {
      s.person('gary').look([-0.6, 0.6, 1.9]);
      await s.wait(0.8);
      s.person('louise').look('gary');
      s.person('louise').mood('smile');
      await s.wait(6);
    },
  },
  {
    name: 'the question coming',
    run: async s => {
      s.person('gary').look('louise');
      s.person('gary').mood('neutral');
      await s.wait(1.2);
      s.person('louise').look([-1.5, 1.0, 1.8]);
      s.person('louise').mood('sad');
      await s.wait(6);
    },
  },
  {
    name: 'to each other',
    run: async s => {
      s.person('louise').look('gary');
      await s.wait(0.8);
      s.person('louise').mood('smile');
      s.person('gary').mood('smile');
      await s.wait(6);
    },
  },
];
