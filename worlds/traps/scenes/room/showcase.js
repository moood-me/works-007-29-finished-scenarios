// After the verdict, in the guest room: Traps on the edge of his bed, laughing up past the prosecutor in the doorway,
// the judge with his candle beaming, Kummer worn out behind Zorn's shoulder; then the laugh goes out of Traps and he
// looks down before him, thinking, while the old men still smile.
const UP = [0.7, 1.2, 1.5];
const DOOR = [1.2, 2.0, 1.7];
const DOWN = [-0.4, 1.8, 0.4];
return [
  {
    name: 'the doorway',
    run: async s => {
      s.person('traps').look(UP);
      s.person('traps').mood('laugh');
      await s.wait(8);
    },
  },
  {
    name: 'bravo',
    run: async s => {
      s.person('traps').look(DOOR);
      s.person('zorn').mood('laugh');
      await s.wait(3);
      s.person('judge').mood('laugh');
      s.person('kummer').mood('sad');
      await s.wait(4);
    },
  },
  {
    name: 'alone with it',
    run: async s => {
      s.person('zorn').mood('smile');
      s.person('judge').mood('smile');
      s.person('traps').mood('thinking');
      s.person('traps').look(DOWN);
      await s.wait(6);
      s.person('kummer').mood('tired');
      await s.wait(3);
    },
  },
];
