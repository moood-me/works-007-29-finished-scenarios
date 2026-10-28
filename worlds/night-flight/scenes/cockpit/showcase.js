// Fabien's night in three skies: the dusk over the steppe, the windows lighting up below; the storm, the instrument
// lamp lit; the climb out of it into the stars over the sea of cloud.
return [
  { name: 'dusk', run: async s => { await s.wait(10); } },
  {
    name: 'the storm',
    run: async s => {
      s.set('storm', 1);
      s.set('rain', 1);
      s.set('panel', 1);
      s.person('fabien').look([-8, 4.2, 1.9]);
      s.person('fabien').mood('thinking');
      s.person('radioman').look('fabien#head');
      await s.wait(10);
    },
  },
  {
    name: 'the stars',
    run: async s => {
      s.set('above', 1);
      s.set('rain', 0);
      s.person('fabien').look([-4, 2.5, 3.6]);
      s.person('fabien').mood('neutral');
      s.person('radioman').look([-1.5, 3.5, 4.2]);
      s.person('radioman').mood('surprised');
      await s.wait(10);
    },
  },
];
