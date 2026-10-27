// A Friday after the launch, in the rain: the colonel has come in at the street door with the wall clock wrapped in
// sacking, hanging from his hand. Germán, who stood up from his machine when he came in, rests a hand on Agustín's
// machine under its cover and looks at him; Alfonso looks up at him from his machine, Álvaro sews. Then Álvaro looks up
// at the bundle, the colonel down at it; Alfonso glances at the street door; and back.
return [
  {
    name: 'Friday',
    run: async s => {
      s.set('rain', 1);
      s.set('bulb', 1);
      s.person('colonel').look('herman');
      s.person('herman').look('colonel');
      s.person('alfonso').look('colonel');
      s.person('alvaro').look('machine:2#needle');
      await s.wait(7);
    },
  },
  {
    name: 'the bundle',
    run: async s => {
      s.person('alvaro').look('colonel#hand_r');
      s.person('alvaro').mood('neutral');
      await s.wait(1.2);
      s.person('colonel').look('colonel#hand_r');
      s.person('colonel').mood('tired');
      await s.wait(1.5);
      s.person('herman').look('colonel#chest');
      s.person('alfonso').look('door#door');
      await s.wait(5);
    },
  },
  {
    name: 'back',
    run: async s => {
      s.person('colonel').look('herman');
      s.person('colonel').mood('neutral');
      s.person('herman').look('colonel');
      await s.wait(1);
      s.person('alfonso').look('colonel');
      s.person('alvaro').look('machine:2#needle');
      s.person('alvaro').mood('thinking');
      await s.wait(6);
    },
  },
];
