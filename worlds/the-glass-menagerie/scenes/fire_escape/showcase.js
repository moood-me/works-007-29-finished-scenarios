// Friday, seven o'clock, on the landing: Tom smokes and looks off over the alley; Jim, easy, hands in his pockets,
// looks at him; in the window Amanda, in her old yellow dress, beams at the caller. Then Jim notices the window and
// Tom follows his look; the Paradise's sign sputters; and they go back as they were.
return [
  {
    name: 'the landing',
    run: async s => {
      s.set('neon', 1);
      s.person('tom').look([-6, 1, 2.6]);
      s.person('jim').look('tom');
      s.person('amanda').look('jim');
      await s.wait(8);
    },
  },
  {
    name: 'the window',
    run: async s => {
      s.person('jim').look('amanda');
      await s.wait(1.2);
      s.person('tom').look('amanda');
      await s.wait(6);
    },
  },
  {
    name: 'the sign',
    run: async s => {
      for (const [k, t] of [[0.2, 0.15], [1, 0.3], [0.35, 0.12], [1, 0.25], [0.15, 0.4]]) {
        s.set('neon', k);
        await s.wait(t);
      }
      await s.move('neon', 1, { over: 0.6 });
      await s.wait(4);
    },
  },
  {
    name: 'back',
    run: async s => {
      s.person('jim').look('tom');
      await s.wait(1);
      s.person('tom').look([-6, 1, 2.6]);
      await s.wait(6);
    },
  },
];
