// The bunkhouse on Friday evening: the four of them under the light — George at his solitaire, Slim watching him,
// Lennie and Candy with the old dog; then George looks up at Slim, and Lennie with him, Candy at the two of them —
// the moment before Carlson comes in; and back to the cards and the dog.
return [
  { name: 'evening', run: async s => { await s.wait(8); } },
  {
    name: 'they look up',
    run: async s => {
      s.person('george').look('slim');
      await s.wait(0.6);
      s.person('lennie').look('slim');
      await s.wait(0.8);
      s.person('candy').look('george');
      await s.wait(6);
    },
  },
  {
    name: 'back to the cards',
    run: async s => {
      s.person('candy').look('dog#head');
      await s.wait(0.5);
      s.person('george').look([-0.6, 4.4, 0.76]);
      s.person('lennie').look('dog#head');
      await s.wait(5);
    },
  },
];
