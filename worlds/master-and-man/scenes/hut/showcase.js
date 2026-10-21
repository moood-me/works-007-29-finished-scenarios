// The hut's own little film, outside games: the evening as it stands — the lamp swaying a very little over the table,
// the samovar steaming, the fire breathing in the stove's mouth, the clock ticking, the snow going past the window.
// The old man leans over the table to his guest; the son by the door looks from the master to Nikita and back; Nikita
// lifts his eyes to the master for a moment and lowers them; the master looks round the room as a man does who is
// at ease in it.
return [
  { name: "hut", run: async (s) => { await s.wait(8); } },
  {
    name: "glances",
    run: async (s) => {
      s.person("son").look("nikita");
      await s.wait(2.5);
      s.person("son").look("vasily");
      await s.wait(1);
      s.person("nikita").look("vasily");
      await s.wait(2.5);
      s.person("nikita").look([-0.6, 3.4, 0.4]);
      await s.wait(1.5);
      s.person("vasily").look("samovar");
      await s.wait(2.5);
      s.person("vasily").look("old_man");
      await s.wait(3);
    },
  },
  { name: "evening", run: async (s) => { await s.wait(8); } },
];
