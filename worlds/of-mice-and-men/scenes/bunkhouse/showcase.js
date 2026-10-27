// The bunkhouse on Friday evening: the four of them under the light — George at his solitaire, talking to Slim, Slim
// watching him; Lennie and Candy with the old dog. George's eyes go down to his cards and Lennie's to Slim (the pups);
// Candy looks up at the two of them — the moment before Carlson comes in; and back.
return [
  { name: 'evening', run: async s => { await s.wait(8); } },
  {
    name: 'the cards',
    run: async s => {
      s.person('george').look([-1.1, 4.4, 0.76]);
      await s.wait(0.6);
      s.person('lennie').look('slim');
      await s.wait(0.8);
      s.person('candy').look('george');
      await s.wait(6);
    },
  },
  {
    name: 'back',
    run: async s => {
      s.person('candy').look('dog#head');
      await s.wait(0.5);
      s.person('george').look('slim');
      s.person('lennie').look('dog#head');
      await s.wait(5);
    },
  },
];
