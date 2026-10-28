// Supper by candlelight: Traps beaming across the table at the prosecutor's empty place, Kummer bent to his ear,
// Pile over his soup with his knife and fork up, the judge smiling down the table; then Traps half turns his eyes to
// his defender (as far as his face still reads), the defender's worry, Traps's smile back to the table.
const ACROSS = [0.5, 0.88, 1.2];
const DEFENDER = [-0.15, 2.2, 1.3];
return [
  {
    name: 'supper',
    run: async s => {
      s.person('traps').look(ACROSS);
      s.person('traps').mood('smile');
      s.person('kummer').mood('afraid');
      await s.wait(8);
    },
  },
  {
    name: 'the whisper',
    run: async s => {
      s.person('traps').look(DEFENDER);
      s.person('traps').mood('surprised');
      await s.wait(2.5);
      s.person('traps').mood('laugh');
      s.person('kummer').mood('sad');
      await s.wait(3);
      s.person('traps').look(ACROSS);
      s.person('traps').mood('smile');
      await s.wait(1.5);
      s.person('kummer').mood('afraid');
      await s.wait(4);
    },
  },
];
