// A morning at the shop window: Josie outside, her palm on the glass; Klara inside on the window's floor, her palm
// against Josie's through the glass; the Manager watching from inside. The Manager looks at the girl, then back at
// Klara; a cloud crosses the Sun and the squares of light go and come back; Josie looks round at the street behind
// her (where the car waits) and back to Klara.
// where Josie looks round to: over her shoulder, out along the street to the right, behind the viewer
const STREET = [4.5, -1.5, 1.3];
return [
  {
    name: 'the palm',
    run: async s => {
      s.set('sun', 1);
      s.person('josie').look('klara');
      s.person('josie').mood('smile');
      s.person('klara').look('josie');
      s.person('manager').look('klara');
      s.person('manager').mood('thinking');
      await s.wait(7);
    },
  },
  {
    name: 'the manager',
    run: async s => {
      s.person('manager').look('josie');
      await s.wait(4);
      s.person('manager').look('klara');
      s.person('manager').mood('tired');
      await s.wait(4);
    },
  },
  {
    name: 'a cloud',
    run: async s => {
      await s.move('sun', 0.3, { over: 3 });
      await s.wait(2);
      await s.move('sun', 1, { over: 4 });
    },
  },
  {
    name: 'called away',
    run: async s => {
      s.person('josie').look(STREET);
      s.person('josie').mood('surprised');
      await s.wait(4);
      s.person('josie').look('klara');
      s.person('josie').mood('smile');
      await s.wait(5);
    },
  },
];
