// A late afternoon in Josie's room: Josie on the edge of her bed drawing; Klara by the window, watching her; the
// Mother in the doorway. Josie looks up at Klara and smiles; a cloud crosses the Sun and the light on the bed goes and
// comes back; Josie goes back to her drawing.
return [
  {
    name: 'afternoon',
    run: async s => {
      s.set('sun', 1);
      s.person('josie').look('josie#sketchbook');
      s.person('josie').mood('neutral');
      s.person('klara').look('josie');
      s.person('mother').look('josie');
      await s.wait(7);
    },
  },
  {
    name: 'she looks up',
    run: async s => {
      s.person('josie').look('klara');
      s.person('josie').mood('smile');
      await s.wait(6);
    },
  },
  {
    name: 'a cloud',
    run: async s => {
      await s.move('sun', 0.35, { over: 3 });
      await s.wait(2);
      await s.move('sun', 1, { over: 4 });
    },
  },
  {
    name: 'drawing',
    run: async s => {
      s.person('josie').look('josie#sketchbook');
      s.person('josie').mood('neutral');
      await s.wait(6);
    },
  },
];
