// That country: Niggle under his Tree, his hand up to the first leaf; Parish, without his stick, by the ground he
// has begun to dig, looking at the Tree for the first time; the Guide on the path to the Mountains, waiting. Then
// Niggle and Parish look at each other; the mist at the Tree's edges lifts, Niggle looks away to the Mountains and
// their snow burns; back.
return [
  {
    name: 'the Tree',
    run: async s => {
      s.set('mist', 1);
      s.set('glow', 0);
      s.person('niggle').look('tree#leaf');
      s.person('parish').look('tree');
      s.person('guide').look('niggle');
      await s.wait(8);
    },
  },
  {
    name: 'neighbours',
    run: async s => {
      s.person('niggle').look('parish');
      await s.wait(1.2);
      s.person('parish').look('niggle');
      await s.wait(6);
    },
  },
  {
    name: 'the Mountains',
    run: async s => {
      s.person('niggle').look([60, 900, 260]);
      s.person('parish').look('tree');
      await s.all(s.move('mist', 0.25, { over: 8 }), s.move('glow', 1, { over: 8 }));
      await s.wait(4);
    },
  },
  {
    name: 'back',
    run: async s => {
      s.person('niggle').look('tree#leaf');
      await s.all(s.move('mist', 1, { over: 4 }), s.move('glow', 0, { over: 4 }));
      await s.wait(3);
    },
  },
];
