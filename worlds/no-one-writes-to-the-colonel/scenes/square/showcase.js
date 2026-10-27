// A Friday at midday in the rain: the launch in at the landing stage, smoke from her funnel; the colonel under his
// torn umbrella before the post office's wicket, the doctor under the eave with the newspapers, Don Sabas under his
// whole one; the postmaster at the wicket, the policeman on the barracks' balcony. The colonel turns his eyes to the
// wicket, then to the doctor, then up to the balcony, where the policeman looks down at him; then back to nothing.
return [
  {
    name: 'the launch',
    run: async s => {
      s.set('rain', 1);
      s.set('smoke', 1);
      s.person('colonel').look([-1.2, 0, 1.4]);
      s.person('colonel').mood('thinking');
      s.person('sabas').look('colonel');
      s.person('doctor').look('colonel');
      s.person('postmaster').look('colonel');
      s.person('policeman').look('colonel');
      await s.wait(7);
    },
  },
  {
    name: 'nothing',
    run: async s => {
      s.person('colonel').look('postmaster');
      await s.wait(1.2);
      s.person('postmaster').look([-2.7, 8.4, 0.9]);
      await s.wait(3);
      s.person('colonel').look('doctor');
      s.person('colonel').mood('neutral');
      await s.wait(4);
    },
  },
  {
    name: 'the balcony',
    run: async s => {
      s.person('colonel').look('policeman');
      s.person('colonel').mood('neutral');
      await s.wait(1);
      s.person('sabas').look('policeman');
      s.person('sabas').mood('neutral');
      await s.wait(5);
    },
  },
  {
    name: 'back',
    run: async s => {
      s.person('colonel').look([-1.2, 0, 1.4]);
      s.person('colonel').mood('thinking');
      s.person('sabas').look('colonel');
      s.person('sabas').mood('smile');
      s.person('postmaster').look('colonel');
      await s.wait(6);
    },
  },
];
