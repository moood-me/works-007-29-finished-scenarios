// An evening in the kitchen: the three of them as they are (Mom folding at the table, her eyes on Jack; Jack leaning
// at the table over Laohu; Dad in from the hall, hands in his pockets, watching her); then Jack looks up at his
// mother, and she at the tiger; then back. Nobody moves but a look; the paper animals breathe and stir.
// Then a year on, by day (3.1): the kitchen packed, the boxes, Dad taping the one on the table, Jack by him; the suit
// on its hook; the cranes and frogs on the bare sill. Then the day the whole house wakes (3.2): the cranes up on the
// curtains, frogs on the table and the floor, the shark in the sink, and Dad with a frog on his palm.
return [
  {
    name: 'evening',
    run: async s => {
      s.set('lamp', 1);
      s.person('mom').look('jack');
      s.person('jack').look('laohu');
      s.person('dad').look('mom');
      await s.wait(8);
    },
  },
  {
    name: 'he looks up',
    run: async s => {
      s.person('jack').look('mom');
      await s.wait(1.2);
      s.person('mom').look('laohu');
      await s.wait(6);
    },
  },
  {
    name: 'back',
    run: async s => {
      s.person('mom').look('jack');
      await s.wait(0.8);
      s.person('jack').look('laohu');
      await s.wait(6);
    },
  },
  {
    name: 'a year on',
    run: async s => {
      const cast = s.kit.cast.characters;
      await s.cut({
        day: 1, lamp: 0, packed: true, menagerie: 'sill', suit_bag: true,
        mom_here: false,
        dad_wear: { ...cast.dad_grey, parts: [] }, dad_a: 0.15, dad_d: 2.85, dad_turn: 180, dad_do: 'stand',
        dad_look: 'table_box#box', dad_mood: 'neutral',
        jack_wear: { ...cast.jack_grown, parts: [] }, jack_a: -1.15, jack_d: 2.45, jack_turn: 100, jack_reach: null,
        jack_look: 'dad', jack_mood: 'neutral',
      });
      await s.wait(6);
      s.person('jack').look('cranes#cranes');
      await s.wait(1);
      s.person('dad').look('cranes#cranes');
      await s.wait(5);
    },
  },
  {
    name: 'the house wakes',
    run: async s => {
      await s.cut({
        menagerie: 'awake', suit_bag: false, jack_here: false,
        dad_a: 1.35, dad_d: 3.05, dad_turn: 235, dad_do: 'offer_hand', dad_with: ['frog'], dad_look: 'dad#frog',
        dad_mood: 'surprised',
      });
      await s.wait(4);
      s.person('dad').look('cranes#cranes');
      await s.wait(5);
    },
  },
];
