// The yard's own little film, outside games: they stand as they stand in the story — the snow and the ground wind
// going, the smoke from the neighbour's chimney, everyone's breath in the cold, the window's lamp trembling; the
// master on the top step, a hand at the bosom of his coat, keeps his eyes on Nikita; Nikita, holding the horse by
// the bridle, looks up at him; the wife in the door looks from her husband to Nikita and back; the master glances
// round at her, and back to Nikita; the snow thickens and eases.
return [
  { name: "yard", run: async (s) => { await s.wait(8); } },
  {
    name: "glance",
    run: async (s) => {
      s.person("praskovya").look("nikita");
      await s.wait(2.5);
      s.person("praskovya").look("vasily");
      await s.wait(1);
      s.person("vasily").look("praskovya");
      await s.wait(3);
      s.person("vasily").look("nikita");
      await s.wait(3);
    },
  },
  {
    name: "snow",
    run: async (s) => {
      await s.move("snow", 1, { over: 6 });
      await s.wait(4);
      await s.move("snow", 0.9, { over: 6 });
    },
  },
];
