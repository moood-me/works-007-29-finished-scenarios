// An April morning in the laboratory: the room as it is (Charlie at the maze table, his hands on its edge, smiling
// down at Algernon; Miss Kinnian and Dr Strauss watch him); over his head the two of them look at each other; then
// all three look down at Algernon in the maze.
return [
  {
    name: 'morning',
    run: async s => {
      s.person('charlie').look('algernon');
      s.person('kinnian').look('charlie');
      s.person('strauss').look('charlie');
      await s.wait(8);
    },
  },
  {
    name: 'over his head',
    run: async s => {
      s.person('kinnian').look('strauss');
      await s.wait(0.7);
      s.person('strauss').look('kinnian');
      await s.wait(6);
    },
  },
  {
    name: 'algernon',
    run: async s => {
      s.person('kinnian').look('algernon');
      await s.wait(0.6);
      s.person('strauss').look('algernon');
      await s.wait(6);
    },
  },
];
