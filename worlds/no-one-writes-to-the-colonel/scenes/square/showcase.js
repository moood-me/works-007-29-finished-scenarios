// A Friday at midday in the rain: the launch in at the landing stage, smoke from her funnel; the colonel under his
// torn umbrella before the post office's wicket, the doctor by the eave with the newspapers, Don Sabas under his whole
// one; the postmaster at the wicket, the policeman on the barracks' balcony. Nothing has come: the postmaster looks
// down at his letters, the colonel at the ground; then he looks at Don Sabas, who smiles at him; then back to nothing.
// (The colonel looks only where his head and waist turn to from where he stands: the wicket and the balcony are
// behind him.)
return [
  {
    name: 'the launch',
    run: async s => {
      s.set('rain', 1);
      s.set('smoke', 1);
      s.person('colonel').look([-1.2, 0, 1.4]);
      s.person('colonel').mood('thinking');
      s.person('sabas').look('colonel');
      s.person('sabas').mood('smile');
      s.person('doctor').look('colonel');
      s.person('postmaster').look('colonel');
      s.person('policeman').look('colonel');
      await s.wait(7);
    },
  },
  {
    name: 'nothing',
    run: async s => {
      s.person('postmaster').look([-2.7, 7.6, 0.9]);
      await s.wait(1.2);
      s.person('colonel').look([-0.6, 3.2, 0.6]);
      s.person('colonel').mood('tired');
      await s.wait(5);
    },
  },
  {
    name: 'Don Sabas',
    run: async s => {
      s.person('colonel').look('sabas');
      s.person('colonel').mood('neutral');
      await s.wait(1);
      s.person('sabas').mood('laugh');
      await s.wait(4);
      s.person('sabas').mood('smile');
      await s.wait(2);
    },
  },
  {
    name: 'back',
    run: async s => {
      s.person('colonel').look([-1.2, 0, 1.4]);
      s.person('colonel').mood('thinking');
      s.person('postmaster').look('colonel');
      await s.wait(6);
    },
  },
];
