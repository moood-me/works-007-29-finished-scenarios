// Far out on the Gulf with the fish on the line: noon, the old man holding the line and talking to the fish; the
// night coming, stars and the glow of Havana, the water glowing round the skiff; the third morning, the fish up
// alongside, longer than the skiff; and back to the deep.
return [
  { name: 'noon', run: async s => { s.set('night', 0); s.set('fish', 0); await s.wait(6); } },
  {
    name: 'to the fish',
    run: async s => {
      await s.person('santiago').say('Fish, I love you and respect you very much. But I will kill you dead before this day ends.');
      await s.wait(2);
    },
  },
  {
    name: 'night',
    run: async s => {
      await s.move('night', 1, { over: 12 });
      s.person('santiago').look([-30, 400, 0]);
      await s.person('santiago').say('I wish I had the boy.');
      await s.wait(4);
    },
  },
  {
    name: 'the third morning',
    run: async s => {
      await s.move('night', 0, { over: 8 });
      s.person('santiago').look('fish');
      s.person('santiago').mood('surprised');
      await s.move('fish', 1, { over: 6 });
      s.person('santiago').mood('thinking');
      await s.person('santiago').say('He is two feet longer than the skiff.');
      await s.wait(4);
    },
  },
  {
    name: 'the deep',
    run: async s => {
      s.person('santiago').look({ on: 'boat', at: [0.35, -2.06, 0] });
      await s.move('fish', 0, { over: 5 });
      await s.wait(2);
    },
  },
];
