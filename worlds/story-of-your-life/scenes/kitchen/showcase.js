// A Friday morning in the kitchen: her hand on the sleeping bag she has just taken down, the daughter laughs at the
// stepladder under it; her mother watches her. The daughter glances out at the car waiting under the window; her
// mother's look goes to the stepladder; then each back to where they were.
return [
  {
    name: 'the stepladder',
    run: async s => {
      s.person('daughter').look('stepladder#top');
      s.person('daughter').mood('laugh');
      s.person('louise').look('daughter');
      s.person('louise').mood('thinking');
      await s.wait(8);
    },
  },
  {
    name: 'the car',
    run: async s => {
      s.person('daughter').look('car');
      s.person('daughter').mood('smile');
      await s.wait(1);
      s.person('louise').mood('sad');
      await s.wait(6);
    },
  },
  {
    name: 'her mother',
    run: async s => {
      s.person('daughter').look('stepladder#top');
      await s.wait(0.8);
      s.person('louise').look('stepladder#top');
      await s.wait(6);
    },
  },
  {
    name: 'back',
    run: async s => {
      s.person('louise').look('daughter');
      s.person('daughter').mood('laugh');
      await s.wait(0.8);
      s.person('louise').mood('smile');
      await s.wait(6);
    },
  },
];
