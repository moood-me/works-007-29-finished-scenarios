// The hollow's own little film, outside games: the night as it stands — the blizzard driving, the ground wind running,
// the red sash snapping on the upright shaft, the wormwood thrashing, everyone's breath torn away by the wind. Nikita
// sits huddled in the front of the sleigh, the master deep in its back, his hand on the bosom of his coat where the
// money is, his eyes on the workman; he looks round at the horse, up at the sash, and back; Nikita lifts his head to
// the horse and lowers it; a gust drives the snow harder, and eases.
return [
  { name: "hollow", run: async (s) => { await s.wait(8); } },
  {
    name: "glances",
    run: async (s) => {
      s.person("vasily").look("horse#head");
      await s.wait(2.5);
      s.person("vasily").look("shaft#sash");
      await s.wait(2.5);
      s.person("vasily").look("nikita");
      await s.wait(1);
      s.person("nikita").look("horse#head");
      await s.wait(3);
      s.person("nikita").look([-1.4, 2.6, 0.4]);
      await s.wait(2);
    },
  },
  {
    name: "gust",
    run: async (s) => {
      await s.move("storm", 1, { over: 4 });
      await s.wait(4);
      await s.move("storm", 0.85, { over: 6 });
    },
  },
];
