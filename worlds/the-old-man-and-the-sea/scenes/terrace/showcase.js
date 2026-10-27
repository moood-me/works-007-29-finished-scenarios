// The Terrace at sundown: the young fishermen laughing at the old man, the boy asking to go with him again, the old
// man sending him back to his lucky boat; the boy looks round at his father at the counter, the father looks away to
// the bay; the light goes to the blue evening; and back.
return [
  { name: 'sundown', run: async s => { s.set('dusk', 0); await s.wait(6); } },
  {
    name: 'the boy asks',
    run: async s => {
      await s.person('manolin').say("I could go with you again. We've made money.");
      s.person('santiago').mood('neutral');
      await s.person('santiago').say("No. You're with a lucky boat. Stay with them.");
      await s.wait(1.5);
    },
  },
  {
    name: 'the father',
    run: async s => {
      s.person('manolin').look('father');
      s.person('manolin').mood('sad');
      await s.wait(2);
      s.person('father').look([20, 120, 0]);
      s.person('santiago').look([12, 200, 0]);
      await s.wait(4);
    },
  },
  {
    name: 'evening',
    run: async s => {
      await s.move('dusk', 1, { over: 12 });
      await s.wait(4);
    },
  },
  {
    name: 'sundown again',
    run: async s => {
      s.person('manolin').look('santiago');
      s.person('manolin').mood('neutral');
      s.person('father').look('manolin');
      s.person('santiago').look('manolin');
      s.person('santiago').mood('smile');
      await s.move('dusk', 0, { over: 5 });
    },
  },
];
