// Three o'clock in the office: she at the window, he just in; the rain comes on and she turns to him. Then the
// floodlights below go out and she sits down for the first time, he at the window; then he alone at his desk over the
// log, Robineau in the doorway.
return [
  {
    name: 'at the window',
    run: async s => {
      s.set('floods', 1);
      s.set('plane', 'gone');
      s.set('yard_roblet', 'none');
      s.set('riviere_spot', 'room');
      s.set('madame_spot', 'window');
      s.person('madame').here(true);
      s.person('robineau').here(false);
      s.person('madame').look('pane');
      s.person('riviere').look('madame');
      s.set('rain', 0.3);
      await s.wait(6);
    },
  },
  {
    name: 'she turns',
    run: async s => {
      s.move('rain', 1, { over: 5 });
      await s.wait(1.5);
      s.person('madame').look('riviere');
      await s.wait(6);
    },
  },
  {
    name: 'the floodlights out',
    run: async s => {
      s.move('floods', 0, { over: 4 });
      s.set('plane', 'standing');
      s.set('madame_spot', 'chair');
      s.set('riviere_spot', 'window');
      s.person('riviere').look('madame');
      s.person('madame').look('riviere');
      await s.wait(7);
    },
  },
  {
    name: 'the log',
    run: async s => {
      s.person('madame').here(false);
      s.set('riviere_spot', 'desk');
      s.person('riviere').look('desk_top#log');
      s.set('yard_roblet', 'hangar');
      s.person('robineau').here(true);
      s.person('robineau').look('riviere');
      await s.wait(7);
    },
  },
];
