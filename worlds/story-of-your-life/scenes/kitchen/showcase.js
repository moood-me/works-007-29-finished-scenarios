// A Friday morning in the kitchen: mother and daughter look at each other; the daughter's look goes down to the
// stepladder under her hand, her mother's after it; the daughter glances out at the waiting car; back to each other.
return [
  {
    name: 'morning',
    run: async s => {
      s.person('louise').look('daughter');
      s.person('daughter').look('louise');
      await s.wait(8);
    },
  },
  {
    name: 'the stepladder',
    run: async s => {
      s.person('daughter').look('stepladder#top');
      await s.wait(0.9);
      s.person('louise').look('stepladder#top');
      await s.wait(6);
    },
  },
  {
    name: 'the car',
    run: async s => {
      s.person('daughter').look('car');
      await s.wait(0.7);
      s.person('louise').look('daughter');
      s.person('louise').mood('sad');
      await s.wait(6);
    },
  },
  {
    name: 'back',
    run: async s => {
      s.person('daughter').look('louise');
      await s.wait(0.6);
      s.person('louise').mood('smile');
      await s.wait(6);
      s.person('louise').mood('thinking');
    },
  },
];
