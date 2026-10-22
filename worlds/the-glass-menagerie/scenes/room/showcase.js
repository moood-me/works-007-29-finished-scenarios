// An evening in the flat: the room as it is (Laura by her glass, eyes lowered; Amanda watching Tom; Tom by the door
// looking out at us); then the father's photograph draws their eyes — Tom's and Amanda's — and they go back.
return [
  {
    name: 'evening',
    run: async s => {
      s.set('lamp', 1);
      s.set('neon', 1);
      s.person('laura').look([-1.75, 2.8, 1.15]);
      s.person('amanda').look('tom');
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
      s.person('amanda').look('tom');
      await s.wait(1);
      s.person('tom').look([0, 0, 1.7]);
      await s.wait(6);
    },
  },
];
