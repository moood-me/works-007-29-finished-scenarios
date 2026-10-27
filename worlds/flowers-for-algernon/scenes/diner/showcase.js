// A Friday night at Halloran's: Joe's hand on Charlie's shoulder, Frank pointing at him, everyone laughing; then
// Frank looks round at Halloran over the counter (the joke passed on), Joe after him — and Charlie, left alone in it,
// looks down at his glass, the laugh gone off his face; then he looks up at Joe and smiles again.
return [
  {
    name: 'friday',
    run: async s => {
      s.person('charlie').look('frank');
      s.person('joe').look('charlie');
      s.person('frank').look('charlie');
      s.person('halloran').look('charlie');
      await s.wait(8);
    },
  },
  {
    name: 'over the counter',
    run: async s => {
      s.person('frank').look('halloran');
      await s.wait(0.6);
      s.person('halloran').look('frank');
      s.person('joe').look('frank');
      await s.wait(5);
    },
  },
  {
    name: 'his glass',
    run: async s => {
      s.person('charlie').look('charlie#beer');
      s.person('charlie').mood('sad');
      await s.wait(5);
      s.person('charlie').look('joe');
      await s.wait(0.5);
      s.person('charlie').mood('smile');
      await s.wait(5);
    },
  },
];
