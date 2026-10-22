// An evening in the flat: the room as it is (Laura at her glass, Amanda watching her, Tom by the door looking out at
// us); then the father's photograph draws their eyes — Tom's and Amanda's — and they go back.
return [
  {
    name: 'evening',
    run: async s => {
      s.set('lamp', 1);
      s.set('neon', 1);
      s.person('laura').look('shelf#unicorn');
      s.person('amanda').look('laura');
      s.person('tom').look([0, 0, 1.7]);
      await s.wait(9);
    },
  },
  {
    name: 'the photograph',
    run: async s => {
      s.person('tom').look('photo#face');
      await s.wait(1.2);
      s.person('amanda').look('photo#face');
      await s.wait(6);
    },
  },
  {
    name: 'back',
    run: async s => {
      s.person('amanda').look('laura');
      await s.wait(1);
      s.person('tom').look([0, 0, 1.7]);
      await s.wait(6);
    },
  },
];
