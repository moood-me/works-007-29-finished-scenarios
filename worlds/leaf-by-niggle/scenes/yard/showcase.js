// The yard after the storm: the Inspector of Houses before the shed's door, his book open, looks up from it past
// Niggle at the canvas inside; Niggle in the doorway, his brush still in his hand, looks at him; Parish at his own
// door looks up at the hole in his roof, not at them; Mrs Parish at the bedroom window. Then the Inspector looks down
// at his book and Niggle back at his Tree; the next storm comes over from the hills, Parish and the Inspector look up
// at it; back.
return [
  {
    name: 'the Inspector',
    run: async s => {
      s.set('storm', 0);
      s.person('niggle').look('inspector');
      s.person('inspector').look('shed_inside#canvas');
      s.person('parish').look('cottage#hole');
      s.person('mrs_parish').look('niggle');
      await s.wait(8);
    },
  },
  {
    name: 'the book',
    run: async s => {
      s.person('inspector').look('inspector#book');
      await s.wait(1.5);
      s.person('niggle').look('shed_inside#canvas');
      s.person('niggle').mood('angry');
      await s.wait(6);
    },
  },
  {
    name: 'the cloud',
    run: async s => {
      s.person('parish').look([-30, 120, 60]);
      s.person('inspector').look([-30, 120, 60]);
      s.person('niggle').mood('sad');
      await s.move('storm', 1, { over: 10 });
      await s.wait(3);
    },
  },
  {
    name: 'back',
    run: async s => {
      s.person('niggle').look('inspector');
      s.person('inspector').look('shed_inside#canvas');
      s.person('parish').look('cottage#hole');
      await s.move('storm', 0, { over: 5 });
      await s.wait(2);
    },
  },
];
