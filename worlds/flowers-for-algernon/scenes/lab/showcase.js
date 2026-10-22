// An April morning in the laboratory: the room as it is (Charlie at the maze table, his hands on its edge, smiling
// round at Miss Kinnian; she smiles back; Dr Strauss watches him); then all three look down at Algernon in the maze —
// and back.
return [
  {
    name: 'morning',
    run: async s => {
      s.person('charlie').look('kinnian');
      s.person('kinnian').look('charlie');
      s.person('strauss').look('charlie');
      await s.wait(8);
    },
  },
  {
    name: 'algernon',
    run: async s => {
      s.person('charlie').look('algernon');
      await s.wait(0.8);
      s.person('kinnian').look('algernon');
      await s.wait(0.6);
      s.person('strauss').look('algernon');
      await s.wait(6);
    },
  },
  {
    name: 'back',
    run: async s => {
      s.person('charlie').look('kinnian');
      await s.wait(1);
      s.person('strauss').look('charlie');
      await s.wait(6);
    },
  },
];
