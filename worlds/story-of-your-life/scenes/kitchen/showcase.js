// A Friday morning in the kitchen: her hand on the stepladder in passing, the daughter laughs down at it; her mother
// watches her. The mother's look goes to the stepladder too; the daughter looks up at her; then out at the car
// waiting under the window; then back to the stepladder under her hand.
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
    name: 'her mother',
    run: async s => {
      s.person('louise').look('stepladder#top');
      await s.wait(1.2);
      s.person('daughter').look('louise');
      s.person('daughter').mood('smile');
      await s.wait(6);
    },
  },
  {
    name: 'the car',
    run: async s => {
      s.person('daughter').look('car');
      await s.wait(0.8);
      s.person('louise').look('daughter');
      s.person('louise').mood('sad');
      await s.wait(6);
    },
  },
  {
    name: 'back',
    run: async s => {
      s.person('daughter').look('stepladder#top');
      s.person('daughter').mood('laugh');
      await s.wait(0.8);
      s.person('louise').mood('smile');
      await s.wait(6);
    },
  },
];
